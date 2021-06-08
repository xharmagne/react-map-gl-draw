"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EDIT_TYPE = exports.ELEMENT_TYPE = exports.GUIDE_TYPE = exports.RENDER_STATE = exports.RENDER_TYPE = exports.SHAPE = exports.GEOJSON_TYPE = void 0;
var GEOJSON_TYPE;
exports.GEOJSON_TYPE = GEOJSON_TYPE;

(function (GEOJSON_TYPE) {
  GEOJSON_TYPE["POINT"] = "Point";
  GEOJSON_TYPE["LINE_STRING"] = "LineString";
  GEOJSON_TYPE["POLYGON"] = "Polygon";
})(GEOJSON_TYPE || (exports.GEOJSON_TYPE = GEOJSON_TYPE = {}));

var SHAPE;
exports.SHAPE = SHAPE;

(function (SHAPE) {
  SHAPE["POINT"] = "Point";
  SHAPE["LINE_STRING"] = "LineString";
  SHAPE["POLYGON"] = "Polygon";
  SHAPE["RECTANGLE"] = "Rectangle";
  SHAPE["CIRCLE"] = "Circle";
})(SHAPE || (exports.SHAPE = SHAPE = {}));

var RENDER_TYPE;
exports.RENDER_TYPE = RENDER_TYPE;

(function (RENDER_TYPE) {
  RENDER_TYPE["POINT"] = "Point";
  RENDER_TYPE["LINE_STRING"] = "LineString";
  RENDER_TYPE["POLYGON"] = "Polygon";
  RENDER_TYPE["RECTANGLE"] = "Rectangle";
})(RENDER_TYPE || (exports.RENDER_TYPE = RENDER_TYPE = {}));

var RENDER_STATE;
exports.RENDER_STATE = RENDER_STATE;

(function (RENDER_STATE) {
  RENDER_STATE["INACTIVE"] = "INACTIVE";
  RENDER_STATE["UNCOMMITTED"] = "UNCOMMITTED";
  RENDER_STATE["SELECTED"] = "SELECTED";
  RENDER_STATE["HOVERED"] = "HOVERED";
  RENDER_STATE["CLOSING"] = "CLOSING";
})(RENDER_STATE || (exports.RENDER_STATE = RENDER_STATE = {}));

var GUIDE_TYPE;
exports.GUIDE_TYPE = GUIDE_TYPE;

(function (GUIDE_TYPE) {
  GUIDE_TYPE["TENTATIVE"] = "tentative";
  GUIDE_TYPE["EDIT_HANDLE"] = "editHandle";
  GUIDE_TYPE["CURSOR_EDIT_HANDLE"] = "cursorEditHandle";
})(GUIDE_TYPE || (exports.GUIDE_TYPE = GUIDE_TYPE = {}));

var ELEMENT_TYPE;
exports.ELEMENT_TYPE = ELEMENT_TYPE;

(function (ELEMENT_TYPE) {
  ELEMENT_TYPE["FEATURE"] = "feature";
  ELEMENT_TYPE["FILL"] = "fill";
  ELEMENT_TYPE["SEGMENT"] = "segment";
  ELEMENT_TYPE["EDIT_HANDLE"] = "editHandle";
  ELEMENT_TYPE["TOOLTIP"] = "tooltip";
})(ELEMENT_TYPE || (exports.ELEMENT_TYPE = ELEMENT_TYPE = {}));

var EDIT_TYPE;
exports.EDIT_TYPE = EDIT_TYPE;

