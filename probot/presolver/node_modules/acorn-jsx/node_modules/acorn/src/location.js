import {Parser} from "./state"
import {Position, getLineInfo} from "./locutil"

const pp = Parser.prototype

// This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.

pp.raise = function(pos, message) {
  let loc = getLineInfo(this.input, pos)
  message += " (" + loc.line + ":" + loc.column + ")"
  let err = new SyntaxError(message)
  err.pos = pos; err.loc = loc; err.raisedAt = this.pos
  throw err
}

pp.raiseRecoverable = pp.raise

pp.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart)
  }
}
