import { graphql } from 'gatsby';
import get from 'lodash/get';
import Img from 'gatsby-image';
import React from 'react';

import { siteMetadata } from '../../gatsby-config';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Icon from 'components/Icon';

class History extends React.Component {
  render() {
    const { location, data } = this.props;
    const profile = get(data, 'profile.childImageSharp.fixed');
    const dern = get(data, 'dern.childImageSharp.fixed');
    const chromie = get(data, 'chromie.childImageSharp.fixed');
    const work1 = get(data, 'work1.childImageSharp.sizes');
    const work2 = get(data, 'work2.childImageSharp.sizes');
    const back1 = get(data, 'back1.childImageSharp.sizes');
    const back2 = get(data, 'back2.childImageSharp.sizes');

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <div>
          <h1 className="text-center mt-5">Meet The Team</h1>
          <section className="text-center">
            <div className="container">
              <Img fixed={profile} className="rounded-circle" />
              <h1>Lurrer Dur</h1>
              <p className="lead text-muted">Front-End Engineer</p>
            </div>
          </section>

          <section className="text-center">
            <div className="container">
              <Img fixed={dern} className="rounded-circle" />
              <h1>Dern Yerberr</h1>
              <p className="lead text-muted">Front-End Walrus</p>
            </div>
          </section>

          <section className="text-center">
            <div className="container">
              <Img fixed={chromie} className="rounded-circle" />
              <h1>Chromie</h1>
              <p className="lead text-muted">Front-End Supporter</p>
            </div>
          </section>

          <section className="bg-primary text-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2 className="section-heading">Investors</h2>
                  <hr className="border-white" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="bacon" name="bacon" />
                </div>
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="ice cream" name="ice-cream" />
                </div>
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="cheese" name="cheese" />
                </div>
                <div className="col-lg-3 col-6">
                  <Icon prefix="fas" title="cookie" name="cookie" />
                </div>
              </div>
              {/* <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                  <Icon title="Node.js" name="node" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon title="PHP" name="php" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon title="AWS" name="aws" />
                </div>
                <div className="col-lg-3 col-6 ">
                  <Icon title="Swift" name="apple" />
                </div>
              </div> */}
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
                  <h2 className="section-heading">
                    <a href="/">Join our growing team ></a>
                  </h2>
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
    );
  }
}

export default History;

export const query = graphql`
  query HistoryPageQuery {
    profile: file(name: { eq: "profile" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    dern: file(name: { eq: "dern" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    chromie: file(name: { eq: "chromie" }) {
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
`;
