import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import stylesheet from  "./layout.module.less"

const Layout = ({ children }) => {

  return (
    <div className={stylesheet.root}>
      <Header />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()} aylin marie
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
