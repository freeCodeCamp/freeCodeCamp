var name;

switch (name) {
case "Kamol":
  doSomething();
default:
  doSomethingElse();
}

switch (name) {
default:
  doSomethingElse();
  break;
case "Kamol":
  doSomething();
}