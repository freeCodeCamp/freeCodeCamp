import React from 'react';
import Login from '../../Header/components/login';

const BigCallToAction = (): JSX.Element => {
  return (
    <Login block={true} data-test-label='landing-big-cta'>
      Create Account (it&apos;s free!)
    </Login>
  );
};

BigCallToAction.displayName = 'BigCallToAction';
export default BigCallToAction;
