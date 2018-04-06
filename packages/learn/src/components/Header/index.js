import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    style={{
      background: '#006400',
      marginBottom: '1.45rem'
    }}
    >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960
      }}
      >
      <h1 style={{ margin: 0 }}>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
          to='/'
          >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
