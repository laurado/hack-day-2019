import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Icon from 'components/Icon'

class AboutUs extends React.Component {
  render() {
    const { location, data } = this.props
    const profile = get(data, 'profile.childImageSharp.fixed')
    const flamingo = get(data, 'flamingo.childImageSharp.fixed')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="About Us" />
        <div>
          <h1 className="text-center mt-5">What We're All About</h1>
          <section className="text-center">
            <div className="container">
              <Img fixed={flamingo} className="rounded-circle" />
              <h2 className="pt-3">Recently called "one of the most flamingo friendly places to work in the world" by Anyone who visits the downstairs.</h2>
              <p className="lead text-muted pt-2">Connecting people with the things they love </p>
            </div>
          </section>

          <section className="bg-primary text-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">Invaluable by the Numbers</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">

                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="pepper" name="pepper-hot" />
                  <h4>590 visits to Lone Star</h4>
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon prefix="fas" title="bug" name="bug" />
                  <h4>6932 Features</h4>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="coffee" name="coffee" />
                  <h4>Countless cups of Coffee</h4>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="cookie" name="cookie" />
                  <h4>482 Girl Scout Cookies</h4>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="pizza" name="pizza-slice" />
                  <h4>53 Lunch-and-Learns</h4>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="ice cream" name="ice-cream" />
                  <h4>987 visits to Fomu</h4>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="cheese" name="cheese" />
                  <h4>Lots of cheese</h4>
                </div>
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="grin-squint" name="grin-squint" />
                  <h4>1 Great Team</h4>
                </div>
              </div>
            </div>
          </section>

          {/* <section id="features" className="text-center jumboimage">
            <Img sizes={back1} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Features</h2>
                  <p>
                    I'm a front-end engineer in Japan 🗼
                    <br />
                    Used to be a designer of furniture and architecture.
                    <br />
                  </p>
                  <li>2013 ~ 2017: J-CAST News</li>
                  <li>2017 ~ : Recruit Lifestyle</li>
                </div>
              </div>
            </div>
          </section> */}

          {/* <section
            className="bg-primary text-white text-center color-inverse"
            id="concept"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">WORKS</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-6 slide-left" data-emergence="hidden">
                  <Img sizes={work1} />
                  <p>Yomu</p>
                </div>
                <div className="col-md-6 slide-right" data-emergence="hidden">
                  <Img sizes={work2} />
                  <p>Detector</p>
                </div>
              </div>
            </div>
          </section> */}

          <section id="repos">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">As Featured In</h2>
                </div>
              </div>
            </div>
          </section>
          {/* <section id="features" className="jumboimage">
            <Img sizes={back2} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Degree Works</h2>
                  <p>
                    過去の制作は
                    <a className="text-white" href="https://old.jaxx2104.info/">
                      こちら
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </Layout>
    )
  }
}

export default AboutUs

export const query = graphql`
  query AboutUsQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    flamingo: file(name: { eq: "flamingo" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    work1: file(name: { eq: "work1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work2: file(name: { eq: "work2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    work3: file(name: { eq: "work3" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back1: file(name: { eq: "back1" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
    back2: file(name: { eq: "back2" }) {
      childImageSharp {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`
