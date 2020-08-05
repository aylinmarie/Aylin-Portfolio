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
        to="/portfolio"
      >
          Portfolio
      </Link>
      <a
        href="https://vsco.co/aylin-marie/journal/p/1" target="_blank" rel="noreferrer"      >
          Travel
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
