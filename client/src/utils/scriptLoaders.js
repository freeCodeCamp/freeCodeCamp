export const scriptLoader = (id, key, async, src, onload) => {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.id = id;
  s.key = key;
  s.async = async;
  s.onload = onload;
  s.src = src;
  document.getElementsByTagName('head')[0].appendChild(s);
};

export const stripeScriptLoader = onload =>
  scriptLoader(
    'stripe-js',
    'stripe-js',
    false,
    'https://js.stripe.com/v3/',
    onload
  );
