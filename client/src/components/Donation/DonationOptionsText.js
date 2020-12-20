import React from 'react';
import PropTypes from 'prop-types';

const DonationOptionsText = ({ isAlert }) => {
  const Title =
    'Want to make a bigger one time donation, mail us a check, or give in other ways?';

  return (
    <>
      {!isAlert && (
        <h4>
          <b>{Title}</b>
        </h4>
      )}
      <p className='donation-options'>
        {Title} Here are many{' '}
        <a
          href={
            'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp'
          }
        >
          other ways we could support our none-profits mission
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

// Want to make a bigger one time donation, mail us a check, or give in other ways?
// Here are many other ways we could support our none-profits mission.
// from others link -->
// https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp

/* <h4>
<b>Need help with your current or past donations?</b>
</h4>
<p>
Forward a copy of your donation receipt to donors@freecodecamp.org and
tell us how we can help.
</p> */
