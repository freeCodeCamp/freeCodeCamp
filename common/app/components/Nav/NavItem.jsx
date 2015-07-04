import React from 'react';
import classNames from 'classnames';
import BootstrapMixin from 'react-bootstrap/lib/BootstrapMixin';

export default React.createClass({
  displayName: 'FCCNavItem',
  mixins: [BootstrapMixin],

  propTypes: {
    active: React.PropTypes.bool,
    'aria-controls': React.PropTypes.string,
    disabled: React.PropTypes.bool,
    eventKey: React.PropTypes.any,
    href: React.PropTypes.string,
    linkId: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    role: React.PropTypes.string,
    target: React.PropTypes.string,
    title: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      href: '#'
    };
  },

  handleClick(e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  },

  render() {
    let {
      role,
      linkId,
      disabled,
      active,
      href,
      title,
      target,
      children,
      'aria-controls': ariaControls,  // eslint-disable-line react/prop-types
      className,
      ...props
    } = this.props;

    let classes = {
      active,
      disabled
    };

    let linkProps = {
      role,
      href,
      title,
      target,
      id: linkId,
      onClick: this.handleClick,
      ref: 'anchor'
    };

    if (!role && href === '#') {
      linkProps.role = 'button';
    }

    return (
      <li
        {...props}
        role='presentation'>
        <a
          { ...linkProps }
          aria-selected={ active }
          aria-controls={ ariaControls }
          className={ className }>
          { children }
        </a>
      </li>
    );
  }
});
