var React = require('react'),
    $__0=
      
      
      
      
      
      require('react-bootstrap'),Well=$__0.Well,Grid=$__0.Grid,Row=$__0.Row,Col=$__0.Col,Button=$__0.Button;

var SidePanel = React.createClass({displayName: "SidePanel",
  // props
  // difficulty - number of flames
  // brief - description
  // details - long description array of sentences
  propTypes: {
    difficulty: React.PropTypes.number,
    brief: React.PropTypes.string,
    detauls: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      difficulty: 2,
      brief: 'This is a brief description',
      details: [
        'a sentence',
        'another'
      ]
    };
  },

  getInitialState: function() {
    return {
      isMoreInfoOpen: false
    };
  },

  _handleClick: function() {
    this.setState({
      isMoreInfoOpen: !this.state.dropDownIsOpen
    });
  },

  _renderDropdown: function () {
    return (
      React.createElement("div", {style: { background: '#ccc'}}
      )
    );
  },

  _renderHover: function() {
    return (
      React.createElement(Row, {className: "hide"}, 
        React.createElement(Col, {xs:  12 }, 
          React.createElement("p", null, "Your goal is to fix the failing test."), 
          React.createElement("p", null, "First, run all the tests by clicking 'Run code' or by pressing Control + Enter"), 
          React.createElement("p", null, "The failing test is in red. Fix the code so that all tests pass. Then you can move on to the next Bonfire."), 
          React.createElement("p", null, "Make this function return true no matter what."), 
          React.createElement(Button, {
            bsStyle: "primary", 
            block:  true, 
            className: "btn-primary-ghost"}, 
            React.createElement("span", {className: "ion-arrow-up-b"}), 
            "Less information"
          )
        )
      )
    );
  },

  _renderFlames: function() {
    var difficulty = this.props.difficulty;

    return [1,2,3,4,5].map(function(num)  {
      var className = 'ion-ios-flame';
      if (num > difficulty) {
        className += '-outline';
      }
      return (
        React.createElement("i", {
          key:  num, 
          className:  className })
      );
    });
  },

  render: function() {
    var dropdown = this.state.isMoreInfoOpen ? this._renderInfo() : null;

    return (
      React.createElement(Grid, null, 
        React.createElement("h1", {classNameName: "text-center"}, "Meet Bonfire"), 
        React.createElement("h2", {classNameName: "text-center"}, 
          React.createElement("div", {classNameName: "bonfire-flames"}, 
            "Difficulty: ", 
             this._renderFlames() 
          )
        ), 
        React.createElement(Well, null, 
          React.createElement(Row, null, 
            React.createElement(Col, {xs:  12 }, 
              React.createElement("div", {className: "bonfire-instructions"}, 
                React.createElement("p", null, "Click the button below for further instructions."), 
                React.createElement("div", null, 
                   dropdown, 
                  React.createElement(Button, {
                    bsStyle: "primary", 
                    block:  true, 
                    className: "btn-primary-ghost"}, 
                    React.createElement("span", {className: "ion-arrow-down-b"}), 
                    "More information"
                  )
                )
              )
            )
          )
        )
      )
    );
  }
});

module.exports = SidePanel;
