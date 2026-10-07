import warning from '../utils/warning'

function verify(selector: unknown, methodName: string): void {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`)
  } else if (
    methodName === 'mapStateToProps' ||
    methodName === 'mapDispatchToProps'
  ) {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning(
        `The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`
      )
    }
  }
}

export default function verifySubselectors(
  mapStateToProps: unknown,
  mapDispatchToProps: unknown,
  mergeProps: unknown
): void {
  verify(mapStateToProps, 'mapStateToProps')
  verify(mapDispatchToProps, 'mapDispatchToProps')
  verify(mergeProps, 'mergeProps')
}
