import { navigate } from 'gatsby';

interface RedirectProps {
  default?: boolean;
}

const createRedirect =
  (to = '/'): ((_props: RedirectProps) => JSX.Element | null) =>
  () => {
    if (typeof window !== 'undefined') {
      void navigate(to);
    }
    return null;
  };

export default createRedirect;
