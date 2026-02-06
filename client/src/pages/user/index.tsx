import React from 'react';
import RedirectHome from '../../components/redirect-home';

// Redirect to home if no username provided
const User: React.FC = () => {
  return <RedirectHome />;
};

export default User;
