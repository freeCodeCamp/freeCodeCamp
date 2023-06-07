/* eslint-disable react/display-name */
import { navigate } from 'gatsby';

const createRedirect =
  (to = '/'): (() => JSX.Element | null) =>
  () => {
    if (typeof window !== 'undefined') {
      void navigate(to);
    }
    return null;
  };

export default createRedirect;
