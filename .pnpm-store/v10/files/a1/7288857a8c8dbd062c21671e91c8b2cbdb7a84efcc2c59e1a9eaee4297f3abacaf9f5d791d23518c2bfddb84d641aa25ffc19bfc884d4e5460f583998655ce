function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Generic registry for storing and retrieving items
 * @class @abstract
 */
var Registry =
/*#__PURE__*/
function () {
  /**
   * Create a new Registry instance
   * @returns {Registry}
   */
  function Registry() {
    _classCallCheck(this, Registry);

    this._registry = {};
  }
  /**
   * Returns the registry item stored with against an id
   * @param {*} id The key item was registered with
   * @returns {*} Item stored in registry
   */


  _createClass(Registry, [{
    key: "get",
    value: function get(id) {
      return this._registry[id];
    }
    /**
     * Add an item to the registry
     * @param {*} id Key to store the item against
     * @param {*} item Item to store in the registry
     */

  }, {
    key: "set",
    value: function set(id, item) {
      this._registry[id] = item;
    }
    /**
     * Remove an item from the registry
     * @param {*} id Key of the item to remove from the registry
     */

  }, {
    key: "remove",
    value: function remove(id) {
      delete this._registry[id];
    }
    /**
     * A plain JavaScript representation of the registry, useful for serialization or
     * debugging
     * @returns {Object.<*,*>} Serialized representation of the registry
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this._registry;
    }
  }]);

  return Registry;
}();

export default Registry;