"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _constants = require("./constants");

var _modeHandler = _interopRequireDefault(require("./mode-handler"));

var _utils = require("./edit-modes/utils");

var _style = require("./style");

var _excluded = ["radius"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = _objectSpread(_objectSpread({}, _modeHandler["default"].defaultProps), {}, {
  clickRadius: 0,
  featureShape: 'circle',
  editHandleShape: 'rect',
  editHandleStyle: _style.editHandleStyle,
  featureStyle: _style.featureStyle,
  tooltipStyle: _style.tooltipStyle,
  featuresDraggable: true
});

var Editor = /*#__PURE__*/function (_ModeHandler) {
  _inherits(Editor, _ModeHandler);

  var _super = _createSuper(Editor);

  function Editor() {
    var _this;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_tooltipsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "_getEditHandleState", function (editHandle, renderState) {
      var _this$state = _this.state,
          pointerDownPicks = _this$state.pointerDownPicks,
          hovered = _this$state.hovered;

      if (renderState) {
        return renderState;
      }

      var editHandleIndex = editHandle.properties.positionIndexes[0];
      var draggingEditHandleIndex = null;
      var pickedObject = pointerDownPicks && pointerDownPicks[0] && pointerDownPicks[0].object;

      if (pickedObject && pickedObject.guideType === _constants.GUIDE_TYPE.EDIT_HANDLE) {
        draggingEditHandleIndex = pickedObject.index;
      }

      if (editHandleIndex === draggingEditHandleIndex || _this.state.selectedEditHandleIndexes.includes(editHandleIndex)) {
        return _constants.RENDER_STATE.SELECTED;
      } // @ts-ignore


      if (hovered && hovered.type === _constants.ELEMENT_TYPE.EDIT_HANDLE) {
        if (hovered.index === editHandleIndex) {
          return _constants.RENDER_STATE.HOVERED;
        } // cursor hovered on first vertex when drawing polygon


        if (hovered.index === 0 && editHandle.properties.guideType === _constants.GUIDE_TYPE.CURSOR_EDIT_HANDLE) {
          return _constants.RENDER_STATE.CLOSING;
        }
      }

      return _constants.RENDER_STATE.INACTIVE;
    });

    _defineProperty(_assertThisInitialized(_this), "_getFeatureRenderState", function (index, renderState) {
      var hovered = _this.state.hovered;

      var selectedFeatureIndex = _this._getSelectedFeatureIndex();

      if (renderState) {
        return renderState;
      }

      if (index === selectedFeatureIndex) {
        return _constants.RENDER_STATE.SELECTED;
      } // @ts-ignore


      if (hovered && hovered.type === _constants.ELEMENT_TYPE.FEATURE && hovered.featureIndex === index) {
        return _constants.RENDER_STATE.HOVERED;
      }

      return _constants.RENDER_STATE.INACTIVE;
    });

    _defineProperty(_assertThisInitialized(_this), "_getStyleProp", function (styleProp, params) {
      return typeof styleProp === 'function' ? styleProp(params) : styleProp;
    });

    _defineProperty(_assertThisInitialized(_this), "_renderEditHandle", function (editHandle, feature) {
      /* eslint-enable max-params */
      var coordinates = (0, _utils.getFeatureCoordinates)(editHandle);

      var p = _this.project(coordinates && coordinates[0]);

      if (!p) {
        return null;
      }

      var _editHandle$propertie = editHandle.properties,
          featureIndex = _editHandle$propertie.featureIndex,
          positionIndexes = _editHandle$propertie.positionIndexes,
          editHandleType = _editHandle$propertie.editHandleType;
      var _this$props = _this.props,
          clickRadius = _this$props.clickRadius,
          editHandleShape = _this$props.editHandleShape,
          editHandleStyle = _this$props.editHandleStyle;
      var index = positionIndexes.length > 1 ? positionIndexes[1] : positionIndexes[0];

      var shape = _this._getStyleProp(editHandleShape, {
        feature: feature || editHandle,
        index: index,
        featureIndex: featureIndex,
        // @ts-ignore
        state: _this._getEditHandleState(editHandle)
      });

      var style = _this._getStyleProp(editHandleStyle, {
        feature: feature || editHandle,
        index: index,
        featureIndex: featureIndex,
        shape: shape,
        // @ts-ignore
        state: _this._getEditHandleState(editHandle)
      }); // disable events for cursor editHandle


      if (editHandle.properties.guideType === _constants.GUIDE_TYPE.CURSOR_EDIT_HANDLE) {
        style = _objectSpread(_objectSpread({}, style), {}, {
          // disable pointer events for cursor
          pointerEvents: 'none'
        });
      }

      var elemKey = "".concat(_constants.ELEMENT_TYPE.EDIT_HANDLE, ".").concat(featureIndex, ".").concat(index, ".").concat(editHandleType); // first <circle|rect> is to make path easily interacted with

      switch (shape) {
        case 'circle':
          return /*#__PURE__*/React.createElement("g", {
            key: elemKey,
            transform: "translate(".concat(p[0], ", ").concat(p[1], ")")
          }, /*#__PURE__*/React.createElement("circle", {
            "data-type": _constants.ELEMENT_TYPE.EDIT_HANDLE,
            "data-index": index,
            "data-feature-index": featureIndex,
            key: "".concat(elemKey, ".hidden"),
            style: _objectSpread(_objectSpread({}, style), {}, {
              stroke: 'none',
              fill: '#000',
              fillOpacity: 0
            }),
            cx: 0,
            cy: 0,
            r: clickRadius
          }), /*#__PURE__*/React.createElement("circle", {
            "data-type": _constants.ELEMENT_TYPE.EDIT_HANDLE,
            "data-index": index,
            "data-feature-index": featureIndex,
            key: elemKey,
            style: style,
            cx: 0,
            cy: 0
          }));

        case 'rect':
          return /*#__PURE__*/React.createElement("g", {
            key: elemKey,
            transform: "translate(".concat(p[0], ", ").concat(p[1], ")")
          }, /*#__PURE__*/React.createElement("rect", {
            "data-type": _constants.ELEMENT_TYPE.EDIT_HANDLE,
            "data-index": index,
            "data-feature-index": featureIndex,
            key: "".concat(elemKey, ".hidden"),
            style: _objectSpread(_objectSpread({}, style), {}, {
              height: clickRadius,
              width: clickRadius,
              fill: '#000',
              fillOpacity: 0
            }),
            r: clickRadius
          }), /*#__PURE__*/React.createElement("rect", {
            "data-type": _constants.ELEMENT_TYPE.EDIT_HANDLE,
            "data-index": index,
            "data-feature-index": featureIndex,
            key: "".concat(elemKey),
            style: style
          }));

        default:
          return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_renderSegment", function (featureIndex, index, coordinates, style) {
      var path = _this._getPathInScreenCoords(coordinates, _constants.GEOJSON_TYPE.LINE_STRING);

      var radius = style.radius,
          others = _objectWithoutProperties(style, _excluded);

      var clickRadius = _this.props.clickRadius;
      var elemKey = "".concat(_constants.ELEMENT_TYPE.SEGMENT, ".").concat(featureIndex, ".").concat(index);
      return /*#__PURE__*/React.createElement("g", {
        key: elemKey
      }, /*#__PURE__*/React.createElement("path", {
        key: "".concat(elemKey, ".hidden"),
        "data-type": _constants.ELEMENT_TYPE.SEGMENT,
        "data-index": index,
        "data-feature-index": featureIndex,
        style: _objectSpread(_objectSpread({}, others), {}, {
          stroke: 'rgba(0,0,0,0)',
          strokeWidth: clickRadius || radius,
          opacity: 0
        }),
        d: path
      }), /*#__PURE__*/React.createElement("path", {
        key: elemKey,
        "data-type": _constants.ELEMENT_TYPE.SEGMENT,
        "data-index": index,
        "data-feature-index": featureIndex,
        style: others,
        d: path
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderSegments", function (featureIndex, coordinates, style) {
      var segments = [];

      for (var i = 0; i < coordinates.length - 1; i++) {
        segments.push(_this._renderSegment(featureIndex, i, [coordinates[i], coordinates[i + 1]], style));
      }

      return segments;
    });

    _defineProperty(_assertThisInitialized(_this), "_renderFill", function (featureIndex, coordinates, style) {
      var path = _this._getPathInScreenCoords(coordinates, _constants.GEOJSON_TYPE.POLYGON);

      return /*#__PURE__*/React.createElement("path", {
        key: "".concat(_constants.ELEMENT_TYPE.FILL, ".").concat(featureIndex),
        "data-type": _constants.ELEMENT_TYPE.FILL,
        "data-feature-index": featureIndex,
        style: _objectSpread(_objectSpread({}, style), {}, {
          stroke: 'none'
        }),
        d: path
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_renderTentativeFeature", function (feature, cursorEditHandle) {
      var featureStyle = _this.props.featureStyle;
      var geojsonType = feature.geometry.type,
          properties = feature.properties;
      var shape = properties === null || properties === void 0 ? void 0 : properties.shape;
      var coordinates = (0, _utils.getFeatureCoordinates)(feature);

      if (!coordinates || !Array.isArray(coordinates) || coordinates.length < 2) {
        return null;
      } // >= 2 coordinates


      var firstCoords = coordinates[0];
      var lastCoords = coordinates[coordinates.length - 1];

      var uncommittedStyle = _this._getStyleProp(featureStyle, {
        feature: feature,
        index: null,
        state: _constants.RENDER_STATE.UNCOMMITTED
      });

      var committedPath;
      var uncommittedPath;
      var closingPath; // @ts-ignore

      var fill = _this._renderFill('tentative', coordinates, uncommittedStyle);

      var type = shape || geojsonType;

      switch (type) {
        case _constants.SHAPE.LINE_STRING:
        case _constants.SHAPE.POLYGON:
          var committedStyle = _this._getStyleProp(featureStyle, {
            feature: feature,
            state: _constants.RENDER_STATE.SELECTED
          });

          if (cursorEditHandle) {
            // @ts-ignore
            var cursorCoords = coordinates[coordinates.length - 2];
            committedPath = _this._renderSegments('tentative', // @ts-ignore
            coordinates.slice(0, coordinates.length - 1), committedStyle);
            uncommittedPath = _this._renderSegment('tentative-uncommitted', // @ts-ignore
            coordinates.length - 2, // @ts-ignore
            [cursorCoords, lastCoords], uncommittedStyle);
          } else {
            // @ts-ignore
            committedPath = _this._renderSegments('tentative', coordinates, committedStyle);
          }

          if (shape === _constants.SHAPE.POLYGON) {
            var closingStyle = _this._getStyleProp(featureStyle, {
              feature: feature,
              index: null,
              state: _constants.RENDER_STATE.CLOSING
            });

            closingPath = _this._renderSegment('tentative-closing', // @ts-ignore
            coordinates.length - 1, // @ts-ignore
            [lastCoords, firstCoords], closingStyle);
          }

          break;

        case _constants.SHAPE.RECTANGLE:
          uncommittedPath = _this._renderSegments('tentative', // @ts-ignore
          [].concat(_toConsumableArray(coordinates), [firstCoords]), uncommittedStyle);
          break;

        default:
      }

      return [fill, committedPath, uncommittedPath, closingPath].filter(Boolean);
    });

    _defineProperty(_assertThisInitialized(_this), "_renderTooltips", function (tooltips) {
      var _this$props$tooltipSt, _this$props$tooltipSt2;

      var textStyle = _this._getStyleProp((_this$props$tooltipSt = _this.props.tooltipStyle) === null || _this$props$tooltipSt === void 0 ? void 0 : _this$props$tooltipSt.text, null);

      var bgStyle = _this._getStyleProp((_this$props$tooltipSt2 = _this.props.tooltipStyle) === null || _this$props$tooltipSt2 === void 0 ? void 0 : _this$props$tooltipSt2.rect, null);

      return /*#__PURE__*/React.createElement("g", {
        key: "feature-tooltips",
        ref: function ref(g) {
          _this._tooltipsRef = g;
        }
      }, tooltips.map(function (tooltip, index) {
        var elemKey = "".concat(_constants.ELEMENT_TYPE.TOOLTIP, ".").concat(index);

        var screenCoords = _this.project([tooltip.position[0], tooltip.position[1]]);

        var label = /*#__PURE__*/React.createElement("text", {
          id: elemKey,
          x: screenCoords[0],
          y: screenCoords[1],
          style: textStyle
        }, tooltip.text);
        var extents = _this.state.textExtents[elemKey];
        var margin = 8;
        var background = extents ? /*#__PURE__*/React.createElement("rect", {
          x: extents.x - margin,
          y: extents.y - margin,
          width: extents.width + 2 * margin,
          height: extents.height + 2 * margin,
          style: bgStyle
        }) : null;
        return /*#__PURE__*/React.createElement("g", {
          key: elemKey
        }, background, label);
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderGuides", function (guideFeatures) {
      var features = _this.getFeatures();

      var cursorEditHandle = guideFeatures && guideFeatures.find(function (f) {
        return f.properties.guideType === _constants.GUIDE_TYPE.CURSOR_EDIT_HANDLE;
      });
      var tentativeFeature = features.find(function (f) {
        return f.properties.guideType === _constants.GUIDE_TYPE.TENTATIVE;
      });
      return /*#__PURE__*/React.createElement("g", {
        key: "feature-guides"
      }, guideFeatures.map(function (guide) {
        var guideType = guide.properties.guideType;

        switch (guideType) {
          case _constants.GUIDE_TYPE.TENTATIVE:
            return _this._renderTentativeFeature(guide, cursorEditHandle);

          case _constants.GUIDE_TYPE.EDIT_HANDLE:
          case _constants.GUIDE_TYPE.CURSOR_EDIT_HANDLE:
            var shape = guide.properties.shape || guide.geometry.type; // TODO this should be removed when fix editing mode
            // don't render cursor for rectangle

            if (shape === _constants.SHAPE.RECTANGLE && guide.properties.editHandleType === 'intermediate') {
              return null;
            }

            var feature = features && features[guide.properties.featureIndex] || tentativeFeature;
            return _this._renderEditHandle(guide, feature);

          default:
            return null;
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderPoint", function (feature, index, path) {
      // @ts-ignore
      var renderState = _this._getFeatureRenderState(index);

      var _this$props2 = _this.props,
          featureStyle = _this$props2.featureStyle,
          featureShape = _this$props2.featureShape,
          clickRadius = _this$props2.clickRadius;

      var shape = _this._getStyleProp(featureShape, {
        feature: feature,
        index: index,
        state: renderState
      });

      var style = _this._getStyleProp(featureStyle, {
        feature: feature,
        index: index,
        state: renderState
      });

      var elemKey = "feature.".concat(index);

      if (shape === 'rect') {
        return /*#__PURE__*/React.createElement("g", {
          key: elemKey,
          transform: "translate(".concat(path[0][0], ", ").concat(path[0][1], ")")
        }, /*#__PURE__*/React.createElement("rect", {
          "data-type": _constants.ELEMENT_TYPE.FEATURE,
          "data-feature-index": index,
          key: "".concat(elemKey, ".hidden"),
          style: _objectSpread(_objectSpread({}, style), {}, {
            width: clickRadius,
            height: clickRadius,
            fill: '#000',
            fillOpacity: 0
          })
        }), /*#__PURE__*/React.createElement("rect", {
          "data-type": _constants.ELEMENT_TYPE.FEATURE,
          "data-feature-index": index,
          key: elemKey,
          style: style
        }));
      }

      return /*#__PURE__*/React.createElement("g", {
        key: "feature.".concat(index),
        transform: "translate(".concat(path[0][0], ", ").concat(path[0][1], ")")
      }, /*#__PURE__*/React.createElement("circle", {
        "data-type": _constants.ELEMENT_TYPE.FEATURE,
        "data-feature-index": index,
        key: "".concat(elemKey, ".hidden"),
        style: _objectSpread(_objectSpread({}, style), {}, {
          opacity: 0
        }),
        cx: 0,
        cy: 0,
        r: clickRadius
      }), /*#__PURE__*/React.createElement("circle", {
        "data-type": _constants.ELEMENT_TYPE.FEATURE,
        "data-feature-index": index,
        key: elemKey,
        style: style,
        cx: 0,
        cy: 0
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderPath", function (feature, index, path) {
      var _this$props3 = _this.props,
          featureStyle = _this$props3.featureStyle,
          clickRadius = _this$props3.clickRadius;

      var selectedFeatureIndex = _this._getSelectedFeatureIndex();

      var selected = index === selectedFeatureIndex; // @ts-ignore

      var renderState = _this._getFeatureRenderState(index);

      var style = _this._getStyleProp(featureStyle, {
        feature: feature,
        index: index,
        state: renderState
      });

      var elemKey = "feature.".concat(index);

      if (selected) {
        return (
          /*#__PURE__*/
          // @ts-ignore
          React.createElement("g", {
            key: elemKey
          }, _this._renderSegments(index, feature.geometry.coordinates, style))
        );
      } // first <path> is to make path easily interacted with


      return /*#__PURE__*/React.createElement("g", {
        key: elemKey
      }, /*#__PURE__*/React.createElement("path", {
        "data-type": _constants.ELEMENT_TYPE.FEATURE,
        "data-feature-index": index,
        key: "".concat(elemKey, ".hidden"),
        style: _objectSpread(_objectSpread({}, style), {}, {
          stroke: 'rgba(0,0,0,0)',
          strokeWidth: clickRadius,
          opacity: 0
        }),
        d: path
      }), /*#__PURE__*/React.createElement("path", {
        "data-type": _constants.ELEMENT_TYPE.FEATURE,
        "data-feature-index": index,
        key: elemKey,
        style: style,
        d: path
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderPolygon", function (feature, index, path) {
      var featureStyle = _this.props.featureStyle;

      var selectedFeatureIndex = _this._getSelectedFeatureIndex();

      var selected = index === selectedFeatureIndex; // @ts-ignore

      var renderState = _this._getFeatureRenderState(index);

      var style = _this._getStyleProp(featureStyle, {
        feature: feature,
        index: index,
        state: renderState
      });

      var elemKey = "feature.".concat(index);

      if (selected) {
        var coordinates = (0, _utils.getFeatureCoordinates)(feature);

        if (!coordinates) {
          return null;
        }

        return /*#__PURE__*/React.createElement("g", {
          key: elemKey
        }, // eslint-disable-next-line prettier/prettier
        //@ts-ignore
        _this._renderFill(index, coordinates, style), // eslint-disable-next-line prettier/prettier
        // @ts-ignore
        _this._renderSegments(index, coordinates, style));
      }

      return /*#__PURE__*/React.createElement("path", {
        "data-type": _constants.ELEMENT_TYPE.FEATURE,
        "data-feature-index": index,
        key: elemKey,
        style: style,
        d: path
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_renderFeature", function (feature, index) {
      var coordinates = (0, _utils.getFeatureCoordinates)(feature); // @ts-ignore

      if (!coordinates || !coordinates.length) {
        return null;
      }

      var properties = feature.properties,
          geojsonType = feature.geometry.type;
      var shape = properties === null || properties === void 0 ? void 0 : properties.shape; // @ts-ignore

      var path = _this._getPathInScreenCoords(coordinates, geojsonType);

      if (!path) {
        return null;
      }

      var type = shape || geojsonType;

      switch (type) {
        case _constants.SHAPE.POINT:
          return _this._renderPoint(feature, index, path);

        case _constants.SHAPE.LINE_STRING:
          return _this._renderPath(feature, index, path);

        case _constants.SHAPE.CIRCLE:
        case _constants.SHAPE.POLYGON:
        case _constants.SHAPE.RECTANGLE:
          return _this._renderPolygon(feature, index, path);

        default:
          return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_renderCanvas", function () {
      var features = _this.getFeatures();

      var guides = _this._modeHandler && _this._modeHandler.getGuides(_this.getModeProps());

      var guideFeatures = guides && guides.features;

      var tooltips = _this._modeHandler && _this._modeHandler.getTooltips(_this.getModeProps());

      return /*#__PURE__*/React.createElement("svg", {
        key: "draw-canvas",
        width: "100%",
        height: "100%"
      }, features && features.length > 0 && /*#__PURE__*/React.createElement("g", {
        key: "feature-group"
      }, features.map(_this._renderFeature)), guideFeatures && guideFeatures.length > 0 && /*#__PURE__*/React.createElement("g", {
        key: "feature-guides"
      }, _this._renderGuides(guideFeatures)), tooltips && _this._renderTooltips(tooltips));
    });

    _defineProperty(_assertThisInitialized(_this), "_render", function () {
      var viewport = _this._context && _this._context.viewport || {};
      var style = _this.props.style; // @ts-ignore

      var _viewport$width = viewport.width,
          width = _viewport$width === void 0 ? 0 : _viewport$width,
          _viewport$height = viewport.height,
          height = _viewport$height === void 0 ? 0 : _viewport$height;
      return /*#__PURE__*/React.createElement("div", {
        id: "editor",
        style: _objectSpread({
          width: width,
          height: height
        }, style),
        ref: function ref(_) {
          _this._containerRef = _;
        }
      }, _this._renderCanvas());
    });

    return _this;
  }

  _createClass(Editor, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      _get(_getPrototypeOf(Editor.prototype), "componentDidUpdate", this).call(this, prevProps, prevState);

      if (this._tooltipsRef) {
        var textElements = this._tooltipsRef.querySelectorAll('text');

        var textExtents = {};

        for (var i = 0; i < textElements.length; i++) {
          var box = textElements[i].getBBox();
          textExtents[textElements[i].id] = {
            width: box.width,
            height: box.height,
            x: box.x,
            y: box.y
          };
        }

        if (JSON.stringify(prevState.textExtents) !== JSON.stringify(textExtents)) {
          this.setState({
            textExtents: textExtents
          });
        }
      }
    }
    /* HELPERS */

  }, {
    key: "_getPathInScreenCoords",
    value: function _getPathInScreenCoords(coordinates, type) {
      var _this2 = this;

      if (coordinates.length === 0) {
        return '';
      }

      var screenCoords = coordinates.map(function (p) {
        return _this2.project(p);
      });
      var pathString = '';

      switch (type) {
        case _constants.GEOJSON_TYPE.POINT:
          return screenCoords;

        case _constants.GEOJSON_TYPE.LINE_STRING:
          pathString = screenCoords.map(function (p) {
            return "".concat(p[0], ",").concat(p[1]);
          }).join('L');
          return "M ".concat(pathString);

        case _constants.GEOJSON_TYPE.POLYGON:
          pathString = screenCoords.map(function (p) {
            return "".concat(p[0], ",").concat(p[1]);
          }).join('L');
          return "M ".concat(pathString, " z");

        default:
          return null;
      }
    }
  }]);

  return Editor;
}(_modeHandler["default"]);

exports["default"] = Editor;

_defineProperty(Editor, "defaultProps", defaultProps);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lZGl0b3IudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsIk1vZGVIYW5kbGVyIiwiY2xpY2tSYWRpdXMiLCJmZWF0dXJlU2hhcGUiLCJlZGl0SGFuZGxlU2hhcGUiLCJlZGl0SGFuZGxlU3R5bGUiLCJkZWZhdWx0RWRpdEhhbmRsZVN0eWxlIiwiZmVhdHVyZVN0eWxlIiwiZGVmYXVsdEZlYXR1cmVTdHlsZSIsInRvb2x0aXBTdHlsZSIsImRlZmF1bHRUb29sdGlwU3R5bGUiLCJmZWF0dXJlc0RyYWdnYWJsZSIsIkVkaXRvciIsImVkaXRIYW5kbGUiLCJyZW5kZXJTdGF0ZSIsInN0YXRlIiwicG9pbnRlckRvd25QaWNrcyIsImhvdmVyZWQiLCJlZGl0SGFuZGxlSW5kZXgiLCJwcm9wZXJ0aWVzIiwicG9zaXRpb25JbmRleGVzIiwiZHJhZ2dpbmdFZGl0SGFuZGxlSW5kZXgiLCJwaWNrZWRPYmplY3QiLCJvYmplY3QiLCJndWlkZVR5cGUiLCJHVUlERV9UWVBFIiwiRURJVF9IQU5ETEUiLCJpbmRleCIsInNlbGVjdGVkRWRpdEhhbmRsZUluZGV4ZXMiLCJpbmNsdWRlcyIsIlJFTkRFUl9TVEFURSIsIlNFTEVDVEVEIiwidHlwZSIsIkVMRU1FTlRfVFlQRSIsIkhPVkVSRUQiLCJDVVJTT1JfRURJVF9IQU5ETEUiLCJDTE9TSU5HIiwiSU5BQ1RJVkUiLCJzZWxlY3RlZEZlYXR1cmVJbmRleCIsIl9nZXRTZWxlY3RlZEZlYXR1cmVJbmRleCIsIkZFQVRVUkUiLCJmZWF0dXJlSW5kZXgiLCJzdHlsZVByb3AiLCJwYXJhbXMiLCJmZWF0dXJlIiwiY29vcmRpbmF0ZXMiLCJwIiwicHJvamVjdCIsImVkaXRIYW5kbGVUeXBlIiwicHJvcHMiLCJsZW5ndGgiLCJzaGFwZSIsIl9nZXRTdHlsZVByb3AiLCJfZ2V0RWRpdEhhbmRsZVN0YXRlIiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiZWxlbUtleSIsInN0cm9rZSIsImZpbGwiLCJmaWxsT3BhY2l0eSIsImhlaWdodCIsIndpZHRoIiwicGF0aCIsIl9nZXRQYXRoSW5TY3JlZW5Db29yZHMiLCJHRU9KU09OX1RZUEUiLCJMSU5FX1NUUklORyIsInJhZGl1cyIsIm90aGVycyIsIlNFR01FTlQiLCJzdHJva2VXaWR0aCIsIm9wYWNpdHkiLCJzZWdtZW50cyIsImkiLCJwdXNoIiwiX3JlbmRlclNlZ21lbnQiLCJQT0xZR09OIiwiRklMTCIsImN1cnNvckVkaXRIYW5kbGUiLCJnZW9qc29uVHlwZSIsImdlb21ldHJ5IiwiQXJyYXkiLCJpc0FycmF5IiwiZmlyc3RDb29yZHMiLCJsYXN0Q29vcmRzIiwidW5jb21taXR0ZWRTdHlsZSIsIlVOQ09NTUlUVEVEIiwiY29tbWl0dGVkUGF0aCIsInVuY29tbWl0dGVkUGF0aCIsImNsb3NpbmdQYXRoIiwiX3JlbmRlckZpbGwiLCJTSEFQRSIsImNvbW1pdHRlZFN0eWxlIiwiY3Vyc29yQ29vcmRzIiwiX3JlbmRlclNlZ21lbnRzIiwic2xpY2UiLCJjbG9zaW5nU3R5bGUiLCJSRUNUQU5HTEUiLCJmaWx0ZXIiLCJCb29sZWFuIiwidG9vbHRpcHMiLCJ0ZXh0U3R5bGUiLCJ0ZXh0IiwiYmdTdHlsZSIsInJlY3QiLCJnIiwiX3Rvb2x0aXBzUmVmIiwibWFwIiwidG9vbHRpcCIsIlRPT0xUSVAiLCJzY3JlZW5Db29yZHMiLCJwb3NpdGlvbiIsImxhYmVsIiwiZXh0ZW50cyIsInRleHRFeHRlbnRzIiwibWFyZ2luIiwiYmFja2dyb3VuZCIsIngiLCJ5IiwiZ3VpZGVGZWF0dXJlcyIsImZlYXR1cmVzIiwiZ2V0RmVhdHVyZXMiLCJmaW5kIiwiZiIsInRlbnRhdGl2ZUZlYXR1cmUiLCJURU5UQVRJVkUiLCJndWlkZSIsIl9yZW5kZXJUZW50YXRpdmVGZWF0dXJlIiwiX3JlbmRlckVkaXRIYW5kbGUiLCJfZ2V0RmVhdHVyZVJlbmRlclN0YXRlIiwic2VsZWN0ZWQiLCJQT0lOVCIsIl9yZW5kZXJQb2ludCIsIl9yZW5kZXJQYXRoIiwiQ0lSQ0xFIiwiX3JlbmRlclBvbHlnb24iLCJndWlkZXMiLCJfbW9kZUhhbmRsZXIiLCJnZXRHdWlkZXMiLCJnZXRNb2RlUHJvcHMiLCJnZXRUb29sdGlwcyIsIl9yZW5kZXJGZWF0dXJlIiwiX3JlbmRlckd1aWRlcyIsIl9yZW5kZXJUb29sdGlwcyIsInZpZXdwb3J0IiwiX2NvbnRleHQiLCJfIiwiX2NvbnRhaW5lclJlZiIsIl9yZW5kZXJDYW52YXMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJ0ZXh0RWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm94IiwiZ2V0QkJveCIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldFN0YXRlIiwicGF0aFN0cmluZyIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUtBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU1BLFlBQVksbUNBQ2JDLHdCQUFZRCxZQURDO0FBRWhCRSxFQUFBQSxXQUFXLEVBQUUsQ0FGRztBQUdoQkMsRUFBQUEsWUFBWSxFQUFFLFFBSEU7QUFJaEJDLEVBQUFBLGVBQWUsRUFBRSxNQUpEO0FBS2hCQyxFQUFBQSxlQUFlLEVBQUVDLHNCQUxEO0FBTWhCQyxFQUFBQSxZQUFZLEVBQUVDLG1CQU5FO0FBT2hCQyxFQUFBQSxZQUFZLEVBQUVDLG1CQVBFO0FBUWhCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQVJILEVBQWxCOztJQVdxQkMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBFQXFERyxVQUFDQyxVQUFELEVBQXNCQyxXQUF0QixFQUFpRTtBQUNyRix3QkFBc0MsTUFBS0MsS0FBM0M7QUFBQSxVQUFRQyxnQkFBUixlQUFRQSxnQkFBUjtBQUFBLFVBQTBCQyxPQUExQixlQUEwQkEsT0FBMUI7O0FBRUEsVUFBSUgsV0FBSixFQUFpQjtBQUNmLGVBQU9BLFdBQVA7QUFDRDs7QUFFRCxVQUFNSSxlQUFlLEdBQUdMLFVBQVUsQ0FBQ00sVUFBWCxDQUFzQkMsZUFBdEIs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O0FBRUY7QUFDRSxpQkFBTyxJQUFQO0FBYko7QUFlRDs7OztFQW5EaUM3Six1Qjs7OztnQkFBZlcsTSxrQkFDR1osWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgRmVhdHVyZSwgVG9vbHRpcCB9IGZyb20gJ0BuZWJ1bGEuZ2wvZWRpdC1tb2Rlcyc7XG5pbXBvcnQgeyBHZW9Kc29uVHlwZSwgUmVuZGVyU3RhdGUsIElkLCBFZGl0b3JQcm9wcywgRWRpdG9yU3RhdGUgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IHsgUkVOREVSX1NUQVRFLCBTSEFQRSwgR0VPSlNPTl9UWVBFLCBHVUlERV9UWVBFLCBFTEVNRU5UX1RZUEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgTW9kZUhhbmRsZXIgZnJvbSAnLi9tb2RlLWhhbmRsZXInO1xuaW1wb3J0IHsgZ2V0RmVhdHVyZUNvb3JkaW5hdGVzIH0gZnJvbSAnLi9lZGl0LW1vZGVzL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgZWRpdEhhbmRsZVN0eWxlIGFzIGRlZmF1bHRFZGl0SGFuZGxlU3R5bGUsXG4gIGZlYXR1cmVTdHlsZSBhcyBkZWZhdWx0RmVhdHVyZVN0eWxlLFxuICB0b29sdGlwU3R5bGUgYXMgZGVmYXVsdFRvb2x0aXBTdHlsZSxcbn0gZnJvbSAnLi9zdHlsZSc7XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgLi4uTW9kZUhhbmRsZXIuZGVmYXVsdFByb3BzLFxuICBjbGlja1JhZGl1czogMCxcbiAgZmVhdHVyZVNoYXBlOiAnY2lyY2xlJyxcbiAgZWRpdEhhbmRsZVNoYXBlOiAncmVjdCcsXG4gIGVkaXRIYW5kbGVTdHlsZTogZGVmYXVsdEVkaXRIYW5kbGVTdHlsZSxcbiAgZmVhdHVyZVN0eWxlOiBkZWZhdWx0RmVhdHVyZVN0eWxlLFxuICB0b29sdGlwU3R5bGU6IGRlZmF1bHRUb29sdGlwU3R5bGUsXG4gIGZlYXR1cmVzRHJhZ2dhYmxlOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yIGV4dGVuZHMgTW9kZUhhbmRsZXIge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG4gIF90b29sdGlwc1JlZjogU1ZHR0VsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IEVkaXRvclByb3BzLCBwcmV2U3RhdGU6IEVkaXRvclN0YXRlKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKTtcbiAgICBpZiAodGhpcy5fdG9vbHRpcHNSZWYpIHtcbiAgICAgIGNvbnN0IHRleHRFbGVtZW50cyA9IHRoaXMuX3Rvb2x0aXBzUmVmLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHQnKTtcbiAgICAgIGNvbnN0IHRleHRFeHRlbnRzID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRleHRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBib3ggPSB0ZXh0RWxlbWVudHNbaV0uZ2V0QkJveCgpO1xuICAgICAgICB0ZXh0RXh0ZW50c1t0ZXh0RWxlbWVudHNbaV0uaWRdID0ge1xuICAgICAgICAgIHdpZHRoOiBib3gud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBib3guaGVpZ2h0LFxuICAgICAgICAgIHg6IGJveC54LFxuICAgICAgICAgIHk6IGJveC55LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocHJldlN0YXRlLnRleHRFeHRlbnRzKSAhPT0gSlNPTi5zdHJpbmdpZnkodGV4dEV4dGVudHMpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0RXh0ZW50cyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8qIEhFTFBFUlMgKi9cbiAgX2dldFBhdGhJblNjcmVlbkNvb3Jkcyhjb29yZGluYXRlczogYW55LCB0eXBlOiBHZW9Kc29uVHlwZSkge1xuICAgIGlmIChjb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBzY3JlZW5Db29yZHMgPSBjb29yZGluYXRlcy5tYXAoKHApID0+IHRoaXMucHJvamVjdChwKSk7XG5cbiAgICBsZXQgcGF0aFN0cmluZyA9ICcnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBHRU9KU09OX1RZUEUuUE9JTlQ6XG4gICAgICAgIHJldHVybiBzY3JlZW5Db29yZHM7XG5cbiAgICAgIGNhc2UgR0VPSlNPTl9UWVBFLkxJTkVfU1RSSU5HOlxuICAgICAgICBwYXRoU3RyaW5nID0gc2NyZWVuQ29vcmRzLm1hcCgocCkgPT4gYCR7cFswXX0sJHtwWzFdfWApLmpvaW4oJ0wnKTtcbiAgICAgICAgcmV0dXJuIGBNICR7cGF0aFN0cmluZ31gO1xuXG4gICAgICBjYXNlIEdFT0pTT05fVFlQRS5QT0xZR09OOlxuICAgICAgICBwYXRoU3RyaW5nID0gc2NyZWVuQ29vcmRzLm1hcCgocCkgPT4gYCR7cFswXX0sJHtwWzFdfWApLmpvaW4oJ0wnKTtcbiAgICAgICAgcmV0dXJuIGBNICR7cGF0aFN0cmluZ30gemA7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRFZGl0SGFuZGxlU3RhdGUgPSAoZWRpdEhhbmRsZTogRmVhdHVyZSwgcmVuZGVyU3RhdGU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCB7IHBvaW50ZXJEb3duUGlja3MsIGhvdmVyZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAocmVuZGVyU3RhdGUpIHtcbiAgICAgIHJldHVybiByZW5kZXJTdGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0SGFuZGxlSW5kZXggPSBlZGl0SGFuZGxlLnByb3BlcnRpZXMucG9zaXRpb25JbmRleGVzWzBdO1xuICAgIGxldCBkcmFnZ2luZ0VkaXRIYW5kbGVJbmRleCA9IG51bGw7XG4gICAgY29uc3QgcGlja2VkT2JqZWN0ID0gcG9pbnRlckRvd25QaWNrcyAmJiBwb2ludGVyRG93blBpY2tzWzBdICYmIHBvaW50ZXJEb3duUGlja3NbMF0ub2JqZWN0O1xuICAgIGlmIChwaWNrZWRPYmplY3QgJiYgcGlja2VkT2JqZWN0Lmd1aWRlVHlwZSA9PT0gR1VJREVfVFlQRS5FRElUX0hBTkRMRSkge1xuICAgICAgZHJhZ2dpbmdFZGl0SGFuZGxlSW5kZXggPSBwaWNrZWRPYmplY3QuaW5kZXg7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZWRpdEhhbmRsZUluZGV4ID09PSBkcmFnZ2luZ0VkaXRIYW5kbGVJbmRleCB8fFxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzLmluY2x1ZGVzKGVkaXRIYW5kbGVJbmRleClcbiAgICApIHtcbiAgICAgIHJldHVybiBSRU5ERVJfU1RBVEUuU0VMRUNURUQ7XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoaG92ZXJlZCAmJiBob3ZlcmVkLnR5cGUgPT09IEVMRU1FTlRfVFlQRS5FRElUX0hBTkRMRSkge1xuICAgICAgaWYgKGhvdmVyZWQuaW5kZXggPT09IGVkaXRIYW5kbGVJbmRleCkge1xuICAgICAgICByZXR1cm4gUkVOREVSX1NUQVRFLkhPVkVSRUQ7XG4gICAgICB9XG5cbiAgICAgIC8vIGN1cnNvciBob3ZlcmVkIG9uIGZpcnN0IHZlcnRleCB3aGVuIGRyYXdpbmcgcG9seWdvblxuICAgICAgaWYgKFxuICAgICAgICBob3ZlcmVkLmluZGV4ID09PSAwICYmXG4gICAgICAgIGVkaXRIYW5kbGUucHJvcGVydGllcy5ndWlkZVR5cGUgPT09IEdVSURFX1RZUEUuQ1VSU09SX0VESVRfSEFORExFXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIFJFTkRFUl9TVEFURS5DTE9TSU5HO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSRU5ERVJfU1RBVEUuSU5BQ1RJVkU7XG4gIH07XG5cbiAgX2dldEZlYXR1cmVSZW5kZXJTdGF0ZSA9IChpbmRleDogbnVtYmVyLCByZW5kZXJTdGF0ZTogUmVuZGVyU3RhdGUgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3QgeyBob3ZlcmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNlbGVjdGVkRmVhdHVyZUluZGV4ID0gdGhpcy5fZ2V0U2VsZWN0ZWRGZWF0dXJlSW5kZXgoKTtcbiAgICBpZiAocmVuZGVyU3RhdGUpIHtcbiAgICAgIHJldHVybiByZW5kZXJTdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IHNlbGVjdGVkRmVhdHVyZUluZGV4KSB7XG4gICAgICByZXR1cm4gUkVOREVSX1NUQVRFLlNFTEVDVEVEO1xuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKGhvdmVyZWQgJiYgaG92ZXJlZC50eXBlID09PSBFTEVNRU5UX1RZUEUuRkVBVFVSRSAmJiBob3ZlcmVkLmZlYXR1cmVJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgIHJldHVybiBSRU5ERVJfU1RBVEUuSE9WRVJFRDtcbiAgICB9XG5cbiAgICByZXR1cm4gUkVOREVSX1NUQVRFLklOQUNUSVZFO1xuICB9O1xuXG4gIF9nZXRTdHlsZVByb3AgPSAoc3R5bGVQcm9wOiBhbnksIHBhcmFtczogYW55KSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBzdHlsZVByb3AgPT09ICdmdW5jdGlvbicgPyBzdHlsZVByb3AocGFyYW1zKSA6IHN0eWxlUHJvcDtcbiAgfTtcblxuICAvKiBSRU5ERVIgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBtYXgtcGFyYW1zICovXG4gIF9yZW5kZXJFZGl0SGFuZGxlID0gKGVkaXRIYW5kbGU6IEZlYXR1cmUsIGZlYXR1cmU6IEZlYXR1cmUpID0+IHtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1wYXJhbXMgKi9cbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldEZlYXR1cmVDb29yZGluYXRlcyhlZGl0SGFuZGxlKTtcbiAgICBjb25zdCBwID0gdGhpcy5wcm9qZWN0KGNvb3JkaW5hdGVzICYmIGNvb3JkaW5hdGVzWzBdKTtcbiAgICBpZiAoIXApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIHByb3BlcnRpZXM6IHsgZmVhdHVyZUluZGV4LCBwb3NpdGlvbkluZGV4ZXMsIGVkaXRIYW5kbGVUeXBlIH0sXG4gICAgfSA9IGVkaXRIYW5kbGU7XG4gICAgY29uc3QgeyBjbGlja1JhZGl1cywgZWRpdEhhbmRsZVNoYXBlLCBlZGl0SGFuZGxlU3R5bGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBpbmRleCA9IHBvc2l0aW9uSW5kZXhlcy5sZW5ndGggPiAxID8gcG9zaXRpb25JbmRleGVzWzFdIDogcG9zaXRpb25JbmRleGVzWzBdO1xuXG4gICAgY29uc3Qgc2hhcGUgPSB0aGlzLl9nZXRTdHlsZVByb3AoZWRpdEhhbmRsZVNoYXBlLCB7XG4gICAgICBmZWF0dXJlOiBmZWF0dXJlIHx8IGVkaXRIYW5kbGUsXG4gICAgICBpbmRleCxcbiAgICAgIGZlYXR1cmVJbmRleCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHN0YXRlOiB0aGlzLl9nZXRFZGl0SGFuZGxlU3RhdGUoZWRpdEhhbmRsZSksXG4gICAgfSk7XG5cbiAgICBsZXQgc3R5bGUgPSB0aGlzLl9nZXRTdHlsZVByb3AoZWRpdEhhbmRsZVN0eWxlLCB7XG4gICAgICBmZWF0dXJlOiBmZWF0dXJlIHx8IGVkaXRIYW5kbGUsXG4gICAgICBpbmRleCxcbiAgICAgIGZlYXR1cmVJbmRleCxcbiAgICAgIHNoYXBlLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgc3RhdGU6IHRoaXMuX2dldEVkaXRIYW5kbGVTdGF0ZShlZGl0SGFuZGxlKSxcbiAgICB9KTtcblxuICAgIC8vIGRpc2FibGUgZXZlbnRzIGZvciBjdXJzb3IgZWRpdEhhbmRsZVxuICAgIGlmIChlZGl0SGFuZGxlLnByb3BlcnRpZXMuZ3VpZGVUeXBlID09PSBHVUlERV9UWVBFLkNVUlNPUl9FRElUX0hBTkRMRSkge1xuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAvLyBkaXNhYmxlIHBvaW50ZXIgZXZlbnRzIGZvciBjdXJzb3JcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtS2V5ID0gYCR7RUxFTUVOVF9UWVBFLkVESVRfSEFORExFfS4ke2ZlYXR1cmVJbmRleH0uJHtpbmRleH0uJHtlZGl0SGFuZGxlVHlwZX1gO1xuICAgIC8vIGZpcnN0IDxjaXJjbGV8cmVjdD4gaXMgdG8gbWFrZSBwYXRoIGVhc2lseSBpbnRlcmFjdGVkIHdpdGhcbiAgICBzd2l0Y2ggKHNoYXBlKSB7XG4gICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxnIGtleT17ZWxlbUtleX0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cFswXX0sICR7cFsxXX0pYH0+XG4gICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgIGRhdGEtdHlwZT17RUxFTUVOVF9UWVBFLkVESVRfSEFORExFfVxuICAgICAgICAgICAgICBkYXRhLWluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgZGF0YS1mZWF0dXJlLWluZGV4PXtmZWF0dXJlSW5kZXh9XG4gICAgICAgICAgICAgIGtleT17YCR7ZWxlbUtleX0uaGlkZGVuYH1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIHN0cm9rZTogJ25vbmUnLCBmaWxsOiAnIzAwMCcsIGZpbGxPcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgIGN4PXswfVxuICAgICAgICAgICAgICBjeT17MH1cbiAgICAgICAgICAgICAgcj17Y2xpY2tSYWRpdXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICBkYXRhLXR5cGU9e0VMRU1FTlRfVFlQRS5FRElUX0hBTkRMRX1cbiAgICAgICAgICAgICAgZGF0YS1pbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIGRhdGEtZmVhdHVyZS1pbmRleD17ZmVhdHVyZUluZGV4fVxuICAgICAgICAgICAgICBrZXk9e2VsZW1LZXl9XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgY3g9ezB9XG4gICAgICAgICAgICAgIGN5PXswfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdyZWN0JzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZyBrZXk9e2VsZW1LZXl9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3BbMF19LCAke3BbMV19KWB9PlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgZGF0YS10eXBlPXtFTEVNRU5UX1RZUEUuRURJVF9IQU5ETEV9XG4gICAgICAgICAgICAgIGRhdGEtaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICBkYXRhLWZlYXR1cmUtaW5kZXg9e2ZlYXR1cmVJbmRleH1cbiAgICAgICAgICAgICAga2V5PXtgJHtlbGVtS2V5fS5oaWRkZW5gfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY2xpY2tSYWRpdXMsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNsaWNrUmFkaXVzLFxuICAgICAgICAgICAgICAgIGZpbGw6ICcjMDAwJyxcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcj17Y2xpY2tSYWRpdXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgZGF0YS10eXBlPXtFTEVNRU5UX1RZUEUuRURJVF9IQU5ETEV9XG4gICAgICAgICAgICAgIGRhdGEtaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICBkYXRhLWZlYXR1cmUtaW5kZXg9e2ZlYXR1cmVJbmRleH1cbiAgICAgICAgICAgICAga2V5PXtgJHtlbGVtS2V5fWB9XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICApO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3JlbmRlclNlZ21lbnQgPSAoXG4gICAgZmVhdHVyZUluZGV4OiBJZCxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIGNvb3JkaW5hdGVzOiBudW1iZXJbXSxcbiAgICBzdHlsZTogUmVjb3JkPHN0cmluZywgYW55PlxuICApID0+IHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5fZ2V0UGF0aEluU2NyZWVuQ29vcmRzKGNvb3JkaW5hdGVzLCBHRU9KU09OX1RZUEUuTElORV9TVFJJTkcpO1xuICAgIGNvbnN0IHsgcmFkaXVzLCAuLi5vdGhlcnMgfSA9IHN0eWxlO1xuICAgIGNvbnN0IHsgY2xpY2tSYWRpdXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBlbGVtS2V5ID0gYCR7RUxFTUVOVF9UWVBFLlNFR01FTlR9LiR7ZmVhdHVyZUluZGV4fS4ke2luZGV4fWA7XG4gICAgcmV0dXJuIChcbiAgICAgIDxnIGtleT17ZWxlbUtleX0+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAga2V5PXtgJHtlbGVtS2V5fS5oaWRkZW5gfVxuICAgICAgICAgIGRhdGEtdHlwZT17RUxFTUVOVF9UWVBFLlNFR01FTlR9XG4gICAgICAgICAgZGF0YS1pbmRleD17aW5kZXh9XG4gICAgICAgICAgZGF0YS1mZWF0dXJlLWluZGV4PXtmZWF0dXJlSW5kZXh9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLm90aGVycyxcbiAgICAgICAgICAgIHN0cm9rZTogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IGNsaWNrUmFkaXVzIHx8IHJhZGl1cyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBkPXtwYXRofVxuICAgICAgICAvPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGtleT17ZWxlbUtleX1cbiAgICAgICAgICBkYXRhLXR5cGU9e0VMRU1FTlRfVFlQRS5TRUdNRU5UfVxuICAgICAgICAgIGRhdGEtaW5kZXg9e2luZGV4fVxuICAgICAgICAgIGRhdGEtZmVhdHVyZS1pbmRleD17ZmVhdHVyZUluZGV4fVxuICAgICAgICAgIHN0eWxlPXtvdGhlcnN9XG4gICAgICAgICAgZD17cGF0aH1cbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICApO1xuICB9O1xuXG4gIF9yZW5kZXJTZWdtZW50cyA9IChmZWF0dXJlSW5kZXg6IElkLCBjb29yZGluYXRlczogbnVtYmVyW10sIHN0eWxlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgc2VnbWVudHMucHVzaChcbiAgICAgICAgdGhpcy5fcmVuZGVyU2VnbWVudChmZWF0dXJlSW5kZXgsIGksIFtjb29yZGluYXRlc1tpXSwgY29vcmRpbmF0ZXNbaSArIDFdXSwgc3R5bGUpXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gc2VnbWVudHM7XG4gIH07XG5cbiAgX3JlbmRlckZpbGwgPSAoZmVhdHVyZUluZGV4OiBJZCwgY29vcmRpbmF0ZXM6IG51bWJlcltdLCBzdHlsZTogUmVjb3JkPHN0cmluZywgYW55PikgPT4ge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLl9nZXRQYXRoSW5TY3JlZW5Db29yZHMoY29vcmRpbmF0ZXMsIEdFT0pTT05fVFlQRS5QT0xZR09OKTtcbiAgICByZXR1cm4gKFxuICAgICAgPHBhdGhcbiAgICAgICAga2V5PXtgJHtFTEVNRU5UX1RZUEUuRklMTH0uJHtmZWF0dXJlSW5kZXh9YH1cbiAgICAgICAgZGF0YS10eXBlPXtFTEVNRU5UX1RZUEUuRklMTH1cbiAgICAgICAgZGF0YS1mZWF0dXJlLWluZGV4PXtmZWF0dXJlSW5kZXh9XG4gICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBzdHJva2U6ICdub25lJyB9fVxuICAgICAgICBkPXtwYXRofVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIF9yZW5kZXJUZW50YXRpdmVGZWF0dXJlID0gKGZlYXR1cmU6IEZlYXR1cmUsIGN1cnNvckVkaXRIYW5kbGU6IEZlYXR1cmUpID0+IHtcbiAgICBjb25zdCB7IGZlYXR1cmVTdHlsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBnZW9tZXRyeTogeyB0eXBlOiBnZW9qc29uVHlwZSB9LFxuICAgICAgcHJvcGVydGllcyxcbiAgICB9ID0gZmVhdHVyZTtcblxuICAgIGNvbnN0IHNoYXBlID0gcHJvcGVydGllcz8uc2hhcGU7XG5cbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldEZlYXR1cmVDb29yZGluYXRlcyhmZWF0dXJlKTtcbiAgICBpZiAoIWNvb3JkaW5hdGVzIHx8ICFBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVzKSB8fCBjb29yZGluYXRlcy5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyA+PSAyIGNvb3JkaW5hdGVzXG4gICAgY29uc3QgZmlyc3RDb29yZHMgPSBjb29yZGluYXRlc1swXTtcbiAgICBjb25zdCBsYXN0Q29vcmRzID0gY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgdW5jb21taXR0ZWRTdHlsZSA9IHRoaXMuX2dldFN0eWxlUHJvcChmZWF0dXJlU3R5bGUsIHtcbiAgICAgIGZlYXR1cmUsXG4gICAgICBpbmRleDogbnVsbCxcbiAgICAgIHN0YXRlOiBSRU5ERVJfU1RBVEUuVU5DT01NSVRURUQsXG4gICAgfSk7XG5cbiAgICBsZXQgY29tbWl0dGVkUGF0aDtcbiAgICBsZXQgdW5jb21taXR0ZWRQYXRoO1xuICAgIGxldCBjbG9zaW5nUGF0aDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZmlsbCA9IHRoaXMuX3JlbmRlckZpbGwoJ3RlbnRhdGl2ZScsIGNvb3JkaW5hdGVzLCB1bmNvbW1pdHRlZFN0eWxlKTtcblxuICAgIGNvbnN0IHR5cGUgPSBzaGFwZSB8fCBnZW9qc29uVHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgU0hBUEUuTElORV9TVFJJTkc6XG4gICAgICBjYXNlIFNIQVBFLlBPTFlHT046XG4gICAgICAgIGNvbnN0IGNvbW1pdHRlZFN0eWxlID0gdGhpcy5fZ2V0U3R5bGVQcm9wKGZlYXR1cmVTdHlsZSwge1xuICAgICAgICAgIGZlYXR1cmUsXG4gICAgICAgICAgc3RhdGU6IFJFTkRFUl9TVEFURS5TRUxFQ1RFRCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGN1cnNvckVkaXRIYW5kbGUpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY29uc3QgY3Vyc29yQ29vcmRzID0gY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXMubGVuZ3RoIC0gMl07XG4gICAgICAgICAgY29tbWl0dGVkUGF0aCA9IHRoaXMuX3JlbmRlclNlZ21lbnRzKFxuICAgICAgICAgICAgJ3RlbnRhdGl2ZScsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb29yZGluYXRlcy5zbGljZSgwLCBjb29yZGluYXRlcy5sZW5ndGggLSAxKSxcbiAgICAgICAgICAgIGNvbW1pdHRlZFN0eWxlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB1bmNvbW1pdHRlZFBhdGggPSB0aGlzLl9yZW5kZXJTZWdtZW50KFxuICAgICAgICAgICAgJ3RlbnRhdGl2ZS11bmNvbW1pdHRlZCcsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb29yZGluYXRlcy5sZW5ndGggLSAyLFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgW2N1cnNvckNvb3JkcywgbGFzdENvb3Jkc10sXG4gICAgICAgICAgICB1bmNvbW1pdHRlZFN0eWxlXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgY29tbWl0dGVkUGF0aCA9IHRoaXMuX3JlbmRlclNlZ21lbnRzKCd0ZW50YXRpdmUnLCBjb29yZGluYXRlcywgY29tbWl0dGVkU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNoYXBlID09PSBTSEFQRS5QT0xZR09OKSB7XG4gICAgICAgICAgY29uc3QgY2xvc2luZ1N0eWxlID0gdGhpcy5fZ2V0U3R5bGVQcm9wKGZlYXR1cmVTdHlsZSwge1xuICAgICAgICAgICAgZmVhdHVyZSxcbiAgICAgICAgICAgIGluZGV4OiBudWxsLFxuICAgICAgICAgICAgc3RhdGU6IFJFTkRFUl9TVEFURS5DTE9TSU5HLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2xvc2luZ1BhdGggPSB0aGlzLl9yZW5kZXJTZWdtZW50KFxuICAgICAgICAgICAgJ3RlbnRhdGl2ZS1jbG9zaW5nJyxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBbbGFzdENvb3JkcywgZmlyc3RDb29yZHNdLFxuICAgICAgICAgICAgY2xvc2luZ1N0eWxlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFNIQVBFLlJFQ1RBTkdMRTpcbiAgICAgICAgdW5jb21taXR0ZWRQYXRoID0gdGhpcy5fcmVuZGVyU2VnbWVudHMoXG4gICAgICAgICAgJ3RlbnRhdGl2ZScsXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIFsuLi5jb29yZGluYXRlcywgZmlyc3RDb29yZHNdLFxuICAgICAgICAgIHVuY29tbWl0dGVkU3R5bGVcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgcmV0dXJuIFtmaWxsLCBjb21taXR0ZWRQYXRoLCB1bmNvbW1pdHRlZFBhdGgsIGNsb3NpbmdQYXRoXS5maWx0ZXIoQm9vbGVhbik7XG4gIH07XG5cbiAgX3JlbmRlclRvb2x0aXBzID0gKHRvb2x0aXBzOiBUb29sdGlwW10pID0+IHtcbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB0aGlzLl9nZXRTdHlsZVByb3AodGhpcy5wcm9wcy50b29sdGlwU3R5bGU/LnRleHQsIG51bGwpO1xuICAgIGNvbnN0IGJnU3R5bGUgPSB0aGlzLl9nZXRTdHlsZVByb3AodGhpcy5wcm9wcy50b29sdGlwU3R5bGU/LnJlY3QsIG51bGwpO1xuICAgIHJldHVybiAoXG4gICAgICA8Z1xuICAgICAgICBrZXk9XCJmZWF0dXJlLXRvb2x0aXBzXCJcbiAgICAgICAgcmVmPXsoZykgPT4ge1xuICAgICAgICAgIHRoaXMuX3Rvb2x0aXBzUmVmID0gZztcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Rvb2x0aXBzLm1hcCgodG9vbHRpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtS2V5ID0gYCR7RUxFTUVOVF9UWVBFLlRPT0xUSVB9LiR7aW5kZXh9YDtcbiAgICAgICAgICBjb25zdCBzY3JlZW5Db29yZHMgPSB0aGlzLnByb2plY3QoW3Rvb2x0aXAucG9zaXRpb25bMF0sIHRvb2x0aXAucG9zaXRpb25bMV1dKTtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IChcbiAgICAgICAgICAgIDx0ZXh0IGlkPXtlbGVtS2V5fSB4PXtzY3JlZW5Db29yZHNbMF19IHk9e3NjcmVlbkNvb3Jkc1sxXX0gc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgIHt0b29sdGlwLnRleHR9XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBleHRlbnRzID0gdGhpcy5zdGF0ZS50ZXh0RXh0ZW50c1tlbGVtS2V5XTtcbiAgICAgICAgICBjb25zdCBtYXJnaW4gPSA4O1xuICAgICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBleHRlbnRzID8gKFxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgeD17ZXh0ZW50cy54IC0gbWFyZ2lufVxuICAgICAgICAgICAgICB5PXtleHRlbnRzLnkgLSBtYXJnaW59XG4gICAgICAgICAgICAgIHdpZHRoPXtleHRlbnRzLndpZHRoICsgMiAqIG1hcmdpbn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtleHRlbnRzLmhlaWdodCArIDIgKiBtYXJnaW59XG4gICAgICAgICAgICAgIHN0eWxlPXtiZ1N0eWxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGcga2V5PXtlbGVtS2V5fT5cbiAgICAgICAgICAgICAge2JhY2tncm91bmR9XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZz5cbiAgICApO1xuICB9O1xuXG4gIF9yZW5kZXJHdWlkZXMgPSAoZ3VpZGVGZWF0dXJlczogRmVhdHVyZVtdKSA9PiB7XG4gICAgY29uc3QgZmVhdHVyZXMgPSB0aGlzLmdldEZlYXR1cmVzKCk7XG4gICAgY29uc3QgY3Vyc29yRWRpdEhhbmRsZSA9XG4gICAgICBndWlkZUZlYXR1cmVzICYmXG4gICAgICBndWlkZUZlYXR1cmVzLmZpbmQoKGYpID0+IGYucHJvcGVydGllcy5ndWlkZVR5cGUgPT09IEdVSURFX1RZUEUuQ1VSU09SX0VESVRfSEFORExFKTtcbiAgICBjb25zdCB0ZW50YXRpdmVGZWF0dXJlID0gZmVhdHVyZXMuZmluZCgoZikgPT4gZi5wcm9wZXJ0aWVzLmd1aWRlVHlwZSA9PT0gR1VJREVfVFlQRS5URU5UQVRJVkUpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxnIGtleT1cImZlYXR1cmUtZ3VpZGVzXCI+XG4gICAgICAgIHtndWlkZUZlYXR1cmVzLm1hcCgoZ3VpZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBndWlkZVR5cGUgPSBndWlkZS5wcm9wZXJ0aWVzLmd1aWRlVHlwZTtcbiAgICAgICAgICBzd2l0Y2ggKGd1aWRlVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBHVUlERV9UWVBFLlRFTlRBVElWRTpcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclRlbnRhdGl2ZUZlYXR1cmUoZ3VpZGUsIGN1cnNvckVkaXRIYW5kbGUpO1xuICAgICAgICAgICAgY2FzZSBHVUlERV9UWVBFLkVESVRfSEFORExFOlxuICAgICAgICAgICAgY2FzZSBHVUlERV9UWVBFLkNVUlNPUl9FRElUX0hBTkRMRTpcbiAgICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBndWlkZS5wcm9wZXJ0aWVzLnNoYXBlIHx8IGd1aWRlLmdlb21ldHJ5LnR5cGU7XG4gICAgICAgICAgICAgIC8vIFRPRE8gdGhpcyBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGZpeCBlZGl0aW5nIG1vZGVcbiAgICAgICAgICAgICAgLy8gZG9uJ3QgcmVuZGVyIGN1cnNvciBmb3IgcmVjdGFuZ2xlXG4gICAgICAgICAgICAgIGlmIChzaGFwZSA9PT0gU0hBUEUuUkVDVEFOR0xFICYmIGd1aWRlLnByb3BlcnRpZXMuZWRpdEhhbmRsZVR5cGUgPT09ICdpbnRlcm1lZGlhdGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZSA9XG4gICAgICAgICAgICAgICAgKGZlYXR1cmVzICYmIGZlYXR1cmVzW2d1aWRlLnByb3BlcnRpZXMuZmVhdHVyZUluZGV4XSkgfHwgdGVudGF0aXZlRmVhdHVyZTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckVkaXRIYW5kbGUoZ3VpZGUsIGZlYXR1cmUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvZz5cbiAgICApO1xuICB9O1xuXG4gIF9yZW5kZXJQb2ludCA9IChmZWF0dXJlOiBGZWF0dXJlLCBpbmRleDogbnVtYmVyLCBwYXRoOiBzdHJpbmcpID0+IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgcmVuZGVyU3RhdGUgPSB0aGlzLl9nZXRGZWF0dXJlUmVuZGVyU3RhdGUoaW5kZXgpO1xuICAgIGNvbnN0IHsgZmVhdHVyZVN0eWxlLCBmZWF0dXJlU2hhcGUsIGNsaWNrUmFkaXVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNoYXBlID0gdGhpcy5fZ2V0U3R5bGVQcm9wKGZlYXR1cmVTaGFwZSwgeyBmZWF0dXJlLCBpbmRleCwgc3RhdGU6IHJlbmRlclN0YXRlIH0pO1xuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5fZ2V0U3R5bGVQcm9wKGZlYXR1cmVTdHlsZSwgeyBmZWF0dXJlLCBpbmRleCwgc3RhdGU6IHJlbmRlclN0YXRlIH0pO1xuXG4gICAgY29uc3QgZWxlbUtleSA9IGBmZWF0dXJlLiR7aW5kZXh9YDtcbiAgICBpZiAoc2hhcGUgPT09ICdyZWN0Jykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGcga2V5PXtlbGVtS2V5fSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtwYXRoWzBdWzBdfSwgJHtwYXRoWzBdWzFdfSlgfT5cbiAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgZGF0YS10eXBlPXtFTEVNRU5UX1RZUEUuRkVBVFVSRX1cbiAgICAgICAgICAgIGRhdGEtZmVhdHVyZS1pbmRleD17aW5kZXh9XG4gICAgICAgICAgICBrZXk9e2Ake2VsZW1LZXl9LmhpZGRlbmB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgICAgd2lkdGg6IGNsaWNrUmFkaXVzLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGNsaWNrUmFkaXVzLFxuICAgICAgICAgICAgICBmaWxsOiAnIzAwMCcsXG4gICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICBkYXRhLXR5cGU9e0VMRU1FTlRfVFlQRS5GRUFUVVJFfVxuICAgICAgICAgICAgZGF0YS1mZWF0dXJlLWluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIGtleT17ZWxlbUtleX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZyBrZXk9e2BmZWF0dXJlLiR7aW5kZXh9YH0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cGF0aFswXVswXX0sICR7cGF0aFswXVsxXX0pYH0+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBkYXRhLXR5cGU9e0VMRU1FTlRfVFlQRS5GRUFUVVJFfVxuICAgICAgICAgIGRhdGEtZmVhdHVyZS1pbmRleD17aW5kZXh9XG4gICAgICAgICAga2V5PXtgJHtlbGVtS2V5fS5oaWRkZW5gfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjeD17MH1cbiAgICAgICAgICBjeT17MH1cbiAgICAgICAgICByPXtjbGlja1JhZGl1c31cbiAgICAgICAgLz5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGRhdGEtdHlwZT17RUxFTUVOVF9UWVBFLkZFQVRVUkV9XG4gICAgICAgICAgZGF0YS1mZWF0dXJlLWluZGV4PXtpbmRleH1cbiAgICAgICAgICBrZXk9e2VsZW1LZXl9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIGN4PXswfVxuICAgICAgICAgIGN5PXswfVxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICk7XG4gIH07XG5cbiAgX3JlbmRlclBhdGggPSAoZmVhdHVyZTogRmVhdHVyZSwgaW5kZXg6IG51bWJlciwgcGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBmZWF0dXJlU3R5bGUsIGNsaWNrUmFkaXVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNlbGVjdGVkRmVhdHVyZUluZGV4ID0gdGhpcy5fZ2V0U2VsZWN0ZWRGZWF0dXJlSW5kZXgoKTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGluZGV4ID09PSBzZWxlY3RlZEZlYXR1cmVJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgcmVuZGVyU3RhdGUgPSB0aGlzLl9nZXRGZWF0dXJlUmVuZGVyU3RhdGUoaW5kZXgpO1xuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5fZ2V0U3R5bGVQcm9wKGZlYXR1cmVTdHlsZSwgeyBmZWF0dXJlLCBpbmRleCwgc3RhdGU6IHJlbmRlclN0YXRlIH0pO1xuXG4gICAgY29uc3QgZWxlbUtleSA9IGBmZWF0dXJlLiR7aW5kZXh9YDtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgPGcga2V5PXtlbGVtS2V5fT57dGhpcy5fcmVuZGVyU2VnbWVudHMoaW5kZXgsIGZlYXR1cmUuZ2VvbWV0cnkuY29vcmRpbmF0ZXMsIHN0eWxlKX08L2c+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGZpcnN0IDxwYXRoPiBpcyB0byBtYWtlIHBhdGggZWFzaWx5IGludGVyYWN0ZWQgd2l0aFxuICAgIHJldHVybiAoXG4gICAgICA8ZyBrZXk9e2VsZW1LZXl9PlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGRhdGEtdHlwZT17RUxFTUVOVF9UWVBFLkZFQVRVUkV9XG4gICAgICAgICAgZGF0YS1mZWF0dXJlLWluZGV4PXtpbmRleH1cbiAgICAgICAgICBrZXk9e2Ake2VsZW1LZXl9LmhpZGRlbmB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgc3Ryb2tlOiAncmdiYSgwLDAsMCwwKScsXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogY2xpY2tSYWRpdXMsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIH19XG4gICAgICAgICAgZD17cGF0aH1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkYXRhLXR5cGU9e0VMRU1FTlRfVFlQRS5GRUFUVVJFfVxuICAgICAgICAgIGRhdGEtZmVhdHVyZS1pbmRleD17aW5kZXh9XG4gICAgICAgICAga2V5PXtlbGVtS2V5fVxuICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICBkPXtwYXRofVxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICk7XG4gIH07XG5cbiAgX3JlbmRlclBvbHlnb24gPSAoZmVhdHVyZTogRmVhdHVyZSwgaW5kZXg6IG51bWJlciwgcGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBmZWF0dXJlU3R5bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlSW5kZXggPSB0aGlzLl9nZXRTZWxlY3RlZEZlYXR1cmVJbmRleCgpO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gaW5kZXggPT09IHNlbGVjdGVkRmVhdHVyZUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCByZW5kZXJTdGF0ZSA9IHRoaXMuX2dldEZlYXR1cmVSZW5kZXJTdGF0ZShpbmRleCk7XG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLl9nZXRTdHlsZVByb3AoZmVhdHVyZVN0eWxlLCB7IGZlYXR1cmUsIGluZGV4LCBzdGF0ZTogcmVuZGVyU3RhdGUgfSk7XG5cbiAgICBjb25zdCBlbGVtS2V5ID0gYGZlYXR1cmUuJHtpbmRleH1gO1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRGZWF0dXJlQ29vcmRpbmF0ZXMoZmVhdHVyZSk7XG4gICAgICBpZiAoIWNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGcga2V5PXtlbGVtS2V5fT5cbiAgICAgICAgICB7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgdGhpcy5fcmVuZGVyRmlsbChpbmRleCwgY29vcmRpbmF0ZXMsIHN0eWxlKX1cbiAgICAgICAgICB7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRoaXMuX3JlbmRlclNlZ21lbnRzKGluZGV4LCBjb29yZGluYXRlcywgc3R5bGUpfVxuICAgICAgICA8L2c+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8cGF0aFxuICAgICAgICBkYXRhLXR5cGU9e0VMRU1FTlRfVFlQRS5GRUFUVVJFfVxuICAgICAgICBkYXRhLWZlYXR1cmUtaW5kZXg9e2luZGV4fVxuICAgICAgICBrZXk9e2VsZW1LZXl9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgZD17cGF0aH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICBfcmVuZGVyRmVhdHVyZSA9IChmZWF0dXJlOiBGZWF0dXJlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRGZWF0dXJlQ29vcmRpbmF0ZXMoZmVhdHVyZSk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGlmICghY29vcmRpbmF0ZXMgfHwgIWNvb3JkaW5hdGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHtcbiAgICAgIHByb3BlcnRpZXMsXG4gICAgICBnZW9tZXRyeTogeyB0eXBlOiBnZW9qc29uVHlwZSB9LFxuICAgIH0gPSBmZWF0dXJlO1xuXG4gICAgY29uc3Qgc2hhcGUgPSBwcm9wZXJ0aWVzPy5zaGFwZTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgcGF0aCA9IHRoaXMuX2dldFBhdGhJblNjcmVlbkNvb3Jkcyhjb29yZGluYXRlcywgZ2VvanNvblR5cGUpO1xuICAgIGlmICghcGF0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgdHlwZSA9IHNoYXBlIHx8IGdlb2pzb25UeXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBTSEFQRS5QT0lOVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclBvaW50KGZlYXR1cmUsIGluZGV4LCBwYXRoKTtcbiAgICAgIGNhc2UgU0hBUEUuTElORV9TVFJJTkc6XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJQYXRoKGZlYXR1cmUsIGluZGV4LCBwYXRoKTtcblxuICAgICAgY2FzZSBTSEFQRS5DSVJDTEU6XG4gICAgICBjYXNlIFNIQVBFLlBPTFlHT046XG4gICAgICBjYXNlIFNIQVBFLlJFQ1RBTkdMRTpcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlclBvbHlnb24oZmVhdHVyZSwgaW5kZXgsIHBhdGgpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgX3JlbmRlckNhbnZhcyA9ICgpID0+IHtcbiAgICBjb25zdCBmZWF0dXJlcyA9IHRoaXMuZ2V0RmVhdHVyZXMoKTtcbiAgICBjb25zdCBndWlkZXMgPSB0aGlzLl9tb2RlSGFuZGxlciAmJiB0aGlzLl9tb2RlSGFuZGxlci5nZXRHdWlkZXModGhpcy5nZXRNb2RlUHJvcHMoKSk7XG4gICAgY29uc3QgZ3VpZGVGZWF0dXJlcyA9IGd1aWRlcyAmJiBndWlkZXMuZmVhdHVyZXM7XG4gICAgY29uc3QgdG9vbHRpcHMgPSB0aGlzLl9tb2RlSGFuZGxlciAmJiB0aGlzLl9tb2RlSGFuZGxlci5nZXRUb29sdGlwcyh0aGlzLmdldE1vZGVQcm9wcygpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8c3ZnIGtleT1cImRyYXctY2FudmFzXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICB7ZmVhdHVyZXMgJiYgZmVhdHVyZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGcga2V5PVwiZmVhdHVyZS1ncm91cFwiPntmZWF0dXJlcy5tYXAodGhpcy5fcmVuZGVyRmVhdHVyZSl9PC9nPlxuICAgICAgICApfVxuICAgICAgICB7Z3VpZGVGZWF0dXJlcyAmJiBndWlkZUZlYXR1cmVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxnIGtleT1cImZlYXR1cmUtZ3VpZGVzXCI+e3RoaXMuX3JlbmRlckd1aWRlcyhndWlkZUZlYXR1cmVzKX08L2c+XG4gICAgICAgICl9XG4gICAgICAgIHt0b29sdGlwcyAmJiB0aGlzLl9yZW5kZXJUb29sdGlwcyh0b29sdGlwcyl9XG4gICAgICA8L3N2Zz5cbiAgICApO1xuICB9O1xuXG4gIF9yZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSAodGhpcy5fY29udGV4dCAmJiB0aGlzLl9jb250ZXh0LnZpZXdwb3J0KSB8fCB7fTtcbiAgICBjb25zdCB7IHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB7IHdpZHRoID0gMCwgaGVpZ2h0ID0gMCB9ID0gdmlld3BvcnQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJlZGl0b3JcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgfX1cbiAgICAgICAgcmVmPXsoXykgPT4ge1xuICAgICAgICAgIHRoaXMuX2NvbnRhaW5lclJlZiA9IF87XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHt0aGlzLl9yZW5kZXJDYW52YXMoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59XG4iXX0=