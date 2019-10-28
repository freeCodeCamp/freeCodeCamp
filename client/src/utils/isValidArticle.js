import { isValidURL } from '../components/formHelpers';

const isString = value => typeof value === 'string';

export default function articleValidator({
  image,
  tagPage,
  authorPage,
  avatar,
  authorName,
  tagName,
  date,
  href,
  title
}) {
  return (
    isValidURL(image) &&
    isValidURL(tagPage) &&
    isValidURL(authorPage) &&
    isValidURL(avatar) &&
    isString(authorName) &&
    isString(tagName) &&
    isString(date) &&
    isString(href) &&
    isString(title)
  );
}
