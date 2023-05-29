import OutboxLogo from "../../components/OutboxLogo.js";
import { Imagens, TicketsPageContainer, GifContainer, TicketsAll, Tickets, OneTicket } from "./styled";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import gif from "../../assets/images/loading-2.gif";
import axios from "axios";

export default function OneHotelPage() {
    const { hotelID } = useParams();
    const [hotel, setHotel] = useState([]);
    const [comodidades, setComodidades] = useState([]);
    const [pictures, setPictures] = useState([]);
    const [carregando, setCarregando] = useState(false);
    let hotelName, destino, idCidade, preco, hospedes;

    useEffect(() => {
        setCarregando(true);
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/hotels/id/${hotelID}`);
        promise.then(resposta => {
            console.log(resposta.data);
            setHotel(resposta.data[0]);
            setComodidades(resposta.data[1]);
            setPictures(resposta.data[2]);
            setCarregando(false);
        })
        promise.catch(erro => {
            alert(erro.response.data);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (hotel.length !== 0) {
        hotelName = hotel[0].name;
        destino = hotel[0].destiny;
        idCidade = hotel[0].cityID;
        preco = hotel[0].price.replace(".",",");
        hospedes = hotel[0].guests;
    }

    return (
        <TicketsPageContainer>
            <OutboxLogo />
            {carregando === true ? <GifContainer> <img src={gif} alt="gif" /></GifContainer> :
                <>
                    <Link to={`/hotels/${idCidade}`}>
                        <button> Voltar </button>
                    </Link>
                    <h1> {hotelName}</h1>
                    <TicketsAll>
                        <Tickets>
                            <Imagens>
                            {pictures.map((item) =>
                                <img src={item.url} alt="foto do hotel" key={item.url}/>
                            )}
                            </Imagens>
                            <OneTicket >
                                <div>
                                    CARACTERISTICAS
                                    <h2> Cidade: {destino}</h2>
                                    <h2> Valor da diária: {preco}</h2>
                                    <h2> Número de hospedes: {hospedes}</h2>
                                </div>
                                <div>
                                    COMODIDADES
                                    {comodidades.map((item) =>
                                        <h2 key={item.amenities}> - {item.amenities}</h2>
                                    )}
                                </div>
                            </OneTicket>
                        </Tickets>
                    </TicketsAll>
                </>
            }
        </TicketsPageContainer >
    )
}
