/* IMPORT */
import fastStringTruncatedWidth from 'fast-string-truncated-width';
/* HELPERS */
const NO_TRUNCATION = {
    limit: Infinity,
    ellipsis: '',
    ellipsisWidth: 0,
};
/* MAIN */
const fastStringWidth = (input, options = {}) => {
    return fastStringTruncatedWidth(input, NO_TRUNCATION, options).width;
};
/* EXPORT */
export default fastStringWidth;
