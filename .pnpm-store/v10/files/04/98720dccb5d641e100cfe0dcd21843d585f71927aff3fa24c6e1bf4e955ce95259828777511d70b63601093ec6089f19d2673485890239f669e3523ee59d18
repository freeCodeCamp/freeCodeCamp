/**
 * @since 2.0.0
 */
/**
 * @since 2.0.0
 */
export const pipeArguments = (self, args) => {
  switch (args.length) {
    case 0:
      return self;
    case 1:
      return args[0](self);
    case 2:
      return args[1](args[0](self));
    case 3:
      return args[2](args[1](args[0](self)));
    case 4:
      return args[3](args[2](args[1](args[0](self))));
    case 5:
      return args[4](args[3](args[2](args[1](args[0](self)))));
    case 6:
      return args[5](args[4](args[3](args[2](args[1](args[0](self))))));
    case 7:
      return args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))));
    case 8:
      return args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self))))))));
    case 9:
      return args[8](args[7](args[6](args[5](args[4](args[3](args[2](args[1](args[0](self)))))))));
    default:
      {
        let ret = self;
        for (let i = 0, len = args.length; i < len; i++) {
          ret = args[i](ret);
        }
        return ret;
      }
  }
};
/**
 * @since 3.15.0
 * @category Prototypes
 */
export const Prototype = {
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const Base = /*#__PURE__*/function () {
  function PipeableBase() {}
  PipeableBase.prototype = Prototype;
  return PipeableBase;
}();
/**
 * @since 3.15.0
 * @category Constructors
 */
export const Class = klass => klass ? class extends klass {
  pipe() {
    return pipeArguments(this, arguments);
  }
} : Base;
//# sourceMappingURL=Pipeable.js.map