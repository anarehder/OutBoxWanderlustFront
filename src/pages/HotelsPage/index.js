import OutboxLogo from "../../components/OutboxLogo.js";
import { TicketsPageContainer, GifContainer, TicketsAll, Tickets, Filter, OneTicket, Voltar } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gif from "../../assets/images/loading-2.gif";
import voo from "../../assets/images/aviao1.png";
import axios from "axios";

export default function HotelsPage() {
    const { cityID } = useParams();
    const navigate = useNavigate();
    const [listaHoteis, setListaHoteis] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [values, setValues] = useState("");
    const [chooseMin, setChooseMin] = useState("");
    const [chooseMax, setChooseMax] = useState("");
    let destino, min, max;

    useEffect(() => {
        setCarregando(true);
        let urlFinal;
        if (!chooseMax && !chooseMin) {
            urlFinal = `${process.env.REACT_APP_API_URL}/hotels/city/${cityID}`;
        }
        const promise = axios.get(urlFinal);
        promise.then(resposta => {
            setListaHoteis(resposta.data[0]);
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

    if (listaHoteis.length !== 0) {
        console.log(listaHoteis)
        destino = listaHoteis[0].destiny;
        min = values[0].min;
        max = values[0].max;
    }

    function verDetalhes(id) {
        navigate("/hotels/city/" + id);
    }

    return (
        <TicketsPageContainer>
            <Link to={"/"}>
                <Voltar>Voltar</Voltar>
            </Link>
            <OutboxLogo />
            {carregando === true ? <GifContainer> <img src={gif} alt="gif" /></GifContainer> :
                <>
                    <h1> Hospedagens em {destino}</h1>
                    <TicketsAll>
                        <Filter> MENU
                            <form action="/action_page.php">
                                <label htmlFor="pmin">Preço Mínimo</label>
                                <input type="range" id="pmin" name="pmin" min={min} max={max} onChange={handleMin} />
                                <label htmlFor="pmax">Preço Máximo</label>
                                <input type="range" id="pmax" name="pmax" min={min} max={max} onChange={handleMax} />
                                <button type="submit"> Filtrar </button>
                            </form>
                        </Filter>
                        <Tickets>
                            {listaHoteis.map((item) =>
                                <OneTicket key={item.id}>
                                    <img src={voo} alt="aviao" onClick={() => verDetalhes(item.id)} />
                                    <h2 >Nome: {item.name}</h2>
                                    <h2 >Valor diária: R$ {item.price.replace(".", ",")}</h2>
                                    <h2 >Hóspedes: {item.guests} </h2>
                                </OneTicket>
                            )}
                        </Tickets>
                    </TicketsAll>
                </>
            }
        </TicketsPageContainer >
    )
}