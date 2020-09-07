import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
    width: 100%;
    max-width: 62.5rem;
    height: 6.25rem;
    margin: 0 auto;
    padding: 0 2.5rem;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const StyledLogo = styled.div`
    font-size: 2.25rem;
    font-weight: 1000;
    color: black;
`

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/" aria-label="home">
                <StyledLogo>tajloodu.</StyledLogo>
            </Link>
        </StyledHeader>
    )
}

export default Header