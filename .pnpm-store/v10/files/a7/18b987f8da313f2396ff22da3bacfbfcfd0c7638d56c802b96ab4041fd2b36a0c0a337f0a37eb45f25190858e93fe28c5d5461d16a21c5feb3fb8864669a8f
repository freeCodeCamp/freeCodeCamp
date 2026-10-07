import useMediaQuery from './useMediaQuery';
import { ReactNode, ReactElement, FC, CSSProperties } from 'react';
import { MediaQueryAllQueryable, MediaQueryMatchers } from './types';

interface MediaQueryProps extends MediaQueryAllQueryable {
  component?: ReactNode
  // eslint-disable-next-line @typescript-eslint/ban-types
  children?: ReactNode | ((matches: boolean) => ReactNode);
  query?: string;
  style?: CSSProperties;
  className?: string;
  device?: MediaQueryMatchers;
  values?: Partial<MediaQueryMatchers>;
  onBeforeChange?: (_matches: boolean) => void;
  onChange?: (_matches: boolean) => void;
}

// ReactNode and ReactElement typings are a little funky for functional components, so the ReactElement cast is needed on the return
const MediaQuery: FC<MediaQueryProps> = ({
  children,
  device,
  onChange,
  ...settings
}) => {
  const matches = useMediaQuery(settings, device, onChange);

  if (typeof children === 'function') {
    return children(matches) as ReactElement;
  }
  return matches ? children as ReactElement : null;
};

export default MediaQuery;
