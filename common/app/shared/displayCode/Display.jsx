var React = require('react'),
    Tailspin = require('tailspin');

var Editor = React.createClass({

  propTypes: {
    value: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      value: [
        '/**',
        '* Your output will go here.',
        '* Console.log() -type statements',
        '* will appear in your browser\'s',
        '* DevTools JavaScript console.',
        '**/'
      ].join('\n')
    };
  },

  render: function() {
    var value = this.props.value;
    var options = {
      lineNumbers: false,
      lineWrapping: true,
      mode: 'text',
      readOnly: 'noCursor',
      textAreaClassName: 'hide-textarea',
      theme: 'monokai',
      value: value
    };

    var config = {
      setSize: ['100%', '100%']
    };

    return (
      <form className='code'>
        <div className='form-group codeMirrorView'>
          <Tailspin
            { ...options }
            config={ config }/>
        </div>
      </form>
    );
  }
});

module.exports = Editor;
