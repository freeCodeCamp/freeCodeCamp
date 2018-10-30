export default function(instance) {
  instance.registerHelper('lookup', function(obj, field) {
    return obj && obj[field];
  });
}
