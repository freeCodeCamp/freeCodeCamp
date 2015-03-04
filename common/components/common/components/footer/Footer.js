var React = require('react');

var Footer = React.createClass({displayName: "Footer",
  render: function() {
    return (
      React.createElement("div", {className: "fcc-footer"}, 
        React.createElement("div", {className: "col-xs-12 hidden-xs hidden-sm"}, 
          React.createElement("a", {
            href: "http://blog.freecodecamp.com", 
            target: "_blank", className: "ion-speakerphone"}, 
            " Blog  "
          ), 
          React.createElement("a", {
            ref: "http://www.twitch.tv/freecodecamp", 
            target: "_blank", className: "ion-social-twitch-outline"}, 
            " Twitch  "
          ), 
          React.createElement("a", {
            href: "http://github.com/freecodecamp", 
            target: "_blank", 
            className: "ion-social-github"}, 
            " Github  "
          ), 
          React.createElement("a", {
            href: "http://twitter.com/freecodecamp", 
            target: "_blank", className: "ion-social-twitter"}, 
            " Twitter  "
          ), 
          React.createElement("a", {
            href: "http://facebook.com/freecodecamp", 
            target: "_blank", 
            className: "ion-social-facebook"}, 
            " Facebook  "
          ), 
          React.createElement("a", {
            ref: "/learn-to-code", 
            className: "ion-information-circled"}, 
            " About  "
          ), 
          React.createElement("a", {
            href: "/privacy", 
            className: "ion-locked"}, 
            " Privacy  "
          )
        ), 
        React.createElement("div", {className: "col-xs-12 visible-xs visible-sm"}, 
          React.createElement("a", {
            href: "http://blog.freecodecamp.com", 
            target: "_blank", className: "ion-speakerphone"}, 
            React.createElement("span", {className: "sr-only"}, 
              "Free Code Camp\\'s Blog"
            )
          ), 
          React.createElement("a", {
            href: "http://www.twitch.tv/freecodecamp", 
            target: "_blank", 
            className: "ion-social-twitch-outline"}, 
            React.createElement("span", {className: "sr-only"}, 
              "Free Code Camp Live Pair Programming on Twitch.tv"
            )
          ), 
          React.createElement("a", {
            href: "http://github.com/freecodecamp", 
            target: "_blank", 
            className: "ion-social-github"}, 
            React.createElement("span", {className: "sr-only"}, 
              "Free Code Camp on GitHub"
            )
          ), 
          React.createElement("a", {
            href: "http://twitter.com/freecodecamp", 
            target: "_blank", 
            className: "ion-social-twitter"}, 
            React.createElement("span", {className: "sr-only"}, 
              "Free Code Camp on Twitter"
            )
          ), 
          React.createElement("a", {
            href: "http://facebook.com/freecodecamp", 
            target: "_blank", 
            className: "ion-social-facebook"}, 
            React.createElement("span", {className: "sr-only"}, 
              "Free Code Camp on Facebook"
            )
          ), 
          React.createElement("a", {
            href: "/learn-to-code", 
            className: "ion-information-circled"}, 
            React.createElement("span", {className: "sr-only"}, 
              "About Free Code Camp"
            )
          ), 
          React.createElement("a", {
            href: "/privacy", 
            className: "ion-locked"}, 
            React.createElement("span", {className: "sr-only"}, 
              "Free Code Camp's Privacy Policy"
            )
          )
        )
      )
    );
  }
});

module.exports = Footer;
