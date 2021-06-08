"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _editModes = require("@nebula.gl/edit-modes");

var _constants = require("../constants");

var _baseMode = _interopRequireDefault(require("./base-mode"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var EditingMode = /*#__PURE__*/function (_BaseMode) {
  _inherits(EditingMode, _BaseMode);

  var _super = _createSuper(EditingMode);

  function EditingMode() {
    _classCallCheck(this, EditingMode);

    return _super.apply(this, arguments);
  }

  _createClass(EditingMode, [{
    key: "handleClick",
    value: function handleClick(event, props) {
      var picked = event.picks && event.picks[0];
      var selectedFeatureIndex = props.selectedIndexes && props.selectedIndexes[0]; // @ts-ignore

      if (!picked || !picked.object || picked.featureIndex !== selectedFeatureIndex) {
        return;
      } // @ts-ignore


      var objectType = picked.type,
          featureIndex = picked.featureIndex,
          index = picked.index;
      var feature = this.getSelectedFeature(props, featureIndex);

      if (feature && (feature.geometry.type === _constants.GEOJSON_TYPE.POLYGON || feature.geometry.type === _constants.GEOJSON_TYPE.LINE_STRING) && objectType === _constants.ELEMENT_TYPE.SEGMENT) {
        var coordinates = (0, _utils.getFeatureCoordinates)(feature);

        if (!coordinates) {
          return;
        } // @ts-ignore


        var insertIndex = (index + 1) % coordinates.length;
        var positionIndexes = feature.geometry.type === _constants.SHAPE.POLYGON ? [0, insertIndex] : [insertIndex];

        var insertMapCoords = this._getPointOnSegment(feature, picked, event.mapCoords);

        var updatedData = new _editModes.ImmutableFeatureCollection(props.data) // @ts-ignore
        .addPosition(featureIndex, positionIndexes, insertMapCoords).getObject();
        props.onEdit({
          editType: _constants.EDIT_TYPE.ADD_POSITION,
          updatedData: updatedData,
          editContext: [{
            featureIndex: featureIndex,
            editHandleIndex: insertIndex,
            // @ts-ignore
            screenCoords: props.viewport && props.viewport.project(insertMapCoords),
            mapCoords: insertMapCoords
          }]
        });
      }
    }
  }, {
    key: "handleStopDragging",
    value: function handleStopDragging(event, props) {
      // replace point
      var picked = event.picks && event.picks[0]; // @ts-ignore

      if (!picked || !picked.Object || !(0, _utils.isNumeric)(picked.featureIndex)) {
        return;
      }

      var pickedObject = picked.object;

      switch (pickedObject.type) {
        case _constants.ELEMENT_TYPE.FEATURE:
        case _constants.ELEMENT_TYPE.FILL:
        case _constants.ELEMENT_TYPE.EDIT_HANDLE:
          this._handleDragging(event, props);

          break;

        default:
      }
    }
  }, {
    key: "_handleDragging",
    value: function _handleDragging(event, props) {
      var onEdit = props.onEdit; // @ts-ignore

      var selectedFeature = this.getSelectedFeature(props); // nothing clicked
      // @ts-ignore

      var isDragging = event.isDragging,
          pointerDownPicks = event.pointerDownPicks,
          screenCoords = event.screenCoords;
      var lastPointerMoveEvent = props.lastPointerMoveEvent;
      var clicked = pointerDownPicks && pointerDownPicks[0]; // @ts-ignore

      if (!clicked || !clicked.object || !(0, _utils.isNumeric)(clicked.featureIndex)) {
        return;
      } // @ts-ignore


      var objectType = clicked.type,
          editHandleIndex = clicked.index; // not dragging

      var updatedData = null;
      var editType = isDragging ? _constants.EDIT_TYPE.MOVE_POSITION : _constants.EDIT_TYPE.FINISH_MOVE_POSITION;

      switch (objectType) {
        case _constants.ELEMENT_TYPE.FEATURE:
        case _constants.ELEMENT_TYPE.FILL:
        case _constants.ELEMENT_TYPE.SEGMENT:
          if (!props.featuresDraggable) {
            break;
          } // dragging feature


          var dx = screenCoords[0] - lastPointerMoveEvent.screenCoords[0];
          var dy = screenCoords[1] - lastPointerMoveEvent.screenCoords[1];
          updatedData = this._updateFeature(props, 'feature', {
            dx: dx,
            dy: dy
          });
          onEdit({
            editType: editType,
            updatedData: updatedData,
            editContext: null
          });
          break;

        case _constants.ELEMENT_TYPE.EDIT_HANDLE:
          // dragging editHandle
          // dragging rectangle or other shapes
          var updateType = selectedFeature.properties.shape === _constants.SHAPE.RECTANGLE ? 'rectangle' : 'editHandle';
          updatedData = this._updateFeature(props, updateType, {
            editHandleIndex: editHandleIndex,
            mapCoords: event.mapCoords
          });
          onEdit({
            editType: editType,
            updatedData: updatedData,
            editContext: null
          });
          break;

        default:
      }
    }
  }, {
    key: "handlePointerMove",
    value: function handlePointerMove(event, props) {
      // no selected feature
      // @ts-ignore
      var selectedFeature = this.getSelectedFeature(props);

      if (!selectedFeature) {
        return;
      } // @ts-ignore


      if (!event.isDragging) {
        return;
      }

      this._handleDragging(event, props);
    } // TODO - refactor

  }, {
    key: "_updateFeature",
    value: function _updateFeature(props, type) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var data = props.data,
          selectedIndexes = props.selectedIndexes,
          viewport = props.viewport;
      var featureIndex = selectedIndexes && selectedIndexes[0];
      var feature = this.getSelectedFeature(props, featureIndex);
      var geometry = null;
      var coordinates = (0, _utils.getFeatureCoordinates)(feature);

      if (!coordinates) {
        return null;
      }

      var newCoordinates = _toConsumableArray(coordinates);

      switch (type) {
        case 'editHandle':
          var positionIndexes = feature.geometry.type === _constants.GEOJSON_TYPE.POLYGON ? [0, options.editHandleIndex] : [options.editHandleIndex];
          return new _editModes.ImmutableFeatureCollection(data).replacePosition(featureIndex, positionIndexes, options.mapCoords).getObject();

        case 'feature':
          var dx = options.dx,
              dy = options.dy; // @ts-ignore

          newCoordinates = newCoordinates.map(function (mapCoords) {
            // @ts-ignore
            var pixels = viewport && viewport.project(mapCoords);

            if (pixels) {
              pixels[0] += dx;
              pixels[1] += dy;
              return viewport && viewport.unproject(pixels);
            }

            return null;
          }).filter(Boolean);
          geometry = {
            type: feature.geometry.type,
            coordinates: feature.geometry.type === _constants.GEOJSON_TYPE.POLYGON ? [newCoordinates] : feature.geometry.type === _constants.GEOJSON_TYPE.POINT ? newCoordinates[0] : newCoordinates
          };
          return new _editModes.ImmutableFeatureCollection(data).replaceGeometry(featureIndex, geometry).getObject();

        case 'rectangle':
          // moved editHandleIndex and destination mapCoords
          newCoordinates = (0, _utils.updateRectanglePosition)( // @ts-ignore
          feature, options.editHandleIndex, options.mapCoords);
          geometry = {
            type: _constants.GEOJSON_TYPE.POLYGON,
            coordinates: newCoordinates
          };
          return new _editModes.ImmutableFeatureCollection(data).replaceGeometry(featureIndex, geometry).getObject();

        default:
          return data && new _editModes.ImmutableFeatureCollection(data).getObject();
      }
    }
  }, {
    key: "_getPointOnSegment",
    value: function _getPointOnSegment(feature, picked, pickedMapCoords) {
      var coordinates = (0, _utils.getFeatureCoordinates)(feature);

      if (!coordinates) {
        return null;
      }

      var srcVertexIndex = picked.index;
      var targetVertexIndex = picked.index + 1;
      return (0, _utils.findClosestPointOnLineSegment)( // @ts-ignore
      coordinates[srcVertexIndex], coordinates[targetVertexIndex], pickedMapCoords);
    }
  }, {
    key: "_getCursorEditHandle",
    value: function _getCursorEditHandle(event, feature) {
      // event can be null when the user has not interacted with the map whatsoever
      // and therefore props.lastPointerMoveEvent is still null
      // returning null here means we can e.g. set a featureIndex without requiring an event
      if (!event) {
        return null;
      } // @ts-ignore


      var isDragging = event.isDragging,
          picks = event.picks; // if not pick segment

      var picked = picks && picks[0]; // @ts-ignore

      if (!picked || !(0, _utils.isNumeric)(picked.featureIndex) || picked.type !== _constants.ELEMENT_TYPE.SEGMENT) {
        return null;
      } // if dragging or feature is neither polygon nor line string


      if (isDragging || feature.geometry.type !== _constants.GEOJSON_TYPE.POLYGON && feature.geometry.type !== _constants.GEOJSON_TYPE.LINE_STRING) {
        return null;
      }

      var insertMapCoords = this._getPointOnSegment(feature, picked, event.mapCoords);

      if (!insertMapCoords) {
        return null;
      }

      return {
        type: 'Feature',
        properties: {
          guideType: _constants.GUIDE_TYPE.CURSOR_EDIT_HANDLE,
          shape: feature.properties.shape,
          positionIndexes: [-1],
          editHandleType: 'intermediate'
        },
        geometry: {
          type: _constants.GEOJSON_TYPE.POINT,
          coordinates: insertMapCoords
        }
      };
    } // @ts-ignore

  }, {
    key: "getGuides",
    value: function getGuides(props) {
      // @ts-ignore
      var selectedFeature = this.getSelectedFeature(props);
      var selectedFeatureIndex = props.selectedIndexes && props.selectedIndexes[0];

      if (!selectedFeature || selectedFeature.geometry.type === _constants.GEOJSON_TYPE.POINT) {
        return null;
      }

      var event = props.lastPointerMoveEvent; // feature editHandles

      var editHandles = this.getEditHandlesFromFeature(selectedFeature, selectedFeatureIndex) || []; // cursor editHandle

      var cursorEditHandle = this._getCursorEditHandle(event, selectedFeature);

      if (cursorEditHandle) {
        // @ts-ignore
        editHandles.push(cursorEditHandle);
      }

      return {
        type: 'FeatureCollection',
        features: editHandles.length ? editHandles : null
      };
    }
  }]);

  return EditingMode;
}(_baseMode["default"]);

exports["default"] = EditingMode;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lZGl0LW1vZGVzL2VkaXRpbmctbW9kZS50cyJdLCJuYW1lcyI6WyJFZGl0aW5nTW9kZSIsImV2ZW50IiwicHJvcHMiLCJwaWNrZWQiLCJwaWNrcyIsInNlbGVjdGVkRmVhdHVyZUluZGV4Iiwic2VsZWN0ZWRJbmRleGVzIiwib2JqZWN0IiwiZmVhdHVyZUluZGV4Iiwib2JqZWN0VHlwZSIsInR5cGUiLCJpbmRleCIsImZlYXR1cmUiLCJnZXRTZWxlY3RlZEZlYXR1cmUiLCJnZW9tZXRyeSIsIkdFT0pTT05fVFlQRSIsIlBPTFlHT04iLCJMSU5FX1NUUklORyIsIkVMRU1FTlRfVFlQRSIsIlNFR01FTlQiLCJjb29yZGluYXRlcyIsImluc2VydEluZGV4IiwibGVuZ3RoIiwicG9zaXRpb25JbmRleGVzIiwiU0hBUEUiLCJpbnNlcnRNYXBDb29yZHMiLCJfZ2V0UG9pbnRPblNlZ21lbnQiLCJtYXBDb29yZHMiLCJ1cGRhdGVkRGF0YSIsIkltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uIiwiZGF0YSIsImFkZFBvc2l0aW9uIiwiZ2V0T2JqZWN0Iiwib25FZGl0IiwiZWRpdFR5cGUiLCJFRElUX1RZUEUiLCJBRERfUE9TSVRJT04iLCJlZGl0Q29udGV4dCIsImVkaXRIYW5kbGVJbmRleCIsInNjcmVlbkNvb3JkcyIsInZpZXdwb3J0IiwicHJvamVjdCIsIk9iamVjdCIsInBpY2tlZE9iamVjdCIsIkZFQVRVUkUiLCJGSUxMIiwiRURJVF9IQU5ETEUiLCJfaGFuZGxlRHJhZ2dpbmciLCJzZWxlY3RlZEZlYXR1cmUiLCJpc0RyYWdnaW5nIiwicG9pbnRlckRvd25QaWNrcyIsImxhc3RQb2ludGVyTW92ZUV2ZW50IiwiY2xpY2tlZCIsIk1PVkVfUE9TSVRJT04iLCJGSU5JU0hfTU9WRV9QT1NJVElPTiIsImZlYXR1cmVzRHJhZ2dhYmxlIiwiZHgiLCJkeSIsIl91cGRhdGVGZWF0dXJlIiwidXBkYXRlVHlwZSIsInByb3BlcnRpZXMiLCJzaGFwZSIsIlJFQ1RBTkdMRSIsIm9wdGlvbnMiLCJuZXdDb29yZGluYXRlcyIsInJlcGxhY2VQb3NpdGlvbiIsIm1hcCIsInBpeGVscyIsInVucHJvamVjdCIsImZpbHRlciIsIkJvb2xlYW4iLCJQT0lOVCIsInJlcGxhY2VHZW9tZXRyeSIsInBpY2tlZE1hcENvb3JkcyIsInNyY1ZlcnRleEluZGV4IiwidGFyZ2V0VmVydGV4SW5kZXgiLCJndWlkZVR5cGUiLCJHVUlERV9UWVBFIiwiQ1VSU09SX0VESVRfSEFORExFIiwiZWRpdEhhbmRsZVR5cGUiLCJlZGl0SGFuZGxlcyIsImdldEVkaXRIYW5kbGVzRnJvbUZlYXR1cmUiLCJjdXJzb3JFZGl0SGFuZGxlIiwiX2dldEN1cnNvckVkaXRIYW5kbGUiLCJwdXNoIiwiZmVhdHVyZXMiLCJCYXNlTW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBV0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9xQkEsVzs7Ozs7Ozs7Ozs7OztXQUNuQixxQkFBWUMsS0FBWixFQUErQkMsS0FBL0IsRUFBb0U7QUFDbEUsVUFBTUMsTUFBTSxHQUFHRixLQUFLLENBQUNHLEtBQU4sSUFBZUgsS0FBSyxDQUFDRyxLQUFOLENBQVksQ0FBWixDQUE5QjtBQUNBLFVBQU1DLG9CQUFvQixHQUFHSCxLQUFLLENBQUNJLGVBQU4sSUFBeUJKLEtBQUssQ0FBQ0ksZUFBTixDQUFzQixDQUF0QixDQUF0RCxDQUZrRSxDQUdsRTs7QUFDQSxVQUFJLENBQUNILE1BQUQsSUFBVyxDQUFDQSxNQUFNLENBQUNJLE1BQW5CLElBQTZCSixNQUFNLENBQUNLLFlBQVAsS0FBd0JILG9CQUF6RCxFQUErRTtBQUM3RTtBQUNELE9BTmlFLENBUWxFOzs7QUFDQSxVQUFjSSxVQUFkLEdBQWtETixNQUFsRCxDQUFRTyxJQUFSO0FBQUEsVUFBMEJGLFlBQTFCLEdBQWtETCxNQUFsRCxDQUEwQkssWUFBMUI7QUFBQSxVQUF3Q0csS0FBeEMsR0FBa0RSLE1BQWxE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S0FBa0NLLHdCQUFhd0QsS0FBdkUsRUFBOEU7QUFDNUUsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTXRFLEtBQUssR0FBR0MsS0FBSyxDQUFDaUQsb0JBQXBCLENBVDZDLENBVzdDOztBQUNBLFVBQU02QixXQUFXLEdBQUcsS0FBS0MseUJBQUwsQ0FBK0JqQyxlQUEvQixFQUFnRDNDLG9CQUFoRCxLQUF5RSxFQUE3RixDQVo2QyxDQWM3Qzs7QUFDQSxVQUFNNkUsZ0JBQWdCLEdBQUcsS0FBS0Msb0JBQUwsQ0FBMEJsRixLQUExQixFQUFpQytDLGVBQWpDLENBQXpCOztBQUNBLFVBQUlrQyxnQkFBSixFQUFzQjtBQUNwQjtBQUNBRixRQUFBQSxXQUFXLENBQUNJLElBQVosQ0FBaUJGLGdCQUFqQjtBQUNEOztBQUVELGFBQU87QUFDTHhFLFFBQUFBLElBQUksRUFBRSxtQkFERDtBQUVMMkUsUUFBQUEsUUFBUSxFQUFFTCxXQUFXLENBQUMxRCxNQUFaLEdBQXFCMEQsV0FBckIsR0FBbUM7QUFGeEMsT0FBUDtBQUlEOzs7O0VBMVRzQ00sb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbW11dGFibGVGZWF0dXJlQ29sbGVjdGlvbiB9IGZyb20gJ0BuZWJ1bGEuZ2wvZWRpdC1tb2Rlcyc7XG5pbXBvcnQgdHlwZSB7XG4gIEZlYXR1cmUsXG4gIEZlYXR1cmVDb2xsZWN0aW9uLFxuICBDbGlja0V2ZW50LFxuICBTdG9wRHJhZ2dpbmdFdmVudCxcbiAgUG9pbnRlck1vdmVFdmVudCxcbiAgUG9zaXRpb24sXG59IGZyb20gJ0BuZWJ1bGEuZ2wvZWRpdC1tb2Rlcyc7XG5pbXBvcnQgeyBNb2RlUHJvcHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCB7IFNIQVBFLCBFRElUX1RZUEUsIEVMRU1FTlRfVFlQRSwgR0VPSlNPTl9UWVBFLCBHVUlERV9UWVBFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBCYXNlTW9kZSBmcm9tICcuL2Jhc2UtbW9kZSc7XG5pbXBvcnQge1xuICBmaW5kQ2xvc2VzdFBvaW50T25MaW5lU2VnbWVudCxcbiAgZ2V0RmVhdHVyZUNvb3JkaW5hdGVzLFxuICBpc051bWVyaWMsXG4gIHVwZGF0ZVJlY3RhbmdsZVBvc2l0aW9uLFxufSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGluZ01vZGUgZXh0ZW5kcyBCYXNlTW9kZSB7XG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBDbGlja0V2ZW50LCBwcm9wczogTW9kZVByb3BzPEZlYXR1cmVDb2xsZWN0aW9uPikge1xuICAgIGNvbnN0IHBpY2tlZCA9IGV2ZW50LnBpY2tzICYmIGV2ZW50LnBpY2tzWzBdO1xuICAgIGNvbnN0IHNlbGVjdGVkRmVhdHVyZUluZGV4ID0gcHJvcHMuc2VsZWN0ZWRJbmRleGVzICYmIHByb3BzLnNlbGVjdGVkSW5kZXhlc1swXTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKCFwaWNrZWQgfHwgIXBpY2tlZC5vYmplY3QgfHwgcGlja2VkLmZlYXR1cmVJbmRleCAhPT0gc2VsZWN0ZWRGZWF0dXJlSW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgeyB0eXBlOiBvYmplY3RUeXBlLCBmZWF0dXJlSW5kZXgsIGluZGV4IH0gPSBwaWNrZWQ7XG4gICAgY29uc3QgZmVhdHVyZSA9IHRoaXMuZ2V0U2VsZWN0ZWRGZWF0dXJlKHByb3BzLCBmZWF0dXJlSW5kZXgpO1xuXG4gICAgaWYgKFxuICAgICAgZmVhdHVyZSAmJlxuICAgICAgKGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gR0VPSlNPTl9UWVBFLlBPTFlHT04gfHxcbiAgICAgICAgZmVhdHVyZS5nZW9tZXRyeS50eXBlID09PSBHRU9KU09OX1RZUEUuTElORV9TVFJJTkcpICYmXG4gICAgICBvYmplY3RUeXBlID09PSBFTEVNRU5UX1RZUEUuU0VHTUVOVFxuICAgICkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRGZWF0dXJlQ29vcmRpbmF0ZXMoZmVhdHVyZSk7XG4gICAgICBpZiAoIWNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IGluc2VydEluZGV4ID0gKGluZGV4ICsgMSkgJSBjb29yZGluYXRlcy5sZW5ndGg7XG4gICAgICBjb25zdCBwb3NpdGlvbkluZGV4ZXMgPVxuICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09IFNIQVBFLlBPTFlHT04gPyBbMCwgaW5zZXJ0SW5kZXhdIDogW2luc2VydEluZGV4XTtcbiAgICAgIGNvbnN0IGluc2VydE1hcENvb3JkcyA9IHRoaXMuX2dldFBvaW50T25TZWdtZW50KGZlYXR1cmUsIHBpY2tlZCwgZXZlbnQubWFwQ29vcmRzKTtcblxuICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBuZXcgSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb24ocHJvcHMuZGF0YSlcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAuYWRkUG9zaXRpb24oZmVhdHVyZUluZGV4LCBwb3NpdGlvbkluZGV4ZXMsIGluc2VydE1hcENvb3JkcylcbiAgICAgICAgLmdldE9iamVjdCgpO1xuXG4gICAgICBwcm9wcy5vbkVkaXQoe1xuICAgICAgICBlZGl0VHlwZTogRURJVF9UWVBFLkFERF9QT1NJVElPTixcbiAgICAgICAgdXBkYXRlZERhdGEsXG4gICAgICAgIGVkaXRDb250ZXh0OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmVhdHVyZUluZGV4LFxuICAgICAgICAgICAgZWRpdEhhbmRsZUluZGV4OiBpbnNlcnRJbmRleCxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHNjcmVlbkNvb3JkczogcHJvcHMudmlld3BvcnQgJiYgcHJvcHMudmlld3BvcnQucHJvamVjdChpbnNlcnRNYXBDb29yZHMpLFxuICAgICAgICAgICAgbWFwQ29vcmRzOiBpbnNlcnRNYXBDb29yZHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN0b3BEcmFnZ2luZyhldmVudDogU3RvcERyYWdnaW5nRXZlbnQsIHByb3BzOiBNb2RlUHJvcHM8RmVhdHVyZUNvbGxlY3Rpb24+KSB7XG4gICAgLy8gcmVwbGFjZSBwb2ludFxuICAgIGNvbnN0IHBpY2tlZCA9IGV2ZW50LnBpY2tzICYmIGV2ZW50LnBpY2tzWzBdO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICghcGlja2VkIHx8ICFwaWNrZWQuT2JqZWN0IHx8ICFpc051bWVyaWMocGlja2VkLmZlYXR1cmVJbmRleCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwaWNrZWRPYmplY3QgPSBwaWNrZWQub2JqZWN0O1xuICAgIHN3aXRjaCAocGlja2VkT2JqZWN0LnR5cGUpIHtcbiAgICAgIGNhc2UgRUxFTUVOVF9UWVBFLkZFQVRVUkU6XG4gICAgICBjYXNlIEVMRU1FTlRfVFlQRS5GSUxMOlxuICAgICAgY2FzZSBFTEVNRU5UX1RZUEUuRURJVF9IQU5ETEU6XG4gICAgICAgIHRoaXMuX2hhbmRsZURyYWdnaW5nKGV2ZW50LCBwcm9wcyk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVEcmFnZ2luZyhcbiAgICBldmVudDogUG9pbnRlck1vdmVFdmVudCB8IFN0b3BEcmFnZ2luZ0V2ZW50LFxuICAgIHByb3BzOiBNb2RlUHJvcHM8RmVhdHVyZUNvbGxlY3Rpb24+XG4gICkge1xuICAgIGNvbnN0IHsgb25FZGl0IH0gPSBwcm9wcztcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlID0gdGhpcy5nZXRTZWxlY3RlZEZlYXR1cmUocHJvcHMpO1xuICAgIC8vIG5vdGhpbmcgY2xpY2tlZFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB7IGlzRHJhZ2dpbmcsIHBvaW50ZXJEb3duUGlja3MsIHNjcmVlbkNvb3JkcyB9ID0gZXZlbnQ7XG4gICAgY29uc3QgeyBsYXN0UG9pbnRlck1vdmVFdmVudCB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBjbGlja2VkID0gcG9pbnRlckRvd25QaWNrcyAmJiBwb2ludGVyRG93blBpY2tzWzBdO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoIWNsaWNrZWQgfHwgIWNsaWNrZWQub2JqZWN0IHx8ICFpc051bWVyaWMoY2xpY2tlZC5mZWF0dXJlSW5kZXgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHsgdHlwZTogb2JqZWN0VHlwZSwgaW5kZXg6IGVkaXRIYW5kbGVJbmRleCB9ID0gY2xpY2tlZDtcblxuICAgIC8vIG5vdCBkcmFnZ2luZ1xuICAgIGxldCB1cGRhdGVkRGF0YSA9IG51bGw7XG4gICAgY29uc3QgZWRpdFR5cGUgPSBpc0RyYWdnaW5nID8gRURJVF9UWVBFLk1PVkVfUE9TSVRJT04gOiBFRElUX1RZUEUuRklOSVNIX01PVkVfUE9TSVRJT047XG5cbiAgICBzd2l0Y2ggKG9iamVjdFR5cGUpIHtcbiAgICAgIGNhc2UgRUxFTUVOVF9UWVBFLkZFQVRVUkU6XG4gICAgICBjYXNlIEVMRU1FTlRfVFlQRS5GSUxMOlxuICAgICAgY2FzZSBFTEVNRU5UX1RZUEUuU0VHTUVOVDpcbiAgICAgICAgaWYgKCFwcm9wcy5mZWF0dXJlc0RyYWdnYWJsZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIGRyYWdnaW5nIGZlYXR1cmVcblxuICAgICAgICBjb25zdCBkeCA9IHNjcmVlbkNvb3Jkc1swXSAtIGxhc3RQb2ludGVyTW92ZUV2ZW50LnNjcmVlbkNvb3Jkc1swXTtcbiAgICAgICAgY29uc3QgZHkgPSBzY3JlZW5Db29yZHNbMV0gLSBsYXN0UG9pbnRlck1vdmVFdmVudC5zY3JlZW5Db29yZHNbMV07XG4gICAgICAgIHVwZGF0ZWREYXRhID0gdGhpcy5fdXBkYXRlRmVhdHVyZShwcm9wcywgJ2ZlYXR1cmUnLCB7IGR4LCBkeSB9KTtcbiAgICAgICAgb25FZGl0KHtcbiAgICAgICAgICBlZGl0VHlwZSxcbiAgICAgICAgICB1cGRhdGVkRGF0YSxcbiAgICAgICAgICBlZGl0Q29udGV4dDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVMRU1FTlRfVFlQRS5FRElUX0hBTkRMRTpcbiAgICAgICAgLy8gZHJhZ2dpbmcgZWRpdEhhbmRsZVxuICAgICAgICAvLyBkcmFnZ2luZyByZWN0YW5nbGUgb3Igb3RoZXIgc2hhcGVzXG4gICAgICAgIGNvbnN0IHVwZGF0ZVR5cGUgPVxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZS5wcm9wZXJ0aWVzLnNoYXBlID09PSBTSEFQRS5SRUNUQU5HTEUgPyAncmVjdGFuZ2xlJyA6ICdlZGl0SGFuZGxlJztcbiAgICAgICAgdXBkYXRlZERhdGEgPSB0aGlzLl91cGRhdGVGZWF0dXJlKHByb3BzLCB1cGRhdGVUeXBlLCB7XG4gICAgICAgICAgZWRpdEhhbmRsZUluZGV4LFxuICAgICAgICAgIG1hcENvb3JkczogZXZlbnQubWFwQ29vcmRzLFxuICAgICAgICB9KTtcbiAgICAgICAgb25FZGl0KHtcbiAgICAgICAgICBlZGl0VHlwZSxcbiAgICAgICAgICB1cGRhdGVkRGF0YSxcbiAgICAgICAgICBlZGl0Q29udGV4dDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVBvaW50ZXJNb3ZlKGV2ZW50OiBQb2ludGVyTW92ZUV2ZW50LCBwcm9wczogTW9kZVByb3BzPEZlYXR1cmVDb2xsZWN0aW9uPikge1xuICAgIC8vIG5vIHNlbGVjdGVkIGZlYXR1cmVcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlID0gdGhpcy5nZXRTZWxlY3RlZEZlYXR1cmUocHJvcHMpO1xuICAgIGlmICghc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoIWV2ZW50LmlzRHJhZ2dpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9oYW5kbGVEcmFnZ2luZyhldmVudCwgcHJvcHMpO1xuICB9XG5cbiAgLy8gVE9ETyAtIHJlZmFjdG9yXG4gIF91cGRhdGVGZWF0dXJlKHByb3BzOiBNb2RlUHJvcHM8RmVhdHVyZUNvbGxlY3Rpb24+LCB0eXBlOiBzdHJpbmcsIG9wdGlvbnM6IGFueSA9IHt9KSB7XG4gICAgY29uc3QgeyBkYXRhLCBzZWxlY3RlZEluZGV4ZXMsIHZpZXdwb3J0IH0gPSBwcm9wcztcblxuICAgIGNvbnN0IGZlYXR1cmVJbmRleCA9IHNlbGVjdGVkSW5kZXhlcyAmJiBzZWxlY3RlZEluZGV4ZXNbMF07XG4gICAgY29uc3QgZmVhdHVyZSA9IHRoaXMuZ2V0U2VsZWN0ZWRGZWF0dXJlKHByb3BzLCBmZWF0dXJlSW5kZXgpO1xuXG4gICAgbGV0IGdlb21ldHJ5ID0gbnVsbDtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldEZlYXR1cmVDb29yZGluYXRlcyhmZWF0dXJlKTtcbiAgICBpZiAoIWNvb3JkaW5hdGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgbmV3Q29vcmRpbmF0ZXMgPSBbLi4uY29vcmRpbmF0ZXNdO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdlZGl0SGFuZGxlJzpcbiAgICAgICAgY29uc3QgcG9zaXRpb25JbmRleGVzID1cbiAgICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LnR5cGUgPT09IEdFT0pTT05fVFlQRS5QT0xZR09OXG4gICAgICAgICAgICA/IFswLCBvcHRpb25zLmVkaXRIYW5kbGVJbmRleF1cbiAgICAgICAgICAgIDogW29wdGlvbnMuZWRpdEhhbmRsZUluZGV4XTtcblxuICAgICAgICByZXR1cm4gbmV3IEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uKGRhdGEpXG4gICAgICAgICAgLnJlcGxhY2VQb3NpdGlvbihmZWF0dXJlSW5kZXgsIHBvc2l0aW9uSW5kZXhlcywgb3B0aW9ucy5tYXBDb29yZHMpXG4gICAgICAgICAgLmdldE9iamVjdCgpO1xuXG4gICAgICBjYXNlICdmZWF0dXJlJzpcbiAgICAgICAgY29uc3QgeyBkeCwgZHkgfSA9IG9wdGlvbnM7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBuZXdDb29yZGluYXRlcyA9IG5ld0Nvb3JkaW5hdGVzXG4gICAgICAgICAgLm1hcCgobWFwQ29vcmRzKSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBwaXhlbHMgPSB2aWV3cG9ydCAmJiB2aWV3cG9ydC5wcm9qZWN0KG1hcENvb3Jkcyk7XG4gICAgICAgICAgICBpZiAocGl4ZWxzKSB7XG4gICAgICAgICAgICAgIHBpeGVsc1swXSArPSBkeDtcbiAgICAgICAgICAgICAgcGl4ZWxzWzFdICs9IGR5O1xuICAgICAgICAgICAgICByZXR1cm4gdmlld3BvcnQgJiYgdmlld3BvcnQudW5wcm9qZWN0KHBpeGVscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgIGdlb21ldHJ5ID0ge1xuICAgICAgICAgIHR5cGU6IGZlYXR1cmUuZ2VvbWV0cnkudHlwZSxcbiAgICAgICAgICBjb29yZGluYXRlczpcbiAgICAgICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkudHlwZSA9PT0gR0VPSlNPTl9UWVBFLlBPTFlHT05cbiAgICAgICAgICAgICAgPyBbbmV3Q29vcmRpbmF0ZXNdXG4gICAgICAgICAgICAgIDogZmVhdHVyZS5nZW9tZXRyeS50eXBlID09PSBHRU9KU09OX1RZUEUuUE9JTlRcbiAgICAgICAgICAgICAgPyBuZXdDb29yZGluYXRlc1swXVxuICAgICAgICAgICAgICA6IG5ld0Nvb3JkaW5hdGVzLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXcgSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb24oZGF0YSlcbiAgICAgICAgICAucmVwbGFjZUdlb21ldHJ5KGZlYXR1cmVJbmRleCwgZ2VvbWV0cnkpXG4gICAgICAgICAgLmdldE9iamVjdCgpO1xuXG4gICAgICBjYXNlICdyZWN0YW5nbGUnOlxuICAgICAgICAvLyBtb3ZlZCBlZGl0SGFuZGxlSW5kZXggYW5kIGRlc3RpbmF0aW9uIG1hcENvb3Jkc1xuICAgICAgICBuZXdDb29yZGluYXRlcyA9IHVwZGF0ZVJlY3RhbmdsZVBvc2l0aW9uKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBmZWF0dXJlLFxuICAgICAgICAgIG9wdGlvbnMuZWRpdEhhbmRsZUluZGV4LFxuICAgICAgICAgIG9wdGlvbnMubWFwQ29vcmRzXG4gICAgICAgICk7XG4gICAgICAgIGdlb21ldHJ5ID0ge1xuICAgICAgICAgIHR5cGU6IEdFT0pTT05fVFlQRS5QT0xZR09OLFxuICAgICAgICAgIGNvb3JkaW5hdGVzOiBuZXdDb29yZGluYXRlcyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV3IEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uKGRhdGEpXG4gICAgICAgICAgLnJlcGxhY2VHZW9tZXRyeShmZWF0dXJlSW5kZXgsIGdlb21ldHJ5KVxuICAgICAgICAgIC5nZXRPYmplY3QoKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRhdGEgJiYgbmV3IEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uKGRhdGEpLmdldE9iamVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRQb2ludE9uU2VnbWVudChmZWF0dXJlOiBGZWF0dXJlLCBwaWNrZWQ6IGFueSwgcGlja2VkTWFwQ29vcmRzOiBQb3NpdGlvbikge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0RmVhdHVyZUNvb3JkaW5hdGVzKGZlYXR1cmUpO1xuICAgIGlmICghY29vcmRpbmF0ZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzcmNWZXJ0ZXhJbmRleCA9IHBpY2tlZC5pbmRleDtcbiAgICBjb25zdCB0YXJnZXRWZXJ0ZXhJbmRleCA9IHBpY2tlZC5pbmRleCArIDE7XG4gICAgcmV0dXJuIGZpbmRDbG9zZXN0UG9pbnRPbkxpbmVTZWdtZW50KFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29vcmRpbmF0ZXNbc3JjVmVydGV4SW5kZXhdLFxuICAgICAgY29vcmRpbmF0ZXNbdGFyZ2V0VmVydGV4SW5kZXhdLFxuICAgICAgcGlja2VkTWFwQ29vcmRzXG4gICAgKTtcbiAgfVxuXG4gIF9nZXRDdXJzb3JFZGl0SGFuZGxlKGV2ZW50OiBQb2ludGVyTW92ZUV2ZW50LCBmZWF0dXJlOiBGZWF0dXJlKSB7XG4gICAgLy8gZXZlbnQgY2FuIGJlIG51bGwgd2hlbiB0aGUgdXNlciBoYXMgbm90IGludGVyYWN0ZWQgd2l0aCB0aGUgbWFwIHdoYXRzb2V2ZXJcbiAgICAvLyBhbmQgdGhlcmVmb3JlIHByb3BzLmxhc3RQb2ludGVyTW92ZUV2ZW50IGlzIHN0aWxsIG51bGxcbiAgICAvLyByZXR1cm5pbmcgbnVsbCBoZXJlIG1lYW5zIHdlIGNhbiBlLmcuIHNldCBhIGZlYXR1cmVJbmRleCB3aXRob3V0IHJlcXVpcmluZyBhbiBldmVudFxuICAgIGlmICghZXZlbnQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB7IGlzRHJhZ2dpbmcsIHBpY2tzIH0gPSBldmVudDtcbiAgICAvLyBpZiBub3QgcGljayBzZWdtZW50XG4gICAgY29uc3QgcGlja2VkID0gcGlja3MgJiYgcGlja3NbMF07XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICghcGlja2VkIHx8ICFpc051bWVyaWMocGlja2VkLmZlYXR1cmVJbmRleCkgfHwgcGlja2VkLnR5cGUgIT09IEVMRU1FTlRfVFlQRS5TRUdNRU5UKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBpZiBkcmFnZ2luZyBvciBmZWF0dXJlIGlzIG5laXRoZXIgcG9seWdvbiBub3IgbGluZSBzdHJpbmdcbiAgICBpZiAoXG4gICAgICBpc0RyYWdnaW5nIHx8XG4gICAgICAoZmVhdHVyZS5nZW9tZXRyeS50eXBlICE9PSBHRU9KU09OX1RZUEUuUE9MWUdPTiAmJlxuICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LnR5cGUgIT09IEdFT0pTT05fVFlQRS5MSU5FX1NUUklORylcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGluc2VydE1hcENvb3JkcyA9IHRoaXMuX2dldFBvaW50T25TZWdtZW50KGZlYXR1cmUsIHBpY2tlZCwgZXZlbnQubWFwQ29vcmRzKTtcblxuICAgIGlmICghaW5zZXJ0TWFwQ29vcmRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ0ZlYXR1cmUnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBndWlkZVR5cGU6IEdVSURFX1RZUEUuQ1VSU09SX0VESVRfSEFORExFLFxuICAgICAgICBzaGFwZTogZmVhdHVyZS5wcm9wZXJ0aWVzLnNoYXBlLFxuICAgICAgICBwb3NpdGlvbkluZGV4ZXM6IFstMV0sXG4gICAgICAgIGVkaXRIYW5kbGVUeXBlOiAnaW50ZXJtZWRpYXRlJyxcbiAgICAgIH0sXG4gICAgICBnZW9tZXRyeToge1xuICAgICAgICB0eXBlOiBHRU9KU09OX1RZUEUuUE9JTlQsXG4gICAgICAgIGNvb3JkaW5hdGVzOiBpbnNlcnRNYXBDb29yZHMsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgLy8gQHRzLWlnbm9yZVxuICBnZXRHdWlkZXMocHJvcHM6IE1vZGVQcm9wczxGZWF0dXJlQ29sbGVjdGlvbj4pIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlID0gdGhpcy5nZXRTZWxlY3RlZEZlYXR1cmUocHJvcHMpO1xuICAgIGNvbnN0IHNlbGVjdGVkRmVhdHVyZUluZGV4ID0gcHJvcHMuc2VsZWN0ZWRJbmRleGVzICYmIHByb3BzLnNlbGVjdGVkSW5kZXhlc1swXTtcblxuICAgIGlmICghc2VsZWN0ZWRGZWF0dXJlIHx8IHNlbGVjdGVkRmVhdHVyZS5nZW9tZXRyeS50eXBlID09PSBHRU9KU09OX1RZUEUuUE9JTlQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50ID0gcHJvcHMubGFzdFBvaW50ZXJNb3ZlRXZlbnQ7XG5cbiAgICAvLyBmZWF0dXJlIGVkaXRIYW5kbGVzXG4gICAgY29uc3QgZWRpdEhhbmRsZXMgPSB0aGlzLmdldEVkaXRIYW5kbGVzRnJvbUZlYXR1cmUoc2VsZWN0ZWRGZWF0dXJlLCBzZWxlY3RlZEZlYXR1cmVJbmRleCkgfHwgW107XG5cbiAgICAvLyBjdXJzb3IgZWRpdEhhbmRsZVxuICAgIGNvbnN0IGN1cnNvckVkaXRIYW5kbGUgPSB0aGlzLl9nZXRDdXJzb3JFZGl0SGFuZGxlKGV2ZW50LCBzZWxlY3RlZEZlYXR1cmUpO1xuICAgIGlmIChjdXJzb3JFZGl0SGFuZGxlKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBlZGl0SGFuZGxlcy5wdXNoKGN1cnNvckVkaXRIYW5kbGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgZmVhdHVyZXM6IGVkaXRIYW5kbGVzLmxlbmd0aCA/IGVkaXRIYW5kbGVzIDogbnVsbCxcbiAgICB9O1xuICB9XG59XG4iXX0=