"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BaseMode = /*#__PURE__*/function () {
  function BaseMode() {
    _classCallCheck(this, BaseMode);

    _defineProperty(this, "_tentativeFeature", void 0);

    _defineProperty(this, "_editHandles", void 0);

    this._tentativeFeature = null;
    this._editHandles = null;
  }

  _createClass(BaseMode, [{
    key: "handlePan",
    value: function handlePan(event, props) {}
  }, {
    key: "handleClick",
    value: function handleClick(event, props) {}
  }, {
    key: "handleDblClick",
    value: function handleDblClick(event, props) {}
  }, {
    key: "handlePointerMove",
    value: function handlePointerMove(event, props) {}
  }, {
    key: "handleStartDragging",
    value: function handleStartDragging(event, props) {}
  }, {
    key: "handleStopDragging",
    value: function handleStopDragging(event, props) {}
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event, props) {}
  }, {
    key: "getGuides",
    value: function getGuides(props) {
      return null;
    }
  }, {
    key: "getTooltips",
    value: function getTooltips(props) {
      return [];
    }
  }, {
    key: "handleDragging",
    value: function handleDragging(event, props) {}
  }, {
    key: "getTentativeFeature",
    value: function getTentativeFeature() {
      return this._tentativeFeature;
    }
  }, {
    key: "getEditHandles",
    value: function getEditHandles() {
      return this._editHandles;
    }
  }, {
    key: "setTentativeFeature",
    value: function setTentativeFeature(feature) {
      this._tentativeFeature = feature;
    }
  }, {
    key: "getEditHandlesFromFeature",
    value: function getEditHandlesFromFeature(feature, featureIndex) {
      var coordinates = (0, _utils.getFeatureCoordinates)(feature);

      if (!coordinates) {
        return null;
      } // @ts-ignore


      return coordinates.map(function (coord, i) {
        return {
          type: 'Feature',
          properties: {
            // TODO deprecate renderType
            renderType: feature.properties.renderType,
            guideType: _constants.GUIDE_TYPE.EDIT_HANDLE,
            editHandleType: 'existing',
            featureIndex: featureIndex,
            positionIndexes: [i]
          },
          geometry: {
            type: _constants.GEOJSON_TYPE.POINT,
            coordinates: coord
          }
        };
      });
    }
  }, {
    key: "getSelectedFeature",
    value: function getSelectedFeature(props, featureIndex) {
      var data = props.data,
          selectedIndexes = props.selectedIndexes; // @ts-ignore

      var features = data && data.features;
      var selectedIndex = (0, _utils.isNumeric)(featureIndex) ? Number(featureIndex) : selectedIndexes && selectedIndexes[0];
      return features && features[selectedIndex];
    }
  }]);

  return BaseMode;
}();

