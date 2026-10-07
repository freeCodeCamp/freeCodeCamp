import classCheckPrivateStaticAccess from './_class_check_private_static_access.mjs';
import classCheckPrivateStaticFieldDescriptor from './_class_check_private_static_field_descriptor.mjs';
import classApplyDescriptorUpdate from './_class_apply_descriptor_update.mjs';

export default function _classStaticPrivateFieldUpdate(receiver, classConstructor, descriptor) {
  classCheckPrivateStaticAccess(receiver, classConstructor);
  classCheckPrivateStaticFieldDescriptor(descriptor, "update");
  return classApplyDescriptorUpdate(receiver, descriptor);
}
