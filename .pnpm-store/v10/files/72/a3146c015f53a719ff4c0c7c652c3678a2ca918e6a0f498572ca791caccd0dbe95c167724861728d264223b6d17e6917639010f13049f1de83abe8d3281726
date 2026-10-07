function valueType (value) {
  if (value === undefined) return 'undefined'
  if (Array.isArray(value)) return 'array'
  if (typeof value === 'object') return 'object'
  return 'scalar'
}

function setLastValue (context, step, currentValue, entryValue) {
  switch (valueType(currentValue)) {
    case 'undefined':
      if (step.append) {
        context[step.key] = [entryValue]
      } else {
        context[step.key] = entryValue
      }
      break
    case 'array':
      context[step.key].push(entryValue)
      break
    case 'object':
      return setLastValue(currentValue, { type: 'object', key: '', last: true }, currentValue[''], entryValue)
    case 'scalar':
      context[step.key] = [context[step.key], entryValue]
      break
  }

  return context
}

function setValue (context, step, currentValue, entryValue) {
  if (step.last) return setLastValue(context, step, currentValue, entryValue)

  var obj
  switch (valueType(currentValue)) {
    case 'undefined':
      if (step.nextType === 'array') {
        context[step.key] = []
      } else {
        context[step.key] = Object.create(null)
      }
      return context[step.key]
    case 'object':
      return context[step.key]
    case 'array':
      if (step.nextType === 'array') {
        return currentValue
      }

      obj = Object.create(null)
      context[step.key] = obj
      currentValue.forEach(function (item, i) {
        if (item !== undefined) obj['' + i] = item
      })

      return obj
    case 'scalar':
      obj = Object.create(null)
      obj[''] = currentValue
      context[step.key] = obj
      return obj
  }
}

module.exports = setValue
