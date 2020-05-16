import React from "react"

import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import { ButtonLink } from "../components/Button"
import SEO from "../components/seo"
import stylesheet from './home.module.less';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="intro" className={stylesheet.intro}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <h1>Merhaba, I'm Aylin</h1>
          <p className="caption">I’m an Atlanta based designer and developer who loves creating clean and minimal designs.</p>
          <ButtonLink href="/about">About Me</ButtonLink>
        </Grid>
        <Grid item xs={12} sm={8}>
        </Grid>
      </Grid>
    </section>

    <section id="travel">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={8}>
          image
        </Grid>
        <Grid item xs={12} sm={4}>
          <h2>Travel</h2>
          <p className="caption">A few snapshots of where I’ve been</p>
          <ButtonLink href="/travel">Learn More</ButtonLink>
        </Grid>
      </Grid>
    </section>

    <section id="portfolio">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <h2>Portfolio</h2>
          <p className="caption">My work in design and development</p>
          <ButtonLink href="/portfolio">My Work</ButtonLink>
        </Grid>
        <Grid item xs={12} sm={8}>
          image
        </Grid>
      </Grid>
    </section>
  </Layout>
)

export default IndexPage
