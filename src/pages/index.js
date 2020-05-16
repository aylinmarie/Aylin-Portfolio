import React from "react"

import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import { ButtonLink } from "../components/Button"
import SEO from "../components/seo"
import stylesheet from './home.module.less';

import mainPic from '../images/pic_main.jpg';
import portfolioPic from '../images/portfolio_main.png';
import travelPic from '../images/travel_main.jpg';


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section id="intro" className={stylesheet.intro}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={5}>
            <h1>Merhaba, I'm Aylin</h1>
            <p className="caption">I’m an Atlanta based designer and developer who loves creating clean and minimal designs.</p>
            <ButtonLink href="/about">About Me</ButtonLink>
          </Grid>
          <Grid item xs={12} sm={7}>
            <img src={mainPic} alt="Headshot of Aylin" />
          </Grid>
        </Grid>
      </section>

      <section id="travel">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={7}>
            <img src={travelPic} alt="Winslow building in Helsinki, Finland" />
          </Grid>
          <Grid item xs={12} sm={5}>
            <h2>Travel</h2>
            <p className="caption">A few snapshots of where I’ve been</p>
            <ButtonLink href="/travel">Learn More</ButtonLink>
          </Grid>
        </Grid>
      </section>

      <section id="portfolio" className={stylesheet.portfolio}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={5}>
            <h2>Portfolio</h2>
            <p className="caption">My work in design and development</p>
            <ButtonLink href="/portfolio">My Work</ButtonLink>
          </Grid>
          <Grid item xs={12} sm={7}>
            <img src={portfolioPic} alt="Camille Simone logo" />
          </Grid>
        </Grid>
      </section>
    </Layout>
  )}

export default IndexPage
