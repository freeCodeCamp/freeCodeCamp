import React from 'react';

export const DonationSupportText = () => (
  <>
    <h4>
      <b>Need help with your current or past donations?</b>
    </h4>
    <p>
      Forward a copy of your donation receipt to donors@freecodecamp.org and
      tell us how we can help.
    </p>
  </>
);

export const DonationText = () => {
  return (
    <>
      <p>freeCodeCamp is a highly efficient education nonprofit.</p>
      <p>
        When you donate to freeCodeCamp, you help people learn new skills and
        provide for their families.
      </p>
      <p>
        You also help us create new resources for you to use to expand your own
        technology skills.
      </p>
    </>
  );
};

export const DonationOptionsText = () => (
  <>
    <h4>
      <b>
        Want to make a bigger one-time donation, mail us a check, or give in
        other ways?
      </b>
    </h4>
    <p>
      Here are many{' '}
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

export const DonationOptionsAlertText = () => (
  <p>
    Want to make a bigger one-time donation, mail us a check, or give in other
    ways? Here are many{' '}
    <a
      href={'https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp'}
    >
      other ways we could support our non-profit's mission
    </a>
    .
  </p>
);
