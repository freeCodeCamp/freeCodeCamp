import classCheckPrivateStaticAccess from './_class_check_private_static_access.mjs';
import classCheckPrivateStaticFieldDescriptor from './_class_check_private_static_field_descriptor.mjs';
import classApplyDescriptorSet from './_class_apply_descriptor_set.mjs';

export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
  classCheckPrivateStaticAccess(receiver, classConstructor);
  classCheckPrivateStaticFieldDescriptor(descriptor, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
