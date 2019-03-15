import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import './style.scss';

class Navi extends React.Component {
  render() {
    const { location, title } = this.props;
    const pathname = window.location.pathname;

    return (
      <Fragment>
        <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
          <div className="container">
            <Link className="text-center" to="/">
              <h1 className="navbar-brand mb-0">{title}</h1>
            </Link>
            <div className="navbar-nav-scroll">
              <ul className="navbar-nav bd-navbar-nav flex-row">
                <li
                  className={
                    location.pathname === '/' ? 'nav-item active' : 'nav-item'
                  }
                >
                  <Link to="/" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/Partners/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/Partners/" className="nav-link">
                    Partners
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/History/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/History/" className="nav-link">
                    History
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/Team/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/Team/" className="nav-link">
                    Team
                  </Link>
                </li>
                <li
                  className={
                    location.pathname === '/Blog/'
                      ? 'nav-item active'
                      : 'nav-item'
                  }
                >
                  <Link to="/Blog/" className="nav-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
          </div>
        </nav>

        <section
          id="about-banner"
          className="d-flex justify-content-center align-items-end"
        >
          <div className="link-container">
            <Link
              className={pathname === '/' ? 'mx-3 selected' : 'mx-3'}
              to="/"
            >
              About Us
            </Link>
            <Link
              className={pathname === '/Partners/' ? 'mx-3 selected' : 'mx-3'}
              to="/Partners/"
            >
              Partners
            </Link>
            <Link
              className={pathname === '/History/' ? 'mx-3 selected' : 'mx-3'}
              to="/History/"
            >
              History
            </Link>
            <Link
              className={pathname === '/Team/' ? 'mx-3 selected' : 'mx-3'}
              to="/Team/"
            >
              Team
            </Link>
            <Link
              className={pathname === '/Blog/' ? 'mx-3 selected' : 'mx-3'}
              to="/Blog/"
            >
              Blog
            </Link>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Navi;
