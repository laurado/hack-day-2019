import { graphql } from 'gatsby';
import get from 'lodash/get';
import Img from 'gatsby-image';
import React from 'react';

import { siteMetadata } from '../../gatsby-config';
import Layout from 'components/Layout';
import Meta from 'components/Meta';

class Partners extends React.Component {
  render() {
    const { location, data } = this.props;

    const partnerList = [];
    for (let i in data) {
      partnerList.push(data[i].childImageSharp.fixed);
    }

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Partners" />
        <div>
          <section className="bg-primary text-white text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="section-heading">
                    Auction House, Gallery &amp; Dealer Partners
                  </h1>
                  <h3 className="mt-5">
                    Invaluable connects people with over 4,000 of the world's
                    premier sellers of art, antiques and collectibles.
                  </h3>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="row">
              {partnerList &&
                partnerList.map((partner, index) => (
                  <div key={index} className="mt-4 col-xs-12 col-sm-6 col-lg-4">
                    <Img fixed={partner} />
                  </div>
                ))}
            </div>
          </section>

          <section id="repos">
            <div className="container">
              <div className="col-md-12 text-center">
                <h2 className="section-heading">
                  <a href="/">And thousands more ></a>
                </h2>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Partners;

export const query = graphql`
  query {
    sothebys: file(relativePath: { eq: "sothebys-logo-v2.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    artcurial: file(relativePath: { eq: "Artcurial-v2.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    tajan: file(relativePath: { eq: "Tajan.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jamesdjulia: file(relativePath: { eq: "JamesDJulia.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    freemans: file(relativePath: { eq: "Freemans-v2.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    swann: file(relativePath: { eq: "Swann.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dreweattneate: file(relativePath: { eq: "DreweattNeate.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    eldreds: file(relativePath: { eq: "Eldreds.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    koller: file(relativePath: { eq: "Koller.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    stair: file(relativePath: { eq: "Stair.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    doyle: file(relativePath: { eq: "Doyle.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    profiles: file(relativePath: { eq: "Profiles-v2.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    leonardjoel: file(relativePath: { eq: "LeonardJoel.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    lempertz: file(relativePath: { eq: "Lempertz.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    vanham: file(relativePath: { eq: "VanHam.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    charltonhall: file(relativePath: { eq: "CharltonHall_R2.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    waddingtons: file(relativePath: { eq: "Waddington.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    whytes: file(relativePath: { eq: "Whytes.png" }) {
      childImageSharp {
        fixed(width: 500, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
