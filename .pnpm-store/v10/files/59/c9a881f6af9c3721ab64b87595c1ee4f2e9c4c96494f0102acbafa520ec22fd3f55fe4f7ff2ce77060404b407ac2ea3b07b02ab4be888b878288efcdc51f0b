{
  "definitions": {
    "propertyList": {
      "type": "array",
      "minItems": 1,
      "uniqueItems": true,
      "items": {
        "type": "string",
        "property-reference": {
          "comment": "property-reference is an extension to the JSON schema validator. Here it jumps to the root level of the hierarchy and tests if a value is an existing key there (i.e a defined property). See test/validate-schema.js for implementation details.",
          "$data": "/"
        }
      }
    },
    "animationType": {
      "enum": [
        "angleBasicShapeOrPath",
        "angleOrBasicShapeOrPath",
        "basicShapeOtherwiseNo",
        "byComputedValueType",
        "color",
        "discrete",
        "eachOfShorthandPropertiesExceptUnicodeBiDiAndDirection",
        "filterList",
        "fontStretch",
        "fontWeight",
        "integer",
        "length",
        "lpc",
        "notAnimatable",
        "numberOrLength",
        "number",
        "position",
        "rectangle",
        "repeatableListOfSimpleListOfLpc",
        "shadowList",
        "simpleListOfLpc",
        "simpleListOfLpcDifferenceLpc",
        "transform",
        "visibility"
      ]
    },
    "percentages": {
      "enum": [
        "blockSizeOfContainingBlock",
        "dependsOnLayoutModel",
        "inlineSizeOfContainingBlock",
        "lengthsAsPercentages",
        "logicalHeightOfContainingBlock",
        "logicalWidthOfContainingBlock",
        "maxZoomFactor",
        "minZoomFactor",
        "no",
        "referToBorderBox",
        "referToContainingBlockHeight",
        "referToDimensionOfBorderBox",
        "referToDimensionOfContentArea",
        "referToElementFontSize",
        "referToFlexContainersInnerMainSize",
        "referToHeightOfBackgroundPositioningAreaMinusBackgroundImageHeight",
        "referToLineBoxWidth",
        "referToLineHeight",
        "referToParentElementsFontSize",
        "referToSizeOfBackgroundPositioningAreaMinusBackgroundImageSize",
        "referToSizeOfBorderImage",
        "referToSizeOfBoundingBox",
        "referToSizeOfContainingBlock",
        "referToSizeOfElement",
        "referToSizeOfFont",
        "referToSizeOfMaskBorderImage",
        "referToSizeOfMaskPaintingArea",
        "referToTotalPathLength",
        "referToWidthAndHeightOfElement",
        "referToWidthOfAffectedGlyph",
        "referToWidthOfBackgroundPositioningAreaMinusBackgroundImageHeight",
        "referToWidthOfContainingBlock",
        "referToWidthOrHeightOfBorderImageArea",
        "referToReferenceBoxWhenSpecifiedOtherwiseBorderBox",
        "regardingHeightOfGeneratedBoxContainingBlockPercentages0",
        "regardingHeightOfGeneratedBoxContainingBlockPercentagesNone",
        "regardingHeightOfGeneratedBoxContainingBlockPercentagesRelativeToContainingBlock",
        "relativeToBackgroundPositioningArea",
        "relativeToMaskBorderImageArea",
        "relativeToScrollContainerPaddingBoxAxis",
        "relativeToTheScrollContainersScrollport",
        "relativeToWidthAndHeight"
      ]
    },
    "computed": {
      "enum": [
        "absoluteLength",
        "absoluteLength0ForNone",
        "absoluteLength0IfColumnRuleStyleNoneOrHidden",
        "absoluteLengthOr0IfBorderBottomStyleNoneOrHidden",
        "absoluteLengthOr0IfBorderLeftStyleNoneOrHidden",
        "absoluteLengthOr0IfBorderRightStyleNoneOrHidden",
        "absoluteLengthOr0IfBorderTopStyleNoneOrHidden",
        "absoluteLengthOrAsSpecified",
        "absoluteLengthOrKeyword",
        "absoluteLengthOrNone",
        "absoluteLengthOrNormal",
        "absoluteLengthOrPercentage",
        "absoluteLengthsSpecifiedColorAsSpecified",
        "absoluteLengthZeroIfBorderStyleNoneOrHidden",
        "absoluteLengthZeroOrLarger",
        "absoluteURIOrNone",
        "angleRoundedToNextQuarter",
        "asAutoOrColor",
        "asDefinedForBasicShapeWithAbsoluteURIOtherwiseAsSpecified",
        "asLength",
        "asSpecified",
        "asSpecifiedAppliesToEachProperty",
        "asSpecifiedButVisibleOrClipReplacedToAutoOrHiddenIfOtherValueDifferent",
        "asSpecifiedExceptMatchParent",
        "asSpecifiedExceptPositionedFloatingAndRootElementsKeywordMaybeDifferent",
        "asSpecifiedRelativeToAbsoluteLengths",
        "asSpecifiedURLsAbsolute",
        "asSpecifiedWithExceptionOfResolution",
        "asSpecifiedWithLengthsAbsoluteAndNormalComputingToZeroExceptMultiColumn",
        "asSpecifiedWithVarsSubstituted",
        "autoOnAbsolutelyPositionedElementsValueOfAlignItemsOnParent",
        "autoOrRectangle",
        "colorPlusThreeAbsoluteLengths",
        "computedColor",
        "consistsOfTwoDimensionKeywords",
        "consistsOfTwoKeywordsForOriginAndOffsets",
        "forLengthAbsoluteValueOtherwisePercentage",
        "invertForTranslucentColorRGBAOtherwiseRGB",
        "keywordOrNumericalValueBolderLighterTransformedToRealValue",
        "keywordPlusIntegerIfDigits",
        "lengthAbsolutePercentageAsSpecifiedOtherwiseAuto",
        "listEachItemConsistingOfAbsoluteLengthPercentageAndOrigin",
        "listEachItemHasTwoKeywordsOnePerDimension",
        "listEachItemTwoKeywordsOriginOffsets",
        "noneOrImageWithAbsoluteURI",
        "normalizedAngle",
        "normalOnElementsForPseudosNoneAbsoluteURIStringOrAsSpecified",
        "oneToFourPercentagesOrAbsoluteLengthsPlusFill",
        "optimumMinAndMaxValueOfAbsoluteLengthPercentageOrNormal",
        "optimumValueOfAbsoluteLengthOrNormal",
        "percentageAsSpecifiedAbsoluteLengthOrNone",
        "percentageAsSpecifiedOrAbsoluteLength",
        "percentageAutoOrAbsoluteLength",
        "percentageOrAbsoluteLengthPlusKeywords",
        "sameAsBoxOffsets",
        "sameAsMaxWidthAndMaxHeight",
        "sameAsMinWidthAndMinHeight",
        "sameAsWidthAndHeight",
        "specifiedIntegerOrAbsoluteLength",
        "specifiedValueClipped0To1",
        "specifiedValueNumberClipped0To1",
        "translucentValuesRGBAOtherwiseRGB",
        "twoAbsoluteLengthOrPercentages",
        "twoAbsoluteLengths"
      ]
    },
    "appliesto": {
      "enum": [
        "absolutelyPositionedElements",
        "allElements",
        "allElementsAcceptingWidthOrHeight",
        "allElementsAndPseudos",
        "allElementsButNonReplacedAndTableColumns",
        "allElementsButNonReplacedAndTableRows",
        "allElementsCreatingNativeWindows",
        "allElementsExceptGeneratedContentOrPseudoElements",
        "allElementsExceptInlineBoxesAndInternalRubyOrTableBoxes",
        "allElementsExceptInternalTableDisplayTypes",
        "allElementsExceptNonReplacedInlineElementsTableRowsColumnsRowColumnGroups",
        "allElementsExceptTableDisplayTypes",
        "allElementsExceptTableElementsWhenCollapse",
        "allElementsExceptTableRowColumnGroupsTableRowsColumns",
        "allElementsExceptTableRowGroupsRowsColumnGroupsAndColumns",
        "allElementsNoEffectIfDisplayNone",
        "allElementsSomeValuesNoEffectOnNonInlineElements",
        "allElementsSVGContainerElements",
        "allElementsSVGContainerGraphicsAndGraphicsReferencingElements",
        "allElementsThatCanReferenceImages",
        "allElementsUAsNotRequiredWhenCollapse",
        "anyElementEffectOnProgressAndMeter",
        "beforeAndAfterPseudos",
        "blockContainerElements",
        "blockContainers",
        "blockContainersAndMultiColumnContainers",
        "blockContainersExceptMultiColumnContainers",
        "blockContainersExceptTableWrappers",
        "blockContainersFlexContainersGridContainers",
        "blockElementsInNormalFlow",
        "blockLevelElements",
        "blockLevelBoxesAndAbsolutelyPositionedBoxesAndGridItems",
        "boxElements",
        "childrenOfBoxElements",
        "directChildrenOfElementsWithDisplayMozBoxMozInlineBox",
        "elementsWithDisplayBoxOrInlineBox",
        "elementsWithDisplayMarker",
        "elementsWithDisplayMozBoxMozInlineBox",
        "elementsWithOverflowNotVisibleAndReplacedElements",
        "exclusionElements",
        "firstLetterPseudoElementsAndInlineLevelFirstChildren",
        "flexContainers",
        "flexItemsAndAbsolutelyPositionedFlexContainerChildren",
        "flexItemsAndInFlowPseudos",
        "flexItemsGridItemsAbsolutelyPositionedContainerChildren",
        "flexItemsGridItemsAndAbsolutelyPositionedBoxes",
        "floats",
        "gridContainers",
        "gridContainersWithMasonryLayout",
        "gridContainersWithMasonryLayoutInTheirBlockAxis",
        "gridContainersWithMasonryLayoutInTheirInlineAxis",
        "gridItemsAndBoxesWithinGridContainer",
        "iframeElements",
        "images",
        "inFlowBlockLevelElements",
        "inFlowChildrenOfBoxElements",
        "inlineLevelAndTableCellElements",
        "listItems",
        "maskElements",
        "multicolElements",
        "multiColumnElementsFlexContainersGridContainers",
        "multilineFlexContainers",
        "nonReplacedBlockAndInlineBlockElements",
        "nonReplacedBlockElements",
        "nonReplacedElements",
        "nonReplacedInlineElements",
        "positionedElements",
        "replacedElements",
        "rubyAnnotationsContainers",
        "rubyBasesAnnotationsBaseAnnotationContainers",
        "sameAsMargin",
        "sameAsWidthAndHeight",
        "scrollContainers",
        "scrollingBoxes",
        "tableCaptionElements",
        "tableCellElements",
        "tableElements",
        "textElements",
        "textFields",
        "transformableElements",
        "xulImageElements"
      ]
    },
    "alsoApplyTo": {
      "type": "array",
      "minItems": 1,
      "uniqueItems": true,
      "items": {
        "enum": [
          "::first-letter",
          "::first-line",
          "::placeholder"
        ]
      }
    },
    "order": {
      "enum": [
        "canonicalOrder",
        "lengthOrPercentageBeforeKeywordIfBothPresent",
        "lengthOrPercentageBeforeKeywords",
        "oneOrTwoValuesLengthAbsoluteKeywordsPercentages",
        "orderOfAppearance",
        "percentagesOrLengthsFollowedByFill",
        "perGrammar",
        "uniqueOrder"
      ]
    },
    "status": {
      "enum": [
        "standard",
        "nonstandard",
        "experimental",
        "obsolete"
      ]
    },
    "mdn_url": {
      "type": "string",
      "pattern": "^https://developer.mozilla.org/docs/"
    }
  },
  "type": "object",
  "additionalProperties": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "syntax",
      "media",
      "inherited",
      "animationType",
      "percentages",
      "groups",
      "initial",
      "appliesto",
      "computed",
      "order",
      "status"
    ],
    "properties": {
      "syntax": {
        "type": "string"
      },
      "media": {
        "oneOf": [
          {
            "type": "string",
            "enum": [
              "all",
              "aural",
              "continuous",
              "interactive",
              "none",
              "noPracticalMedia",
              "paged",
              "visual",
              "visualInContinuousMediaNoEffectInOverflowColumns"
            ]
          },
          {
            "type": "array",
            "minItems": 2,
            "uniqueItems": true,
            "items": {
              "type": "string",
              "enum": [
                "interactive",
                "paged",
                "visual"
              ]
            }
          }
        ]
      },
      "inherited": {
        "type": "boolean"
      },
      "animationType": {
        "oneOf": [
          {
            "$ref": "#/definitions/animationType"
          },
          {
            "$ref": "#/definitions/propertyList"
          }
        ]
      },
      "percentages": {
        "oneOf": [
          {
            "$ref": "#/definitions/percentages"
          },
          {
            "$ref": "#/definitions/propertyList"
          }
        ]
      },
      "groups": {
        "type": "array",
        "minitems": 1,
        "uniqueItems": true,
        "items": {
          "$ref": "definitions.json#/groupList"
        }
      },
      "initial": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "$ref": "#/definitions/propertyList"
          }
        ]
      },
      "appliesto": {
        "$ref": "#/definitions/appliesto"
      },
      "alsoAppliesTo": {
        "$ref": "#/definitions/alsoApplyTo"
      },
      "computed": {
        "oneOf": [
          {
            "$ref": "#/definitions/computed"
          },
          {
            "$ref": "#/definitions/propertyList"
          }
        ]
      },
      "order": {
        "$ref": "#/definitions/order"
      },
      "stacking": {
        "type": "boolean"
      },
      "status": {
        "$ref": "#/definitions/status"
      },
      "mdn_url": {
        "$ref": "#/definitions/mdn_url"
      }
    }
  }
}
