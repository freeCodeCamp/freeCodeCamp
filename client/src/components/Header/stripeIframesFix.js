const stripeObserver = () => {
  const config = { attributes: false, childList: true, subtree: false };

  const filterNodes = nl =>
    Array.from(nl)
      .filter(b => b.nodeName === 'IFRAME')
      .filter(b => /__privateStripeController/.test(b.name));

  const mutationCallback = a => {
    const controllerAdded = a.reduce(
      (acc, curr) =>
        curr.type === 'childList'
          ? [...acc, ...filterNodes(curr.addedNodes)]
          : acc,
      []
    )[0];
    if (controllerAdded) {
      const allControllers = filterNodes(document.body.childNodes);
      allControllers.forEach(controller => {
        if (controller.name !== controllerAdded.name) {
          controller.remove();
        }
      });
    }
  };

  return new MutationObserver(mutationCallback).observe(document.body, config);
};

export default stripeObserver;
