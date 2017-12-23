import React, { PropTypes } from 'react';

import PureComponent from 'react-pure-render/component';

export default class SidePanel extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    isCompleted: PropTypes.bool,
    isSignedIn: PropTypes.bool
  };

  renderIcon(isCompleted) {
    if (!isCompleted) {
      return null;
    }
    return (
      <i
        className='ion-checkmark-circled text-primary'
        title='Completed'
      />
    );
  }

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
        <h4 className='text-center challenge-instructions-title'>
          { title }
          { this.renderIcon(isCompleted) }
        </h4>
        <hr />
        <ul>
          { this.renderDescription(title, description) }
        </ul>
      </div>
    );
  }
}
