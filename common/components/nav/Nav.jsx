var React = require('react');

var NavBar = React.createClass({
  render: function() {
    var fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
    return (
      <nav class='navbar navbar-default navbar-fixed-top nav-height'>
        <div class='container'>
          <div class='navbar-header'>
            <button
              type='button'
              data-toggle='collapse'
              data-target='.navbar-collapse'
              class='hamburger navbar-toggle'>
              <div class='col-xs-6'>
                <span class='hamburger-text'>Menu</span>
              </div>
              <div class='col-xs-6'>
                <span class='sr-only'>Toggle navigation</span>
                <span class='icon-bar'></span>
                <span class='icon-bar'></span>
                <span class='icon-bar'></span>
              </div>
            </button>
            <a
              href='/'
              class='navbar-brand'>
              <img
                src={ fCClogo }
                alt='learn to code javascript at Free Code Camp logo'
                class='img-responsive nav-logo' />
            </a>
          </div>
          <div class='collapse navbar-collapse'>
            <ul class='nav navbar-nav navbar-right hamburger-dropdown'>
              <li><a href='/coursewares'>Challenges</a></li>
              <li><a href='/chat'>Chat</a></li>
              <li>
                <a
                  href='http://forum.freecodecamp.com'
                  target='_blank'>Forum</a>
              </li>
              <li><a href='/bonfires'>Bonfires</a></li>
              <li>&nbsp; &nbsp; &nbsp;</li>
              <li>
                <a href='/login' class='btn signup-btn signup-btn-nav'>
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
module.exports = NavBar;
