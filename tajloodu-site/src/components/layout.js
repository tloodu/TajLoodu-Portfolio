import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import "typeface-roboto"

import Context from "../context/"
import Theme from "../styles/Theme"
import GlobalStyle from "../styles/GlobalStyle"
import Header from "./header"
import Footer from "./footer"

if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
}

const StyledLayoutWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
`

const Layout  = ({ children, splashScreen }) => {
    const [state, setState] = useState({
        isIntroDone: splashScreen ? false : true,
    })

    return (
        <StyledLayoutWrapper>
            <Context.Provider value={{ state, setState }}>
                <ThemeProvider theme={Theme}>
                    <GlobalStyle />
                    <Header />
                    <main id="main-content">{children}</main>
                    <Footer />
                </ThemeProvider>
            </Context.Provider>
        </StyledLayoutWrapper>
    )
}

Layout.propTypes = {
    children: PropTypes.any,
    splashScreen: PropTypes.bool.isRequired,
}

export default Layout