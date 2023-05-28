import styled from "styled-components"
import logo from "../assets/images/outbox-wanderlust-logo.png"

export default function OutboxLogo() {
    return (
        <LogoContainer>
            <img src={logo} alt="logo" />
        </LogoContainer>
    )
}

const LogoContainer = styled.div`
    margin: 0 auto;
    img {
        width: 350px;
    }
`