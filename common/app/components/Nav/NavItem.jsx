import React from 'react';
import classnames from 'classnames';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  static displayName = 'NavItem'
  static propTypes = {
    onSelect: React.PropTypes.func,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    eventKey: React.PropTypes.any,
    target: React.PropTypes.string
  }

  handleClick(e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(
          this.props.eventKey,
          this.props.href,
          this.props.target
        );
      }
    }
  }

  render() {
    const {
      disabled,
      active,
      href,
      title,
      target,
      children,
    } = this.props;

    const classes = {
      'active': active,
      'disabled': disabled
    };

    return (
      <li
        className={ joinClasses(props.className, classSet(classes)) }
        { ...this.props }>
        <a
          href={href}
          title={title}
          target={target}
          className={ this.props.aClassName }
          onClick={this.handleClick}
          ref="anchor">
          { children }
        </a>
      </li>
    );
  }
}
