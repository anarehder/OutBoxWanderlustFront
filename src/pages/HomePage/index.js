import OutboxLogo from "../../components/OutboxLogo.js";
import { HomePageContainer, HowToUseContainer, GifContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useContext, useState } from "react";
import gif from "../../assets/images/loading-2.gif";
import { CityContext } from "../../contexts/CityContext.js";
import choosecity from "../../assets/images/chooseCity.jpg";
import chooseflight from "../../assets/images/chooseFligth.png";
import choosehotel from "../../assets/images/chooseHotel.png";

export default function HomePage() {
    const [listaCidades, setlistaCidades] = useState([]);
    const navigate = useNavigate();
    const [carregando, setCarregando] = useState(false);
    const [city, setCity] = useContext(CityContext)

    useEffect(() => {
        setCarregando(true);
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/cities`);
        promise.then(resposta => {
            setlistaCidades(resposta.data);
            setCarregando(false);
            console.log(listaCidades)
        })
        promise.catch(erro => {
            alert(erro.response.data);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function handleCreate(e) {
        e.preventDefault();
        console.log(city);
        navigate("/tickets")
    }

    return (
        <HomePageContainer>
            <OutboxLogo />
            {carregando === true ? <GifContainer> <img src={gif} alt="gif" /></GifContainer> :
                <div>
                    <select value={city} onChange={e => setCity(e.target.value)}>
                        <option value="0">Selecione a cidade de destino</option>
                        {listaCidades.map((item) =>
                            <option key={item.name} value={item.id}>{item.name}</option>
                        )}
                    </select>
                    <button onClick={handleCreate}>
                        Ir
                    </button>
                </div>
            }
            <HowToUseContainer>
                <div>
                    <img src={choosecity} alt="escolher cidade" />
                    ESCOLHA A CIDADE
                </div>
                <div>
                    <img src={chooseflight} alt="escolher voo" />
                    ESCOLHA SUA PASSAGEM
                </div>
                <div>
                    <img src={choosehotel} alt="escolher hotel" />
                    ESCOLHA O LOCAL PARA SE HOSPEDAR
                </div>
            </HowToUseContainer>
        </HomePageContainer>
    )
}