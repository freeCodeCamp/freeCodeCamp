import { ReactNode, FC, CSSProperties } from 'react';
import { MediaQueryAllQueryable, MediaQueryMatchers } from './types';
interface MediaQueryProps extends MediaQueryAllQueryable {
    component?: ReactNode;
    children?: ReactNode | ((matches: boolean) => ReactNode);
    query?: string;
    style?: CSSProperties;
    className?: string;
    device?: MediaQueryMatchers;
    values?: Partial<MediaQueryMatchers>;
    onBeforeChange?: (_matches: boolean) => void;
    onChange?: (_matches: boolean) => void;
}
declare const MediaQuery: FC<MediaQueryProps>;
export default MediaQuery;
