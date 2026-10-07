import '../utils/dataTransfer/Clipboard.js';
import { setLevelRef, ApiLevel } from '../utils/misc/level.js';
import { wait } from '../utils/misc/wait.js';
import { parseKeyDef } from './parseKeyDef.js';

async function pointer(input) {
    const { pointerMap } = this.config;
    const actions = [];
    (Array.isArray(input) ? input : [
        input
    ]).forEach((actionInput)=>{
        if (typeof actionInput === 'string') {
            actions.push(...parseKeyDef(pointerMap, actionInput));
        } else if ('keys' in actionInput) {
            actions.push(...parseKeyDef(pointerMap, actionInput.keys).map((i)=>({
                    ...actionInput,
                    ...i
                })));
        } else {
            actions.push(actionInput);
        }
    });
    for(let i = 0; i < actions.length; i++){
        await wait(this.config);
        await pointerAction(this, actions[i]);
    }
    this.system.pointer.resetClickCount();
}
async function pointerAction(instance, action) {
    var _action_target, _action_coords, _action_node, _action_offset;
    var _previousPosition_caret, _previousPosition_caret1;
    const pointerName = 'pointerName' in action && action.pointerName ? action.pointerName : 'keyDef' in action ? instance.system.pointer.getPointerName(action.keyDef) : 'mouse';
    const previousPosition = instance.system.pointer.getPreviousPosition(pointerName);
    const position = {
        target: (_action_target = action.target) !== null && _action_target !== void 0 ? _action_target : getPrevTarget(instance, previousPosition),
        coords: (_action_coords = action.coords) !== null && _action_coords !== void 0 ? _action_coords : previousPosition === null || previousPosition === void 0 ? void 0 : previousPosition.coords,
        caret: {
            node: (_action_node = action.node) !== null && _action_node !== void 0 ? _action_node : hasCaretPosition(action) ? undefined : previousPosition === null || previousPosition === void 0 ? void 0 : (_previousPosition_caret = previousPosition.caret) === null || _previousPosition_caret === void 0 ? void 0 : _previousPosition_caret.node,
            offset: (_action_offset = action.offset) !== null && _action_offset !== void 0 ? _action_offset : hasCaretPosition(action) ? undefined : previousPosition === null || previousPosition === void 0 ? void 0 : (_previousPosition_caret1 = previousPosition.caret) === null || _previousPosition_caret1 === void 0 ? void 0 : _previousPosition_caret1.offset
        }
    };
    if ('keyDef' in action) {
        if (instance.system.pointer.isKeyPressed(action.keyDef)) {
            setLevelRef(instance, ApiLevel.Trigger);
            await instance.system.pointer.release(instance, action.keyDef, position);
        }
        if (!action.releasePrevious) {
            setLevelRef(instance, ApiLevel.Trigger);
            await instance.system.pointer.press(instance, action.keyDef, position);
            if (action.releaseSelf) {
                setLevelRef(instance, ApiLevel.Trigger);
                await instance.system.pointer.release(instance, action.keyDef, position);
            }
        }
    } else {
        setLevelRef(instance, ApiLevel.Trigger);
        await instance.system.pointer.move(instance, pointerName, position);
    }
}
function hasCaretPosition(action) {
    var _ref, _action_target;
    return !!((_ref = (_action_target = action.target) !== null && _action_target !== void 0 ? _action_target : action.node) !== null && _ref !== void 0 ? _ref : action.offset !== undefined);
}
function getPrevTarget(instance, position) {
    var _position_target;
    if (!position) {
        throw new Error('This pointer has no previous position. Provide a target property!');
    }
    return (_position_target = position.target) !== null && _position_target !== void 0 ? _position_target : instance.config.document.body;
}

export { pointer };
