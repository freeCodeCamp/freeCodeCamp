import { _class_apply_descriptor_set } from "./_class_apply_descriptor_set.js";
import { _class_check_private_static_access } from "./_class_check_private_static_access.js";
import { _class_check_private_static_field_descriptor } from "./_class_check_private_static_field_descriptor.js";

export function _class_static_private_field_spec_set(receiver, classConstructor, descriptor, value) {
    _class_check_private_static_access(receiver, classConstructor);
    _class_check_private_static_field_descriptor(descriptor, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);

    return value;
}
export { _class_static_private_field_spec_set as _ };
