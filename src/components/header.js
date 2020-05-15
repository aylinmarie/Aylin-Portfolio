import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
        <Link
          to="/"
        >
          About
        </Link>
        <Link
          to="/"
        >
          Travel
        </Link>
        <Link
          to="/"
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
