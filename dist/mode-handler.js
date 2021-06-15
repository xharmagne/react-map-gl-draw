"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactMapGl = require("react-map-gl");

var React = _interopRequireWildcard(require("react"));

var _editModes = require("@nebula.gl/edit-modes");

var _editingMode = _interopRequireDefault(require("./edit-modes/editing-mode"));

var _utils = require("./edit-modes/utils");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultProps = {
  selectable: true,
  mode: null,
  features: null,
  onSelect: null,
  onUpdate: null,
  onUpdateCursor: function onUpdateCursor() {}
};
var defaultState = {
  featureCollection: new _editModes.ImmutableFeatureCollection({
    type: 'FeatureCollection',
    features: []
  }),
  selectedFeatureIndex: null,
  selectedEditHandleIndexes: [],
  // index, isGuide, mapCoords, screenCoords
  hovered: null,
  isDragging: false,
  didDrag: false,
  lastPointerMoveEvent: null,
  pointerDownPicks: null,
  pointerDownScreenCoords: null,
  pointerDownMapCoords: null,
  textExtents: {}
};

var ModeHandler = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ModeHandler, _React$PureComponent);

  var _super = _createSuper(ModeHandler);

  function ModeHandler(props) {
    var _this;

    _classCallCheck(this, ModeHandler);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_events", void 0);

    _defineProperty(_assertThisInitialized(_this), "_eventsRegistered", void 0);

    _defineProperty(_assertThisInitialized(_this), "_modeHandler", void 0);

    _defineProperty(_assertThisInitialized(_this), "_context", void 0);

    _defineProperty(_assertThisInitialized(_this), "_containerRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "getFeatures", function () {
      var featureCollection = _this._getFeatureCollection();

      featureCollection = featureCollection && featureCollection.getObject();
      return featureCollection && featureCollection.features;
    });

    _defineProperty(_assertThisInitialized(_this), "addFeatures", function (features) {
      var featureCollection = _this._getFeatureCollection();

      if (featureCollection) {
        if (!Array.isArray(features)) {
          features = [features];
        }

        featureCollection = featureCollection.addFeatures(features);

        _this.setState({
          featureCollection: featureCollection
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "deleteFeatures", function (featureIndexes) {
      var featureCollection = _this._getFeatureCollection();

      var selectedFeatureIndex = _this._getSelectedFeatureIndex();

      if (featureCollection) {
        if (!Array.isArray(featureIndexes)) {
          featureIndexes = [featureIndexes];
        }

        featureCollection = featureCollection.deleteFeatures(featureIndexes);
        var newState = {
          featureCollection: featureCollection
        };

        if (featureIndexes.findIndex(function (index) {
          return selectedFeatureIndex === index;
        }) >= 0) {
          newState.selectedFeatureIndex = null;
          newState.selectedEditHandleIndexes = [];
        }

        _this.setState(newState);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "deleteHandles", function (featureIndex, handleIndexes) {
      var featureCollection = _this._getFeatureCollection();

      if (!featureIndex) {
        featureIndex = _this._getSelectedFeatureIndex();
      }

      if (!handleIndexes) {
        if (!_this.state.selectedEditHandleIndexes.length) {
          return featureCollection;
        }

        handleIndexes = _this.state.selectedEditHandleIndexes;
      }

      var features = featureCollection.getObject().features; // It seems currently only POLYGON and LINE_STRING are supported
      // see handleClick event in editing-mode.ts

      var allowedTypes = [_constants.GEOJSON_TYPE.LINE_STRING, _constants.GEOJSON_TYPE.POLYGON];

      if (featureIndex !== null && features[featureIndex] && allowedTypes.includes(features[featureIndex].geometry.type)) {
        // Remove first indexes in DESC order
        handleIndexes.sort(function (n1, n2) {
          return n2 - n1;
        });
        var positionIndexes;

        if (features[featureIndex].geometry.type === _constants.GEOJSON_TYPE.LINE_STRING) {
          positionIndexes = handleIndexes.map(function (pos) {
            return [pos];
          });
        } else {
          // Currently only spport to handle simple polygons, thus pos 0
          positionIndexes = handleIndexes.map(function (pos) {
            return [0, pos];
          });
        }

        positionIndexes.forEach(function (pos) {
          featureCollection = featureCollection.removePosition(featureIndex, pos);
        });

        var selectedEditHandleIndexes = _this.state.selectedEditHandleIndexes.filter(function (handleIndex) {
          return !handleIndexes.includes(handleIndex);
        });

        _this.setState({
          featureCollection: featureCollection,
          selectedEditHandleIndexes: selectedEditHandleIndexes
        });
      }

      return featureCollection;
    });

    _defineProperty(_assertThisInitialized(_this), "_getMemorizedFeatureCollection", (0, _editModes._memoize)(function (_ref) {
      var propsFeatures = _ref.propsFeatures,
          stateFeatures = _ref.stateFeatures;
      var features = propsFeatures || stateFeatures; // Any changes in ImmutableFeatureCollection will create a new object

      if (features instanceof _editModes.ImmutableFeatureCollection) {
        return features;
      }

      if (features && features.type === 'FeatureCollection') {
        return new _editModes.ImmutableFeatureCollection({
          type: 'FeatureCollection',
          features: features.features
        });
      }

      return new _editModes.ImmutableFeatureCollection({
        type: 'FeatureCollection',
        features: features || []
      });
    }));

    _defineProperty(_assertThisInitialized(_this), "_getFeatureCollection", function () {
      return _this._getMemorizedFeatureCollection({
        propsFeatures: _this.props.features,
        stateFeatures: _this.state.featureCollection
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_setupModeHandler", function () {
      var mode = _this.props.mode;
      _this._modeHandler = mode;

      if (!mode) {
        _this._degregisterEvents();

        return;
      }

      _this._registerEvents();
    });

    _defineProperty(_assertThisInitialized(_this), "_clearEditingState", function () {
      _this.setState({
        selectedFeatureIndex: null,
        selectedEditHandleIndexes: [],
        hovered: null,
        pointerDownPicks: null,
        pointerDownScreenCoords: null,
        pointerDownMapCoords: null,
        isDragging: false,
        didDrag: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_getSelectedFeatureIndex", function () {
      if ('selectedFeatureIndex' in _this.props) {
        return _this.props.selectedFeatureIndex;
      }

      return _this.state.selectedFeatureIndex;
    });

    _defineProperty(_assertThisInitialized(_this), "_onSelect", function (selected) {
      var selectedFeatureIndex = selected.selectedFeatureIndex;
      var selectedEditHandleIndexes = _this.state.selectedEditHandleIndexes;
      var newState = {
        selectedFeatureIndex: selectedFeatureIndex,
        selectedEditHandleIndexes: selectedEditHandleIndexes
      };

      if (_this.state.selectedFeatureIndex !== selectedFeatureIndex) {
        newState.selectedEditHandleIndexes = [];
      }

      _this.setState(newState);

      if (_this.props.onSelect) {
        _this.props.onSelect(selected);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onEdit", function (editAction) {
      var editType = editAction.editType,
          updatedData = editAction.updatedData,
          editContext = editAction.editContext;
      var newState = {
        featureCollection: new _editModes.ImmutableFeatureCollection(updatedData)
      };

      if (editType === _constants.EDIT_TYPE.ADD_POSITION) {
        // @ts-ignore
        newState.selectedEditHandleIndexes = [];
      }

      _this.setState(newState);

      switch (editType) {
        case _constants.EDIT_TYPE.ADD_FEATURE:
          _this._onSelect({
            selectedFeature: null,
            selectedFeatureIndex: null,
            selectedEditHandleIndex: null,
            selectedEditHandleIndexes: [],
            screenCoords: editContext && editContext.screenCoords,
            mapCoords: editContext && editContext.mapCoords
          });

          break;

        default:
      }

      if (_this.props.onUpdate) {
        _this.props.onUpdate({
          data: updatedData && updatedData.features,
          editType: editType,
          editContext: editContext
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_degregisterEvents", function () {
      var eventManager = _this._context && _this._context.eventManager;

      if (!_this._events || !eventManager) {
        return;
      }

      if (_this._eventsRegistered) {
        eventManager.off(_this._events);
        _this._eventsRegistered = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_registerEvents", function () {
      var ref = _this._containerRef;
      var eventManager = _this._context && _this._context.eventManager;

      if (!_this._events || !ref || !eventManager) {
        return;
      }

      if (_this._eventsRegistered) {
        return;
      }

      eventManager.on(_this._events, ref);
      _this._eventsRegistered = true;
    });

    _defineProperty(_assertThisInitialized(_this), "_onEvent", function (handler, evt, stopPropagation) {
      var event = _this._getEvent(evt);

      handler(event);

      if (stopPropagation) {
        evt.stopImmediatePropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onClick", function (event) {
      var modeProps = _this.getModeProps(); // TODO refactor EditingMode
      // @ts-ignore


      if (_this._modeHandler instanceof _editingMode["default"] || _this.props.selectable) {
        var mapCoords = event.mapCoords,
            screenCoords = event.screenCoords;
        var pickedObject = event.picks && event.picks[0];

        var selectedEditHandleIndexes = _toConsumableArray(_this.state.selectedEditHandleIndexes); // @ts-ignore


        if (pickedObject && (0, _utils.isNumeric)(pickedObject.featureIndex)) {
          var handleIndex = // @ts-ignore
          pickedObject.type === _constants.ELEMENT_TYPE.EDIT_HANDLE ? pickedObject.index : null;
          var index = selectedEditHandleIndexes.indexOf(handleIndex);

          if (handleIndex !== null) {
            if (index !== -1) {
              selectedEditHandleIndexes.splice(index, 1);
            } else {
              selectedEditHandleIndexes.push(handleIndex);
            }

            _this.setState({
              selectedEditHandleIndexes: selectedEditHandleIndexes
            });
          } // @ts-ignore


          var selectedFeatureIndex = pickedObject.featureIndex;

          _this._onSelect({
            selectedFeature: pickedObject.object,
            selectedFeatureIndex: selectedFeatureIndex,
            selectedEditHandleIndex: handleIndex,
            selectedEditHandleIndexes: selectedEditHandleIndexes,
            // @ts-ignore
            mapCoords: mapCoords,
            screenCoords: screenCoords
          });
        } else {
          _this._onSelect({
            selectedFeature: null,
            selectedFeatureIndex: null,
            selectedEditHandleIndex: null,
            selectedEditHandleIndexes: selectedEditHandleIndexes,
            // @ts-ignore
            mapCoords: mapCoords,
            screenCoords: screenCoords
          });
        }
      }

      _this._modeHandler.handleClick(event, modeProps);
    });

    _defineProperty(_assertThisInitialized(_this), "_onDblclick", function (event) {
      if ((0, _utils.isNumeric)(_this._getSelectedFeatureIndex())) {
        event.sourceEvent.stopImmediatePropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onPointerMove", function (event) {
      // hovering
      var hovered = _this._getHoverState(event);

      var _this$state = _this.state,
          isDragging = _this$state.isDragging,
          didDrag = _this$state.didDrag,
          pointerDownPicks = _this$state.pointerDownPicks,
          pointerDownScreenCoords = _this$state.pointerDownScreenCoords,
          pointerDownMapCoords = _this$state.pointerDownMapCoords;

      if (isDragging && !didDrag && pointerDownScreenCoords) {
        var dx = event.screenCoords[0] - pointerDownScreenCoords[0];
        var dy = event.screenCoords[1] - pointerDownScreenCoords[1];

        if (dx * dx + dy * dy > 5) {
          _this.setState({
            didDrag: true
          });
        }
      }

      var pointerMoveEvent = _objectSpread(_objectSpread({}, event), {}, {
        isDragging: isDragging,
        pointerDownPicks: pointerDownPicks,
        pointerDownScreenCoords: pointerDownScreenCoords,
        pointerDownMapCoords: pointerDownMapCoords,
        cancelPan: event.sourceEvent.stopImmediatePropagation
      });

      var modeProps = _this.getModeProps();

      _this._modeHandler.handlePointerMove(pointerMoveEvent, modeProps);

      if (_this.state.didDrag) {
        _this._modeHandler.handleDragging(pointerMoveEvent, modeProps);
      }

      _this.setState({
        hovered: hovered,
        // @ts-ignore
        lastPointerMoveEvent: pointerMoveEvent
      });
    });

    _defineProperty(_assertThisInitialized(_this), "_onPointerDown", function (event) {
      var dragToDraw = _this.props.modeConfig && _this.props.modeConfig.dragToDraw;
      var isDragging = Boolean(event.picks && event.picks[0]) || dragToDraw;

      var startDraggingEvent = _objectSpread(_objectSpread({}, event), {}, {
        isDragging: isDragging,
        pointerDownScreenCoords: event.screenCoords,
        pointerDownMapCoords: event.mapCoords,
        cancelPan: event.sourceEvent.stopImmediatePropagation
      });

      var newState = {
        isDragging: isDragging,
        pointerDownPicks: event.picks,
        pointerDownScreenCoords: event.screenCoords,
        pointerDownMapCoords: event.mapCoords
      }; // @ts-ignore

      _this.setState(newState);

      var modeProps = _this.getModeProps();

      _this._modeHandler.handleStartDragging(startDraggingEvent, modeProps);
    });

    _defineProperty(_assertThisInitialized(_this), "_onPointerUp", function (event) {
      var _this$state2 = _this.state,
          didDrag = _this$state2.didDrag,
          pointerDownPicks = _this$state2.pointerDownPicks,
          pointerDownScreenCoords = _this$state2.pointerDownScreenCoords,
          pointerDownMapCoords = _this$state2.pointerDownMapCoords;

      var stopDraggingEvent = _objectSpread(_objectSpread({}, event), {}, {
        isDragging: false,
        pointerDownPicks: didDrag ? pointerDownPicks : null,
        pointerDownScreenCoords: didDrag ? pointerDownScreenCoords : null,
        pointerDownMapCoords: didDrag ? pointerDownMapCoords : null,
        cancelPan: event.sourceEvent.cancelPan
      });

      var newState = {
        isDragging: false,
        didDrag: false,
        pointerDownPicks: null,
        pointerDownScreenCoords: null,
        pointerDownMapCoords: null
      };

      _this.setState(newState);

      var modeProps = _this.getModeProps();

      if (didDrag) {
        _this._modeHandler.handleStopDragging(stopDraggingEvent, modeProps);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onPan", function (event) {
      var isDragging = _this.state.isDragging;

      if (isDragging) {
        event.sourceEvent.stopImmediatePropagation();
      }

      if (_this._modeHandler.handlePan) {
        _this._modeHandler.handlePan(event, _this.getModeProps());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "project", function (pt) {
      var viewport = _this._context && _this._context.viewport;
      return viewport && viewport.project(pt);
    });

    _defineProperty(_assertThisInitialized(_this), "unproject", function (pt) {
      var viewport = _this._context && _this._context.viewport;
      return viewport && viewport.unproject(pt);
    });

    _defineProperty(_assertThisInitialized(_this), "_getHoverState", function (event) {
      var object = event.picks && event.picks[0];

      if (!object) {
        return null;
      }

      return _objectSpread({
        screenCoords: event.screenCoords,
        mapCoords: event.mapCoords
      }, object);
    });

    _this.state = defaultState;
    _this._eventsRegistered = false;
    _this._events = {
      anyclick: function anyclick(evt) {
        return _this._onEvent(_this._onClick, evt, true);
      },
      dblclick: function dblclick(evt) {
        return _this._onEvent(_this._onDblclick, evt, false);
      },
      click: function click(evt) {
        return evt.stopImmediatePropagation();
      },
      pointermove: function pointermove(evt) {
        return _this._onEvent(_this._onPointerMove, evt, false);
      },
      pointerdown: function pointerdown(evt) {
        return _this._onEvent(_this._onPointerDown, evt, true);
      },
      pointerup: function pointerup(evt) {
        return _this._onEvent(_this._onPointerUp, evt, true);
      },
      panmove: function panmove(evt) {
        return _this._onEvent(_this._onPan, evt, false);
      },
      panstart: function panstart(evt) {
        return _this._onEvent(_this._onPan, evt, false);
      },
      panend: function panend(evt) {
        return _this._onEvent(_this._onPan, evt, false);
      }
    };
    return _this;
  }

  _createClass(ModeHandler, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setupModeHandler();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, _) {
      if (prevProps.mode !== this.props.mode) {
        this._clearEditingState();

        this._setupModeHandler();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._degregisterEvents();
    }
  }, {
    key: "getModeProps",
    value: function getModeProps() {
      var featureCollection = this._getFeatureCollection();

      var lastPointerMoveEvent = this.state.lastPointerMoveEvent;

      var selectedFeatureIndex = this._getSelectedFeatureIndex();

      var selectedEditHandleIndexes = this.state.selectedEditHandleIndexes;
      var viewport = this._context && this._context.viewport;
      return {
        data: featureCollection && featureCollection.featureCollection,
        selectedIndexes: (0, _utils.isNumeric)(selectedFeatureIndex) ? [selectedFeatureIndex] : [],
        selectedEditHandleIndexes: selectedEditHandleIndexes,
        lastPointerMoveEvent: lastPointerMoveEvent,
        viewport: viewport,
        featuresDraggable: this.props.featuresDraggable,
        onEdit: this._onEdit,
        onUpdateCursor: this.props.onUpdateCursor,
        modeConfig: this.props.modeConfig
      };
    }
    /* MEMORIZERS */

  }, {
    key: "_getEvent",
    value: function _getEvent(evt) {
      var features = this.getFeatures();

      var guides = this._modeHandler.getGuides(this.getModeProps());

      var picked = (0, _utils.parseEventElement)(evt, features, guides && guides.features);
      var screenCoords = (0, _utils.getScreenCoords)(evt); // @ts-ignore

      var mapCoords = this.unproject(screenCoords);
      return {
        picks: picked ? [picked] : null,
        screenCoords: screenCoords,
        mapCoords: mapCoords,
        sourceEvent: evt
      };
    }
  }, {
    key: "_render",
    value: function _render() {
      return /*#__PURE__*/React.createElement("div", null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(_reactMapGl._MapContext.Consumer, null, function (context) {
        _this2._context = context;
        var viewport = context && context.viewport;

        if (!viewport || viewport.height <= 0 || viewport.width <= 0) {
          return null;
        }

        return _this2._render();
      });
    }
  }]);

  return ModeHandler;
}(React.PureComponent);

exports["default"] = ModeHandler;

_defineProperty(ModeHandler, "displayName", 'ModeHandler');

_defineProperty(ModeHandler, "defaultProps", defaultProps);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb2RlLWhhbmRsZXIudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRQcm9wcyIsInNlbGVjdGFibGUiLCJtb2RlIiwiZmVhdHVyZXMiLCJvblNlbGVjdCIsIm9uVXBkYXRlIiwib25VcGRhdGVDdXJzb3IiLCJkZWZhdWx0U3RhdGUiLCJmZWF0dXJlQ29sbGVjdGlvbiIsIkltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uIiwidHlwZSIsInNlbGVjdGVkRmVhdHVyZUluZGV4Iiwic2VsZWN0ZWRFZGl0SGFuZGxlSW5kZXhlcyIsImhvdmVyZWQiLCJpc0RyYWdnaW5nIiwiZGlkRHJhZyIsImxhc3RQb2ludGVyTW92ZUV2ZW50IiwicG9pbnRlckRvd25QaWNrcyIsInBvaW50ZXJEb3duU2NyZWVuQ29vcmRzIiwicG9pbnRlckRvd25NYXBDb29yZHMiLCJ0ZXh0RXh0ZW50cyIsIk1vZGVIYW5kbGVyIiwicHJvcHMiLCJfZ2V0RmVhdHVyZUNvbGxlY3Rpb24iLCJnZXRPYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJhZGRGZWF0dXJlcyIsInNldFN0YXRlIiwiZmVhdHVyZUluZGV4ZXMiLCJfZ2V0U2VsZWN0ZWRGZWF0dXJlSW5kZXgiLCJkZWxldGVGZWF0dXJlcyIsIm5ld1N0YXRlIiwiZmluZEluZGV4IiwiaW5kZXgiLCJmZWF0dXJlSW5kZXgiLCJoYW5kbGVJbmRleGVzIiwic3RhdGUiLCJsZW5ndGgiLCJhbGxvd2VkVHlwZXMiLCJHRU9KU09OX1RZUEUiLCJMSU5FX1NUUklORyIsIlBPTFlHT04iLCJpbmNsdWRlcyIsImdlb21ldHJ5Iiwic29ydCIsIm4xIiwibjIiLCJwb3NpdGlvbkluZGV4ZXMiLCJtYXAiLCJwb3MiLCJmb3JFYWNoIiwicmVtb3ZlUG9zaXRpb24iLCJmaWx0ZXIiLCJoYW5kbGVJbmRleCIsInByb3BzRmVhdHVyZXMiLCJzdGF0ZUZlYXR1cmVzIiwiX2dldE1lbW9yaXplZEZlYXR1cmVDb2xsZWN0aW9uIiwiX21vZGVIYW5kbGVyIiwiX2RlZ3JlZ2lzdGVyRXZlbnRzIiwiX3JlZ2lzdGVyRXZlbnRzIiwic2VsZWN0ZWQiLCJlZGl0QWN0aW9uIiwiZWRpdFR5cGUiLCJ1cGRhdGVkRGF0YSIsImVkaXRDb250ZXh0IiwiRURJVF9UWVBFIiwiQUREX1BPU0lUSU9OIiwiQUREX0ZFQVRVUkUiLCJfb25TZWxlY3QiLCJzZWxlY3RlZEZlYXR1cmUiLCJzZWxlY3RlZEVkaXRIYW5kbGVJbmRleCIsInNjcmVlbkNvb3JkcyIsIm1hcENvb3JkcyIsImRhdGEiLCJldmVudE1hbmFnZXIiLCJfY29udGV4dCIsIl9ldmVudHMiLCJfZXZlbnRzUmVnaXN0ZXJlZCIsIm9mZiIsInJlZiIsIl9jb250YWluZXJSZWYiLCJvbiIsImhhbmRsZXIiLCJldnQiLCJzdG9wUHJvcGFnYXRpb24iLCJldmVudCIsIl9nZXRFdmVudCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIm1vZGVQcm9wcyIsImdldE1vZGVQcm9wcyIsIkVkaXRpbmdNb2RlIiwicGlja2VkT2JqZWN0IiwicGlja3MiLCJFTEVNRU5UX1RZUEUiLCJFRElUX0hBTkRMRSIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwib2JqZWN0IiwiaGFuZGxlQ2xpY2siLCJzb3VyY2VFdmVudCIsIl9nZXRIb3ZlclN0YXRlIiwiZHgiLCJkeSIsInBvaW50ZXJNb3ZlRXZlbnQiLCJjYW5jZWxQYW4iLCJoYW5kbGVQb2ludGVyTW92ZSIsImhhbmRsZURyYWdnaW5nIiwiZHJhZ1RvRHJhdyIsIm1vZGVDb25maWciLCJCb29sZWFuIiwic3RhcnREcmFnZ2luZ0V2ZW50IiwiaGFuZGxlU3RhcnREcmFnZ2luZyIsInN0b3BEcmFnZ2luZ0V2ZW50IiwiaGFuZGxlU3RvcERyYWdnaW5nIiwiaGFuZGxlUGFuIiwicHQiLCJ2aWV3cG9ydCIsInByb2plY3QiLCJ1bnByb2plY3QiLCJhbnljbGljayIsIl9vbkV2ZW50IiwiX29uQ2xpY2siLCJkYmxjbGljayIsIl9vbkRibGNsaWNrIiwiY2xpY2siLCJwb2ludGVybW92ZSIsIl9vblBvaW50ZXJNb3ZlIiwicG9pbnRlcmRvd24iLCJfb25Qb2ludGVyRG93biIsInBvaW50ZXJ1cCIsIl9vblBvaW50ZXJVcCIsInBhbm1vdmUiLCJfb25QYW4iLCJwYW5zdGFydCIsInBhbmVuZCIsIl9zZXR1cE1vZGVIYW5kbGVyIiwicHJldlByb3BzIiwiXyIsIl9jbGVhckVkaXRpbmdTdGF0ZSIsInNlbGVjdGVkSW5kZXhlcyIsImZlYXR1cmVzRHJhZ2dhYmxlIiwib25FZGl0IiwiX29uRWRpdCIsImdldEZlYXR1cmVzIiwiZ3VpZGVzIiwiZ2V0R3VpZGVzIiwicGlja2VkIiwiY29udGV4dCIsImhlaWdodCIsIndpZHRoIiwiX3JlbmRlciIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBV0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLEVBQUFBLFVBQVUsRUFBRSxJQURPO0FBRW5CQyxFQUFBQSxJQUFJLEVBQUUsSUFGYTtBQUduQkMsRUFBQUEsUUFBUSxFQUFFLElBSFM7QUFJbkJDLEVBQUFBLFFBQVEsRUFBRSxJQUpTO0FBS25CQyxFQUFBQSxRQUFRLEVBQUUsSUFMUztBQU1uQkMsRUFBQUEsY0FBYyxFQUFFLDBCQUFNLENBQUU7QUFOTCxDQUFyQjtBQVNBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsaUJBQWlCLEVBQUUsSUFBSUMscUNBQUosQ0FBK0I7QUFDaERDLElBQUFBLElBQUksRUFBRSxtQkFEMEM7QUFFaERQLElBQUFBLFFBQVEsRUFBRTtBQUZzQyxHQUEvQixDQURBO0FBTW5CUSxFQUFBQSxvQkFBb0IsRUFBRSxJQU5IO0FBT25CQyxFQUFBQSx5QkFBeUIsRUFBRSxFQVBSO0FBU25CO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRSxJQVZVO0FBWW5CQyxFQUFBQSxVQUFVLEVBQUUsS0FaTztB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LENBQUNpQyxLQUFULElBQWtCLENBQTNELEVBQThEO0FBQzVELGlCQUFPLElBQVA7QUFDRDs7QUFFRCxlQUFPLE1BQUksQ0FBQ0MsT0FBTCxFQUFQO0FBQ0QsT0FWSCxDQURGO0FBY0Q7Ozs7RUF6ZnNDQyxLQUFLLENBQUNDLGE7Ozs7Z0JBQTFCckksVyxpQkFDRSxhOztnQkFERkEsVyxrQkFFR3JCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfTWFwQ29udGV4dCBhcyBNYXBDb250ZXh0LCBNYXBDb250ZXh0UHJvcHMgfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb24sXG4gIEZlYXR1cmUsXG4gIEZlYXR1cmVDb2xsZWN0aW9uLFxuICBFZGl0QWN0aW9uLFxuICBfbWVtb2l6ZSBhcyBtZW1vaXplLFxufSBmcm9tICdAbmVidWxhLmdsL2VkaXQtbW9kZXMnO1xuXG5pbXBvcnQgeyBNam9sbmlyRXZlbnQgfSBmcm9tICdtam9sbmlyLmpzJztcbmltcG9ydCB7IEJhc2VFdmVudCwgRWRpdG9yUHJvcHMsIEVkaXRvclN0YXRlLCBTZWxlY3RBY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IEVkaXRpbmdNb2RlIGZyb20gJy4vZWRpdC1tb2Rlcy9lZGl0aW5nLW1vZGUnO1xuaW1wb3J0IHsgZ2V0U2NyZWVuQ29vcmRzLCBwYXJzZUV2ZW50RWxlbWVudCwgaXNOdW1lcmljIH0gZnJvbSAnLi9lZGl0LW1vZGVzL3V0aWxzJztcbmltcG9ydCB7IEVESVRfVFlQRSwgRUxFTUVOVF9UWVBFLCBHRU9KU09OX1RZUEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgc2VsZWN0YWJsZTogdHJ1ZSxcbiAgbW9kZTogbnVsbCxcbiAgZmVhdHVyZXM6IG51bGwsXG4gIG9uU2VsZWN0OiBudWxsLFxuICBvblVwZGF0ZTogbnVsbCxcbiAgb25VcGRhdGVDdXJzb3I6ICgpID0+IHt9LFxufTtcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBmZWF0dXJlQ29sbGVjdGlvbjogbmV3IEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uKHtcbiAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgIGZlYXR1cmVzOiBbXSxcbiAgfSksXG5cbiAgc2VsZWN0ZWRGZWF0dXJlSW5kZXg6IG51bGwsXG4gIHNlbGVjdGVkRWRpdEhhbmRsZUluZGV4ZXM6IFtdLFxuXG4gIC8vIGluZGV4LCBpc0d1aWRlLCBtYXBDb29yZHMsIHNjcmVlbkNvb3Jkc1xuICBob3ZlcmVkOiBudWxsLFxuXG4gIGlzRHJhZ2dpbmc6IGZhbHNlLFxuICBkaWREcmFnOiBmYWxzZSxcblxuICBsYXN0UG9pbnRlck1vdmVFdmVudDogbnVsbCxcblxuICBwb2ludGVyRG93blBpY2tzOiBudWxsLFxuICBwb2ludGVyRG93blNjcmVlbkNvb3JkczogbnVsbCxcbiAgcG9pbnRlckRvd25NYXBDb29yZHM6IG51bGwsXG5cbiAgdGV4dEV4dGVudHM6IHt9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlSGFuZGxlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RWRpdG9yUHJvcHMsIEVkaXRvclN0YXRlPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdNb2RlSGFuZGxlcic7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IEVkaXRvclByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSBkZWZhdWx0U3RhdGU7XG4gICAgdGhpcy5fZXZlbnRzUmVnaXN0ZXJlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZXZlbnRzID0ge1xuICAgICAgYW55Y2xpY2s6IChldnQpID0+IHRoaXMuX29uRXZlbnQodGhpcy5fb25DbGljaywgZXZ0LCB0cnVlKSxcbiAgICAgIGRibGNsaWNrOiAoZXZ0KSA9PiB0aGlzLl9vbkV2ZW50KHRoaXMuX29uRGJsY2xpY2ssIGV2dCwgZmFsc2UpLFxuICAgICAgY2xpY2s6IChldnQpID0+IGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxcbiAgICAgIHBvaW50ZXJtb3ZlOiAoZXZ0KSA9PiB0aGlzLl9vbkV2ZW50KHRoaXMuX29uUG9pbnRlck1vdmUsIGV2dCwgZmFsc2UpLFxuICAgICAgcG9pbnRlcmRvd246IChldnQpID0+IHRoaXMuX29uRXZlbnQodGhpcy5fb25Qb2ludGVyRG93biwgZXZ0LCB0cnVlKSxcbiAgICAgIHBvaW50ZXJ1cDogKGV2dCkgPT4gdGhpcy5fb25FdmVudCh0aGlzLl9vblBvaW50ZXJVcCwgZXZ0LCB0cnVlKSxcbiAgICAgIHBhbm1vdmU6IChldnQpID0+IHRoaXMuX29uRXZlbnQodGhpcy5fb25QYW4sIGV2dCwgZmFsc2UpLFxuICAgICAgcGFuc3RhcnQ6IChldnQpID0+IHRoaXMuX29uRXZlbnQodGhpcy5fb25QYW4sIGV2dCwgZmFsc2UpLFxuICAgICAgcGFuZW5kOiAoZXZ0KSA9PiB0aGlzLl9vbkV2ZW50KHRoaXMuX29uUGFuLCBldnQsIGZhbHNlKSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fc2V0dXBNb2RlSGFuZGxlcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogRWRpdG9yUHJvcHMsIF86IEVkaXRvclN0YXRlKSB7XG4gICAgaWYgKHByZXZQcm9wcy5tb2RlICE9PSB0aGlzLnByb3BzLm1vZGUpIHtcbiAgICAgIHRoaXMuX2NsZWFyRWRpdGluZ1N0YXRlKCk7XG4gICAgICB0aGlzLl9zZXR1cE1vZGVIYW5kbGVyKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fZGVncmVnaXN0ZXJFdmVudHMoKTtcbiAgfVxuXG4gIF9ldmVudHM6IGFueTtcbiAgX2V2ZW50c1JlZ2lzdGVyZWQ6IGJvb2xlYW47XG4gIF9tb2RlSGFuZGxlcjogYW55O1xuICBfY29udGV4dDogTWFwQ29udGV4dFByb3BzIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgX2NvbnRhaW5lclJlZjogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4gIGdldEZlYXR1cmVzID0gKCkgPT4ge1xuICAgIGxldCBmZWF0dXJlQ29sbGVjdGlvbiA9IHRoaXMuX2dldEZlYXR1cmVDb2xsZWN0aW9uKCk7XG4gICAgZmVhdHVyZUNvbGxlY3Rpb24gPSBmZWF0dXJlQ29sbGVjdGlvbiAmJiBmZWF0dXJlQ29sbGVjdGlvbi5nZXRPYmplY3QoKTtcbiAgICByZXR1cm4gZmVhdHVyZUNvbGxlY3Rpb24gJiYgZmVhdHVyZUNvbGxlY3Rpb24uZmVhdHVyZXM7XG4gIH07XG5cbiAgYWRkRmVhdHVyZXMgPSAoZmVhdHVyZXM6IEZlYXR1cmUgfCBGZWF0dXJlW10pID0+IHtcbiAgICBsZXQgZmVhdHVyZUNvbGxlY3Rpb24gPSB0aGlzLl9nZXRGZWF0dXJlQ29sbGVjdGlvbigpO1xuICAgIGlmIChmZWF0dXJlQ29sbGVjdGlvbikge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGZlYXR1cmVzKSkge1xuICAgICAgICBmZWF0dXJlcyA9IFtmZWF0dXJlc107XG4gICAgICB9XG5cbiAgICAgIGZlYXR1cmVDb2xsZWN0aW9uID0gZmVhdHVyZUNvbGxlY3Rpb24uYWRkRmVhdHVyZXMoZmVhdHVyZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZlYXR1cmVDb2xsZWN0aW9uIH0pO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGVGZWF0dXJlcyA9IChmZWF0dXJlSW5kZXhlczogbnVtYmVyIHwgbnVtYmVyW10pID0+IHtcbiAgICBsZXQgZmVhdHVyZUNvbGxlY3Rpb24gPSB0aGlzLl9nZXRGZWF0dXJlQ29sbGVjdGlvbigpO1xuICAgIGNvbnN0IHNlbGVjdGVkRmVhdHVyZUluZGV4ID0gdGhpcy5fZ2V0U2VsZWN0ZWRGZWF0dXJlSW5kZXgoKTtcbiAgICBpZiAoZmVhdHVyZUNvbGxlY3Rpb24pIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmZWF0dXJlSW5kZXhlcykpIHtcbiAgICAgICAgZmVhdHVyZUluZGV4ZXMgPSBbZmVhdHVyZUluZGV4ZXNdO1xuICAgICAgfVxuICAgICAgZmVhdHVyZUNvbGxlY3Rpb24gPSBmZWF0dXJlQ29sbGVjdGlvbi5kZWxldGVGZWF0dXJlcyhmZWF0dXJlSW5kZXhlcyk7XG4gICAgICBjb25zdCBuZXdTdGF0ZTogYW55ID0geyBmZWF0dXJlQ29sbGVjdGlvbiB9O1xuICAgICAgaWYgKGZlYXR1cmVJbmRleGVzLmZpbmRJbmRleCgoaW5kZXgpID0+IHNlbGVjdGVkRmVhdHVyZUluZGV4ID09PSBpbmRleCkgPj0gMCkge1xuICAgICAgICBuZXdTdGF0ZS5zZWxlY3RlZEZlYXR1cmVJbmRleCA9IG51bGw7XG4gICAgICAgIG5ld1N0YXRlLnNlbGVjdGVkRWRpdEhhbmRsZUluZGV4ZXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGVIYW5kbGVzID0gKFxuICAgIGZlYXR1cmVJbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICAgIGhhbmRsZUluZGV4ZXM6IG51bWJlcltdIHwgdW5kZWZpbmVkXG4gICk6IEZlYXR1cmVDb2xsZWN0aW9uID0+IHtcbiAgICBsZXQgZmVhdHVyZUNvbGxlY3Rpb24gPSB0aGlzLl9nZXRGZWF0dXJlQ29sbGVjdGlvbigpO1xuICAgIGlmICghZmVhdHVyZUluZGV4KSB7XG4gICAgICBmZWF0dXJlSW5kZXggPSB0aGlzLl9nZXRTZWxlY3RlZEZlYXR1cmVJbmRleCgpO1xuICAgIH1cbiAgICBpZiAoIWhhbmRsZUluZGV4ZXMpIHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5zZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmVhdHVyZUNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgICBoYW5kbGVJbmRleGVzID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzO1xuICAgIH1cbiAgICBjb25zdCBmZWF0dXJlcyA9IGZlYXR1cmVDb2xsZWN0aW9uLmdldE9iamVjdCgpLmZlYXR1cmVzO1xuICAgIC8vIEl0IHNlZW1zIGN1cnJlbnRseSBvbmx5IFBPTFlHT04gYW5kIExJTkVfU1RSSU5HIGFyZSBzdXBwb3J0ZWRcbiAgICAvLyBzZWUgaGFuZGxlQ2xpY2sgZXZlbnQgaW4gZWRpdGluZy1tb2RlLnRzXG4gICAgY29uc3QgYWxsb3dlZFR5cGVzID0gW0dFT0pTT05fVFlQRS5MSU5FX1NUUklORywgR0VPSlNPTl9UWVBFLlBPTFlHT05dO1xuICAgIGlmIChcbiAgICAgIGZlYXR1cmVJbmRleCAhPT0gbnVsbCAmJlxuICAgICAgZmVhdHVyZXNbZmVhdHVyZUluZGV4XSAmJlxuICAgICAgYWxsb3dlZFR5cGVzLmluY2x1ZGVzKGZlYXR1cmVzW2ZlYXR1cmVJbmRleF0uZ2VvbWV0cnkudHlwZSlcbiAgICApIHtcbiAgICAgIC8vIFJlbW92ZSBmaXJzdCBpbmRleGVzIGluIERFU0Mgb3JkZXJcbiAgICAgIGhhbmRsZUluZGV4ZXMuc29ydCgobjEsIG4yKSA9PiBuMiAtIG4xKTtcbiAgICAgIGxldCBwb3NpdGlvbkluZGV4ZXM7XG4gICAgICBpZiAoZmVhdHVyZXNbZmVhdHVyZUluZGV4XS5nZW9tZXRyeS50eXBlID09PSBHRU9KU09OX1RZUEUuTElORV9TVFJJTkcpIHtcbiAgICAgICAgcG9zaXRpb25JbmRleGVzID0gaGFuZGxlSW5kZXhlcy5tYXAoKHBvcykgPT4gW3Bvc10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ3VycmVudGx5IG9ubHkgc3Bwb3J0IHRvIGhhbmRsZSBzaW1wbGUgcG9seWdvbnMsIHRodXMgcG9zIDBcbiAgICAgICAgcG9zaXRpb25JbmRleGVzID0gaGFuZGxlSW5kZXhlcy5tYXAoKHBvcykgPT4gWzAsIHBvc10pO1xuICAgICAgfVxuICAgICAgcG9zaXRpb25JbmRleGVzLmZvckVhY2goKHBvcykgPT4ge1xuICAgICAgICBmZWF0dXJlQ29sbGVjdGlvbiA9IGZlYXR1cmVDb2xsZWN0aW9uLnJlbW92ZVBvc2l0aW9uKGZlYXR1cmVJbmRleCwgcG9zKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFZGl0SGFuZGxlSW5kZXhlcyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRFZGl0SGFuZGxlSW5kZXhlcy5maWx0ZXIoXG4gICAgICAgIChoYW5kbGVJbmRleCkgPT4gIWhhbmRsZUluZGV4ZXMuaW5jbHVkZXMoaGFuZGxlSW5kZXgpXG4gICAgICApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZlYXR1cmVDb2xsZWN0aW9uLCBzZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZUNvbGxlY3Rpb247XG4gIH07XG5cbiAgZ2V0TW9kZVByb3BzKCkge1xuICAgIGNvbnN0IGZlYXR1cmVDb2xsZWN0aW9uID0gdGhpcy5fZ2V0RmVhdHVyZUNvbGxlY3Rpb24oKTtcblxuICAgIGNvbnN0IHsgbGFzdFBvaW50ZXJNb3ZlRXZlbnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlSW5kZXggPSB0aGlzLl9nZXRTZWxlY3RlZEZlYXR1cmVJbmRleCgpO1xuICAgIGNvbnN0IHNlbGVjdGVkRWRpdEhhbmRsZUluZGV4ZXMgPSB0aGlzLnN0YXRlLnNlbGVjdGVkRWRpdEhhbmRsZUluZGV4ZXM7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl9jb250ZXh0ICYmIHRoaXMuX2NvbnRleHQudmlld3BvcnQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogZmVhdHVyZUNvbGxlY3Rpb24gJiYgZmVhdHVyZUNvbGxlY3Rpb24uZmVhdHVyZUNvbGxlY3Rpb24sXG4gICAgICBzZWxlY3RlZEluZGV4ZXM6IGlzTnVtZXJpYyhzZWxlY3RlZEZlYXR1cmVJbmRleCkgPyBbc2VsZWN0ZWRGZWF0dXJlSW5kZXhdIDogW10sXG4gICAgICBzZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzLFxuICAgICAgbGFzdFBvaW50ZXJNb3ZlRXZlbnQsXG4gICAgICB2aWV3cG9ydCxcbiAgICAgIGZlYXR1cmVzRHJhZ2dhYmxlOiB0aGlzLnByb3BzLmZlYXR1cmVzRHJhZ2dhYmxlLFxuICAgICAgb25FZGl0OiB0aGlzLl9vbkVkaXQsXG4gICAgICBvblVwZGF0ZUN1cnNvcjogdGhpcy5wcm9wcy5vblVwZGF0ZUN1cnNvcixcbiAgICAgIG1vZGVDb25maWc6IHRoaXMucHJvcHMubW9kZUNvbmZpZyxcbiAgICB9O1xuICB9XG5cbiAgLyogTUVNT1JJWkVSUyAqL1xuICBfZ2V0TWVtb3JpemVkRmVhdHVyZUNvbGxlY3Rpb24gPSBtZW1vaXplKCh7IHByb3BzRmVhdHVyZXMsIHN0YXRlRmVhdHVyZXMgfTogYW55KSA9PiB7XG4gICAgY29uc3QgZmVhdHVyZXMgPSBwcm9wc0ZlYXR1cmVzIHx8IHN0YXRlRmVhdHVyZXM7XG4gICAgLy8gQW55IGNoYW5nZXMgaW4gSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb24gd2lsbCBjcmVhdGUgYSBuZXcgb2JqZWN0XG4gICAgaWYgKGZlYXR1cmVzIGluc3RhbmNlb2YgSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBmZWF0dXJlcztcbiAgICB9XG5cbiAgICBpZiAoZmVhdHVyZXMgJiYgZmVhdHVyZXMudHlwZSA9PT0gJ0ZlYXR1cmVDb2xsZWN0aW9uJykge1xuICAgICAgcmV0dXJuIG5ldyBJbW11dGFibGVGZWF0dXJlQ29sbGVjdGlvbih7XG4gICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcy5mZWF0dXJlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgSW1tdXRhYmxlRmVhdHVyZUNvbGxlY3Rpb24oe1xuICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyB8fCBbXSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgX2dldEZlYXR1cmVDb2xsZWN0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLl9nZXRNZW1vcml6ZWRGZWF0dXJlQ29sbGVjdGlvbih7XG4gICAgICBwcm9wc0ZlYXR1cmVzOiB0aGlzLnByb3BzLmZlYXR1cmVzLFxuICAgICAgc3RhdGVGZWF0dXJlczogdGhpcy5zdGF0ZS5mZWF0dXJlQ29sbGVjdGlvbixcbiAgICB9KTtcbiAgfTtcblxuICBfc2V0dXBNb2RlSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5wcm9wcy5tb2RlO1xuICAgIHRoaXMuX21vZGVIYW5kbGVyID0gbW9kZTtcblxuICAgIGlmICghbW9kZSkge1xuICAgICAgdGhpcy5fZGVncmVnaXN0ZXJFdmVudHMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZWdpc3RlckV2ZW50cygpO1xuICB9O1xuXG4gIC8qIEVESVRJTkcgT1BFUkFUSU9OUyAqL1xuICBfY2xlYXJFZGl0aW5nU3RhdGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZEZlYXR1cmVJbmRleDogbnVsbCxcbiAgICAgIHNlbGVjdGVkRWRpdEhhbmRsZUluZGV4ZXM6IFtdLFxuXG4gICAgICBob3ZlcmVkOiBudWxsLFxuXG4gICAgICBwb2ludGVyRG93blBpY2tzOiBudWxsLFxuICAgICAgcG9pbnRlckRvd25TY3JlZW5Db29yZHM6IG51bGwsXG4gICAgICBwb2ludGVyRG93bk1hcENvb3JkczogbnVsbCxcblxuICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXG4gICAgICBkaWREcmFnOiBmYWxzZSxcbiAgICB9KTtcbiAgfTtcblxuICBfZ2V0U2VsZWN0ZWRGZWF0dXJlSW5kZXggPSAoKSA9PiB7XG4gICAgaWYgKCdzZWxlY3RlZEZlYXR1cmVJbmRleCcgaW4gdGhpcy5wcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2VsZWN0ZWRGZWF0dXJlSW5kZXg7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZUluZGV4O1xuICB9O1xuXG4gIF9vblNlbGVjdCA9IChzZWxlY3RlZDogU2VsZWN0QWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZEZlYXR1cmVJbmRleCB9ID0gc2VsZWN0ZWQ7XG4gICAgY29uc3QgeyBzZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG5ld1N0YXRlID0geyBzZWxlY3RlZEZlYXR1cmVJbmRleCwgc2VsZWN0ZWRFZGl0SGFuZGxlSW5kZXhlcyB9O1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkRmVhdHVyZUluZGV4ICE9PSBzZWxlY3RlZEZlYXR1cmVJbmRleCkge1xuICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRFZGl0SGFuZGxlSW5kZXhlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3RlZCk7XG4gICAgfVxuICB9O1xuXG4gIF9vbkVkaXQgPSAoZWRpdEFjdGlvbjogRWRpdEFjdGlvbjxhbnk+KSA9PiB7XG4gICAgY29uc3QgeyBlZGl0VHlwZSwgdXBkYXRlZERhdGEsIGVkaXRDb250ZXh0IH0gPSBlZGl0QWN0aW9uO1xuICAgIGNvbnN0IG5ld1N0YXRlID0geyBmZWF0dXJlQ29sbGVjdGlvbjogbmV3IEltbXV0YWJsZUZlYXR1cmVDb2xsZWN0aW9uKHVwZGF0ZWREYXRhKSB9O1xuICAgIGlmIChlZGl0VHlwZSA9PT0gRURJVF9UWVBFLkFERF9QT1NJVElPTikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRFZGl0SGFuZGxlSW5kZXhlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblxuICAgIHN3aXRjaCAoZWRpdFR5cGUpIHtcbiAgICAgIGNhc2UgRURJVF9UWVBFLkFERF9GRUFUVVJFOlxuICAgICAgICB0aGlzLl9vblNlbGVjdCh7XG4gICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZUluZGV4OiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkRWRpdEhhbmRsZUluZGV4OiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkRWRpdEhhbmRsZUluZGV4ZXM6IFtdLFxuICAgICAgICAgIHNjcmVlbkNvb3JkczogZWRpdENvbnRleHQgJiYgZWRpdENvbnRleHQuc2NyZWVuQ29vcmRzLFxuICAgICAgICAgIG1hcENvb3JkczogZWRpdENvbnRleHQgJiYgZWRpdENvbnRleHQubWFwQ29vcmRzLFxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uVXBkYXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKHtcbiAgICAgICAgZGF0YTogdXBkYXRlZERhdGEgJiYgdXBkYXRlZERhdGEuZmVhdHVyZXMsXG4gICAgICAgIGVkaXRUeXBlLFxuICAgICAgICBlZGl0Q29udGV4dCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKiBFVkVOVFMgKi9cbiAgX2RlZ3JlZ2lzdGVyRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TWFuYWdlciA9IHRoaXMuX2NvbnRleHQgJiYgdGhpcy5fY29udGV4dC5ldmVudE1hbmFnZXI7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIWV2ZW50TWFuYWdlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHNSZWdpc3RlcmVkKSB7XG4gICAgICBldmVudE1hbmFnZXIub2ZmKHRoaXMuX2V2ZW50cyk7XG4gICAgICB0aGlzLl9ldmVudHNSZWdpc3RlcmVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9yZWdpc3RlckV2ZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCByZWYgPSB0aGlzLl9jb250YWluZXJSZWY7XG4gICAgY29uc3QgZXZlbnRNYW5hZ2VyID0gdGhpcy5fY29udGV4dCAmJiB0aGlzLl9jb250ZXh0LmV2ZW50TWFuYWdlcjtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhcmVmIHx8ICFldmVudE1hbmFnZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRzUmVnaXN0ZXJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50TWFuYWdlci5vbih0aGlzLl9ldmVudHMsIHJlZik7XG4gICAgdGhpcy5fZXZlbnRzUmVnaXN0ZXJlZCA9IHRydWU7XG4gIH07XG5cbiAgX29uRXZlbnQgPSAoaGFuZGxlcjogRnVuY3Rpb24sIGV2dDogTWpvbG5pckV2ZW50LCBzdG9wUHJvcGFnYXRpb246IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBldmVudCA9IHRoaXMuX2dldEV2ZW50KGV2dCk7XG4gICAgaGFuZGxlcihldmVudCk7XG5cbiAgICBpZiAoc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIF9vbkNsaWNrID0gKGV2ZW50OiBCYXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCBtb2RlUHJvcHMgPSB0aGlzLmdldE1vZGVQcm9wcygpO1xuICAgIC8vIFRPRE8gcmVmYWN0b3IgRWRpdGluZ01vZGVcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgaWYgKHRoaXMuX21vZGVIYW5kbGVyIGluc3RhbmNlb2YgRWRpdGluZ01vZGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RhYmxlKSB7XG4gICAgICBjb25zdCB7IG1hcENvb3Jkcywgc2NyZWVuQ29vcmRzIH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHBpY2tlZE9iamVjdCA9IGV2ZW50LnBpY2tzICYmIGV2ZW50LnBpY2tzWzBdO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFZGl0SGFuZGxlSW5kZXhlcyA9IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkRWRpdEhhbmRsZUluZGV4ZXNdO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgaWYgKHBpY2tlZE9iamVjdCAmJiBpc051bWVyaWMocGlja2VkT2JqZWN0LmZlYXR1cmVJbmRleCkpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlSW5kZXggPVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBwaWNrZWRPYmplY3QudHlwZSA9PT0gRUxFTUVOVF9UWVBFLkVESVRfSEFORExFID8gcGlja2VkT2JqZWN0LmluZGV4IDogbnVsbDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzLmluZGV4T2YoaGFuZGxlSW5kZXgpO1xuICAgICAgICBpZiAoaGFuZGxlSW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdGVkRWRpdEhhbmRsZUluZGV4ZXMucHVzaChoYW5kbGVJbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlSW5kZXggPSBwaWNrZWRPYmplY3QuZmVhdHVyZUluZGV4O1xuICAgICAgICB0aGlzLl9vblNlbGVjdCh7XG4gICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBwaWNrZWRPYmplY3Qub2JqZWN0LFxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZUluZGV4LFxuICAgICAgICAgIHNlbGVjdGVkRWRpdEhhbmRsZUluZGV4OiBoYW5kbGVJbmRleCxcbiAgICAgICAgICBzZWxlY3RlZEVkaXRIYW5kbGVJbmRleGVzLFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBtYXBDb29yZHMsXG4gICAgICAgICAgc2NyZWVuQ29vcmRzLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX29uU2VsZWN0KHtcbiAgICAgICAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlSW5kZXg6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWRFZGl0SGFuZGxlSW5kZXg6IG51bGwsXG4gICAgICAgICAgc2VsZWN0ZWRFZGl0SGFuZGxlSW5kZXhlcyxcbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgbWFwQ29vcmRzLFxuICAgICAgICAgIHNjcmVlbkNvb3JkcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kZUhhbmRsZXIuaGFuZGxlQ2xpY2soZXZlbnQsIG1vZGVQcm9wcyk7XG4gIH07XG5cbiAgX29uRGJsY2xpY2sgPSAoZXZlbnQ6IEJhc2VFdmVudCkgPT4ge1xuICAgIGlmIChpc051bWVyaWModGhpcy5fZ2V0U2VsZWN0ZWRGZWF0dXJlSW5kZXgoKSkpIHtcbiAgICAgIGV2ZW50LnNvdXJjZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBfb25Qb2ludGVyTW92ZSA9IChldmVudDogQmFzZUV2ZW50KSA9PiB7XG4gICAgLy8gaG92ZXJpbmdcbiAgICBjb25zdCBob3ZlcmVkID0gdGhpcy5fZ2V0SG92ZXJTdGF0ZShldmVudCk7XG4gICAgY29uc3Qge1xuICAgICAgaXNEcmFnZ2luZyxcbiAgICAgIGRpZERyYWcsXG4gICAgICBwb2ludGVyRG93blBpY2tzLFxuICAgICAgcG9pbnRlckRvd25TY3JlZW5Db29yZHMsXG4gICAgICBwb2ludGVyRG93bk1hcENvb3JkcyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpc0RyYWdnaW5nICYmICFkaWREcmFnICYmIHBvaW50ZXJEb3duU2NyZWVuQ29vcmRzKSB7XG4gICAgICBjb25zdCBkeCA9IGV2ZW50LnNjcmVlbkNvb3Jkc1swXSAtIHBvaW50ZXJEb3duU2NyZWVuQ29vcmRzWzBdO1xuICAgICAgY29uc3QgZHkgPSBldmVudC5zY3JlZW5Db29yZHNbMV0gLSBwb2ludGVyRG93blNjcmVlbkNvb3Jkc1sxXTtcbiAgICAgIGlmIChkeCAqIGR4ICsgZHkgKiBkeSA+IDUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpZERyYWc6IHRydWUgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcG9pbnRlck1vdmVFdmVudCA9IHtcbiAgICAgIC4uLmV2ZW50LFxuICAgICAgaXNEcmFnZ2luZyxcbiAgICAgIHBvaW50ZXJEb3duUGlja3MsXG4gICAgICBwb2ludGVyRG93blNjcmVlbkNvb3JkcyxcbiAgICAgIHBvaW50ZXJEb3duTWFwQ29vcmRzLFxuICAgICAgY2FuY2VsUGFuOiBldmVudC5zb3VyY2VFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24sXG4gICAgfTtcblxuICAgIGNvbnN0IG1vZGVQcm9wcyA9IHRoaXMuZ2V0TW9kZVByb3BzKCk7XG5cbiAgICB0aGlzLl9tb2RlSGFuZGxlci5oYW5kbGVQb2ludGVyTW92ZShwb2ludGVyTW92ZUV2ZW50LCBtb2RlUHJvcHMpO1xuICAgIGlmICh0aGlzLnN0YXRlLmRpZERyYWcpIHtcbiAgICAgIHRoaXMuX21vZGVIYW5kbGVyLmhhbmRsZURyYWdnaW5nKHBvaW50ZXJNb3ZlRXZlbnQsIG1vZGVQcm9wcyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBob3ZlcmVkLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgbGFzdFBvaW50ZXJNb3ZlRXZlbnQ6IHBvaW50ZXJNb3ZlRXZlbnQsXG4gICAgfSk7XG4gIH07XG5cbiAgX29uUG9pbnRlckRvd24gPSAoZXZlbnQ6IEJhc2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IGRyYWdUb0RyYXcgPSB0aGlzLnByb3BzLm1vZGVDb25maWcgJiYgdGhpcy5wcm9wcy5tb2RlQ29uZmlnLmRyYWdUb0RyYXc7XG4gICAgY29uc3QgaXNEcmFnZ2luZyA9IEJvb2xlYW4oZXZlbnQucGlja3MgJiYgZXZlbnQucGlja3NbMF0pIHx8IGRyYWdUb0RyYXc7XG4gICAgY29uc3Qgc3RhcnREcmFnZ2luZ0V2ZW50ID0ge1xuICAgICAgLi4uZXZlbnQsXG4gICAgICBpc0RyYWdnaW5nLFxuICAgICAgcG9pbnRlckRvd25TY3JlZW5Db29yZHM6IGV2ZW50LnNjcmVlbkNvb3JkcyxcbiAgICAgIHBvaW50ZXJEb3duTWFwQ29vcmRzOiBldmVudC5tYXBDb29yZHMsXG4gICAgICBjYW5jZWxQYW46IGV2ZW50LnNvdXJjZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbixcbiAgICB9O1xuXG4gICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICBpc0RyYWdnaW5nLFxuICAgICAgcG9pbnRlckRvd25QaWNrczogZXZlbnQucGlja3MsXG4gICAgICBwb2ludGVyRG93blNjcmVlbkNvb3JkczogZXZlbnQuc2NyZWVuQ29vcmRzLFxuICAgICAgcG9pbnRlckRvd25NYXBDb29yZHM6IGV2ZW50Lm1hcENvb3JkcyxcbiAgICB9O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcblxuICAgIGNvbnN0IG1vZGVQcm9wcyA9IHRoaXMuZ2V0TW9kZVByb3BzKCk7XG4gICAgdGhpcy5fbW9kZUhhbmRsZXIuaGFuZGxlU3RhcnREcmFnZ2luZyhzdGFydERyYWdnaW5nRXZlbnQsIG1vZGVQcm9wcyk7XG4gIH07XG5cbiAgX29uUG9pbnRlclVwID0gKGV2ZW50OiBCYXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGRpZERyYWcsIHBvaW50ZXJEb3duUGlja3MsIHBvaW50ZXJEb3duU2NyZWVuQ29vcmRzLCBwb2ludGVyRG93bk1hcENvb3JkcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBzdG9wRHJhZ2dpbmdFdmVudCA9IHtcbiAgICAgIC4uLmV2ZW50LFxuICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXG4gICAgICBwb2ludGVyRG93blBpY2tzOiBkaWREcmFnID8gcG9pbnRlckRvd25QaWNrcyA6IG51bGwsXG4gICAgICBwb2ludGVyRG93blNjcmVlbkNvb3JkczogZGlkRHJhZyA/IHBvaW50ZXJEb3duU2NyZWVuQ29vcmRzIDogbnVsbCxcbiAgICAgIHBvaW50ZXJEb3duTWFwQ29vcmRzOiBkaWREcmFnID8gcG9pbnRlckRvd25NYXBDb29yZHMgOiBudWxsLFxuICAgICAgY2FuY2VsUGFuOiBldmVudC5zb3VyY2VFdmVudC5jYW5jZWxQYW4sXG4gICAgfTtcblxuICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXG4gICAgICBkaWREcmFnOiBmYWxzZSxcbiAgICAgIHBvaW50ZXJEb3duUGlja3M6IG51bGwsXG4gICAgICBwb2ludGVyRG93blNjcmVlbkNvb3JkczogbnVsbCxcbiAgICAgIHBvaW50ZXJEb3duTWFwQ29vcmRzOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICBjb25zdCBtb2RlUHJvcHMgPSB0aGlzLmdldE1vZGVQcm9wcygpO1xuXG4gICAgaWYgKGRpZERyYWcpIHtcbiAgICAgIHRoaXMuX21vZGVIYW5kbGVyLmhhbmRsZVN0b3BEcmFnZ2luZyhzdG9wRHJhZ2dpbmdFdmVudCwgbW9kZVByb3BzKTtcbiAgICB9XG4gIH07XG5cbiAgX29uUGFuID0gKGV2ZW50OiBCYXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGlzRHJhZ2dpbmcgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKGlzRHJhZ2dpbmcpIHtcbiAgICAgIGV2ZW50LnNvdXJjZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fbW9kZUhhbmRsZXIuaGFuZGxlUGFuKSB7XG4gICAgICB0aGlzLl9tb2RlSGFuZGxlci5oYW5kbGVQYW4oZXZlbnQsIHRoaXMuZ2V0TW9kZVByb3BzKCkpO1xuICAgIH1cbiAgfTtcblxuICAvKiBIRUxQRVJTICovXG4gIHByb2plY3QgPSAocHQ6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuX2NvbnRleHQgJiYgdGhpcy5fY29udGV4dC52aWV3cG9ydDtcbiAgICByZXR1cm4gdmlld3BvcnQgJiYgdmlld3BvcnQucHJvamVjdChwdCk7XG4gIH07XG5cbiAgdW5wcm9qZWN0ID0gKHB0OiBbbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl9jb250ZXh0ICYmIHRoaXMuX2NvbnRleHQudmlld3BvcnQ7XG4gICAgcmV0dXJuIHZpZXdwb3J0ICYmIHZpZXdwb3J0LnVucHJvamVjdChwdCk7XG4gIH07XG5cbiAgX2dldEV2ZW50KGV2dDogTWpvbG5pckV2ZW50KSB7XG4gICAgY29uc3QgZmVhdHVyZXMgPSB0aGlzLmdldEZlYXR1cmVzKCk7XG4gICAgY29uc3QgZ3VpZGVzID0gdGhpcy5fbW9kZUhhbmRsZXIuZ2V0R3VpZGVzKHRoaXMuZ2V0TW9kZVByb3BzKCkpO1xuICAgIGNvbnN0IHBpY2tlZCA9IHBhcnNlRXZlbnRFbGVtZW50KGV2dCwgZmVhdHVyZXMsIGd1aWRlcyAmJiBndWlkZXMuZmVhdHVyZXMpO1xuICAgIGNvbnN0IHNjcmVlbkNvb3JkcyA9IGdldFNjcmVlbkNvb3JkcyhldnQpO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBtYXBDb29yZHMgPSB0aGlzLnVucHJvamVjdChzY3JlZW5Db29yZHMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBpY2tzOiBwaWNrZWQgPyBbcGlja2VkXSA6IG51bGwsXG4gICAgICBzY3JlZW5Db29yZHMsXG4gICAgICBtYXBDb29yZHMsXG4gICAgICBzb3VyY2VFdmVudDogZXZ0LFxuICAgIH07XG4gIH1cblxuICBfZ2V0SG92ZXJTdGF0ZSA9IChldmVudDogQmFzZUV2ZW50KSA9PiB7XG4gICAgY29uc3Qgb2JqZWN0ID0gZXZlbnQucGlja3MgJiYgZXZlbnQucGlja3NbMF07XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzY3JlZW5Db29yZHM6IGV2ZW50LnNjcmVlbkNvb3JkcyxcbiAgICAgIG1hcENvb3JkczogZXZlbnQubWFwQ29vcmRzLFxuICAgICAgLi4ub2JqZWN0LFxuICAgIH07XG4gIH07XG5cbiAgX3JlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1hcENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgIHsoY29udGV4dCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gY29udGV4dCAmJiBjb250ZXh0LnZpZXdwb3J0O1xuXG4gICAgICAgICAgaWYgKCF2aWV3cG9ydCB8fCB2aWV3cG9ydC5oZWlnaHQgPD0gMCB8fCB2aWV3cG9ydC53aWR0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKCk7XG4gICAgICAgIH19XG4gICAgICA8L01hcENvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfVxufVxuIl19