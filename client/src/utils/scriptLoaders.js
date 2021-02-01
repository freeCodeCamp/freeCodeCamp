export const scriptLoader = (id, key, async, src, onload, text) => {
  let s = document.createElement('script');
  s.type = 'text/javascript';
  s.id = id;
  s.key = key;
  s.async = async;
  s.onload = onload;
  s.src = src;
  s.text = text;
  document.getElementsByTagName('head')[0].appendChild(s);
};

export const scriptRemover = id => {
  let script = document.getElementById(id);
  if (script) {
    script.remove();
  }
};

export const stripeScriptLoader = onload =>
  scriptLoader(
    'stripe-js',
    'stripe-js',
    false,
    'https://js.stripe.com/v3/',
    onload
  );

export const mathJaxScriptLoader = () =>
  scriptLoader(
    'mathjax',
    'mathjax',
    false,
    'https://cdnjs.cloudflare.com/ajax/libs/mathjax/' +
      '2.7.4/MathJax.js?config=TeX-AMS_HTML',
    null,
    `MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        processEscapes: true,
        processClass: 'rosetta-code|project-euler'
      }
    });
    MathJax.Hub.Queue([
      'Typeset',
      MathJax.Hub,
      document.querySelector('.rosetta-code'),
      document.querySelector('.project-euler')
    ]);`
  );
