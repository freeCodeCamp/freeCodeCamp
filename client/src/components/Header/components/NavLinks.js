import React from 'react';
import { Link } from '../../helpers';

class NavLinks extends React.Component {
  state = {
    theme: typeof window !== `undefined` ? window.__theme : null
  };

  componentDidMount() {
    window.__onThemeChange = theme => {
      this.setState({ theme: theme });
    };
  }

  componentWillUnmount() {
    window.__onThemeChange = () => {};
  }

  render() {
    return (
      <div className='main-nav-group'>
        <ul className={'nav-list display-flex'} role='menu'>
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
          <li className='nav-learn' role='menuitem'>
            <Link to='/learn'>Projects</Link>
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
