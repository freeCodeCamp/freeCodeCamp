import React, { Component } from 'react';
import PropTypes from 'prop-types';
import d3 from 'react-d3';
import CalHeatMap from 'cal-heatmap';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_months';

import { FullWidthRow } from '../../../helperComponents';
import { userByNameSelector } from '../../../redux';

function ensureD3() {
  // CalHeatMap requires d3 to be available on window
  if (typeof window !== 'undefined') {
    if ('d3' in window) {
      return;
    } else {
      window.d3 = d3;
    }
    return;
  }
  return;
}

const mapStateToProps = createSelector(
  userByNameSelector,
  ({ calendar, streak }) => ({ calendar, streak })
);

const propTypes = {
  calendar: PropTypes.object,
  streak: PropTypes.shape({
    current: PropTypes.number,
    longest: PropTypes.number
  })
};

class HeatMap extends Component {
  constructor(props) {
    super(props);

    this.renderMap = this.renderMap.bind(this);
  }
  componentDidMount() {
    ensureD3();
    this.renderMap();
  }

  renderMap() {
    const { calendar = {} } = this.props;
    if (Object.keys(calendar).length === 0) {
      return null;
    }
    const today = new Date();
    const cal = new CalHeatMap();
    const rectSelector = '#cal-heatmap > svg > svg.graph-legend > g > rect.r';
    const calLegendTitles = ['less', '', '', 'more'];
    const firstTS = Object.keys(calendar)[0];
    let start = new Date(firstTS * 1000);
    const monthsSinceFirstActive = differenceInCalendarMonths(
      today,
      start
    );
    cal.init({
      itemSelector: '#cal-heatmap',
      domain: 'month',
      subDomain: 'day',
      domainDynamicDimension: true,
      domainGutter: 5,
      data: calendar,
      cellSize: 15,
      cellRadius: 3,
      cellPadding: 2,
      tooltip: true,
      range: monthsSinceFirstActive < 12 ? monthsSinceFirstActive + 1 : 12,
      start,
      legendColors: ['#cccccc', '#006400'],
      legend: [1, 2, 3],
      label: {
        position: 'top'
      }
    });
    calLegendTitles.forEach(function(title, i) {
      document
      .querySelector(rectSelector + (i + 1).toString() + '> title')
          .innerHTML = title;
        });
    return null;
  }

  render() {
    const { streak = {} } = this.props;
    return (
      <div id='cal-heatmap-container'>
        <Helmet>
          <link href='/css/cal-heatmap.css' rel='stylesheet' />
        </Helmet>
        <FullWidthRow>
          <div id='cal-heatmap' />
        </FullWidthRow>
        <FullWidthRow>
          <div className='streak-container'>
            <span className='streak'>
              <strong>Longest Streak:</strong> { streak.longest || 1 }
            </span>
            <span className='streak'>
              <strong>Current Streak:</strong> { streak.current || 1 }
            </span>
          </div>
        </FullWidthRow>
        <hr />
      </div>
    );
  }
}

HeatMap.displayName = 'HeatMap';
HeatMap.propTypes = propTypes;

export default connect(mapStateToProps)(HeatMap);
