import OutboxLogo from "../../components/OutboxLogo.js";
import { TicketsPageContainer, GifContainer, TicketsAll, Tickets, Filter } from "./styled";
import { useEffect, useContext, useState } from "react";
import { CityContext } from "../../contexts/CityContext.js";
import gif from "../../assets/images/loading-2.gif";
import axios from "axios";

export default function HomePage() {
    const [city,] = useContext(CityContext);
    const [listaPassagens, setListaPassagens] = useState([]);
    const [carregando, setCarregando] = useState(false);
    console.log(city);
    const formattedCity = city.split(",");

    useEffect(() => {
        setCarregando(true);
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/tickets/city/${formattedCity[0]}`);
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
            <h1> Passagens para {formattedCity[1]}</h1>
            {carregando === true ? <GifContainer> <img src={gif} alt="gif" /></GifContainer> :
                <TicketsAll>
                    <Filter> MENU </Filter>
                    <Tickets> 
                    {listaPassagens.map((item) =>
                            <div key={item.id}>{item.price}</div>
                        )}
                    </Tickets>
                </TicketsAll>
            }
        </TicketsPageContainer>
    )
}
