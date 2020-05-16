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
          <div>
            <strong>Contact Me</strong>
            <p>hello@aylinmarie.co</p>
            
            <strong>Social</strong>
            <a href="https://twitter.com/aylin_marie" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.instagram.com/aylinmcg/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
          <div>
            <p>© {new Date().getFullYear()} aylin marie</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
