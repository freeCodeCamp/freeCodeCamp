var React = require('react/addons');
var joinClasses = require('react-bootstrap/lib/utils/joinClasses');
var classSet = React.addons.classSet;
var BootstrapMixin = require('react-bootstrap').BootstrapMixin;

var NavItem = React.createClass({
  mixins: [BootstrapMixin],

  propTypes: {
    onSelect: React.PropTypes.func,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    eventKey: React.PropTypes.any,
    target: React.PropTypes.string
  },

  getDefaultProps: function () {
    return {
      href: '#'
    };
  },

  render: function () {
    var {
          disabled,
          active,
          href,
          title,
          target,
          children,
        } = this.props,
        props = this.props,
        classes = {
          'active': active,
          'disabled': disabled
        };

    return (
      <li {...props} className={joinClasses(props.className, classSet(classes))}>
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
  },

  handleClick: function (e) {
    if (this.props.onSelect) {
      e.preventDefault();

      if (!this.props.disabled) {
        this.props.onSelect(this.props.eventKey, this.props.href, this.props.target);
      }
    }
  }
});

module.exports = NavItem;
