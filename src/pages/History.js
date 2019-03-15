import React from 'react';

import Layout from 'components/Layout';

import './style.scss';

const timelineText = [
  {
    year: '1989',
    description:
      'Founded to provide high quality, independent auction price information to art and antiques professionals',
  },
  {
    year: '1999',
    description:
      'Releases first internet-based price database, including auction price information for the past 10 years',
  },
  {
    year: '2007',
    description:
      'Acquires Invaluable.com, the leading provider of data services to auction houses in the US and across Europe',
  },
  {
    year: '2009',
    description:
      "Launches its online bidding platform; acquires AuctionZip.com, the world's largest online auction directory; closes a $13 million round of capital financing",
  },
  {
    year: '2013',
    description:
      'Rebrands to Invaluable with an updated website designed to encourage increased online bidding, including category browsing functionality.',
  },
  {
    year: '2014',
    description:
      'Announces strategic partnerships with EpaiLive in Asia and LeFigaro.fr in France; announces technology partnership with eBay to power eBay Live Auctions; raises $33.75 million in funding; releases the Invaluable app for iPad',
  },
  {
    year: '2015',
    description:
      "Launches technology partnership with Sotheby's to power all online bidding on Sothebys.com; releases the Invaluable app for iPhone and celebrates 29th consecutive quarter of YoY revenue growth. See the 2015 Year in Review.",
  },
  {
    year: '2016',
    description:
      'Updates the live bidding experience, launches payment processing and offers fixed price items in partnership with premier galleries and dealers.',
  },
  {
    year: '2017',
    description:
      'Invaluable hires incredible new front end engineers, Dan Youberg and Laura Do',
  },
  {
    year: '2019',
    description:
      'Hosts hack day and decides to use GatsbyJS for new static site generated web pages',
  },
];

class History extends React.Component {
  render() {
    const { location, data } = this.props;

    return (
      <Layout location={location}>
        <div className="pb-5 container">
          <h1 className="text-center pt-5">The Invaluable Story</h1>

          <div className="row">
            {timelineText.map(timelineItem => (
              <div
                className="mt-5 px-5 col-xs-12 col-sm-6"
                key={timelineItem.year}
              >
                <h1 className="timeline-year">{timelineItem.year}</h1>
                <h5>{timelineItem.description}</h5>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default History;
