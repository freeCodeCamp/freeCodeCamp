import React, { PropTypes } from 'react';

import PureComponent from 'react-pure-render/component';
import { Col } from 'react-bootstrap';

import Editor from './Editor.jsx';
import SidePanel from './Side-Panel.jsx';
import Preview from './Preview.jsx';

export default class extends PureComponent {
  static displayName = 'Challenge';

  static propTypes = {
    showPreview: PropTypes.bool
  };

  renderPreview(showPreview) {
    if (!showPreview) {
      return null;
    }
    return (
      <Col
        lg={ 3 }
        md={ 5 }>
        <Preview />
      </Col>
    );
  }

  render() {
    const { showPreview } = this.props;

    return (
      <div>
        <Col
          lg={ 3 }
          md={ showPreview ? 3 : 4 }>
          <SidePanel />
        </Col>
        <Col
          lg={ showPreview ? 6 : 9 }
          md={ showPreview ? 5 : 8 }>
          <Editor />
        </Col>
        { this.renderPreview(showPreview) }
      </div>
    );
  }
}
