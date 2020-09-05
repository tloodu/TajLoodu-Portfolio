import React from "reaact"
import PropTypes from "prop-types"
import styled from "styled-components"

import config from "../config"

const { siteShortTitle } = config

const StyledLogo = styled.div`
    position: relative;
    z-index: 13;

    font-size: ${({ size }) => (size ? size : "1.75rem")};
    font-weight: 900;
    color: ${({ theme, color }) => theme.colors[color] || color };

    filter: none !important;
    pointer-events: auto !Important;
    user-select: auto !important;  
`

const Logo = ({ size, color }) => (
    <StyledLogo color={color} size={size}>
        {siteShortTitle}
    </StyledLogo>
)

Logo.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
}

export default Logo