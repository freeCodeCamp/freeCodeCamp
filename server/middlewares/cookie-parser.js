import cookieParser from 'cookie-parser';
import secrets from '../../config/secrets';

export default cookieParser.bind(cookieParser, secrets.cookieSecret);
