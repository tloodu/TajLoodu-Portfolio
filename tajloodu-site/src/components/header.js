import { Link } from "gatsby"
import React, { useState, useEffect, useContext } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"

import Context from "../context"
import { detectMobileAndTablet, isSSR } from "../utils/"
import ContentWrapper from "../styles/ContentWrapper"
import Logo from "./logo"
import Sidebar from "./sidebar"
import Navbar from "./navbar"

const StyledHeader = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
