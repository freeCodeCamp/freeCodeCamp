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

  _toggleMoreInfo: function() {
    this.setState({
      isMoreInfoOpen: !this.state.isMoreInfoOpen
    });
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

  _renderMoreInfo: function() {
    var details = this.props.details.map(function(sentance, index)  {
      return React.createElement("p", {key:  index },  sentance );
    });

    return (
      React.createElement(Row, null, 
        React.createElement(Col, {xs:  12 }, 
           details 
        )
      )
    );
  },

  render: function() {
    var isMoreInfoOpen = this.state.isMoreInfoOpen;

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
                React.createElement("p", null,  this.props.brief), 
                React.createElement("div", null, 
                   isMoreInfoOpen ? this._renderMoreInfo() : null, 
                  React.createElement(Button, {
                    onClick:  this._toggleMoreInfo, 
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
