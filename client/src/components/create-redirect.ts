import { navigate } from 'gatsby';
import type { RouteComponentProps } from "@reach/router"

const createRedirect =
  (to = '/'): (() => JSX.Element | null) =>
  () => {
    if (typeof window !== 'undefined') {
      void navigate(to);
    }
    return null;
  };

export default createRedirect;
