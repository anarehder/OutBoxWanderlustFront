import OutboxLogo from "../../components/OutboxLogo.js";
import { TicketsPageContainer, GifContainer, TicketsAll, Tickets, Filter, OneTicket, Voltar, Hoteis } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import gif from "../../assets/images/loading-2.gif";
import voo from "../../assets/images/aviao1.png";
import axios from "axios";

export default function TicketsPage() {
    const { cityID } = useParams();
    const navigate = useNavigate();
    const [listaPassagens, setListaPassagens] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [values, setValues] = useState("");
    const [chooseMin, setChooseMin] = useState(0);
    const [chooseMax, setChooseMax] = useState(1000000);
    let destino, min, max;
    
    useEffect(() => {
        setCarregando(true);
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/tickets/city/${cityID}`);
        promise.then(resposta => {
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
        if (chooseMax === "zero") {
            setChooseMax(max);
        }
    }

    function handleMax(event) {
        setChooseMax(event.target.value);
        if (chooseMin === "zero") {
            setChooseMin(min);
        }
    }

    if (listaPassagens.length !== 0) {
        destino = listaPassagens[0].destiny;
        min = Number(values[0].min) - 100;
        max = Number(values[0].max) + 100;
    }

    function verDetalhes(id) {
        navigate("/tickets/city/" + id);
    }  

    const filtroTickets = listaPassagens.filter((passagem) => {
        return passagem.price >= chooseMin && passagem.price <= chooseMax;
    });

    return (
        <TicketsPageContainer>
            <OutboxLogo />
            <Link to={"/"}>
                <Voltar> Home </Voltar>
            </Link>
            <Link to={"/hotels/"+cityID}>
                <Hoteis> Hoteis </Hoteis>
            </Link>
            {carregando === true ? <GifContainer> <img src={gif} alt="gif" /></GifContainer> :
                <>
                    <h1> Passagens para {destino}</h1>
                    <TicketsAll>
                        <Filter> FILTROS
                            <form>
                                <label htmlFor="pmin">Preço Mínimo</label>
                                <input type="range" id="pmin" name="pmin" min={min} max={max} onChange={handleMin} />
                                <label htmlFor="pmax">Preço Máximo</label>
                                <input type="range" id="pmax" name="pmax" min={min} max={max} onChange={handleMax} />
                            </form>                            
                        </Filter>
                        <Tickets>
                            {filtroTickets.map((item) =>
                                <OneTicket key={item.id}>
                                    <img src={voo} alt="aviao" onClick={() => verDetalhes(item.id)} />
                                    <h2> Data Partida: {new Date(item.depDate1).getDate()}/{new Date(item.depDate1).getMonth()}/{new Date(item.depDate1).getFullYear()}</h2>
                                    <h2> Hora Partida: {new Date(item.depDate1).getUTCHours()}h {new Date(item.depDate1).getMinutes()} min</h2>
                                    <h2> Preço: R$ {item.price.replace(".", ",")}</h2>
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
