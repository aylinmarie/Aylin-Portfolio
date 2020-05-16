import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import '../styles/global.less'
import stylesheet from  "./layout.module.less"

const Layout = ({ children }) => {

  return (
    <div className={stylesheet.root}>
      <Header />
      <div>
        <main className={stylesheet.main}>{children}</main>
        <footer>
          <p>© {new Date().getFullYear()} aylin marie</p>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
