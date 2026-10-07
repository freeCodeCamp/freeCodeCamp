import { _class_apply_descriptor_destructure } from "./_class_apply_descriptor_destructure.js";
import { _class_check_private_static_access } from "./_class_check_private_static_access.js";
import { _class_check_private_static_field_descriptor } from "./_class_check_private_static_field_descriptor.js";

export function _class_static_private_field_destructure(receiver, classConstructor, descriptor) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "set");

    return _class_apply_descriptor_destructure(receiver, descriptor);
}
export { _class_static_private_field_destructure as _ };
