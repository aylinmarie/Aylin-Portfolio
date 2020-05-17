import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import stylesheet from './about.module.less';

import aboutPic from '../images/about_pic.jpg';
import aboutPic2 from '../images/about_pic_2.jpg';

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className={stylesheet.intro}>
      <h1>Hello!</h1>
      <figure className={stylesheet.aboutImg}>
        <img src={aboutPic} alt="Portrait of Aylin Marie" />
        <figcaption>Photo by <a href="http://jamiltmcginnis.com/" target="_blank" rel="noreferrer">Jamil McGinnis</a></figcaption>
      </figure>
      <p>My career didn’t start off in the creative industry. Not even close. I spent hours in a cramped office ticking away at audit reports or writing up risk procedures for banks. In 2017, I felt it was time to shift gears and start figuring out what it means to “love what you do”. I quit my job (after a year of self-teaching) and jumped into an immersive web development program at General Assembly. </p>
      <p>I landed my first role as a front end developer for a creative agency that focuses on social good companies in Atlanta. On the side, I use to work with entrepreneurs to help launch their digital presence on different platforms. There is nothing more exciting than watching people make their brand or project come to life. I know what it feels like to build and grow in a place of passion, and I know what it feels like when you’ve accomplished it!</p>
      <p>As I started developing more knowledge in my craft, I found a role that combined my love for both design and engineering. I now work on building a design system for Mailchimp as a UX Engineer.</p>
      <p>If I'm not digging into code or pairing fonts, you can probably find me on the other side of the hemisphere :)</p>
    </section>
    <section>
      <figure>
        <img src={aboutPic2} alt="Aylin Marie at Koptapi Palace in Istanbul, Turkey"/>
        <figcaption>Photo by <a href="http://jamiltmcginnis.com/" target="_blank" rel="noreferrer">Jamil McGinnis</a></figcaption>
      </figure>
      <p className="h3">What else?</p>
      <p>+ <a href="http://www.oneyoungtraveler.co" target="_blank" rel="noreferrer">Founder of OneYoungTraveler LLC</a></p>
      <p>+ <a href="https://generalassemb.ly/instructors/aylin-mcginnis/15542" target="_blank" rel="noreferrer">General Assembly Workshop Instructor</a></p>
      <p>+ <a href="https://circle.squarespace.com/member-stories/aylin-marie" target="_blank" rel="noreferrer">Squarespace Circle Member Feature</a></p><p>+ <a href="http://www.a3cfestival.com/creator-complex" target="_blank" rel="noreferrer">Portfolio Consultant - 2017 A3C Creator Complex Conference</a></p>
    </section>
    <section className={stylesheet.social}>
      <p className="h3">Follow Me <a href="https://twitter.com/aylin_marie" target="_blank" rel="noreferrer">@aylinmcg</a></p>
    </section>
  </Layout>
)

export default About
