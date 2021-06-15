/// <reference types="react" />
import { Feature, Tooltip } from '@nebula.gl/edit-modes';
import { GeoJsonType, EditorProps, EditorState } from './types';
import { RENDER_STATE } from './constants';
import ModeHandler from './mode-handler';
import { editHandleStyle as defaultEditHandleStyle, featureStyle as defaultFeatureStyle } from './style';
export default class Editor extends ModeHandler {
    static defaultProps: {
        clickRadius: number;
        featureShape: string;
        editHandleShape: string;
        editHandleStyle: typeof defaultEditHandleStyle;
        featureStyle: typeof defaultFeatureStyle;
        tooltipStyle: {
            fill: string;
            fontSize: number;
            text: {
                fill: string;
                fontSize: number;
            };
            rect: {
                fill: string;
            };
        };
        featuresDraggable: boolean;
        selectable: boolean;
        mode: any;
        features: any;
        onSelect: any;
        onUpdate: any;
        onUpdateCursor: () => void;
    };
    _tooltipsRef: SVGGElement | null | undefined;
    componentDidUpdate(prevProps: EditorProps, prevState: EditorState): void;
    _getPathInScreenCoords(coordinates: any, type: GeoJsonType): any;
    _getEditHandleState: (editHandle: Feature, renderState: string) => string;
    _getFeatureRenderState: (index: number, renderState: RENDER_STATE) => RENDER_STATE.INACTIVE | RENDER_STATE.INACTIVE | RENDER_STATE.UNCOMMITTED | RENDER_STATE;
    _getStyleProp: (styleProp: any, params: any) => any;
    _renderEditHandle: (editHandle: Feature, feature: Feature) => JSX.Element;
    _renderSegment: (featureIndex: string | number, index: number, coordinates: number[], style: Record<string, any>) => JSX.Element;
    _renderSegments: (featureIndex: string | number, coordinates: number[], style: Record<string, any>) => any[];
    _renderFill: (featureIndex: string | number, coordinates: number[], style: Record<string, any>) => JSX.Element;
    _renderTentativeFeature: (feature: Feature, cursorEditHandle: Feature) => any[];
    _renderTooltips: (tooltips: Tooltip[]) => JSX.Element;
    _renderGuides: (guideFeatures: Feature[]) => JSX.Element;
    _renderPoint: (feature: Feature, index: number, path: string) => JSX.Element;
    _renderPath: (feature: Feature, index: number, path: string) => JSX.Element;
    _renderPolygon: (feature: Feature, index: number, path: string) => JSX.Element;
    _renderFeature: (feature: Feature, index: number) => JSX.Element;
    _renderCanvas: () => JSX.Element;
    _render: () => JSX.Element;
}
//# sourceMappingURL=editor.d.ts.map