import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import stylesheet from './portfolio.module.less'

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section className={stylesheet.banner}>
      <h1>Portfolio</h1>
      <p className="h3">My work</p>
    </section>
    <section>
      <ul className={stylesheet.nav}>
        <li><a className="h3" href="#all">All</a></li>
        <li><a className="h3" href="#design">Design</a></li>
        <li><a className="h3" href="#code">Code</a></li>
      </ul>
    </section>
  </Layout>
)

export default Portfolio
