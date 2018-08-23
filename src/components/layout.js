import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { fetchUser } from '../redux';
import Header from './Header';
import './layout.css';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => bindActionCreators({fetchUser}, dispatch);

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { children, disableSettings } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Fragment>
            <Helmet
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
              ]}
              title={data.site.siteMetadata.title}
              >
              <html lang='en' />
              <link href='https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />
            </Helmet>
            <Header disableSettings={true} siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: '38px auto 0',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0
              }}
              >
              {children}
            </div>
          </Fragment>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