exports["default"] = BaseMode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZGl0LW1vZGVzL2Jhc2UtbW9kZS50cyJdLCJuYW1lcyI6WyJCYXNlTW9kZSIsIl90ZW50YXRpdmVGZWF0dXJlIiwiX2VkaXRIYW5kbGVzIiwiZXZlbnQiLCJwcm9wcyIsImZlYXR1cmUiLCJmZWF0dXJlSW5kZXgiLCJjb29yZGluYXRlcyIsIm1hcCIsImNvb3JkIiwiaSIsInR5cGUiLCJwcm9wZXJ0aWVzIiwicmVuZGVyVHlwZSIsImd1aWRlVHlwZSIsIkdVSURFX1RZUEUiLCJFRElUX0hBTkRMRSIsImVkaXRIYW5kbGVUeXBlIiwicG9zaXRpb25JbmRleGVzIiwiZ2VvbWV0cnkiLCJHRU9KU09OX1RZUEUiLCJQT0lOVCIsImRhdGEiLCJzZWxlY3RlZEluZGV4ZXMiLCJmZWF0dXJlcyIsInNlbGVjdGVkSW5kZXgiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFjQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUTtBQUluQixzQkFBYztBQUFBOztBQUFBOztBQUFBOztBQUNaLFNBQUtDLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNEOzs7O1dBRUQsbUJBQVVDLEtBQVYsRUFBNkJDLEtBQTdCLEVBQWtFLENBQUU7OztXQUVwRSxxQkFBWUQsS0FBWixFQUErQkMsS0FBL0IsRUFBb0UsQ0FBRTs7O1dBRXRFLHdCQUFlRCxLQUFmLEVBQWtDQyxLQUFsQyxFQUF1RSxDQUFFOzs7V0FFekUsMkJBQWtCRCxLQUFsQixFQUEyQ0MsS0FBM0MsRUFBZ0YsQ0FBRTs7O1dBRWxGLDZCQUFvQkQsS0FBcEIsRUFBK0NDLEtBQS9DLEVBQW9GLENBQUU7OztXQUV0Riw0QkFBbUJELEtBQW5CLEVBQTZDQyxLQUE3QyxFQUFrRixDQUFFOzs7V0FFcEYscUJBQVlELEtBQVosRUFBa0NDLEtBQWxDLEVBQTZFLENBQUU7OztXQUUvRSxtQkFBVUEsS0FBVixFQUEwRjtBQUN4RixhQUFPLElBQVA7QUFDRDs7O1dBQ0QscUJBQVlBLEtBQVosRUFBNEQ7QUFDMUQsYUFBTyxFQUFQO0FBQ0Q7OztXQUNELHdCQUFlRCxLQUFmLEVBQXFDQyxLQUFyQyxFQUFnRixDQUFFOzs7V0FFbEYsK0JBQXNCO0FBQ3BCLGFBQU8sS0FBS0gsaUJBQVo7QUFDRDs7O1dBRUQsMEJBQWlCO0FBQ2YsYUFBTyxLQUFLQyxZQUFaO0FBQ0Q7OztXQUVELDZCQUFvQkcsT0FBcEIsRUFBc0M7QUFDcEMsV0FBS0osaUJBQUwsR0FBeUJJLE9BQXpCO0FBQ0Q7OztXQUVELG1DQUEwQkEsT0FBMUIsRUFBNENDLFlBQTVDLEVBQXFGO0FBQ25GLFVBQU1DLFdBQVcsR0FBRyxrQ0FBc0JGLE9BQXRCLENBQXBCOztBQUNBLFVBQUksQ0FBQ0UsV0FBTCxFQUFrQjtBQUNoQixlQUFPLElBQVA7QUFDRCxPQUprRixDQUtuRjs7O0FBQ0EsYUFBT0EsV0FBVyxDQUFDQyxHQUFaLENBQWdCLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQ25DLGVBQU87QUFDTEMsVUFBQUEsSUFBSSxFQUFFLFNBREQ7QUFFTEMsVUFBQUEsVUFBVSxFQUFFO0FBQ1Y7QUFDQUMsWUFBQUEsVUFBVSxFQUFFUixPQUFPLENBQUNPLFVBQVIsQ0FBbUJDLFVBRnJCO0FBR1ZDLFlBQUFBLFNBQVMsRUFBRUMsc0JBQVdDLFdBSFo7QUFJVkMsWUFBQUEsY0FBYyxFQUFFLFVBSk47QUFLVlgsWUFBQUEsWUFBWSxFQUFaQSxZQUxVO0FBTVZZLFlBQUFBLGVBQWUsRUFBRSxDQUFDUixDQUFEO0FBTlAsV0FGUDtBQVVMUyxVQUFBQSxRQUFRLEVBQUU7QUFDUlIsWUFBQUEsSUFBSSxFQUFFUyx3QkFBYUMsS0FEWDtBQUVSZCxZQUFBQSxXQUFXLEVBQUVFO0FBRkw7QUFWTCxTQUFQO0FBZUQsT0FoQk0sQ0FBUDtBQWlCRDs7O1dBRUQsNEJBQW1CTCxLQUFuQixFQUF3REUsWUFBeEQsRUFBaUc7QUFDL0YsVUFBUWdCLElBQVIsR0FBa0NsQixLQUFsQyxDQUFRa0IsSUFBUjtBQUFBLFVBQWNDLGVBQWQsR0FBa0NuQixLQUFsQyxDQUFjbUIsZUFBZCxDQUQrRixDQUUvRjs7QUFDQSxVQUFNQyxRQUFRLEdBQUdGLElBQUksSUFBSUEsSUFBSSxDQUFDRSxRQUE5QjtBQUVBLFVBQU1DLGFBQWEsR0FBRyxzQkFBVW5CLFlBQVYsSUFDbEJvQixNQUFNLENBQUNwQixZQUFELENBRFksR0FFbEJpQixlQUFlLElBQUlBLGVBQWUsQ0FBQyxDQUFELENBRnRDO0FBSUEsYUFBT0MsUUFBUSxJQUFJQSxRQUFRLENBQUNDLGFBQUQsQ0FBM0I7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVkaXRNb2RlLFxuICBHdWlkZUZlYXR1cmVDb2xsZWN0aW9uLFxuICBGZWF0dXJlLFxuICBDbGlja0V2ZW50LFxuICBQb2ludGVyTW92ZUV2ZW50LFxuICBTdGFydERyYWdnaW5nRXZlbnQsXG4gIFN0b3BEcmFnZ2luZ0V2ZW50LFxuICBGZWF0dXJlQ29sbGVjdGlvbixcbiAgVG9vbHRpcCxcbiAgRHJhZ2dpbmdFdmVudCxcbn0gZnJvbSAnQG5lYnVsYS5nbC9lZGl0LW1vZGVzJztcbmltcG9ydCB7IE1vZGVQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0IHsgR0VPSlNPTl9UWVBFLCBHVUlERV9UWVBFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldEZlYXR1cmVDb29yZGluYXRlcywgaXNOdW1lcmljIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNb2RlIGltcGxlbWVudHMgRWRpdE1vZGU8RmVhdHVyZUNvbGxlY3Rpb24sIEd1aWRlRmVhdHVyZUNvbGxlY3Rpb24+IHtcbiAgX3RlbnRhdGl2ZUZlYXR1cmU6IEZlYXR1cmUgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBfZWRpdEhhbmRsZXM6IEZlYXR1cmVbXSB8IG51bGwgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fdGVudGF0aXZlRmVhdHVyZSA9IG51bGw7XG4gICAgdGhpcy5fZWRpdEhhbmRsZXMgPSBudWxsO1xuICB9XG5cbiAgaGFuZGxlUGFuKGV2ZW50OiBDbGlja0V2ZW50LCBwcm9wczogTW9kZVByb3BzPEZlYXR1cmVDb2xsZWN0aW9uPikge31cblxuICBoYW5kbGVDbGljayhldmVudDogQ2xpY2tFdmVudCwgcHJvcHM6IE1vZGVQcm9wczxGZWF0dXJlQ29sbGVjdGlvbj4pIHt9XG5cbiAgaGFuZGxlRGJsQ2xpY2soZXZlbnQ6IENsaWNrRXZlbnQsIHByb3BzOiBNb2RlUHJvcHM8RmVhdHVyZUNvbGxlY3Rpb24+KSB7fVxuXG4gIGhhbmRsZVBvaW50ZXJNb3ZlKGV2ZW50OiBQb2ludGVyTW92ZUV2ZW50LCBwcm9wczogTW9kZVByb3BzPEZlYXR1cmVDb2xsZWN0aW9uPikge31cblxuICBoYW5kbGVTdGFydERyYWdnaW5nKGV2ZW50OiBTdGFydERyYWdnaW5nRXZlbnQsIHByb3BzOiBNb2RlUHJvcHM8RmVhdHVyZUNvbGxlY3Rpb24+KSB7fVxuXG4gIGhhbmRsZVN0b3BEcmFnZ2luZyhldmVudDogU3RvcERyYWdnaW5nRXZlbnQsIHByb3BzOiBNb2RlUHJvcHM8RmVhdHVyZUNvbGxlY3Rpb24+KSB7fVxuXG4gIGhhbmRsZUtleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBwcm9wczogTW9kZVByb3BzPEZlYXR1cmVDb2xsZWN0aW9uPik6IHZvaWQge31cblxuICBnZXRHdWlkZXMocHJvcHM6IE1vZGVQcm9wczxGZWF0dXJlQ29sbGVjdGlvbj4pOiBHdWlkZUZlYXR1cmVDb2xsZWN0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZ2V0VG9vbHRpcHMocHJvcHM6IE1vZGVQcm9wczxGZWF0dXJlQ29sbGVjdGlvbj4pOiBUb29sdGlwW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBoYW5kbGVEcmFnZ2luZyhldmVudDogRHJhZ2dpbmdFdmVudCwgcHJvcHM6IE1vZGVQcm9wczxGZWF0dXJlQ29sbGVjdGlvbj4pOiB2b2lkIHt9XG5cbiAgZ2V0VGVudGF0aXZlRmVhdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVudGF0aXZlRmVhdHVyZTtcbiAgfVxuXG4gIGdldEVkaXRIYW5kbGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9lZGl0SGFuZGxlcztcbiAgfVxuXG4gIHNldFRlbnRhdGl2ZUZlYXR1cmUoZmVhdHVyZTogRmVhdHVyZSkge1xuICAgIHRoaXMuX3RlbnRhdGl2ZUZlYXR1cmUgPSBmZWF0dXJlO1xuICB9XG5cbiAgZ2V0RWRpdEhhbmRsZXNGcm9tRmVhdHVyZShmZWF0dXJlOiBGZWF0dXJlLCBmZWF0dXJlSW5kZXg6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldEZlYXR1cmVDb29yZGluYXRlcyhmZWF0dXJlKTtcbiAgICBpZiAoIWNvb3JkaW5hdGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBjb29yZGluYXRlcy5tYXAoKGNvb3JkLCBpKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAvLyBUT0RPIGRlcHJlY2F0ZSByZW5kZXJUeXBlXG4gICAgICAgICAgcmVuZGVyVHlwZTogZmVhdHVyZS5wcm9wZXJ0aWVzLnJlbmRlclR5cGUsXG4gICAgICAgICAgZ3VpZGVUeXBlOiBHVUlERV9UWVBFLkVESVRfSEFORExFLFxuICAgICAgICAgIGVkaXRIYW5kbGVUeXBlOiAnZXhpc3RpbmcnLFxuICAgICAgICAgIGZlYXR1cmVJbmRleCxcbiAgICAgICAgICBwb3NpdGlvbkluZGV4ZXM6IFtpXSxcbiAgICAgICAgfSxcbiAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICB0eXBlOiBHRU9KU09OX1RZUEUuUE9JTlQsXG4gICAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkRmVhdHVyZShwcm9wczogTW9kZVByb3BzPEZlYXR1cmVDb2xsZWN0aW9uPiwgZmVhdHVyZUluZGV4OiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgeyBkYXRhLCBzZWxlY3RlZEluZGV4ZXMgfSA9IHByb3BzO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBmZWF0dXJlcyA9IGRhdGEgJiYgZGF0YS5mZWF0dXJlcztcblxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBpc051bWVyaWMoZmVhdHVyZUluZGV4KVxuICAgICAgPyBOdW1iZXIoZmVhdHVyZUluZGV4KVxuICAgICAgOiBzZWxlY3RlZEluZGV4ZXMgJiYgc2VsZWN0ZWRJbmRleGVzWzBdO1xuXG4gICAgcmV0dXJuIGZlYXR1cmVzICYmIGZlYXR1cmVzW3NlbGVjdGVkSW5kZXhdO1xuICB9XG59XG4iXX0=