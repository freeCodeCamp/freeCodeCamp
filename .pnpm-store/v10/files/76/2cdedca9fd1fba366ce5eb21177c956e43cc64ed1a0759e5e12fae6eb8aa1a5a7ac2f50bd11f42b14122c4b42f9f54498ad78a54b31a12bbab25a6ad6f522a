'use strict';

const { createPreset } = require('../lib/svgo/plugins.js');

const removeDoctype = require('./removeDoctype.js');
const removeXMLProcInst = require('./removeXMLProcInst.js');
const removeComments = require('./removeComments.js');
const removeMetadata = require('./removeMetadata.js');
const removeEditorsNSData = require('./removeEditorsNSData.js');
const cleanupAttrs = require('./cleanupAttrs.js');
const mergeStyles = require('./mergeStyles.js');
const inlineStyles = require('./inlineStyles.js');
const minifyStyles = require('./minifyStyles.js');
const cleanupIDs = require('./cleanupIDs.js');
const removeUselessDefs = require('./removeUselessDefs.js');
const cleanupNumericValues = require('./cleanupNumericValues.js');
const convertColors = require('./convertColors.js');
const removeUnknownsAndDefaults = require('./removeUnknownsAndDefaults.js');
const removeNonInheritableGroupAttrs = require('./removeNonInheritableGroupAttrs.js');
const removeUselessStrokeAndFill = require('./removeUselessStrokeAndFill.js');
const removeViewBox = require('./removeViewBox.js');
const cleanupEnableBackground = require('./cleanupEnableBackground.js');
const removeHiddenElems = require('./removeHiddenElems.js');
const removeEmptyText = require('./removeEmptyText.js');
const convertShapeToPath = require('./convertShapeToPath.js');
const convertEllipseToCircle = require('./convertEllipseToCircle.js');
const moveElemsAttrsToGroup = require('./moveElemsAttrsToGroup.js');
const moveGroupAttrsToElems = require('./moveGroupAttrsToElems.js');
const collapseGroups = require('./collapseGroups.js');
const convertPathData = require('./convertPathData.js');
const convertTransform = require('./convertTransform.js');
const removeEmptyAttrs = require('./removeEmptyAttrs.js');
const removeEmptyContainers = require('./removeEmptyContainers.js');
const mergePaths = require('./mergePaths.js');
const removeUnusedNS = require('./removeUnusedNS.js');
const sortDefsChildren = require('./sortDefsChildren.js');
const removeTitle = require('./removeTitle.js');
const removeDesc = require('./removeDesc.js');

const presetDefault = createPreset({
  name: 'presetDefault',
  plugins: [
    removeDoctype,
    removeXMLProcInst,
    removeComments,
    removeMetadata,
    removeEditorsNSData,
    cleanupAttrs,
    mergeStyles,
    inlineStyles,
    minifyStyles,
    cleanupIDs,
    removeUselessDefs,
    cleanupNumericValues,
    convertColors,
    removeUnknownsAndDefaults,
    removeNonInheritableGroupAttrs,
    removeUselessStrokeAndFill,
    removeViewBox,
    cleanupEnableBackground,
    removeHiddenElems,
    removeEmptyText,
    convertShapeToPath,
    convertEllipseToCircle,
    moveElemsAttrsToGroup,
    moveGroupAttrsToElems,
    collapseGroups,
    convertPathData,
    convertTransform,
    removeEmptyAttrs,
    removeEmptyContainers,
    mergePaths,
    removeUnusedNS,
    sortDefsChildren,
    removeTitle,
    removeDesc,
  ],
});

module.exports = presetDefault;
