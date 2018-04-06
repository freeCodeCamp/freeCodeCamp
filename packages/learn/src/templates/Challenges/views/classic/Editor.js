import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';

import { executeChallenge, updateFile } from '../../redux';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

require('codemirror/mode/htmlmixed/htmlmixed');
require('codemirror/mode/javascript/javascript');

const propTypes = {
  contents: PropTypes.string,
  executeChallenge: PropTypes.func.isRequired,
  ext: PropTypes.string,
  fileKey: PropTypes.string,
  updateFile: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      executeChallenge,
      updateFile
    },
    dispatch
  );

const modeMap = {
  html: 'htmlmixed',
  js: 'javascript',
  jsx: 'javascript'
};

class Editor extends PureComponent {
  constructor(...props) {
    super(...props);

    this._editor = null;
  }

  handleChange = editorValue => {
    const { updateFile, fileKey } = this.props;
    updateFile({ key: fileKey, editorValue });
  };

  render() {
    const { contents, executeChallenge, ext } = this.props;

    return (
      <div className='classic-editor editor'>
        <CodeMirror
          onBeforeChange={(editor, something, newValue) =>
            this.handleChange(newValue)
          }
          options={{
            mode: modeMap[ext],
            theme: 'material',
            lineNumbers: true,
            lineWrapping: true,
            extraKeys: {
              Esc() {
                document.activeElement.blur();
              },
              Tab(cm) {
                if (cm.somethingSelected()) {
                  return cm.indentSelection('add');
                }
                const spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
                return cm.replaceSelection(spaces);
              },
              'Shift-Tab': function(cm) {
                return cm.indentSelection('subtract');
              },
              'Ctrl-Enter': function() {
                executeChallenge();
                return false;
              },
              'Cmd-Enter': function() {
                executeChallenge();
                return false;
              }
              // TODO: Not working in cm2
              // 'Ctrl-/': function(cm) {
              //   cm.toggleComment();
              // },
              // 'Cmd-/': function(cm) {
              //   cm.toggleComment();
              // }
            }
          }}
          value={contents}
        />
      </div>
    );
  }
}

Editor.displayName = 'Editor';
Editor.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
