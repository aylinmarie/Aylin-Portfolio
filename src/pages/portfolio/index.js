import React from "react"
import { graphql } from 'gatsby'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Banner from '../../components/Banner'

import Grid from '@material-ui/core/Grid';

import stylesheet from './Portfolio.module.less'
import Img from  'gatsby-image'

const Portfolio = ({data}) => { 
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Banner>
        <h1>Portfolio</h1>
        <p className="h3">My work</p>
      </Banner>
      
      <section>
        <Grid container className={stylesheet.gallery} spacing={4}>
          {data.allFile.edges.map(({node}) => 
            <Grid item xs={12} sm={6} md={4} key={node.base}>
              <Img fluid={node.childImageSharp.fluid} alt={node.alt}/>
            </Grid>
          )}
        </Grid>
      </section>
    </Layout>
  )}

export default Portfolio

export const query = graphql`
query MyQuery {
  allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
    edges {
      node {
        base
        childImageSharp {
          fluid {
            src
            srcSet
            base64
            aspectRatio
          }
        }
      }
    }
  }
}
`