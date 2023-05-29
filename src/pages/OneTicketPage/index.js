import OutboxLogo from "../../components/OutboxLogo.js";
import { TicketsPageContainer, GifContainer, TicketsAll, Tickets, OneTicket } from "./styled";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import gif from "../../assets/images/loading-2.gif";
import voo from "../../assets/images/aviao1.png";
import axios from "axios";

export default function OneTicketPage() {
    const { ticketID } = useParams();
    const [passagem, setPassagem] = useState([]);
    const [carregando, setCarregando] = useState(false);
    let destino, cidade;

    useEffect(() => {
        setCarregando(true);
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/tickets/id/${ticketID}`);
        promise.then(resposta => {
            console.log(resposta.data[0]);
            setPassagem(resposta.data[0]);
            setCarregando(false);
        })
        promise.catch(erro => {
            alert(erro.response.data);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (passagem.length !== 0) {
        destino = passagem.destiny;
        cidade = passagem.destinyID;
    }

    return (
        <TicketsPageContainer>
            <OutboxLogo />
            {carregando === true ? <GifContainer> <img src={gif} alt="gif" /></GifContainer> :
                <>
                    <Link to={`/tickets/${cidade}`}>
                        <button> Voltar </button>
                    </Link>
                    <h1> Passagem para {destino}</h1>
                    <TicketsAll>
                        <Tickets>
                            <OneTicket >
                                <img src={voo} alt="aviao" />
                                <h2> Data Partida: {new Date(passagem.depDate1).getDate()}/{new Date(passagem.depDate1).getMonth()}/{new Date(passagem.depDate1).getFullYear()}</h2>
                                <h2> Hora Partida: {new Date(passagem.depDate1).getUTCHours()}h {new Date(passagem.depDate1).getMinutes()} min</h2>
                                <h2> Data Chegada: {new Date(passagem.arrDate1).getDate()}/{new Date(passagem.arrDate1).getMonth()}/{new Date(passagem.arrDate1).getFullYear()}</h2>
                                <h2> Hora Chegada: {new Date(passagem.arrDate1).getUTCHours()}h {new Date(passagem.arrDate1).getMinutes()} min</h2>
                                {/* <h2> Preço: R$ {passagem.price.replace(".", ",")}</h2> */}
                                <h2> Preço: R$ {passagem.price}</h2>
                                <h2 >Local Partida: {passagem.origin}</h2>
                                <h2 >Classe: {passagem.class}</h2>
                            </OneTicket>
                        </Tickets>
                    </TicketsAll>
                </>
            }
        </TicketsPageContainer >
    )
}
