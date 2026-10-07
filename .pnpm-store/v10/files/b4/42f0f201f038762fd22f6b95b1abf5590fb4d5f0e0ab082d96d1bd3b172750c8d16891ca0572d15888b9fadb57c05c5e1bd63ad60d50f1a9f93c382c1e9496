'use strict';

var MAX_PORTS = 65535;
module.exports = DebugPortAllocator;
function DebugPortAllocator() {
  this.ports = Object.create(null);
  this.length = 0;
}

DebugPortAllocator.prototype.nextAvailableStartingAt = function(starting) {
  while (this.ports[starting] === true) {
    starting++;
  }

  if (starting >= MAX_PORTS) {
    throw new Error('WorkerPool debug port limit reached: ' + starting + '>= ' + MAX_PORTS );
  }

  this.ports[starting] = true;
  this.length++;
  return starting;
};

DebugPortAllocator.prototype.releasePort = function(port) {
  delete this.ports[port];
  this.length--;
};

