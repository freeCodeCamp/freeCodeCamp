import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Spinner from 'react-spinkit';
import { Link } from 'gatsby';

import notFoundLogo from '../../assets/images/freeCodeCamp-404.svg';
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
            <blockquote className='quote-wrapper'>
              <p className='quote'>
                <span>&#8220;</span>
                {this.state.randomQuote.quote}
              </p>
              <p className='author'>- {this.state.randomQuote.author}</p>
            </blockquote>
          </div>
        ) : (
          <Spinner color='#006400' name='ball-clip-rotate-multiple' />
        )}
        <Link className='btn btn-cta' to='/learn'>
          View the Curriculum
        </Link>
      </div>
    );
  }
}

export default NotFoundPage;
