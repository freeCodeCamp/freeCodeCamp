for (var key in objects) {
  if (objects.hasOwnProperty(key)) {
    hey();
  }
}

for (var key in objects) {
  if (!objects.hasOwnProperty(key)) {
    continue;
  }
  hey();
}

// More statements in loop body than just the if
for (var key in objects) {
  if (objects.hasOwnProperty(key)) {
    hey();
  }
  hey();
}

// No continue
for (var key in objects) {
  if (!objects.hasOwnProperty(key)) {
    hey();
  }
  hey();
}

// Nested loops
for (var key in objects) {
  if (!objects.hasOwnProperty(key)) {
    continue;
  }

  // No if statement
  for (var key2 in objects) {
    hey();

    for (var key3 in objects) {
      if (objects.hasOwnProperty(key3)) {
        // No continue
        for (var key4 in objects) {
          if (!objects.hasOwnProperty(key4)) {
            hey();
          }
        }
      }
    }
  }
}

var hasOwn = Object.prototype.hasOwnProperty;

for (var p in o) {
  if (hasOwn.call(o, p)) {
    hey();
  }
}

for (var p in o) {
  if (Reflect.has(o, p)) {
    hey();
  }
}

// Empty for in block like the one found in jQuery
// JSHINT would crash upon finding this and wouldn't continue
// GH-336
for (key in objects) {}

// Let's make sure we continue scanning the rest of the file.
for (key in objects) {
  hey();
}
