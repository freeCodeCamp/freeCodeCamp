var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div class='fcc-footer'>
        <div class='col-xs-12 hidden-xs hidden-sm'>
          <a
            href='http://blog.freecodecamp.com'
            target='_blank' class='ion-speakerphone'>
            &nbsp;Blog&nbsp;&nbsp;
          </a>
          <a
            ref='http://www.twitch.tv/freecodecamp'
            target='_blank' class='ion-social-twitch-outline'>
            &nbsp;Twitch&nbsp;&nbsp;
          </a>
          <a
            href='http://github.com/freecodecamp'
            target='_blank'
            class='ion-social-github'>
            &nbsp;Github&nbsp;&nbsp;
          </a>
          <a
            href='http://twitter.com/freecodecamp'
            target='_blank' class='ion-social-twitter'>
            &nbsp;Twitter&nbsp;&nbsp;
          </a>
          <a
            href='http://facebook.com/freecodecamp'
            target='_blank'
            class='ion-social-facebook'>
            &nbsp;Facebook&nbsp;&nbsp;
          </a>
          <a
            ref='/learn-to-code'
            class='ion-information-circled'>
            &nbsp;About&nbsp;&nbsp;
          </a>
          <a
            href='/privacy'
            class='ion-locked'>
            &nbsp;Privacy&nbsp;&nbsp;
          </a>
        </div>
        <div class='col-xs-12 visible-xs visible-sm'>
          <a
            href='http://blog.freecodecamp.com'
            target='_blank' class='ion-speakerphone'>
            <span class='sr-only'>
              Free Code Camp\'s Blog
            </span>
          </a>
          <a
            href='http://www.twitch.tv/freecodecamp'
            target='_blank'
            class='ion-social-twitch-outline'>
            <span class='sr-only'>
              Free Code Camp Live Pair Programming on Twitch.tv
            </span>
          </a>
          <a
            href='http://github.com/freecodecamp'
            target='_blank'
            class='ion-social-github'>
            <span class='sr-only'>
              Free Code Camp on GitHub
            </span>
          </a>
          <a
            href='http://twitter.com/freecodecamp'
            target='_blank'
            class='ion-social-twitter'>
            <span class='sr-only'>
              Free Code Camp on Twitter
            </span>
          </a>
          <a
            href='http://facebook.com/freecodecamp'
            target='_blank'
            class='ion-social-facebook'>
            <span class='sr-only'>
              Free Code Camp on Facebook
            </span>
          </a>
          <a
            href='/learn-to-code'
            class='ion-information-circled'>
            <span class='sr-only'>
              About Free Code Camp
            </span>
          </a>
          <a
            href='/privacy'
            class='ion-locked'>
            <span class='sr-only'>
              Free Code Camp's Privacy Policy
            </span>
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
