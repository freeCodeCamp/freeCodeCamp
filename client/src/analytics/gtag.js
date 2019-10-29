const isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  window.dataLayer = window.dataLayer || [];
}

function gtag() {
  if (isBrowser) {
    window.dataLayer.push(arguments);
  }
}
gtag('js', new Date());
gtag('config', 'AW-795617839');

export function gtagReportConversion(url) {
  var callback = function() {
    if (typeof url !== 'undefined' && isBrowser) {
      window.location = url;
    }
  };
  if (isBrowser) {
    gtag('event', 'conversion', {
      /* eslint-disable camelcase */
      send_to: 'AW-795617839/AmfiCKHHs4gBEK_UsPsC',
      event_callback: callback
    });
  }
  return false;
}
