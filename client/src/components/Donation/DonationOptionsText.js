import React from 'react';
import PropTypes from 'prop-types';

const DonationOptionsText = ({ isAlert }) => {
  const Title =
    'Want to make a bigger one-time donation, mail us a check, or give in other ways?';
  const ArticleLink = (
    <a
      href={'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp'}
    >
      other ways we could support our non-profit's mission
    </a>
  );

  const AlertDonationOptionsText = (
    <p className='donation-options'>
      {Title} Here are many {ArticleLink}.
    </p>
  );

  const DefaultDonationOptionsText = (
    <>
      <h4>
        <b>{Title}</b>
      </h4>
      <p className='donation-options'>Here are many {ArticleLink}.</p>
    </>
  );

  if (isAlert) return AlertDonationOptionsText;
  else return DefaultDonationOptionsText;
};

DonationOptionsText.propTypes = {
  isAlert: PropTypes.bool
};

DonationOptionsText.displayName = 'DonationOptionsText';
export default DonationOptionsText;
