"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumeric = isNumeric;
exports.parseEventElement = parseEventElement;
exports.getScreenCoords = getScreenCoords;
exports.findClosestPointOnLineSegment = findClosestPointOnLineSegment;
exports.getFeatureCoordinates = getFeatureCoordinates;
exports.updateRectanglePosition = updateRectanglePosition;

var _constants = require("../constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function isNumeric(val) {
  return !Array.isArray(val) && !isNaN(parseFloat(val)) && isFinite(val);
}

function parseEventElement(evt, features, guides) {
  var elem = evt.target;

  if (!elem || !elem.dataset || !elem.dataset.type) {
    return null;
  }

  var featureIndex = elem.dataset.featureIndex;
  featureIndex = isNumeric(featureIndex) ? Number(featureIndex) : -1;
  var index = elem.dataset.index;
  index = isNumeric(index) ? Number(index) : undefined;
  var type = elem.dataset.type;
  var tentativeFeature = guides && guides.find(function (g) {
    return g.properties.guideType === _constants.GUIDE_TYPE.TENTATIVE;
  });
  var object = null;
  var isGuide = false;

  switch (type) {
    case _constants.ELEMENT_TYPE.EDIT_HANDLE:
      object = guides.find(function (g) {
        var indexes = g.properties.positionIndexes;

        if (indexes) {
          return indexes[indexes.length - 1] === index;
        }

        return false;
      });
      isGuide = true;
      break;

    case _constants.ELEMENT_TYPE.SEGMENT:
    case _constants.ELEMENT_TYPE.FEATURE:
    case _constants.ELEMENT_TYPE.FILL:
      object = features[featureIndex] || tentativeFeature;
      break;

    default:
  }

  return {
    object: object,
    isGuide: isGuide,
    type: type,
    index: index,
    featureIndex: featureIndex
  };
}

function getScreenCoords(evt) {
  var _evt$offsetCenter = evt.offsetCenter,
      x = _evt$offsetCenter.x,
      y = _evt$offsetCenter.y;
  return [Number(x), Number(y)];
}

function findClosestPointOnLineSegment(p1, p2, p) {
  // line
  var k = (p2[1] - p1[1]) / (p2[0] - p1[0]);
  var b = p1[1] - k * p1[0]; // vertical line

  if (!isFinite(k)) {
    var q = [p1[0], p[1]];
    return inBounds(p1, p2, q) ? q : null;
  } // p is on line [p1, p2]


  if (p[0] * k + b - p[1] === 0) {
    return inBounds(p1, p2, p) ? p : null;
  }

  var qx = (k * p[1] + p[0] - k * b) / (k * k + 1);
  var qy = k * qx + b;
  return inBounds(p1, p2, [qx, qy]) ? [qx, qy] : null;
}

function getFeatureCoordinates(feature) {
  var coordinates = feature && feature.geometry && feature.geometry.coordinates;

  if (!coordinates) {
    return null;
  }

  var isPolygonal = feature.geometry.type === _constants.GEOJSON_TYPE.POLYGON;
  var isSinglePoint = feature.geometry.type === _constants.GEOJSON_TYPE.POINT;
  return isPolygonal ? coordinates[0] : isSinglePoint ? [coordinates] : coordinates;
}

function updateRectanglePosition(feature, editHandleIndex, mapCoords) {
  var coordinates = getFeatureCoordinates(feature);

  if (!coordinates) {
    return null;
  } // @ts-ignore


  var points = coordinates.slice(0, 4);
  points[editHandleIndex % 4] = mapCoords;
  /*
   *   p0.x, p0.y (p0) ------ p2.x, p0.y (p1)
   *       |                      |
   *       |                      |
   *   p0.x, p2.y (p3) ----- p2.x, p2.y (p2)
   */

  var p0 = points[(editHandleIndex + 2) % 4];
  var p2 = points[editHandleIndex % 4];
  points[(editHandleIndex + 1) % 4] = [p2[0], p0[1]];
  points[(editHandleIndex + 3) % 4] = [p0[0], p2[1]];
  return feature.geometry.type === _constants.GEOJSON_TYPE.POLYGON ? [[].concat(_toConsumableArray(points), [points[0]])] : points;
}

