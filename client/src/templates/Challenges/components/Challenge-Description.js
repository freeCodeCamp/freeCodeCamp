import React, { Fragment, Component } from 'react';
import Prism from 'prismjs';
import PropTypes from 'prop-types';

import './challenge-description.css';

const propTypes = {
  description: PropTypes.string,
  instructions: PropTypes.string,
  section: PropTypes.string
};

class ChallengeDescription extends Component {
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
    const { description, instructions, section } = this.props;
    return (
      <div
        className={`challenge-instructions ${section}`}
        ref={this.instructionsRef}
      >
        <div dangerouslySetInnerHTML={{ __html: description }} />
        {instructions && (
          <Fragment>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: instructions }} />
          </Fragment>
        )}
        <hr />
      </div>
    );
  }
}

ChallengeDescription.displayName = 'ChallengeDescription';
ChallengeDescription.propTypes = propTypes;

export default ChallengeDescription;
