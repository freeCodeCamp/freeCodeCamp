import classCheckPrivateStaticAccess from './_class_check_private_static_access.mjs';
import classCheckPrivateStaticFieldDescriptor from './_class_check_private_static_field_descriptor.mjs';
import classApplyDescriptorDestructureSet from './_class_apply_descriptor_destructure.mjs';

export default function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
  classCheckPrivateStaticAccess(receiver, classConstructor);
  classCheckPrivateStaticFieldDescriptor(descriptor, "set");
  return classApplyDescriptorDestructureSet(receiver, descriptor);
}
