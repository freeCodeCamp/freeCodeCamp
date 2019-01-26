import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Spinner from 'react-spinkit';
import { Link } from 'gatsby';

import Layout from '../layouts/Default';

import notFoundLogo from '../../images/freeCodeCamp-404.svg';
import { quotes } from '../../resources/quotes.json';

import './404.css';

class NotFoundPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomQuote: null
    };
  }

  componentDidMount() {
    this.updateQuote();
  }

  updateQuote() {
    this.setState({
      randomQuote: quotes[Math.floor(Math.random() * quotes.length)]
    });
  }

  render() {
    return (
      <Layout>
        <div className='notfound-page-wrapper'>
          <Helmet title='Page Not Found | freeCodeCamp' />
          <img alt='404 Not Found' src={notFoundLogo} />
          <h1>NOT FOUND</h1>
          {this.state.randomQuote ? (
            <div>
              <p>
                We couldn&#x27;t find what you were looking for, but here is a
                quote:
              </p>
              <div className='quote-wrapper'>
                <p className='quote'>
                  <span>&#8220;</span>
                  {this.state.randomQuote.quote}
                </p>
                <p className='author'>- {this.state.randomQuote.author}</p>
              </div>
            </div>
          ) : (
            <Spinner color='#006400' name='ball-clip-rotate-multiple' />
          )}
          <Link className='btn-curriculum' to='/learn'>
            View the Curriculum
          </Link>
        </div>
      </Layout>
    );
  }
}

export default NotFoundPage;
