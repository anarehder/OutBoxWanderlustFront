import OutboxLogo from "../../components/OutboxLogo.js";
import { TicketsPageContainer, GifContainer, TicketsAll, Tickets, Filter, OneTicket } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import gif from "../../assets/images/loading-2.gif";
import voo from "../../assets/images/aviao1.png";
import axios from "axios";

export default function HomePage() {
    const { cityID } = useParams();
    const navigate = useNavigate();
    const [listaPassagens, setListaPassagens] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [values, setValues] = useState("");
    const [chooseMin, setChooseMin] = useState("");
    const [chooseMax, setChooseMax] = useState("");
    let destino, min, max;

    useEffect(() => {
        setCarregando(true);
        let urlFinal;
        if (!chooseMax && !chooseMin){
            urlFinal= `${process.env.REACT_APP_API_URL}/tickets/city/${cityID}`;
        }
        const promise = axios.get(urlFinal);
        promise.then(resposta => {
            console.log(resposta.data)
            setListaPassagens(resposta.data[0]);
            setValues(resposta.data[1]);
            setCarregando(false);
        })
        promise.catch(erro => {
            alert(erro.response.data);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleMin(event) {
        setChooseMin(event.target.value);
    }
    
    function handleMax(event) {
        setChooseMax(event.target.value);
    }
    if (listaPassagens.length !== 0){
        destino = listaPassagens[0].destiny;
        min = values[0].min;
        max = values[0].max;
    }
    
    function verDetalhes (id){
        navigate("/tickets/city/" + id);
    }

    return (
        <TicketsPageContainer>
            <OutboxLogo />
            {carregando === true ? <GifContainer> <img src={gif} alt="gif" /></GifContainer> :
                <>
                    <h1> Passagens para {destino}</h1>
                    <TicketsAll>
                        <Filter> MENU
                            <form action="/action_page.php">
                                <label htmlFor="pmin">Preço Mínimo</label>
                                <input type="range" id="pmin" name="pmin" min={min} max={max} onChange={handleMin}/>
                                <label htmlFor="pmax">Preço Máximo</label>
                                <input type="range" id="pmax" name="pmax" min={min} max={max} onChange={handleMax} />
                                <button type="submit"> Filtrar </button>
                            </form>
                        </Filter>
                        <Tickets>
                            {listaPassagens.map((item) =>
                                <OneTicket key={item.id}>
                                    <img src={voo} alt="aviao" onClick={() => verDetalhes(item.id)}/>
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
