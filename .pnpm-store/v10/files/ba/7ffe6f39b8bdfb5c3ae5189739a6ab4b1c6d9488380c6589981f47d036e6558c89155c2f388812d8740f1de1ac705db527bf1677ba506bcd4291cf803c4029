import '../../utils/dataTransfer/Clipboard.js';
import { isEditable } from '../../utils/edit/isEditable.js';
import { input } from '../input.js';
import { behavior } from './registry.js';

behavior.cut = (event, target, instance)=>{
    return ()=>{
        if (isEditable(target)) {
            input(instance, target, '', 'deleteByCut');
        }
    };
};
