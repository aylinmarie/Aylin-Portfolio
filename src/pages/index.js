import React from "react"

import Grid from '@material-ui/core/Grid';

import Layout from "../components/layout"
import Button from "../components/Button"
import SEO from "../components/seo"
import stylesheet from './Home/Home.module.less';

// Images
import mainPic from '../images/pic_main.jpg';
import portfolioPic from '../images/portfolio_main.png';
import travelPic from '../images/travel_main.jpg';

// Section Illustrations
import travelAccent from '../images/travel_accent.svg';
import portfolioAccent1 from '../images/portfolio_accent_1.svg';
import portfolioAccent2 from '../images/portfolio_accent_2.svg';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <section id="intro" className={stylesheet.intro}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={5}>
            <h1>Merhaba, I'm Aylin</h1>
            <p className="caption">I’m an Atlanta based designer and developer who loves creating clean and minimal designs.</p>
            <Button type="primary" href="/about">About Me</Button>
          </Grid>
          <Grid item xs={12} sm={7}>
            <img src={mainPic} alt="Headshot of Aylin" />
          </Grid>
        </Grid>
      </section>

      <section id="travel" className={stylesheet.travel}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={7}>
            <img src={portfolioPic} alt="Camille Simone logo" />
          </Grid>
          <Grid item xs={12} sm={5}>
            <h2>Portfolio</h2>
            <p className="caption">My work in design and development</p>
            <Button type="primary" href="/portfolio">My Work</Button>
            <img className={stylesheet.travelAccent} src={travelAccent} alt="" />
          </Grid>
        </Grid>
      </section>

      <section id="portfolio" className={stylesheet.portfolio}>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={5}>
            <h2>Travel</h2>
            <p className="caption">A few snapshots of where I’ve been</p>
            <Button type="primary" 
              href="https://vsco.co/aylin-marie/journal/p/1" target="_blank" rel="noreferrer">Travel Journal</Button>
            <img className={stylesheet.portfolioAccent1} src={portfolioAccent1} alt="" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <img src={travelPic} alt="Winslow building in Helsinki, Finland" />
            <img className={stylesheet.portfolioAccent2} src={portfolioAccent2} alt="" />
          </Grid>
        </Grid>
      </section>
    </Layout>
  )}

export default IndexPage
