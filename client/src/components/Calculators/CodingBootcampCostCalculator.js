import React from 'react';
import rd3 from 'react-d3-library';
import { initCalculator, node } from './calculator';
import './codingbootcampcostcalculator.css';

const RD3Component = rd3.Component;

export default class CodingBootcampCostCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      d3: node,
      cities: [],
      incomes: [],
      city: null,
      cityLabel: null,
      lastYearsIncome: null,
      bootcamps: null
    };
    this.handleCitySelector = this.handleCitySelector.bind(this);
    this.handleIncomeSelector = this.handleIncomeSelector.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    fetch('/json/bootcamps.json')
      .then(function(response) {
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
      lastYearsIncome: event.target.value,
      lastYearsIncomeLabel: el.options[el.selectedIndex].text
    });
  }

  handleSubmit() {
    let { bootcamps, city, lastYearsIncome } = this.state;
    this.setState({
      d3: initCalculator(bootcamps, city, lastYearsIncome)
    });
  }

  render() {
    let cityLabel = this.state.cityLabel ? this.state.cityLabel : '_______';
    let lastYearsIncome = this.state.lastYearsIncomeLabel ? this.state.lastYearsIncomeLabel : '_______';
    return (
      <div className='CodingBootcampCostCalculator'>
        <div className='row'>
          <div className='col-xs-12 col-sm-10 col-md-8 col-lg-6'>
            <div id='city-selector'>
              <h3 className='text-center text-primary'>Where do you <span>live</span>?</h3>
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
            <div id='income'>
              <div className='spacer' />
              <h3 className='text-center text-primary'>
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
            <div className='spacer' />
            <div className='text-center'>
              <button className='btn btn-primary btn-md' disabled={!this.state.city || !this.state.lastYearsIncome} id='transform' onClick={this.handleSubmit}>
                Calculate
              </button>
              <div className='spacer' />
              <a href='/json/bootcamps.json'>
                View Data Source JSON
              </a>
            </div>
            <div className='spacer' />
            <h3 className='text-center text-primary' id='chosen'>
              Coming from <span>{cityLabel}</span>, and making <span>{lastYearsIncome}</span>, your true costs will be:
            </h3>
            <div id='chart'>
              <div className='d3-centered'>
                <RD3Component data={this.state.d3} />
              </div>
            </div>
            <div className='spacer' />
            <div id='explanation'>
              <h3>Notes:</h3>
              <ol>
                <li className='large-li'>
                  We assumed an APR of 6% and a term of 3 years. If you happen
                  to have around $15,000 in cash set aside for a coding
                  bootcamp, please ignore this cost.
                </li>
                <li className='large-li'>
                  We assume a cost of living of $500 for cities like San
                  Francisco and New York City, and $400 per week for
                  everywhere else.
                </li>
                <li className='large-li'>
                  The most substantial cost for most people is lost wages. A
                  40-hour-per-week job at the US Federal minimum wage would
                  pay at least $15,000 per year. You can read more about
                  economic cost
                  <a href='https://en.wikipedia.org/wiki/Economic_cost' rel='noopener noreferrer' target='_blank'>
                    here
                  </a>.
                </li>
              </ol>
              <div className='spacer' />
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                  <img alt='' className='img-responsive testimonial-image img-center' src='https://www.evernote.com/l/AHRIBndcq-5GwZVnSy1_D7lskpH4OcJcUKUB/image.png' />
                </div>
                <div className='col-xs-12 col-sm-6'>
                  <h3>Built by Suzanne Atkinson</h3>
                  <p className='large-p'>
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
          </div>
        </div>
      </div>
    );
  }
}
