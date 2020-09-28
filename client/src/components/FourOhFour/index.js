import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Loader, Spacer } from '../../components/helpers';
import { Link } from 'gatsby';

import notFoundLogo from '../../assets/images/freeCodeCamp-404.svg';
import { randomQuote } from '../../utils/get-words';

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
      randomQuote: randomQuote()
    });
  }

  render() {
    return (
      <div className='notfound-page-wrapper'>
        <Helmet title='Page Not Found | freeCodeCamp' />
        <img alt='404 Not Found' src={notFoundLogo} />
        <Spacer />
        <h1>Page not found.</h1>
        <Spacer />
        {this.state.randomQuote ? (
          <div>
            <p>
              We couldn&#x27;t find what you were looking for, but here is a
              quote:
            </p>
            <Spacer />
            <blockquote className='quote-wrapper'>
              <p className='quote'>
                <span>&#8220;</span>
                {this.state.randomQuote.quote}
              </p>
              <p className='author'>- {this.state.randomQuote.author}</p>
            </blockquote>
          </div>
        ) : (
          <Loader />
        )}
        <Spacer size={2} />
        <Link className='btn btn-cta' to='/learn'>
          View the Curriculum
        </Link>
      </div>
    );
  }
}

export default NotFoundPage;
