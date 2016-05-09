import React, { PropTypes } from 'react';

import PureComponent from 'react-pure-render/component';
import { Col } from 'react-bootstrap';

import Editor from './Editor.jsx';
import SidePanel from './Side-Panel.jsx';
import Preview from './Preview.jsx';

export default class extends PureComponent {
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
