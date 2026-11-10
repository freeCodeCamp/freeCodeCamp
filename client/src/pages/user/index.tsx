import React from 'react';
import RedirectHome from '../../components/redirect-home';

// Redirect to home if no username provided
const User = () => <RedirectHome />;

export default User;

export { default as Head } from '../../components/page-head';