(function (EDIT_TYPE) {
  EDIT_TYPE["ADD_FEATURE"] = "addFeature";
  EDIT_TYPE["ADD_POSITION"] = "addPosition";
  EDIT_TYPE["REMOVE_POSITION"] = "removePosition";
  EDIT_TYPE["MOVE_POSITION"] = "movePosition";
  EDIT_TYPE["FINISH_MOVE_POSITION"] = "finishMovePosition";
})(EDIT_TYPE || (exports.EDIT_TYPE = EDIT_TYPE = {}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMudHMiXSwibmFtZXMiOlsiR0VPSlNPTl9UWVBFIiwiU0hBUEUiLCJSRU5ERVJfVFlQRSIsIlJFTkRFUl9TVEFURSIsIkdVSURFX1RZUEUiLCJFTEVNRU5UX1RZUEUiLCJFRElUX1RZUEUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFZQSxZOzs7V0FBQUEsWTtBQUFBQSxFQUFBQSxZO0FBQUFBLEVBQUFBLFk7QUFBQUEsRUFBQUEsWTtHQUFBQSxZLDRCQUFBQSxZOztJQU1BQyxLOzs7V0FBQUEsSztBQUFBQSxFQUFBQSxLO0FBQUFBLEVBQUFBLEs7QUFBQUEsRUFBQUEsSztBQUFBQSxFQUFBQSxLO0FBQUFBLEVBQUFBLEs7R0FBQUEsSyxxQkFBQUEsSzs7SUFRQUMsVzs7O1dBQUFBLFc7QUFBQUEsRUFBQUEsVztBQUFBQSxFQUFBQSxXO0FBQUFBLEVBQUFBLFc7QUFBQUEsRUFBQUEsVztHQUFBQSxXLDJCQUFBQSxXOztJQU9BQyxZOzs7V0FBQUEsWTtBQUFBQSxFQUFBQSxZO0FBQUFBLEVBQUFBLFk7QUFBQUEsRUFBQUEsWTtBQUFBQSxFQUFBQSxZO0FBQUFBLEVBQUFBLFk7R0FBQUEsWSw0QkFBQUEsWTs7SUFRQUMsVTs7O1dBQUFBLFU7QUFBQUEsRUFBQUEsVTtBQUFBQSxFQUFBQSxVO0FBQUFBLEVBQUFBLFU7R0FBQUEsVSwwQkFBQUEsVTs7SUFNQUMsWTs7O1dBQUFBLFk7QUFBQUEsRUFBQUEsWTtBQUFBQSxFQUFBQSxZO0FBQUFBLEVBQUFBLFk7QUFBQUEsRUFBQUEsWTtBQUFBQSxFQUFBQSxZO0dBQUFBLFksNEJBQUFBLFk7O0lBUUFDLFM7OztXQUFBQSxTO0FBQUFBLEVBQUFBLFM7QUFBQUEsRUFBQUEsUztBQUFBQSxFQUFBQSxTO0FBQUFBLEVBQUFBLFM7QUFBQUEsRUFBQUEsUztHQUFBQSxTLHlCQUFBQSxTIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gR0VPSlNPTl9UWVBFIHtcbiAgUE9JTlQgPSAnUG9pbnQnLFxuICBMSU5FX1NUUklORyA9ICdMaW5lU3RyaW5nJyxcbiAgUE9MWUdPTiA9ICdQb2x5Z29uJyxcbn1cblxuZXhwb3J0IGVudW0gU0hBUEUge1xuICBQT0lOVCA9ICdQb2ludCcsXG4gIExJTkVfU1RSSU5HID0gJ0xpbmVTdHJpbmcnLFxuICBQT0xZR09OID0gJ1BvbHlnb24nLFxuICBSRUNUQU5HTEUgPSAnUmVjdGFuZ2xlJyxcbiAgQ0lSQ0xFID0gJ0NpcmNsZScsXG59XG5cbmV4cG9ydCBlbnVtIFJFTkRFUl9UWVBFIHtcbiAgUE9JTlQgPSAnUG9pbnQnLFxuICBMSU5FX1NUUklORyA9ICdMaW5lU3RyaW5nJyxcbiAgUE9MWUdPTiA9ICdQb2x5Z29uJyxcbiAgUkVDVEFOR0xFID0gJ1JlY3RhbmdsZScsXG59XG5cbmV4cG9ydCBlbnVtIFJFTkRFUl9TVEFURSB7XG4gIElOQUNUSVZFID0gJ0lOQUNUSVZFJyxcbiAgVU5DT01NSVRURUQgPSAnVU5DT01NSVRURUQnLFxuICBTRUxFQ1RFRCA9ICdTRUxFQ1RFRCcsXG4gIEhPVkVSRUQgPSAnSE9WRVJFRCcsXG4gIENMT1NJTkcgPSAnQ0xPU0lORycsXG59XG5cbmV4cG9ydCBlbnVtIEdVSURFX1RZUEUge1xuICBURU5UQVRJVkUgPSAndGVudGF0aXZlJyxcbiAgRURJVF9IQU5ETEUgPSAnZWRpdEhhbmRsZScsXG4gIENVUlNPUl9FRElUX0hBTkRMRSA9ICdjdXJzb3JFZGl0SGFuZGxlJyxcbn1cblxuZXhwb3J0IGVudW0gRUxFTUVOVF9UWVBFIHtcbiAgRkVBVFVSRSA9ICdmZWF0dXJlJyxcbiAgRklMTCA9ICdmaWxsJyxcbiAgU0VHTUVOVCA9ICdzZWdtZW50JyxcbiAgRURJVF9IQU5ETEUgPSAnZWRpdEhhbmRsZScsXG4gIFRPT0xUSVAgPSAndG9vbHRpcCcsXG59XG5cbmV4cG9ydCBlbnVtIEVESVRfVFlQRSB7XG4gIEFERF9GRUFUVVJFID0gJ2FkZEZlYXR1cmUnLFxuICBBRERfUE9TSVRJT04gPSAnYWRkUG9zaXRpb24nLFxuICBSRU1PVkVfUE9TSVRJT04gPSAncmVtb3ZlUG9zaXRpb24nLFxuICBNT1ZFX1BPU0lUSU9OID0gJ21vdmVQb3NpdGlvbicsXG4gIEZJTklTSF9NT1ZFX1BPU0lUSU9OID0gJ2ZpbmlzaE1vdmVQb3NpdGlvbicsXG59XG4iXX0=