import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ArticleLayout from '../../ArticleLayout';

import CostCalculatorChart from './CostCalculatorChart';
import './CodingBootcampCostCalculator.css';

const propTypes = {
  data: PropTypes.object
};

class CostCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      incomes: [],
      city: null,
      cityLabel: null,
      lastYearsIncome: null,
      bootcamps: null
    };
    this.handleCitySelector = this.handleCitySelector.bind(this);
    this.handleIncomeSelector = this.handleIncomeSelector.bind(this);
  }

  componentDidMount() {
    fetch('/json/bootcamps.json')
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        this.setState({
          bootcamps: responseJson,
          cities: responseJson.reduce((previous, current) => {
            return previous.concat(current.cities);
          }, []).filter((city, idx, me) => {
            return me.indexOf(city) === idx;
          }).sort(),
          incomes: [
            '0',
            '10000',
            '20000',
            '30000',
            '40000',
            '50000',
            '60000',
            '70000',
            '80000',
            '90000',
            '100000',
            '120000',
            '140000',
            '160000',
            '180000',
            '200000'
          ]
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleCitySelector(event) {
    let el = event.target;
    this.setState({
      city: event.target.value,
      cityLabel: el.options[el.selectedIndex].text
    });
  }

  handleIncomeSelector(event) {
    let el = event.target;
    this.setState({
      lastYearsIncome: parseInt(event.target.value, 10),
      lastYearsIncomeLabel: el.options[el.selectedIndex].text
    });
  }

  render() {
    let cityLabel = this.state.cityLabel ? this.state.cityLabel : '_______';
    let lastYearsIncome = this.state.lastYearsIncomeLabel ? this.state.lastYearsIncomeLabel : '_______';
    return (
      <div className='CodingBootcampCostCalculator'>
        <div className='section' id='city-selector'>
          <h3 className='text-primary'>Where do you <span>live</span>?</h3>
          <select className='form-control' defaultValue='' onChange={this.handleCitySelector}>
            <option disabled='true' value=''>Select City</option>
            {this.state.cities.map((city, idx) => {
              let cityLabel = typeof city !== 'undefined' ? city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : '';
              return (
                <option key={idx} value={city}>{cityLabel}</option>
              );
            })}
          </select>
        </div>
        <div className='section' id='income'>
          <h3 className='text-primary'>
            How much <span>money</span> did you make last year (in USD)?
          </h3>
          <select className='form-control' defaultValue='' onChange={this.handleIncomeSelector}>
            <option disabled='true' value=''>Select Income</option>
            {this.state.incomes.map((income, idx) => {
              let incomeLabel = typeof income !== 'undefined' ? income.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0';
              return (
                <option key={idx} value={income}>${incomeLabel}</option>
              );
            })}
          </select>
        </div>
        <div className='section text-center'>
          <a href='/json/bootcamps.json'>
            View Data Source JSON
          </a>
        </div>
        <h3 className='text-primary' id='chosen'>
          Coming from <span>{cityLabel}</span>, and making <span>{lastYearsIncome}</span>, your true costs will be:
        </h3>
        <div className='section' id='chart'>
          <CostCalculatorChart
            bootcamps={this.state.bootcamps}
            city={this.state.city}
            lastYearsIncome={this.state.lastYearsIncome}
          />
        </div>
        <div className='section' id='explanation'>
          <h3>Notes:</h3>
          <ol>
            <li>
              We assumed an APR of 6% and a term of 3 years. If you happen
              to have around $15,000 in cash set aside for a coding
              bootcamp, please ignore this cost.
            </li>
            <li>
              We assume a cost of living of $500 for cities like San
              Francisco and New York City, and $400 per week for
              everywhere else.
            </li>
            <li>
              The most substantial cost for most people is lost wages. A
              40-hour-per-week job at the US Federal minimum wage would
              pay at least $15,000 per year. You can read more about
              economic cost
              <a href='https://en.wikipedia.org/wiki/Economic_cost' rel='noopener noreferrer' target='_blank'>
                here
              </a>.
            </li>
          </ol>
            <div className='col-sm-4 col-md-4'>
              <img alt='' className='img-responsive testimonial-image img-center' src='https://www.evernote.com/l/AHRIBndcq-5GwZVnSy1_D7lskpH4OcJcUKUB/image.png' />
            </div>
            <div className='col-sm-8 col-md-8'>
              <h3>Built by Suzanne Atkinson</h3>
              <p>
                Suzanne is an emergency medicine physician, triathlon
                coach and web developer from Pittsburgh. You should
                &thinsp;
                <a href='https://twitter.com/intent/user?screen_name=SteelCityCoach' rel='noopener noreferrer' target='_blank'>
                  follow her on Twitter
                </a>.
              </p>
            </div>
        </div>
      </div>
    );
  }
}

const CodingBootcampCostCalculator = props => {
  const {
    data: {
      markdownRemark: { html }
    }
  } = props;
  return (
    <ArticleLayout {...props}>
      <article
        className='article'
        dangerouslySetInnerHTML={{ __html: html }}
        id='article'
        tabIndex='-1'
      />
      <CostCalculator />
    </ArticleLayout>
  );
};

CodingBootcampCostCalculator.displayName = 'CodingBootcampCostCalculator';
CodingBootcampCostCalculator.propTypes = propTypes;
export default CodingBootcampCostCalculator;

export const pageQuery = graphql`
  query CodingBootcampCostCalculator($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      ...ArticleLayout
    }
  }
`;
