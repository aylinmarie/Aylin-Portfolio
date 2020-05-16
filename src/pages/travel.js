import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Travel = () => (
  <Layout>
    <SEO title="Travel" />
    <h1>Travel</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Travel
