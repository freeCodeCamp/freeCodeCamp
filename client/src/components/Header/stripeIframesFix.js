const stripeObserver = () => {
  const config = { attributes: false, childList: true, subtree: false };

  const filterNodes = nl =>
    Array.from(nl)
      .filter(b => b.nodeName === 'IFRAME')
      .filter(
        b =>
          b.name !== '__privateStripeMetricsController0' &&
          b.name !== '__privateStripeController1'
      );

  const mutationCallback = a =>
    a
      .reduce(
        (acc, curr) =>
          curr.type === 'childList'
            ? [...acc, ...filterNodes(curr.addedNodes)]
            : acc,
        []
      )
      .forEach(a => a.remove());

  return new MutationObserver(mutationCallback).observe(document.body, config);
};

export default stripeObserver;
