import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { createSelector } from 'reselect';
import PureComponent from 'react-pure-render/component';

import Editor from './Editor.jsx';
import SidePanel from './Side-Panel.jsx';
import Preview from './Preview.jsx';
import { challengeSelector } from '../redux/selectors';

const mapStateToProps = createSelector(
  challengeSelector,
  state => state.challengesApp.files,
  state => state.challengesApp.path,
  ({ challenge, showPreview, mode }, files, path) => ({
    content: files[path] && files[path].contents,
    challenge,
    showPreview,
    mode
  })
);

export class Challenge extends PureComponent {
  static displayName = 'Challenge';

  static propTypes = {
    showPreview: PropTypes.bool,
    challenge: PropTypes.object
  };

  static defaultProps = {
    challenge: {}
  };

  renderPreview(showPreview) {
    if (!showPreview) {
      return null;
    }
    return (
      <Col
        lg={ 3 }
        md={ 4 }>
        <Preview />
      </Col>
    );
  }

  render() {
    const { content, challenge, mode, showPreview } = this.props;
    return (
      <div>
        <Col
          lg={ 3 }
          md={ showPreview ? 3 : 4 }>
          <SidePanel { ...challenge }/>
        </Col>
        <Col
          lg={ showPreview ? 6 : 9 }
          md={ showPreview ? 5 : 8 }>
          <Editor
            content={ content }
            mode={ mode }
          />
        </Col>
        { this.renderPreview(showPreview) }
      </div>
    );
  }
}

export default connect(mapStateToProps)(Challenge);
