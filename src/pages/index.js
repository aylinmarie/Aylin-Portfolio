import React from "react"

import Layout from "../components/layout"
import {ButtonLink} from "../components/Button"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>Merhaba, I'm Aylin</h1>
      <p className="caption">I’m an Atlanta based designer and developer who loves creating clean and minimal designs.</p>
      <ButtonLink href="/about">Learn More</ButtonLink>
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
