import React from "react"

import Layout from "../components/layout"
import { ButtonLink } from "../components/Button"
import SEO from "../components/seo"
import Button from '@material-ui/core/Button';
import stylesheet from './home.module.less';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="intro" className={stylesheet.intro}>
      <h1>Merhaba, I'm Aylin</h1>
      <p className="caption">I’m an Atlanta based designer and developer who loves creating clean and minimal designs.</p>
      <ButtonLink href="/about">Learn More</ButtonLink>
      <Button variant="contained" color="primary">
      Hello World
      </Button>
    </section>

    <section id="travel">
      <h2>Travel</h2>
      <p className="caption">A few snapshots of where I’ve been</p>
      <ButtonLink href="/travel">Learn More</ButtonLink>
    </section>

    <section id="portfolio">
      <h2>Portfolio</h2>
      <p className="caption">My work in design and development</p>
      <ButtonLink href="/portfolio">Learn More</ButtonLink>
    </section>
  </Layout>
)

export default IndexPage
