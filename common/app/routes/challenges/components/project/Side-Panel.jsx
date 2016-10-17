import React, { PropTypes } from 'react';

import PureComponent from 'react-pure-render/component';

export default class SidePanel extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    blockType: PropTypes.string,
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
    const { title, description, isCompleted, blockType } = this.props;
    let titleString = () => {
      if ((!blockType || blockType === 'undefined') && title) {
        return title;
      } else if (!title) {
        return 'Happy Coding!';
      }
      return `${blockType}: ${title}`;
    };
    return (
      <div>
        <h4 className='text-center challenge-instructions-title'>
          { titleString() }
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
