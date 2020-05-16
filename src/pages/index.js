import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>Merhaba, I'm Aylin</h1>
      <p className="caption">I’m an Atlanta based designer and developer who loves creating clean and minimal designs.</p>
      <Link to="/page-2/">Learn More</Link>
    </section>

    <section>
      <h2>Travel</h2>
      <p className="caption">A few snapshots of where I’ve been</p>
    </section>

    <section>
      <h2>Portfolio</h2>
      <p className="caption">My work in design and development</p>
    </section>
  </Layout>
)

export default IndexPage
