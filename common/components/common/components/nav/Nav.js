var React = require('react');

var NavBar = React.createClass({displayName: "NavBar",
  render: function() {
    var fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
    return (
      React.createElement("nav", {className: "navbar navbar-default navbar-fixed-top nav-height"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "navbar-header"}, 
            React.createElement("button", {
              type: "button", 
              "data-toggle": "collapse", 
              "data-target": ".navbar-collapse", 
              className: "hamburger navbar-toggle"}, 
              React.createElement("div", {className: "col-xs-6"}, 
                React.createElement("span", {className: "hamburger-text"}, "Menu")
              ), 
              React.createElement("div", {className: "col-xs-6"}, 
                React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"}), 
                React.createElement("span", {className: "icon-bar"})
              )
            ), 
            React.createElement("a", {
              href: "/", 
              className: "navbar-brand"}, 
              React.createElement("img", {
                src:  fCClogo, 
                alt: "learn to code javascript at Free Code Camp logo", 
                className: "img-responsive nav-logo"})
            )
          ), 
          React.createElement("div", {className: "collapse navbar-collapse"}, 
            React.createElement("ul", {className: "nav navbar-nav navbar-right hamburger-dropdown"}, 
              React.createElement("li", null, React.createElement("a", {href: "/coursewares"}, "Challenges")), 
              React.createElement("li", null, React.createElement("a", {href: "/chat"}, "Chat")), 
              React.createElement("li", null, 
                React.createElement("a", {
                  href: "http://forum.freecodecamp.com", 
                  target: "_blank"}, "Forum")
              ), 
              React.createElement("li", null, React.createElement("a", {href: "/bonfires"}, "Bonfires")), 
              React.createElement("li", null, "     "), 
              React.createElement("li", null, 
                React.createElement("a", {href: "/login", className: "btn signup-btn signup-btn-nav"}, 
                  "Sign in"
                )
              )
            )
          )
        )
      )
    );
  }
});
module.exports = NavBar;
