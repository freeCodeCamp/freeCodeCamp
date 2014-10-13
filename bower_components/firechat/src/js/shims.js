(function($) {

  // Shim for Function.bind(...) - (Required by IE < 9, FF < 4, SF < 6)
  if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
      if (typeof this !== "function") {
        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      }
  
      var aArgs = Array.prototype.slice.call(arguments, 1), 
          fToBind = this, 
          fNOP = function() {},
          fBound = function() {
            return fToBind.apply(this instanceof fNOP && oThis ? this : oThis,
                                 aArgs.concat(Array.prototype.slice.call(arguments)));
          };
   
      fNOP.prototype = this.prototype;
      fBound.prototype = new fNOP();
      return fBound;
    };
  }

  // Shim for Object.keys(...) - (Required by IE < 9, FF < 4)
  Object.keys = Object.keys || function(oObj) {  
    var result = [];  
    for (var name in oObj) {  
      if (oObj.hasOwnProperty(name)) {
        result.push(name);  
      }
    }  
    return result;  
  };

})();
