import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Link } from 'react-router';
import PureComponent from 'react-pure-render/component';
import classnames from 'classnames';

import { makePanelHiddenSelector } from '../../../redux/selectors';

const mapDispatchToProps = {};

const mapStateToProps = () => createSelector(
  makePanelHiddenSelector(),
  ( isHidden ) => ({ isHidden })
);

const propTypes = {
  block: PropTypes.string,
  dashedName: PropTypes.string,
  isHidden: PropTypes.bool,
  title: PropTypes.string
};

export class WikiTopic extends PureComponent {
  render() {
    const {
      block,
      dashedName,
      isHidden,
      title
    } = this.props;
    const topicClassName = classnames({
      'text-primary': true,
      'padded-ionic-icon': true,
      'negative-15': true,
      'challenge-title': true
    });
    if (isHidden) {
      return null;
    }
    return (
      <p
        className={ topicClassName }
        key={ title }
        >
        <Link to={ `/wiki/${block}/${dashedName}` }>
          <span>
            { title }
          </span>
        </Link>
      </p>
    );
  }
}

WikiTopic.displayName = 'WikiTopic';
WikiTopic.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WikiTopic);
