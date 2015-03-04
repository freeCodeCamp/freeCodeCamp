var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div className='fcc-footer'>
        <div className='col-xs-12 hidden-xs hidden-sm'>
          <a
            href='http://blog.freecodecamp.com'
            target='_blank' className='ion-speakerphone'>
            &nbsp;Blog&nbsp;&nbsp;
          </a>
          <a
            ref='http://www.twitch.tv/freecodecamp'
            target='_blank' className='ion-social-twitch-outline'>
            &nbsp;Twitch&nbsp;&nbsp;
          </a>
          <a
            href='http://github.com/freecodecamp'
            target='_blank'
            className='ion-social-github'>
            &nbsp;Github&nbsp;&nbsp;
          </a>
          <a
            href='http://twitter.com/freecodecamp'
            target='_blank' className='ion-social-twitter'>
            &nbsp;Twitter&nbsp;&nbsp;
          </a>
          <a
            href='http://facebook.com/freecodecamp'
            target='_blank'
            className='ion-social-facebook'>
            &nbsp;Facebook&nbsp;&nbsp;
          </a>
          <a
            ref='/learn-to-code'
            className='ion-information-circled'>
            &nbsp;About&nbsp;&nbsp;
          </a>
          <a
            href='/privacy'
            className='ion-locked'>
            &nbsp;Privacy&nbsp;&nbsp;
          </a>
        </div>
        <div className='col-xs-12 visible-xs visible-sm'>
          <a
            href='http://blog.freecodecamp.com'
            target='_blank' className='ion-speakerphone'>
            <span className='sr-only'>
              Free Code Camp\'s Blog
            </span>
          </a>
          <a
            href='http://www.twitch.tv/freecodecamp'
            target='_blank'
            className='ion-social-twitch-outline'>
            <span className='sr-only'>
              Free Code Camp Live Pair Programming on Twitch.tv
            </span>
          </a>
          <a
            href='http://github.com/freecodecamp'
            target='_blank'
            className='ion-social-github'>
            <span className='sr-only'>
              Free Code Camp on GitHub
            </span>
          </a>
          <a
            href='http://twitter.com/freecodecamp'
            target='_blank'
            className='ion-social-twitter'>
            <span className='sr-only'>
              Free Code Camp on Twitter
            </span>
          </a>
          <a
            href='http://facebook.com/freecodecamp'
            target='_blank'
            className='ion-social-facebook'>
            <span className='sr-only'>
              Free Code Camp on Facebook
            </span>
          </a>
          <a
            href='/learn-to-code'
            className='ion-information-circled'>
            <span className='sr-only'>
              About Free Code Camp
            </span>
          </a>
          <a
            href='/privacy'
            className='ion-locked'>
            <span className='sr-only'>
              Free Code Camp's Privacy Policy
            </span>
          </a>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
