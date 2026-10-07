export function not(pred: Function, thisArg: any): Function {
  function notPred(): any {
    return !((<any> notPred).pred.apply((<any> notPred).thisArg, arguments));
  }
  (<any> notPred).pred = pred;
  (<any> notPred).thisArg = thisArg;
  return notPred;
}