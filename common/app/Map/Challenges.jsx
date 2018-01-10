import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Challenge from './Challenge.jsx';

const propTypes = {
  challenges: PropTypes.array.isRequired
};

export default class Challenges extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.challenges !== nextProps.challenges;
  }
  render() {
    const { challenges } = this.props;
    if (!challenges.length) {
      return <div>No Challenges Found</div>;
    }
    return (
      <div>
        {
          challenges.map(dashedName => (
            <Challenge
              dashedName={ dashedName }
              key={ dashedName }
            />
          ))
        }
      </div>
    );
  }
}

Challenges.displayName = 'Challenges';
Challenges.propTypes = propTypes;
