import PropTypes from 'prop-types';
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import cx from 'classnames';
import assign from 'object-assign';
import { allSpinners } from './spinners';

if (!process.env.REACT_SPINKIT_NO_STYLES) {
  /* eslint-disable global-require */
  require('loaders.css');
  require('../css/base.css');
  require('../css/loaders-css.css');
  require('../css/fade-in.css');
  require('../css/chasing-dots.css');
  require('../css/circle.css');
  require('../css/cube-grid.css');
  require('../css/double-bounce.css');
  require('../css/folding-cube.css');
  require('../css/pulse.css');
  require('../css/rotating-plane.css');
  require('../css/three-bounce.css');
  require('../css/wandering-cubes.css');
  require('../css/wave.css');
  require('../css/wordpress.css');
  /* eslint-enable global-require */
}

const noFadeInWarning =
  "Deprecation Warning (react-spinkit): noFadeIn prop should be replaced with fadeIn='none'";

class Spinner extends React.Component {

  constructor(props) {
    if (props.noFadeIn) {
      console.warn(noFadeInWarning); // eslint-disable-line no-console
    }
    super(props);
    this.displayName = 'SpinKit';
  }

  render() {
    const spinnerInfo = allSpinners[this.props.name] || allSpinners['three-bounce'];
    const classes = cx({
      'sk-fade-in': this.props.fadeIn === 'full' && !this.props.noFadeIn,
      'sk-fade-in-half-second': this.props.fadeIn === 'half' && !this.props.noFadeIn,
      'sk-fade-in-quarter-second': this.props.fadeIn === 'quarter' && !this.props.noFadeIn,
      'sk-spinner': !this.props.overrideSpinnerClassName,
      [this.props.overrideSpinnerClassName]: !!this.props.overrideSpinnerClassName,
      [this.props.className]: !!this.props.className,
      [spinnerInfo.className || this.props.name]: true,
    });

    const props = assign({}, this.props);
    delete props.name;
    delete props.fadeIn;
    delete props.noFadeIn;
    delete props.overrideSpinnerClassName;
    delete props.className;

    if (this.props.color) {
      props.style = props.style ?
        { ...props.style, color: this.props.color } :
        { color: this.props.color };
    }

    return (
      <div {...props} className={classes}>
        {[...Array(spinnerInfo.divCount)].map((_, idx) => <div key={idx} />)}
      </div>
    );
  }
}

Spinner.propTypes = {
  name: PropTypes.string.isRequired,
  noFadeIn: PropTypes.bool,
  fadeIn: PropTypes.oneOf(['full', 'half', 'quarter', 'none']),
  overrideSpinnerClassName: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};

Spinner.defaultProps = {
  name: 'three-bounce',
  noFadeIn: false,
  fadeIn: 'full',
  overrideSpinnerClassName: '',
};

module.exports = Spinner;
