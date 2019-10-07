import React, { Fragment } from 'react';

function FreeCodeCamp(props) {
  return (
    <Fragment>
      <svg
        xmlns:xlink='https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg'>
        {...props}
      >
      <title>freeCodeCamp.org</title>
      </svg>
    </Fragment>
  );
}
export default FreeCodeCamp;
