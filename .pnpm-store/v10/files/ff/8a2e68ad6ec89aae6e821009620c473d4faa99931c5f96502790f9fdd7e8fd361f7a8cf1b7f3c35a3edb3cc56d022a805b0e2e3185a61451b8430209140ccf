import { MOST_NEGATIVE_SINGLE_FLOAT, MOST_POSITIVE_SINGLE_FLOAT } from '../constants';
import { IAudioParam, IPannerNode, IPannerOptions } from '../interfaces';
import {
    TAudioNodeRenderer,
    TContext,
    TDistanceModelType,
    TNativePannerNode,
    TPannerNodeConstructorFactory,
    TPanningModelType
} from '../types';

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
} as const;

export const createPannerNodeConstructor: TPannerNodeConstructorFactory = (
    audioNodeConstructor,
    createAudioParam,
    createNativePannerNode,
    createPannerNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
) => {
    return class PannerNode<T extends TContext> extends audioNodeConstructor<T> implements IPannerNode<T> {
        private _nativePannerNode: TNativePannerNode;

        private _orientationX: IAudioParam;

        private _orientationY: IAudioParam;

        private _orientationZ: IAudioParam;

        private _positionX: IAudioParam;

        private _positionY: IAudioParam;

        private _positionZ: IAudioParam;

        constructor(context: T, options?: Partial<IPannerOptions>) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativePannerNode = createNativePannerNode(nativeContext, mergedOptions);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const pannerNodeRenderer = <TAudioNodeRenderer<T, this>>(isOffline ? createPannerNodeRenderer() : null);

            super(context, false, nativePannerNode, pannerNodeRenderer);

            this._nativePannerNode = nativePannerNode;
            // Bug #74: Safari does not export the correct values for maxValue and minValue.
            this._orientationX = createAudioParam(
                this,
                isOffline,
                nativePannerNode.orientationX,
                MOST_POSITIVE_SINGLE_FLOAT,
                MOST_NEGATIVE_SINGLE_FLOAT
            );
            this._orientationY = createAudioParam(
                this,
                isOffline,
                nativePannerNode.orientationY,
                MOST_POSITIVE_SINGLE_FLOAT,
                MOST_NEGATIVE_SINGLE_FLOAT
            );
            this._orientationZ = createAudioParam(
                this,
                isOffline,
                nativePannerNode.orientationZ,
                MOST_POSITIVE_SINGLE_FLOAT,
                MOST_NEGATIVE_SINGLE_FLOAT
            );
            this._positionX = createAudioParam(
                this,
                isOffline,
                nativePannerNode.positionX,
                MOST_POSITIVE_SINGLE_FLOAT,
                MOST_NEGATIVE_SINGLE_FLOAT
            );
            this._positionY = createAudioParam(
                this,
                isOffline,
                nativePannerNode.positionY,
                MOST_POSITIVE_SINGLE_FLOAT,
                MOST_NEGATIVE_SINGLE_FLOAT
            );
            this._positionZ = createAudioParam(
                this,
                isOffline,
                nativePannerNode.positionZ,
                MOST_POSITIVE_SINGLE_FLOAT,
                MOST_NEGATIVE_SINGLE_FLOAT
            );

            // @todo Determine a meaningful tail-time instead of just using one second.
            setAudioNodeTailTime(this, 1);
        }

        get coneInnerAngle(): number {
            return this._nativePannerNode.coneInnerAngle;
        }

        set coneInnerAngle(value) {
            this._nativePannerNode.coneInnerAngle = value;
        }

        get coneOuterAngle(): number {
            return this._nativePannerNode.coneOuterAngle;
        }

        set coneOuterAngle(value) {
            this._nativePannerNode.coneOuterAngle = value;
        }

        get coneOuterGain(): number {
            return this._nativePannerNode.coneOuterGain;
        }

        set coneOuterGain(value) {
            this._nativePannerNode.coneOuterGain = value;
        }

        get distanceModel(): TDistanceModelType {
            return this._nativePannerNode.distanceModel;
        }

        set distanceModel(value) {
            this._nativePannerNode.distanceModel = value;
        }

        get maxDistance(): number {
            return this._nativePannerNode.maxDistance;
        }

        set maxDistance(value) {
            this._nativePannerNode.maxDistance = value;
        }

        get orientationX(): IAudioParam {
            return this._orientationX;
        }

        get orientationY(): IAudioParam {
            return this._orientationY;
        }

        get orientationZ(): IAudioParam {
            return this._orientationZ;
        }

        get panningModel(): TPanningModelType {
            return this._nativePannerNode.panningModel;
        }

        set panningModel(value) {
            this._nativePannerNode.panningModel = value;
        }

        get positionX(): IAudioParam {
            return this._positionX;
        }

        get positionY(): IAudioParam {
            return this._positionY;
        }

        get positionZ(): IAudioParam {
            return this._positionZ;
        }

        get refDistance(): number {
            return this._nativePannerNode.refDistance;
        }

        set refDistance(value) {
            this._nativePannerNode.refDistance = value;
        }

        get rolloffFactor(): number {
            return this._nativePannerNode.rolloffFactor;
        }

        set rolloffFactor(value) {
            this._nativePannerNode.rolloffFactor = value;
        }
    };
};
