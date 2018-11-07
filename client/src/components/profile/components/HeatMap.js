import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import FullWidthRow from '../../helpers/FullWidthRow';

import './heatmap.css';

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

  render() {
    const { streak = {} } = this.props;
    return (
      <FullWidthRow id='cal-heatmap-container'>
        <Helmet>
          <script
            src='https://cdnjs.cloudflare.com/ajax/libs/d3/5.7.0/d3.min.js'
            type='text/javascript'
          />
          <link href='/css/cal-heatmap.css' rel='stylesheet' />
        </Helmet>
        <FullWidthRow>
          <h3>This needs a refactor to use something like</h3>
          <a href='https://www.npmjs.com/package/react-calendar-heatmap'>
            react-calendar-heatmap
          </a>
        </FullWidthRow>
        <FullWidthRow>
          <div className='streak-container'>
            <span className='streak'>
              <strong>Longest Streak:</strong> {streak.longest || 1}
            </span>
            <span className='streak'>
              <strong>Current Streak:</strong> {streak.current || 1}
            </span>
          </div>
        </FullWidthRow>
        <hr />
      </FullWidthRow>
    );
  }
}

HeatMap.displayName = 'HeatMap';
HeatMap.propTypes = propTypes;

export default HeatMap;
