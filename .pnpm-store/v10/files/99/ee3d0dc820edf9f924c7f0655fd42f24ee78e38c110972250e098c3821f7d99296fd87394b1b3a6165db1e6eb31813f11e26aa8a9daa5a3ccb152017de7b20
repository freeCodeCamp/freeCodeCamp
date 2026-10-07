import describeKeyEventType from './describeKeyEventType';

function describeKeyEvent(event, keyName, keyEventType) {
  var eventDescription = "'".concat(keyName, "' ").concat(describeKeyEventType(keyEventType));

  if (event.simulated) {
    return "(simulated) ".concat(eventDescription);
  }

  return eventDescription;
}

export default describeKeyEvent;