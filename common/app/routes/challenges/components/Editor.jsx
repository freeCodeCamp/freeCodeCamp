import React, { PropTypes } from 'react';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';

import Codemirror from 'react-codemirror';
import NoSSR from 'react-no-ssr';
import PureComponent from 'react-pure-render/component';

const mapStateToProps = createSelector(
  state => state.app.windowHeight,
  state => state.app.navHeight,
  (windowHeight, navHeight) => ({ height: windowHeight - navHeight - 50 })
);

const options = {
  lint: true,
  lineNumbers: true,
  mode: 'javascript',
  theme: 'monokai',
  runnable: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  scrollbarStyle: 'null',
  lineWrapping: true,
  gutters: ['CodeMirror-lint-markers']
};

export class Editor extends PureComponent {
  static displayName = 'Editor';
  static propTypes = {
    height: PropTypes.number
  };

  render() {
    const { height } = this.props;
    const style = {};
    if (height) {
      style.height = height + 'px';
    }
    return (
      <div
        className='challenges-editor'
        style={ style }>
        <NoSSR>
          <Codemirror
            options={ options }
            value='foo test' />
        </NoSSR>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Editor);
