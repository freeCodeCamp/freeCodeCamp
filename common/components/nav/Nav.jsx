var React = require('react');

var NavBar = React.createClass({
  render: function() {
    var fCClogo = 'https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg';
    return (
      <nav className='navbar navbar-default navbar-fixed-top nav-height'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              data-toggle='collapse'
              data-target='.navbar-collapse'
              className='hamburger navbar-toggle'>
              <div className='col-xs-6'>
                <span className='hamburger-text'>Menu</span>
              </div>
              <div className='col-xs-6'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </div>
            </button>
            <a
              href='/'
              className='navbar-brand'>
              <img
                src={ fCClogo }
                alt='learn to code javascript at Free Code Camp logo'
                className='img-responsive nav-logo' />
            </a>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav navbar-right hamburger-dropdown'>
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
                <a href='/login' className='btn signup-btn signup-btn-nav'>
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
