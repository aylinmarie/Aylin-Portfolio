import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Grid from '@material-ui/core/Grid';

import stylesheet from './portfolio.module.less'

// Images
import aylin from '../images/portfolio/aylin_portfolio.png'
import bor from '../images/portfolio/bor_portfolio.png'
import oyt from '../images/portfolio/oyt_portfolio.png'

const PortfolioItems = [
  {name:'Aylin Marie', src: aylin, dataClass:'design',},
  {name:'Book of Rhymes', src: bor, dataClass:'code',},
  {name:'OneYoungTraveler', src: oyt, dataClass:'design',},
]

const Portfolio = () => { 
  const listItems = document.querySelectorAll('.main li');
  const allimages = document.querySelectorAll('.main .container-fluid .images');
  function toggleActiveClass(active){
    listItems.forEach(item => {
      item.classList.remove('active');
    })
    active.classList.add('active');
  }
 
  function toggleimages(dataClass){
    if(dataClass === 'all'){
      for(let i = 0; i<allimages.length; i++){
        allimages[i].style.display = 'block';
      }
    }else{
      for(let i = 0; i<allimages.length; i++)
        allimages[i].dataset.class === dataClass ? allimages[i].style.display = 'block' : allimages[i].style.display = 'none';
    }
  }
 
  for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
      toggleActiveClass(listItems[i]);
      toggleimages(listItems[i].dataset.class);
    });
  }
  return (
    <Layout>
      <SEO title="Portfolio" />
      <section className={stylesheet.banner}>
        <h1>Portfolio</h1>
        <p className="h3">My work</p>
      </section>
      <section>
        <ul className={stylesheet.nav}>
          <li className="h3" data-class="all">All</li>
          <li className="h3" data-class="design">Design</li>
          <li className="h3" data-class="code">Code</li>
        </ul>

        <Grid container className={stylesheet.gallery} spacing={4}>
          {PortfolioItems.map((item)=> { 
            return(
              <Grid item key={item.name} data-class={item.dataClass} xs={12} sm={6} md={4}>
                <img src={item.src} alt={item.namee} />
              </Grid>)
          })}
        </Grid>
      </section>
    </Layout>
  )}

export default Portfolio
