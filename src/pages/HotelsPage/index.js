import { useParams } from "react-router-dom";

export default function HotelsPage (){
    const { cityID } = useParams();
    return(
        <>
        LISTA HOTEIS da cidade {cityID}
        </>
    )
}