import React from 'react';

export default React.createClass({
  displayName: 'Points',

  propTypes: {
    'aria-controls': React.PropTypes.string,
    className: React.PropTypes.string,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired,
    points: React.PropTypes.func,
    title: React.PropTypes.node
  },

  render() {
    let {
      href,
      title,
      points,
      'aria-controls': ariaControls,  // eslint-disable-line react/prop-types
      className,
      onClick
    } = this.props;

    let linkProps = {
      title,
      href,
      onClick,
      className,
      ref: 'anchor',
      'aria-controls': ariaControls
    };

    return (
      <li role='presentation'>
        <a { ...linkProps }>[ { points || 1 } ]</a>
      </li>
    );
  }
});
