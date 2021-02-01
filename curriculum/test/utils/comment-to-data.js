function commentToData(file, comment) {
  if (file.data[comment]) {
    file.data[comment]++;
  } else {
    file.data[comment] = 1;
  }
}

exports.commentToData = commentToData;
