/** @internal */
const txnCounter = {
  ref: 0
};
/** @internal */
export const make = () => {
  const newId = txnCounter.ref + 1;
  txnCounter.ref = newId;
  return newId;
};
//# sourceMappingURL=txnId.js.map