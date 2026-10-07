function printComponent(component) {
  return JSON.stringify(component, componentAttributeSerializer, 4);
}

function componentAttributeSerializer(key, value) {
  if (typeof value === 'function') {
    return value.toString();
  }

  return value;
}

export default printComponent;