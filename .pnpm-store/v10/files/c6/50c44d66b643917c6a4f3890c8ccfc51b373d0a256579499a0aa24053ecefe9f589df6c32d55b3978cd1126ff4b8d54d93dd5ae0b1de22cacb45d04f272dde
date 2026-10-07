import classCheckPrivateStaticAccess from './_class_check_private_static_access.mjs';
import classCheckPrivateStaticFieldDescriptor from './_class_check_private_static_field_descriptor.mjs';
import classApplyDescriptorGet from './_class_apply_descriptor_get.mjs';

export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
  classCheckPrivateStaticAccess(receiver, classConstructor);
  classCheckPrivateStaticFieldDescriptor(descriptor, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}
