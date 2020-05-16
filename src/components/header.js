import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <nav>
      <Link
        to="/"
      >
        Home
      </Link>
      <Link
        to="/about"
      >
          About
      </Link>
      <Link
        to="/travel"
      >
          Travel
      </Link>
      <Link
        to="/portfolio"
      >
          Portfolio
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
