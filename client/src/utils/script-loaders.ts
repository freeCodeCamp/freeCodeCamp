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
