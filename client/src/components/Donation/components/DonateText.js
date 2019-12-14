import React from 'react';

import { Spacer, Link } from '../../../components/helpers';

const DonateText = () => {
  return (
    <div className='donate-text'>
      <Spacer />
      <h3>How to donate to freeCodeCamp.org</h3>

      <p>freeCodeCamp is a tax-exempt 501(c)(3) public charity.</p>

      <p>
        We get almost all of our budget from our supporters, who donate $5 per
        month to our nonprofit.
      </p>

      <p>
        To become a supporter, just{' '}
        <Link to='/learn'>start going through the curriculum</Link> and you will
        see a prompt to donate.
      </p>

      <p>
        If you want to make a larger one-time donation, set up employer
        matching, or support us in other ways, email team@freecodecamp.org and
        we can help make that happen.
      </p>
      <Spacer />

      <h3> How does freeCodeCamp use these donations?</h3>

      <p>
        100% of donations go to pay for servers, and to pay teachers and
        developers who help build our learning resources.
      </p>

      <p>
        We earned the 2019 Platinum Seal of Transparency from Guidestar.org. You
        can view all our nonprofit's details and download our accounting
        documents{' '}
        <Link to='https://www.guidestar.org/profile/82-0779546'>there.</Link>
      </p>
      <Spacer />

      <h3> How do I stop my monthly recurring donation.</h3>

      <p>
        Easy. Just forward a donation receipt to team@freecodecamp.org and we'll
        stop it.
      </p>

      <Spacer />
      <h3>How do I restart my monthly recurring donation?</h3>

      <p>
        Email one of your old donation receipts to team@freecodecamp.org and
        we'll restart it for you.
      </p>
    </div>
  );
};

DonateText.displayName = 'DonateText';

export default DonateText;
