var React = require('react'),
  debug = require('debug')('freecc:comp:editor'),
  jshint = require('jshint').JSHINT,
  CodeMirror = require('react-code-mirror');

var Editor = React.createClass({

  propTypes: {
    value: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      value: 'console.log(\'awesome\')'
    };
  },

  getInitialState: function() {
    return {
      CodeMirrorValue: ''
    };
  },

  render: function() {
    var options = {
      autoCloseBrackets: true,
      gutters: ['CodeMirror-lint-markers'],
      lint: true,
      linter: jshint,
      lineNumbers: true,
      lineWrapping: true,
      mode: 'javascript',
      matchBrackets: true,
      runnable: true,
      scrollbarStyle: 'null',
      theme: 'monokai',
      textAreaClassName: 'hide-textarea',
      value: this.state.CodeMirrorValue,
      onChange: e => {
        this.setState({ CodeMirrorValue: e.target.value});
      }
    };

    var config = {
      setSize: ['100%', 'auto'],
      extraKeys: {
        Tab: function(cm) {
          debug('tab pressed');
          if (cm.somethingSelected()) {
            cm.indentSelection('add');
          } else {
            var spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
            cm.replaceSelection(spaces);
          }
        },
        'Shift-Tab': function(cm) {
          debug('shift-tab pressed');
          if (cm.somethingSelected()) {
            cm.indentSelection('subtract');
          } else {
            var spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
            cm.replaceSelection(spaces);
          }
        },
        'Ctrl-Enter': function() {
          debug('C-enter pressed');
          // execute bonfire action
          return false;
        }
      }
    };

    return (
      <div id='mainEditorPanel'>
        <form className='code'>
          <div className='form-group codeMirrorView'>
            <CodeMirror
              { ...options }
              config={ config }/>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Editor;
