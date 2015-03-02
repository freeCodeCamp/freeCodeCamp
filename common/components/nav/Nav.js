var React = require('react');

var NavBar = React.createClass({displayName: "NavBar",
  render: function() {
    var fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
    return (
      React.createElement("nav", {class: "navbar navbar-default navbar-fixed-top nav-height"}, 
        React.createElement("div", {class: "container"}, 
          React.createElement("div", {class: "navbar-header"}, 
            React.createElement("button", {
              type: "button", 
              "data-toggle": "collapse", 
              "data-target": ".navbar-collapse", 
              class: "hamburger navbar-toggle"}, 
              React.createElement("div", {class: "col-xs-6"}, 
                React.createElement("span", {class: "hamburger-text"}, "Menu")
              ), 
              React.createElement("div", {class: "col-xs-6"}, 
                React.createElement("span", {class: "sr-only"}, "Toggle navigation"), 
                React.createElement("span", {class: "icon-bar"}), 
                React.createElement("span", {class: "icon-bar"}), 
                React.createElement("span", {class: "icon-bar"})
              )
            ), 
            React.createElement("a", {
              href: "/", 
              class: "navbar-brand"}, 
              React.createElement("img", {
                src:  fCClogo, 
                alt: "learn to code javascript at Free Code Camp logo", 
                class: "img-responsive nav-logo"})
            )
          ), 
          React.createElement("div", {class: "collapse navbar-collapse"}, 
            React.createElement("ul", {class: "nav navbar-nav navbar-right hamburger-dropdown"}, 
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
                React.createElement("a", {href: "/login", class: "btn signup-btn signup-btn-nav"}, 
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
