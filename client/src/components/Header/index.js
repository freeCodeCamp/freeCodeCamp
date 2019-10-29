import React from 'react';
import Helmet from 'react-helmet';

import stripeObserver from './stripeIframesFix';
import UniversalNav from './components/UniversalNav';

import './header.css';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMenu: false
    };
    this.menuButtonRef = React.createRef();
    this.searchBarRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleDisplayMenu = this.toggleDisplayMenu.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);

    // Remove stacking Stripe iframes with each navigation
    // after visiting /donate
    stripeObserver();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.state.displayMenu &&
      this.menuButtonRef.current &&
      !this.menuButtonRef.current.contains(event.target) &&
      this.searchBarRef.current &&
      !this.searchBarRef.current.contains(event.target)
    ) {
      this.toggleDisplayMenu();
    }
  }

  toggleDisplayMenu() {
    this.setState(({ displayMenu }) => ({ displayMenu: !displayMenu }));
  }
  render() {
    const { displayMenu } = this.state;
    return (
      <>
        <Helmet>
          <style>{':root{--header-height: 38px}'}</style>
        </Helmet>
        <header>
          <UniversalNav
            displayMenu={displayMenu}
            menuButtonRef={this.menuButtonRef}
            searchBarRef={this.searchBarRef}
            toggleDisplayMenu={this.toggleDisplayMenu}
          />
        </header>
      </>
    );
  }
}

Header.displayName = 'Header';
export default Header;
