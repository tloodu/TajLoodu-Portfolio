import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    .title {
        margin-bottom: 0;
    }
    .subtitle {
        margin-top: 0;
    }
    .highlighted {
        box-shadow: inset 0 -2.5rem 0 #cdf3e1
    }
`

const Home = () => {
    return (
        <StyledSection id="home">
            <h1 className="title">
                Hello <span role="img" aria-label="emoji">👋</span><br />
                My name is Taj Loodu
            </h1>
            <h2 className="subtitle">
                I am a student at the University of Ottawa
            </h2>
            <div className="description">
                Based in Ottawa
            </div>
        </StyledSection>
    )
}

export default Home