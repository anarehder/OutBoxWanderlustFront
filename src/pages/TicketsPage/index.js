import OutboxLogo from "../../components/OutboxLogo.js";
import { TicketsPageContainer } from "./styled";
import { useContext } from "react";
import { CityContext } from "../../contexts/CityContext.js";

export default function HomePage() {
    const [city, ] = useContext(CityContext)
    console.log(city);
    return (
        <TicketsPageContainer>
            <OutboxLogo />
        </TicketsPageContainer>
    )
}
