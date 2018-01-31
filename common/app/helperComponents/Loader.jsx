import React from 'react';
import Helmet from 'react-helmet';

function Loader() {
  return (
    <div className='full-size'>
      <Helmet>
      <link href='/css/loader.css' rel='stylesheet' />
      </Helmet>
      <div className='loader full-size'>
        <div className='ball-scale-ripple-multiple'>
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    </div>
  );
}

Loader.displayName = 'Loader';

export default Loader;
