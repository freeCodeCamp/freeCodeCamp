import React from 'react';
import PropTypes from 'prop-types';

const DonationOptionsText = ({ isAlert }) => {
  const Title =
    'Want to make a bigger one-time donation, mail us a check, or give in other ways?';

  return (
    <>
      {!isAlert && (
        <h4>
          <b>{Title}</b>
        </h4>
      )}
      <p className='donation-options'>
        {isAlert && Title} Here are many{' '}
        <a
          href={
            'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp'
          }
        >
          other ways we could support our non-profit's mission
        </a>
        .
      </p>
    </>
  );
};

DonationOptionsText.propTypes = {
  isAlert: PropTypes.bool
};

DonationOptionsText.displayName = 'DonationOptionsText';
export default DonationOptionsText;
