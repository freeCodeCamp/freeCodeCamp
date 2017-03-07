import React, { PropTypes, PureComponent } from 'react';
import ChallengeTitle from '../../Challenge-Title.jsx';

const propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
  isCompleted: PropTypes.bool,
  isSignedIn: PropTypes.bool,
  title: PropTypes.string
};

export default class SidePanel extends PureComponent {
  renderDescription(title = '', description = []) {
    return description.map((line, index) => (
      <li
        className='step-text wrappable'
        dangerouslySetInnerHTML={{ __html: line }}
        key={ title.slice(6) + index }
      />
    ));
  }

  render() {
    const { title, description, isCompleted } = this.props;
    return (
      <div>
        <ChallengeTitle isCompleted={ isCompleted }>
          { title }
        </ChallengeTitle>
        <ul>
          { this.renderDescription(title, description) }
        </ul>
      </div>
    );
  }
}

SidePanel.displayName = 'ProjectSidePanel';
SidePanel.propTypes = propTypes;
