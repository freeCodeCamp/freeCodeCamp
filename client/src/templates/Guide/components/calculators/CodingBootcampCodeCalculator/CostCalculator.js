import React from 'react';
import PropTypes from 'prop-types';
import { updateCalculator } from './calculator';

const propTypes = {
  bootcamps: PropTypes.array,
  city: PropTypes.string,
  lastYearsIncome: PropTypes.number
};

class CostCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.rootRef = React.createRef();
  }
  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  updateChart() {
    const { bootcamps, city, lastYearsIncome } = this.props;
    if (city !== null && lastYearsIncome !== null) {
      const node = this.rootRef.current;
      updateCalculator(node, bootcamps, city, lastYearsIncome);
    }
  }

  render() {
    return <div ref={this.rootRef} />;
  }
}

CostCalculator.propTypes = propTypes;

export default CostCalculator;
