/* global CalHeatMap */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import d3 from 'react-d3';
import CalHeatMap from 'cal-heatmap';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import subDays from 'date-fns/sub_days';
import differenceInMonths from 'date-fns/difference_in_months';

import { FullWidthRow } from '../../../helperComponents';
import { userSelector } from '../../../redux';

function ensureD3() {
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
  userSelector,
  ({ calendar }) => ({ calendar })
);

class HeatMap extends Component {
  constructor(props) {
    super(props);

    this.renderMap = this.renderMap.bind(this);
  }
  componentDidMount() {
    ensureD3();
  }

  renderMap() {
    const { calendar = {} } = this.props;
    if (Object.keys(calendar).length === 0) {
      return null;
    }
    const today = new Date();
    var cal = new CalHeatMap();
    var rectSelector = '#cal-heatmap > svg > svg.graph-legend > g > rect.r';
    var calLegendTitles = ['less', '', '', 'more'];
    let start = today;
    const firstTS = Object.keys(calendar)[0];
    const monthsSinceFirstActive = differenceInMonths(
      today,
      new Date(firstTS * 1000)
    );
    let active = 1;
    if (monthsSinceFirstActive > 12) {
      // if we got to 365, we trim off the current month
      start = subDays(today, 334);
      active = 12;
    } else if (monthsSinceFirstActive > 1) {
      start = subDays(today, 30 * monthsSinceFirstActive);
      active = monthsSinceFirstActive;
    }
    cal.init({
      itemSelector: '#cal-heatmap',
      domain: 'month',
      subDomain: 'day',
      domainGutter: 5,
      data: calendar,
      cellSize: 15,
      cellRadius: 3,
      cellPadding: 2,
      tooltip: true,
      range: active,
      start,
      legendColors: ['#cccccc', '#006400'],
      legend: [1, 2, 3],
      label: {
        position: 'top'
      }
    });
    calLegendTitles.forEach(function(title, i) {
        document.querySelector(rectSelector + (i + 1).toString() + '> title').innerHTML = title;
      });
      return null;
  }

  render() {
    return (
      <div id='cal-heatmap-container'>
        <Helmet>
          <link href='/css/cal-heatmap.css' rel='stylesheet' />
        </Helmet>
        <FullWidthRow>
          <div id='cal-heatmap' />
        </FullWidthRow>
        {
          typeof window !== 'undefined' && 'd3' in window ?
            this.renderMap() :
            null
        }
      </div>
    );
  }
}

HeatMap.displayName = 'HeatMap';

export default connect(mapStateToProps)(HeatMap);
