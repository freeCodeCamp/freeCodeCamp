enum ScrollRestoration { "auto", "manual" };

[Exposed=Window]
interface History {
//  readonly attribute unsigned long index;
  readonly attribute unsigned long length;
//  attribute ScrollRestoration scrollRestoration;
  readonly attribute any state;
  void go(optional long delta = 0);
  void back();
  void forward();
  void pushState(any data, DOMString title, optional USVString? url = null);
  void replaceState(any data, DOMString title, optional USVString? url = null);
};
