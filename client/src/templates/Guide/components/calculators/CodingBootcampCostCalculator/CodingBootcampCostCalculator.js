import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import ArticleLayout from '../../ArticleLayout';

import CostCalculatorChart from './CostCalculatorChart';
import './CodingBootcampCostCalculator.css';

const propTypes = {
  data: PropTypes.object
};

class CostCalculator extends React.Component {
  state = {
    cities: [],
    incomes: [],
    city: null,
    cityLabel: '_______',
    lastYearsIncome: null,
    lastYearsIncomeLabel: '_______',
    bootcamps: null
  };

  initComponent() {
    const bootcamps = JSON.parse(
      document.getElementById('bootcamps').innerHTML
    );

    document
      .getElementById('bootcamps-data-link')
      .setAttribute(
        'href',
        `data:text/plain;charset=utf-8,${encodeURIComponent(
          JSON.stringify(bootcamps, null, 2)
        )}`
      );

    this.setState({
      bootcamps: bootcamps,
      cities: bootcamps
        .reduce((previous, current) => {
          return previous.concat(current.cities);
        }, [])
        .filter((city, idx, me) => {
          return me.indexOf(city) === idx;
        })
        .sort(),
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

    const selectCityDiv = document.getElementById('select-city');
    const selectIncomeDiv = document.getElementById('select-income');
    const cityLabelSpan = document.getElementById('city-label');
    const lastYearsIncomeLabelSpan = document.getElementById(
      'last-years-income-label'
    );
    const chartComponentDiv = document.getElementById('chart-component');
    this.setState({
      init: true,
      selectCityDiv,
      selectIncomeDiv,
      cityLabelSpan,
      lastYearsIncomeLabelSpan,
      chartComponentDiv
    });

    this.handleCitySelector = this.handleCitySelector.bind(this);
    this.handleIncomeSelector = this.handleIncomeSelector.bind(this);
  }

  componentDidMount() {
    this.initComponent();
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

  renderSelectCity() {
    return (
      <select
        className='form-control'
        defaultValue=''
        onChange={this.handleCitySelector}
      >
        <option disabled='true' value=''>
          Select City
        </option>
        {this.state.cities.map((city, idx) => {
          let cityLabel =
            typeof city !== 'undefined'
              ? city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
              : '';
          return (
            <option key={idx} value={city}>
              {cityLabel}
            </option>
          );
        })}
      </select>
    );
  }

  renderSelectIncome() {
    return (
      <select
        className='form-control'
        defaultValue=''
        onChange={this.handleIncomeSelector}
      >
        <option disabled='true' value=''>
          Select Income
        </option>
        {this.state.incomes.map((income, idx) => {
          let incomeLabel =
            typeof income !== 'undefined'
              ? parseInt(income, 10).toLocaleString()
              : '0';
          return (
            <option key={idx} value={income}>
              ${incomeLabel}
            </option>
          );
        })}
      </select>
    );
  }

  renderChartComponent() {
    return (
      <CostCalculatorChart
        bootcamps={this.state.bootcamps}
        city={this.state.city}
        lastYearsIncome={this.state.lastYearsIncome}
      />
    );
  }

  render() {
    if (!this.state.init) {
      return null;
    }
    return (
      <div className='CodingBootcampCostCalculator'>
        {ReactDOM.createPortal(
          this.renderSelectCity(),
          this.state.selectCityDiv
        )}
        {ReactDOM.createPortal(
          this.renderSelectIncome(),
          this.state.selectIncomeDiv
        )}
        {ReactDOM.createPortal(this.state.cityLabel, this.state.cityLabelSpan)}
        {ReactDOM.createPortal(
          this.state.lastYearsIncomeLabel,
          this.state.lastYearsIncomeLabelSpan
        )}
        {ReactDOM.createPortal(
          this.renderChartComponent(),
          this.state.chartComponentDiv
        )}
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
