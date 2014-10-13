exports.availableDocumentFeatures = [
  'FetchExternalResources',
  'ProcessExternalResources',
  'MutationEvents',
  'SkipExternalResources'
];

exports.defaultDocumentFeatures = {
  "FetchExternalResources": ['script', 'link'/*, 'img', 'css', 'frame'*/],
  "ProcessExternalResources": ['script'/*, 'frame', 'iframe'*/],
  "MutationEvents": '2.0',
  "SkipExternalResources": false
};

exports.applyDocumentFeatures = function(doc, features) {
  var i, maxFeatures = exports.availableDocumentFeatures.length,
      defaultFeatures = exports.defaultDocumentFeatures,
      j,
      k,
      featureName,
      featureSource;

  features = features || {};

  for (i=0; i<maxFeatures; i++) {
    featureName = exports.availableDocumentFeatures[i];
    if (typeof features[featureName] !== 'undefined') {
      featureSource = features[featureName];
    // We have to check the lowercase version also because the Document feature
    // methods convert everything to lowercase.
    } else if (typeof features[featureName.toLowerCase()] !== 'undefined') {
      featureSource = features[featureName.toLowerCase()];
    } else if (defaultFeatures[featureName]) {
      featureSource = defaultFeatures[featureName];
    } else {
      continue;
    }

    doc.implementation.removeFeature(featureName);

    if (typeof featureSource !== 'undefined') {
      if (featureSource instanceof Array) {
        k = featureSource.length;
        for (j=0; j<k; j++) {
          doc.implementation.addFeature(featureName, featureSource[j]);
        }
      } else {
        doc.implementation.addFeature(featureName, featureSource);
      }
    }
  }
};
