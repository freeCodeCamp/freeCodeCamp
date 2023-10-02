export function deprecatedEndpoint(_, res) {
  return res.status(410).json({
    message: {
      type: 'info',
      message: 'Please reload the app, this feature is no longer available.'
    }
  });
}

export function temporarilyDisabledEndpoint(_, res) {
  return res.status(404).json({
    message: {
      type: 'info',
      message: 'Please reload the app, this feature is no longer available.'
    }
  });
}
