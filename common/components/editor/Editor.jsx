var React = require('react'),
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
        Tab: function() {
          console.log('tab');
          return false;
        },
        'Ctrl-Enter': function() {
          console.log('ctrl enter');
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
