import React, { Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired
};

class PrismFormatted extends Component {
  componentDidMount() {
    // Just in case 'current' has not been created, though it should have been.
    if (this.instructionsRef.current) {
      Prism.highlightAllUnder(this.instructionsRef.current);
    }
  }

  constructor(props) {
    super(props);
    this.instructionsRef = React.createRef();
  }

  render() {
    const { text, className } = this.props;
    return (
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: text }}
        ref={this.instructionsRef}
      ></div>
    );
  }
}

PrismFormatted.displayName = 'PrismFormatted';
PrismFormatted.propTypes = propTypes;

export default PrismFormatted;
