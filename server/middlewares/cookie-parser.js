import cookieParser from 'cookie-parser';

import { cookie as cookieConfig } from '../../config/secrets';

const { secret } = cookieConfig;

export default cookieParser.bind(cookieParser, secret);