function inBounds(p1, p2, p) {
  var bounds = [Math.min(p1[0], p2[0]), Math.max(p1[0], p2[0]), Math.min(p1[1], p2[1]), Math.max(p1[1], p2[1])];
  return p[0] >= bounds[0] && p[0] <= bounds[1] && p[1] >= bounds[2] && p[1] <= bounds[3];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZGl0LW1vZGVzL3V0aWxzLnRzIl0sIm5hbWVzIjpbImlzTnVtZXJpYyIsInZhbCIsIkFycmF5IiwiaXNBcnJheSIsImlzTmFOIiwicGFyc2VGbG9hdCIsImlzRmluaXRlIiwicGFyc2VFdmVudEVsZW1lbnQiLCJldnQiLCJmZWF0dXJlcyIsImd1aWRlcyIsImVsZW0iLCJ0YXJnZXQiLCJkYXRhc2V0IiwidHlwZSIsImZlYXR1cmVJbmRleCIsIk51bWJlciIsImluZGV4IiwidW5kZWZpbmVkIiwidGVudGF0aXZlRmVhdHVyZSIsImZpbmQiLCJnIiwicHJvcGVydGllcyIsImd1aWRlVHlwZSIsIkdVSURFX1RZUEUiLCJURU5UQVRJVkUiLCJvYmplY3QiLCJpc0d1aWRlIiwiRUxFTUVOVF9UWVBFIiwiRURJVF9IQU5ETEUiLCJpbmRleGVzIiwicG9zaXRpb25JbmRleGVzIiwibGVuZ3RoIiwiU0VHTUVOVCIsIkZFQVRVUkUiLCJGSUxMIiwiZ2V0U2NyZWVuQ29vcmRzIiwib2Zmc2V0Q2VudGVyIiwieCIsInkiLCJmaW5kQ2xvc2VzdFBvaW50T25MaW5lU2VnbWVudCIsInAxIiwicDIiLCJwIiwiayIsImIiLCJxIiwiaW5Cb3VuZHMiLCJxeCIsInF5IiwiZ2V0RmVhdHVyZUNvb3JkaW5hdGVzIiwiZmVhdHVyZSIsImNvb3JkaW5hdGVzIiwiZ2VvbWV0cnkiLCJpc1BvbHlnb25hbCIsIkdFT0pTT05fVFlQRSIsIlBPTFlHT04iLCJpc1NpbmdsZVBvaW50IiwiUE9JTlQiLCJ1cGRhdGVSZWN0YW5nbGVQb3NpdGlvbiIsImVkaXRIYW5kbGVJbmRleCIsIm1hcENvb3JkcyIsInBvaW50cyIsInNsaWNlIiwicDAiLCJib3VuZHMiLCJNYXRoIiwibWluIiwibWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxTQUFULENBQW1CQyxHQUFuQixFQUE2QjtBQUNsQyxTQUFPLENBQUNDLEtBQUssQ0FB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QUFDLENBQUQsQ0FBRCxJQUFRc0IsTUFBTSxDQUFDLENBQUQsQ0FBeEQsSUFBK0R0QixDQUFDLENBQUMsQ0FBRCxDQUFELElBQVFzQixNQUFNLENBQUMsQ0FBRCxDQUFwRjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWpvbG5pckV2ZW50IH0gZnJvbSAnbWpvbG5pci5qcyc7XG5pbXBvcnQgdHlwZSB7IEZlYXR1cmVPZiwgRmVhdHVyZSwgUG9seWdvbiwgUG9zaXRpb24gfSBmcm9tICdAbmVidWxhLmdsL2VkaXQtbW9kZXMnO1xuXG5pbXBvcnQgeyBHRU9KU09OX1RZUEUsIEVMRU1FTlRfVFlQRSwgR1VJREVfVFlQRSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWModmFsOiBhbnkpIHtcbiAgcmV0dXJuICFBcnJheS5pc0FycmF5KHZhbCkgJiYgIWlzTmFOKHBhcnNlRmxvYXQodmFsKSkgJiYgaXNGaW5pdGUodmFsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRXZlbnRFbGVtZW50KGV2dDogTWpvbG5pckV2ZW50LCBmZWF0dXJlczogRmVhdHVyZVtdLCBndWlkZXM6IEZlYXR1cmVbXSkge1xuICBjb25zdCBlbGVtID0gZXZ0LnRhcmdldDtcbiAgaWYgKCFlbGVtIHx8ICFlbGVtLmRhdGFzZXQgfHwgIWVsZW0uZGF0YXNldC50eXBlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgZmVhdHVyZUluZGV4ID0gZWxlbS5kYXRhc2V0LmZlYXR1cmVJbmRleDtcbiAgZmVhdHVyZUluZGV4ID0gaXNOdW1lcmljKGZlYXR1cmVJbmRleCkgPyBOdW1iZXIoZmVhdHVyZUluZGV4KSA6IC0xO1xuXG4gIGxldCBpbmRleCA9IGVsZW0uZGF0YXNldC5pbmRleDtcbiAgaW5kZXggPSBpc051bWVyaWMoaW5kZXgpID8gTnVtYmVyKGluZGV4KSA6IHVuZGVmaW5lZDtcblxuICBjb25zdCB0eXBlID0gZWxlbS5kYXRhc2V0LnR5cGU7XG4gIGNvbnN0IHRlbnRhdGl2ZUZlYXR1cmUgPVxuICAgIGd1aWRlcyAmJiBndWlkZXMuZmluZCgoZykgPT4gZy5wcm9wZXJ0aWVzLmd1aWRlVHlwZSA9PT0gR1VJREVfVFlQRS5URU5UQVRJVkUpO1xuICBsZXQgb2JqZWN0ID0gbnVsbDtcbiAgbGV0IGlzR3VpZGUgPSBmYWxzZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEVMRU1FTlRfVFlQRS5FRElUX0hBTkRMRTpcbiAgICAgIG9iamVjdCA9IGd1aWRlcy5maW5kKChnKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ZXMgPSBnLnByb3BlcnRpZXMucG9zaXRpb25JbmRleGVzO1xuICAgICAgICBpZiAoaW5kZXhlcykge1xuICAgICAgICAgIHJldHVybiBpbmRleGVzW2luZGV4ZXMubGVuZ3RoIC0gMV0gPT09IGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgaXNHdWlkZSA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEVMRU1FTlRfVFlQRS5TRUdNRU5UOlxuICAgIGNhc2UgRUxFTUVOVF9UWVBFLkZFQVRVUkU6XG4gICAgY2FzZSBFTEVNRU5UX1RZUEUuRklMTDpcbiAgICAgIG9iamVjdCA9IGZlYXR1cmVzW2ZlYXR1cmVJbmRleF0gfHwgdGVudGF0aXZlRmVhdHVyZTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9iamVjdCxcbiAgICBpc0d1aWRlLFxuICAgIHR5cGUsXG4gICAgaW5kZXgsXG4gICAgZmVhdHVyZUluZGV4LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NyZWVuQ29vcmRzKGV2dDogTWpvbG5pckV2ZW50KSB7XG4gIGNvbnN0IHtcbiAgICBvZmZzZXRDZW50ZXI6IHsgeCwgeSB9LFxuICB9ID0gZXZ0O1xuICByZXR1cm4gW051bWJlcih4KSwgTnVtYmVyKHkpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0UG9pbnRPbkxpbmVTZWdtZW50KHAxOiBQb3NpdGlvbiwgcDI6IFBvc2l0aW9uLCBwOiBQb3NpdGlvbikge1xuICAvLyBsaW5lXG4gIGNvbnN0IGsgPSAocDJbMV0gLSBwMVsxXSkgLyAocDJbMF0gLSBwMVswXSk7XG4gIGNvbnN0IGIgPSBwMVsxXSAtIGsgKiBwMVswXTtcblxuICAvLyB2ZXJ0aWNhbCBsaW5lXG4gIGlmICghaXNGaW5pdGUoaykpIHtcbiAgICBjb25zdCBxOiBQb3NpdGlvbiA9IFtwMVswXSwgcFsxXV07XG4gICAgcmV0dXJuIGluQm91bmRzKHAxLCBwMiwgcSkgPyBxIDogbnVsbDtcbiAgfVxuXG4gIC8vIHAgaXMgb24gbGluZSBbcDEsIHAyXVxuICBpZiAocFswXSAqIGsgKyBiIC0gcFsxXSA9PT0gMCkge1xuICAgIHJldHVybiBpbkJvdW5kcyhwMSwgcDIsIHApID8gcCA6IG51bGw7XG4gIH1cblxuICBjb25zdCBxeCA9IChrICogcFsxXSArIHBbMF0gLSBrICogYikgLyAoayAqIGsgKyAxKTtcbiAgY29uc3QgcXkgPSBrICogcXggKyBiO1xuXG4gIHJldHVybiBpbkJvdW5kcyhwMSwgcDIsIFtxeCwgcXldKSA/IFtxeCwgcXldIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZlYXR1cmVDb29yZGluYXRlcyhmZWF0dXJlOiBGZWF0dXJlKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZmVhdHVyZSAmJiBmZWF0dXJlLmdlb21ldHJ5ICYmIGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXM7XG4gIGlmICghY29vcmRpbmF0ZXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGlzUG9seWdvbmFsID0gZmVhdHVyZS5nZW9tZXRyeS50eXBlID09PSBHRU9KU09OX1RZUEUuUE9MWUdPTjtcbiAgY29uc3QgaXNTaW5nbGVQb2ludCA9IGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gR0VPSlNPTl9UWVBFLlBPSU5UO1xuICByZXR1cm4gaXNQb2x5Z29uYWwgPyBjb29yZGluYXRlc1swXSA6IGlzU2luZ2xlUG9pbnQgPyBbY29vcmRpbmF0ZXNdIDogY29vcmRpbmF0ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVSZWN0YW5nbGVQb3NpdGlvbihcbiAgZmVhdHVyZTogRmVhdHVyZU9mPFBvbHlnb24+LFxuICBlZGl0SGFuZGxlSW5kZXg6IG51bWJlcixcbiAgbWFwQ29vcmRzOiBQb3NpdGlvblxuKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0RmVhdHVyZUNvb3JkaW5hdGVzKGZlYXR1cmUpO1xuICBpZiAoIWNvb3JkaW5hdGVzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBwb2ludHMgPSBjb29yZGluYXRlcy5zbGljZSgwLCA0KTtcbiAgcG9pbnRzW2VkaXRIYW5kbGVJbmRleCAlIDRdID0gbWFwQ29vcmRzO1xuXG4gIC8qXG4gICAqICAgcDAueCwgcDAueSAocDApIC0tLS0tLSBwMi54LCBwMC55IChwMSlcbiAgICogICAgICAgfCAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiAgIHAwLngsIHAyLnkgKHAzKSAtLS0tLSBwMi54LCBwMi55IChwMilcbiAgICovXG4gIGNvbnN0IHAwID0gcG9pbnRzWyhlZGl0SGFuZGxlSW5kZXggKyAyKSAlIDRdO1xuICBjb25zdCBwMiA9IHBvaW50c1tlZGl0SGFuZGxlSW5kZXggJSA0XTtcbiAgcG9pbnRzWyhlZGl0SGFuZGxlSW5kZXggKyAxKSAlIDRdID0gW3AyWzBdLCBwMFsxXV07XG4gIHBvaW50c1soZWRpdEhhbmRsZUluZGV4ICsgMykgJSA0XSA9IFtwMFswXSwgcDJbMV1dO1xuXG4gIHJldHVybiBmZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09IEdFT0pTT05fVFlQRS5QT0xZR09OID8gW1suLi5wb2ludHMsIHBvaW50c1swXV1dIDogcG9pbnRzO1xufVxuXG5mdW5jdGlvbiBpbkJvdW5kcyhwMTogUG9zaXRpb24sIHAyOiBQb3NpdGlvbiwgcDogUG9zaXRpb24pOiBib29sZWFuIHtcbiAgY29uc3QgYm91bmRzID0gW1xuICAgIE1hdGgubWluKHAxWzBdLCBwMlswXSksXG4gICAgTWF0aC5tYXgocDFbMF0sIHAyWzBdKSxcbiAgICBNYXRoLm1pbihwMVsxXSwgcDJbMV0pLFxuICAgIE1hdGgubWF4KHAxWzFdLCBwMlsxXSksXG4gIF07XG5cbiAgcmV0dXJuIHBbMF0gPj0gYm91bmRzWzBdICYmIHBbMF0gPD0gYm91bmRzWzFdICYmIHBbMV0gPj0gYm91bmRzWzJdICYmIHBbMV0gPD0gYm91bmRzWzNdO1xufVxuIl19