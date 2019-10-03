import React from 'react';
import { Link } from '../../helpers';

class NavLinks extends React.Component {
  state = {
    theme: window.__theme
  };

  componentDidMount() {
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

  render() {
    return (
      <div className='main-nav-group'>
        <ul className={'nav-list display-flex'} role='menu'>
          <li className='nav-theme' role='menuitem'>
            <Link to='/learn'>Projects</Link>
          </li>
          <li
            className='nav-theme'
            onClick={() =>
              window.__setPreferredTheme(
                window.__theme === 'dark' ? 'light' : 'dark'
              )
            }
            role='menuitem'
          >
            {this.state.theme === 'dark' ? 'light' : 'dark'}
          </li>
          <li className='nav-portfolio' role='menuitem'>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavLinks;

NavLinks.displayName = 'NavLinks';
