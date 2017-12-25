import { makeToast } from '../../common/app/Toasts/redux';

export default function flashToToast(flash) {
  return Object.keys(flash)
    .map(key => {
      const messages = flash[key];
      return messages.map(message => ({
        message: message.msg,
        type: key,
        timeout: 5000
      }));
    })
    .reduce((toasts, messages) => toasts.concat(messages), [])
    .map(makeToast)
    .map(({ payload }) => payload);
}
