import {
  validateLoadParams,
  loadScript,
  initStripe,
  LoadStripe,
  LoadParams,
} from './shared';

type SetLoadParams = (params: LoadParams) => void;

let loadParams: null | LoadParams;
let loadStripeCalled = false;

export const loadStripe: LoadStripe & {setLoadParameters: SetLoadParams} = (
  ...args
) => {
  loadStripeCalled = true;
  const startTime = Date.now();

  return loadScript(loadParams).then((maybeStripe) =>
    initStripe(maybeStripe, args, startTime)
  );
};

loadStripe.setLoadParameters = (params): void => {
  // we won't throw an error if setLoadParameters is called with the same values as before
  if (loadStripeCalled && loadParams) {
    const validatedParams = validateLoadParams(params);
    const parameterKeys = Object.keys(validatedParams) as Array<
      keyof LoadParams
    >;

    const sameParameters = parameterKeys.reduce(
      (previousValue, currentValue) => {
        return (
          previousValue && params[currentValue] === loadParams?.[currentValue]
        );
      },
      true
    );

    if (sameParameters) {
      return;
    }
  }

  if (loadStripeCalled) {
    throw new Error(
      'You cannot change load parameters after calling loadStripe'
    );
  }

  loadParams = validateLoadParams(params);
};
