import OutboxLogo from "../../components/OutboxLogo.js";
import { TicketsPageContainer, GifContainer, TicketsAll, Tickets, Filter, OneTicket } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { CityContext } from "../../contexts/CityContext.js";
import gif from "../../assets/images/loading-2.gif";
import voo from "../../assets/images/aviao1.png";
import axios from "axios";
import dayjs from "dayjs";

export default function HomePage() {
    const { cityID } = useParams();
    const [city,] = useContext(CityContext);
    const [listaPassagens, setListaPassagens] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [cityName, setCityName] = useState("");
    const day = dayjs();

    const [minValue, setMinValue] = useState("");
    const [maxValue, setMaxValue] = useState("");

    //const teste = listaPassagens[0].depDate1;
    //const teste2 = dayjs(teste.format('DD-MM-YYYY HH:mm'));
    //console.log(teste2);

    useEffect(() => {
        setCarregando(true);
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/tickets/city/${cityID}`);
        promise.then(resposta => {
            setListaPassagens(resposta.data);
            setCityName(resposta.data[0].destiny);
            setCarregando(false);
            const teste = resposta.data[0].depDate1;
            const data = new Date(teste);
            const data2 = `${new Date(teste).getDate()}/${new Date(teste).getMonth()}/${new Date(teste).getFullYear()}`;
            const hour = `${data.getHours()}:${data.getMinutes()}`;
            console.log(data2, hour)
        })
        promise.catch(erro => {
            alert(erro.response.data);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <TicketsPageContainer>
            <OutboxLogo />
            {carregando === true ? <GifContainer> <img src={gif} alt="gif" /></GifContainer> :
                <>
                    <h1> Passagens para {cityName}</h1>
                    <TicketsAll>
                        <Filter> MENU
                            <form action="/action_page.php">
                                <label for="vol">Preço Mínimo</label>
                                <input type="range" id="pmin" name="pmin" min="0" max="50" />
                                <label for="vol">Preço Máximo</label>
                                <input type="range" id="pmax" name="pmax" min="0" max="50" />
                                <button type="submit"> Filtrar </button>
                            </form>
                        </Filter>
                        <Tickets>
                            {listaPassagens.map((item) =>
                                <OneTicket>
                                    <img src={voo} alt="aviao" key={item.id} />
                                    <h2> Data Partida: {new Date(item.depDate1).getDate()}/{new Date(item.depDate1).getMonth()}/{new Date(item.depDate1).getFullYear()}</h2>
                                    <h2> Hora Partida: {new Date(item.depDate1).getUTCHours()}h {new Date(item.depDate1).getMinutes()} min</h2>
                                    <h2> Preço: R$ {item.price.replace(".",",")}</h2>
                                    <h2 >Local Partida: {item.origin}</h2>
                                    <h2 >Classe: {item.class}</h2>
                                </OneTicket>
                            )}
                        </Tickets>
                    </TicketsAll>
                </>
            }
        </TicketsPageContainer >
    )
}
