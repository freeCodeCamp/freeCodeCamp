import cookieParser from 'cookie-parser';

const cookieSecret = process.env.COOKIE_SECRET;
export default cookieParser.bind(cookieParser, cookieSecret);
