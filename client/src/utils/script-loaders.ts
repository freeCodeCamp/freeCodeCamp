export function scriptLoader(
  id: string,
  async: boolean,
  src: string,
  onload: (() => void) | null,
  text: string
): void {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.id = id;
  s.async = async;
  s.onload = onload;
  s.src = src;
  s.text = text;
  document.getElementsByTagName('head')[0].appendChild(s);
}

export function scriptRemover(id: string): void {
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
}

export function mathJaxScriptLoader(): void {
  scriptLoader(
    'mathjax',
    false,
    'https://cdnjs.cloudflare.com/ajax/libs/mathjax/' +
      '2.7.4/MathJax.js?config=TeX-AMS_HTML',
    null,
    `MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        processEscapes: true,
        processClass: 'rosetta-code|project-euler|intermediate-algorithm-scripting'
      }
    });
    MathJax.Hub.Queue([
      'Typeset',
      MathJax.Hub,
      document.querySelector('intermediate-algorithm-scripting'),
      document.querySelector('.rosetta-code'),
      document.querySelector('.project-euler')
    ]);`
  );
}
