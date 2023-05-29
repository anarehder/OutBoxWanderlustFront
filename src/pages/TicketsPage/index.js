import OutboxLogo from "../../components/OutboxLogo.js";
import { TicketsPageContainer, GifContainer, TicketsAll, Tickets, Filter, OneTicket } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { CityContext } from "../../contexts/CityContext.js";
import gif from "../../assets/images/loading-2.gif";
import voo from "../../assets/images/aviao1.png"
import axios from "axios";

export default function HomePage() {
    const { cityID } = useParams();
    const [city,] = useContext(CityContext);
    const [listaPassagens, setListaPassagens] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [cityName, setCityName] = useState("");

    const [minValue, setMinValue] = useState("");
    const [maxValue, setMaxValue] = useState("");

    useEffect(() => {
        setCarregando(true);
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/tickets/city/${cityID}`);
        promise.then(resposta => {
            setListaPassagens(resposta.data);
            setCarregando(false);
            console.log(listaPassagens)
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
                    <h1> Passagens para {city}</h1>
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
                                    <h2> Data e Hora</h2>
                                    <h2> Preco </h2>
                                    <h2 >Local Partida</h2>
                                </OneTicket>
                            )}
                        </Tickets>
                    </TicketsAll>
                </>
            }
        </TicketsPageContainer >
    )
}
