import { MOST_NEGATIVE_SINGLE_FLOAT, MOST_POSITIVE_SINGLE_FLOAT } from '../constants';
const DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: 'clamped-max',
    channelInterpretation: 'speakers',
    coneInnerAngle: 360,
    coneOuterAngle: 360,
    coneOuterGain: 0,
    distanceModel: 'inverse',
    maxDistance: 10000,
    orientationX: 1,
    orientationY: 0,
    orientationZ: 0,
    panningModel: 'equalpower',
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    refDistance: 1,
    rolloffFactor: 1
};
export const createPannerNodeConstructor = (audioNodeConstructor, createAudioParam, createNativePannerNode, createPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime) => {
    return class PannerNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativePannerNode = createNativePannerNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const pannerNodeRenderer = (isOffline ? createPannerNodeRenderer() : null);
            super(context, false, nativePannerNode, pannerNodeRenderer);
            this._nativePannerNode = nativePannerNode;
            // Bug #74: Safari does not export the correct values for maxValue and minValue.
            this._orientationX = createAudioParam(this, isOffline, nativePannerNode.orientationX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            this._orientationY = createAudioParam(this, isOffline, nativePannerNode.orientationY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            this._orientationZ = createAudioParam(this, isOffline, nativePannerNode.orientationZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            this._positionX = createAudioParam(this, isOffline, nativePannerNode.positionX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            this._positionY = createAudioParam(this, isOffline, nativePannerNode.positionY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            this._positionZ = createAudioParam(this, isOffline, nativePannerNode.positionZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
            // @todo Determine a meaningful tail-time instead of just using one second.
            setAudioNodeTailTime(this, 1);
        }
        get coneInnerAngle() {
            return this._nativePannerNode.coneInnerAngle;
        }
        set coneInnerAngle(value) {
            this._nativePannerNode.coneInnerAngle = value;
        }
        get coneOuterAngle() {
            return this._nativePannerNode.coneOuterAngle;
        }
        set coneOuterAngle(value) {
            this._nativePannerNode.coneOuterAngle = value;
        }
        get coneOuterGain() {
            return this._nativePannerNode.coneOuterGain;
        }
        set coneOuterGain(value) {
            this._nativePannerNode.coneOuterGain = value;
        }
        get distanceModel() {
            return this._nativePannerNode.distanceModel;
        }
        set distanceModel(value) {
            this._nativePannerNode.distanceModel = value;
        }
        get maxDistance() {
            return this._nativePannerNode.maxDistance;
        }
        set maxDistance(value) {
            this._nativePannerNode.maxDistance = value;
        }
        get orientationX() {
            return this._orientationX;
        }
        get orientationY() {
            return this._orientationY;
        }
        get orientationZ() {
            return this._orientationZ;
        }
        get panningModel() {
            return this._nativePannerNode.panningModel;
        }
        set panningModel(value) {
            this._nativePannerNode.panningModel = value;
        }
        get positionX() {
            return this._positionX;
        }
        get positionY() {
            return this._positionY;
        }
        get positionZ() {
            return this._positionZ;
        }
        get refDistance() {
            return this._nativePannerNode.refDistance;
        }
        set refDistance(value) {
            this._nativePannerNode.refDistance = value;
        }
        get rolloffFactor() {
            return this._nativePannerNode.rolloffFactor;
        }
        set rolloffFactor(value) {
            this._nativePannerNode.rolloffFactor = value;
        }
    };
};
//# sourceMappingURL=panner-node-constructor.js.map