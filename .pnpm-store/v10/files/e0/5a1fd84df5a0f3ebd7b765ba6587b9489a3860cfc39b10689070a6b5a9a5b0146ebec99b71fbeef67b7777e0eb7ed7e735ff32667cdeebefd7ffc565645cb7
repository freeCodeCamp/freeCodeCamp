// This is generated from /utils/protocol-types-generator/index.js
type binary = string;
export namespace Protocol {
  export namespace Accessibility {
    /**
     * Unique accessibility node identifier.
     */
    export type AXNodeId = string;
    /**
     * Enum of possible property types.
     */
    export type AXValueType = "boolean"|"tristate"|"booleanOrUndefined"|"idref"|"idrefList"|"integer"|"node"|"nodeList"|"number"|"string"|"computedString"|"token"|"tokenList"|"domRelation"|"role"|"internalRole"|"valueUndefined";
    /**
     * Enum of possible property sources.
     */
    export type AXValueSourceType = "attribute"|"implicit"|"style"|"contents"|"placeholder"|"relatedElement";
    /**
     * Enum of possible native property sources (as a subtype of a particular AXValueSourceType).
     */
    export type AXValueNativeSourceType = "description"|"figcaption"|"label"|"labelfor"|"labelwrapped"|"legend"|"rubyannotation"|"tablecaption"|"title"|"other";
    /**
     * A single source for a computed AX property.
     */
    export interface AXValueSource {
      /**
       * What type of source this is.
       */
      type: AXValueSourceType;
      /**
       * The value of this property source.
       */
      value?: AXValue;
      /**
       * The name of the relevant attribute, if any.
       */
      attribute?: string;
      /**
       * The value of the relevant attribute, if any.
       */
      attributeValue?: AXValue;
      /**
       * Whether this source is superseded by a higher priority source.
       */
      superseded?: boolean;
      /**
       * The native markup source for this value, e.g. a `<label>` element.
       */
      nativeSource?: AXValueNativeSourceType;
      /**
       * The value, such as a node or node list, of the native source.
       */
      nativeSourceValue?: AXValue;
      /**
       * Whether the value for this property is invalid.
       */
      invalid?: boolean;
      /**
       * Reason for the value being invalid, if it is.
       */
      invalidReason?: string;
    }
    export interface AXRelatedNode {
      /**
       * The BackendNodeId of the related DOM node.
       */
      backendDOMNodeId: DOM.BackendNodeId;
      /**
       * The IDRef value provided, if any.
       */
      idref?: string;
      /**
       * The text alternative of this node in the current context.
       */
      text?: string;
    }
    export interface AXProperty {
      /**
       * The name of this property.
       */
      name: AXPropertyName;
      /**
       * The value of this property.
       */
      value: AXValue;
    }
    /**
     * A single computed AX property.
     */
    export interface AXValue {
      /**
       * The type of this value.
       */
      type: AXValueType;
      /**
       * The computed value of this property.
       */
      value?: any;
      /**
       * One or more related nodes, if applicable.
       */
      relatedNodes?: AXRelatedNode[];
      /**
       * The sources which contributed to the computation of this property.
       */
      sources?: AXValueSource[];
    }
    /**
     * Values of AXProperty name:
- from 'busy' to 'roledescription': states which apply to every AX node
- from 'live' to 'root': attributes which apply to nodes in live regions
- from 'autocomplete' to 'valuetext': attributes which apply to widgets
- from 'checked' to 'selected': states which apply to widgets
- from 'activedescendant' to 'owns': relationships between elements other than parent/child/sibling
- from 'activeFullscreenElement' to 'uninteresting': reasons why this noode is hidden
     */
    export type AXPropertyName = "actions"|"busy"|"disabled"|"editable"|"focusable"|"focused"|"hidden"|"hiddenRoot"|"invalid"|"keyshortcuts"|"settable"|"roledescription"|"live"|"atomic"|"relevant"|"root"|"autocomplete"|"hasPopup"|"level"|"multiselectable"|"orientation"|"multiline"|"readonly"|"required"|"valuemin"|"valuemax"|"valuetext"|"checked"|"expanded"|"modal"|"pressed"|"selected"|"activedescendant"|"controls"|"describedby"|"details"|"errormessage"|"flowto"|"labelledby"|"owns"|"url"|"activeFullscreenElement"|"activeModalDialog"|"activeAriaModalDialog"|"ariaHiddenElement"|"ariaHiddenSubtree"|"emptyAlt"|"emptyText"|"inertElement"|"inertSubtree"|"labelContainer"|"labelFor"|"notRendered"|"notVisible"|"presentationalRole"|"probablyPresentational"|"inactiveCarouselTabContent"|"uninteresting";
    /**
     * A node in the accessibility tree.
     */
    export interface AXNode {
      /**
       * Unique identifier for this node.
       */
      nodeId: AXNodeId;
      /**
       * Whether this node is ignored for accessibility
       */
      ignored: boolean;
      /**
       * Collection of reasons why this node is hidden.
       */
      ignoredReasons?: AXProperty[];
      /**
       * This `Node`'s role, whether explicit or implicit.
       */
      role?: AXValue;
      /**
       * This `Node`'s Chrome raw role.
       */
      chromeRole?: AXValue;
      /**
       * The accessible name for this `Node`.
       */
      name?: AXValue;
      /**
       * The accessible description for this `Node`.
       */
      description?: AXValue;
      /**
       * The value for this `Node`.
       */
      value?: AXValue;
      /**
       * All other properties
       */
      properties?: AXProperty[];
      /**
       * ID for this node's parent.
       */
      parentId?: AXNodeId;
      /**
       * IDs for each of this node's child nodes.
       */
      childIds?: AXNodeId[];
      /**
       * The backend ID for the associated DOM node, if any.
       */
      backendDOMNodeId?: DOM.BackendNodeId;
      /**
       * The frame ID for the frame associated with this nodes document.
       */
      frameId?: Page.FrameId;
    }
    
    /**
     * The loadComplete event mirrors the load complete event sent by the browser to assistive
technology when the web page has finished loading.
     */
    export type loadCompletePayload = {
      /**
       * New document root node.
       */
      root: AXNode;
    }
    /**
     * The nodesUpdated event is sent every time a previously requested node has changed the in tree.
     */
    export type nodesUpdatedPayload = {
      /**
       * Updated node data.
       */
      nodes: AXNode[];
    }
    
    /**
     * Disables the accessibility domain.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables the accessibility domain which causes `AXNodeId`s to remain consistent between method calls.
This turns on accessibility for the page, which can impact performance until accessibility is disabled.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Fetches the accessibility node and partial accessibility tree for this DOM node, if it exists.
     */
    export type getPartialAXTreeParameters = {
      /**
       * Identifier of the node to get the partial accessibility tree for.
       */
      nodeId?: DOM.NodeId;
      /**
       * Identifier of the backend node to get the partial accessibility tree for.
       */
      backendNodeId?: DOM.BackendNodeId;
      /**
       * JavaScript object id of the node wrapper to get the partial accessibility tree for.
       */
      objectId?: Runtime.RemoteObjectId;
      /**
       * Whether to fetch this node's ancestors, siblings and children. Defaults to true.
       */
      fetchRelatives?: boolean;
    }
    export type getPartialAXTreeReturnValue = {
      /**
       * The `Accessibility.AXNode` for this DOM node, if it exists, plus its ancestors, siblings and
children, if requested.
       */
      nodes: AXNode[];
    }
    /**
     * Fetches the entire accessibility tree for the root Document
     */
    export type getFullAXTreeParameters = {
      /**
       * The maximum depth at which descendants of the root node should be retrieved.
If omitted, the full tree is returned.
       */
      depth?: number;
      /**
       * The frame for whose document the AX tree should be retrieved.
If omitted, the root frame is used.
       */
      frameId?: Page.FrameId;
    }
    export type getFullAXTreeReturnValue = {
      nodes: AXNode[];
    }
    /**
     * Fetches the root node.
Requires `enable()` to have been called previously.
     */
    export type getRootAXNodeParameters = {
      /**
       * The frame in whose document the node resides.
If omitted, the root frame is used.
       */
      frameId?: Page.FrameId;
    }
    export type getRootAXNodeReturnValue = {
      node: AXNode;
    }
    /**
     * Fetches a node and all ancestors up to and including the root.
Requires `enable()` to have been called previously.
     */
    export type getAXNodeAndAncestorsParameters = {
      /**
       * Identifier of the node to get.
       */
      nodeId?: DOM.NodeId;
      /**
       * Identifier of the backend node to get.
       */
      backendNodeId?: DOM.BackendNodeId;
      /**
       * JavaScript object id of the node wrapper to get.
       */
      objectId?: Runtime.RemoteObjectId;
    }
    export type getAXNodeAndAncestorsReturnValue = {
      nodes: AXNode[];
    }
    /**
     * Fetches a particular accessibility node by AXNodeId.
Requires `enable()` to have been called previously.
     */
    export type getChildAXNodesParameters = {
      id: AXNodeId;
      /**
       * The frame in whose document the node resides.
If omitted, the root frame is used.
       */
      frameId?: Page.FrameId;
    }
    export type getChildAXNodesReturnValue = {
      nodes: AXNode[];
    }
    /**
     * Query a DOM node's accessibility subtree for accessible name and role.
This command computes the name and role for all nodes in the subtree, including those that are
ignored for accessibility, and returns those that match the specified name and role. If no DOM
node is specified, or the DOM node does not exist, the command returns an error. If neither
`accessibleName` or `role` is specified, it returns all the accessibility nodes in the subtree.
     */
    export type queryAXTreeParameters = {
      /**
       * Identifier of the node for the root to query.
       */
      nodeId?: DOM.NodeId;
      /**
       * Identifier of the backend node for the root to query.
       */
      backendNodeId?: DOM.BackendNodeId;
      /**
       * JavaScript object id of the node wrapper for the root to query.
       */
      objectId?: Runtime.RemoteObjectId;
      /**
       * Find nodes with this computed name.
       */
      accessibleName?: string;
      /**
       * Find nodes with this computed role.
       */
      role?: string;
    }
    export type queryAXTreeReturnValue = {
      /**
       * A list of `Accessibility.AXNode` matching the specified attributes,
including nodes that are ignored for accessibility.
       */
      nodes: AXNode[];
    }
  }
  
  export namespace Animation {
    /**
     * Animation instance.
     */
    export interface Animation {
      /**
       * `Animation`'s id.
       */
      id: string;
      /**
       * `Animation`'s name.
       */
      name: string;
      /**
       * `Animation`'s internal paused state.
       */
      pausedState: boolean;
      /**
       * `Animation`'s play state.
       */
      playState: string;
      /**
       * `Animation`'s playback rate.
       */
      playbackRate: number;
      /**
       * `Animation`'s start time.
Milliseconds for time based animations and
percentage [0 - 100] for scroll driven animations
(i.e. when viewOrScrollTimeline exists).
       */
      startTime: number;
      /**
       * `Animation`'s current time.
       */
      currentTime: number;
      /**
       * Animation type of `Animation`.
       */
      type: "CSSTransition"|"CSSAnimation"|"WebAnimation";
      /**
       * `Animation`'s source animation node.
       */
      source?: AnimationEffect;
      /**
       * A unique ID for `Animation` representing the sources that triggered this CSS
animation/transition.
       */
      cssId?: string;
      /**
       * View or scroll timeline
       */
      viewOrScrollTimeline?: ViewOrScrollTimeline;
    }
    /**
     * Timeline instance
     */
    export interface ViewOrScrollTimeline {
      /**
       * Scroll container node
       */
      sourceNodeId?: DOM.BackendNodeId;
      /**
       * Represents the starting scroll position of the timeline
as a length offset in pixels from scroll origin.
       */
      startOffset?: number;
      /**
       * Represents the ending scroll position of the timeline
as a length offset in pixels from scroll origin.
       */
      endOffset?: number;
      /**
       * The element whose principal box's visibility in the
scrollport defined the progress of the timeline.
Does not exist for animations with ScrollTimeline
       */
      subjectNodeId?: DOM.BackendNodeId;
      /**
       * Orientation of the scroll
       */
      axis: DOM.ScrollOrientation;
    }
    /**
     * AnimationEffect instance
     */
    export interface AnimationEffect {
      /**
       * `AnimationEffect`'s delay.
       */
      delay: number;
      /**
       * `AnimationEffect`'s end delay.
       */
      endDelay: number;
      /**
       * `AnimationEffect`'s iteration start.
       */
      iterationStart: number;
      /**
       * `AnimationEffect`'s iterations. Omitted if the value is infinite.
       */
      iterations?: number;
      /**
       * `AnimationEffect`'s iteration duration.
Milliseconds for time based animations and
percentage [0 - 100] for scroll driven animations
(i.e. when viewOrScrollTimeline exists).
       */
      duration: number;
      /**
       * `AnimationEffect`'s playback direction.
       */
      direction: string;
      /**
       * `AnimationEffect`'s fill mode.
       */
      fill: string;
      /**
       * `AnimationEffect`'s target node.
       */
      backendNodeId?: DOM.BackendNodeId;
      /**
       * `AnimationEffect`'s keyframes.
       */
      keyframesRule?: KeyframesRule;
      /**
       * `AnimationEffect`'s timing function.
       */
      easing: string;
    }
    /**
     * Keyframes Rule
     */
    export interface KeyframesRule {
      /**
       * CSS keyframed animation's name.
       */
      name?: string;
      /**
       * List of animation keyframes.
       */
      keyframes: KeyframeStyle[];
    }
    /**
     * Keyframe Style
     */
    export interface KeyframeStyle {
      /**
       * Keyframe's time offset.
       */
      offset: string;
      /**
       * `AnimationEffect`'s timing function.
       */
      easing: string;
    }
    
    /**
     * Event for when an animation has been cancelled.
     */
    export type animationCanceledPayload = {
      /**
       * Id of the animation that was cancelled.
       */
      id: string;
    }
    /**
     * Event for each animation that has been created.
     */
    export type animationCreatedPayload = {
      /**
       * Id of the animation that was created.
       */
      id: string;
    }
    /**
     * Event for animation that has been started.
     */
    export type animationStartedPayload = {
      /**
       * Animation that was started.
       */
      animation: Animation;
    }
    /**
     * Event for animation that has been updated.
     */
    export type animationUpdatedPayload = {
      /**
       * Animation that was updated.
       */
      animation: Animation;
    }
    
    /**
     * Disables animation domain notifications.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables animation domain notifications.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Returns the current time of the an animation.
     */
    export type getCurrentTimeParameters = {
      /**
       * Id of animation.
       */
      id: string;
    }
    export type getCurrentTimeReturnValue = {
      /**
       * Current time of the page.
       */
      currentTime: number;
    }
    /**
     * Gets the playback rate of the document timeline.
     */
    export type getPlaybackRateParameters = {
    }
    export type getPlaybackRateReturnValue = {
      /**
       * Playback rate for animations on page.
       */
      playbackRate: number;
    }
    /**
     * Releases a set of animations to no longer be manipulated.
     */
    export type releaseAnimationsParameters = {
      /**
       * List of animation ids to seek.
       */
      animations: string[];
    }
    export type releaseAnimationsReturnValue = {
    }
    /**
     * Gets the remote object of the Animation.
     */
    export type resolveAnimationParameters = {
      /**
       * Animation id.
       */
      animationId: string;
    }
    export type resolveAnimationReturnValue = {
      /**
       * Corresponding remote object.
       */
      remoteObject: Runtime.RemoteObject;
    }
    /**
     * Seek a set of animations to a particular time within each animation.
     */
    export type seekAnimationsParameters = {
      /**
       * List of animation ids to seek.
       */
      animations: string[];
      /**
       * Set the current time of each animation.
       */
      currentTime: number;
    }
    export type seekAnimationsReturnValue = {
    }
    /**
     * Sets the paused state of a set of animations.
     */
    export type setPausedParameters = {
      /**
       * Animations to set the pause state of.
       */
      animations: string[];
      /**
       * Paused state to set to.
       */
      paused: boolean;
    }
    export type setPausedReturnValue = {
    }
    /**
     * Sets the playback rate of the document timeline.
     */
    export type setPlaybackRateParameters = {
      /**
       * Playback rate for animations on page
       */
      playbackRate: number;
    }
    export type setPlaybackRateReturnValue = {
    }
    /**
     * Sets the timing of an animation node.
     */
    export type setTimingParameters = {
      /**
       * Animation id.
       */
      animationId: string;
      /**
       * Duration of the animation.
       */
      duration: number;
      /**
       * Delay of the animation.
       */
      delay: number;
    }
    export type setTimingReturnValue = {
    }
  }
  
  /**
   * Audits domain allows investigation of page violations and possible improvements.
   */
  export namespace Audits {
    /**
     * Information about a cookie that is affected by an inspector issue.
     */
    export interface AffectedCookie {
      /**
       * The following three properties uniquely identify a cookie
       */
      name: string;
      path: string;
      domain: string;
    }
    /**
     * Information about a request that is affected by an inspector issue.
     */
    export interface AffectedRequest {
      /**
       * The unique request id.
       */
      requestId?: Network.RequestId;
      url: string;
    }
    /**
     * Information about the frame affected by an inspector issue.
     */
    export interface AffectedFrame {
      frameId: Page.FrameId;
    }
    export type CookieExclusionReason = "ExcludeSameSiteUnspecifiedTreatedAsLax"|"ExcludeSameSiteNoneInsecure"|"ExcludeSameSiteLax"|"ExcludeSameSiteStrict"|"ExcludeDomainNonASCII"|"ExcludeThirdPartyCookieBlockedInFirstPartySet"|"ExcludeThirdPartyPhaseout"|"ExcludePortMismatch"|"ExcludeSchemeMismatch";
    export type CookieWarningReason = "WarnSameSiteUnspecifiedCrossSiteContext"|"WarnSameSiteNoneInsecure"|"WarnSameSiteUnspecifiedLaxAllowUnsafe"|"WarnSameSiteStrictLaxDowngradeStrict"|"WarnSameSiteStrictCrossDowngradeStrict"|"WarnSameSiteStrictCrossDowngradeLax"|"WarnSameSiteLaxCrossDowngradeStrict"|"WarnSameSiteLaxCrossDowngradeLax"|"WarnAttributeValueExceedsMaxSize"|"WarnDomainNonASCII"|"WarnThirdPartyPhaseout"|"WarnCrossSiteRedirectDowngradeChangesInclusion"|"WarnDeprecationTrialMetadata"|"WarnThirdPartyCookieHeuristic";
    export type CookieOperation = "SetCookie"|"ReadCookie";
    /**
     * Represents the category of insight that a cookie issue falls under.
     */
    export type InsightType = "GitHubResource"|"GracePeriod"|"Heuristics";
    /**
     * Information about the suggested solution to a cookie issue.
     */
    export interface CookieIssueInsight {
      type: InsightType;
      /**
       * Link to table entry in third-party cookie migration readiness list.
       */
      tableEntryUrl?: string;
    }
    /**
     * This information is currently necessary, as the front-end has a difficult
time finding a specific cookie. With this, we can convey specific error
information without the cookie.
     */
    export interface CookieIssueDetails {
      /**
       * If AffectedCookie is not set then rawCookieLine contains the raw
Set-Cookie header string. This hints at a problem where the
cookie line is syntactically or semantically malformed in a way
that no valid cookie could be created.
       */
      cookie?: AffectedCookie;
      rawCookieLine?: string;
      cookieWarningReasons: CookieWarningReason[];
      cookieExclusionReasons: CookieExclusionReason[];
      /**
       * Optionally identifies the site-for-cookies and the cookie url, which
may be used by the front-end as additional context.
       */
      operation: CookieOperation;
      siteForCookies?: string;
      cookieUrl?: string;
      request?: AffectedRequest;
      /**
       * The recommended solution to the issue.
       */
      insight?: CookieIssueInsight;
    }
    export type PerformanceIssueType = "DocumentCookie";
    /**
     * Details for a performance issue.
     */
    export interface PerformanceIssueDetails {
      performanceIssueType: PerformanceIssueType;
      sourceCodeLocation?: SourceCodeLocation;
    }
    export type MixedContentResolutionStatus = "MixedContentBlocked"|"MixedContentAutomaticallyUpgraded"|"MixedContentWarning";
    export type MixedContentResourceType = "AttributionSrc"|"Audio"|"Beacon"|"CSPReport"|"Download"|"EventSource"|"Favicon"|"Font"|"Form"|"Frame"|"Image"|"Import"|"JSON"|"Manifest"|"Ping"|"PluginData"|"PluginResource"|"Prefetch"|"Resource"|"Script"|"ServiceWorker"|"SharedWorker"|"SpeculationRules"|"Stylesheet"|"Track"|"Video"|"Worker"|"XMLHttpRequest"|"XSLT";
    export interface MixedContentIssueDetails {
      /**
       * The type of resource causing the mixed content issue (css, js, iframe,
form,...). Marked as optional because it is mapped to from
blink::mojom::RequestContextType, which will be replaced
by network::mojom::RequestDestination
       */
      resourceType?: MixedContentResourceType;
      /**
       * The way the mixed content issue is being resolved.
       */
      resolutionStatus: MixedContentResolutionStatus;
      /**
       * The unsafe http url causing the mixed content issue.
       */
      insecureURL: string;
      /**
       * The url responsible for the call to an unsafe url.
       */
      mainResourceURL: string;
      /**
       * The mixed content request.
Does not always exist (e.g. for unsafe form submission urls).
       */
      request?: AffectedRequest;
      /**
       * Optional because not every mixed content issue is necessarily linked to a frame.
       */
      frame?: AffectedFrame;
    }
    /**
     * Enum indicating the reason a response has been blocked. These reasons are
refinements of the net error BLOCKED_BY_RESPONSE.
     */
    export type BlockedByResponseReason = "CoepFrameResourceNeedsCoepHeader"|"CoopSandboxedIFrameCannotNavigateToCoopPage"|"CorpNotSameOrigin"|"CorpNotSameOriginAfterDefaultedToSameOriginByCoep"|"CorpNotSameOriginAfterDefaultedToSameOriginByDip"|"CorpNotSameOriginAfterDefaultedToSameOriginByCoepAndDip"|"CorpNotSameSite"|"SRIMessageSignatureMismatch";
    /**
     * Details for a request that has been blocked with the BLOCKED_BY_RESPONSE
code. Currently only used for COEP/COOP, but may be extended to include
some CSP errors in the future.
     */
    export interface BlockedByResponseIssueDetails {
      request: AffectedRequest;
      parentFrame?: AffectedFrame;
      blockedFrame?: AffectedFrame;
      reason: BlockedByResponseReason;
    }
    export type HeavyAdResolutionStatus = "HeavyAdBlocked"|"HeavyAdWarning";
    export type HeavyAdReason = "NetworkTotalLimit"|"CpuTotalLimit"|"CpuPeakLimit";
    export interface HeavyAdIssueDetails {
      /**
       * The resolution status, either blocking the content or warning.
       */
      resolution: HeavyAdResolutionStatus;
      /**
       * The reason the ad was blocked, total network or cpu or peak cpu.
       */
      reason: HeavyAdReason;
      /**
       * The frame that was blocked.
       */
      frame: AffectedFrame;
    }
    export type ContentSecurityPolicyViolationType = "kInlineViolation"|"kEvalViolation"|"kURLViolation"|"kSRIViolation"|"kTrustedTypesSinkViolation"|"kTrustedTypesPolicyViolation"|"kWasmEvalViolation";
    export interface SourceCodeLocation {
      scriptId?: Runtime.ScriptId;
      url: string;
      lineNumber: number;
      columnNumber: number;
    }
    export interface ContentSecurityPolicyIssueDetails {
      /**
       * The url not included in allowed sources.
       */
      blockedURL?: string;
      /**
       * Specific directive that is violated, causing the CSP issue.
       */
      violatedDirective: string;
      isReportOnly: boolean;
      contentSecurityPolicyViolationType: ContentSecurityPolicyViolationType;
      frameAncestor?: AffectedFrame;
      sourceCodeLocation?: SourceCodeLocation;
      violatingNodeId?: DOM.BackendNodeId;
    }
    export type SharedArrayBufferIssueType = "TransferIssue"|"CreationIssue";
    /**
     * Details for a issue arising from an SAB being instantiated in, or
transferred to a context that is not cross-origin isolated.
     */
    export interface SharedArrayBufferIssueDetails {
      sourceCodeLocation: SourceCodeLocation;
      isWarning: boolean;
      type: SharedArrayBufferIssueType;
    }
    /**
     * Details for a CORS related issue, e.g. a warning or error related to
CORS RFC1918 enforcement.
     */
    export interface CorsIssueDetails {
      corsErrorStatus: Network.CorsErrorStatus;
      isWarning: boolean;
      request: AffectedRequest;
      location?: SourceCodeLocation;
      initiatorOrigin?: string;
      resourceIPAddressSpace?: Network.IPAddressSpace;
      clientSecurityState?: Network.ClientSecurityState;
    }
    export type AttributionReportingIssueType = "PermissionPolicyDisabled"|"UntrustworthyReportingOrigin"|"InsecureContext"|"InvalidHeader"|"InvalidRegisterTriggerHeader"|"SourceAndTriggerHeaders"|"SourceIgnored"|"TriggerIgnored"|"OsSourceIgnored"|"OsTriggerIgnored"|"InvalidRegisterOsSourceHeader"|"InvalidRegisterOsTriggerHeader"|"WebAndOsHeaders"|"NoWebOrOsSupport"|"NavigationRegistrationWithoutTransientUserActivation"|"InvalidInfoHeader"|"NoRegisterSourceHeader"|"NoRegisterTriggerHeader"|"NoRegisterOsSourceHeader"|"NoRegisterOsTriggerHeader"|"NavigationRegistrationUniqueScopeAlreadySet";
    export type SharedDictionaryError = "UseErrorCrossOriginNoCorsRequest"|"UseErrorDictionaryLoadFailure"|"UseErrorMatchingDictionaryNotUsed"|"UseErrorUnexpectedContentDictionaryHeader"|"WriteErrorCossOriginNoCorsRequest"|"WriteErrorDisallowedBySettings"|"WriteErrorExpiredResponse"|"WriteErrorFeatureDisabled"|"WriteErrorInsufficientResources"|"WriteErrorInvalidMatchField"|"WriteErrorInvalidStructuredHeader"|"WriteErrorInvalidTTLField"|"WriteErrorNavigationRequest"|"WriteErrorNoMatchField"|"WriteErrorNonIntegerTTLField"|"WriteErrorNonListMatchDestField"|"WriteErrorNonSecureContext"|"WriteErrorNonStringIdField"|"WriteErrorNonStringInMatchDestList"|"WriteErrorNonStringMatchField"|"WriteErrorNonTokenTypeField"|"WriteErrorRequestAborted"|"WriteErrorShuttingDown"|"WriteErrorTooLongIdField"|"WriteErrorUnsupportedType";
    export type SRIMessageSignatureError = "MissingSignatureHeader"|"MissingSignatureInputHeader"|"InvalidSignatureHeader"|"InvalidSignatureInputHeader"|"SignatureHeaderValueIsNotByteSequence"|"SignatureHeaderValueIsParameterized"|"SignatureHeaderValueIsIncorrectLength"|"SignatureInputHeaderMissingLabel"|"SignatureInputHeaderValueNotInnerList"|"SignatureInputHeaderValueMissingComponents"|"SignatureInputHeaderInvalidComponentType"|"SignatureInputHeaderInvalidComponentName"|"SignatureInputHeaderInvalidHeaderComponentParameter"|"SignatureInputHeaderInvalidDerivedComponentParameter"|"SignatureInputHeaderKeyIdLength"|"SignatureInputHeaderInvalidParameter"|"SignatureInputHeaderMissingRequiredParameters"|"ValidationFailedSignatureExpired"|"ValidationFailedInvalidLength"|"ValidationFailedSignatureMismatch"|"ValidationFailedIntegrityMismatch";
    export type UnencodedDigestError = "MalformedDictionary"|"UnknownAlgorithm"|"IncorrectDigestType"|"IncorrectDigestLength";
    export type ConnectionAllowlistError = "InvalidHeader"|"MoreThanOneList"|"ItemNotInnerList"|"InvalidAllowlistItemType"|"ReportingEndpointNotToken"|"InvalidUrlPattern";
    /**
     * Details for issues around "Attribution Reporting API" usage.
Explainer: https://github.com/WICG/attribution-reporting-api
     */
    export interface AttributionReportingIssueDetails {
      violationType: AttributionReportingIssueType;
      request?: AffectedRequest;
      violatingNodeId?: DOM.BackendNodeId;
      invalidParameter?: string;
    }
    /**
     * Details for issues about documents in Quirks Mode
or Limited Quirks Mode that affects page layouting.
     */
    export interface QuirksModeIssueDetails {
      /**
       * If false, it means the document's mode is "quirks"
instead of "limited-quirks".
       */
      isLimitedQuirksMode: boolean;
      documentNodeId: DOM.BackendNodeId;
      url: string;
      frameId: Page.FrameId;
      loaderId: Network.LoaderId;
    }
    export interface NavigatorUserAgentIssueDetails {
      url: string;
      location?: SourceCodeLocation;
    }
    export interface SharedDictionaryIssueDetails {
      sharedDictionaryError: SharedDictionaryError;
      request: AffectedRequest;
    }
    export interface SRIMessageSignatureIssueDetails {
      error: SRIMessageSignatureError;
      signatureBase: string;
      integrityAssertions: string[];
      request: AffectedRequest;
    }
    export interface UnencodedDigestIssueDetails {
      error: UnencodedDigestError;
      request: AffectedRequest;
    }
    export interface ConnectionAllowlistIssueDetails {
      error: ConnectionAllowlistError;
      request: AffectedRequest;
    }
    export type GenericIssueErrorType = "FormLabelForNameError"|"FormDuplicateIdForInputError"|"FormInputWithNoLabelError"|"FormAutocompleteAttributeEmptyError"|"FormEmptyIdAndNameAttributesForInputError"|"FormAriaLabelledByToNonExistingIdError"|"FormInputAssignedAutocompleteValueToIdOrNameAttributeError"|"FormLabelHasNeitherForNorNestedInputError"|"FormLabelForMatchesNonExistingIdError"|"FormInputHasWrongButWellIntendedAutocompleteValueError"|"ResponseWasBlockedByORB"|"NavigationEntryMarkedSkippable"|"AutofillAndManualTextPolicyControlledFeaturesInfo"|"AutofillPolicyControlledFeatureInfo"|"ManualTextPolicyControlledFeatureInfo"|"FormModelContextParameterMissingTitleAndDescription";
    /**
     * Depending on the concrete errorType, different properties are set.
     */
    export interface GenericIssueDetails {
      /**
       * Issues with the same errorType are aggregated in the frontend.
       */
      errorType: GenericIssueErrorType;
      frameId?: Page.FrameId;
      violatingNodeId?: DOM.BackendNodeId;
      violatingNodeAttribute?: string;
      request?: AffectedRequest;
    }
    /**
     * This issue tracks information needed to print a deprecation message.
https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/frame/third_party/blink/renderer/core/frame/deprecation/README.md
     */
    export interface DeprecationIssueDetails {
      affectedFrame?: AffectedFrame;
      sourceCodeLocation: SourceCodeLocation;
      /**
       * One of the deprecation names from third_party/blink/renderer/core/frame/deprecation/deprecation.json5
       */
      type: string;
    }
    /**
     * This issue warns about sites in the redirect chain of a finished navigation
that may be flagged as trackers and have their state cleared if they don't
receive a user interaction. Note that in this context 'site' means eTLD+1.
For example, if the URL `https://example.test:80/bounce` was in the
redirect chain, the site reported would be `example.test`.
     */
    export interface BounceTrackingIssueDetails {
      trackingSites: string[];
    }
    /**
     * This issue warns about third-party sites that are accessing cookies on the
current page, and have been permitted due to having a global metadata grant.
Note that in this context 'site' means eTLD+1. For example, if the URL
`https://example.test:80/web_page` was accessing cookies, the site reported
would be `example.test`.
     */
    export interface CookieDeprecationMetadataIssueDetails {
      allowedSites: string[];
      optOutPercentage: number;
      isOptOutTopLevel: boolean;
      operation: CookieOperation;
    }
    export type ClientHintIssueReason = "MetaTagAllowListInvalidOrigin"|"MetaTagModifiedHTML";
    export interface FederatedAuthRequestIssueDetails {
      federatedAuthRequestIssueReason: FederatedAuthRequestIssueReason;
    }
    /**
     * Represents the failure reason when a federated authentication reason fails.
Should be updated alongside RequestIdTokenStatus in
third_party/blink/public/mojom/devtools/inspector_issue.mojom to include
all cases except for success.
     */
    export type FederatedAuthRequestIssueReason = "ShouldEmbargo"|"TooManyRequests"|"WellKnownHttpNotFound"|"WellKnownNoResponse"|"WellKnownInvalidResponse"|"WellKnownListEmpty"|"WellKnownInvalidContentType"|"ConfigNotInWellKnown"|"WellKnownTooBig"|"ConfigHttpNotFound"|"ConfigNoResponse"|"ConfigInvalidResponse"|"ConfigInvalidContentType"|"IdpNotPotentiallyTrustworthy"|"DisabledInSettings"|"DisabledInFlags"|"ErrorFetchingSignin"|"InvalidSigninResponse"|"AccountsHttpNotFound"|"AccountsNoResponse"|"AccountsInvalidResponse"|"AccountsListEmpty"|"AccountsInvalidContentType"|"IdTokenHttpNotFound"|"IdTokenNoResponse"|"IdTokenInvalidResponse"|"IdTokenIdpErrorResponse"|"IdTokenCrossSiteIdpErrorResponse"|"IdTokenInvalidRequest"|"IdTokenInvalidContentType"|"ErrorIdToken"|"Canceled"|"RpPageNotVisible"|"SilentMediationFailure"|"NotSignedInWithIdp"|"MissingTransientUserActivation"|"ReplacedByActiveMode"|"RelyingPartyOriginIsOpaque"|"TypeNotMatching"|"UiDismissedNoEmbargo"|"CorsError"|"SuppressedBySegmentationPlatform";
    export interface FederatedAuthUserInfoRequestIssueDetails {
      federatedAuthUserInfoRequestIssueReason: FederatedAuthUserInfoRequestIssueReason;
    }
    /**
     * Represents the failure reason when a getUserInfo() call fails.
Should be updated alongside FederatedAuthUserInfoRequestResult in
third_party/blink/public/mojom/devtools/inspector_issue.mojom.
     */
    export type FederatedAuthUserInfoRequestIssueReason = "NotSameOrigin"|"NotIframe"|"NotPotentiallyTrustworthy"|"NoApiPermission"|"NotSignedInWithIdp"|"NoAccountSharingPermission"|"InvalidConfigOrWellKnown"|"InvalidAccountsResponse"|"NoReturningUserFromFetchedAccounts";
    /**
     * This issue tracks client hints related issues. It's used to deprecate old
features, encourage the use of new ones, and provide general guidance.
     */
    export interface ClientHintIssueDetails {
      sourceCodeLocation: SourceCodeLocation;
      clientHintIssueReason: ClientHintIssueReason;
    }
    export interface FailedRequestInfo {
      /**
       * The URL that failed to load.
       */
      url: string;
      /**
       * The failure message for the failed request.
       */
      failureMessage: string;
      requestId?: Network.RequestId;
    }
    export type PartitioningBlobURLInfo = "BlockedCrossPartitionFetching"|"EnforceNoopenerForNavigation";
    export interface PartitioningBlobURLIssueDetails {
      /**
       * The BlobURL that failed to load.
       */
      url: string;
      /**
       * Additional information about the Partitioning Blob URL issue.
       */
      partitioningBlobURLInfo: PartitioningBlobURLInfo;
    }
    export type ElementAccessibilityIssueReason = "DisallowedSelectChild"|"DisallowedOptGroupChild"|"NonPhrasingContentOptionChild"|"InteractiveContentOptionChild"|"InteractiveContentLegendChild"|"InteractiveContentSummaryDescendant";
    /**
     * This issue warns about errors in the select or summary element content model.
     */
    export interface ElementAccessibilityIssueDetails {
      nodeId: DOM.BackendNodeId;
      elementAccessibilityIssueReason: ElementAccessibilityIssueReason;
      hasDisallowedAttributes: boolean;
    }
    export type StyleSheetLoadingIssueReason = "LateImportRule"|"RequestFailed";
    /**
     * This issue warns when a referenced stylesheet couldn't be loaded.
     */
    export interface StylesheetLoadingIssueDetails {
      /**
       * Source code position that referenced the failing stylesheet.
       */
      sourceCodeLocation: SourceCodeLocation;
      /**
       * Reason why the stylesheet couldn't be loaded.
       */
      styleSheetLoadingIssueReason: StyleSheetLoadingIssueReason;
      /**
       * Contains additional info when the failure was due to a request.
       */
      failedRequestInfo?: FailedRequestInfo;
    }
    export type PropertyRuleIssueReason = "InvalidSyntax"|"InvalidInitialValue"|"InvalidInherits"|"InvalidName";
    /**
     * This issue warns about errors in property rules that lead to property
registrations being ignored.
     */
    export interface PropertyRuleIssueDetails {
      /**
       * Source code position of the property rule.
       */
      sourceCodeLocation: SourceCodeLocation;
      /**
       * Reason why the property rule was discarded.
       */
      propertyRuleIssueReason: PropertyRuleIssueReason;
      /**
       * The value of the property rule property that failed to parse
       */
      propertyValue?: string;
    }
    export type UserReidentificationIssueType = "BlockedFrameNavigation"|"BlockedSubresource"|"NoisedCanvasReadback";
    /**
     * This issue warns about uses of APIs that may be considered misuse to
re-identify users.
     */
    export interface UserReidentificationIssueDetails {
      type: UserReidentificationIssueType;
      /**
       * Applies to BlockedFrameNavigation and BlockedSubresource issue types.
       */
      request?: AffectedRequest;
      /**
       * Applies to NoisedCanvasReadback issue type.
       */
      sourceCodeLocation?: SourceCodeLocation;
    }
    export type PermissionElementIssueType = "InvalidType"|"FencedFrameDisallowed"|"CspFrameAncestorsMissing"|"PermissionsPolicyBlocked"|"PaddingRightUnsupported"|"PaddingBottomUnsupported"|"InsetBoxShadowUnsupported"|"RequestInProgress"|"UntrustedEvent"|"RegistrationFailed"|"TypeNotSupported"|"InvalidTypeActivation"|"SecurityChecksFailed"|"ActivationDisabled"|"GeolocationDeprecated"|"InvalidDisplayStyle"|"NonOpaqueColor"|"LowContrast"|"FontSizeTooSmall"|"FontSizeTooLarge"|"InvalidSizeValue";
    /**
     * This issue warns about improper usage of the <permission> element.
     */
    export interface PermissionElementIssueDetails {
      issueType: PermissionElementIssueType;
      /**
       * The value of the type attribute.
       */
      type?: string;
      /**
       * The node ID of the <permission> element.
       */
      nodeId?: DOM.BackendNodeId;
      /**
       * True if the issue is a warning, false if it is an error.
       */
      isWarning?: boolean;
      /**
       * Fields for message construction:
Used for messages that reference a specific permission name
       */
      permissionName?: string;
      /**
       * Used for messages about occlusion
       */
      occluderNodeInfo?: string;
      /**
       * Used for messages about occluder's parent
       */
      occluderParentNodeInfo?: string;
      /**
       * Used for messages about activation disabled reason
       */
      disableReason?: string;
    }
    /**
     * The issue warns about blocked calls to privacy sensitive APIs via the
Selective Permissions Intervention.
     */
    export interface SelectivePermissionsInterventionIssueDetails {
      /**
       * Which API was intervened on.
       */
      apiName: string;
      /**
       * Why the ad script using the API is considered an ad.
       */
      adAncestry: Network.AdAncestry;
      /**
       * The stack trace at the time of the intervention.
       */
      stackTrace?: Runtime.StackTrace;
    }
    /**
     * A unique identifier for the type of issue. Each type may use one of the
optional fields in InspectorIssueDetails to convey more specific
information about the kind of issue.
     */
    export type InspectorIssueCode = "CookieIssue"|"MixedContentIssue"|"BlockedByResponseIssue"|"HeavyAdIssue"|"ContentSecurityPolicyIssue"|"SharedArrayBufferIssue"|"CorsIssue"|"AttributionReportingIssue"|"QuirksModeIssue"|"PartitioningBlobURLIssue"|"NavigatorUserAgentIssue"|"GenericIssue"|"DeprecationIssue"|"ClientHintIssue"|"FederatedAuthRequestIssue"|"BounceTrackingIssue"|"CookieDeprecationMetadataIssue"|"StylesheetLoadingIssue"|"FederatedAuthUserInfoRequestIssue"|"PropertyRuleIssue"|"SharedDictionaryIssue"|"ElementAccessibilityIssue"|"SRIMessageSignatureIssue"|"UnencodedDigestIssue"|"ConnectionAllowlistIssue"|"UserReidentificationIssue"|"PermissionElementIssue"|"PerformanceIssue"|"SelectivePermissionsInterventionIssue";
    /**
     * This struct holds a list of optional fields with additional information
specific to the kind of issue. When adding a new issue code, please also
add a new optional field to this type.
     */
    export interface InspectorIssueDetails {
      cookieIssueDetails?: CookieIssueDetails;
      mixedContentIssueDetails?: MixedContentIssueDetails;
      blockedByResponseIssueDetails?: BlockedByResponseIssueDetails;
      heavyAdIssueDetails?: HeavyAdIssueDetails;
      contentSecurityPolicyIssueDetails?: ContentSecurityPolicyIssueDetails;
      sharedArrayBufferIssueDetails?: SharedArrayBufferIssueDetails;
      corsIssueDetails?: CorsIssueDetails;
      attributionReportingIssueDetails?: AttributionReportingIssueDetails;
      quirksModeIssueDetails?: QuirksModeIssueDetails;
      partitioningBlobURLIssueDetails?: PartitioningBlobURLIssueDetails;
      navigatorUserAgentIssueDetails?: NavigatorUserAgentIssueDetails;
      genericIssueDetails?: GenericIssueDetails;
      deprecationIssueDetails?: DeprecationIssueDetails;
      clientHintIssueDetails?: ClientHintIssueDetails;
      federatedAuthRequestIssueDetails?: FederatedAuthRequestIssueDetails;
      bounceTrackingIssueDetails?: BounceTrackingIssueDetails;
      cookieDeprecationMetadataIssueDetails?: CookieDeprecationMetadataIssueDetails;
      stylesheetLoadingIssueDetails?: StylesheetLoadingIssueDetails;
      propertyRuleIssueDetails?: PropertyRuleIssueDetails;
      federatedAuthUserInfoRequestIssueDetails?: FederatedAuthUserInfoRequestIssueDetails;
      sharedDictionaryIssueDetails?: SharedDictionaryIssueDetails;
      elementAccessibilityIssueDetails?: ElementAccessibilityIssueDetails;
      sriMessageSignatureIssueDetails?: SRIMessageSignatureIssueDetails;
      unencodedDigestIssueDetails?: UnencodedDigestIssueDetails;
      connectionAllowlistIssueDetails?: ConnectionAllowlistIssueDetails;
      userReidentificationIssueDetails?: UserReidentificationIssueDetails;
      permissionElementIssueDetails?: PermissionElementIssueDetails;
      performanceIssueDetails?: PerformanceIssueDetails;
      selectivePermissionsInterventionIssueDetails?: SelectivePermissionsInterventionIssueDetails;
    }
    /**
     * A unique id for a DevTools inspector issue. Allows other entities (e.g.
exceptions, CDP message, console messages, etc.) to reference an issue.
     */
    export type IssueId = string;
    /**
     * An inspector issue reported from the back-end.
     */
    export interface InspectorIssue {
      code: InspectorIssueCode;
      details: InspectorIssueDetails;
      /**
       * A unique id for this issue. May be omitted if no other entity (e.g.
exception, CDP message, etc.) is referencing this issue.
       */
      issueId?: IssueId;
    }
    
    export type issueAddedPayload = {
      issue: InspectorIssue;
    }
    
    /**
     * Returns the response body and size if it were re-encoded with the specified settings. Only
applies to images.
     */
    export type getEncodedResponseParameters = {
      /**
       * Identifier of the network request to get content for.
       */
      requestId: Network.RequestId;
      /**
       * The encoding to use.
       */
      encoding: "webp"|"jpeg"|"png";
      /**
       * The quality of the encoding (0-1). (defaults to 1)
       */
      quality?: number;
      /**
       * Whether to only return the size information (defaults to false).
       */
      sizeOnly?: boolean;
    }
    export type getEncodedResponseReturnValue = {
      /**
       * The encoded body as a base64 string. Omitted if sizeOnly is true.
       */
      body?: binary;
      /**
       * Size before re-encoding.
       */
      originalSize: number;
      /**
       * Size after re-encoding.
       */
      encodedSize: number;
    }
    /**
     * Disables issues domain, prevents further issues from being reported to the client.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables issues domain, sends the issues collected so far to the client by means of the
`issueAdded` event.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Runs the form issues check for the target page. Found issues are reported
using Audits.issueAdded event.
     */
    export type checkFormsIssuesParameters = {
    }
    export type checkFormsIssuesReturnValue = {
      formIssues: GenericIssueDetails[];
    }
  }
  
  /**
   * Defines commands and events for Autofill.
   */
  export namespace Autofill {
    export interface CreditCard {
      /**
       * 16-digit credit card number.
       */
      number: string;
      /**
       * Name of the credit card owner.
       */
      name: string;
      /**
       * 2-digit expiry month.
       */
      expiryMonth: string;
      /**
       * 4-digit expiry year.
       */
      expiryYear: string;
      /**
       * 3-digit card verification code.
       */
      cvc: string;
    }
    export interface AddressField {
      /**
       * address field name, for example GIVEN_NAME.
The full list of supported field names:
https://source.chromium.org/chromium/chromium/src/+/main:components/autofill/core/browser/field_types.cc;l=38
       */
      name: string;
      /**
       * address field value, for example Jon Doe.
       */
      value: string;
    }
    /**
     * A list of address fields.
     */
    export interface AddressFields {
      fields: AddressField[];
    }
    export interface Address {
      /**
       * fields and values defining an address.
       */
      fields: AddressField[];
    }
    /**
     * Defines how an address can be displayed like in chrome://settings/addresses.
Address UI is a two dimensional array, each inner array is an "address information line", and when rendered in a UI surface should be displayed as such.
The following address UI for instance:
[[{name: "GIVE_NAME", value: "Jon"}, {name: "FAMILY_NAME", value: "Doe"}], [{name: "CITY", value: "Munich"}, {name: "ZIP", value: "81456"}]]
should allow the receiver to render:
Jon Doe
Munich 81456
     */
    export interface AddressUI {
      /**
       * A two dimension array containing the representation of values from an address profile.
       */
      addressFields: AddressFields[];
    }
    /**
     * Specified whether a filled field was done so by using the html autocomplete attribute or autofill heuristics.
     */
    export type FillingStrategy = "autocompleteAttribute"|"autofillInferred";
    export interface FilledField {
      /**
       * The type of the field, e.g text, password etc.
       */
      htmlType: string;
      /**
       * the html id
       */
      id: string;
      /**
       * the html name
       */
      name: string;
      /**
       * the field value
       */
      value: string;
      /**
       * The actual field type, e.g FAMILY_NAME
       */
      autofillType: string;
      /**
       * The filling strategy
       */
      fillingStrategy: FillingStrategy;
      /**
       * The frame the field belongs to
       */
      frameId: Page.FrameId;
      /**
       * The form field's DOM node
       */
      fieldId: DOM.BackendNodeId;
    }
    
    /**
     * Emitted when an address form is filled.
     */
    export type addressFormFilledPayload = {
      /**
       * Information about the fields that were filled
       */
      filledFields: FilledField[];
      /**
       * An UI representation of the address used to fill the form.
Consists of a 2D array where each child represents an address/profile line.
       */
      addressUi: AddressUI;
    }
    
    /**
     * Trigger autofill on a form identified by the fieldId.
If the field and related form cannot be autofilled, returns an error.
     */
    export type triggerParameters = {
      /**
       * Identifies a field that serves as an anchor for autofill.
       */
      fieldId: DOM.BackendNodeId;
      /**
       * Identifies the frame that field belongs to.
       */
      frameId?: Page.FrameId;
      /**
       * Credit card information to fill out the form. Credit card data is not saved.  Mutually exclusive with `address`.
       */
      card?: CreditCard;
      /**
       * Address to fill out the form. Address data is not saved. Mutually exclusive with `card`.
       */
      address?: Address;
    }
    export type triggerReturnValue = {
    }
    /**
     * Set addresses so that developers can verify their forms implementation.
     */
    export type setAddressesParameters = {
      addresses: Address[];
    }
    export type setAddressesReturnValue = {
    }
    /**
     * Disables autofill domain notifications.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables autofill domain notifications.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
  }
  
  /**
   * Defines events for background web platform features.
   */
  export namespace BackgroundService {
    /**
     * The Background Service that will be associated with the commands/events.
Every Background Service operates independently, but they share the same
API.
     */
    export type ServiceName = "backgroundFetch"|"backgroundSync"|"pushMessaging"|"notifications"|"paymentHandler"|"periodicBackgroundSync";
    /**
     * A key-value pair for additional event information to pass along.
     */
    export interface EventMetadata {
      key: string;
      value: string;
    }
    export interface BackgroundServiceEvent {
      /**
       * Timestamp of the event (in seconds).
       */
      timestamp: Network.TimeSinceEpoch;
      /**
       * The origin this event belongs to.
       */
      origin: string;
      /**
       * The Service Worker ID that initiated the event.
       */
      serviceWorkerRegistrationId: ServiceWorker.RegistrationID;
      /**
       * The Background Service this event belongs to.
       */
      service: ServiceName;
      /**
       * A description of the event.
       */
      eventName: string;
      /**
       * An identifier that groups related events together.
       */
      instanceId: string;
      /**
       * A list of event-specific information.
       */
      eventMetadata: EventMetadata[];
      /**
       * Storage key this event belongs to.
       */
      storageKey: string;
    }
    
    /**
     * Called when the recording state for the service has been updated.
     */
    export type recordingStateChangedPayload = {
      isRecording: boolean;
      service: ServiceName;
    }
    /**
     * Called with all existing backgroundServiceEvents when enabled, and all new
events afterwards if enabled and recording.
     */
    export type backgroundServiceEventReceivedPayload = {
      backgroundServiceEvent: BackgroundServiceEvent;
    }
    
    /**
     * Enables event updates for the service.
     */
    export type startObservingParameters = {
      service: ServiceName;
    }
    export type startObservingReturnValue = {
    }
    /**
     * Disables event updates for the service.
     */
    export type stopObservingParameters = {
      service: ServiceName;
    }
    export type stopObservingReturnValue = {
    }
    /**
     * Set the recording state for the service.
     */
    export type setRecordingParameters = {
      shouldRecord: boolean;
      service: ServiceName;
    }
    export type setRecordingReturnValue = {
    }
    /**
     * Clears all stored data for the service.
     */
    export type clearEventsParameters = {
      service: ServiceName;
    }
    export type clearEventsReturnValue = {
    }
  }
  
  /**
   * This domain allows configuring virtual Bluetooth devices to test
the web-bluetooth API.
   */
  export namespace BluetoothEmulation {
    /**
     * Indicates the various states of Central.
     */
    export type CentralState = "absent"|"powered-off"|"powered-on";
    /**
     * Indicates the various types of GATT event.
     */
    export type GATTOperationType = "connection"|"discovery";
    /**
     * Indicates the various types of characteristic write.
     */
    export type CharacteristicWriteType = "write-default-deprecated"|"write-with-response"|"write-without-response";
    /**
     * Indicates the various types of characteristic operation.
     */
    export type CharacteristicOperationType = "read"|"write"|"subscribe-to-notifications"|"unsubscribe-from-notifications";
    /**
     * Indicates the various types of descriptor operation.
     */
    export type DescriptorOperationType = "read"|"write";
    /**
     * Stores the manufacturer data
     */
    export interface ManufacturerData {
      /**
       * Company identifier
https://bitbucket.org/bluetooth-SIG/public/src/main/assigned_numbers/company_identifiers/company_identifiers.yaml
https://usb.org/developers
       */
      key: number;
      /**
       * Manufacturer-specific data
       */
      data: binary;
    }
    /**
     * Stores the byte data of the advertisement packet sent by a Bluetooth device.
     */
    export interface ScanRecord {
      name?: string;
      uuids?: string[];
      /**
       * Stores the external appearance description of the device.
       */
      appearance?: number;
      /**
       * Stores the transmission power of a broadcasting device.
       */
      txPower?: number;
      /**
       * Key is the company identifier and the value is an array of bytes of
manufacturer specific data.
       */
      manufacturerData?: ManufacturerData[];
    }
    /**
     * Stores the advertisement packet information that is sent by a Bluetooth device.
     */
    export interface ScanEntry {
      deviceAddress: string;
      rssi: number;
      scanRecord: ScanRecord;
    }
    /**
     * Describes the properties of a characteristic. This follows Bluetooth Core
Specification BT 4.2 Vol 3 Part G 3.3.1. Characteristic Properties.
     */
    export interface CharacteristicProperties {
      broadcast?: boolean;
      read?: boolean;
      writeWithoutResponse?: boolean;
      write?: boolean;
      notify?: boolean;
      indicate?: boolean;
      authenticatedSignedWrites?: boolean;
      extendedProperties?: boolean;
    }
    
    /**
     * Event for when a GATT operation of |type| to the peripheral with |address|
happened.
     */
    export type gattOperationReceivedPayload = {
      address: string;
      type: GATTOperationType;
    }
    /**
     * Event for when a characteristic operation of |type| to the characteristic
respresented by |characteristicId| happened. |data| and |writeType| is
expected to exist when |type| is write.
     */
    export type characteristicOperationReceivedPayload = {
      characteristicId: string;
      type: CharacteristicOperationType;
      data?: binary;
      writeType?: CharacteristicWriteType;
    }
    /**
     * Event for when a descriptor operation of |type| to the descriptor
respresented by |descriptorId| happened. |data| is expected to exist when
|type| is write.
     */
    export type descriptorOperationReceivedPayload = {
      descriptorId: string;
      type: DescriptorOperationType;
      data?: binary;
    }
    
    /**
     * Enable the BluetoothEmulation domain.
     */
    export type enableParameters = {
      /**
       * State of the simulated central.
       */
      state: CentralState;
      /**
       * If the simulated central supports low-energy.
       */
      leSupported: boolean;
    }
    export type enableReturnValue = {
    }
    /**
     * Set the state of the simulated central.
     */
    export type setSimulatedCentralStateParameters = {
      /**
       * State of the simulated central.
       */
      state: CentralState;
    }
    export type setSimulatedCentralStateReturnValue = {
    }
    /**
     * Disable the BluetoothEmulation domain.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Simulates a peripheral with |address|, |name| and |knownServiceUuids|
that has already been connected to the system.
     */
    export type simulatePreconnectedPeripheralParameters = {
      address: string;
      name: string;
      manufacturerData: ManufacturerData[];
      knownServiceUuids: string[];
    }
    export type simulatePreconnectedPeripheralReturnValue = {
    }
    /**
     * Simulates an advertisement packet described in |entry| being received by
the central.
     */
    export type simulateAdvertisementParameters = {
      entry: ScanEntry;
    }
    export type simulateAdvertisementReturnValue = {
    }
    /**
     * Simulates the response code from the peripheral with |address| for a
GATT operation of |type|. The |code| value follows the HCI Error Codes from
Bluetooth Core Specification Vol 2 Part D 1.3 List Of Error Codes.
     */
    export type simulateGATTOperationResponseParameters = {
      address: string;
      type: GATTOperationType;
      code: number;
    }
    export type simulateGATTOperationResponseReturnValue = {
    }
    /**
     * Simulates the response from the characteristic with |characteristicId| for a
characteristic operation of |type|. The |code| value follows the Error
Codes from Bluetooth Core Specification Vol 3 Part F 3.4.1.1 Error Response.
The |data| is expected to exist when simulating a successful read operation
response.
     */
    export type simulateCharacteristicOperationResponseParameters = {
      characteristicId: string;
      type: CharacteristicOperationType;
      code: number;
      data?: binary;
    }
    export type simulateCharacteristicOperationResponseReturnValue = {
    }
    /**
     * Simulates the response from the descriptor with |descriptorId| for a
descriptor operation of |type|. The |code| value follows the Error
Codes from Bluetooth Core Specification Vol 3 Part F 3.4.1.1 Error Response.
The |data| is expected to exist when simulating a successful read operation
response.
     */
    export type simulateDescriptorOperationResponseParameters = {
      descriptorId: string;
      type: DescriptorOperationType;
      code: number;
      data?: binary;
    }
    export type simulateDescriptorOperationResponseReturnValue = {
    }
    /**
     * Adds a service with |serviceUuid| to the peripheral with |address|.
     */
    export type addServiceParameters = {
      address: string;
      serviceUuid: string;
    }
    export type addServiceReturnValue = {
      /**
       * An identifier that uniquely represents this service.
       */
      serviceId: string;
    }
    /**
     * Removes the service respresented by |serviceId| from the simulated central.
     */
    export type removeServiceParameters = {
      serviceId: string;
    }
    export type removeServiceReturnValue = {
    }
    /**
     * Adds a characteristic with |characteristicUuid| and |properties| to the
service represented by |serviceId|.
     */
    export type addCharacteristicParameters = {
      serviceId: string;
      characteristicUuid: string;
      properties: CharacteristicProperties;
    }
    export type addCharacteristicReturnValue = {
      /**
       * An identifier that uniquely represents this characteristic.
       */
      characteristicId: string;
    }
    /**
     * Removes the characteristic respresented by |characteristicId| from the
simulated central.
     */
    export type removeCharacteristicParameters = {
      characteristicId: string;
    }
    export type removeCharacteristicReturnValue = {
    }
    /**
     * Adds a descriptor with |descriptorUuid| to the characteristic respresented
by |characteristicId|.
     */
    export type addDescriptorParameters = {
      characteristicId: string;
      descriptorUuid: string;
    }
    export type addDescriptorReturnValue = {
      /**
       * An identifier that uniquely represents this descriptor.
       */
      descriptorId: string;
    }
    /**
     * Removes the descriptor with |descriptorId| from the simulated central.
     */
    export type removeDescriptorParameters = {
      descriptorId: string;
    }
    export type removeDescriptorReturnValue = {
    }
    /**
     * Simulates a GATT disconnection from the peripheral with |address|.
     */
    export type simulateGATTDisconnectionParameters = {
      address: string;
    }
    export type simulateGATTDisconnectionReturnValue = {
    }
  }
  
  /**
   * The Browser domain defines methods and events for browser managing.
   */
  export namespace Browser {
    export type BrowserContextID = string;
    export type WindowID = number;
    /**
     * The state of the browser window.
     */
    export type WindowState = "normal"|"minimized"|"maximized"|"fullscreen";
    /**
     * Browser window bounds information
     */
    export interface Bounds {
      /**
       * The offset from the left edge of the screen to the window in pixels.
       */
      left?: number;
      /**
       * The offset from the top edge of the screen to the window in pixels.
       */
      top?: number;
      /**
       * The window width in pixels.
       */
      width?: number;
      /**
       * The window height in pixels.
       */
      height?: number;
      /**
       * The window state. Default to normal.
       */
      windowState?: WindowState;
    }
    export type PermissionType = "ar"|"audioCapture"|"automaticFullscreen"|"backgroundFetch"|"backgroundSync"|"cameraPanTiltZoom"|"capturedSurfaceControl"|"clipboardReadWrite"|"clipboardSanitizedWrite"|"displayCapture"|"durableStorage"|"geolocation"|"handTracking"|"idleDetection"|"keyboardLock"|"localFonts"|"localNetwork"|"localNetworkAccess"|"loopbackNetwork"|"midi"|"midiSysex"|"nfc"|"notifications"|"paymentHandler"|"periodicBackgroundSync"|"pointerLock"|"protectedMediaIdentifier"|"sensors"|"smartCard"|"speakerSelection"|"storageAccess"|"topLevelStorageAccess"|"videoCapture"|"vr"|"wakeLockScreen"|"wakeLockSystem"|"webAppInstallation"|"webPrinting"|"windowManagement";
    export type PermissionSetting = "granted"|"denied"|"prompt";
    /**
     * Definition of PermissionDescriptor defined in the Permissions API:
https://w3c.github.io/permissions/#dom-permissiondescriptor.
     */
    export interface PermissionDescriptor {
      /**
       * Name of permission.
See https://cs.chromium.org/chromium/src/third_party/blink/renderer/modules/permissions/permission_descriptor.idl for valid permission names.
       */
      name: string;
      /**
       * For "midi" permission, may also specify sysex control.
       */
      sysex?: boolean;
      /**
       * For "push" permission, may specify userVisibleOnly.
Note that userVisibleOnly = true is the only currently supported type.
       */
      userVisibleOnly?: boolean;
      /**
       * For "clipboard" permission, may specify allowWithoutSanitization.
       */
      allowWithoutSanitization?: boolean;
      /**
       * For "fullscreen" permission, must specify allowWithoutGesture:true.
       */
      allowWithoutGesture?: boolean;
      /**
       * For "camera" permission, may specify panTiltZoom.
       */
      panTiltZoom?: boolean;
    }
    /**
     * Browser command ids used by executeBrowserCommand.
     */
    export type BrowserCommandId = "openTabSearch"|"closeTabSearch"|"openGlic";
    /**
     * Chrome histogram bucket.
     */
    export interface Bucket {
      /**
       * Minimum value (inclusive).
       */
      low: number;
      /**
       * Maximum value (exclusive).
       */
      high: number;
      /**
       * Number of samples.
       */
      count: number;
    }
    /**
     * Chrome histogram.
     */
    export interface Histogram {
      /**
       * Name.
       */
      name: string;
      /**
       * Sum of sample values.
       */
      sum: number;
      /**
       * Total number of samples.
       */
      count: number;
      /**
       * Buckets.
       */
      buckets: Bucket[];
    }
    export type PrivacySandboxAPI = "BiddingAndAuctionServices"|"TrustedKeyValue";
    
    /**
     * Fired when page is about to start a download.
     */
    export type downloadWillBeginPayload = {
      /**
       * Id of the frame that caused the download to begin.
       */
      frameId: Page.FrameId;
      /**
       * Global unique identifier of the download.
       */
      guid: string;
      /**
       * URL of the resource being downloaded.
       */
      url: string;
      /**
       * Suggested file name of the resource (the actual name of the file saved on disk may differ).
       */
      suggestedFilename: string;
    }
    /**
     * Fired when download makes progress. Last call has |done| == true.
     */
    export type downloadProgressPayload = {
      /**
       * Global unique identifier of the download.
       */
      guid: string;
      /**
       * Total expected bytes to download.
       */
      totalBytes: number;
      /**
       * Total bytes received.
       */
      receivedBytes: number;
      /**
       * Download status.
       */
      state: "inProgress"|"completed"|"canceled";
      /**
       * If download is "completed", provides the path of the downloaded file.
Depending on the platform, it is not guaranteed to be set, nor the file
is guaranteed to exist.
       */
      filePath?: string;
    }
    
    /**
     * Set permission settings for given embedding and embedded origins.
     */
    export type setPermissionParameters = {
      /**
       * Descriptor of permission to override.
       */
      permission: PermissionDescriptor;
      /**
       * Setting of the permission.
       */
      setting: PermissionSetting;
      /**
       * Embedding origin the permission applies to, all origins if not specified.
       */
      origin?: string;
      /**
       * Embedded origin the permission applies to. It is ignored unless the embedding origin is
present and valid. If the embedding origin is provided but the embedded origin isn't, the
embedding origin is used as the embedded origin.
       */
      embeddedOrigin?: string;
      /**
       * Context to override. When omitted, default browser context is used.
       */
      browserContextId?: BrowserContextID;
    }
    export type setPermissionReturnValue = {
    }
    /**
     * Grant specific permissions to the given origin and reject all others. Deprecated. Use
setPermission instead.
     */
    export type grantPermissionsParameters = {
      permissions: PermissionType[];
      /**
       * Origin the permission applies to, all origins if not specified.
       */
      origin?: string;
      /**
       * BrowserContext to override permissions. When omitted, default browser context is used.
       */
      browserContextId?: BrowserContextID;
    }
    export type grantPermissionsReturnValue = {
    }
    /**
     * Reset all permission management for all origins.
     */
    export type resetPermissionsParameters = {
      /**
       * BrowserContext to reset permissions. When omitted, default browser context is used.
       */
      browserContextId?: BrowserContextID;
    }
    export type resetPermissionsReturnValue = {
    }
    /**
     * Set the behavior when downloading a file.
     */
    export type setDownloadBehaviorParameters = {
      /**
       * Whether to allow all or deny all download requests, or use default Chrome behavior if
available (otherwise deny). |allowAndName| allows download and names files according to
their download guids.
       */
      behavior: "deny"|"allow"|"allowAndName"|"default";
      /**
       * BrowserContext to set download behavior. When omitted, default browser context is used.
       */
      browserContextId?: BrowserContextID;
      /**
       * The default path to save downloaded files to. This is required if behavior is set to 'allow'
or 'allowAndName'.
       */
      downloadPath?: string;
      /**
       * Whether to emit download events (defaults to false).
       */
      eventsEnabled?: boolean;
    }
    export type setDownloadBehaviorReturnValue = {
    }
    /**
     * Cancel a download if in progress
     */
    export type cancelDownloadParameters = {
      /**
       * Global unique identifier of the download.
       */
      guid: string;
      /**
       * BrowserContext to perform the action in. When omitted, default browser context is used.
       */
      browserContextId?: BrowserContextID;
    }
    export type cancelDownloadReturnValue = {
    }
    /**
     * Close browser gracefully.
     */
    export type closeParameters = {
    }
    export type closeReturnValue = {
    }
    /**
     * Crashes browser on the main thread.
     */
    export type crashParameters = {
    }
    export type crashReturnValue = {
    }
    /**
     * Crashes GPU process.
     */
    export type crashGpuProcessParameters = {
    }
    export type crashGpuProcessReturnValue = {
    }
    /**
     * Returns version information.
     */
    export type getVersionParameters = {
    }
    export type getVersionReturnValue = {
      /**
       * Protocol version.
       */
      protocolVersion: string;
      /**
       * Product name.
       */
      product: string;
      /**
       * Product revision.
       */
      revision: string;
      /**
       * User-Agent.
       */
      userAgent: string;
      /**
       * V8 version.
       */
      jsVersion: string;
    }
    /**
     * Returns the command line switches for the browser process if, and only if
--enable-automation is on the commandline.
     */
    export type getBrowserCommandLineParameters = {
    }
    export type getBrowserCommandLineReturnValue = {
      /**
       * Commandline parameters
       */
      arguments: string[];
    }
    /**
     * Get Chrome histograms.
     */
    export type getHistogramsParameters = {
      /**
       * Requested substring in name. Only histograms which have query as a
substring in their name are extracted. An empty or absent query returns
all histograms.
       */
      query?: string;
      /**
       * If true, retrieve delta since last delta call.
       */
      delta?: boolean;
    }
    export type getHistogramsReturnValue = {
      /**
       * Histograms.
       */
      histograms: Histogram[];
    }
    /**
     * Get a Chrome histogram by name.
     */
    export type getHistogramParameters = {
      /**
       * Requested histogram name.
       */
      name: string;
      /**
       * If true, retrieve delta since last delta call.
       */
      delta?: boolean;
    }
    export type getHistogramReturnValue = {
      /**
       * Histogram.
       */
      histogram: Histogram;
    }
    /**
     * Get position and size of the browser window.
     */
    export type getWindowBoundsParameters = {
      /**
       * Browser window id.
       */
      windowId: WindowID;
    }
    export type getWindowBoundsReturnValue = {
      /**
       * Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned.
       */
      bounds: Bounds;
    }
    /**
     * Get the browser window that contains the devtools target.
     */
    export type getWindowForTargetParameters = {
      /**
       * Devtools agent host id. If called as a part of the session, associated targetId is used.
       */
      targetId?: Target.TargetID;
    }
    export type getWindowForTargetReturnValue = {
      /**
       * Browser window id.
       */
      windowId: WindowID;
      /**
       * Bounds information of the window. When window state is 'minimized', the restored window
position and size are returned.
       */
      bounds: Bounds;
    }
    /**
     * Set position and/or size of the browser window.
     */
    export type setWindowBoundsParameters = {
      /**
       * Browser window id.
       */
      windowId: WindowID;
      /**
       * New window bounds. The 'minimized', 'maximized' and 'fullscreen' states cannot be combined
with 'left', 'top', 'width' or 'height'. Leaves unspecified fields unchanged.
       */
      bounds: Bounds;
    }
    export type setWindowBoundsReturnValue = {
    }
    /**
     * Set size of the browser contents resizing browser window as necessary.
     */
    export type setContentsSizeParameters = {
      /**
       * Browser window id.
       */
      windowId: WindowID;
      /**
       * The window contents width in DIP. Assumes current width if omitted.
Must be specified if 'height' is omitted.
       */
      width?: number;
      /**
       * The window contents height in DIP. Assumes current height if omitted.
Must be specified if 'width' is omitted.
       */
      height?: number;
    }
    export type setContentsSizeReturnValue = {
    }
    /**
     * Set dock tile details, platform-specific.
     */
    export type setDockTileParameters = {
      badgeLabel?: string;
      /**
       * Png encoded image.
       */
      image?: binary;
    }
    export type setDockTileReturnValue = {
    }
    /**
     * Invoke custom browser commands used by telemetry.
     */
    export type executeBrowserCommandParameters = {
      commandId: BrowserCommandId;
    }
    export type executeBrowserCommandReturnValue = {
    }
    /**
     * Allows a site to use privacy sandbox features that require enrollment
without the site actually being enrolled. Only supported on page targets.
     */
    export type addPrivacySandboxEnrollmentOverrideParameters = {
      url: string;
    }
    export type addPrivacySandboxEnrollmentOverrideReturnValue = {
    }
    /**
     * Configures encryption keys used with a given privacy sandbox API to talk
to a trusted coordinator.  Since this is intended for test automation only,
coordinatorOrigin must be a .test domain. No existing coordinator
configuration for the origin may exist.
     */
    export type addPrivacySandboxCoordinatorKeyConfigParameters = {
      api: PrivacySandboxAPI;
      coordinatorOrigin: string;
      keyConfig: string;
      /**
       * BrowserContext to perform the action in. When omitted, default browser
context is used.
       */
      browserContextId?: BrowserContextID;
    }
    export type addPrivacySandboxCoordinatorKeyConfigReturnValue = {
    }
  }
  
  /**
   * This domain exposes CSS read/write operations. All CSS objects (stylesheets, rules, and styles)
have an associated `id` used in subsequent operations on the related object. Each object type has
a specific `id` structure, and those are not interchangeable between objects of different kinds.
CSS objects can be loaded using the `get*ForNode()` calls (which accept a DOM node id). A client
can also keep track of stylesheets via the `styleSheetAdded`/`styleSheetRemoved` events and
subsequently load the required stylesheet contents using the `getStyleSheet[Text]()` methods.
   */
  export namespace CSS {
    /**
     * Stylesheet type: "injected" for stylesheets injected via extension, "user-agent" for user-agent
stylesheets, "inspector" for stylesheets created by the inspector (i.e. those holding the "via
inspector" rules), "regular" for regular stylesheets.
     */
    export type StyleSheetOrigin = "injected"|"user-agent"|"inspector"|"regular";
    /**
     * CSS rule collection for a single pseudo style.
     */
    export interface PseudoElementMatches {
      /**
       * Pseudo element type.
       */
      pseudoType: DOM.PseudoType;
      /**
       * Pseudo element custom ident.
       */
      pseudoIdentifier?: string;
      /**
       * Matches of CSS rules applicable to the pseudo style.
       */
      matches: RuleMatch[];
    }
    /**
     * CSS style coming from animations with the name of the animation.
     */
    export interface CSSAnimationStyle {
      /**
       * The name of the animation.
       */
      name?: string;
      /**
       * The style coming from the animation.
       */
      style: CSSStyle;
    }
    /**
     * Inherited CSS rule collection from ancestor node.
     */
    export interface InheritedStyleEntry {
      /**
       * The ancestor node's inline style, if any, in the style inheritance chain.
       */
      inlineStyle?: CSSStyle;
      /**
       * Matches of CSS rules matching the ancestor node in the style inheritance chain.
       */
      matchedCSSRules: RuleMatch[];
    }
    /**
     * Inherited CSS style collection for animated styles from ancestor node.
     */
    export interface InheritedAnimatedStyleEntry {
      /**
       * Styles coming from the animations of the ancestor, if any, in the style inheritance chain.
       */
      animationStyles?: CSSAnimationStyle[];
      /**
       * The style coming from the transitions of the ancestor, if any, in the style inheritance chain.
       */
      transitionsStyle?: CSSStyle;
    }
    /**
     * Inherited pseudo element matches from pseudos of an ancestor node.
     */
    export interface InheritedPseudoElementMatches {
      /**
       * Matches of pseudo styles from the pseudos of an ancestor node.
       */
      pseudoElements: PseudoElementMatches[];
    }
    /**
     * Match data for a CSS rule.
     */
    export interface RuleMatch {
      /**
       * CSS rule in the match.
       */
      rule: CSSRule;
      /**
       * Matching selector indices in the rule's selectorList selectors (0-based).
       */
      matchingSelectors: number[];
    }
    /**
     * Data for a simple selector (these are delimited by commas in a selector list).
     */
    export interface Value {
      /**
       * Value text.
       */
      text: string;
      /**
       * Value range in the underlying resource (if available).
       */
      range?: SourceRange;
      /**
       * Specificity of the selector.
       */
      specificity?: Specificity;
    }
    /**
     * Specificity:
https://drafts.csswg.org/selectors/#specificity-rules
     */
    export interface Specificity {
      /**
       * The a component, which represents the number of ID selectors.
       */
      a: number;
      /**
       * The b component, which represents the number of class selectors, attributes selectors, and
pseudo-classes.
       */
      b: number;
      /**
       * The c component, which represents the number of type selectors and pseudo-elements.
       */
      c: number;
    }
    /**
     * Selector list data.
     */
    export interface SelectorList {
      /**
       * Selectors in the list.
       */
      selectors: Value[];
      /**
       * Rule selector text.
       */
      text: string;
    }
    /**
     * CSS stylesheet metainformation.
     */
    export interface CSSStyleSheetHeader {
      /**
       * The stylesheet identifier.
       */
      styleSheetId: DOM.StyleSheetId;
      /**
       * Owner frame identifier.
       */
      frameId: Page.FrameId;
      /**
       * Stylesheet resource URL. Empty if this is a constructed stylesheet created using
new CSSStyleSheet() (but non-empty if this is a constructed stylesheet imported
as a CSS module script).
       */
      sourceURL: string;
      /**
       * URL of source map associated with the stylesheet (if any).
       */
      sourceMapURL?: string;
      /**
       * Stylesheet origin.
       */
      origin: StyleSheetOrigin;
      /**
       * Stylesheet title.
       */
      title: string;
      /**
       * The backend id for the owner node of the stylesheet.
       */
      ownerNode?: DOM.BackendNodeId;
      /**
       * Denotes whether the stylesheet is disabled.
       */
      disabled: boolean;
      /**
       * Whether the sourceURL field value comes from the sourceURL comment.
       */
      hasSourceURL?: boolean;
      /**
       * Whether this stylesheet is created for STYLE tag by parser. This flag is not set for
document.written STYLE tags.
       */
      isInline: boolean;
      /**
       * Whether this stylesheet is mutable. Inline stylesheets become mutable
after they have been modified via CSSOM API.
`<link>` element's stylesheets become mutable only if DevTools modifies them.
Constructed stylesheets (new CSSStyleSheet()) are mutable immediately after creation.
       */
      isMutable: boolean;
      /**
       * True if this stylesheet is created through new CSSStyleSheet() or imported as a
CSS module script.
       */
      isConstructed: boolean;
      /**
       * Line offset of the stylesheet within the resource (zero based).
       */
      startLine: number;
      /**
       * Column offset of the stylesheet within the resource (zero based).
       */
      startColumn: number;
      /**
       * Size of the content (in characters).
       */
      length: number;
      /**
       * Line offset of the end of the stylesheet within the resource (zero based).
       */
      endLine: number;
      /**
       * Column offset of the end of the stylesheet within the resource (zero based).
       */
      endColumn: number;
      /**
       * If the style sheet was loaded from a network resource, this indicates when the resource failed to load
       */
      loadingFailed?: boolean;
    }
    /**
     * CSS rule representation.
     */
    export interface CSSRule {
      /**
       * The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * Rule selector data.
       */
      selectorList: SelectorList;
      /**
       * Array of selectors from ancestor style rules, sorted by distance from the current rule.
       */
      nestingSelectors?: string[];
      /**
       * Parent stylesheet's origin.
       */
      origin: StyleSheetOrigin;
      /**
       * Associated style declaration.
       */
      style: CSSStyle;
      /**
       * The BackendNodeId of the DOM node that constitutes the origin tree scope of this rule.
       */
      originTreeScopeNodeId?: DOM.BackendNodeId;
      /**
       * Media list array (for rules involving media queries). The array enumerates media queries
starting with the innermost one, going outwards.
       */
      media?: CSSMedia[];
      /**
       * Container query list array (for rules involving container queries).
The array enumerates container queries starting with the innermost one, going outwards.
       */
      containerQueries?: CSSContainerQuery[];
      /**
       * @supports CSS at-rule array.
The array enumerates @supports at-rules starting with the innermost one, going outwards.
       */
      supports?: CSSSupports[];
      /**
       * Cascade layer array. Contains the layer hierarchy that this rule belongs to starting
with the innermost layer and going outwards.
       */
      layers?: CSSLayer[];
      /**
       * @scope CSS at-rule array.
The array enumerates @scope at-rules starting with the innermost one, going outwards.
       */
      scopes?: CSSScope[];
      /**
       * The array keeps the types of ancestor CSSRules from the innermost going outwards.
       */
      ruleTypes?: CSSRuleType[];
      /**
       * @starting-style CSS at-rule array.
The array enumerates @starting-style at-rules starting with the innermost one, going outwards.
       */
      startingStyles?: CSSStartingStyle[];
      /**
       * @navigation CSS at-rule array.
The array enumerates @navigation at-rules starting with the innermost one, going outwards.
       */
      navigations?: CSSNavigation[];
    }
    /**
     * Enum indicating the type of a CSS rule, used to represent the order of a style rule's ancestors.
This list only contains rule types that are collected during the ancestor rule collection.
     */
    export type CSSRuleType = "MediaRule"|"SupportsRule"|"ContainerRule"|"LayerRule"|"ScopeRule"|"StyleRule"|"StartingStyleRule"|"NavigationRule";
    /**
     * CSS coverage information.
     */
    export interface RuleUsage {
      /**
       * The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.
       */
      styleSheetId: DOM.StyleSheetId;
      /**
       * Offset of the start of the rule (including selector) from the beginning of the stylesheet.
       */
      startOffset: number;
      /**
       * Offset of the end of the rule body from the beginning of the stylesheet.
       */
      endOffset: number;
      /**
       * Indicates whether the rule was actually used by some element in the page.
       */
      used: boolean;
    }
    /**
     * Text range within a resource. All numbers are zero-based.
     */
    export interface SourceRange {
      /**
       * Start line of range.
       */
      startLine: number;
      /**
       * Start column of range (inclusive).
       */
      startColumn: number;
      /**
       * End line of range
       */
      endLine: number;
      /**
       * End column of range (exclusive).
       */
      endColumn: number;
    }
    export interface ShorthandEntry {
      /**
       * Shorthand name.
       */
      name: string;
      /**
       * Shorthand value.
       */
      value: string;
      /**
       * Whether the property has "!important" annotation (implies `false` if absent).
       */
      important?: boolean;
    }
    export interface CSSComputedStyleProperty {
      /**
       * Computed style property name.
       */
      name: string;
      /**
       * Computed style property value.
       */
      value: string;
    }
    export interface ComputedStyleExtraFields {
      /**
       * Returns whether or not this node is being rendered with base appearance,
which happens when it has its appearance property set to base/base-select
or it is in the subtree of an element being rendered with base appearance.
       */
      isAppearanceBase: boolean;
    }
    /**
     * CSS style representation.
     */
    export interface CSSStyle {
      /**
       * The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * CSS properties in the style.
       */
      cssProperties: CSSProperty[];
      /**
       * Computed values for all shorthands found in the style.
       */
      shorthandEntries: ShorthandEntry[];
      /**
       * Style declaration text (if available).
       */
      cssText?: string;
      /**
       * Style declaration range in the enclosing stylesheet (if available).
       */
      range?: SourceRange;
    }
    /**
     * CSS property declaration data.
     */
    export interface CSSProperty {
      /**
       * The property name.
       */
      name: string;
      /**
       * The property value.
       */
      value: string;
      /**
       * Whether the property has "!important" annotation (implies `false` if absent).
       */
      important?: boolean;
      /**
       * Whether the property is implicit (implies `false` if absent).
       */
      implicit?: boolean;
      /**
       * The full property text as specified in the style.
       */
      text?: string;
      /**
       * Whether the property is understood by the browser (implies `true` if absent).
       */
      parsedOk?: boolean;
      /**
       * Whether the property is disabled by the user (present for source-based properties only).
       */
      disabled?: boolean;
      /**
       * The entire property range in the enclosing style declaration (if available).
       */
      range?: SourceRange;
      /**
       * Parsed longhand components of this property if it is a shorthand.
This field will be empty if the given property is not a shorthand.
       */
      longhandProperties?: CSSProperty[];
    }
    /**
     * CSS media rule descriptor.
     */
    export interface CSSMedia {
      /**
       * Media query text.
       */
      text: string;
      /**
       * Source of the media query: "mediaRule" if specified by a @media rule, "importRule" if
specified by an @import rule, "linkedSheet" if specified by a "media" attribute in a linked
stylesheet's LINK tag, "inlineSheet" if specified by a "media" attribute in an inline
stylesheet's STYLE tag.
       */
      source: "mediaRule"|"importRule"|"linkedSheet"|"inlineSheet";
      /**
       * URL of the document containing the media query description.
       */
      sourceURL?: string;
      /**
       * The associated rule (@media or @import) header range in the enclosing stylesheet (if
available).
       */
      range?: SourceRange;
      /**
       * Identifier of the stylesheet containing this object (if exists).
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * Array of media queries.
       */
      mediaList?: MediaQuery[];
    }
    /**
     * Media query descriptor.
     */
    export interface MediaQuery {
      /**
       * Array of media query expressions.
       */
      expressions: MediaQueryExpression[];
      /**
       * Whether the media query condition is satisfied.
       */
      active: boolean;
    }
    /**
     * Media query expression descriptor.
     */
    export interface MediaQueryExpression {
      /**
       * Media query expression value.
       */
      value: number;
      /**
       * Media query expression units.
       */
      unit: string;
      /**
       * Media query expression feature.
       */
      feature: string;
      /**
       * The associated range of the value text in the enclosing stylesheet (if available).
       */
      valueRange?: SourceRange;
      /**
       * Computed length of media query expression (if applicable).
       */
      computedLength?: number;
    }
    /**
     * CSS container query rule descriptor.
     */
    export interface CSSContainerQuery {
      /**
       * Container query text.
       */
      text: string;
      /**
       * The associated rule header range in the enclosing stylesheet (if
available).
       */
      range?: SourceRange;
      /**
       * Identifier of the stylesheet containing this object (if exists).
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * Optional name for the container.
       */
      name?: string;
      /**
       * Optional physical axes queried for the container.
       */
      physicalAxes?: DOM.PhysicalAxes;
      /**
       * Optional logical axes queried for the container.
       */
      logicalAxes?: DOM.LogicalAxes;
      /**
       * true if the query contains scroll-state() queries.
       */
      queriesScrollState?: boolean;
      /**
       * true if the query contains anchored() queries.
       */
      queriesAnchored?: boolean;
    }
    /**
     * CSS Supports at-rule descriptor.
     */
    export interface CSSSupports {
      /**
       * Supports rule text.
       */
      text: string;
      /**
       * Whether the supports condition is satisfied.
       */
      active: boolean;
      /**
       * The associated rule header range in the enclosing stylesheet (if
available).
       */
      range?: SourceRange;
      /**
       * Identifier of the stylesheet containing this object (if exists).
       */
      styleSheetId?: DOM.StyleSheetId;
    }
    /**
     * CSS Navigation at-rule descriptor.
     */
    export interface CSSNavigation {
      /**
       * Navigation rule text.
       */
      text: string;
      /**
       * Whether the navigation condition is satisfied.
       */
      active?: boolean;
      /**
       * The associated rule header range in the enclosing stylesheet (if
available).
       */
      range?: SourceRange;
      /**
       * Identifier of the stylesheet containing this object (if exists).
       */
      styleSheetId?: DOM.StyleSheetId;
    }
    /**
     * CSS Scope at-rule descriptor.
     */
    export interface CSSScope {
      /**
       * Scope rule text.
       */
      text: string;
      /**
       * The associated rule header range in the enclosing stylesheet (if
available).
       */
      range?: SourceRange;
      /**
       * Identifier of the stylesheet containing this object (if exists).
       */
      styleSheetId?: DOM.StyleSheetId;
    }
    /**
     * CSS Layer at-rule descriptor.
     */
    export interface CSSLayer {
      /**
       * Layer name.
       */
      text: string;
      /**
       * The associated rule header range in the enclosing stylesheet (if
available).
       */
      range?: SourceRange;
      /**
       * Identifier of the stylesheet containing this object (if exists).
       */
      styleSheetId?: DOM.StyleSheetId;
    }
    /**
     * CSS Starting Style at-rule descriptor.
     */
    export interface CSSStartingStyle {
      /**
       * The associated rule header range in the enclosing stylesheet (if
available).
       */
      range?: SourceRange;
      /**
       * Identifier of the stylesheet containing this object (if exists).
       */
      styleSheetId?: DOM.StyleSheetId;
    }
    /**
     * CSS Layer data.
     */
    export interface CSSLayerData {
      /**
       * Layer name.
       */
      name: string;
      /**
       * Direct sub-layers
       */
      subLayers?: CSSLayerData[];
      /**
       * Layer order. The order determines the order of the layer in the cascade order.
A higher number has higher priority in the cascade order.
       */
      order: number;
    }
    /**
     * Information about amount of glyphs that were rendered with given font.
     */
    export interface PlatformFontUsage {
      /**
       * Font's family name reported by platform.
       */
      familyName: string;
      /**
       * Font's PostScript name reported by platform.
       */
      postScriptName: string;
      /**
       * Indicates if the font was downloaded or resolved locally.
       */
      isCustomFont: boolean;
      /**
       * Amount of glyphs that were rendered with this font.
       */
      glyphCount: number;
    }
    /**
     * Information about font variation axes for variable fonts
     */
    export interface FontVariationAxis {
      /**
       * The font-variation-setting tag (a.k.a. "axis tag").
       */
      tag: string;
      /**
       * Human-readable variation name in the default language (normally, "en").
       */
      name: string;
      /**
       * The minimum value (inclusive) the font supports for this tag.
       */
      minValue: number;
      /**
       * The maximum value (inclusive) the font supports for this tag.
       */
      maxValue: number;
      /**
       * The default value.
       */
      defaultValue: number;
    }
    /**
     * Properties of a web font: https://www.w3.org/TR/2008/REC-CSS2-20080411/fonts.html#font-descriptions
and additional information such as platformFontFamily and fontVariationAxes.
     */
    export interface FontFace {
      /**
       * The font-family.
       */
      fontFamily: string;
      /**
       * The font-style.
       */
      fontStyle: string;
      /**
       * The font-variant.
       */
      fontVariant: string;
      /**
       * The font-weight.
       */
      fontWeight: string;
      /**
       * The font-stretch.
       */
      fontStretch: string;
      /**
       * The font-display.
       */
      fontDisplay: string;
      /**
       * The unicode-range.
       */
      unicodeRange: string;
      /**
       * The src.
       */
      src: string;
      /**
       * The resolved platform font family
       */
      platformFontFamily: string;
      /**
       * Available variation settings (a.k.a. "axes").
       */
      fontVariationAxes?: FontVariationAxis[];
    }
    /**
     * CSS try rule representation.
     */
    export interface CSSTryRule {
      /**
       * The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * Parent stylesheet's origin.
       */
      origin: StyleSheetOrigin;
      /**
       * Associated style declaration.
       */
      style: CSSStyle;
    }
    /**
     * CSS @position-try rule representation.
     */
    export interface CSSPositionTryRule {
      /**
       * The prelude dashed-ident name
       */
      name: Value;
      /**
       * The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * Parent stylesheet's origin.
       */
      origin: StyleSheetOrigin;
      /**
       * Associated style declaration.
       */
      style: CSSStyle;
      active: boolean;
    }
    /**
     * CSS keyframes rule representation.
     */
    export interface CSSKeyframesRule {
      /**
       * Animation name.
       */
      animationName: Value;
      /**
       * List of keyframes.
       */
      keyframes: CSSKeyframeRule[];
    }
    /**
     * Representation of a custom property registration through CSS.registerProperty
     */
    export interface CSSPropertyRegistration {
      propertyName: string;
      initialValue?: Value;
      inherits: boolean;
      syntax: string;
    }
    /**
     * CSS generic @rule representation.
     */
    export interface CSSAtRule {
      /**
       * Type of at-rule.
       */
      type: "font-face"|"font-feature-values"|"font-palette-values";
      /**
       * Subsection of font-feature-values, if this is a subsection.
       */
      subsection?: "swash"|"annotation"|"ornaments"|"stylistic"|"styleset"|"character-variant";
      /**
       * LINT.ThenChange(//third_party/blink/renderer/core/inspector/inspector_style_sheet.cc:FontVariantAlternatesFeatureType,//third_party/blink/renderer/core/inspector/inspector_css_agent.cc:FontVariantAlternatesFeatureType)
Associated name, if applicable.
       */
      name?: Value;
      /**
       * The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * Parent stylesheet's origin.
       */
      origin: StyleSheetOrigin;
      /**
       * Associated style declaration.
       */
      style: CSSStyle;
    }
    /**
     * CSS property at-rule representation.
     */
    export interface CSSPropertyRule {
      /**
       * The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * Parent stylesheet's origin.
       */
      origin: StyleSheetOrigin;
      /**
       * Associated property name.
       */
      propertyName: Value;
      /**
       * Associated style declaration.
       */
      style: CSSStyle;
    }
    /**
     * CSS function argument representation.
     */
    export interface CSSFunctionParameter {
      /**
       * The parameter name.
       */
      name: string;
      /**
       * The parameter type.
       */
      type: string;
    }
    /**
     * CSS function conditional block representation.
     */
    export interface CSSFunctionConditionNode {
      /**
       * Media query for this conditional block. Only one type of condition should be set.
       */
      media?: CSSMedia;
      /**
       * Container query for this conditional block. Only one type of condition should be set.
       */
      containerQueries?: CSSContainerQuery;
      /**
       * @supports CSS at-rule condition. Only one type of condition should be set.
       */
      supports?: CSSSupports;
      /**
       * @navigation condition. Only one type of condition should be set.
       */
      navigation?: CSSNavigation;
      /**
       * Block body.
       */
      children: CSSFunctionNode[];
      /**
       * The condition text.
       */
      conditionText: string;
    }
    /**
     * Section of the body of a CSS function rule.
     */
    export interface CSSFunctionNode {
      /**
       * A conditional block. If set, style should not be set.
       */
      condition?: CSSFunctionConditionNode;
      /**
       * Values set by this node. If set, condition should not be set.
       */
      style?: CSSStyle;
    }
    /**
     * CSS function at-rule representation.
     */
    export interface CSSFunctionRule {
      /**
       * Name of the function.
       */
      name: Value;
      /**
       * The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * Parent stylesheet's origin.
       */
      origin: StyleSheetOrigin;
      /**
       * List of parameters.
       */
      parameters: CSSFunctionParameter[];
      /**
       * Function body.
       */
      children: CSSFunctionNode[];
      /**
       * The BackendNodeId of the DOM node that constitutes the origin tree scope of this rule.
       */
      originTreeScopeNodeId?: DOM.BackendNodeId;
    }
    /**
     * CSS keyframe rule representation.
     */
    export interface CSSKeyframeRule {
      /**
       * The css style sheet identifier (absent for user agent stylesheet and user-specified
stylesheet rules) this rule came from.
       */
      styleSheetId?: DOM.StyleSheetId;
      /**
       * Parent stylesheet's origin.
       */
      origin: StyleSheetOrigin;
      /**
       * Associated key text.
       */
      keyText: Value;
      /**
       * Associated style declaration.
       */
      style: CSSStyle;
    }
    /**
     * A descriptor of operation to mutate style declaration text.
     */
    export interface StyleDeclarationEdit {
      /**
       * The css style sheet identifier.
       */
      styleSheetId: DOM.StyleSheetId;
      /**
       * The range of the style text in the enclosing stylesheet.
       */
      range: SourceRange;
      /**
       * New style text.
       */
      text: string;
    }
    
    /**
     * Fires whenever a web font is updated.  A non-empty font parameter indicates a successfully loaded
web font.
     */
    export type fontsUpdatedPayload = {
      /**
       * The web font that has loaded.
       */
      font?: FontFace;
    }
    /**
     * Fires whenever a MediaQuery result changes (for example, after a browser window has been
resized.) The current implementation considers only viewport-dependent media features.
     */
    export type mediaQueryResultChangedPayload = void;
    /**
     * Fired whenever an active document stylesheet is added.
     */
    export type styleSheetAddedPayload = {
      /**
       * Added stylesheet metainfo.
       */
      header: CSSStyleSheetHeader;
    }
    /**
     * Fired whenever a stylesheet is changed as a result of the client operation.
     */
    export type styleSheetChangedPayload = {
      styleSheetId: DOM.StyleSheetId;
    }
    /**
     * Fired whenever an active document stylesheet is removed.
     */
    export type styleSheetRemovedPayload = {
      /**
       * Identifier of the removed stylesheet.
       */
      styleSheetId: DOM.StyleSheetId;
    }
    export type computedStyleUpdatedPayload = {
      /**
       * The node id that has updated computed styles.
       */
      nodeId: DOM.NodeId;
    }
    
    /**
     * Inserts a new rule with the given `ruleText` in a stylesheet with given `styleSheetId`, at the
position specified by `location`.
     */
    export type addRuleParameters = {
      /**
       * The css style sheet identifier where a new rule should be inserted.
       */
      styleSheetId: DOM.StyleSheetId;
      /**
       * The text of a new rule.
       */
      ruleText: string;
      /**
       * Text position of a new rule in the target style sheet.
       */
      location: SourceRange;
      /**
       * NodeId for the DOM node in whose context custom property declarations for registered properties should be
validated. If omitted, declarations in the new rule text can only be validated statically, which may produce
incorrect results if the declaration contains a var() for example.
       */
      nodeForPropertySyntaxValidation?: DOM.NodeId;
    }
    export type addRuleReturnValue = {
      /**
       * The newly created rule.
       */
      rule: CSSRule;
    }
    /**
     * Returns all class names from specified stylesheet.
     */
    export type collectClassNamesParameters = {
      styleSheetId: DOM.StyleSheetId;
    }
    export type collectClassNamesReturnValue = {
      /**
       * Class name list.
       */
      classNames: string[];
    }
    /**
     * Creates a new special "via-inspector" stylesheet in the frame with given `frameId`.
     */
    export type createStyleSheetParameters = {
      /**
       * Identifier of the frame where "via-inspector" stylesheet should be created.
       */
      frameId: Page.FrameId;
      /**
       * If true, creates a new stylesheet for every call. If false,
returns a stylesheet previously created by a call with force=false
for the frame's document if it exists or creates a new stylesheet
(default: false).
       */
      force?: boolean;
    }
    export type createStyleSheetReturnValue = {
      /**
       * Identifier of the created "via-inspector" stylesheet.
       */
      styleSheetId: DOM.StyleSheetId;
    }
    /**
     * Disables the CSS agent for the given page.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables the CSS agent for the given page. Clients should not assume that the CSS agent has been
enabled until the result of this command is received.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Ensures that the given node will have specified pseudo-classes whenever its style is computed by
the browser.
     */
    export type forcePseudoStateParameters = {
      /**
       * The element id for which to force the pseudo state.
       */
      nodeId: DOM.NodeId;
      /**
       * Element pseudo classes to force when computing the element's style.
       */
      forcedPseudoClasses: string[];
    }
    export type forcePseudoStateReturnValue = {
    }
    /**
     * Ensures that the given node is in its starting-style state.
     */
    export type forceStartingStyleParameters = {
      /**
       * The element id for which to force the starting-style state.
       */
      nodeId: DOM.NodeId;
      /**
       * Boolean indicating if this is on or off.
       */
      forced: boolean;
    }
    export type forceStartingStyleReturnValue = {
    }
    export type getBackgroundColorsParameters = {
      /**
       * Id of the node to get background colors for.
       */
      nodeId: DOM.NodeId;
    }
    export type getBackgroundColorsReturnValue = {
      /**
       * The range of background colors behind this element, if it contains any visible text. If no
visible text is present, this will be undefined. In the case of a flat background color,
this will consist of simply that color. In the case of a gradient, this will consist of each
of the color stops. For anything more complicated, this will be an empty array. Images will
be ignored (as if the image had failed to load).
       */
      backgroundColors?: string[];
      /**
       * The computed font size for this node, as a CSS computed value string (e.g. '12px').
       */
      computedFontSize?: string;
      /**
       * The computed font weight for this node, as a CSS computed value string (e.g. 'normal' or
'100').
       */
      computedFontWeight?: string;
    }
    /**
     * Returns the computed style for a DOM node identified by `nodeId`.
     */
    export type getComputedStyleForNodeParameters = {
      nodeId: DOM.NodeId;
    }
    export type getComputedStyleForNodeReturnValue = {
      /**
       * Computed style for the specified DOM node.
       */
      computedStyle: CSSComputedStyleProperty[];
      /**
       * A list of non-standard "extra fields" which blink stores alongside each
computed style.
       */
      extraFields: ComputedStyleExtraFields;
    }
    /**
     * Resolve the specified values in the context of the provided element.
For example, a value of '1em' is evaluated according to the computed
'font-size' of the element and a value 'calc(1px + 2px)' will be
resolved to '3px'.
If the `propertyName` was specified the `values` are resolved as if
they were property's declaration. If a value cannot be parsed according
to the provided property syntax, the value is parsed using combined
syntax as if null `propertyName` was provided. If the value cannot be
resolved even then, return the provided value without any changes.
Note: this function currently does not resolve CSS random() function,
it returns unmodified random() function parts.`
     */
    export type resolveValuesParameters = {
      /**
       * Cascade-dependent keywords (revert/revert-layer) do not work.
       */
      values: string[];
      /**
       * Id of the node in whose context the expression is evaluated
       */
      nodeId: DOM.NodeId;
      /**
       * Only longhands and custom property names are accepted.
       */
      propertyName?: string;
      /**
       * Pseudo element type, only works for pseudo elements that generate
elements in the tree, such as ::before and ::after.
       */
      pseudoType?: DOM.PseudoType;
      /**
       * Pseudo element custom ident.
       */
      pseudoIdentifier?: string;
    }
    export type resolveValuesReturnValue = {
      results: string[];
    }
    export type getLonghandPropertiesParameters = {
      shorthandName: string;
      value: string;
    }
    export type getLonghandPropertiesReturnValue = {
      longhandProperties: CSSProperty[];
    }
    /**
     * Returns the styles defined inline (explicitly in the "style" attribute and implicitly, using DOM
attributes) for a DOM node identified by `nodeId`.
     */
    export type getInlineStylesForNodeParameters = {
      nodeId: DOM.NodeId;
    }
    export type getInlineStylesForNodeReturnValue = {
      /**
       * Inline style for the specified DOM node.
       */
      inlineStyle?: CSSStyle;
      /**
       * Attribute-defined element style (e.g. resulting from "width=20 height=100%").
       */
      attributesStyle?: CSSStyle;
    }
    /**
     * Returns the styles coming from animations & transitions
including the animation & transition styles coming from inheritance chain.
     */
    export type getAnimatedStylesForNodeParameters = {
      nodeId: DOM.NodeId;
    }
    export type getAnimatedStylesForNodeReturnValue = {
      /**
       * Styles coming from animations.
       */
      animationStyles?: CSSAnimationStyle[];
      /**
       * Style coming from transitions.
       */
      transitionsStyle?: CSSStyle;
      /**
       * Inherited style entries for animationsStyle and transitionsStyle from
the inheritance chain of the element.
       */
      inherited?: InheritedAnimatedStyleEntry[];
    }
    /**
     * Returns requested styles for a DOM node identified by `nodeId`.
     */
    export type getMatchedStylesForNodeParameters = {
      nodeId: DOM.NodeId;
    }
    export type getMatchedStylesForNodeReturnValue = {
      /**
       * Inline style for the specified DOM node.
       */
      inlineStyle?: CSSStyle;
      /**
       * Attribute-defined element style (e.g. resulting from "width=20 height=100%").
       */
      attributesStyle?: CSSStyle;
      /**
       * CSS rules matching this node, from all applicable stylesheets.
       */
      matchedCSSRules?: RuleMatch[];
      /**
       * Pseudo style matches for this node.
       */
      pseudoElements?: PseudoElementMatches[];
      /**
       * A chain of inherited styles (from the immediate node parent up to the DOM tree root).
       */
      inherited?: InheritedStyleEntry[];
      /**
       * A chain of inherited pseudo element styles (from the immediate node parent up to the DOM tree root).
       */
      inheritedPseudoElements?: InheritedPseudoElementMatches[];
      /**
       * A list of CSS keyframed animations matching this node.
       */
      cssKeyframesRules?: CSSKeyframesRule[];
      /**
       * A list of CSS @position-try rules matching this node, based on the position-try-fallbacks property.
       */
      cssPositionTryRules?: CSSPositionTryRule[];
      /**
       * Index of the active fallback in the applied position-try-fallback property,
will not be set if there is no active position-try fallback.
       */
      activePositionFallbackIndex?: number;
      /**
       * A list of CSS at-property rules matching this node.
       */
      cssPropertyRules?: CSSPropertyRule[];
      /**
       * A list of CSS property registrations matching this node.
       */
      cssPropertyRegistrations?: CSSPropertyRegistration[];
      /**
       * A list of simple @rules matching this node or its pseudo-elements.
       */
      cssAtRules?: CSSAtRule[];
      /**
       * Id of the first parent element that does not have display: contents.
       */
      parentLayoutNodeId?: DOM.NodeId;
      /**
       * A list of CSS at-function rules referenced by styles of this node.
       */
      cssFunctionRules?: CSSFunctionRule[];
    }
    /**
     * Returns the values of the default UA-defined environment variables used in env()
     */
    export type getEnvironmentVariablesParameters = {
    }
    export type getEnvironmentVariablesReturnValue = {
      environmentVariables: { [key: string]: string };
    }
    /**
     * Returns all media queries parsed by the rendering engine.
     */
    export type getMediaQueriesParameters = {
    }
    export type getMediaQueriesReturnValue = {
      medias: CSSMedia[];
    }
    /**
     * Requests information about platform fonts which we used to render child TextNodes in the given
node.
     */
    export type getPlatformFontsForNodeParameters = {
      nodeId: DOM.NodeId;
    }
    export type getPlatformFontsForNodeReturnValue = {
      /**
       * Usage statistics for every employed platform font.
       */
      fonts: PlatformFontUsage[];
    }
    /**
     * Returns the current textual content for a stylesheet.
     */
    export type getStyleSheetTextParameters = {
      styleSheetId: DOM.StyleSheetId;
    }
    export type getStyleSheetTextReturnValue = {
      /**
       * The stylesheet text.
       */
      text: string;
    }
    /**
     * Returns all layers parsed by the rendering engine for the tree scope of a node.
Given a DOM element identified by nodeId, getLayersForNode returns the root
layer for the nearest ancestor document or shadow root. The layer root contains
the full layer tree for the tree scope and their ordering.
     */
    export type getLayersForNodeParameters = {
      nodeId: DOM.NodeId;
    }
    export type getLayersForNodeReturnValue = {
      rootLayer: CSSLayerData;
    }
    /**
     * Given a CSS selector text and a style sheet ID, getLocationForSelector
returns an array of locations of the CSS selector in the style sheet.
     */
    export type getLocationForSelectorParameters = {
      styleSheetId: DOM.StyleSheetId;
      selectorText: string;
    }
    export type getLocationForSelectorReturnValue = {
      ranges: SourceRange[];
    }
    /**
     * Starts tracking the given node for the computed style updates
and whenever the computed style is updated for node, it queues
a `computedStyleUpdated` event with throttling.
There can only be 1 node tracked for computed style updates
so passing a new node id removes tracking from the previous node.
Pass `undefined` to disable tracking.
     */
    export type trackComputedStyleUpdatesForNodeParameters = {
      nodeId?: DOM.NodeId;
    }
    export type trackComputedStyleUpdatesForNodeReturnValue = {
    }
    /**
     * Starts tracking the given computed styles for updates. The specified array of properties
replaces the one previously specified. Pass empty array to disable tracking.
Use takeComputedStyleUpdates to retrieve the list of nodes that had properties modified.
The changes to computed style properties are only tracked for nodes pushed to the front-end
by the DOM agent. If no changes to the tracked properties occur after the node has been pushed
to the front-end, no updates will be issued for the node.
     */
    export type trackComputedStyleUpdatesParameters = {
      propertiesToTrack: CSSComputedStyleProperty[];
    }
    export type trackComputedStyleUpdatesReturnValue = {
    }
    /**
     * Polls the next batch of computed style updates.
     */
    export type takeComputedStyleUpdatesParameters = {
    }
    export type takeComputedStyleUpdatesReturnValue = {
      /**
       * The list of node Ids that have their tracked computed styles updated.
       */
      nodeIds: DOM.NodeId[];
    }
    /**
     * Find a rule with the given active property for the given node and set the new value for this
property
     */
    export type setEffectivePropertyValueForNodeParameters = {
      /**
       * The element id for which to set property.
       */
      nodeId: DOM.NodeId;
      propertyName: string;
      value: string;
    }
    export type setEffectivePropertyValueForNodeReturnValue = {
    }
    /**
     * Modifies the property rule property name.
     */
    export type setPropertyRulePropertyNameParameters = {
      styleSheetId: DOM.StyleSheetId;
      range: SourceRange;
      propertyName: string;
    }
    export type setPropertyRulePropertyNameReturnValue = {
      /**
       * The resulting key text after modification.
       */
      propertyName: Value;
    }
    /**
     * Modifies the keyframe rule key text.
     */
    export type setKeyframeKeyParameters = {
      styleSheetId: DOM.StyleSheetId;
      range: SourceRange;
      keyText: string;
    }
    export type setKeyframeKeyReturnValue = {
      /**
       * The resulting key text after modification.
       */
      keyText: Value;
    }
    /**
     * Modifies the rule selector.
     */
    export type setMediaTextParameters = {
      styleSheetId: DOM.StyleSheetId;
      range: SourceRange;
      text: string;
    }
    export type setMediaTextReturnValue = {
      /**
       * The resulting CSS media rule after modification.
       */
      media: CSSMedia;
    }
    /**
     * Modifies the expression of a container query.
     */
    export type setContainerQueryTextParameters = {
      styleSheetId: DOM.StyleSheetId;
      range: SourceRange;
      text: string;
    }
    export type setContainerQueryTextReturnValue = {
      /**
       * The resulting CSS container query rule after modification.
       */
      containerQuery: CSSContainerQuery;
    }
    /**
     * Modifies the expression of a supports at-rule.
     */
    export type setSupportsTextParameters = {
      styleSheetId: DOM.StyleSheetId;
      range: SourceRange;
      text: string;
    }
    export type setSupportsTextReturnValue = {
      /**
       * The resulting CSS Supports rule after modification.
       */
      supports: CSSSupports;
    }
    /**
     * Modifies the expression of a navigation at-rule.
     */
    export type setNavigationTextParameters = {
      styleSheetId: DOM.StyleSheetId;
      range: SourceRange;
      text: string;
    }
    export type setNavigationTextReturnValue = {
      /**
       * The resulting CSS Navigation rule after modification.
       */
      navigation: CSSNavigation;
    }
    /**
     * Modifies the expression of a scope at-rule.
     */
    export type setScopeTextParameters = {
      styleSheetId: DOM.StyleSheetId;
      range: SourceRange;
      text: string;
    }
    export type setScopeTextReturnValue = {
      /**
       * The resulting CSS Scope rule after modification.
       */
      scope: CSSScope;
    }
    /**
     * Modifies the rule selector.
     */
    export type setRuleSelectorParameters = {
      styleSheetId: DOM.StyleSheetId;
      range: SourceRange;
      selector: string;
    }
    export type setRuleSelectorReturnValue = {
      /**
       * The resulting selector list after modification.
       */
      selectorList: SelectorList;
    }
    /**
     * Sets the new stylesheet text.
     */
    export type setStyleSheetTextParameters = {
      styleSheetId: DOM.StyleSheetId;
      text: string;
    }
    export type setStyleSheetTextReturnValue = {
      /**
       * URL of source map associated with script (if any).
       */
      sourceMapURL?: string;
    }
    /**
     * Applies specified style edits one after another in the given order.
     */
    export type setStyleTextsParameters = {
      edits: StyleDeclarationEdit[];
      /**
       * NodeId for the DOM node in whose context custom property declarations for registered properties should be
validated. If omitted, declarations in the new rule text can only be validated statically, which may produce
incorrect results if the declaration contains a var() for example.
       */
      nodeForPropertySyntaxValidation?: DOM.NodeId;
    }
    export type setStyleTextsReturnValue = {
      /**
       * The resulting styles after modification.
       */
      styles: CSSStyle[];
    }
    /**
     * Enables the selector recording.
     */
    export type startRuleUsageTrackingParameters = {
    }
    export type startRuleUsageTrackingReturnValue = {
    }
    /**
     * Stop tracking rule usage and return the list of rules that were used since last call to
`takeCoverageDelta` (or since start of coverage instrumentation).
     */
    export type stopRuleUsageTrackingParameters = {
    }
    export type stopRuleUsageTrackingReturnValue = {
      ruleUsage: RuleUsage[];
    }
    /**
     * Obtain list of rules that became used since last call to this method (or since start of coverage
instrumentation).
     */
    export type takeCoverageDeltaParameters = {
    }
    export type takeCoverageDeltaReturnValue = {
      coverage: RuleUsage[];
      /**
       * Monotonically increasing time, in seconds.
       */
      timestamp: number;
    }
    /**
     * Enables/disables rendering of local CSS fonts (enabled by default).
     */
    export type setLocalFontsEnabledParameters = {
      /**
       * Whether rendering of local fonts is enabled.
       */
      enabled: boolean;
    }
    export type setLocalFontsEnabledReturnValue = {
    }
  }
  
  export namespace CacheStorage {
    /**
     * Unique identifier of the Cache object.
     */
    export type CacheId = string;
    /**
     * type of HTTP response cached
     */
    export type CachedResponseType = "basic"|"cors"|"default"|"error"|"opaqueResponse"|"opaqueRedirect";
    /**
     * Data entry.
     */
    export interface DataEntry {
      /**
       * Request URL.
       */
      requestURL: string;
      /**
       * Request method.
       */
      requestMethod: string;
      /**
       * Request headers
       */
      requestHeaders: Header[];
      /**
       * Number of seconds since epoch.
       */
      responseTime: number;
      /**
       * HTTP response status code.
       */
      responseStatus: number;
      /**
       * HTTP response status text.
       */
      responseStatusText: string;
      /**
       * HTTP response type
       */
      responseType: CachedResponseType;
      /**
       * Response headers
       */
      responseHeaders: Header[];
    }
    /**
     * Cache identifier.
     */
    export interface Cache {
      /**
       * An opaque unique id of the cache.
       */
      cacheId: CacheId;
      /**
       * Security origin of the cache.
       */
      securityOrigin: string;
      /**
       * Storage key of the cache.
       */
      storageKey: string;
      /**
       * Storage bucket of the cache.
       */
      storageBucket?: Storage.StorageBucket;
      /**
       * The name of the cache.
       */
      cacheName: string;
    }
    export interface Header {
      name: string;
      value: string;
    }
    /**
     * Cached response
     */
    export interface CachedResponse {
      /**
       * Entry content, base64-encoded.
       */
      body: binary;
    }
    
    
    /**
     * Deletes a cache.
     */
    export type deleteCacheParameters = {
      /**
       * Id of cache for deletion.
       */
      cacheId: CacheId;
    }
    export type deleteCacheReturnValue = {
    }
    /**
     * Deletes a cache entry.
     */
    export type deleteEntryParameters = {
      /**
       * Id of cache where the entry will be deleted.
       */
      cacheId: CacheId;
      /**
       * URL spec of the request.
       */
      request: string;
    }
    export type deleteEntryReturnValue = {
    }
    /**
     * Requests cache names.
     */
    export type requestCacheNamesParameters = {
      /**
       * At least and at most one of securityOrigin, storageKey, storageBucket must be specified.
Security origin.
       */
      securityOrigin?: string;
      /**
       * Storage key.
       */
      storageKey?: string;
      /**
       * Storage bucket. If not specified, it uses the default bucket.
       */
      storageBucket?: Storage.StorageBucket;
    }
    export type requestCacheNamesReturnValue = {
      /**
       * Caches for the security origin.
       */
      caches: Cache[];
    }
    /**
     * Fetches cache entry.
     */
    export type requestCachedResponseParameters = {
      /**
       * Id of cache that contains the entry.
       */
      cacheId: CacheId;
      /**
       * URL spec of the request.
       */
      requestURL: string;
      /**
       * headers of the request.
       */
      requestHeaders: Header[];
    }
    export type requestCachedResponseReturnValue = {
      /**
       * Response read from the cache.
       */
      response: CachedResponse;
    }
    /**
     * Requests data from cache.
     */
    export type requestEntriesParameters = {
      /**
       * ID of cache to get entries from.
       */
      cacheId: CacheId;
      /**
       * Number of records to skip.
       */
      skipCount?: number;
      /**
       * Number of records to fetch.
       */
      pageSize?: number;
      /**
       * If present, only return the entries containing this substring in the path
       */
      pathFilter?: string;
    }
    export type requestEntriesReturnValue = {
      /**
       * Array of object store data entries.
       */
      cacheDataEntries: DataEntry[];
      /**
       * Count of returned entries from this storage. If pathFilter is empty, it
is the count of all entries from this storage.
       */
      returnCount: number;
    }
  }
  
  /**
   * A domain for interacting with Cast, Presentation API, and Remote Playback API
functionalities.
   */
  export namespace Cast {
    export interface Sink {
      name: string;
      id: string;
      /**
       * Text describing the current session. Present only if there is an active
session on the sink.
       */
      session?: string;
    }
    
    /**
     * This is fired whenever the list of available sinks changes. A sink is a
device or a software surface that you can cast to.
     */
    export type sinksUpdatedPayload = {
      sinks: Sink[];
    }
    /**
     * This is fired whenever the outstanding issue/error message changes.
|issueMessage| is empty if there is no issue.
     */
    export type issueUpdatedPayload = {
      issueMessage: string;
    }
    
    /**
     * Starts observing for sinks that can be used for tab mirroring, and if set,
sinks compatible with |presentationUrl| as well. When sinks are found, a
|sinksUpdated| event is fired.
Also starts observing for issue messages. When an issue is added or removed,
an |issueUpdated| event is fired.
     */
    export type enableParameters = {
      presentationUrl?: string;
    }
    export type enableReturnValue = {
    }
    /**
     * Stops observing for sinks and issues.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Sets a sink to be used when the web page requests the browser to choose a
sink via Presentation API, Remote Playback API, or Cast SDK.
     */
    export type setSinkToUseParameters = {
      sinkName: string;
    }
    export type setSinkToUseReturnValue = {
    }
    /**
     * Starts mirroring the desktop to the sink.
     */
    export type startDesktopMirroringParameters = {
      sinkName: string;
    }
    export type startDesktopMirroringReturnValue = {
    }
    /**
     * Starts mirroring the tab to the sink.
     */
    export type startTabMirroringParameters = {
      sinkName: string;
    }
    export type startTabMirroringReturnValue = {
    }
    /**
     * Stops the active Cast session on the sink.
     */
    export type stopCastingParameters = {
      sinkName: string;
    }
    export type stopCastingReturnValue = {
    }
  }
  
  /**
   * This domain exposes the current state of the CrashReportContext API.
   */
  export namespace CrashReportContext {
    /**
     * Key-value pair in CrashReportContext.
     */
    export interface CrashReportContextEntry {
      key: string;
      value: string;
      /**
       * The ID of the frame where the key-value pair was set.
       */
      frameId: Page.FrameId;
    }
    
    
    /**
     * Returns all entries in the CrashReportContext across all frames in the page.
     */
    export type getEntriesParameters = {
    }
    export type getEntriesReturnValue = {
      entries: CrashReportContextEntry[];
    }
  }
  
  /**
   * This domain exposes DOM read/write operations. Each DOM Node is represented with its mirror object
that has an `id`. This `id` can be used to get additional information on the Node, resolve it into
the JavaScript object wrapper, etc. It is important that client receives DOM events only for the
nodes that are known to the client. Backend keeps track of the nodes that were sent to the client
and never sends the same node twice. It is client's responsibility to collect information about
the nodes that were sent to the client. Note that `iframe` owner elements will return
corresponding document elements as their child nodes.
   */
  export namespace DOM {
    /**
     * Unique DOM node identifier.
     */
    export type NodeId = number;
    /**
     * Unique DOM node identifier used to reference a node that may not have been pushed to the
front-end.
     */
    export type BackendNodeId = number;
    /**
     * Unique identifier for a CSS stylesheet.
     */
    export type StyleSheetId = string;
    /**
     * Backend node with a friendly name.
     */
    export interface BackendNode {
      /**
       * `Node`'s nodeType.
       */
      nodeType: number;
      /**
       * `Node`'s nodeName.
       */
      nodeName: string;
      backendNodeId: BackendNodeId;
    }
    /**
     * Pseudo element type.
     */
    export type PseudoType = "first-line"|"first-letter"|"checkmark"|"before"|"after"|"expand-icon"|"picker-icon"|"interest-hint"|"marker"|"backdrop"|"column"|"selection"|"search-text"|"target-text"|"spelling-error"|"grammar-error"|"highlight"|"first-line-inherited"|"scroll-marker"|"scroll-marker-group"|"scroll-button"|"scrollbar"|"scrollbar-thumb"|"scrollbar-button"|"scrollbar-track"|"scrollbar-track-piece"|"scrollbar-corner"|"resizer"|"input-list-button"|"view-transition"|"view-transition-group"|"view-transition-image-pair"|"view-transition-group-children"|"view-transition-old"|"view-transition-new"|"placeholder"|"file-selector-button"|"details-content"|"picker"|"permission-icon"|"overscroll-area-parent";
    /**
     * Shadow root type.
     */
    export type ShadowRootType = "user-agent"|"open"|"closed";
    /**
     * Document compatibility mode.
     */
    export type CompatibilityMode = "QuirksMode"|"LimitedQuirksMode"|"NoQuirksMode";
    /**
     * ContainerSelector physical axes
     */
    export type PhysicalAxes = "Horizontal"|"Vertical"|"Both";
    /**
     * ContainerSelector logical axes
     */
    export type LogicalAxes = "Inline"|"Block"|"Both";
    /**
     * Physical scroll orientation
     */
    export type ScrollOrientation = "horizontal"|"vertical";
    /**
     * DOM interaction is implemented in terms of mirror objects that represent the actual DOM nodes.
DOMNode is a base node mirror type.
     */
    export interface Node {
      /**
       * Node identifier that is passed into the rest of the DOM messages as the `nodeId`. Backend
will only push node with given `id` once. It is aware of all requested nodes and will only
fire DOM events for nodes known to the client.
       */
      nodeId: NodeId;
      /**
       * The id of the parent node if any.
       */
      parentId?: NodeId;
      /**
       * The BackendNodeId for this node.
       */
      backendNodeId: BackendNodeId;
      /**
       * `Node`'s nodeType.
       */
      nodeType: number;
      /**
       * `Node`'s nodeName.
       */
      nodeName: string;
      /**
       * `Node`'s localName.
       */
      localName: string;
      /**
       * `Node`'s nodeValue.
       */
      nodeValue: string;
      /**
       * Child count for `Container` nodes.
       */
      childNodeCount?: number;
      /**
       * Child nodes of this node when requested with children.
       */
      children?: Node[];
      /**
       * Attributes of the `Element` node in the form of flat array `[name1, value1, name2, value2]`.
       */
      attributes?: string[];
      /**
       * Document URL that `Document` or `FrameOwner` node points to.
       */
      documentURL?: string;
      /**
       * Base URL that `Document` or `FrameOwner` node uses for URL completion.
       */
      baseURL?: string;
      /**
       * `DocumentType`'s publicId.
       */
      publicId?: string;
      /**
       * `DocumentType`'s systemId.
       */
      systemId?: string;
      /**
       * `DocumentType`'s internalSubset.
       */
      internalSubset?: string;
      /**
       * `Document`'s XML version in case of XML documents.
       */
      xmlVersion?: string;
      /**
       * `Attr`'s name.
       */
      name?: string;
      /**
       * `Attr`'s value.
       */
      value?: string;
      /**
       * Pseudo element type for this node.
       */
      pseudoType?: PseudoType;
      /**
       * Pseudo element identifier for this node. Only present if there is a
valid pseudoType.
       */
      pseudoIdentifier?: string;
      /**
       * Shadow root type.
       */
      shadowRootType?: ShadowRootType;
      /**
       * Frame ID for frame owner elements.
       */
      frameId?: Page.FrameId;
      /**
       * Content document for frame owner elements.
       */
      contentDocument?: Node;
      /**
       * Shadow root list for given element host.
       */
      shadowRoots?: Node[];
      /**
       * Content document fragment for template elements.
       */
      templateContent?: Node;
      /**
       * Pseudo elements associated with this node.
       */
      pseudoElements?: Node[];
      /**
       * Deprecated, as the HTML Imports API has been removed (crbug.com/937746).
This property used to return the imported document for the HTMLImport links.
The property is always undefined now.
       */
      importedDocument?: Node;
      /**
       * Distributed nodes for given insertion point.
       */
      distributedNodes?: BackendNode[];
      /**
       * Whether the node is SVG.
       */
      isSVG?: boolean;
      compatibilityMode?: CompatibilityMode;
      assignedSlot?: BackendNode;
      isScrollable?: boolean;
      affectedByStartingStyles?: boolean;
      adoptedStyleSheets?: StyleSheetId[];
      adProvenance?: Network.AdProvenance;
    }
    /**
     * A structure to hold the top-level node of a detached tree and an array of its retained descendants.
     */
    export interface DetachedElementInfo {
      treeNode: Node;
      retainedNodeIds: NodeId[];
    }
    /**
     * A structure holding an RGBA color.
     */
    export interface RGBA {
      /**
       * The red component, in the [0-255] range.
       */
      r: number;
      /**
       * The green component, in the [0-255] range.
       */
      g: number;
      /**
       * The blue component, in the [0-255] range.
       */
      b: number;
      /**
       * The alpha component, in the [0-1] range (default: 1).
       */
      a?: number;
    }
    /**
     * An array of quad vertices, x immediately followed by y for each point, points clock-wise.
     */
    export type Quad = number[];
    /**
     * Box model.
     */
    export interface BoxModel {
      /**
       * Content box
       */
      content: Quad;
      /**
       * Padding box
       */
      padding: Quad;
      /**
       * Border box
       */
      border: Quad;
      /**
       * Margin box
       */
      margin: Quad;
      /**
       * Node width
       */
      width: number;
      /**
       * Node height
       */
      height: number;
      /**
       * Shape outside coordinates
       */
      shapeOutside?: ShapeOutsideInfo;
    }
    /**
     * CSS Shape Outside details.
     */
    export interface ShapeOutsideInfo {
      /**
       * Shape bounds
       */
      bounds: Quad;
      /**
       * Shape coordinate details
       */
      shape: any[];
      /**
       * Margin shape bounds
       */
      marginShape: any[];
    }
    /**
     * Rectangle.
     */
    export interface Rect {
      /**
       * X coordinate
       */
      x: number;
      /**
       * Y coordinate
       */
      y: number;
      /**
       * Rectangle width
       */
      width: number;
      /**
       * Rectangle height
       */
      height: number;
    }
    export interface CSSComputedStyleProperty {
      /**
       * Computed style property name.
       */
      name: string;
      /**
       * Computed style property value.
       */
      value: string;
    }
    
    /**
     * Fired when `Element`'s attribute is modified.
     */
    export type attributeModifiedPayload = {
      /**
       * Id of the node that has changed.
       */
      nodeId: NodeId;
      /**
       * Attribute name.
       */
      name: string;
      /**
       * Attribute value.
       */
      value: string;
    }
    /**
     * Fired when `Element`'s adoptedStyleSheets are modified.
     */
    export type adoptedStyleSheetsModifiedPayload = {
      /**
       * Id of the node that has changed.
       */
      nodeId: NodeId;
      /**
       * New adoptedStyleSheets array.
       */
      adoptedStyleSheets: StyleSheetId[];
    }
    /**
     * Fired when `Element`'s attribute is removed.
     */
    export type attributeRemovedPayload = {
      /**
       * Id of the node that has changed.
       */
      nodeId: NodeId;
      /**
       * A ttribute name.
       */
      name: string;
    }
    /**
     * Mirrors `DOMCharacterDataModified` event.
     */
    export type characterDataModifiedPayload = {
      /**
       * Id of the node that has changed.
       */
      nodeId: NodeId;
      /**
       * New text value.
       */
      characterData: string;
    }
    /**
     * Fired when `Container`'s child node count has changed.
     */
    export type childNodeCountUpdatedPayload = {
      /**
       * Id of the node that has changed.
       */
      nodeId: NodeId;
      /**
       * New node count.
       */
      childNodeCount: number;
    }
    /**
     * Mirrors `DOMNodeInserted` event.
     */
    export type childNodeInsertedPayload = {
      /**
       * Id of the node that has changed.
       */
      parentNodeId: NodeId;
      /**
       * Id of the previous sibling.
       */
      previousNodeId: NodeId;
      /**
       * Inserted node data.
       */
      node: Node;
    }
    /**
     * Mirrors `DOMNodeRemoved` event.
     */
    export type childNodeRemovedPayload = {
      /**
       * Parent id.
       */
      parentNodeId: NodeId;
      /**
       * Id of the node that has been removed.
       */
      nodeId: NodeId;
    }
    /**
     * Called when distribution is changed.
     */
    export type distributedNodesUpdatedPayload = {
      /**
       * Insertion point where distributed nodes were updated.
       */
      insertionPointId: NodeId;
      /**
       * Distributed nodes for given insertion point.
       */
      distributedNodes: BackendNode[];
    }
    /**
     * Fired when `Document` has been totally updated. Node ids are no longer valid.
     */
    export type documentUpdatedPayload = void;
    /**
     * Fired when `Element`'s inline style is modified via a CSS property modification.
     */
    export type inlineStyleInvalidatedPayload = {
      /**
       * Ids of the nodes for which the inline styles have been invalidated.
       */
      nodeIds: NodeId[];
    }
    /**
     * Called when a pseudo element is added to an element.
     */
    export type pseudoElementAddedPayload = {
      /**
       * Pseudo element's parent element id.
       */
      parentId: NodeId;
      /**
       * The added pseudo element.
       */
      pseudoElement: Node;
    }
    /**
     * Called when top layer elements are changed.
     */
    export type topLayerElementsUpdatedPayload = void;
    /**
     * Fired when a node's scrollability state changes.
     */
    export type scrollableFlagUpdatedPayload = {
      /**
       * The id of the node.
       */
      nodeId: DOM.NodeId;
      /**
       * If the node is scrollable.
       */
      isScrollable: boolean;
    }
    /**
     * Fired when a node's ad related state changes.
     */
    export type adRelatedStateUpdatedPayload = {
      /**
       * The id of the node.
       */
      nodeId: DOM.NodeId;
      /**
       * The provenance of the ad related node, if it is ad related.
       */
      adProvenance?: Network.AdProvenance;
    }
    /**
     * Fired when a node's starting styles changes.
     */
    export type affectedByStartingStylesFlagUpdatedPayload = {
      /**
       * The id of the node.
       */
      nodeId: DOM.NodeId;
      /**
       * If the node has starting styles.
       */
      affectedByStartingStyles: boolean;
    }
    /**
     * Called when a pseudo element is removed from an element.
     */
    export type pseudoElementRemovedPayload = {
      /**
       * Pseudo element's parent element id.
       */
      parentId: NodeId;
      /**
       * The removed pseudo element id.
       */
      pseudoElementId: NodeId;
    }
    /**
     * Fired when backend wants to provide client with the missing DOM structure. This happens upon
most of the calls requesting node ids.
     */
    export type setChildNodesPayload = {
      /**
       * Parent node id to populate with children.
       */
      parentId: NodeId;
      /**
       * Child nodes array.
       */
      nodes: Node[];
    }
    /**
     * Called when shadow root is popped from the element.
     */
    export type shadowRootPoppedPayload = {
      /**
       * Host element id.
       */
      hostId: NodeId;
      /**
       * Shadow root id.
       */
      rootId: NodeId;
    }
    /**
     * Called when shadow root is pushed into the element.
     */
    export type shadowRootPushedPayload = {
      /**
       * Host element id.
       */
      hostId: NodeId;
      /**
       * Shadow root.
       */
      root: Node;
    }
    
    /**
     * Collects class names for the node with given id and all of it's child nodes.
     */
    export type collectClassNamesFromSubtreeParameters = {
      /**
       * Id of the node to collect class names.
       */
      nodeId: NodeId;
    }
    export type collectClassNamesFromSubtreeReturnValue = {
      /**
       * Class name list.
       */
      classNames: string[];
    }
    /**
     * Creates a deep copy of the specified node and places it into the target container before the
given anchor.
     */
    export type copyToParameters = {
      /**
       * Id of the node to copy.
       */
      nodeId: NodeId;
      /**
       * Id of the element to drop the copy into.
       */
      targetNodeId: NodeId;
      /**
       * Drop the copy before this node (if absent, the copy becomes the last child of
`targetNodeId`).
       */
      insertBeforeNodeId?: NodeId;
    }
    export type copyToReturnValue = {
      /**
       * Id of the node clone.
       */
      nodeId: NodeId;
    }
    /**
     * Describes node given its id, does not require domain to be enabled. Does not start tracking any
objects, can be used for automation.
     */
    export type describeNodeParameters = {
      /**
       * Identifier of the node.
       */
      nodeId?: NodeId;
      /**
       * Identifier of the backend node.
       */
      backendNodeId?: BackendNodeId;
      /**
       * JavaScript object id of the node wrapper.
       */
      objectId?: Runtime.RemoteObjectId;
      /**
       * The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0.
       */
      depth?: number;
      /**
       * Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false).
       */
      pierce?: boolean;
    }
    export type describeNodeReturnValue = {
      /**
       * Node description.
       */
      node: Node;
    }
    /**
     * Scrolls the specified rect of the given node into view if not already visible.
Note: exactly one between nodeId, backendNodeId and objectId should be passed
to identify the node.
     */
    export type scrollIntoViewIfNeededParameters = {
      /**
       * Identifier of the node.
       */
      nodeId?: NodeId;
      /**
       * Identifier of the backend node.
       */
      backendNodeId?: BackendNodeId;
      /**
       * JavaScript object id of the node wrapper.
       */
      objectId?: Runtime.RemoteObjectId;
      /**
       * The rect to be scrolled into view, relative to the node's border box, in CSS pixels.
When omitted, center of the node will be used, similar to Element.scrollIntoView.
       */
      rect?: Rect;
    }
    export type scrollIntoViewIfNeededReturnValue = {
    }
    /**
     * Disables DOM agent for the given page.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Discards search results from the session with the given id. `getSearchResults` should no longer
be called for that search.
     */
    export type discardSearchResultsParameters = {
      /**
       * Unique search session identifier.
       */
      searchId: string;
    }
    export type discardSearchResultsReturnValue = {
    }
    /**
     * Enables DOM agent for the given page.
     */
    export type enableParameters = {
      /**
       * Whether to include whitespaces in the children array of returned Nodes.
       */
      includeWhitespace?: "none"|"all";
    }
    export type enableReturnValue = {
    }
    /**
     * Focuses the given element.
     */
    export type focusParameters = {
      /**
       * Identifier of the node.
       */
      nodeId?: NodeId;
      /**
       * Identifier of the backend node.
       */
      backendNodeId?: BackendNodeId;
      /**
       * JavaScript object id of the node wrapper.
       */
      objectId?: Runtime.RemoteObjectId;
    }
    export type focusReturnValue = {
    }
    /**
     * Returns attributes for the specified node.
     */
    export type getAttributesParameters = {
      /**
       * Id of the node to retrieve attributes for.
       */
      nodeId: NodeId;
    }
    export type getAttributesReturnValue = {
      /**
       * An interleaved array of node attribute names and values.
       */
      attributes: string[];
    }
    /**
     * Returns boxes for the given node.
     */
    export type getBoxModelParameters = {
      /**
       * Identifier of the node.
       */
      nodeId?: NodeId;
      /**
       * Identifier of the backend node.
       */
      backendNodeId?: BackendNodeId;
      /**
       * JavaScript object id of the node wrapper.
       */
      objectId?: Runtime.RemoteObjectId;
    }
    export type getBoxModelReturnValue = {
      /**
       * Box model for the node.
       */
      model: BoxModel;
    }
    /**
     * Returns quads that describe node position on the page. This method
might return multiple quads for inline nodes.
     */
    export type getContentQuadsParameters = {
      /**
       * Identifier of the node.
       */
      nodeId?: NodeId;
      /**
       * Identifier of the backend node.
       */
      backendNodeId?: BackendNodeId;
      /**
       * JavaScript object id of the node wrapper.
       */
      objectId?: Runtime.RemoteObjectId;
    }
    export type getContentQuadsReturnValue = {
      /**
       * Quads that describe node layout relative to viewport.
       */
      quads: Quad[];
    }
    /**
     * Returns the root DOM node (and optionally the subtree) to the caller.
Implicitly enables the DOM domain events for the current target.
     */
    export type getDocumentParameters = {
      /**
       * The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0.
       */
      depth?: number;
      /**
       * Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false).
       */
      pierce?: boolean;
    }
    export type getDocumentReturnValue = {
      /**
       * Resulting node.
       */
      root: Node;
    }
    /**
     * Returns the root DOM node (and optionally the subtree) to the caller.
Deprecated, as it is not designed to work well with the rest of the DOM agent.
Use DOMSnapshot.captureSnapshot instead.
     */
    export type getFlattenedDocumentParameters = {
      /**
       * The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0.
       */
      depth?: number;
      /**
       * Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false).
       */
      pierce?: boolean;
    }
    export type getFlattenedDocumentReturnValue = {
      /**
       * Resulting node.
       */
      nodes: Node[];
    }
    /**
     * Finds nodes with a given computed style in a subtree.
     */
    export type getNodesForSubtreeByStyleParameters = {
      /**
       * Node ID pointing to the root of a subtree.
       */
      nodeId: NodeId;
      /**
       * The style to filter nodes by (includes nodes if any of properties matches).
       */
      computedStyles: CSSComputedStyleProperty[];
      /**
       * Whether or not iframes and shadow roots in the same target should be traversed when returning the
results (default is false).
       */
      pierce?: boolean;
    }
    export type getNodesForSubtreeByStyleReturnValue = {
      /**
       * Resulting nodes.
       */
      nodeIds: NodeId[];
    }
    /**
     * Returns node id at given location. Depending on whether DOM domain is enabled, nodeId is
either returned or not.
     */
    export type getNodeForLocationParameters = {
      /**
       * X coordinate.
       */
      x: number;
      /**
       * Y coordinate.
       */
      y: number;
      /**
       * False to skip to the nearest non-UA shadow root ancestor (default: false).
       */
      includeUserAgentShadowDOM?: boolean;
      /**
       * Whether to ignore pointer-events: none on elements and hit test them.
       */
      ignorePointerEventsNone?: boolean;
    }
    export type getNodeForLocationReturnValue = {
      /**
       * Resulting node.
       */
      backendNodeId: BackendNodeId;
      /**
       * Frame this node belongs to.
       */
      frameId: Page.FrameId;
      /**
       * Id of the node at given coordinates, only when enabled and requested document.
       */
      nodeId?: NodeId;
    }
    /**
     * Returns node's HTML markup.
     */
    export type getOuterHTMLParameters = {
      /**
       * Identifier of the node.
       */
      nodeId?: NodeId;
      /**
       * Identifier of the backend node.
       */
      backendNodeId?: BackendNodeId;
      /**
       * JavaScript object id of the node wrapper.
       */
      objectId?: Runtime.RemoteObjectId;
      /**
       * Include all shadow roots. Equals to false if not specified.
       */
      includeShadowDOM?: boolean;
    }
    export type getOuterHTMLReturnValue = {
      /**
       * Outer HTML markup.
       */
      outerHTML: string;
    }
    /**
     * Returns the id of the nearest ancestor that is a relayout boundary.
     */
    export type getRelayoutBoundaryParameters = {
      /**
       * Id of the node.
       */
      nodeId: NodeId;
    }
    export type getRelayoutBoundaryReturnValue = {
      /**
       * Relayout boundary node id for the given node.
       */
      nodeId: NodeId;
    }
    /**
     * Returns search results from given `fromIndex` to given `toIndex` from the search with the given
identifier.
     */
    export type getSearchResultsParameters = {
      /**
       * Unique search session identifier.
       */
      searchId: string;
      /**
       * Start index of the search result to be returned.
       */
      fromIndex: number;
      /**
       * End index of the search result to be returned.
       */
      toIndex: number;
    }
    export type getSearchResultsReturnValue = {
      /**
       * Ids of the search result nodes.
       */
      nodeIds: NodeId[];
    }
    /**
     * Hides any highlight.
     */
    export type hideHighlightParameters = {
    }
    export type hideHighlightReturnValue = {
    }
    /**
     * Highlights DOM node.
     */
    export type highlightNodeParameters = {
    }
    export type highlightNodeReturnValue = {
    }
    /**
     * Highlights given rectangle.
     */
    export type highlightRectParameters = {
    }
    export type highlightRectReturnValue = {
    }
    /**
     * Marks last undoable state.
     */
    export type markUndoableStateParameters = {
    }
    export type markUndoableStateReturnValue = {
    }
    /**
     * Moves node into the new container, places it before the given anchor.
     */
    export type moveToParameters = {
      /**
       * Id of the node to move.
       */
      nodeId: NodeId;
      /**
       * Id of the element to drop the moved node into.
       */
      targetNodeId: NodeId;
      /**
       * Drop node before this one (if absent, the moved node becomes the last child of
`targetNodeId`).
       */
      insertBeforeNodeId?: NodeId;
    }
    export type moveToReturnValue = {
      /**
       * New id of the moved node.
       */
      nodeId: NodeId;
    }
    /**
     * Searches for a given string in the DOM tree. Use `getSearchResults` to access search results or
`cancelSearch` to end this search session.
     */
    export type performSearchParameters = {
      /**
       * Plain text or query selector or XPath search query.
       */
      query: string;
      /**
       * True to search in user agent shadow DOM.
       */
      includeUserAgentShadowDOM?: boolean;
    }
    export type performSearchReturnValue = {
      /**
       * Unique search session identifier.
       */
      searchId: string;
      /**
       * Number of search results.
       */
      resultCount: number;
    }
    /**
     * Requests that the node is sent to the caller given its path. // FIXME, use XPath
     */
    export type pushNodeByPathToFrontendParameters = {
      /**
       * Path to node in the proprietary format.
       */
      path: string;
    }
    export type pushNodeByPathToFrontendReturnValue = {
      /**
       * Id of the node for given path.
       */
      nodeId: NodeId;
    }
    /**
     * Requests that a batch of nodes is sent to the caller given their backend node ids.
     */
    export type pushNodesByBackendIdsToFrontendParameters = {
      /**
       * The array of backend node ids.
       */
      backendNodeIds: BackendNodeId[];
    }
    export type pushNodesByBackendIdsToFrontendReturnValue = {
      /**
       * The array of ids of pushed nodes that correspond to the backend ids specified in
backendNodeIds.
       */
      nodeIds: NodeId[];
    }
    /**
     * Executes `querySelector` on a given node.
     */
    export type querySelectorParameters = {
      /**
       * Id of the node to query upon.
       */
      nodeId: NodeId;
      /**
       * Selector string.
       */
      selector: string;
    }
    export type querySelectorReturnValue = {
      /**
       * Query selector result.
       */
      nodeId: NodeId;
    }
    /**
     * Executes `querySelectorAll` on a given node.
     */
    export type querySelectorAllParameters = {
      /**
       * Id of the node to query upon.
       */
      nodeId: NodeId;
      /**
       * Selector string.
       */
      selector: string;
    }
    export type querySelectorAllReturnValue = {
      /**
       * Query selector result.
       */
      nodeIds: NodeId[];
    }
    /**
     * Returns NodeIds of current top layer elements.
Top layer is rendered closest to the user within a viewport, therefore its elements always
appear on top of all other content.
     */
    export type getTopLayerElementsParameters = {
    }
    export type getTopLayerElementsReturnValue = {
      /**
       * NodeIds of top layer elements
       */
      nodeIds: NodeId[];
    }
    /**
     * Returns the NodeId of the matched element according to certain relations.
     */
    export type getElementByRelationParameters = {
      /**
       * Id of the node from which to query the relation.
       */
      nodeId: NodeId;
      /**
       * Type of relation to get.
       */
      relation: "PopoverTarget"|"InterestTarget"|"CommandFor";
    }
    export type getElementByRelationReturnValue = {
      /**
       * NodeId of the element matching the queried relation.
       */
      nodeId: NodeId;
    }
    /**
     * Re-does the last undone action.
     */
    export type redoParameters = {
    }
    export type redoReturnValue = {
    }
    /**
     * Removes attribute with given name from an element with given id.
     */
    export type removeAttributeParameters = {
      /**
       * Id of the element to remove attribute from.
       */
      nodeId: NodeId;
      /**
       * Name of the attribute to remove.
       */
      name: string;
    }
    export type removeAttributeReturnValue = {
    }
    /**
     * Removes node with given id.
     */
    export type removeNodeParameters = {
      /**
       * Id of the node to remove.
       */
      nodeId: NodeId;
    }
    export type removeNodeReturnValue = {
    }
    /**
     * Requests that children of the node with given id are returned to the caller in form of
`setChildNodes` events where not only immediate children are retrieved, but all children down to
the specified depth.
     */
    export type requestChildNodesParameters = {
      /**
       * Id of the node to get children for.
       */
      nodeId: NodeId;
      /**
       * The maximum depth at which children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0.
       */
      depth?: number;
      /**
       * Whether or not iframes and shadow roots should be traversed when returning the sub-tree
(default is false).
       */
      pierce?: boolean;
    }
    export type requestChildNodesReturnValue = {
    }
    /**
     * Requests that the node is sent to the caller given the JavaScript node object reference. All
nodes that form the path from the node to the root are also sent to the client as a series of
`setChildNodes` notifications.
     */
    export type requestNodeParameters = {
      /**
       * JavaScript object id to convert into node.
       */
      objectId: Runtime.RemoteObjectId;
    }
    export type requestNodeReturnValue = {
      /**
       * Node id for given object.
       */
      nodeId: NodeId;
    }
    /**
     * Resolves the JavaScript node object for a given NodeId or BackendNodeId.
     */
    export type resolveNodeParameters = {
      /**
       * Id of the node to resolve.
       */
      nodeId?: NodeId;
      /**
       * Backend identifier of the node to resolve.
       */
      backendNodeId?: DOM.BackendNodeId;
      /**
       * Symbolic group name that can be used to release multiple objects.
       */
      objectGroup?: string;
      /**
       * Execution context in which to resolve the node.
       */
      executionContextId?: Runtime.ExecutionContextId;
    }
    export type resolveNodeReturnValue = {
      /**
       * JavaScript object wrapper for given node.
       */
      object: Runtime.RemoteObject;
    }
    /**
     * Sets attribute for an element with given id.
     */
    export type setAttributeValueParameters = {
      /**
       * Id of the element to set attribute for.
       */
      nodeId: NodeId;
      /**
       * Attribute name.
       */
      name: string;
      /**
       * Attribute value.
       */
      value: string;
    }
    export type setAttributeValueReturnValue = {
    }
    /**
     * Sets attributes on element with given id. This method is useful when user edits some existing
attribute value and types in several attribute name/value pairs.
     */
    export type setAttributesAsTextParameters = {
      /**
       * Id of the element to set attributes for.
       */
      nodeId: NodeId;
      /**
       * Text with a number of attributes. Will parse this text using HTML parser.
       */
      text: string;
      /**
       * Attribute name to replace with new attributes derived from text in case text parsed
successfully.
       */
      name?: string;
    }
    export type setAttributesAsTextReturnValue = {
    }
    /**
     * Sets files for the given file input element.
     */
    export type setFileInputFilesParameters = {
      /**
       * Array of file paths to set.
       */
      files: string[];
      /**
       * Identifier of the node.
       */
      nodeId?: NodeId;
      /**
       * Identifier of the backend node.
       */
      backendNodeId?: BackendNodeId;
      /**
       * JavaScript object id of the node wrapper.
       */
      objectId?: Runtime.RemoteObjectId;
    }
    export type setFileInputFilesReturnValue = {
    }
    /**
     * Sets if stack traces should be captured for Nodes. See `Node.getNodeStackTraces`. Default is disabled.
     */
    export type setNodeStackTracesEnabledParameters = {
      /**
       * Enable or disable.
       */
      enable: boolean;
    }
    export type setNodeStackTracesEnabledReturnValue = {
    }
    /**
     * Gets stack traces associated with a Node. As of now, only provides stack trace for Node creation.
     */
    export type getNodeStackTracesParameters = {
      /**
       * Id of the node to get stack traces for.
       */
      nodeId: NodeId;
    }
    export type getNodeStackTracesReturnValue = {
      /**
       * Creation stack trace, if available.
       */
      creation?: Runtime.StackTrace;
    }
    /**
     * Returns file information for the given
File wrapper.
     */
    export type getFileInfoParameters = {
      /**
       * JavaScript object id of the node wrapper.
       */
      objectId: Runtime.RemoteObjectId;
    }
    export type getFileInfoReturnValue = {
      path: string;
    }
    /**
     * Returns list of detached nodes
     */
    export type getDetachedDomNodesParameters = {
    }
    export type getDetachedDomNodesReturnValue = {
      /**
       * The list of detached nodes
       */
      detachedNodes: DetachedElementInfo[];
    }
    /**
     * Enables console to refer to the node with given id via $x (see Command Line API for more details
$x functions).
     */
    export type setInspectedNodeParameters = {
      /**
       * DOM node id to be accessible by means of $x command line API.
       */
      nodeId: NodeId;
    }
    export type setInspectedNodeReturnValue = {
    }
    /**
     * Sets node name for a node with given id.
     */
    export type setNodeNameParameters = {
      /**
       * Id of the node to set name for.
       */
      nodeId: NodeId;
      /**
       * New node's name.
       */
      name: string;
    }
    export type setNodeNameReturnValue = {
      /**
       * New node's id.
       */
      nodeId: NodeId;
    }
    /**
     * Sets node value for a node with given id.
     */
    export type setNodeValueParameters = {
      /**
       * Id of the node to set value for.
       */
      nodeId: NodeId;
      /**
       * New node's value.
       */
      value: string;
    }
    export type setNodeValueReturnValue = {
    }
    /**
     * Sets node HTML markup, returns new node id.
     */
    export type setOuterHTMLParameters = {
      /**
       * Id of the node to set markup for.
       */
      nodeId: NodeId;
      /**
       * Outer HTML markup to set.
       */
      outerHTML: string;
    }
    export type setOuterHTMLReturnValue = {
    }
    /**
     * Undoes the last performed action.
     */
    export type undoParameters = {
    }
    export type undoReturnValue = {
    }
    /**
     * Returns iframe node that owns iframe with the given domain.
     */
    export type getFrameOwnerParameters = {
      frameId: Page.FrameId;
    }
    export type getFrameOwnerReturnValue = {
      /**
       * Resulting node.
       */
      backendNodeId: BackendNodeId;
      /**
       * Id of the node at given coordinates, only when enabled and requested document.
       */
      nodeId?: NodeId;
    }
    /**
     * Returns the query container of the given node based on container query
conditions: containerName, physical and logical axes, and whether it queries
scroll-state or anchored elements. If no axes are provided and
queriesScrollState is false, the style container is returned, which is the
direct parent or the closest element with a matching container-name.
     */
    export type getContainerForNodeParameters = {
      nodeId: NodeId;
      containerName?: string;
      physicalAxes?: PhysicalAxes;
      logicalAxes?: LogicalAxes;
      queriesScrollState?: boolean;
      queriesAnchored?: boolean;
    }
    export type getContainerForNodeReturnValue = {
      /**
       * The container node for the given node, or null if not found.
       */
      nodeId?: NodeId;
    }
    /**
     * Returns the descendants of a container query container that have
container queries against this container.
     */
    export type getQueryingDescendantsForContainerParameters = {
      /**
       * Id of the container node to find querying descendants from.
       */
      nodeId: NodeId;
    }
    export type getQueryingDescendantsForContainerReturnValue = {
      /**
       * Descendant nodes with container queries against the given container.
       */
      nodeIds: NodeId[];
    }
    /**
     * Returns the target anchor element of the given anchor query according to
https://www.w3.org/TR/css-anchor-position-1/#target.
     */
    export type getAnchorElementParameters = {
      /**
       * Id of the positioned element from which to find the anchor.
       */
      nodeId: NodeId;
      /**
       * An optional anchor specifier, as defined in
https://www.w3.org/TR/css-anchor-position-1/#anchor-specifier.
If not provided, it will return the implicit anchor element for
the given positioned element.
       */
      anchorSpecifier?: string;
    }
    export type getAnchorElementReturnValue = {
      /**
       * The anchor element of the given anchor query.
       */
      nodeId: NodeId;
    }
    /**
     * When enabling, this API force-opens the popover identified by nodeId
and keeps it open until disabled.
     */
    export type forceShowPopoverParameters = {
      /**
       * Id of the popover HTMLElement
       */
      nodeId: NodeId;
      /**
       * If true, opens the popover and keeps it open. If false, closes the
popover if it was previously force-opened.
       */
      enable: boolean;
    }
    export type forceShowPopoverReturnValue = {
      /**
       * List of popovers that were closed in order to respect popover stacking order.
       */
      nodeIds: NodeId[];
    }
  }
  
  /**
   * DOM debugging allows setting breakpoints on particular DOM operations and events. JavaScript
execution will stop on these operations as if there was a regular breakpoint set.
   */
  export namespace DOMDebugger {
    /**
     * DOM breakpoint type.
     */
    export type DOMBreakpointType = "subtree-modified"|"attribute-modified"|"node-removed";
    /**
     * CSP Violation type.
     */
    export type CSPViolationType = "trustedtype-sink-violation"|"trustedtype-policy-violation";
    /**
     * Object event listener.
     */
    export interface EventListener {
      /**
       * `EventListener`'s type.
       */
      type: string;
      /**
       * `EventListener`'s useCapture.
       */
      useCapture: boolean;
      /**
       * `EventListener`'s passive flag.
       */
      passive: boolean;
      /**
       * `EventListener`'s once flag.
       */
      once: boolean;
      /**
       * Script id of the handler code.
       */
      scriptId: Runtime.ScriptId;
      /**
       * Line number in the script (0-based).
       */
      lineNumber: number;
      /**
       * Column number in the script (0-based).
       */
      columnNumber: number;
      /**
       * Event handler function value.
       */
      handler?: Runtime.RemoteObject;
      /**
       * Event original handler function value.
       */
      originalHandler?: Runtime.RemoteObject;
      /**
       * Node the listener is added to (if any).
       */
      backendNodeId?: DOM.BackendNodeId;
    }
    
    
    /**
     * Returns event listeners of the given object.
     */
    export type getEventListenersParameters = {
      /**
       * Identifier of the object to return listeners for.
       */
      objectId: Runtime.RemoteObjectId;
      /**
       * The maximum depth at which Node children should be retrieved, defaults to 1. Use -1 for the
entire subtree or provide an integer larger than 0.
       */
      depth?: number;
      /**
       * Whether or not iframes and shadow roots should be traversed when returning the subtree
(default is false). Reports listeners for all contexts if pierce is enabled.
       */
      pierce?: boolean;
    }
    export type getEventListenersReturnValue = {
      /**
       * Array of relevant listeners.
       */
      listeners: EventListener[];
    }
    /**
     * Removes DOM breakpoint that was set using `setDOMBreakpoint`.
     */
    export type removeDOMBreakpointParameters = {
      /**
       * Identifier of the node to remove breakpoint from.
       */
      nodeId: DOM.NodeId;
      /**
       * Type of the breakpoint to remove.
       */
      type: DOMBreakpointType;
    }
    export type removeDOMBreakpointReturnValue = {
    }
    /**
     * Removes breakpoint on particular DOM event.
     */
    export type removeEventListenerBreakpointParameters = {
      /**
       * Event name.
       */
      eventName: string;
      /**
       * EventTarget interface name.
       */
      targetName?: string;
    }
    export type removeEventListenerBreakpointReturnValue = {
    }
    /**
     * Removes breakpoint on particular native event.
     */
    export type removeInstrumentationBreakpointParameters = {
      /**
       * Instrumentation name to stop on.
       */
      eventName: string;
    }
    export type removeInstrumentationBreakpointReturnValue = {
    }
    /**
     * Removes breakpoint from XMLHttpRequest.
     */
    export type removeXHRBreakpointParameters = {
      /**
       * Resource URL substring.
       */
      url: string;
    }
    export type removeXHRBreakpointReturnValue = {
    }
    /**
     * Sets breakpoint on particular CSP violations.
     */
    export type setBreakOnCSPViolationParameters = {
      /**
       * CSP Violations to stop upon.
       */
      violationTypes: CSPViolationType[];
    }
    export type setBreakOnCSPViolationReturnValue = {
    }
    /**
     * Sets breakpoint on particular operation with DOM.
     */
    export type setDOMBreakpointParameters = {
      /**
       * Identifier of the node to set breakpoint on.
       */
      nodeId: DOM.NodeId;
      /**
       * Type of the operation to stop upon.
       */
      type: DOMBreakpointType;
    }
    export type setDOMBreakpointReturnValue = {
    }
    /**
     * Sets breakpoint on particular DOM event.
     */
    export type setEventListenerBreakpointParameters = {
      /**
       * DOM Event name to stop on (any DOM event will do).
       */
      eventName: string;
      /**
       * EventTarget interface name to stop on. If equal to `"*"` or not provided, will stop on any
EventTarget.
       */
      targetName?: string;
    }
    export type setEventListenerBreakpointReturnValue = {
    }
    /**
     * Sets breakpoint on particular native event.
     */
    export type setInstrumentationBreakpointParameters = {
      /**
       * Instrumentation name to stop on.
       */
      eventName: string;
    }
    export type setInstrumentationBreakpointReturnValue = {
    }
    /**
     * Sets breakpoint on XMLHttpRequest.
     */
    export type setXHRBreakpointParameters = {
      /**
       * Resource URL substring. All XHRs having this substring in the URL will get stopped upon.
       */
      url: string;
    }
    export type setXHRBreakpointReturnValue = {
    }
  }
  
  /**
   * This domain facilitates obtaining document snapshots with DOM, layout, and style information.
   */
  export namespace DOMSnapshot {
    /**
     * A Node in the DOM tree.
     */
    export interface DOMNode {
      /**
       * `Node`'s nodeType.
       */
      nodeType: number;
      /**
       * `Node`'s nodeName.
       */
      nodeName: string;
      /**
       * `Node`'s nodeValue.
       */
      nodeValue: string;
      /**
       * Only set for textarea elements, contains the text value.
       */
      textValue?: string;
      /**
       * Only set for input elements, contains the input's associated text value.
       */
      inputValue?: string;
      /**
       * Only set for radio and checkbox input elements, indicates if the element has been checked
       */
      inputChecked?: boolean;
      /**
       * Only set for option elements, indicates if the element has been selected
       */
      optionSelected?: boolean;
      /**
       * `Node`'s id, corresponds to DOM.Node.backendNodeId.
       */
      backendNodeId: DOM.BackendNodeId;
      /**
       * The indexes of the node's child nodes in the `domNodes` array returned by `getSnapshot`, if
any.
       */
      childNodeIndexes?: number[];
      /**
       * Attributes of an `Element` node.
       */
      attributes?: NameValue[];
      /**
       * Indexes of pseudo elements associated with this node in the `domNodes` array returned by
`getSnapshot`, if any.
       */
      pseudoElementIndexes?: number[];
      /**
       * The index of the node's related layout tree node in the `layoutTreeNodes` array returned by
`getSnapshot`, if any.
       */
      layoutNodeIndex?: number;
      /**
       * Document URL that `Document` or `FrameOwner` node points to.
       */
      documentURL?: string;
      /**
       * Base URL that `Document` or `FrameOwner` node uses for URL completion.
       */
      baseURL?: string;
      /**
       * Only set for documents, contains the document's content language.
       */
      contentLanguage?: string;
      /**
       * Only set for documents, contains the document's character set encoding.
       */
      documentEncoding?: string;
      /**
       * `DocumentType` node's publicId.
       */
      publicId?: string;
      /**
       * `DocumentType` node's systemId.
       */
      systemId?: string;
      /**
       * Frame ID for frame owner elements and also for the document node.
       */
      frameId?: Page.FrameId;
      /**
       * The index of a frame owner element's content document in the `domNodes` array returned by
`getSnapshot`, if any.
       */
      contentDocumentIndex?: number;
      /**
       * Type of a pseudo element node.
       */
      pseudoType?: DOM.PseudoType;
      /**
       * Shadow root type.
       */
      shadowRootType?: DOM.ShadowRootType;
      /**
       * Whether this DOM node responds to mouse clicks. This includes nodes that have had click
event listeners attached via JavaScript as well as anchor tags that naturally navigate when
clicked.
       */
      isClickable?: boolean;
      /**
       * Details of the node's event listeners, if any.
       */
      eventListeners?: DOMDebugger.EventListener[];
      /**
       * The selected url for nodes with a srcset attribute.
       */
      currentSourceURL?: string;
      /**
       * The url of the script (if any) that generates this node.
       */
      originURL?: string;
      /**
       * Scroll offsets, set when this node is a Document.
       */
      scrollOffsetX?: number;
      scrollOffsetY?: number;
    }
    /**
     * Details of post layout rendered text positions. The exact layout should not be regarded as
stable and may change between versions.
     */
    export interface InlineTextBox {
      /**
       * The bounding box in document coordinates. Note that scroll offset of the document is ignored.
       */
      boundingBox: DOM.Rect;
      /**
       * The starting index in characters, for this post layout textbox substring. Characters that
would be represented as a surrogate pair in UTF-16 have length 2.
       */
      startCharacterIndex: number;
      /**
       * The number of characters in this post layout textbox substring. Characters that would be
represented as a surrogate pair in UTF-16 have length 2.
       */
      numCharacters: number;
    }
    /**
     * Details of an element in the DOM tree with a LayoutObject.
     */
    export interface LayoutTreeNode {
      /**
       * The index of the related DOM node in the `domNodes` array returned by `getSnapshot`.
       */
      domNodeIndex: number;
      /**
       * The bounding box in document coordinates. Note that scroll offset of the document is ignored.
       */
      boundingBox: DOM.Rect;
      /**
       * Contents of the LayoutText, if any.
       */
      layoutText?: string;
      /**
       * The post-layout inline text nodes, if any.
       */
      inlineTextNodes?: InlineTextBox[];
      /**
       * Index into the `computedStyles` array returned by `getSnapshot`.
       */
      styleIndex?: number;
      /**
       * Global paint order index, which is determined by the stacking order of the nodes. Nodes
that are painted together will have the same index. Only provided if includePaintOrder in
getSnapshot was true.
       */
      paintOrder?: number;
      /**
       * Set to true to indicate the element begins a new stacking context.
       */
      isStackingContext?: boolean;
    }
    /**
     * A subset of the full ComputedStyle as defined by the request whitelist.
     */
    export interface ComputedStyle {
      /**
       * Name/value pairs of computed style properties.
       */
      properties: NameValue[];
    }
    /**
     * A name/value pair.
     */
    export interface NameValue {
      /**
       * Attribute/property name.
       */
      name: string;
      /**
       * Attribute/property value.
       */
      value: string;
    }
    /**
     * Index of the string in the strings table.
     */
    export type StringIndex = number;
    /**
     * Index of the string in the strings table.
     */
    export type ArrayOfStrings = StringIndex[];
    /**
     * Data that is only present on rare nodes.
     */
    export interface RareStringData {
      index: number[];
      value: StringIndex[];
    }
    export interface RareBooleanData {
      index: number[];
    }
    export interface RareIntegerData {
      index: number[];
      value: number[];
    }
    export type Rectangle = number[];
    /**
     * Document snapshot.
     */
    export interface DocumentSnapshot {
      /**
       * Document URL that `Document` or `FrameOwner` node points to.
       */
      documentURL: StringIndex;
      /**
       * Document title.
       */
      title: StringIndex;
      /**
       * Base URL that `Document` or `FrameOwner` node uses for URL completion.
       */
      baseURL: StringIndex;
      /**
       * Contains the document's content language.
       */
      contentLanguage: StringIndex;
      /**
       * Contains the document's character set encoding.
       */
      encodingName: StringIndex;
      /**
       * `DocumentType` node's publicId.
       */
      publicId: StringIndex;
      /**
       * `DocumentType` node's systemId.
       */
      systemId: StringIndex;
      /**
       * Frame ID for frame owner elements and also for the document node.
       */
      frameId: StringIndex;
      /**
       * A table with dom nodes.
       */
      nodes: NodeTreeSnapshot;
      /**
       * The nodes in the layout tree.
       */
      layout: LayoutTreeSnapshot;
      /**
       * The post-layout inline text nodes.
       */
      textBoxes: TextBoxSnapshot;
      /**
       * Horizontal scroll offset.
       */
      scrollOffsetX?: number;
      /**
       * Vertical scroll offset.
       */
      scrollOffsetY?: number;
      /**
       * Document content width.
       */
      contentWidth?: number;
      /**
       * Document content height.
       */
      contentHeight?: number;
    }
    /**
     * Table containing nodes.
     */
    export interface NodeTreeSnapshot {
      /**
       * Parent node index.
       */
      parentIndex?: number[];
      /**
       * `Node`'s nodeType.
       */
      nodeType?: number[];
      /**
       * Type of the shadow root the `Node` is in. String values are equal to the `ShadowRootType` enum.
       */
      shadowRootType?: RareStringData;
      /**
       * `Node`'s nodeName.
       */
      nodeName?: StringIndex[];
      /**
       * `Node`'s nodeValue.
       */
      nodeValue?: StringIndex[];
      /**
       * `Node`'s id, corresponds to DOM.Node.backendNodeId.
       */
      backendNodeId?: DOM.BackendNodeId[];
      /**
       * Attributes of an `Element` node. Flatten name, value pairs.
       */
      attributes?: ArrayOfStrings[];
      /**
       * Only set for textarea elements, contains the text value.
       */
      textValue?: RareStringData;
      /**
       * Only set for input elements, contains the input's associated text value.
       */
      inputValue?: RareStringData;
      /**
       * Only set for radio and checkbox input elements, indicates if the element has been checked
       */
      inputChecked?: RareBooleanData;
      /**
       * Only set for option elements, indicates if the element has been selected
       */
      optionSelected?: RareBooleanData;
      /**
       * The index of the document in the list of the snapshot documents.
       */
      contentDocumentIndex?: RareIntegerData;
      /**
       * Type of a pseudo element node.
       */
      pseudoType?: RareStringData;
      /**
       * Pseudo element identifier for this node. Only present if there is a
valid pseudoType.
       */
      pseudoIdentifier?: RareStringData;
      /**
       * Whether this DOM node responds to mouse clicks. This includes nodes that have had click
event listeners attached via JavaScript as well as anchor tags that naturally navigate when
clicked.
       */
      isClickable?: RareBooleanData;
      /**
       * The selected url for nodes with a srcset attribute.
       */
      currentSourceURL?: RareStringData;
      /**
       * The url of the script (if any) that generates this node.
       */
      originURL?: RareStringData;
    }
    /**
     * Table of details of an element in the DOM tree with a LayoutObject.
     */
    export interface LayoutTreeSnapshot {
      /**
       * Index of the corresponding node in the `NodeTreeSnapshot` array returned by `captureSnapshot`.
       */
      nodeIndex: number[];
      /**
       * Array of indexes specifying computed style strings, filtered according to the `computedStyles` parameter passed to `captureSnapshot`.
       */
      styles: ArrayOfStrings[];
      /**
       * The absolute position bounding box.
       */
      bounds: Rectangle[];
      /**
       * Contents of the LayoutText, if any.
       */
      text: StringIndex[];
      /**
       * Stacking context information.
       */
      stackingContexts: RareBooleanData;
      /**
       * Global paint order index, which is determined by the stacking order of the nodes. Nodes
that are painted together will have the same index. Only provided if includePaintOrder in
captureSnapshot was true.
       */
      paintOrders?: number[];
      /**
       * The offset rect of nodes. Only available when includeDOMRects is set to true
       */
      offsetRects?: Rectangle[];
      /**
       * The scroll rect of nodes. Only available when includeDOMRects is set to true
       */
      scrollRects?: Rectangle[];
      /**
       * The client rect of nodes. Only available when includeDOMRects is set to true
       */
      clientRects?: Rectangle[];
      /**
       * The list of background colors that are blended with colors of overlapping elements.
       */
      blendedBackgroundColors?: StringIndex[];
      /**
       * The list of computed text opacities.
       */
      textColorOpacities?: number[];
    }
    /**
     * Table of details of the post layout rendered text positions. The exact layout should not be regarded as
stable and may change between versions.
     */
    export interface TextBoxSnapshot {
      /**
       * Index of the layout tree node that owns this box collection.
       */
      layoutIndex: number[];
      /**
       * The absolute position bounding box.
       */
      bounds: Rectangle[];
      /**
       * The starting index in characters, for this post layout textbox substring. Characters that
would be represented as a surrogate pair in UTF-16 have length 2.
       */
      start: number[];
      /**
       * The number of characters in this post layout textbox substring. Characters that would be
represented as a surrogate pair in UTF-16 have length 2.
       */
      length: number[];
    }
    
    
    /**
     * Disables DOM snapshot agent for the given page.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables DOM snapshot agent for the given page.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Returns a document snapshot, including the full DOM tree of the root node (including iframes,
template contents, and imported documents) in a flattened array, as well as layout and
white-listed computed style information for the nodes. Shadow DOM in the returned DOM tree is
flattened.
     */
    export type getSnapshotParameters = {
      /**
       * Whitelist of computed styles to return.
       */
      computedStyleWhitelist: string[];
      /**
       * Whether or not to retrieve details of DOM listeners (default false).
       */
      includeEventListeners?: boolean;
      /**
       * Whether to determine and include the paint order index of LayoutTreeNodes (default false).
       */
      includePaintOrder?: boolean;
      /**
       * Whether to include UA shadow tree in the snapshot (default false).
       */
      includeUserAgentShadowTree?: boolean;
    }
    export type getSnapshotReturnValue = {
      /**
       * The nodes in the DOM tree. The DOMNode at index 0 corresponds to the root document.
       */
      domNodes: DOMNode[];
      /**
       * The nodes in the layout tree.
       */
      layoutTreeNodes: LayoutTreeNode[];
      /**
       * Whitelisted ComputedStyle properties for each node in the layout tree.
       */
      computedStyles: ComputedStyle[];
    }
    /**
     * Returns a document snapshot, including the full DOM tree of the root node (including iframes,
template contents, and imported documents) in a flattened array, as well as layout and
white-listed computed style information for the nodes. Shadow DOM in the returned DOM tree is
flattened.
     */
    export type captureSnapshotParameters = {
      /**
       * Whitelist of computed styles to return.
       */
      computedStyles: string[];
      /**
       * Whether to include layout object paint orders into the snapshot.
       */
      includePaintOrder?: boolean;
      /**
       * Whether to include DOM rectangles (offsetRects, clientRects, scrollRects) into the snapshot
       */
      includeDOMRects?: boolean;
      /**
       * Whether to include blended background colors in the snapshot (default: false).
Blended background color is achieved by blending background colors of all elements
that overlap with the current element.
       */
      includeBlendedBackgroundColors?: boolean;
      /**
       * Whether to include text color opacity in the snapshot (default: false).
An element might have the opacity property set that affects the text color of the element.
The final text color opacity is computed based on the opacity of all overlapping elements.
       */
      includeTextColorOpacities?: boolean;
    }
    export type captureSnapshotReturnValue = {
      /**
       * The nodes in the DOM tree. The DOMNode at index 0 corresponds to the root document.
       */
      documents: DocumentSnapshot[];
      /**
       * Shared string table that all string properties refer to with indexes.
       */
      strings: string[];
    }
  }
  
  /**
   * Query and modify DOM storage.
   */
  export namespace DOMStorage {
    export type SerializedStorageKey = string;
    /**
     * DOM Storage identifier.
     */
    export interface StorageId {
      /**
       * Security origin for the storage.
       */
      securityOrigin?: string;
      /**
       * Represents a key by which DOM Storage keys its CachedStorageAreas
       */
      storageKey?: SerializedStorageKey;
      /**
       * Whether the storage is local storage (not session storage).
       */
      isLocalStorage: boolean;
    }
    /**
     * DOM Storage item.
     */
    export type Item = string[];
    
    export type domStorageItemAddedPayload = {
      storageId: StorageId;
      key: string;
      newValue: string;
    }
    export type domStorageItemRemovedPayload = {
      storageId: StorageId;
      key: string;
    }
    export type domStorageItemUpdatedPayload = {
      storageId: StorageId;
      key: string;
      oldValue: string;
      newValue: string;
    }
    export type domStorageItemsClearedPayload = {
      storageId: StorageId;
    }
    
    export type clearParameters = {
      storageId: StorageId;
    }
    export type clearReturnValue = {
    }
    /**
     * Disables storage tracking, prevents storage events from being sent to the client.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables storage tracking, storage events will now be delivered to the client.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    export type getDOMStorageItemsParameters = {
      storageId: StorageId;
    }
    export type getDOMStorageItemsReturnValue = {
      entries: Item[];
    }
    export type removeDOMStorageItemParameters = {
      storageId: StorageId;
      key: string;
    }
    export type removeDOMStorageItemReturnValue = {
    }
    export type setDOMStorageItemParameters = {
      storageId: StorageId;
      key: string;
      value: string;
    }
    export type setDOMStorageItemReturnValue = {
    }
  }
  
  export namespace DeviceAccess {
    /**
     * Device request id.
     */
    export type RequestId = string;
    /**
     * A device id.
     */
    export type DeviceId = string;
    /**
     * Device information displayed in a user prompt to select a device.
     */
    export interface PromptDevice {
      id: DeviceId;
      /**
       * Display name as it appears in a device request user prompt.
       */
      name: string;
    }
    
    /**
     * A device request opened a user prompt to select a device. Respond with the
selectPrompt or cancelPrompt command.
     */
    export type deviceRequestPromptedPayload = {
      id: RequestId;
      devices: PromptDevice[];
    }
    
    /**
     * Enable events in this domain.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Disable events in this domain.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Select a device in response to a DeviceAccess.deviceRequestPrompted event.
     */
    export type selectPromptParameters = {
      id: RequestId;
      deviceId: DeviceId;
    }
    export type selectPromptReturnValue = {
    }
    /**
     * Cancel a prompt in response to a DeviceAccess.deviceRequestPrompted event.
     */
    export type cancelPromptParameters = {
      id: RequestId;
    }
    export type cancelPromptReturnValue = {
    }
  }
  
  export namespace DeviceOrientation {
    
    
    /**
     * Clears the overridden Device Orientation.
     */
    export type clearDeviceOrientationOverrideParameters = {
    }
    export type clearDeviceOrientationOverrideReturnValue = {
    }
    /**
     * Overrides the Device Orientation.
     */
    export type setDeviceOrientationOverrideParameters = {
      /**
       * Mock alpha
       */
      alpha: number;
      /**
       * Mock beta
       */
      beta: number;
      /**
       * Mock gamma
       */
      gamma: number;
    }
    export type setDeviceOrientationOverrideReturnValue = {
    }
  }
  
  /**
   * This domain emulates different environments for the page.
   */
  export namespace Emulation {
    export interface SafeAreaInsets {
      /**
       * Overrides safe-area-inset-top.
       */
      top?: number;
      /**
       * Overrides safe-area-max-inset-top.
       */
      topMax?: number;
      /**
       * Overrides safe-area-inset-left.
       */
      left?: number;
      /**
       * Overrides safe-area-max-inset-left.
       */
      leftMax?: number;
      /**
       * Overrides safe-area-inset-bottom.
       */
      bottom?: number;
      /**
       * Overrides safe-area-max-inset-bottom.
       */
      bottomMax?: number;
      /**
       * Overrides safe-area-inset-right.
       */
      right?: number;
      /**
       * Overrides safe-area-max-inset-right.
       */
      rightMax?: number;
    }
    /**
     * Screen orientation.
     */
    export interface ScreenOrientation {
      /**
       * Orientation type.
       */
      type: "portraitPrimary"|"portraitSecondary"|"landscapePrimary"|"landscapeSecondary";
      /**
       * Orientation angle.
       */
      angle: number;
    }
    export interface DisplayFeature {
      /**
       * Orientation of a display feature in relation to screen
       */
      orientation: "vertical"|"horizontal";
      /**
       * The offset from the screen origin in either the x (for vertical
orientation) or y (for horizontal orientation) direction.
       */
      offset: number;
      /**
       * A display feature may mask content such that it is not physically
displayed - this length along with the offset describes this area.
A display feature that only splits content will have a 0 mask_length.
       */
      maskLength: number;
    }
    export interface DevicePosture {
      /**
       * Current posture of the device
       */
      type: "continuous"|"folded";
    }
    export interface MediaFeature {
      name: string;
      value: string;
    }
    /**
     * advance: If the scheduler runs out of immediate work, the virtual time base may fast forward to
allow the next delayed task (if any) to run; pause: The virtual time base may not advance;
pauseIfNetworkFetchesPending: The virtual time base may not advance if there are any pending
resource fetches.
     */
    export type VirtualTimePolicy = "advance"|"pause"|"pauseIfNetworkFetchesPending";
    /**
     * Used to specify User Agent Client Hints to emulate. See https://wicg.github.io/ua-client-hints
     */
    export interface UserAgentBrandVersion {
      brand: string;
      version: string;
    }
    /**
     * Used to specify User Agent Client Hints to emulate. See https://wicg.github.io/ua-client-hints
Missing optional values will be filled in by the target with what it would normally use.
     */
    export interface UserAgentMetadata {
      /**
       * Brands appearing in Sec-CH-UA.
       */
      brands?: UserAgentBrandVersion[];
      /**
       * Brands appearing in Sec-CH-UA-Full-Version-List.
       */
      fullVersionList?: UserAgentBrandVersion[];
      fullVersion?: string;
      platform: string;
      platformVersion: string;
      architecture: string;
      model: string;
      mobile: boolean;
      bitness?: string;
      wow64?: boolean;
      /**
       * Used to specify User Agent form-factor values.
See https://wicg.github.io/ua-client-hints/#sec-ch-ua-form-factors
       */
      formFactors?: string[];
    }
    /**
     * Used to specify sensor types to emulate.
See https://w3c.github.io/sensors/#automation for more information.
     */
    export type SensorType = "absolute-orientation"|"accelerometer"|"ambient-light"|"gravity"|"gyroscope"|"linear-acceleration"|"magnetometer"|"relative-orientation";
    export interface SensorMetadata {
      available?: boolean;
      minimumFrequency?: number;
      maximumFrequency?: number;
    }
    export interface SensorReadingSingle {
      value: number;
    }
    export interface SensorReadingXYZ {
      x: number;
      y: number;
      z: number;
    }
    export interface SensorReadingQuaternion {
      x: number;
      y: number;
      z: number;
      w: number;
    }
    export interface SensorReading {
      single?: SensorReadingSingle;
      xyz?: SensorReadingXYZ;
      quaternion?: SensorReadingQuaternion;
    }
    export type PressureSource = "cpu";
    export type PressureState = "nominal"|"fair"|"serious"|"critical";
    export interface PressureMetadata {
      available?: boolean;
    }
    export interface WorkAreaInsets {
      /**
       * Work area top inset in pixels. Default is 0;
       */
      top?: number;
      /**
       * Work area left inset in pixels. Default is 0;
       */
      left?: number;
      /**
       * Work area bottom inset in pixels. Default is 0;
       */
      bottom?: number;
      /**
       * Work area right inset in pixels. Default is 0;
       */
      right?: number;
    }
    export type ScreenId = string;
    /**
     * Screen information similar to the one returned by window.getScreenDetails() method,
see https://w3c.github.io/window-management/#screendetailed.
     */
    export interface ScreenInfo {
      /**
       * Offset of the left edge of the screen.
       */
      left: number;
      /**
       * Offset of the top edge of the screen.
       */
      top: number;
      /**
       * Width of the screen.
       */
      width: number;
      /**
       * Height of the screen.
       */
      height: number;
      /**
       * Offset of the left edge of the available screen area.
       */
      availLeft: number;
      /**
       * Offset of the top edge of the available screen area.
       */
      availTop: number;
      /**
       * Width of the available screen area.
       */
      availWidth: number;
      /**
       * Height of the available screen area.
       */
      availHeight: number;
      /**
       * Specifies the screen's device pixel ratio.
       */
      devicePixelRatio: number;
      /**
       * Specifies the screen's orientation.
       */
      orientation: ScreenOrientation;
      /**
       * Specifies the screen's color depth in bits.
       */
      colorDepth: number;
      /**
       * Indicates whether the device has multiple screens.
       */
      isExtended: boolean;
      /**
       * Indicates whether the screen is internal to the device or external, attached to the device.
       */
      isInternal: boolean;
      /**
       * Indicates whether the screen is set as the the operating system primary screen.
       */
      isPrimary: boolean;
      /**
       * Specifies the descriptive label for the screen.
       */
      label: string;
      /**
       * Specifies the unique identifier of the screen.
       */
      id: ScreenId;
    }
    /**
     * Enum of image types that can be disabled.
     */
    export type DisabledImageType = "avif"|"jxl"|"webp";
    
    /**
     * Notification sent after the virtual time budget for the current VirtualTimePolicy has run out.
     */
    export type virtualTimeBudgetExpiredPayload = void;
    /**
     * Fired when a page calls screen.orientation.lock() or screen.orientation.unlock()
while device emulation is enabled. This allows the DevTools frontend to update the
emulated device orientation accordingly.
     */
    export type screenOrientationLockChangedPayload = {
      /**
       * Whether the screen orientation is currently locked.
       */
      locked: boolean;
      /**
       * The orientation lock type requested by the page. Only set when locked is true.
       */
      orientation?: ScreenOrientation;
    }
    
    /**
     * Tells whether emulation is supported.
     */
    export type canEmulateParameters = {
    }
    export type canEmulateReturnValue = {
      /**
       * True if emulation is supported.
       */
      result: boolean;
    }
    /**
     * Clears the overridden device metrics.
     */
    export type clearDeviceMetricsOverrideParameters = {
    }
    export type clearDeviceMetricsOverrideReturnValue = {
    }
    /**
     * Clears the overridden Geolocation Position and Error.
     */
    export type clearGeolocationOverrideParameters = {
    }
    export type clearGeolocationOverrideReturnValue = {
    }
    /**
     * Requests that page scale factor is reset to initial values.
     */
    export type resetPageScaleFactorParameters = {
    }
    export type resetPageScaleFactorReturnValue = {
    }
    /**
     * Enables or disables simulating a focused and active page.
     */
    export type setFocusEmulationEnabledParameters = {
      /**
       * Whether to enable to disable focus emulation.
       */
      enabled: boolean;
    }
    export type setFocusEmulationEnabledReturnValue = {
    }
    /**
     * Automatically render all web contents using a dark theme.
     */
    export type setAutoDarkModeOverrideParameters = {
      /**
       * Whether to enable or disable automatic dark mode.
If not specified, any existing override will be cleared.
       */
      enabled?: boolean;
    }
    export type setAutoDarkModeOverrideReturnValue = {
    }
    /**
     * Enables CPU throttling to emulate slow CPUs.
     */
    export type setCPUThrottlingRateParameters = {
      /**
       * Throttling rate as a slowdown factor (1 is no throttle, 2 is 2x slowdown, etc).
       */
      rate: number;
    }
    export type setCPUThrottlingRateReturnValue = {
    }
    /**
     * Sets or clears an override of the default background color of the frame. This override is used
if the content does not specify one.
     */
    export type setDefaultBackgroundColorOverrideParameters = {
      /**
       * RGBA of the default background color. If not specified, any existing override will be
cleared.
       */
      color?: DOM.RGBA;
    }
    export type setDefaultBackgroundColorOverrideReturnValue = {
    }
    /**
     * Overrides the values for env(safe-area-inset-*) and env(safe-area-max-inset-*). Unset values will cause the
respective variables to be undefined, even if previously overridden.
     */
    export type setSafeAreaInsetsOverrideParameters = {
      insets: SafeAreaInsets;
    }
    export type setSafeAreaInsetsOverrideReturnValue = {
    }
    /**
     * Overrides the values of device screen dimensions (window.screen.width, window.screen.height,
window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media
query results).
     */
    export type setDeviceMetricsOverrideParameters = {
      /**
       * Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override.
       */
      width: number;
      /**
       * Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override.
       */
      height: number;
      /**
       * Overriding device scale factor value. 0 disables the override.
       */
      deviceScaleFactor: number;
      /**
       * Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text
autosizing and more.
       */
      mobile: boolean;
      /**
       * Scale to apply to resulting view image.
       */
      scale?: number;
      /**
       * Overriding screen width value in pixels (minimum 0, maximum 10000000).
       */
      screenWidth?: number;
      /**
       * Overriding screen height value in pixels (minimum 0, maximum 10000000).
       */
      screenHeight?: number;
      /**
       * Overriding view X position on screen in pixels (minimum 0, maximum 10000000).
       */
      positionX?: number;
      /**
       * Overriding view Y position on screen in pixels (minimum 0, maximum 10000000).
       */
      positionY?: number;
      /**
       * Do not set visible view size, rely upon explicit setVisibleSize call.
       */
      dontSetVisibleSize?: boolean;
      /**
       * Screen orientation override.
       */
      screenOrientation?: ScreenOrientation;
      /**
       * If set, the visible area of the page will be overridden to this viewport. This viewport
change is not observed by the page, e.g. viewport-relative elements do not change positions.
       */
      viewport?: Page.Viewport;
      /**
       * If set, the display feature of a multi-segment screen. If not set, multi-segment support
is turned-off.
Deprecated, use Emulation.setDisplayFeaturesOverride.
       */
      displayFeature?: DisplayFeature;
      /**
       * If set, the posture of a foldable device. If not set the posture is set
to continuous.
Deprecated, use Emulation.setDevicePostureOverride.
       */
      devicePosture?: DevicePosture;
      /**
       * Scrollbar type. Default: `default`.
       */
      scrollbarType?: "overlay"|"default";
      /**
       * If set to true, enables screen orientation lock emulation, which
intercepts screen.orientation.lock() calls from the page and reports
orientation changes via screenOrientationLockChanged events. This is
useful for emulating mobile device orientation lock behavior in
responsive design mode.
       */
      screenOrientationLockEmulation?: boolean;
    }
    export type setDeviceMetricsOverrideReturnValue = {
    }
    /**
     * Start reporting the given posture value to the Device Posture API.
This override can also be set in setDeviceMetricsOverride().
     */
    export type setDevicePostureOverrideParameters = {
      posture: DevicePosture;
    }
    export type setDevicePostureOverrideReturnValue = {
    }
    /**
     * Clears a device posture override set with either setDeviceMetricsOverride()
or setDevicePostureOverride() and starts using posture information from the
platform again.
Does nothing if no override is set.
     */
    export type clearDevicePostureOverrideParameters = {
    }
    export type clearDevicePostureOverrideReturnValue = {
    }
    /**
     * Start using the given display features to pupulate the Viewport Segments API.
This override can also be set in setDeviceMetricsOverride().
     */
    export type setDisplayFeaturesOverrideParameters = {
      features: DisplayFeature[];
    }
    export type setDisplayFeaturesOverrideReturnValue = {
    }
    /**
     * Clears the display features override set with either setDeviceMetricsOverride()
or setDisplayFeaturesOverride() and starts using display features from the
platform again.
Does nothing if no override is set.
     */
    export type clearDisplayFeaturesOverrideParameters = {
    }
    export type clearDisplayFeaturesOverrideReturnValue = {
    }
    export type setScrollbarsHiddenParameters = {
      /**
       * Whether scrollbars should be always hidden.
       */
      hidden: boolean;
    }
    export type setScrollbarsHiddenReturnValue = {
    }
    export type setDocumentCookieDisabledParameters = {
      /**
       * Whether document.coookie API should be disabled.
       */
      disabled: boolean;
    }
    export type setDocumentCookieDisabledReturnValue = {
    }
    export type setEmitTouchEventsForMouseParameters = {
      /**
       * Whether touch emulation based on mouse input should be enabled.
       */
      enabled: boolean;
      /**
       * Touch/gesture events configuration. Default: current platform.
       */
      configuration?: "mobile"|"desktop";
    }
    export type setEmitTouchEventsForMouseReturnValue = {
    }
    /**
     * Emulates the given media type or media feature for CSS media queries.
     */
    export type setEmulatedMediaParameters = {
      /**
       * Media type to emulate. Empty string disables the override.
       */
      media?: string;
      /**
       * Media features to emulate.
       */
      features?: MediaFeature[];
    }
    export type setEmulatedMediaReturnValue = {
    }
    /**
     * Emulates the given vision deficiency.
     */
    export type setEmulatedVisionDeficiencyParameters = {
      /**
       * Vision deficiency to emulate. Order: best-effort emulations come first, followed by any
physiologically accurate emulations for medically recognized color vision deficiencies.
       */
      type: "none"|"blurredVision"|"reducedContrast"|"achromatopsia"|"deuteranopia"|"protanopia"|"tritanopia";
    }
    export type setEmulatedVisionDeficiencyReturnValue = {
    }
    /**
     * Emulates the given OS text scale.
     */
    export type setEmulatedOSTextScaleParameters = {
      scale?: number;
    }
    export type setEmulatedOSTextScaleReturnValue = {
    }
    /**
     * Overrides the Geolocation Position or Error. Omitting latitude, longitude or
accuracy emulates position unavailable.
     */
    export type setGeolocationOverrideParameters = {
      /**
       * Mock latitude
       */
      latitude?: number;
      /**
       * Mock longitude
       */
      longitude?: number;
      /**
       * Mock accuracy
       */
      accuracy?: number;
      /**
       * Mock altitude
       */
      altitude?: number;
      /**
       * Mock altitudeAccuracy
       */
      altitudeAccuracy?: number;
      /**
       * Mock heading
       */
      heading?: number;
      /**
       * Mock speed
       */
      speed?: number;
    }
    export type setGeolocationOverrideReturnValue = {
    }
    export type getOverriddenSensorInformationParameters = {
      type: SensorType;
    }
    export type getOverriddenSensorInformationReturnValue = {
      requestedSamplingFrequency: number;
    }
    /**
     * Overrides a platform sensor of a given type. If |enabled| is true, calls to
Sensor.start() will use a virtual sensor as backend rather than fetching
data from a real hardware sensor. Otherwise, existing virtual
sensor-backend Sensor objects will fire an error event and new calls to
Sensor.start() will attempt to use a real sensor instead.
     */
    export type setSensorOverrideEnabledParameters = {
      enabled: boolean;
      type: SensorType;
      metadata?: SensorMetadata;
    }
    export type setSensorOverrideEnabledReturnValue = {
    }
    /**
     * Updates the sensor readings reported by a sensor type previously overridden
by setSensorOverrideEnabled.
     */
    export type setSensorOverrideReadingsParameters = {
      type: SensorType;
      reading: SensorReading;
    }
    export type setSensorOverrideReadingsReturnValue = {
    }
    /**
     * Overrides a pressure source of a given type, as used by the Compute
Pressure API, so that updates to PressureObserver.observe() are provided
via setPressureStateOverride instead of being retrieved from
platform-provided telemetry data.
     */
    export type setPressureSourceOverrideEnabledParameters = {
      enabled: boolean;
      source: PressureSource;
      metadata?: PressureMetadata;
    }
    export type setPressureSourceOverrideEnabledReturnValue = {
    }
    /**
     * TODO: OBSOLETE: To remove when setPressureDataOverride is merged.
Provides a given pressure state that will be processed and eventually be
delivered to PressureObserver users. |source| must have been previously
overridden by setPressureSourceOverrideEnabled.
     */
    export type setPressureStateOverrideParameters = {
      source: PressureSource;
      state: PressureState;
    }
    export type setPressureStateOverrideReturnValue = {
    }
    /**
     * Provides a given pressure data set that will be processed and eventually be
delivered to PressureObserver users. |source| must have been previously
overridden by setPressureSourceOverrideEnabled.
     */
    export type setPressureDataOverrideParameters = {
      source: PressureSource;
      state: PressureState;
      ownContributionEstimate?: number;
    }
    export type setPressureDataOverrideReturnValue = {
    }
    /**
     * Overrides the Idle state.
     */
    export type setIdleOverrideParameters = {
      /**
       * Mock isUserActive
       */
      isUserActive: boolean;
      /**
       * Mock isScreenUnlocked
       */
      isScreenUnlocked: boolean;
    }
    export type setIdleOverrideReturnValue = {
    }
    /**
     * Clears Idle state overrides.
     */
    export type clearIdleOverrideParameters = {
    }
    export type clearIdleOverrideReturnValue = {
    }
    /**
     * Overrides value returned by the javascript navigator object.
     */
    export type setNavigatorOverridesParameters = {
      /**
       * The platform navigator.platform should return.
       */
      platform: string;
    }
    export type setNavigatorOverridesReturnValue = {
    }
    /**
     * Sets a specified page scale factor.
     */
    export type setPageScaleFactorParameters = {
      /**
       * Page scale factor.
       */
      pageScaleFactor: number;
    }
    export type setPageScaleFactorReturnValue = {
    }
    /**
     * Switches script execution in the page.
     */
    export type setScriptExecutionDisabledParameters = {
      /**
       * Whether script execution should be disabled in the page.
       */
      value: boolean;
    }
    export type setScriptExecutionDisabledReturnValue = {
    }
    /**
     * Enables touch on platforms which do not support them.
     */
    export type setTouchEmulationEnabledParameters = {
      /**
       * Whether the touch event emulation should be enabled.
       */
      enabled: boolean;
      /**
       * Maximum touch points supported. Defaults to one.
       */
      maxTouchPoints?: number;
    }
    export type setTouchEmulationEnabledReturnValue = {
    }
    /**
     * Turns on virtual time for all frames (replacing real-time with a synthetic time source) and sets
the current virtual time policy.  Note this supersedes any previous time budget.
     */
    export type setVirtualTimePolicyParameters = {
      policy: VirtualTimePolicy;
      /**
       * If set, after this many virtual milliseconds have elapsed virtual time will be paused and a
virtualTimeBudgetExpired event is sent.
       */
      budget?: number;
      /**
       * If set this specifies the maximum number of tasks that can be run before virtual is forced
forwards to prevent deadlock.
       */
      maxVirtualTimeTaskStarvationCount?: number;
      /**
       * If set, base::Time::Now will be overridden to initially return this value.
       */
      initialVirtualTime?: Network.TimeSinceEpoch;
    }
    export type setVirtualTimePolicyReturnValue = {
      /**
       * Absolute timestamp at which virtual time was first enabled (up time in milliseconds).
       */
      virtualTimeTicksBase: number;
    }
    /**
     * Overrides default host system locale with the specified one.
     */
    export type setLocaleOverrideParameters = {
      /**
       * ICU style C locale (e.g. "en_US"). If not specified or empty, disables the override and
restores default host system locale.
       */
      locale?: string;
    }
    export type setLocaleOverrideReturnValue = {
    }
    /**
     * Overrides default host system timezone with the specified one.
     */
    export type setTimezoneOverrideParameters = {
      /**
       * The timezone identifier. List of supported timezones:
https://source.chromium.org/chromium/chromium/deps/icu.git/+/faee8bc70570192d82d2978a71e2a615788597d1:source/data/misc/metaZones.txt
If empty, disables the override and restores default host system timezone.
       */
      timezoneId: string;
    }
    export type setTimezoneOverrideReturnValue = {
    }
    /**
     * Resizes the frame/viewport of the page. Note that this does not affect the frame's container
(e.g. browser window). Can be used to produce screenshots of the specified size. Not supported
on Android.
     */
    export type setVisibleSizeParameters = {
      /**
       * Frame width (DIP).
       */
      width: number;
      /**
       * Frame height (DIP).
       */
      height: number;
    }
    export type setVisibleSizeReturnValue = {
    }
    export type setDisabledImageTypesParameters = {
      /**
       * Image types to disable.
       */
      imageTypes: DisabledImageType[];
    }
    export type setDisabledImageTypesReturnValue = {
    }
    /**
     * Override the value of navigator.connection.saveData
     */
    export type setDataSaverOverrideParameters = {
      /**
       * Override value. Omitting the parameter disables the override.
       */
      dataSaverEnabled?: boolean;
    }
    export type setDataSaverOverrideReturnValue = {
    }
    export type setHardwareConcurrencyOverrideParameters = {
      /**
       * Hardware concurrency to report
       */
      hardwareConcurrency: number;
    }
    export type setHardwareConcurrencyOverrideReturnValue = {
    }
    /**
     * Allows overriding user agent with the given string.
`userAgentMetadata` must be set for Client Hint headers to be sent.
     */
    export type setUserAgentOverrideParameters = {
      /**
       * User agent to use.
       */
      userAgent: string;
      /**
       * Browser language to emulate.
       */
      acceptLanguage?: string;
      /**
       * The platform navigator.platform should return.
       */
      platform?: string;
      /**
       * To be sent in Sec-CH-UA-* headers and returned in navigator.userAgentData
       */
      userAgentMetadata?: UserAgentMetadata;
    }
    export type setUserAgentOverrideReturnValue = {
    }
    /**
     * Allows overriding the automation flag.
     */
    export type setAutomationOverrideParameters = {
      /**
       * Whether the override should be enabled.
       */
      enabled: boolean;
    }
    export type setAutomationOverrideReturnValue = {
    }
    /**
     * Allows overriding the difference between the small and large viewport sizes, which determine the
value of the `svh` and `lvh` unit, respectively. Only supported for top-level frames.
     */
    export type setSmallViewportHeightDifferenceOverrideParameters = {
      /**
       * This will cause an element of size 100svh to be `difference` pixels smaller than an element
of size 100lvh.
       */
      difference: number;
    }
    export type setSmallViewportHeightDifferenceOverrideReturnValue = {
    }
    /**
     * Returns device's screen configuration. In headful mode, the physical screens configuration is returned,
whereas in headless mode, a virtual headless screen configuration is provided instead.
     */
    export type getScreenInfosParameters = {
    }
    export type getScreenInfosReturnValue = {
      screenInfos: ScreenInfo[];
    }
    /**
     * Add a new screen to the device. Only supported in headless mode.
     */
    export type addScreenParameters = {
      /**
       * Offset of the left edge of the screen in pixels.
       */
      left: number;
      /**
       * Offset of the top edge of the screen in pixels.
       */
      top: number;
      /**
       * The width of the screen in pixels.
       */
      width: number;
      /**
       * The height of the screen in pixels.
       */
      height: number;
      /**
       * Specifies the screen's work area. Default is entire screen.
       */
      workAreaInsets?: WorkAreaInsets;
      /**
       * Specifies the screen's device pixel ratio. Default is 1.
       */
      devicePixelRatio?: number;
      /**
       * Specifies the screen's rotation angle. Available values are 0, 90, 180 and 270. Default is 0.
       */
      rotation?: number;
      /**
       * Specifies the screen's color depth in bits. Default is 24.
       */
      colorDepth?: number;
      /**
       * Specifies the descriptive label for the screen. Default is none.
       */
      label?: string;
      /**
       * Indicates whether the screen is internal to the device or external, attached to the device. Default is false.
       */
      isInternal?: boolean;
    }
    export type addScreenReturnValue = {
      screenInfo: ScreenInfo;
    }
    /**
     * Updates specified screen parameters. Only supported in headless mode.
     */
    export type updateScreenParameters = {
      /**
       * Target screen identifier.
       */
      screenId: ScreenId;
      /**
       * Offset of the left edge of the screen in pixels.
       */
      left?: number;
      /**
       * Offset of the top edge of the screen in pixels.
       */
      top?: number;
      /**
       * The width of the screen in pixels.
       */
      width?: number;
      /**
       * The height of the screen in pixels.
       */
      height?: number;
      /**
       * Specifies the screen's work area.
       */
      workAreaInsets?: WorkAreaInsets;
      /**
       * Specifies the screen's device pixel ratio.
       */
      devicePixelRatio?: number;
      /**
       * Specifies the screen's rotation angle. Available values are 0, 90, 180 and 270.
       */
      rotation?: number;
      /**
       * Specifies the screen's color depth in bits.
       */
      colorDepth?: number;
      /**
       * Specifies the descriptive label for the screen.
       */
      label?: string;
      /**
       * Indicates whether the screen is internal to the device or external, attached to the device. Default is false.
       */
      isInternal?: boolean;
    }
    export type updateScreenReturnValue = {
      screenInfo: ScreenInfo;
    }
    /**
     * Remove screen from the device. Only supported in headless mode.
     */
    export type removeScreenParameters = {
      screenId: ScreenId;
    }
    export type removeScreenReturnValue = {
    }
    /**
     * Set primary screen. Only supported in headless mode.
Note that this changes the coordinate system origin to the top-left
of the new primary screen, updating the bounds and work areas
of all existing screens accordingly.
     */
    export type setPrimaryScreenParameters = {
      screenId: ScreenId;
    }
    export type setPrimaryScreenReturnValue = {
    }
  }
  
  /**
   * EventBreakpoints permits setting JavaScript breakpoints on operations and events
occurring in native code invoked from JavaScript. Once breakpoint is hit, it is
reported through Debugger domain, similarly to regular breakpoints being hit.
   */
  export namespace EventBreakpoints {
    
    
    /**
     * Sets breakpoint on particular native event.
     */
    export type setInstrumentationBreakpointParameters = {
      /**
       * Instrumentation name to stop on.
       */
      eventName: string;
    }
    export type setInstrumentationBreakpointReturnValue = {
    }
    /**
     * Removes breakpoint on particular native event.
     */
    export type removeInstrumentationBreakpointParameters = {
      /**
       * Instrumentation name to stop on.
       */
      eventName: string;
    }
    export type removeInstrumentationBreakpointReturnValue = {
    }
    /**
     * Removes all breakpoints
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
  }
  
  /**
   * Defines commands and events for browser extensions.
   */
  export namespace Extensions {
    /**
     * Storage areas.
     */
    export type StorageArea = "session"|"local"|"sync"|"managed";
    /**
     * Detailed information about an extension.
     */
    export interface ExtensionInfo {
      /**
       * Extension id.
       */
      id: string;
      /**
       * Extension name.
       */
      name: string;
      /**
       * Extension version.
       */
      version: string;
      /**
       * The path from which the extension was loaded.
       */
      path: string;
      /**
       * Extension enabled status.
       */
      enabled: boolean;
    }
    
    
    /**
     * Runs an extension default action.
Available if the client is connected using the --remote-debugging-pipe
flag and the --enable-unsafe-extension-debugging flag is set.
     */
    export type triggerActionParameters = {
      /**
       * Extension id.
       */
      id: string;
      /**
       * A tab target ID to trigger the default extension action on.
       */
      targetId: string;
    }
    export type triggerActionReturnValue = {
    }
    /**
     * Installs an unpacked extension from the filesystem similar to
--load-extension CLI flags. Returns extension ID once the extension
has been installed. Available if the client is connected using the
--remote-debugging-pipe flag and the --enable-unsafe-extension-debugging
flag is set.
     */
    export type loadUnpackedParameters = {
      /**
       * Absolute file path.
       */
      path: string;
      /**
       * Enable the extension in incognito
       */
      enableInIncognito?: boolean;
    }
    export type loadUnpackedReturnValue = {
      /**
       * Extension id.
       */
      id: string;
    }
    /**
     * Gets a list of all unpacked extensions.
Available if the client is connected using the --remote-debugging-pipe flag
and the --enable-unsafe-extension-debugging flag is set.
     */
    export type getExtensionsParameters = {
    }
    export type getExtensionsReturnValue = {
      extensions: ExtensionInfo[];
    }
    /**
     * Uninstalls an unpacked extension (others not supported) from the profile.
Available if the client is connected using the --remote-debugging-pipe flag
and the --enable-unsafe-extension-debugging.
     */
    export type uninstallParameters = {
      /**
       * Extension id.
       */
      id: string;
    }
    export type uninstallReturnValue = {
    }
    /**
     * Gets data from extension storage in the given `storageArea`. If `keys` is
specified, these are used to filter the result.
     */
    export type getStorageItemsParameters = {
      /**
       * ID of extension.
       */
      id: string;
      /**
       * StorageArea to retrieve data from.
       */
      storageArea: StorageArea;
      /**
       * Keys to retrieve.
       */
      keys?: string[];
    }
    export type getStorageItemsReturnValue = {
      data: { [key: string]: string };
    }
    /**
     * Removes `keys` from extension storage in the given `storageArea`.
     */
    export type removeStorageItemsParameters = {
      /**
       * ID of extension.
       */
      id: string;
      /**
       * StorageArea to remove data from.
       */
      storageArea: StorageArea;
      /**
       * Keys to remove.
       */
      keys: string[];
    }
    export type removeStorageItemsReturnValue = {
    }
    /**
     * Clears extension storage in the given `storageArea`.
     */
    export type clearStorageItemsParameters = {
      /**
       * ID of extension.
       */
      id: string;
      /**
       * StorageArea to remove data from.
       */
      storageArea: StorageArea;
    }
    export type clearStorageItemsReturnValue = {
    }
    /**
     * Sets `values` in extension storage in the given `storageArea`. The provided `values`
will be merged with existing values in the storage area.
     */
    export type setStorageItemsParameters = {
      /**
       * ID of extension.
       */
      id: string;
      /**
       * StorageArea to set data in.
       */
      storageArea: StorageArea;
      /**
       * Values to set.
       */
      values: { [key: string]: string };
    }
    export type setStorageItemsReturnValue = {
    }
  }
  
  /**
   * This domain allows interacting with the FedCM dialog.
   */
  export namespace FedCm {
    /**
     * Whether this is a sign-up or sign-in action for this account, i.e.
whether this account has ever been used to sign in to this RP before.
     */
    export type LoginState = "SignIn"|"SignUp";
    /**
     * The types of FedCM dialogs.
     */
    export type DialogType = "AccountChooser"|"AutoReauthn"|"ConfirmIdpLogin"|"Error";
    /**
     * The buttons on the FedCM dialog.
     */
    export type DialogButton = "ConfirmIdpLoginContinue"|"ErrorGotIt"|"ErrorMoreDetails";
    /**
     * The URLs that each account has
     */
    export type AccountUrlType = "TermsOfService"|"PrivacyPolicy";
    /**
     * Corresponds to IdentityRequestAccount
     */
    export interface Account {
      accountId: string;
      email: string;
      name: string;
      givenName: string;
      pictureUrl: string;
      idpConfigUrl: string;
      idpLoginUrl: string;
      loginState: LoginState;
      /**
       * These two are only set if the loginState is signUp
       */
      termsOfServiceUrl?: string;
      privacyPolicyUrl?: string;
    }
    
    export type dialogShownPayload = {
      dialogId: string;
      dialogType: DialogType;
      accounts: Account[];
      /**
       * These exist primarily so that the caller can verify the
RP context was used appropriately.
       */
      title: string;
      subtitle?: string;
    }
    /**
     * Triggered when a dialog is closed, either by user action, JS abort,
or a command below.
     */
    export type dialogClosedPayload = {
      dialogId: string;
    }
    
    export type enableParameters = {
      /**
       * Allows callers to disable the promise rejection delay that would
normally happen, if this is unimportant to what's being tested.
(step 4 of https://fedidcg.github.io/FedCM/#browser-api-rp-sign-in)
       */
      disableRejectionDelay?: boolean;
    }
    export type enableReturnValue = {
    }
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    export type selectAccountParameters = {
      dialogId: string;
      accountIndex: number;
    }
    export type selectAccountReturnValue = {
    }
    export type clickDialogButtonParameters = {
      dialogId: string;
      dialogButton: DialogButton;
    }
    export type clickDialogButtonReturnValue = {
    }
    export type openUrlParameters = {
      dialogId: string;
      accountIndex: number;
      accountUrlType: AccountUrlType;
    }
    export type openUrlReturnValue = {
    }
    export type dismissDialogParameters = {
      dialogId: string;
      triggerCooldown?: boolean;
    }
    export type dismissDialogReturnValue = {
    }
    /**
     * Resets the cooldown time, if any, to allow the next FedCM call to show
a dialog even if one was recently dismissed by the user.
     */
    export type resetCooldownParameters = {
    }
    export type resetCooldownReturnValue = {
    }
  }
  
  /**
   * A domain for letting clients substitute browser's network layer with client code.
   */
  export namespace Fetch {
    /**
     * Unique request identifier.
Note that this does not identify individual HTTP requests that are part of
a network request.
     */
    export type RequestId = string;
    /**
     * Stages of the request to handle. Request will intercept before the request is
sent. Response will intercept after the response is received (but before response
body is received).
     */
    export type RequestStage = "Request"|"Response";
    export interface RequestPattern {
      /**
       * Wildcards (`'*'` -> zero or more, `'?'` -> exactly one) are allowed. Escape character is
backslash. Omitting is equivalent to `"*"`.
       */
      urlPattern?: string;
      /**
       * If set, only requests for matching resource types will be intercepted.
       */
      resourceType?: Network.ResourceType;
      /**
       * Stage at which to begin intercepting requests. Default is Request.
       */
      requestStage?: RequestStage;
    }
    /**
     * Response HTTP header entry
     */
    export interface HeaderEntry {
      name: string;
      value: string;
    }
    /**
     * Authorization challenge for HTTP status code 401 or 407.
     */
    export interface AuthChallenge {
      /**
       * Source of the authentication challenge.
       */
      source?: "Server"|"Proxy";
      /**
       * Origin of the challenger.
       */
      origin: string;
      /**
       * The authentication scheme used, such as basic or digest
       */
      scheme: string;
      /**
       * The realm of the challenge. May be empty.
       */
      realm: string;
    }
    /**
     * Response to an AuthChallenge.
     */
    export interface AuthChallengeResponse {
      /**
       * The decision on what to do in response to the authorization challenge.  Default means
deferring to the default behavior of the net stack, which will likely either the Cancel
authentication or display a popup dialog box.
       */
      response: "Default"|"CancelAuth"|"ProvideCredentials";
      /**
       * The username to provide, possibly empty. Should only be set if response is
ProvideCredentials.
       */
      username?: string;
      /**
       * The password to provide, possibly empty. Should only be set if response is
ProvideCredentials.
       */
      password?: string;
    }
    
    /**
     * Issued when the domain is enabled and the request URL matches the
specified filter. The request is paused until the client responds
with one of continueRequest, failRequest or fulfillRequest.
The stage of the request can be determined by presence of responseErrorReason
and responseStatusCode -- the request is at the response stage if either
of these fields is present and in the request stage otherwise.
Redirect responses and subsequent requests are reported similarly to regular
responses and requests. Redirect responses may be distinguished by the value
of `responseStatusCode` (which is one of 301, 302, 303, 307, 308) along with
presence of the `location` header. Requests resulting from a redirect will
have `redirectedRequestId` field set.
     */
    export type requestPausedPayload = {
      /**
       * Each request the page makes will have a unique id.
       */
      requestId: RequestId;
      /**
       * The details of the request.
       */
      request: Network.Request;
      /**
       * The id of the frame that initiated the request.
       */
      frameId: Page.FrameId;
      /**
       * How the requested resource will be used.
       */
      resourceType: Network.ResourceType;
      /**
       * Response error if intercepted at response stage.
       */
      responseErrorReason?: Network.ErrorReason;
      /**
       * Response code if intercepted at response stage.
       */
      responseStatusCode?: number;
      /**
       * Response status text if intercepted at response stage.
       */
      responseStatusText?: string;
      /**
       * Response headers if intercepted at the response stage.
       */
      responseHeaders?: HeaderEntry[];
      /**
       * If the intercepted request had a corresponding Network.requestWillBeSent event fired for it,
then this networkId will be the same as the requestId present in the requestWillBeSent event.
       */
      networkId?: Network.RequestId;
      /**
       * If the request is due to a redirect response from the server, the id of the request that
has caused the redirect.
       */
      redirectedRequestId?: RequestId;
    }
    /**
     * Issued when the domain is enabled with handleAuthRequests set to true.
The request is paused until client responds with continueWithAuth.
     */
    export type authRequiredPayload = {
      /**
       * Each request the page makes will have a unique id.
       */
      requestId: RequestId;
      /**
       * The details of the request.
       */
      request: Network.Request;
      /**
       * The id of the frame that initiated the request.
       */
      frameId: Page.FrameId;
      /**
       * How the requested resource will be used.
       */
      resourceType: Network.ResourceType;
      /**
       * Details of the Authorization Challenge encountered.
If this is set, client should respond with continueRequest that
contains AuthChallengeResponse.
       */
      authChallenge: AuthChallenge;
    }
    
    /**
     * Disables the fetch domain.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables issuing of requestPaused events. A request will be paused until client
calls one of failRequest, fulfillRequest or continueRequest/continueWithAuth.
     */
    export type enableParameters = {
      /**
       * If specified, only requests matching any of these patterns will produce
fetchRequested event and will be paused until clients response. If not set,
all requests will be affected.
       */
      patterns?: RequestPattern[];
      /**
       * If true, authRequired events will be issued and requests will be paused
expecting a call to continueWithAuth.
       */
      handleAuthRequests?: boolean;
    }
    export type enableReturnValue = {
    }
    /**
     * Causes the request to fail with specified reason.
     */
    export type failRequestParameters = {
      /**
       * An id the client received in requestPaused event.
       */
      requestId: RequestId;
      /**
       * Causes the request to fail with the given reason.
       */
      errorReason: Network.ErrorReason;
    }
    export type failRequestReturnValue = {
    }
    /**
     * Provides response to the request.
     */
    export type fulfillRequestParameters = {
      /**
       * An id the client received in requestPaused event.
       */
      requestId: RequestId;
      /**
       * An HTTP response code.
       */
      responseCode: number;
      /**
       * Response headers.
       */
      responseHeaders?: HeaderEntry[];
      /**
       * Alternative way of specifying response headers as a \0-separated
series of name: value pairs. Prefer the above method unless you
need to represent some non-UTF8 values that can't be transmitted
over the protocol as text.
       */
      binaryResponseHeaders?: binary;
      /**
       * A response body. If absent, original response body will be used if
the request is intercepted at the response stage and empty body
will be used if the request is intercepted at the request stage.
       */
      body?: binary;
      /**
       * A textual representation of responseCode.
If absent, a standard phrase matching responseCode is used.
       */
      responsePhrase?: string;
    }
    export type fulfillRequestReturnValue = {
    }
    /**
     * Continues the request, optionally modifying some of its parameters.
     */
    export type continueRequestParameters = {
      /**
       * An id the client received in requestPaused event.
       */
      requestId: RequestId;
      /**
       * If set, the request url will be modified in a way that's not observable by page.
       */
      url?: string;
      /**
       * If set, the request method is overridden.
       */
      method?: string;
      /**
       * If set, overrides the post data in the request.
       */
      postData?: binary;
      /**
       * If set, overrides the request headers. Note that the overrides do not
extend to subsequent redirect hops, if a redirect happens. Another override
may be applied to a different request produced by a redirect.
       */
      headers?: HeaderEntry[];
      /**
       * If set, overrides response interception behavior for this request.
       */
      interceptResponse?: boolean;
    }
    export type continueRequestReturnValue = {
    }
    /**
     * Continues a request supplying authChallengeResponse following authRequired event.
     */
    export type continueWithAuthParameters = {
      /**
       * An id the client received in authRequired event.
       */
      requestId: RequestId;
      /**
       * Response to  with an authChallenge.
       */
      authChallengeResponse: AuthChallengeResponse;
    }
    export type continueWithAuthReturnValue = {
    }
    /**
     * Continues loading of the paused response, optionally modifying the
response headers. If either responseCode or headers are modified, all of them
must be present.
     */
    export type continueResponseParameters = {
      /**
       * An id the client received in requestPaused event.
       */
      requestId: RequestId;
      /**
       * An HTTP response code. If absent, original response code will be used.
       */
      responseCode?: number;
      /**
       * A textual representation of responseCode.
If absent, a standard phrase matching responseCode is used.
       */
      responsePhrase?: string;
      /**
       * Response headers. If absent, original response headers will be used.
       */
      responseHeaders?: HeaderEntry[];
      /**
       * Alternative way of specifying response headers as a \0-separated
series of name: value pairs. Prefer the above method unless you
need to represent some non-UTF8 values that can't be transmitted
over the protocol as text.
       */
      binaryResponseHeaders?: binary;
    }
    export type continueResponseReturnValue = {
    }
    /**
     * Causes the body of the response to be received from the server and
returned as a single string. May only be issued for a request that
is paused in the Response stage and is mutually exclusive with
takeResponseBodyForInterceptionAsStream. Calling other methods that
affect the request or disabling fetch domain before body is received
results in an undefined behavior.
Note that the response body is not available for redirects. Requests
paused in the _redirect received_ state may be differentiated by
`responseCode` and presence of `location` response header, see
comments to `requestPaused` for details.
     */
    export type getResponseBodyParameters = {
      /**
       * Identifier for the intercepted request to get body for.
       */
      requestId: RequestId;
    }
    export type getResponseBodyReturnValue = {
      /**
       * Response body.
       */
      body: string;
      /**
       * True, if content was sent as base64.
       */
      base64Encoded: boolean;
    }
    /**
     * Returns a handle to the stream representing the response body.
The request must be paused in the HeadersReceived stage.
Note that after this command the request can't be continued
as is -- client either needs to cancel it or to provide the
response body.
The stream only supports sequential read, IO.read will fail if the position
is specified.
This method is mutually exclusive with getResponseBody.
Calling other methods that affect the request or disabling fetch
domain before body is received results in an undefined behavior.
     */
    export type takeResponseBodyAsStreamParameters = {
      requestId: RequestId;
    }
    export type takeResponseBodyAsStreamReturnValue = {
      stream: IO.StreamHandle;
    }
  }
  
  export namespace FileSystem {
    export interface File {
      name: string;
      /**
       * Timestamp
       */
      lastModified: Network.TimeSinceEpoch;
      /**
       * Size in bytes
       */
      size: number;
      type: string;
    }
    export interface Directory {
      name: string;
      nestedDirectories: string[];
      /**
       * Files that are directly nested under this directory.
       */
      nestedFiles: File[];
    }
    export interface BucketFileSystemLocator {
      /**
       * Storage key
       */
      storageKey: Storage.SerializedStorageKey;
      /**
       * Bucket name. Not passing a `bucketName` will retrieve the default Bucket. (https://developer.mozilla.org/en-US/docs/Web/API/Storage_API#storage_buckets)
       */
      bucketName?: string;
      /**
       * Path to the directory using each path component as an array item.
       */
      pathComponents: string[];
    }
    
    
    export type getDirectoryParameters = {
      bucketFileSystemLocator: BucketFileSystemLocator;
    }
    export type getDirectoryReturnValue = {
      /**
       * Returns the directory object at the path.
       */
      directory: Directory;
    }
  }
  
  /**
   * This domain provides experimental commands only supported in headless mode.
   */
  export namespace HeadlessExperimental {
    /**
     * Encoding options for a screenshot.
     */
    export interface ScreenshotParams {
      /**
       * Image compression format (defaults to png).
       */
      format?: "jpeg"|"png"|"webp";
      /**
       * Compression quality from range [0..100] (jpeg and webp only).
       */
      quality?: number;
      /**
       * Optimize image encoding for speed, not for resulting size (defaults to false)
       */
      optimizeForSpeed?: boolean;
    }
    
    
    /**
     * Sends a BeginFrame to the target and returns when the frame was completed. Optionally captures a
screenshot from the resulting frame. Requires that the target was created with enabled
BeginFrameControl. Designed for use with --run-all-compositor-stages-before-draw, see also
https://goo.gle/chrome-headless-rendering for more background.
     */
    export type beginFrameParameters = {
      /**
       * Timestamp of this BeginFrame in Renderer TimeTicks (milliseconds of uptime). If not set,
the current time will be used.
       */
      frameTimeTicks?: number;
      /**
       * The interval between BeginFrames that is reported to the compositor, in milliseconds.
Defaults to a 60 frames/second interval, i.e. about 16.666 milliseconds.
       */
      interval?: number;
      /**
       * Whether updates should not be committed and drawn onto the display. False by default. If
true, only side effects of the BeginFrame will be run, such as layout and animations, but
any visual updates may not be visible on the display or in screenshots.
       */
      noDisplayUpdates?: boolean;
      /**
       * If set, a screenshot of the frame will be captured and returned in the response. Otherwise,
no screenshot will be captured. Note that capturing a screenshot can fail, for example,
during renderer initialization. In such a case, no screenshot data will be returned.
       */
      screenshot?: ScreenshotParams;
    }
    export type beginFrameReturnValue = {
      /**
       * Whether the BeginFrame resulted in damage and, thus, a new frame was committed to the
display. Reported for diagnostic uses, may be removed in the future.
       */
      hasDamage: boolean;
      /**
       * Base64-encoded image data of the screenshot, if one was requested and successfully taken.
       */
      screenshotData?: binary;
    }
    /**
     * Disables headless events for the target.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables headless events for the target.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
  }
  
  /**
   * Input/Output operations for streams produced by DevTools.
   */
  export namespace IO {
    /**
     * This is either obtained from another method or specified as `blob:<uuid>` where
`<uuid>` is an UUID of a Blob.
     */
    export type StreamHandle = string;
    
    
    /**
     * Close the stream, discard any temporary backing storage.
     */
    export type closeParameters = {
      /**
       * Handle of the stream to close.
       */
      handle: StreamHandle;
    }
    export type closeReturnValue = {
    }
    /**
     * Read a chunk of the stream
     */
    export type readParameters = {
      /**
       * Handle of the stream to read.
       */
      handle: StreamHandle;
      /**
       * Seek to the specified offset before reading (if not specified, proceed with offset
following the last read). Some types of streams may only support sequential reads.
       */
      offset?: number;
      /**
       * Maximum number of bytes to read (left upon the agent discretion if not specified).
       */
      size?: number;
    }
    export type readReturnValue = {
      /**
       * Set if the data is base64-encoded
       */
      base64Encoded?: boolean;
      /**
       * Data that were read.
       */
      data: string;
      /**
       * Set if the end-of-file condition occurred while reading.
       */
      eof: boolean;
    }
    /**
     * Return UUID of Blob object specified by a remote object id.
     */
    export type resolveBlobParameters = {
      /**
       * Object id of a Blob object wrapper.
       */
      objectId: Runtime.RemoteObjectId;
    }
    export type resolveBlobReturnValue = {
      /**
       * UUID of the specified Blob.
       */
      uuid: string;
    }
  }
  
  export namespace IndexedDB {
    /**
     * Database with an array of object stores.
     */
    export interface DatabaseWithObjectStores {
      /**
       * Database name.
       */
      name: string;
      /**
       * Database version (type is not 'integer', as the standard
requires the version number to be 'unsigned long long')
       */
      version: number;
      /**
       * Object stores in this database.
       */
      objectStores: ObjectStore[];
    }
    /**
     * Object store.
     */
    export interface ObjectStore {
      /**
       * Object store name.
       */
      name: string;
      /**
       * Object store key path.
       */
      keyPath: KeyPath;
      /**
       * If true, object store has auto increment flag set.
       */
      autoIncrement: boolean;
      /**
       * Indexes in this object store.
       */
      indexes: ObjectStoreIndex[];
    }
    /**
     * Object store index.
     */
    export interface ObjectStoreIndex {
      /**
       * Index name.
       */
      name: string;
      /**
       * Index key path.
       */
      keyPath: KeyPath;
      /**
       * If true, index is unique.
       */
      unique: boolean;
      /**
       * If true, index allows multiple entries for a key.
       */
      multiEntry: boolean;
    }
    /**
     * Key.
     */
    export interface Key {
      /**
       * Key type.
       */
      type: "number"|"string"|"date"|"array";
      /**
       * Number value.
       */
      number?: number;
      /**
       * String value.
       */
      string?: string;
      /**
       * Date value.
       */
      date?: number;
      /**
       * Array value.
       */
      array?: Key[];
    }
    /**
     * Key range.
     */
    export interface KeyRange {
      /**
       * Lower bound.
       */
      lower?: Key;
      /**
       * Upper bound.
       */
      upper?: Key;
      /**
       * If true lower bound is open.
       */
      lowerOpen: boolean;
      /**
       * If true upper bound is open.
       */
      upperOpen: boolean;
    }
    /**
     * Data entry.
     */
    export interface DataEntry {
      /**
       * Key object.
       */
      key: Runtime.RemoteObject;
      /**
       * Primary key object.
       */
      primaryKey: Runtime.RemoteObject;
      /**
       * Value object.
       */
      value: Runtime.RemoteObject;
    }
    /**
     * Key path.
     */
    export interface KeyPath {
      /**
       * Key path type.
       */
      type: "null"|"string"|"array";
      /**
       * String value.
       */
      string?: string;
      /**
       * Array value.
       */
      array?: string[];
    }
    
    
    /**
     * Clears all entries from an object store.
     */
    export type clearObjectStoreParameters = {
      /**
       * At least and at most one of securityOrigin, storageKey, or storageBucket must be specified.
Security origin.
       */
      securityOrigin?: string;
      /**
       * Storage key.
       */
      storageKey?: string;
      /**
       * Storage bucket. If not specified, it uses the default bucket.
       */
      storageBucket?: Storage.StorageBucket;
      /**
       * Database name.
       */
      databaseName: string;
      /**
       * Object store name.
       */
      objectStoreName: string;
    }
    export type clearObjectStoreReturnValue = {
    }
    /**
     * Deletes a database.
     */
    export type deleteDatabaseParameters = {
      /**
       * At least and at most one of securityOrigin, storageKey, or storageBucket must be specified.
Security origin.
       */
      securityOrigin?: string;
      /**
       * Storage key.
       */
      storageKey?: string;
      /**
       * Storage bucket. If not specified, it uses the default bucket.
       */
      storageBucket?: Storage.StorageBucket;
      /**
       * Database name.
       */
      databaseName: string;
    }
    export type deleteDatabaseReturnValue = {
    }
    /**
     * Delete a range of entries from an object store
     */
    export type deleteObjectStoreEntriesParameters = {
      /**
       * At least and at most one of securityOrigin, storageKey, or storageBucket must be specified.
Security origin.
       */
      securityOrigin?: string;
      /**
       * Storage key.
       */
      storageKey?: string;
      /**
       * Storage bucket. If not specified, it uses the default bucket.
       */
      storageBucket?: Storage.StorageBucket;
      databaseName: string;
      objectStoreName: string;
      /**
       * Range of entry keys to delete
       */
      keyRange: KeyRange;
    }
    export type deleteObjectStoreEntriesReturnValue = {
    }
    /**
     * Disables events from backend.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables events from backend.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Requests data from object store or index.
     */
    export type requestDataParameters = {
      /**
       * At least and at most one of securityOrigin, storageKey, or storageBucket must be specified.
Security origin.
       */
      securityOrigin?: string;
      /**
       * Storage key.
       */
      storageKey?: string;
      /**
       * Storage bucket. If not specified, it uses the default bucket.
       */
      storageBucket?: Storage.StorageBucket;
      /**
       * Database name.
       */
      databaseName: string;
      /**
       * Object store name.
       */
      objectStoreName: string;
      /**
       * Index name. If not specified, it performs an object store data request.
       */
      indexName?: string;
      /**
       * Number of records to skip.
       */
      skipCount: number;
      /**
       * Number of records to fetch.
       */
      pageSize: number;
      /**
       * Key range.
       */
      keyRange?: KeyRange;
    }
    export type requestDataReturnValue = {
      /**
       * Array of object store data entries.
       */
      objectStoreDataEntries: DataEntry[];
      /**
       * If true, there are more entries to fetch in the given range.
       */
      hasMore: boolean;
    }
    /**
     * Gets metadata of an object store.
     */
    export type getMetadataParameters = {
      /**
       * At least and at most one of securityOrigin, storageKey, or storageBucket must be specified.
Security origin.
       */
      securityOrigin?: string;
      /**
       * Storage key.
       */
      storageKey?: string;
      /**
       * Storage bucket. If not specified, it uses the default bucket.
       */
      storageBucket?: Storage.StorageBucket;
      /**
       * Database name.
       */
      databaseName: string;
      /**
       * Object store name.
       */
      objectStoreName: string;
    }
    export type getMetadataReturnValue = {
      /**
       * the entries count
       */
      entriesCount: number;
      /**
       * the current value of key generator, to become the next inserted
key into the object store. Valid if objectStore.autoIncrement
is true.
       */
      keyGeneratorValue: number;
    }
    /**
     * Requests database with given name in given frame.
     */
    export type requestDatabaseParameters = {
      /**
       * At least and at most one of securityOrigin, storageKey, or storageBucket must be specified.
Security origin.
       */
      securityOrigin?: string;
      /**
       * Storage key.
       */
      storageKey?: string;
      /**
       * Storage bucket. If not specified, it uses the default bucket.
       */
      storageBucket?: Storage.StorageBucket;
      /**
       * Database name.
       */
      databaseName: string;
    }
    export type requestDatabaseReturnValue = {
      /**
       * Database with an array of object stores.
       */
      databaseWithObjectStores: DatabaseWithObjectStores;
    }
    /**
     * Requests database names for given security origin.
     */
    export type requestDatabaseNamesParameters = {
      /**
       * At least and at most one of securityOrigin, storageKey, or storageBucket must be specified.
Security origin.
       */
      securityOrigin?: string;
      /**
       * Storage key.
       */
      storageKey?: string;
      /**
       * Storage bucket. If not specified, it uses the default bucket.
       */
      storageBucket?: Storage.StorageBucket;
    }
    export type requestDatabaseNamesReturnValue = {
      /**
       * Database names for origin.
       */
      databaseNames: string[];
    }
  }
  
  export namespace Input {
    export interface TouchPoint {
      /**
       * X coordinate of the event relative to the main frame's viewport in CSS pixels.
       */
      x: number;
      /**
       * Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
       */
      y: number;
      /**
       * X radius of the touch area (default: 1.0).
       */
      radiusX?: number;
      /**
       * Y radius of the touch area (default: 1.0).
       */
      radiusY?: number;
      /**
       * Rotation angle (default: 0.0).
       */
      rotationAngle?: number;
      /**
       * Force (default: 1.0).
       */
      force?: number;
      /**
       * The normalized tangential pressure, which has a range of [-1,1] (default: 0).
       */
      tangentialPressure?: number;
      /**
       * The plane angle between the Y-Z plane and the plane containing both the stylus axis and the Y axis, in degrees of the range [-90,90], a positive tiltX is to the right (default: 0)
       */
      tiltX?: number;
      /**
       * The plane angle between the X-Z plane and the plane containing both the stylus axis and the X axis, in degrees of the range [-90,90], a positive tiltY is towards the user (default: 0).
       */
      tiltY?: number;
      /**
       * The clockwise rotation of a pen stylus around its own major axis, in degrees in the range [0,359] (default: 0).
       */
      twist?: number;
      /**
       * Identifier used to track touch sources between events, must be unique within an event.
       */
      id?: number;
    }
    export type GestureSourceType = "default"|"touch"|"mouse";
    export type MouseButton = "none"|"left"|"middle"|"right"|"back"|"forward";
    /**
     * UTC time in seconds, counted from January 1, 1970.
     */
    export type TimeSinceEpoch = number;
    export interface DragDataItem {
      /**
       * Mime type of the dragged data.
       */
      mimeType: string;
      /**
       * Depending of the value of `mimeType`, it contains the dragged link,
text, HTML markup or any other data.
       */
      data: string;
      /**
       * Title associated with a link. Only valid when `mimeType` == "text/uri-list".
       */
      title?: string;
      /**
       * Stores the base URL for the contained markup. Only valid when `mimeType`
== "text/html".
       */
      baseURL?: string;
    }
    export interface DragData {
      items: DragDataItem[];
      /**
       * List of filenames that should be included when dropping
       */
      files?: string[];
      /**
       * Bit field representing allowed drag operations. Copy = 1, Link = 2, Move = 16
       */
      dragOperationsMask: number;
    }
    
    /**
     * Emitted only when `Input.setInterceptDrags` is enabled. Use this data with `Input.dispatchDragEvent` to
restore normal drag and drop behavior.
     */
    export type dragInterceptedPayload = {
      data: DragData;
    }
    
    /**
     * Dispatches a drag event into the page.
     */
    export type dispatchDragEventParameters = {
      /**
       * Type of the drag event.
       */
      type: "dragEnter"|"dragOver"|"drop"|"dragCancel";
      /**
       * X coordinate of the event relative to the main frame's viewport in CSS pixels.
       */
      x: number;
      /**
       * Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
       */
      y: number;
      data: DragData;
      /**
       * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
(default: 0).
       */
      modifiers?: number;
    }
    export type dispatchDragEventReturnValue = {
    }
    /**
     * Dispatches a key event to the page.
     */
    export type dispatchKeyEventParameters = {
      /**
       * Type of the key event.
       */
      type: "keyDown"|"keyUp"|"rawKeyDown"|"char";
      /**
       * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
(default: 0).
       */
      modifiers?: number;
      /**
       * Time at which the event occurred.
       */
      timestamp?: TimeSinceEpoch;
      /**
       * Text as generated by processing a virtual key code with a keyboard layout. Not needed for
for `keyUp` and `rawKeyDown` events (default: "")
       */
      text?: string;
      /**
       * Text that would have been generated by the keyboard if no modifiers were pressed (except for
shift). Useful for shortcut (accelerator) key handling (default: "").
       */
      unmodifiedText?: string;
      /**
       * Unique key identifier (e.g., 'U+0041') (default: "").
       */
      keyIdentifier?: string;
      /**
       * Unique DOM defined string value for each physical key (e.g., 'KeyA') (default: "").
       */
      code?: string;
      /**
       * Unique DOM defined string value describing the meaning of the key in the context of active
modifiers, keyboard layout, etc (e.g., 'AltGr') (default: "").
       */
      key?: string;
      /**
       * Windows virtual key code (default: 0).
       */
      windowsVirtualKeyCode?: number;
      /**
       * Native virtual key code (default: 0).
       */
      nativeVirtualKeyCode?: number;
      /**
       * Whether the event was generated from auto repeat (default: false).
       */
      autoRepeat?: boolean;
      /**
       * Whether the event was generated from the keypad (default: false).
       */
      isKeypad?: boolean;
      /**
       * Whether the event was a system key event (default: false).
       */
      isSystemKey?: boolean;
      /**
       * Whether the event was from the left or right side of the keyboard. 1=Left, 2=Right (default:
0).
       */
      location?: number;
      /**
       * Editing commands to send with the key event (e.g., 'selectAll') (default: []).
These are related to but not equal the command names used in `document.execCommand` and NSStandardKeyBindingResponding.
See https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/editing/commands/editor_command_names.h for valid command names.
       */
      commands?: string[];
    }
    export type dispatchKeyEventReturnValue = {
    }
    /**
     * This method emulates inserting text that doesn't come from a key press,
for example an emoji keyboard or an IME.
     */
    export type insertTextParameters = {
      /**
       * The text to insert.
       */
      text: string;
    }
    export type insertTextReturnValue = {
    }
    /**
     * This method sets the current candidate text for IME.
Use imeCommitComposition to commit the final text.
Use imeSetComposition with empty string as text to cancel composition.
     */
    export type imeSetCompositionParameters = {
      /**
       * The text to insert
       */
      text: string;
      /**
       * selection start
       */
      selectionStart: number;
      /**
       * selection end
       */
      selectionEnd: number;
      /**
       * replacement start
       */
      replacementStart?: number;
      /**
       * replacement end
       */
      replacementEnd?: number;
    }
    export type imeSetCompositionReturnValue = {
    }
    /**
     * Dispatches a mouse event to the page.
     */
    export type dispatchMouseEventParameters = {
      /**
       * Type of the mouse event.
       */
      type: "mousePressed"|"mouseReleased"|"mouseMoved"|"mouseWheel";
      /**
       * X coordinate of the event relative to the main frame's viewport in CSS pixels.
       */
      x: number;
      /**
       * Y coordinate of the event relative to the main frame's viewport in CSS pixels. 0 refers to
the top of the viewport and Y increases as it proceeds towards the bottom of the viewport.
       */
      y: number;
      /**
       * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
(default: 0).
       */
      modifiers?: number;
      /**
       * Time at which the event occurred.
       */
      timestamp?: TimeSinceEpoch;
      /**
       * Mouse button (default: "none").
       */
      button?: MouseButton;
      /**
       * A number indicating which buttons are pressed on the mouse when a mouse event is triggered.
Left=1, Right=2, Middle=4, Back=8, Forward=16, None=0.
       */
      buttons?: number;
      /**
       * Number of times the mouse button was clicked (default: 0).
       */
      clickCount?: number;
      /**
       * The normalized pressure, which has a range of [0,1] (default: 0).
       */
      force?: number;
      /**
       * The normalized tangential pressure, which has a range of [-1,1] (default: 0).
       */
      tangentialPressure?: number;
      /**
       * The plane angle between the Y-Z plane and the plane containing both the stylus axis and the Y axis, in degrees of the range [-90,90], a positive tiltX is to the right (default: 0).
       */
      tiltX?: number;
      /**
       * The plane angle between the X-Z plane and the plane containing both the stylus axis and the X axis, in degrees of the range [-90,90], a positive tiltY is towards the user (default: 0).
       */
      tiltY?: number;
      /**
       * The clockwise rotation of a pen stylus around its own major axis, in degrees in the range [0,359] (default: 0).
       */
      twist?: number;
      /**
       * X delta in CSS pixels for mouse wheel event (default: 0).
       */
      deltaX?: number;
      /**
       * Y delta in CSS pixels for mouse wheel event (default: 0).
       */
      deltaY?: number;
      /**
       * Pointer type (default: "mouse").
       */
      pointerType?: "mouse"|"pen";
    }
    export type dispatchMouseEventReturnValue = {
    }
    /**
     * Dispatches a touch event to the page.
     */
    export type dispatchTouchEventParameters = {
      /**
       * Type of the touch event. TouchEnd and TouchCancel must not contain any touch points, while
TouchStart and TouchMove must contains at least one.
       */
      type: "touchStart"|"touchEnd"|"touchMove"|"touchCancel";
      /**
       * Active touch points on the touch device. One event per any changed point (compared to
previous touch event in a sequence) is generated, emulating pressing/moving/releasing points
one by one.
       */
      touchPoints: TouchPoint[];
      /**
       * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
(default: 0).
       */
      modifiers?: number;
      /**
       * Time at which the event occurred.
       */
      timestamp?: TimeSinceEpoch;
    }
    export type dispatchTouchEventReturnValue = {
    }
    /**
     * Cancels any active dragging in the page.
     */
    export type cancelDraggingParameters = {
    }
    export type cancelDraggingReturnValue = {
    }
    /**
     * Emulates touch event from the mouse event parameters.
     */
    export type emulateTouchFromMouseEventParameters = {
      /**
       * Type of the mouse event.
       */
      type: "mousePressed"|"mouseReleased"|"mouseMoved"|"mouseWheel";
      /**
       * X coordinate of the mouse pointer in DIP.
       */
      x: number;
      /**
       * Y coordinate of the mouse pointer in DIP.
       */
      y: number;
      /**
       * Mouse button. Only "none", "left", "right" are supported.
       */
      button: MouseButton;
      /**
       * Time at which the event occurred (default: current time).
       */
      timestamp?: TimeSinceEpoch;
      /**
       * X delta in DIP for mouse wheel event (default: 0).
       */
      deltaX?: number;
      /**
       * Y delta in DIP for mouse wheel event (default: 0).
       */
      deltaY?: number;
      /**
       * Bit field representing pressed modifier keys. Alt=1, Ctrl=2, Meta/Command=4, Shift=8
(default: 0).
       */
      modifiers?: number;
      /**
       * Number of times the mouse button was clicked (default: 0).
       */
      clickCount?: number;
    }
    export type emulateTouchFromMouseEventReturnValue = {
    }
    /**
     * Ignores input events (useful while auditing page).
     */
    export type setIgnoreInputEventsParameters = {
      /**
       * Ignores input events processing when set to true.
       */
      ignore: boolean;
    }
    export type setIgnoreInputEventsReturnValue = {
    }
    /**
     * Prevents default drag and drop behavior and instead emits `Input.dragIntercepted` events.
Drag and drop behavior can be directly controlled via `Input.dispatchDragEvent`.
     */
    export type setInterceptDragsParameters = {
      enabled: boolean;
    }
    export type setInterceptDragsReturnValue = {
    }
    /**
     * Synthesizes a pinch gesture over a time period by issuing appropriate touch events.
     */
    export type synthesizePinchGestureParameters = {
      /**
       * X coordinate of the start of the gesture in CSS pixels.
       */
      x: number;
      /**
       * Y coordinate of the start of the gesture in CSS pixels.
       */
      y: number;
      /**
       * Relative scale factor after zooming (>1.0 zooms in, <1.0 zooms out).
       */
      scaleFactor: number;
      /**
       * Relative pointer speed in pixels per second (default: 800).
       */
      relativeSpeed?: number;
      /**
       * Which type of input events to be generated (default: 'default', which queries the platform
for the preferred input type).
       */
      gestureSourceType?: GestureSourceType;
    }
    export type synthesizePinchGestureReturnValue = {
    }
    /**
     * Synthesizes a scroll gesture over a time period by issuing appropriate touch events.
     */
    export type synthesizeScrollGestureParameters = {
      /**
       * X coordinate of the start of the gesture in CSS pixels.
       */
      x: number;
      /**
       * Y coordinate of the start of the gesture in CSS pixels.
       */
      y: number;
      /**
       * The distance to scroll along the X axis (positive to scroll left).
       */
      xDistance?: number;
      /**
       * The distance to scroll along the Y axis (positive to scroll up).
       */
      yDistance?: number;
      /**
       * The number of additional pixels to scroll back along the X axis, in addition to the given
distance.
       */
      xOverscroll?: number;
      /**
       * The number of additional pixels to scroll back along the Y axis, in addition to the given
distance.
       */
      yOverscroll?: number;
      /**
       * Prevent fling (default: true).
       */
      preventFling?: boolean;
      /**
       * Swipe speed in pixels per second (default: 800).
       */
      speed?: number;
      /**
       * Which type of input events to be generated (default: 'default', which queries the platform
for the preferred input type).
       */
      gestureSourceType?: GestureSourceType;
      /**
       * The number of times to repeat the gesture (default: 0).
       */
      repeatCount?: number;
      /**
       * The number of milliseconds delay between each repeat. (default: 250).
       */
      repeatDelayMs?: number;
      /**
       * The name of the interaction markers to generate, if not empty (default: "").
       */
      interactionMarkerName?: string;
    }
    export type synthesizeScrollGestureReturnValue = {
    }
    /**
     * Synthesizes a tap gesture over a time period by issuing appropriate touch events.
     */
    export type synthesizeTapGestureParameters = {
      /**
       * X coordinate of the start of the gesture in CSS pixels.
       */
      x: number;
      /**
       * Y coordinate of the start of the gesture in CSS pixels.
       */
      y: number;
      /**
       * Duration between touchdown and touchup events in ms (default: 50).
       */
      duration?: number;
      /**
       * Number of times to perform the tap (e.g. 2 for double tap, default: 1).
       */
      tapCount?: number;
      /**
       * Which type of input events to be generated (default: 'default', which queries the platform
for the preferred input type).
       */
      gestureSourceType?: GestureSourceType;
    }
    export type synthesizeTapGestureReturnValue = {
    }
  }
  
  export namespace Inspector {
    
    /**
     * Fired when remote debugging connection is about to be terminated. Contains detach reason.
     */
    export type detachedPayload = {
      /**
       * The reason why connection has been terminated.
       */
      reason: string;
    }
    /**
     * Fired when debugging target has crashed
     */
    export type targetCrashedPayload = void;
    /**
     * Fired when debugging target has reloaded after crash
     */
    export type targetReloadedAfterCrashPayload = void;
    /**
     * Fired on worker targets when main worker script and any imported scripts have been evaluated.
     */
    export type workerScriptLoadedPayload = void;
    
    /**
     * Disables inspector domain notifications.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables inspector domain notifications.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
  }
  
  export namespace LayerTree {
    /**
     * Unique Layer identifier.
     */
    export type LayerId = string;
    /**
     * Unique snapshot identifier.
     */
    export type SnapshotId = string;
    /**
     * Rectangle where scrolling happens on the main thread.
     */
    export interface ScrollRect {
      /**
       * Rectangle itself.
       */
      rect: DOM.Rect;
      /**
       * Reason for rectangle to force scrolling on the main thread
       */
      type: "RepaintsOnScroll"|"TouchEventHandler"|"WheelEventHandler";
    }
    /**
     * Sticky position constraints.
     */
    export interface StickyPositionConstraint {
      /**
       * Layout rectangle of the sticky element before being shifted
       */
      stickyBoxRect: DOM.Rect;
      /**
       * Layout rectangle of the containing block of the sticky element
       */
      containingBlockRect: DOM.Rect;
      /**
       * The nearest sticky layer that shifts the sticky box
       */
      nearestLayerShiftingStickyBox?: LayerId;
      /**
       * The nearest sticky layer that shifts the containing block
       */
      nearestLayerShiftingContainingBlock?: LayerId;
    }
    /**
     * Serialized fragment of layer picture along with its offset within the layer.
     */
    export interface PictureTile {
      /**
       * Offset from owning layer left boundary
       */
      x: number;
      /**
       * Offset from owning layer top boundary
       */
      y: number;
      /**
       * Base64-encoded snapshot data.
       */
      picture: binary;
    }
    /**
     * Information about a compositing layer.
     */
    export interface Layer {
      /**
       * The unique id for this layer.
       */
      layerId: LayerId;
      /**
       * The id of parent (not present for root).
       */
      parentLayerId?: LayerId;
      /**
       * The backend id for the node associated with this layer.
       */
      backendNodeId?: DOM.BackendNodeId;
      /**
       * Offset from parent layer, X coordinate.
       */
      offsetX: number;
      /**
       * Offset from parent layer, Y coordinate.
       */
      offsetY: number;
      /**
       * Layer width.
       */
      width: number;
      /**
       * Layer height.
       */
      height: number;
      /**
       * Transformation matrix for layer, default is identity matrix
       */
      transform?: number[];
      /**
       * Transform anchor point X, absent if no transform specified
       */
      anchorX?: number;
      /**
       * Transform anchor point Y, absent if no transform specified
       */
      anchorY?: number;
      /**
       * Transform anchor point Z, absent if no transform specified
       */
      anchorZ?: number;
      /**
       * Indicates how many time this layer has painted.
       */
      paintCount: number;
      /**
       * Indicates whether this layer hosts any content, rather than being used for
transform/scrolling purposes only.
       */
      drawsContent: boolean;
      /**
       * Set if layer is not visible.
       */
      invisible?: boolean;
      /**
       * Rectangles scrolling on main thread only.
       */
      scrollRects?: ScrollRect[];
      /**
       * Sticky position constraint information
       */
      stickyPositionConstraint?: StickyPositionConstraint;
    }
    /**
     * Array of timings, one per paint step.
     */
    export type PaintProfile = number[];
    
    export type layerPaintedPayload = {
      /**
       * The id of the painted layer.
       */
      layerId: LayerId;
      /**
       * Clip rectangle.
       */
      clip: DOM.Rect;
    }
    export type layerTreeDidChangePayload = {
      /**
       * Layer tree, absent if not in the compositing mode.
       */
      layers?: Layer[];
    }
    
    /**
     * Provides the reasons why the given layer was composited.
     */
    export type compositingReasonsParameters = {
      /**
       * The id of the layer for which we want to get the reasons it was composited.
       */
      layerId: LayerId;
    }
    export type compositingReasonsReturnValue = {
      /**
       * A list of strings specifying reasons for the given layer to become composited.
       */
      compositingReasons: string[];
      /**
       * A list of strings specifying reason IDs for the given layer to become composited.
       */
      compositingReasonIds: string[];
    }
    /**
     * Disables compositing tree inspection.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables compositing tree inspection.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Returns the snapshot identifier.
     */
    export type loadSnapshotParameters = {
      /**
       * An array of tiles composing the snapshot.
       */
      tiles: PictureTile[];
    }
    export type loadSnapshotReturnValue = {
      /**
       * The id of the snapshot.
       */
      snapshotId: SnapshotId;
    }
    /**
     * Returns the layer snapshot identifier.
     */
    export type makeSnapshotParameters = {
      /**
       * The id of the layer.
       */
      layerId: LayerId;
    }
    export type makeSnapshotReturnValue = {
      /**
       * The id of the layer snapshot.
       */
      snapshotId: SnapshotId;
    }
    export type profileSnapshotParameters = {
      /**
       * The id of the layer snapshot.
       */
      snapshotId: SnapshotId;
      /**
       * The maximum number of times to replay the snapshot (1, if not specified).
       */
      minRepeatCount?: number;
      /**
       * The minimum duration (in seconds) to replay the snapshot.
       */
      minDuration?: number;
      /**
       * The clip rectangle to apply when replaying the snapshot.
       */
      clipRect?: DOM.Rect;
    }
    export type profileSnapshotReturnValue = {
      /**
       * The array of paint profiles, one per run.
       */
      timings: PaintProfile[];
    }
    /**
     * Releases layer snapshot captured by the back-end.
     */
    export type releaseSnapshotParameters = {
      /**
       * The id of the layer snapshot.
       */
      snapshotId: SnapshotId;
    }
    export type releaseSnapshotReturnValue = {
    }
    /**
     * Replays the layer snapshot and returns the resulting bitmap.
     */
    export type replaySnapshotParameters = {
      /**
       * The id of the layer snapshot.
       */
      snapshotId: SnapshotId;
      /**
       * The first step to replay from (replay from the very start if not specified).
       */
      fromStep?: number;
      /**
       * The last step to replay to (replay till the end if not specified).
       */
      toStep?: number;
      /**
       * The scale to apply while replaying (defaults to 1).
       */
      scale?: number;
    }
    export type replaySnapshotReturnValue = {
      /**
       * A data: URL for resulting image.
       */
      dataURL: string;
    }
    /**
     * Replays the layer snapshot and returns canvas log.
     */
    export type snapshotCommandLogParameters = {
      /**
       * The id of the layer snapshot.
       */
      snapshotId: SnapshotId;
    }
    export type snapshotCommandLogReturnValue = {
      /**
       * The array of canvas function calls.
       */
      commandLog: { [key: string]: string }[];
    }
  }
  
  /**
   * Provides access to log entries.
   */
  export namespace Log {
    /**
     * Log entry.
     */
    export interface LogEntry {
      /**
       * Log entry source.
       */
      source: "xml"|"javascript"|"network"|"storage"|"appcache"|"rendering"|"security"|"deprecation"|"worker"|"violation"|"intervention"|"recommendation"|"other";
      /**
       * Log entry severity.
       */
      level: "verbose"|"info"|"warning"|"error";
      /**
       * Logged text.
       */
      text: string;
      category?: "cors";
      /**
       * Timestamp when this entry was added.
       */
      timestamp: Runtime.Timestamp;
      /**
       * URL of the resource if known.
       */
      url?: string;
      /**
       * Line number in the resource.
       */
      lineNumber?: number;
      /**
       * JavaScript stack trace.
       */
      stackTrace?: Runtime.StackTrace;
      /**
       * Identifier of the network request associated with this entry.
       */
      networkRequestId?: Network.RequestId;
      /**
       * Identifier of the worker associated with this entry.
       */
      workerId?: string;
      /**
       * Call arguments.
       */
      args?: Runtime.RemoteObject[];
    }
    /**
     * Violation configuration setting.
     */
    export interface ViolationSetting {
      /**
       * Violation type.
       */
      name: "longTask"|"longLayout"|"blockedEvent"|"blockedParser"|"discouragedAPIUse"|"handler"|"recurringHandler";
      /**
       * Time threshold to trigger upon.
       */
      threshold: number;
    }
    
    /**
     * Issued when new message was logged.
     */
    export type entryAddedPayload = {
      /**
       * The entry.
       */
      entry: LogEntry;
    }
    
    /**
     * Clears the log.
     */
    export type clearParameters = {
    }
    export type clearReturnValue = {
    }
    /**
     * Disables log domain, prevents further log entries from being reported to the client.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables log domain, sends the entries collected so far to the client by means of the
`entryAdded` notification.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * start violation reporting.
     */
    export type startViolationsReportParameters = {
      /**
       * Configuration for violations.
       */
      config: ViolationSetting[];
    }
    export type startViolationsReportReturnValue = {
    }
    /**
     * Stop violation reporting.
     */
    export type stopViolationsReportParameters = {
    }
    export type stopViolationsReportReturnValue = {
    }
  }
  
  /**
   * This domain allows detailed inspection of media elements.
   */
  export namespace Media {
    /**
     * Players will get an ID that is unique within the agent context.
     */
    export type PlayerId = string;
    export type Timestamp = number;
    /**
     * Have one type per entry in MediaLogRecord::Type
Corresponds to kMessage
     */
    export interface PlayerMessage {
      /**
       * Keep in sync with MediaLogMessageLevel
We are currently keeping the message level 'error' separate from the
PlayerError type because right now they represent different things,
this one being a DVLOG(ERROR) style log message that gets printed
based on what log level is selected in the UI, and the other is a
representation of a media::PipelineStatus object. Soon however we're
going to be moving away from using PipelineStatus for errors and
introducing a new error type which should hopefully let us integrate
the error log level into the PlayerError type.
       */
      level: "error"|"warning"|"info"|"debug";
      message: string;
    }
    /**
     * Corresponds to kMediaPropertyChange
     */
    export interface PlayerProperty {
      name: string;
      value: string;
    }
    /**
     * Corresponds to kMediaEventTriggered
     */
    export interface PlayerEvent {
      timestamp: Timestamp;
      value: string;
    }
    /**
     * Represents logged source line numbers reported in an error.
NOTE: file and line are from chromium c++ implementation code, not js.
     */
    export interface PlayerErrorSourceLocation {
      file: string;
      line: number;
    }
    /**
     * Corresponds to kMediaError
     */
    export interface PlayerError {
      errorType: string;
      /**
       * Code is the numeric enum entry for a specific set of error codes, such
as PipelineStatusCodes in media/base/pipeline_status.h
       */
      code: number;
      /**
       * A trace of where this error was caused / where it passed through.
       */
      stack: PlayerErrorSourceLocation[];
      /**
       * Errors potentially have a root cause error, ie, a DecoderError might be
caused by an WindowsError
       */
      cause: PlayerError[];
      /**
       * Extra data attached to an error, such as an HRESULT, Video Codec, etc.
       */
      data: { [key: string]: string };
    }
    export interface Player {
      playerId: PlayerId;
      domNodeId?: DOM.BackendNodeId;
    }
    
    /**
     * This can be called multiple times, and can be used to set / override /
remove player properties. A null propValue indicates removal.
     */
    export type playerPropertiesChangedPayload = {
      playerId: PlayerId;
      properties: PlayerProperty[];
    }
    /**
     * Send events as a list, allowing them to be batched on the browser for less
congestion. If batched, events must ALWAYS be in chronological order.
     */
    export type playerEventsAddedPayload = {
      playerId: PlayerId;
      events: PlayerEvent[];
    }
    /**
     * Send a list of any messages that need to be delivered.
     */
    export type playerMessagesLoggedPayload = {
      playerId: PlayerId;
      messages: PlayerMessage[];
    }
    /**
     * Send a list of any errors that need to be delivered.
     */
    export type playerErrorsRaisedPayload = {
      playerId: PlayerId;
      errors: PlayerError[];
    }
    /**
     * Called whenever a player is created, or when a new agent joins and receives
a list of active players. If an agent is restored, it will receive one
event for each active player.
     */
    export type playerCreatedPayload = {
      player: Player;
    }
    
    /**
     * Enables the Media domain
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Disables the Media domain.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
  }
  
  export namespace Memory {
    /**
     * Memory pressure level.
     */
    export type PressureLevel = "moderate"|"critical";
    /**
     * Heap profile sample.
     */
    export interface SamplingProfileNode {
      /**
       * Size of the sampled allocation.
       */
      size: number;
      /**
       * Total bytes attributed to this sample.
       */
      total: number;
      /**
       * Execution stack at the point of allocation.
       */
      stack: string[];
    }
    /**
     * Array of heap profile samples.
     */
    export interface SamplingProfile {
      samples: SamplingProfileNode[];
      modules: Module[];
    }
    /**
     * Executable module information
     */
    export interface Module {
      /**
       * Name of the module.
       */
      name: string;
      /**
       * UUID of the module.
       */
      uuid: string;
      /**
       * Base address where the module is loaded into memory. Encoded as a decimal
or hexadecimal (0x prefixed) string.
       */
      baseAddress: string;
      /**
       * Size of the module in bytes.
       */
      size: number;
    }
    /**
     * DOM object counter data.
     */
    export interface DOMCounter {
      /**
       * Object name. Note: object names should be presumed volatile and clients should not expect
the returned names to be consistent across runs.
       */
      name: string;
      /**
       * Object count.
       */
      count: number;
    }
    
    
    /**
     * Retruns current DOM object counters.
     */
    export type getDOMCountersParameters = {
    }
    export type getDOMCountersReturnValue = {
      documents: number;
      nodes: number;
      jsEventListeners: number;
    }
    /**
     * Retruns DOM object counters after preparing renderer for leak detection.
     */
    export type getDOMCountersForLeakDetectionParameters = {
    }
    export type getDOMCountersForLeakDetectionReturnValue = {
      /**
       * DOM object counters.
       */
      counters: DOMCounter[];
    }
    /**
     * Prepares for leak detection by terminating workers, stopping spellcheckers,
dropping non-essential internal caches, running garbage collections, etc.
     */
    export type prepareForLeakDetectionParameters = {
    }
    export type prepareForLeakDetectionReturnValue = {
    }
    /**
     * Simulate OomIntervention by purging V8 memory.
     */
    export type forciblyPurgeJavaScriptMemoryParameters = {
    }
    export type forciblyPurgeJavaScriptMemoryReturnValue = {
    }
    /**
     * Enable/disable suppressing memory pressure notifications in all processes.
     */
    export type setPressureNotificationsSuppressedParameters = {
      /**
       * If true, memory pressure notifications will be suppressed.
       */
      suppressed: boolean;
    }
    export type setPressureNotificationsSuppressedReturnValue = {
    }
    /**
     * Simulate a memory pressure notification in all processes.
     */
    export type simulatePressureNotificationParameters = {
      /**
       * Memory pressure level of the notification.
       */
      level: PressureLevel;
    }
    export type simulatePressureNotificationReturnValue = {
    }
    /**
     * Start collecting native memory profile.
     */
    export type startSamplingParameters = {
      /**
       * Average number of bytes between samples.
       */
      samplingInterval?: number;
      /**
       * Do not randomize intervals between samples.
       */
      suppressRandomness?: boolean;
    }
    export type startSamplingReturnValue = {
    }
    /**
     * Stop collecting native memory profile.
     */
    export type stopSamplingParameters = {
    }
    export type stopSamplingReturnValue = {
    }
    /**
     * Retrieve native memory allocations profile
collected since renderer process startup.
     */
    export type getAllTimeSamplingProfileParameters = {
    }
    export type getAllTimeSamplingProfileReturnValue = {
      profile: SamplingProfile;
    }
    /**
     * Retrieve native memory allocations profile
collected since browser process startup.
     */
    export type getBrowserSamplingProfileParameters = {
    }
    export type getBrowserSamplingProfileReturnValue = {
      profile: SamplingProfile;
    }
    /**
     * Retrieve native memory allocations profile collected since last
`startSampling` call.
     */
    export type getSamplingProfileParameters = {
    }
    export type getSamplingProfileReturnValue = {
      profile: SamplingProfile;
    }
  }
  
  /**
   * Network domain allows tracking network activities of the page. It exposes information about http,
file, data and other requests and responses, their headers, bodies, timing, etc.
   */
  export namespace Network {
    /**
     * Resource type as it was perceived by the rendering engine.
     */
    export type ResourceType = "Document"|"Stylesheet"|"Image"|"Media"|"Font"|"Script"|"TextTrack"|"XHR"|"Fetch"|"Prefetch"|"EventSource"|"WebSocket"|"Manifest"|"SignedExchange"|"Ping"|"CSPViolationReport"|"Preflight"|"FedCM"|"Other";
    /**
     * Unique loader identifier.
     */
    export type LoaderId = string;
    /**
     * Unique network request identifier.
Note that this does not identify individual HTTP requests that are part of
a network request.
     */
    export type RequestId = string;
    /**
     * Unique intercepted request identifier.
     */
    export type InterceptionId = string;
    /**
     * Network level fetch failure reason.
     */
    export type ErrorReason = "Failed"|"Aborted"|"TimedOut"|"AccessDenied"|"ConnectionClosed"|"ConnectionReset"|"ConnectionRefused"|"ConnectionAborted"|"ConnectionFailed"|"NameNotResolved"|"InternetDisconnected"|"AddressUnreachable"|"BlockedByClient"|"BlockedByResponse";
    /**
     * UTC time in seconds, counted from January 1, 1970.
     */
    export type TimeSinceEpoch = number;
    /**
     * Monotonically increasing time in seconds since an arbitrary point in the past.
     */
    export type MonotonicTime = number;
    /**
     * Request / response headers as keys / values of JSON object.
     */
    export type Headers = { [key: string]: string };
    /**
     * The underlying connection technology that the browser is supposedly using.
     */
    export type ConnectionType = "none"|"cellular2g"|"cellular3g"|"cellular4g"|"bluetooth"|"ethernet"|"wifi"|"wimax"|"other";
    /**
     * Represents the cookie's 'SameSite' status:
https://tools.ietf.org/html/draft-west-first-party-cookies
     */
    export type CookieSameSite = "Strict"|"Lax"|"None";
    /**
     * Represents the cookie's 'Priority' status:
https://tools.ietf.org/html/draft-west-cookie-priority-00
     */
    export type CookiePriority = "Low"|"Medium"|"High";
    /**
     * Represents the source scheme of the origin that originally set the cookie.
A value of "Unset" allows protocol clients to emulate legacy cookie scope for the scheme.
This is a temporary ability and it will be removed in the future.
     */
    export type CookieSourceScheme = "Unset"|"NonSecure"|"Secure";
    /**
     * Timing information for the request.
     */
    export interface ResourceTiming {
      /**
       * Timing's requestTime is a baseline in seconds, while the other numbers are ticks in
milliseconds relatively to this requestTime.
       */
      requestTime: number;
      /**
       * Started resolving proxy.
       */
      proxyStart: number;
      /**
       * Finished resolving proxy.
       */
      proxyEnd: number;
      /**
       * Started DNS address resolve.
       */
      dnsStart: number;
      /**
       * Finished DNS address resolve.
       */
      dnsEnd: number;
      /**
       * Started connecting to the remote host.
       */
      connectStart: number;
      /**
       * Connected to the remote host.
       */
      connectEnd: number;
      /**
       * Started SSL handshake.
       */
      sslStart: number;
      /**
       * Finished SSL handshake.
       */
      sslEnd: number;
      /**
       * Started running ServiceWorker.
       */
      workerStart: number;
      /**
       * Finished Starting ServiceWorker.
       */
      workerReady: number;
      /**
       * Started fetch event.
       */
      workerFetchStart: number;
      /**
       * Settled fetch event respondWith promise.
       */
      workerRespondWithSettled: number;
      /**
       * Started ServiceWorker static routing source evaluation.
       */
      workerRouterEvaluationStart?: number;
      /**
       * Started cache lookup when the source was evaluated to `cache`.
       */
      workerCacheLookupStart?: number;
      /**
       * Started sending request.
       */
      sendStart: number;
      /**
       * Finished sending request.
       */
      sendEnd: number;
      /**
       * Time the server started pushing request.
       */
      pushStart: number;
      /**
       * Time the server finished pushing request.
       */
      pushEnd: number;
      /**
       * Started receiving response headers.
       */
      receiveHeadersStart: number;
      /**
       * Finished receiving response headers.
       */
      receiveHeadersEnd: number;
    }
    /**
     * Loading priority of a resource request.
     */
    export type ResourcePriority = "VeryLow"|"Low"|"Medium"|"High"|"VeryHigh";
    /**
     * The render-blocking behavior of a resource request.
     */
    export type RenderBlockingBehavior = "Blocking"|"InBodyParserBlocking"|"NonBlocking"|"NonBlockingDynamic"|"PotentiallyBlocking";
    /**
     * Post data entry for HTTP request
     */
    export interface PostDataEntry {
      bytes?: binary;
    }
    /**
     * HTTP request data.
     */
    export interface Request {
      /**
       * Request URL (without fragment).
       */
      url: string;
      /**
       * Fragment of the requested URL starting with hash, if present.
       */
      urlFragment?: string;
      /**
       * HTTP request method.
       */
      method: string;
      /**
       * HTTP request headers.
       */
      headers: Headers;
      /**
       * HTTP POST request data.
Use postDataEntries instead.
       */
      postData?: string;
      /**
       * True when the request has POST data. Note that postData might still be omitted when this flag is true when the data is too long.
       */
      hasPostData?: boolean;
      /**
       * Request body elements (post data broken into individual entries).
       */
      postDataEntries?: PostDataEntry[];
      /**
       * The mixed content type of the request.
       */
      mixedContentType?: Security.MixedContentType;
      /**
       * Priority of the resource request at the time request is sent.
       */
      initialPriority: ResourcePriority;
      /**
       * The referrer policy of the request, as defined in https://www.w3.org/TR/referrer-policy/
       */
      referrerPolicy: "unsafe-url"|"no-referrer-when-downgrade"|"no-referrer"|"origin"|"origin-when-cross-origin"|"same-origin"|"strict-origin"|"strict-origin-when-cross-origin";
      /**
       * Whether is loaded via link preload.
       */
      isLinkPreload?: boolean;
      /**
       * Set for requests when the TrustToken API is used. Contains the parameters
passed by the developer (e.g. via "fetch") as understood by the backend.
       */
      trustTokenParams?: TrustTokenParams;
      /**
       * True if this resource request is considered to be the 'same site' as the
request corresponding to the main frame.
       */
      isSameSite?: boolean;
      /**
       * True when the resource request is ad-related.
       */
      isAdRelated?: boolean;
    }
    /**
     * Details of a signed certificate timestamp (SCT).
     */
    export interface SignedCertificateTimestamp {
      /**
       * Validation status.
       */
      status: string;
      /**
       * Origin.
       */
      origin: string;
      /**
       * Log name / description.
       */
      logDescription: string;
      /**
       * Log ID.
       */
      logId: string;
      /**
       * Issuance date. Unlike TimeSinceEpoch, this contains the number of
milliseconds since January 1, 1970, UTC, not the number of seconds.
       */
      timestamp: number;
      /**
       * Hash algorithm.
       */
      hashAlgorithm: string;
      /**
       * Signature algorithm.
       */
      signatureAlgorithm: string;
      /**
       * Signature data.
       */
      signatureData: string;
    }
    /**
     * Security details about a request.
     */
    export interface SecurityDetails {
      /**
       * Protocol name (e.g. "TLS 1.2" or "QUIC").
       */
      protocol: string;
      /**
       * Key Exchange used by the connection, or the empty string if not applicable.
       */
      keyExchange: string;
      /**
       * (EC)DH group used by the connection, if applicable.
       */
      keyExchangeGroup?: string;
      /**
       * Cipher name.
       */
      cipher: string;
      /**
       * TLS MAC. Note that AEAD ciphers do not have separate MACs.
       */
      mac?: string;
      /**
       * Certificate ID value.
       */
      certificateId: Security.CertificateId;
      /**
       * Certificate subject name.
       */
      subjectName: string;
      /**
       * Subject Alternative Name (SAN) DNS names and IP addresses.
       */
      sanList: string[];
      /**
       * Name of the issuing CA.
       */
      issuer: string;
      /**
       * Certificate valid from date.
       */
      validFrom: TimeSinceEpoch;
      /**
       * Certificate valid to (expiration) date
       */
      validTo: TimeSinceEpoch;
      /**
       * List of signed certificate timestamps (SCTs).
       */
      signedCertificateTimestampList: SignedCertificateTimestamp[];
      /**
       * Whether the request complied with Certificate Transparency policy
       */
      certificateTransparencyCompliance: CertificateTransparencyCompliance;
      /**
       * The signature algorithm used by the server in the TLS server signature,
represented as a TLS SignatureScheme code point. Omitted if not
applicable or not known.
       */
      serverSignatureAlgorithm?: number;
      /**
       * Whether the connection used Encrypted ClientHello
       */
      encryptedClientHello: boolean;
    }
    /**
     * Whether the request complied with Certificate Transparency policy.
     */
    export type CertificateTransparencyCompliance = "unknown"|"not-compliant"|"compliant";
    /**
     * The reason why request was blocked.
     */
    export type BlockedReason = "other"|"csp"|"mixed-content"|"origin"|"inspector"|"integrity"|"subresource-filter"|"content-type"|"coep-frame-resource-needs-coep-header"|"coop-sandboxed-iframe-cannot-navigate-to-coop-page"|"corp-not-same-origin"|"corp-not-same-origin-after-defaulted-to-same-origin-by-coep"|"corp-not-same-origin-after-defaulted-to-same-origin-by-dip"|"corp-not-same-origin-after-defaulted-to-same-origin-by-coep-and-dip"|"corp-not-same-site"|"sri-message-signature-mismatch";
    /**
     * The reason why request was blocked.
     */
    export type CorsError = "DisallowedByMode"|"InvalidResponse"|"WildcardOriginNotAllowed"|"MissingAllowOriginHeader"|"MultipleAllowOriginValues"|"InvalidAllowOriginValue"|"AllowOriginMismatch"|"InvalidAllowCredentials"|"CorsDisabledScheme"|"PreflightInvalidStatus"|"PreflightDisallowedRedirect"|"PreflightWildcardOriginNotAllowed"|"PreflightMissingAllowOriginHeader"|"PreflightMultipleAllowOriginValues"|"PreflightInvalidAllowOriginValue"|"PreflightAllowOriginMismatch"|"PreflightInvalidAllowCredentials"|"PreflightMissingAllowExternal"|"PreflightInvalidAllowExternal"|"InvalidAllowMethodsPreflightResponse"|"InvalidAllowHeadersPreflightResponse"|"MethodDisallowedByPreflightResponse"|"HeaderDisallowedByPreflightResponse"|"RedirectContainsCredentials"|"InsecureLocalNetwork"|"InvalidLocalNetworkAccess"|"NoCorsRedirectModeNotFollow"|"LocalNetworkAccessPermissionDenied";
    export interface CorsErrorStatus {
      corsError: CorsError;
      failedParameter: string;
    }
    /**
     * Source of serviceworker response.
     */
    export type ServiceWorkerResponseSource = "cache-storage"|"http-cache"|"fallback-code"|"network";
    /**
     * Determines what type of Trust Token operation is executed and
depending on the type, some additional parameters. The values
are specified in third_party/blink/renderer/core/fetch/trust_token.idl.
     */
    export interface TrustTokenParams {
      operation: TrustTokenOperationType;
      /**
       * Only set for "token-redemption" operation and determine whether
to request a fresh SRR or use a still valid cached SRR.
       */
      refreshPolicy: "UseCached"|"Refresh";
      /**
       * Origins of issuers from whom to request tokens or redemption
records.
       */
      issuers?: string[];
    }
    export type TrustTokenOperationType = "Issuance"|"Redemption"|"Signing";
    /**
     * The reason why Chrome uses a specific transport protocol for HTTP semantics.
     */
    export type AlternateProtocolUsage = "alternativeJobWonWithoutRace"|"alternativeJobWonRace"|"mainJobWonRace"|"mappingMissing"|"broken"|"dnsAlpnH3JobWonWithoutRace"|"dnsAlpnH3JobWonRace"|"unspecifiedReason";
    /**
     * Source of service worker router.
     */
    export type ServiceWorkerRouterSource = "network"|"cache"|"fetch-event"|"race-network-and-fetch-handler"|"race-network-and-cache";
    export interface ServiceWorkerRouterInfo {
      /**
       * ID of the rule matched. If there is a matched rule, this field will
be set, otherwiser no value will be set.
       */
      ruleIdMatched?: number;
      /**
       * The router source of the matched rule. If there is a matched rule, this
field will be set, otherwise no value will be set.
       */
      matchedSourceType?: ServiceWorkerRouterSource;
      /**
       * The actual router source used.
       */
      actualSourceType?: ServiceWorkerRouterSource;
    }
    /**
     * HTTP response data.
     */
    export interface Response {
      /**
       * Response URL. This URL can be different from CachedResource.url in case of redirect.
       */
      url: string;
      /**
       * HTTP response status code.
       */
      status: number;
      /**
       * HTTP response status text.
       */
      statusText: string;
      /**
       * HTTP response headers.
       */
      headers: Headers;
      /**
       * HTTP response headers text. This has been replaced by the headers in Network.responseReceivedExtraInfo.
       */
      headersText?: string;
      /**
       * Resource mimeType as determined by the browser.
       */
      mimeType: string;
      /**
       * Resource charset as determined by the browser (if applicable).
       */
      charset: string;
      /**
       * Refined HTTP request headers that were actually transmitted over the network.
       */
      requestHeaders?: Headers;
      /**
       * HTTP request headers text. This has been replaced by the headers in Network.requestWillBeSentExtraInfo.
       */
      requestHeadersText?: string;
      /**
       * Specifies whether physical connection was actually reused for this request.
       */
      connectionReused: boolean;
      /**
       * Physical connection id that was actually used for this request.
       */
      connectionId: number;
      /**
       * Remote IP address.
       */
      remoteIPAddress?: string;
      /**
       * Remote port.
       */
      remotePort?: number;
      /**
       * Specifies that the request was served from the disk cache.
       */
      fromDiskCache?: boolean;
      /**
       * Specifies that the request was served from the ServiceWorker.
       */
      fromServiceWorker?: boolean;
      /**
       * Specifies that the request was served from the prefetch cache.
       */
      fromPrefetchCache?: boolean;
      /**
       * Specifies that the request was served from the prefetch cache.
       */
      fromEarlyHints?: boolean;
      /**
       * Information about how ServiceWorker Static Router API was used. If this
field is set with `matchedSourceType` field, a matching rule is found.
If this field is set without `matchedSource`, no matching rule is found.
Otherwise, the API is not used.
       */
      serviceWorkerRouterInfo?: ServiceWorkerRouterInfo;
      /**
       * Total number of bytes received for this request so far.
       */
      encodedDataLength: number;
      /**
       * Timing information for the given request.
       */
      timing?: ResourceTiming;
      /**
       * Response source of response from ServiceWorker.
       */
      serviceWorkerResponseSource?: ServiceWorkerResponseSource;
      /**
       * The time at which the returned response was generated.
       */
      responseTime?: TimeSinceEpoch;
      /**
       * Cache Storage Cache Name.
       */
      cacheStorageCacheName?: string;
      /**
       * Protocol used to fetch this request.
       */
      protocol?: string;
      /**
       * The reason why Chrome uses a specific transport protocol for HTTP semantics.
       */
      alternateProtocolUsage?: AlternateProtocolUsage;
      /**
       * Security state of the request resource.
       */
      securityState: Security.SecurityState;
      /**
       * Security details for the request.
       */
      securityDetails?: SecurityDetails;
    }
    /**
     * WebSocket request data.
     */
    export interface WebSocketRequest {
      /**
       * HTTP request headers.
       */
      headers: Headers;
    }
    /**
     * WebSocket response data.
     */
    export interface WebSocketResponse {
      /**
       * HTTP response status code.
       */
      status: number;
      /**
       * HTTP response status text.
       */
      statusText: string;
      /**
       * HTTP response headers.
       */
      headers: Headers;
      /**
       * HTTP response headers text.
       */
      headersText?: string;
      /**
       * HTTP request headers.
       */
      requestHeaders?: Headers;
      /**
       * HTTP request headers text.
       */
      requestHeadersText?: string;
    }
    /**
     * WebSocket message data. This represents an entire WebSocket message, not just a fragmented frame as the name suggests.
     */
    export interface WebSocketFrame {
      /**
       * WebSocket message opcode.
       */
      opcode: number;
      /**
       * WebSocket message mask.
       */
      mask: boolean;
      /**
       * WebSocket message payload data.
If the opcode is 1, this is a text message and payloadData is a UTF-8 string.
If the opcode isn't 1, then payloadData is a base64 encoded string representing binary data.
       */
      payloadData: string;
    }
    /**
     * Information about the cached resource.
     */
    export interface CachedResource {
      /**
       * Resource URL. This is the url of the original network request.
       */
      url: string;
      /**
       * Type of this resource.
       */
      type: ResourceType;
      /**
       * Cached response data.
       */
      response?: Response;
      /**
       * Cached response body size.
       */
      bodySize: number;
    }
    /**
     * Information about the request initiator.
     */
    export interface Initiator {
      /**
       * Type of this initiator.
       */
      type: "parser"|"script"|"preload"|"SignedExchange"|"preflight"|"FedCM"|"other";
      /**
       * Initiator JavaScript stack trace, set for Script only.
Requires the Debugger domain to be enabled.
       */
      stack?: Runtime.StackTrace;
      /**
       * Initiator URL, set for Parser type or for Script type (when script is importing module) or for SignedExchange type.
       */
      url?: string;
      /**
       * Initiator line number, set for Parser type or for Script type (when script is importing
module) (0-based).
       */
      lineNumber?: number;
      /**
       * Initiator column number, set for Parser type or for Script type (when script is importing
module) (0-based).
       */
      columnNumber?: number;
      /**
       * Set if another request triggered this request (e.g. preflight).
       */
      requestId?: RequestId;
    }
    /**
     * cookiePartitionKey object
The representation of the components of the key that are created by the cookiePartitionKey class contained in net/cookies/cookie_partition_key.h.
     */
    export interface CookiePartitionKey {
      /**
       * The site of the top-level URL the browser was visiting at the start
of the request to the endpoint that set the cookie.
       */
      topLevelSite: string;
      /**
       * Indicates if the cookie has any ancestors that are cross-site to the topLevelSite.
       */
      hasCrossSiteAncestor: boolean;
    }
    /**
     * Cookie object
     */
    export interface Cookie {
      /**
       * Cookie name.
       */
      name: string;
      /**
       * Cookie value.
       */
      value: string;
      /**
       * Cookie domain.
       */
      domain: string;
      /**
       * Cookie path.
       */
      path: string;
      /**
       * Cookie expiration date as the number of seconds since the UNIX epoch.
The value is set to -1 if the expiry date is not set.
The value can be null for values that cannot be represented in
JSON (±Inf).
       */
      expires: number;
      /**
       * Cookie size.
       */
      size: number;
      /**
       * True if cookie is http-only.
       */
      httpOnly: boolean;
      /**
       * True if cookie is secure.
       */
      secure: boolean;
      /**
       * True in case of session cookie.
       */
      session: boolean;
      /**
       * Cookie SameSite type.
       */
      sameSite?: CookieSameSite;
      /**
       * Cookie Priority
       */
      priority: CookiePriority;
      /**
       * Cookie source scheme type.
       */
      sourceScheme: CookieSourceScheme;
      /**
       * Cookie source port. Valid values are {-1, [1, 65535]}, -1 indicates an unspecified port.
An unspecified port value allows protocol clients to emulate legacy cookie scope for the port.
This is a temporary ability and it will be removed in the future.
       */
      sourcePort: number;
      /**
       * Cookie partition key.
       */
      partitionKey?: CookiePartitionKey;
      /**
       * True if cookie partition key is opaque.
       */
      partitionKeyOpaque?: boolean;
    }
    /**
     * Types of reasons why a cookie may not be stored from a response.
     */
    export type SetCookieBlockedReason = "SecureOnly"|"SameSiteStrict"|"SameSiteLax"|"SameSiteUnspecifiedTreatedAsLax"|"SameSiteNoneInsecure"|"UserPreferences"|"ThirdPartyPhaseout"|"ThirdPartyBlockedInFirstPartySet"|"SyntaxError"|"SchemeNotSupported"|"OverwriteSecure"|"InvalidDomain"|"InvalidPrefix"|"UnknownError"|"SchemefulSameSiteStrict"|"SchemefulSameSiteLax"|"SchemefulSameSiteUnspecifiedTreatedAsLax"|"NameValuePairExceedsMaxSize"|"DisallowedCharacter"|"NoCookieContent";
    /**
     * Types of reasons why a cookie may not be sent with a request.
     */
    export type CookieBlockedReason = "SecureOnly"|"NotOnPath"|"DomainMismatch"|"SameSiteStrict"|"SameSiteLax"|"SameSiteUnspecifiedTreatedAsLax"|"SameSiteNoneInsecure"|"UserPreferences"|"ThirdPartyPhaseout"|"ThirdPartyBlockedInFirstPartySet"|"UnknownError"|"SchemefulSameSiteStrict"|"SchemefulSameSiteLax"|"SchemefulSameSiteUnspecifiedTreatedAsLax"|"NameValuePairExceedsMaxSize"|"PortMismatch"|"SchemeMismatch"|"AnonymousContext";
    /**
     * Types of reasons why a cookie should have been blocked by 3PCD but is exempted for the request.
     */
    export type CookieExemptionReason = "None"|"UserSetting"|"TPCDMetadata"|"TPCDDeprecationTrial"|"TopLevelTPCDDeprecationTrial"|"TPCDHeuristics"|"EnterprisePolicy"|"StorageAccess"|"TopLevelStorageAccess"|"Scheme"|"SameSiteNoneCookiesInSandbox";
    /**
     * A cookie which was not stored from a response with the corresponding reason.
     */
    export interface BlockedSetCookieWithReason {
      /**
       * The reason(s) this cookie was blocked.
       */
      blockedReasons: SetCookieBlockedReason[];
      /**
       * The string representing this individual cookie as it would appear in the header.
This is not the entire "cookie" or "set-cookie" header which could have multiple cookies.
       */
      cookieLine: string;
      /**
       * The cookie object which represents the cookie which was not stored. It is optional because
sometimes complete cookie information is not available, such as in the case of parsing
errors.
       */
      cookie?: Cookie;
    }
    /**
     * A cookie should have been blocked by 3PCD but is exempted and stored from a response with the
corresponding reason. A cookie could only have at most one exemption reason.
     */
    export interface ExemptedSetCookieWithReason {
      /**
       * The reason the cookie was exempted.
       */
      exemptionReason: CookieExemptionReason;
      /**
       * The string representing this individual cookie as it would appear in the header.
       */
      cookieLine: string;
      /**
       * The cookie object representing the cookie.
       */
      cookie: Cookie;
    }
    /**
     * A cookie associated with the request which may or may not be sent with it.
Includes the cookies itself and reasons for blocking or exemption.
     */
    export interface AssociatedCookie {
      /**
       * The cookie object representing the cookie which was not sent.
       */
      cookie: Cookie;
      /**
       * The reason(s) the cookie was blocked. If empty means the cookie is included.
       */
      blockedReasons: CookieBlockedReason[];
      /**
       * The reason the cookie should have been blocked by 3PCD but is exempted. A cookie could
only have at most one exemption reason.
       */
      exemptionReason?: CookieExemptionReason;
    }
    /**
     * Cookie parameter object
     */
    export interface CookieParam {
      /**
       * Cookie name.
       */
      name: string;
      /**
       * Cookie value.
       */
      value: string;
      /**
       * The request-URI to associate with the setting of the cookie. This value can affect the
default domain, path, source port, and source scheme values of the created cookie.
       */
      url?: string;
      /**
       * Cookie domain.
       */
      domain?: string;
      /**
       * Cookie path.
       */
      path?: string;
      /**
       * True if cookie is secure.
       */
      secure?: boolean;
      /**
       * True if cookie is http-only.
       */
      httpOnly?: boolean;
      /**
       * Cookie SameSite type.
       */
      sameSite?: CookieSameSite;
      /**
       * Cookie expiration date, session cookie if not set
       */
      expires?: TimeSinceEpoch;
      /**
       * Cookie Priority.
       */
      priority?: CookiePriority;
      /**
       * Cookie source scheme type.
       */
      sourceScheme?: CookieSourceScheme;
      /**
       * Cookie source port. Valid values are {-1, [1, 65535]}, -1 indicates an unspecified port.
An unspecified port value allows protocol clients to emulate legacy cookie scope for the port.
This is a temporary ability and it will be removed in the future.
       */
      sourcePort?: number;
      /**
       * Cookie partition key. If not set, the cookie will be set as not partitioned.
       */
      partitionKey?: CookiePartitionKey;
    }
    /**
     * Authorization challenge for HTTP status code 401 or 407.
     */
    export interface AuthChallenge {
      /**
       * Source of the authentication challenge.
       */
      source?: "Server"|"Proxy";
      /**
       * Origin of the challenger.
       */
      origin: string;
      /**
       * The authentication scheme used, such as basic or digest
       */
      scheme: string;
      /**
       * The realm of the challenge. May be empty.
       */
      realm: string;
    }
    /**
     * Response to an AuthChallenge.
     */
    export interface AuthChallengeResponse {
      /**
       * The decision on what to do in response to the authorization challenge.  Default means
deferring to the default behavior of the net stack, which will likely either the Cancel
authentication or display a popup dialog box.
       */
      response: "Default"|"CancelAuth"|"ProvideCredentials";
      /**
       * The username to provide, possibly empty. Should only be set if response is
ProvideCredentials.
       */
      username?: string;
      /**
       * The password to provide, possibly empty. Should only be set if response is
ProvideCredentials.
       */
      password?: string;
    }
    /**
     * Stages of the interception to begin intercepting. Request will intercept before the request is
sent. Response will intercept after the response is received.
     */
    export type InterceptionStage = "Request"|"HeadersReceived";
    /**
     * Request pattern for interception.
     */
    export interface RequestPattern {
      /**
       * Wildcards (`'*'` -> zero or more, `'?'` -> exactly one) are allowed. Escape character is
backslash. Omitting is equivalent to `"*"`.
       */
      urlPattern?: string;
      /**
       * If set, only requests for matching resource types will be intercepted.
       */
      resourceType?: ResourceType;
      /**
       * Stage at which to begin intercepting requests. Default is Request.
       */
      interceptionStage?: InterceptionStage;
    }
    /**
     * Information about a signed exchange signature.
https://wicg.github.io/webpackage/draft-yasskin-httpbis-origin-signed-exchanges-impl.html#rfc.section.3.1
     */
    export interface SignedExchangeSignature {
      /**
       * Signed exchange signature label.
       */
      label: string;
      /**
       * The hex string of signed exchange signature.
       */
      signature: string;
      /**
       * Signed exchange signature integrity.
       */
      integrity: string;
      /**
       * Signed exchange signature cert Url.
       */
      certUrl?: string;
      /**
       * The hex string of signed exchange signature cert sha256.
       */
      certSha256?: string;
      /**
       * Signed exchange signature validity Url.
       */
      validityUrl: string;
      /**
       * Signed exchange signature date.
       */
      date: number;
      /**
       * Signed exchange signature expires.
       */
      expires: number;
      /**
       * The encoded certificates.
       */
      certificates?: string[];
    }
    /**
     * Information about a signed exchange header.
https://wicg.github.io/webpackage/draft-yasskin-httpbis-origin-signed-exchanges-impl.html#cbor-representation
     */
    export interface SignedExchangeHeader {
      /**
       * Signed exchange request URL.
       */
      requestUrl: string;
      /**
       * Signed exchange response code.
       */
      responseCode: number;
      /**
       * Signed exchange response headers.
       */
      responseHeaders: Headers;
      /**
       * Signed exchange response signature.
       */
      signatures: SignedExchangeSignature[];
      /**
       * Signed exchange header integrity hash in the form of `sha256-<base64-hash-value>`.
       */
      headerIntegrity: string;
    }
    /**
     * Field type for a signed exchange related error.
     */
    export type SignedExchangeErrorField = "signatureSig"|"signatureIntegrity"|"signatureCertUrl"|"signatureCertSha256"|"signatureValidityUrl"|"signatureTimestamps";
    /**
     * Information about a signed exchange response.
     */
    export interface SignedExchangeError {
      /**
       * Error message.
       */
      message: string;
      /**
       * The index of the signature which caused the error.
       */
      signatureIndex?: number;
      /**
       * The field which caused the error.
       */
      errorField?: SignedExchangeErrorField;
    }
    /**
     * Information about a signed exchange response.
     */
    export interface SignedExchangeInfo {
      /**
       * The outer response of signed HTTP exchange which was received from network.
       */
      outerResponse: Response;
      /**
       * Whether network response for the signed exchange was accompanied by
extra headers.
       */
      hasExtraInfo: boolean;
      /**
       * Information about the signed exchange header.
       */
      header?: SignedExchangeHeader;
      /**
       * Security details for the signed exchange header.
       */
      securityDetails?: SecurityDetails;
      /**
       * Errors occurred while handling the signed exchange.
       */
      errors?: SignedExchangeError[];
    }
    /**
     * List of content encodings supported by the backend.
     */
    export type ContentEncoding = "deflate"|"gzip"|"br"|"zstd";
    export interface NetworkConditions {
      /**
       * Only matching requests will be affected by these conditions. Patterns use the URLPattern constructor string
syntax (https://urlpattern.spec.whatwg.org/) and must be absolute. If the pattern is empty, all requests are
matched (including p2p connections).
       */
      urlPattern: string;
      /**
       * Minimum latency from request sent to response headers received (ms).
       */
      latency: number;
      /**
       * Maximal aggregated download throughput (bytes/sec). -1 disables download throttling.
       */
      downloadThroughput: number;
      /**
       * Maximal aggregated upload throughput (bytes/sec).  -1 disables upload throttling.
       */
      uploadThroughput: number;
      /**
       * Connection type if known.
       */
      connectionType?: ConnectionType;
      /**
       * WebRTC packet loss (percent, 0-100). 0 disables packet loss emulation, 100 drops all the packets.
       */
      packetLoss?: number;
      /**
       * WebRTC packet queue length (packet). 0 removes any queue length limitations.
       */
      packetQueueLength?: number;
      /**
       * WebRTC packetReordering feature.
       */
      packetReordering?: boolean;
    }
    export interface BlockPattern {
      /**
       * URL pattern to match. Patterns use the URLPattern constructor string syntax
(https://urlpattern.spec.whatwg.org/) and must be absolute. Example: `<example>`.
       */
      urlPattern: string;
      /**
       * Whether or not to block the pattern. If false, a matching request will not be blocked even if it matches a later
`BlockPattern`.
       */
      block: boolean;
    }
    export type DirectSocketDnsQueryType = "ipv4"|"ipv6";
    export interface DirectTCPSocketOptions {
      /**
       * TCP_NODELAY option
       */
      noDelay: boolean;
      /**
       * Expected to be unsigned integer.
       */
      keepAliveDelay?: number;
      /**
       * Expected to be unsigned integer.
       */
      sendBufferSize?: number;
      /**
       * Expected to be unsigned integer.
       */
      receiveBufferSize?: number;
      dnsQueryType?: DirectSocketDnsQueryType;
    }
    export interface DirectUDPSocketOptions {
      remoteAddr?: string;
      /**
       * Unsigned int 16.
       */
      remotePort?: number;
      localAddr?: string;
      /**
       * Unsigned int 16.
       */
      localPort?: number;
      dnsQueryType?: DirectSocketDnsQueryType;
      /**
       * Expected to be unsigned integer.
       */
      sendBufferSize?: number;
      /**
       * Expected to be unsigned integer.
       */
      receiveBufferSize?: number;
      multicastLoopback?: boolean;
      /**
       * Unsigned int 8.
       */
      multicastTimeToLive?: number;
      multicastAllowAddressSharing?: boolean;
    }
    export interface DirectUDPMessage {
      data: binary;
      /**
       * Null for connected mode.
       */
      remoteAddr?: string;
      /**
       * Null for connected mode.
Expected to be unsigned integer.
       */
      remotePort?: number;
    }
    export type LocalNetworkAccessRequestPolicy = "Allow"|"BlockFromInsecureToMorePrivate"|"WarnFromInsecureToMorePrivate"|"PermissionBlock"|"PermissionWarn";
    export type IPAddressSpace = "Loopback"|"Local"|"Public"|"Unknown";
    export interface ConnectTiming {
      /**
       * Timing's requestTime is a baseline in seconds, while the other numbers are ticks in
milliseconds relatively to this requestTime. Matches ResourceTiming's requestTime for
the same request (but not for redirected requests).
       */
      requestTime: number;
    }
    export interface ClientSecurityState {
      initiatorIsSecureContext: boolean;
      initiatorIPAddressSpace: IPAddressSpace;
      localNetworkAccessRequestPolicy: LocalNetworkAccessRequestPolicy;
    }
    /**
     * Identifies the script on the stack that caused a resource or element to be
labeled as an ad. For resources, this indicates the context that triggered
the fetch. For elements, this indicates the context that caused the element
to be appended to the DOM.
     */
    export interface AdScriptIdentifier {
      /**
       * The script's V8 identifier.
       */
      scriptId: Runtime.ScriptId;
      /**
       * V8's debugging ID for the v8::Context.
       */
      debuggerId: Runtime.UniqueDebuggerId;
      /**
       * The script's url (or generated name based on id if inline script).
       */
      name: string;
    }
    /**
     * Encapsulates the script ancestry and the root script filter list rule that
caused the resource or element to be labeled as an ad.
     */
    export interface AdAncestry {
      /**
       * A chain of `AdScriptIdentifier`s representing the ancestry of an ad
script that led to the creation of a resource or element. The chain is
ordered from the script itself (lowest level) up to its root ancestor
that was flagged by a filter list.
       */
      ancestryChain: AdScriptIdentifier[];
      /**
       * The filter list rule that caused the root (last) script in
`ancestryChain` to be tagged as an ad.
       */
      rootScriptFilterlistRule?: string;
    }
    /**
     * Represents the provenance of an ad resource or element. Only one of
`filterlistRule` or `adScriptAncestry` can be set. If `filterlistRule`
is provided, the resource URL directly matches a filter list rule. If
`adScriptAncestry` is provided, an ad script initiated the resource fetch or
appended the element to the DOM. If neither is provided, the entity is
known to be an ad, but provenance tracking information is unavailable.
     */
    export interface AdProvenance {
      /**
       * The filterlist rule that matched, if any.
       */
      filterlistRule?: string;
      /**
       * The script ancestry that created the ad, if any.
       */
      adScriptAncestry?: AdAncestry;
    }
    export type CrossOriginOpenerPolicyValue = "SameOrigin"|"SameOriginAllowPopups"|"RestrictProperties"|"UnsafeNone"|"SameOriginPlusCoep"|"RestrictPropertiesPlusCoep"|"NoopenerAllowPopups";
    export interface CrossOriginOpenerPolicyStatus {
      value: CrossOriginOpenerPolicyValue;
      reportOnlyValue: CrossOriginOpenerPolicyValue;
      reportingEndpoint?: string;
      reportOnlyReportingEndpoint?: string;
    }
    export type CrossOriginEmbedderPolicyValue = "None"|"Credentialless"|"RequireCorp";
    export interface CrossOriginEmbedderPolicyStatus {
      value: CrossOriginEmbedderPolicyValue;
      reportOnlyValue: CrossOriginEmbedderPolicyValue;
      reportingEndpoint?: string;
      reportOnlyReportingEndpoint?: string;
    }
    export type ContentSecurityPolicySource = "HTTP"|"Meta";
    export interface ContentSecurityPolicyStatus {
      effectiveDirectives: string;
      isEnforced: boolean;
      source: ContentSecurityPolicySource;
    }
    export interface SecurityIsolationStatus {
      coop?: CrossOriginOpenerPolicyStatus;
      coep?: CrossOriginEmbedderPolicyStatus;
      csp?: ContentSecurityPolicyStatus[];
    }
    /**
     * The status of a Reporting API report.
     */
    export type ReportStatus = "Queued"|"Pending"|"MarkedForRemoval"|"Success";
    export type ReportId = string;
    /**
     * An object representing a report generated by the Reporting API.
     */
    export interface ReportingApiReport {
      id: ReportId;
      /**
       * The URL of the document that triggered the report.
       */
      initiatorUrl: string;
      /**
       * The name of the endpoint group that should be used to deliver the report.
       */
      destination: string;
      /**
       * The type of the report (specifies the set of data that is contained in the report body).
       */
      type: string;
      /**
       * When the report was generated.
       */
      timestamp: Network.TimeSinceEpoch;
      /**
       * How many uploads deep the related request was.
       */
      depth: number;
      /**
       * The number of delivery attempts made so far, not including an active attempt.
       */
      completedAttempts: number;
      body: { [key: string]: string };
      status: ReportStatus;
    }
    export interface ReportingApiEndpoint {
      /**
       * The URL of the endpoint to which reports may be delivered.
       */
      url: string;
      /**
       * Name of the endpoint group.
       */
      groupName: string;
    }
    /**
     * Unique identifier for a device bound session.
     */
    export interface DeviceBoundSessionKey {
      /**
       * The site the session is set up for.
       */
      site: string;
      /**
       * The id of the session.
       */
      id: string;
    }
    /**
     * How a device bound session was used during a request.
     */
    export interface DeviceBoundSessionWithUsage {
      /**
       * The key for the session.
       */
      sessionKey: DeviceBoundSessionKey;
      /**
       * How the session was used (or not used).
       */
      usage: "NotInScope"|"InScopeRefreshNotYetNeeded"|"InScopeRefreshNotAllowed"|"ProactiveRefreshNotPossible"|"ProactiveRefreshAttempted"|"Deferred";
    }
    /**
     * A device bound session's cookie craving.
     */
    export interface DeviceBoundSessionCookieCraving {
      /**
       * The name of the craving.
       */
      name: string;
      /**
       * The domain of the craving.
       */
      domain: string;
      /**
       * The path of the craving.
       */
      path: string;
      /**
       * The `Secure` attribute of the craving attributes.
       */
      secure: boolean;
      /**
       * The `HttpOnly` attribute of the craving attributes.
       */
      httpOnly: boolean;
      /**
       * The `SameSite` attribute of the craving attributes.
       */
      sameSite?: CookieSameSite;
    }
    /**
     * A device bound session's inclusion URL rule.
     */
    export interface DeviceBoundSessionUrlRule {
      /**
       * See comments on `net::device_bound_sessions::SessionInclusionRules::UrlRule::rule_type`.
       */
      ruleType: "Exclude"|"Include";
      /**
       * See comments on `net::device_bound_sessions::SessionInclusionRules::UrlRule::host_pattern`.
       */
      hostPattern: string;
      /**
       * See comments on `net::device_bound_sessions::SessionInclusionRules::UrlRule::path_prefix`.
       */
      pathPrefix: string;
    }
    /**
     * A device bound session's inclusion rules.
     */
    export interface DeviceBoundSessionInclusionRules {
      /**
       * See comments on `net::device_bound_sessions::SessionInclusionRules::origin_`.
       */
      origin: string;
      /**
       * Whether the whole site is included. See comments on
`net::device_bound_sessions::SessionInclusionRules::include_site_` for more
details; this boolean is true if that value is populated.
       */
      includeSite: boolean;
      /**
       * See comments on `net::device_bound_sessions::SessionInclusionRules::url_rules_`.
       */
      urlRules: DeviceBoundSessionUrlRule[];
    }
    /**
     * A device bound session.
     */
    export interface DeviceBoundSession {
      /**
       * The site and session ID of the session.
       */
      key: DeviceBoundSessionKey;
      /**
       * See comments on `net::device_bound_sessions::Session::refresh_url_`.
       */
      refreshUrl: string;
      /**
       * See comments on `net::device_bound_sessions::Session::inclusion_rules_`.
       */
      inclusionRules: DeviceBoundSessionInclusionRules;
      /**
       * See comments on `net::device_bound_sessions::Session::cookie_cravings_`.
       */
      cookieCravings: DeviceBoundSessionCookieCraving[];
      /**
       * See comments on `net::device_bound_sessions::Session::expiry_date_`.
       */
      expiryDate: Network.TimeSinceEpoch;
      /**
       * See comments on `net::device_bound_sessions::Session::cached_challenge__`.
       */
      cachedChallenge?: string;
      /**
       * See comments on `net::device_bound_sessions::Session::allowed_refresh_initiators_`.
       */
      allowedRefreshInitiators: string[];
    }
    /**
     * A unique identifier for a device bound session event.
     */
    export type DeviceBoundSessionEventId = string;
    /**
     * A fetch result for a device bound session creation or refresh.
     */
    export type DeviceBoundSessionFetchResult = "Success"|"KeyError"|"SigningError"|"ServerRequestedTermination"|"InvalidSessionId"|"InvalidChallenge"|"TooManyChallenges"|"InvalidFetcherUrl"|"InvalidRefreshUrl"|"TransientHttpError"|"ScopeOriginSameSiteMismatch"|"RefreshUrlSameSiteMismatch"|"MismatchedSessionId"|"MissingScope"|"NoCredentials"|"SubdomainRegistrationWellKnownUnavailable"|"SubdomainRegistrationUnauthorized"|"SubdomainRegistrationWellKnownMalformed"|"SessionProviderWellKnownUnavailable"|"RelyingPartyWellKnownUnavailable"|"FederatedKeyThumbprintMismatch"|"InvalidFederatedSessionUrl"|"InvalidFederatedKey"|"TooManyRelyingOriginLabels"|"BoundCookieSetForbidden"|"NetError"|"ProxyError"|"EmptySessionConfig"|"InvalidCredentialsConfig"|"InvalidCredentialsType"|"InvalidCredentialsEmptyName"|"InvalidCredentialsCookie"|"PersistentHttpError"|"RegistrationAttemptedChallenge"|"InvalidScopeOrigin"|"ScopeOriginContainsPath"|"RefreshInitiatorNotString"|"RefreshInitiatorInvalidHostPattern"|"InvalidScopeSpecification"|"MissingScopeSpecificationType"|"EmptyScopeSpecificationDomain"|"EmptyScopeSpecificationPath"|"InvalidScopeSpecificationType"|"InvalidScopeIncludeSite"|"MissingScopeIncludeSite"|"FederatedNotAuthorizedByProvider"|"FederatedNotAuthorizedByRelyingParty"|"SessionProviderWellKnownMalformed"|"SessionProviderWellKnownHasProviderOrigin"|"RelyingPartyWellKnownMalformed"|"RelyingPartyWellKnownHasRelyingOrigins"|"InvalidFederatedSessionProviderSessionMissing"|"InvalidFederatedSessionWrongProviderOrigin"|"InvalidCredentialsCookieCreationTime"|"InvalidCredentialsCookieName"|"InvalidCredentialsCookieParsing"|"InvalidCredentialsCookieUnpermittedAttribute"|"InvalidCredentialsCookieInvalidDomain"|"InvalidCredentialsCookiePrefix"|"InvalidScopeRulePath"|"InvalidScopeRuleHostPattern"|"ScopeRuleOriginScopedHostPatternMismatch"|"ScopeRuleSiteScopedHostPatternMismatch"|"SigningQuotaExceeded"|"InvalidConfigJson"|"InvalidFederatedSessionProviderFailedToRestoreKey"|"FailedToUnwrapKey"|"SessionDeletedDuringRefresh";
    /**
     * Details about a failed device bound session network request.
     */
    export interface DeviceBoundSessionFailedRequest {
      /**
       * The failed request URL.
       */
      requestUrl: string;
      /**
       * The net error of the response if it was not OK.
       */
      netError?: string;
      /**
       * The response code if the net error was OK and the response code was not
200.
       */
      responseError?: number;
      /**
       * The body of the response if the net error was OK, the response code was
not 200, and the response body was not empty.
       */
      responseErrorBody?: string;
    }
    /**
     * Session event details specific to creation.
     */
    export interface CreationEventDetails {
      /**
       * The result of the fetch attempt.
       */
      fetchResult: DeviceBoundSessionFetchResult;
      /**
       * The session if there was a newly created session. This is populated for
all successful creation events.
       */
      newSession?: DeviceBoundSession;
      /**
       * Details about a failed device bound session network request if there was
one.
       */
      failedRequest?: DeviceBoundSessionFailedRequest;
    }
    /**
     * Session event details specific to refresh.
     */
    export interface RefreshEventDetails {
      /**
       * The result of a refresh.
       */
      refreshResult: "Refreshed"|"InitializedService"|"Unreachable"|"ServerError"|"RefreshQuotaExceeded"|"FatalError"|"SigningQuotaExceeded";
      /**
       * If there was a fetch attempt, the result of that.
       */
      fetchResult?: DeviceBoundSessionFetchResult;
      /**
       * The session display if there was a newly created session. This is populated
for any refresh event that modifies the session config.
       */
      newSession?: DeviceBoundSession;
      /**
       * See comments on `net::device_bound_sessions::RefreshEventResult::was_fully_proactive_refresh`.
       */
      wasFullyProactiveRefresh: boolean;
      /**
       * Details about a failed device bound session network request if there was
one.
       */
      failedRequest?: DeviceBoundSessionFailedRequest;
    }
    /**
     * Session event details specific to termination.
     */
    export interface TerminationEventDetails {
      /**
       * The reason for a session being deleted.
       */
      deletionReason: "Expired"|"FailedToRestoreKey"|"FailedToUnwrapKey"|"StoragePartitionCleared"|"ClearBrowsingData"|"ServerRequested"|"InvalidSessionParams"|"RefreshFatalError";
    }
    /**
     * Session event details specific to challenges.
     */
    export interface ChallengeEventDetails {
      /**
       * The result of a challenge.
       */
      challengeResult: "Success"|"NoSessionId"|"NoSessionMatch"|"CantSetBoundCookie";
      /**
       * The challenge set.
       */
      challenge: string;
    }
    /**
     * An object providing the result of a network resource load.
     */
    export interface LoadNetworkResourcePageResult {
      success: boolean;
      /**
       * Optional values used for error reporting.
       */
      netError?: number;
      netErrorName?: string;
      httpStatusCode?: number;
      /**
       * If successful, one of the following two fields holds the result.
       */
      stream?: IO.StreamHandle;
      /**
       * Response headers.
       */
      headers?: Network.Headers;
    }
    /**
     * An options object that may be extended later to better support CORS,
CORB and streaming.
     */
    export interface LoadNetworkResourceOptions {
      disableCache: boolean;
      includeCredentials: boolean;
    }
    
    /**
     * Fired when data chunk was received over the network.
     */
    export type dataReceivedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * Data chunk length.
       */
      dataLength: number;
      /**
       * Actual bytes received (might be less than dataLength for compressed encodings).
       */
      encodedDataLength: number;
      /**
       * Data that was received.
       */
      data?: binary;
    }
    /**
     * Fired when EventSource message is received.
     */
    export type eventSourceMessageReceivedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * Message type.
       */
      eventName: string;
      /**
       * Message identifier.
       */
      eventId: string;
      /**
       * Message content.
       */
      data: string;
    }
    /**
     * Fired when HTTP request has failed to load.
     */
    export type loadingFailedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * Resource type.
       */
      type: ResourceType;
      /**
       * Error message. List of network errors: https://cs.chromium.org/chromium/src/net/base/net_error_list.h
       */
      errorText: string;
      /**
       * True if loading was canceled.
       */
      canceled?: boolean;
      /**
       * The reason why loading was blocked, if any.
       */
      blockedReason?: BlockedReason;
      /**
       * The reason why loading was blocked by CORS, if any.
       */
      corsErrorStatus?: CorsErrorStatus;
    }
    /**
     * Fired when HTTP request has finished loading.
     */
    export type loadingFinishedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * Total number of bytes received for this request.
       */
      encodedDataLength: number;
    }
    /**
     * Details of an intercepted HTTP request, which must be either allowed, blocked, modified or
mocked.
Deprecated, use Fetch.requestPaused instead.
     */
    export type requestInterceptedPayload = {
      /**
       * Each request the page makes will have a unique id, however if any redirects are encountered
while processing that fetch, they will be reported with the same id as the original fetch.
Likewise if HTTP authentication is needed then the same fetch id will be used.
       */
      interceptionId: InterceptionId;
      request: Request;
      /**
       * The id of the frame that initiated the request.
       */
      frameId: Page.FrameId;
      /**
       * How the requested resource will be used.
       */
      resourceType: ResourceType;
      /**
       * Whether this is a navigation request, which can abort the navigation completely.
       */
      isNavigationRequest: boolean;
      /**
       * Set if the request is a navigation that will result in a download.
Only present after response is received from the server (i.e. HeadersReceived stage).
       */
      isDownload?: boolean;
      /**
       * Redirect location, only sent if a redirect was intercepted.
       */
      redirectUrl?: string;
      /**
       * Details of the Authorization Challenge encountered. If this is set then
continueInterceptedRequest must contain an authChallengeResponse.
       */
      authChallenge?: AuthChallenge;
      /**
       * Response error if intercepted at response stage or if redirect occurred while intercepting
request.
       */
      responseErrorReason?: ErrorReason;
      /**
       * Response code if intercepted at response stage or if redirect occurred while intercepting
request or auth retry occurred.
       */
      responseStatusCode?: number;
      /**
       * Response headers if intercepted at the response stage or if redirect occurred while
intercepting request or auth retry occurred.
       */
      responseHeaders?: Headers;
      /**
       * If the intercepted request had a corresponding requestWillBeSent event fired for it, then
this requestId will be the same as the requestId present in the requestWillBeSent event.
       */
      requestId?: RequestId;
    }
    /**
     * Fired if request ended up loading from cache.
     */
    export type requestServedFromCachePayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
    }
    /**
     * Fired when page is about to send HTTP request.
     */
    export type requestWillBeSentPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Loader identifier. Empty string if the request is fetched from worker.
       */
      loaderId: LoaderId;
      /**
       * URL of the document this request is loaded for.
       */
      documentURL: string;
      /**
       * Request data.
       */
      request: Request;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * Timestamp.
       */
      wallTime: TimeSinceEpoch;
      /**
       * Request initiator.
       */
      initiator: Initiator;
      /**
       * In the case that redirectResponse is populated, this flag indicates whether
requestWillBeSentExtraInfo and responseReceivedExtraInfo events will be or were emitted
for the request which was just redirected.
       */
      redirectHasExtraInfo: boolean;
      /**
       * Redirect response data.
       */
      redirectResponse?: Response;
      /**
       * Type of this resource.
       */
      type?: ResourceType;
      /**
       * Frame identifier.
       */
      frameId?: Page.FrameId;
      /**
       * Whether the request is initiated by a user gesture. Defaults to false.
       */
      hasUserGesture?: boolean;
      /**
       * The render-blocking behavior of the request.
       */
      renderBlockingBehavior?: RenderBlockingBehavior;
    }
    /**
     * Fired when resource loading priority is changed
     */
    export type resourceChangedPriorityPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * New priority
       */
      newPriority: ResourcePriority;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
    }
    /**
     * Fired when a signed exchange was received over the network
     */
    export type signedExchangeReceivedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Information about the signed exchange response.
       */
      info: SignedExchangeInfo;
    }
    /**
     * Fired when HTTP response is available.
     */
    export type responseReceivedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Loader identifier. Empty string if the request is fetched from worker.
       */
      loaderId: LoaderId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * Resource type.
       */
      type: ResourceType;
      /**
       * Response data.
       */
      response: Response;
      /**
       * Indicates whether requestWillBeSentExtraInfo and responseReceivedExtraInfo events will be
or were emitted for this request.
       */
      hasExtraInfo: boolean;
      /**
       * Frame identifier.
       */
      frameId?: Page.FrameId;
    }
    /**
     * Fired when WebSocket is closed.
     */
    export type webSocketClosedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
    }
    /**
     * Fired upon WebSocket creation.
     */
    export type webSocketCreatedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * WebSocket request URL.
       */
      url: string;
      /**
       * Request initiator.
       */
      initiator?: Initiator;
    }
    /**
     * Fired when WebSocket message error occurs.
     */
    export type webSocketFrameErrorPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * WebSocket error message.
       */
      errorMessage: string;
    }
    /**
     * Fired when WebSocket message is received.
     */
    export type webSocketFrameReceivedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * WebSocket response data.
       */
      response: WebSocketFrame;
    }
    /**
     * Fired when WebSocket message is sent.
     */
    export type webSocketFrameSentPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * WebSocket response data.
       */
      response: WebSocketFrame;
    }
    /**
     * Fired when WebSocket handshake response becomes available.
     */
    export type webSocketHandshakeResponseReceivedPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * WebSocket response data.
       */
      response: WebSocketResponse;
    }
    /**
     * Fired when WebSocket is about to initiate handshake.
     */
    export type webSocketWillSendHandshakeRequestPayload = {
      /**
       * Request identifier.
       */
      requestId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * UTC Timestamp.
       */
      wallTime: TimeSinceEpoch;
      /**
       * WebSocket request data.
       */
      request: WebSocketRequest;
    }
    /**
     * Fired upon WebTransport creation.
     */
    export type webTransportCreatedPayload = {
      /**
       * WebTransport identifier.
       */
      transportId: RequestId;
      /**
       * WebTransport request URL.
       */
      url: string;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
      /**
       * Request initiator.
       */
      initiator?: Initiator;
    }
    /**
     * Fired when WebTransport handshake is finished.
     */
    export type webTransportConnectionEstablishedPayload = {
      /**
       * WebTransport identifier.
       */
      transportId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
    }
    /**
     * Fired when WebTransport is disposed.
     */
    export type webTransportClosedPayload = {
      /**
       * WebTransport identifier.
       */
      transportId: RequestId;
      /**
       * Timestamp.
       */
      timestamp: MonotonicTime;
    }
    /**
     * Fired upon direct_socket.TCPSocket creation.
     */
    export type directTCPSocketCreatedPayload = {
      identifier: RequestId;
      remoteAddr: string;
      /**
       * Unsigned int 16.
       */
      remotePort: number;
      options: DirectTCPSocketOptions;
      timestamp: MonotonicTime;
      initiator?: Initiator;
    }
    /**
     * Fired when direct_socket.TCPSocket connection is opened.
     */
    export type directTCPSocketOpenedPayload = {
      identifier: RequestId;
      remoteAddr: string;
      /**
       * Expected to be unsigned integer.
       */
      remotePort: number;
      timestamp: MonotonicTime;
      localAddr?: string;
      /**
       * Expected to be unsigned integer.
       */
      localPort?: number;
    }
    /**
     * Fired when direct_socket.TCPSocket is aborted.
     */
    export type directTCPSocketAbortedPayload = {
      identifier: RequestId;
      errorMessage: string;
      timestamp: MonotonicTime;
    }
    /**
     * Fired when direct_socket.TCPSocket is closed.
     */
    export type directTCPSocketClosedPayload = {
      identifier: RequestId;
      timestamp: MonotonicTime;
    }
    /**
     * Fired when data is sent to tcp direct socket stream.
     */
    export type directTCPSocketChunkSentPayload = {
      identifier: RequestId;
      data: binary;
      timestamp: MonotonicTime;
    }
    /**
     * Fired when data is received from tcp direct socket stream.
     */
    export type directTCPSocketChunkReceivedPayload = {
      identifier: RequestId;
      data: binary;
      timestamp: MonotonicTime;
    }
    export type directUDPSocketJoinedMulticastGroupPayload = {
      identifier: RequestId;
      IPAddress: string;
    }
    export type directUDPSocketLeftMulticastGroupPayload = {
      identifier: RequestId;
      IPAddress: string;
    }
    /**
     * Fired upon direct_socket.UDPSocket creation.
     */
    export type directUDPSocketCreatedPayload = {
      identifier: RequestId;
      options: DirectUDPSocketOptions;
      timestamp: MonotonicTime;
      initiator?: Initiator;
    }
    /**
     * Fired when direct_socket.UDPSocket connection is opened.
     */
    export type directUDPSocketOpenedPayload = {
      identifier: RequestId;
      localAddr: string;
      /**
       * Expected to be unsigned integer.
       */
      localPort: number;
      timestamp: MonotonicTime;
      remoteAddr?: string;
      /**
       * Expected to be unsigned integer.
       */
      remotePort?: number;
    }
    /**
     * Fired when direct_socket.UDPSocket is aborted.
     */
    export type directUDPSocketAbortedPayload = {
      identifier: RequestId;
      errorMessage: string;
      timestamp: MonotonicTime;
    }
    /**
     * Fired when direct_socket.UDPSocket is closed.
     */
    export type directUDPSocketClosedPayload = {
      identifier: RequestId;
      timestamp: MonotonicTime;
    }
    /**
     * Fired when message is sent to udp direct socket stream.
     */
    export type directUDPSocketChunkSentPayload = {
      identifier: RequestId;
      message: DirectUDPMessage;
      timestamp: MonotonicTime;
    }
    /**
     * Fired when message is received from udp direct socket stream.
     */
    export type directUDPSocketChunkReceivedPayload = {
      identifier: RequestId;
      message: DirectUDPMessage;
      timestamp: MonotonicTime;
    }
    /**
     * Fired when additional information about a requestWillBeSent event is available from the
network stack. Not every requestWillBeSent event will have an additional
requestWillBeSentExtraInfo fired for it, and there is no guarantee whether requestWillBeSent
or requestWillBeSentExtraInfo will be fired first for the same request.
     */
    export type requestWillBeSentExtraInfoPayload = {
      /**
       * Request identifier. Used to match this information to an existing requestWillBeSent event.
       */
      requestId: RequestId;
      /**
       * A list of cookies potentially associated to the requested URL. This includes both cookies sent with
the request and the ones not sent; the latter are distinguished by having blockedReasons field set.
       */
      associatedCookies: AssociatedCookie[];
      /**
       * Raw request headers as they will be sent over the wire.
       */
      headers: Headers;
      /**
       * Connection timing information for the request.
       */
      connectTiming: ConnectTiming;
      /**
       * How the request site's device bound sessions were used during this request.
       */
      deviceBoundSessionUsages?: DeviceBoundSessionWithUsage[];
      /**
       * The client security state set for the request.
       */
      clientSecurityState?: ClientSecurityState;
      /**
       * Whether the site has partitioned cookies stored in a partition different than the current one.
       */
      siteHasCookieInOtherPartition?: boolean;
      /**
       * The network conditions id if this request was affected by network conditions configured via
emulateNetworkConditionsByRule.
       */
      appliedNetworkConditionsId?: string;
    }
    /**
     * Fired when additional information about a responseReceived event is available from the network
stack. Not every responseReceived event will have an additional responseReceivedExtraInfo for
it, and responseReceivedExtraInfo may be fired before or after responseReceived.
     */
    export type responseReceivedExtraInfoPayload = {
      /**
       * Request identifier. Used to match this information to another responseReceived event.
       */
      requestId: RequestId;
      /**
       * A list of cookies which were not stored from the response along with the corresponding
reasons for blocking. The cookies here may not be valid due to syntax errors, which
are represented by the invalid cookie line string instead of a proper cookie.
       */
      blockedCookies: BlockedSetCookieWithReason[];
      /**
       * Raw response headers as they were received over the wire.
Duplicate headers in the response are represented as a single key with their values
concatentated using `\n` as the separator.
See also `headersText` that contains verbatim text for HTTP/1.*.
       */
      headers: Headers;
      /**
       * The IP address space of the resource. The address space can only be determined once the transport
established the connection, so we can't send it in `requestWillBeSentExtraInfo`.
       */
      resourceIPAddressSpace: IPAddressSpace;
      /**
       * The status code of the response. This is useful in cases the request failed and no responseReceived
event is triggered, which is the case for, e.g., CORS errors. This is also the correct status code
for cached requests, where the status in responseReceived is a 200 and this will be 304.
       */
      statusCode: number;
      /**
       * Raw response header text as it was received over the wire. The raw text may not always be
available, such as in the case of HTTP/2 or QUIC.
       */
      headersText?: string;
      /**
       * The cookie partition key that will be used to store partitioned cookies set in this response.
Only sent when partitioned cookies are enabled.
       */
      cookiePartitionKey?: CookiePartitionKey;
      /**
       * True if partitioned cookies are enabled, but the partition key is not serializable to string.
       */
      cookiePartitionKeyOpaque?: boolean;
      /**
       * A list of cookies which should have been blocked by 3PCD but are exempted and stored from
the response with the corresponding reason.
       */
      exemptedCookies?: ExemptedSetCookieWithReason[];
    }
    /**
     * Fired when 103 Early Hints headers is received in addition to the common response.
Not every responseReceived event will have an responseReceivedEarlyHints fired.
Only one responseReceivedEarlyHints may be fired for eached responseReceived event.
     */
    export type responseReceivedEarlyHintsPayload = {
      /**
       * Request identifier. Used to match this information to another responseReceived event.
       */
      requestId: RequestId;
      /**
       * Raw response headers as they were received over the wire.
Duplicate headers in the response are represented as a single key with their values
concatentated using `\n` as the separator.
See also `headersText` that contains verbatim text for HTTP/1.*.
       */
      headers: Headers;
    }
    /**
     * Fired exactly once for each Trust Token operation. Depending on
the type of the operation and whether the operation succeeded or
failed, the event is fired before the corresponding request was sent
or after the response was received.
     */
    export type trustTokenOperationDonePayload = {
      /**
       * Detailed success or error status of the operation.
'AlreadyExists' also signifies a successful operation, as the result
of the operation already exists und thus, the operation was abort
preemptively (e.g. a cache hit).
       */
      status: "Ok"|"InvalidArgument"|"MissingIssuerKeys"|"FailedPrecondition"|"ResourceExhausted"|"AlreadyExists"|"ResourceLimited"|"Unauthorized"|"BadResponse"|"InternalError"|"UnknownError"|"FulfilledLocally"|"SiteIssuerLimit";
      type: TrustTokenOperationType;
      requestId: RequestId;
      /**
       * Top level origin. The context in which the operation was attempted.
       */
      topLevelOrigin?: string;
      /**
       * Origin of the issuer in case of a "Issuance" or "Redemption" operation.
       */
      issuerOrigin?: string;
      /**
       * The number of obtained Trust Tokens on a successful "Issuance" operation.
       */
      issuedTokenCount?: number;
    }
    /**
     * Fired once security policy has been updated.
     */
    export type policyUpdatedPayload = void;
    /**
     * Is sent whenever a new report is added.
And after 'enableReportingApi' for all existing reports.
     */
    export type reportingApiReportAddedPayload = {
      report: ReportingApiReport;
    }
    export type reportingApiReportUpdatedPayload = {
      report: ReportingApiReport;
    }
    export type reportingApiEndpointsChangedForOriginPayload = {
      /**
       * Origin of the document(s) which configured the endpoints.
       */
      origin: string;
      endpoints: ReportingApiEndpoint[];
    }
    /**
     * Triggered when the initial set of device bound sessions is added.
     */
    export type deviceBoundSessionsAddedPayload = {
      /**
       * The device bound sessions.
       */
      sessions: DeviceBoundSession[];
    }
    /**
     * Triggered when a device bound session event occurs.
     */
    export type deviceBoundSessionEventOccurredPayload = {
      /**
       * A unique identifier for this session event.
       */
      eventId: DeviceBoundSessionEventId;
      /**
       * The site this session event is associated with.
       */
      site: string;
      /**
       * Whether this event was considered successful.
       */
      succeeded: boolean;
      /**
       * The session ID this event is associated with. May not be populated for
failed events.
       */
      sessionId?: string;
      /**
       * The below are the different session event type details. Exactly one is populated.
       */
      creationEventDetails?: CreationEventDetails;
      refreshEventDetails?: RefreshEventDetails;
      terminationEventDetails?: TerminationEventDetails;
      challengeEventDetails?: ChallengeEventDetails;
    }
    
    /**
     * Sets a list of content encodings that will be accepted. Empty list means no encoding is accepted.
     */
    export type setAcceptedEncodingsParameters = {
      /**
       * List of accepted content encodings.
       */
      encodings: ContentEncoding[];
    }
    export type setAcceptedEncodingsReturnValue = {
    }
    /**
     * Clears accepted encodings set by setAcceptedEncodings
     */
    export type clearAcceptedEncodingsOverrideParameters = {
    }
    export type clearAcceptedEncodingsOverrideReturnValue = {
    }
    /**
     * Tells whether clearing browser cache is supported.
     */
    export type canClearBrowserCacheParameters = {
    }
    export type canClearBrowserCacheReturnValue = {
      /**
       * True if browser cache can be cleared.
       */
      result: boolean;
    }
    /**
     * Tells whether clearing browser cookies is supported.
     */
    export type canClearBrowserCookiesParameters = {
    }
    export type canClearBrowserCookiesReturnValue = {
      /**
       * True if browser cookies can be cleared.
       */
      result: boolean;
    }
    /**
     * Tells whether emulation of network conditions is supported.
     */
    export type canEmulateNetworkConditionsParameters = {
    }
    export type canEmulateNetworkConditionsReturnValue = {
      /**
       * True if emulation of network conditions is supported.
       */
      result: boolean;
    }
    /**
     * Clears browser cache.
     */
    export type clearBrowserCacheParameters = {
    }
    export type clearBrowserCacheReturnValue = {
    }
    /**
     * Clears browser cookies.
     */
    export type clearBrowserCookiesParameters = {
    }
    export type clearBrowserCookiesReturnValue = {
    }
    /**
     * Response to Network.requestIntercepted which either modifies the request to continue with any
modifications, or blocks it, or completes it with the provided response bytes. If a network
fetch occurs as a result which encounters a redirect an additional Network.requestIntercepted
event will be sent with the same InterceptionId.
Deprecated, use Fetch.continueRequest, Fetch.fulfillRequest and Fetch.failRequest instead.
     */
    export type continueInterceptedRequestParameters = {
      interceptionId: InterceptionId;
      /**
       * If set this causes the request to fail with the given reason. Passing `Aborted` for requests
marked with `isNavigationRequest` also cancels the navigation. Must not be set in response
to an authChallenge.
       */
      errorReason?: ErrorReason;
      /**
       * If set the requests completes using with the provided base64 encoded raw response, including
HTTP status line and headers etc... Must not be set in response to an authChallenge.
       */
      rawResponse?: binary;
      /**
       * If set the request url will be modified in a way that's not observable by page. Must not be
set in response to an authChallenge.
       */
      url?: string;
      /**
       * If set this allows the request method to be overridden. Must not be set in response to an
authChallenge.
       */
      method?: string;
      /**
       * If set this allows postData to be set. Must not be set in response to an authChallenge.
       */
      postData?: string;
      /**
       * If set this allows the request headers to be changed. Must not be set in response to an
authChallenge.
       */
      headers?: Headers;
      /**
       * Response to a requestIntercepted with an authChallenge. Must not be set otherwise.
       */
      authChallengeResponse?: AuthChallengeResponse;
    }
    export type continueInterceptedRequestReturnValue = {
    }
    /**
     * Deletes browser cookies with matching name and url or domain/path/partitionKey pair.
     */
    export type deleteCookiesParameters = {
      /**
       * Name of the cookies to remove.
       */
      name: string;
      /**
       * If specified, deletes all the cookies with the given name where domain and path match
provided URL.
       */
      url?: string;
      /**
       * If specified, deletes only cookies with the exact domain.
       */
      domain?: string;
      /**
       * If specified, deletes only cookies with the exact path.
       */
      path?: string;
      /**
       * If specified, deletes only cookies with the the given name and partitionKey where
all partition key attributes match the cookie partition key attribute.
       */
      partitionKey?: CookiePartitionKey;
    }
    export type deleteCookiesReturnValue = {
    }
    /**
     * Disables network tracking, prevents network events from being sent to the client.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Activates emulation of network conditions. This command is deprecated in favor of the emulateNetworkConditionsByRule
and overrideNetworkState commands, which can be used together to the same effect.
     */
    export type emulateNetworkConditionsParameters = {
      /**
       * True to emulate internet disconnection.
       */
      offline: boolean;
      /**
       * Minimum latency from request sent to response headers received (ms).
       */
      latency: number;
      /**
       * Maximal aggregated download throughput (bytes/sec). -1 disables download throttling.
       */
      downloadThroughput: number;
      /**
       * Maximal aggregated upload throughput (bytes/sec).  -1 disables upload throttling.
       */
      uploadThroughput: number;
      /**
       * Connection type if known.
       */
      connectionType?: ConnectionType;
      /**
       * WebRTC packet loss (percent, 0-100). 0 disables packet loss emulation, 100 drops all the packets.
       */
      packetLoss?: number;
      /**
       * WebRTC packet queue length (packet). 0 removes any queue length limitations.
       */
      packetQueueLength?: number;
      /**
       * WebRTC packetReordering feature.
       */
      packetReordering?: boolean;
    }
    export type emulateNetworkConditionsReturnValue = {
    }
    /**
     * Activates emulation of network conditions for individual requests using URL match patterns. Unlike the deprecated
Network.emulateNetworkConditions this method does not affect `navigator` state. Use Network.overrideNetworkState to
explicitly modify `navigator` behavior.
     */
    export type emulateNetworkConditionsByRuleParameters = {
      /**
       * True to emulate internet disconnection.
       */
      offline: boolean;
      /**
       * Configure conditions for matching requests. If multiple entries match a request, the first entry wins.  Global
conditions can be configured by leaving the urlPattern for the conditions empty. These global conditions are
also applied for throttling of p2p connections.
       */
      matchedNetworkConditions: NetworkConditions[];
    }
    export type emulateNetworkConditionsByRuleReturnValue = {
      /**
       * An id for each entry in matchedNetworkConditions. The id will be included in the requestWillBeSentExtraInfo for
requests affected by a rule.
       */
      ruleIds: string[];
    }
    /**
     * Override the state of navigator.onLine and navigator.connection.
     */
    export type overrideNetworkStateParameters = {
      /**
       * True to emulate internet disconnection.
       */
      offline: boolean;
      /**
       * Minimum latency from request sent to response headers received (ms).
       */
      latency: number;
      /**
       * Maximal aggregated download throughput (bytes/sec). -1 disables download throttling.
       */
      downloadThroughput: number;
      /**
       * Maximal aggregated upload throughput (bytes/sec).  -1 disables upload throttling.
       */
      uploadThroughput: number;
      /**
       * Connection type if known.
       */
      connectionType?: ConnectionType;
    }
    export type overrideNetworkStateReturnValue = {
    }
    /**
     * Enables network tracking, network events will now be delivered to the client.
     */
    export type enableParameters = {
      /**
       * Buffer size in bytes to use when preserving network payloads (XHRs, etc).
This is the maximum number of bytes that will be collected by this
DevTools session.
       */
      maxTotalBufferSize?: number;
      /**
       * Per-resource buffer size in bytes to use when preserving network payloads (XHRs, etc).
       */
      maxResourceBufferSize?: number;
      /**
       * Longest post body size (in bytes) that would be included in requestWillBeSent notification
       */
      maxPostDataSize?: number;
      /**
       * Whether DirectSocket chunk send/receive events should be reported.
       */
      reportDirectSocketTraffic?: boolean;
      /**
       * Enable storing response bodies outside of renderer, so that these survive
a cross-process navigation. Requires maxTotalBufferSize to be set.
Currently defaults to false. This field is being deprecated in favor of the dedicated
configureDurableMessages command, due to the possibility of deadlocks when awaiting
Network.enable before issuing Runtime.runIfWaitingForDebugger.
       */
      enableDurableMessages?: boolean;
    }
    export type enableReturnValue = {
    }
    /**
     * Configures storing response bodies outside of renderer, so that these survive
a cross-process navigation.
If maxTotalBufferSize is not set, durable messages are disabled.
     */
    export type configureDurableMessagesParameters = {
      /**
       * Buffer size in bytes to use when preserving network payloads (XHRs, etc).
       */
      maxTotalBufferSize?: number;
      /**
       * Per-resource buffer size in bytes to use when preserving network payloads (XHRs, etc).
       */
      maxResourceBufferSize?: number;
    }
    export type configureDurableMessagesReturnValue = {
    }
    /**
     * Returns all browser cookies. Depending on the backend support, will return detailed cookie
information in the `cookies` field.
Deprecated. Use Storage.getCookies instead.
     */
    export type getAllCookiesParameters = {
    }
    export type getAllCookiesReturnValue = {
      /**
       * Array of cookie objects.
       */
      cookies: Cookie[];
    }
    /**
     * Returns the DER-encoded certificate.
     */
    export type getCertificateParameters = {
      /**
       * Origin to get certificate for.
       */
      origin: string;
    }
    export type getCertificateReturnValue = {
      tableNames: string[];
    }
    /**
     * Returns all browser cookies for the current URL. Depending on the backend support, will return
detailed cookie information in the `cookies` field.
     */
    export type getCookiesParameters = {
      /**
       * The list of URLs for which applicable cookies will be fetched.
If not specified, it's assumed to be set to the list containing
the URLs of the page and all of its subframes.
       */
      urls?: string[];
    }
    export type getCookiesReturnValue = {
      /**
       * Array of cookie objects.
       */
      cookies: Cookie[];
    }
    /**
     * Returns content served for the given request.
     */
    export type getResponseBodyParameters = {
      /**
       * Identifier of the network request to get content for.
       */
      requestId: RequestId;
    }
    export type getResponseBodyReturnValue = {
      /**
       * Response body.
       */
      body: string;
      /**
       * True, if content was sent as base64.
       */
      base64Encoded: boolean;
    }
    /**
     * Returns post data sent with the request. Returns an error when no data was sent with the request.
     */
    export type getRequestPostDataParameters = {
      /**
       * Identifier of the network request to get content for.
       */
      requestId: RequestId;
    }
    export type getRequestPostDataReturnValue = {
      /**
       * Request body string, omitting files from multipart requests
       */
      postData: string;
      /**
       * True, if content was sent as base64.
       */
      base64Encoded: boolean;
    }
    /**
     * Returns content served for the given currently intercepted request.
     */
    export type getResponseBodyForInterceptionParameters = {
      /**
       * Identifier for the intercepted request to get body for.
       */
      interceptionId: InterceptionId;
    }
    export type getResponseBodyForInterceptionReturnValue = {
      /**
       * Response body.
       */
      body: string;
      /**
       * True, if content was sent as base64.
       */
      base64Encoded: boolean;
    }
    /**
     * Returns a handle to the stream representing the response body. Note that after this command,
the intercepted request can't be continued as is -- you either need to cancel it or to provide
the response body. The stream only supports sequential read, IO.read will fail if the position
is specified.
     */
    export type takeResponseBodyForInterceptionAsStreamParameters = {
      interceptionId: InterceptionId;
    }
    export type takeResponseBodyForInterceptionAsStreamReturnValue = {
      stream: IO.StreamHandle;
    }
    /**
     * This method sends a new XMLHttpRequest which is identical to the original one. The following
parameters should be identical: method, url, async, request body, extra headers, withCredentials
attribute, user, password.
     */
    export type replayXHRParameters = {
      /**
       * Identifier of XHR to replay.
       */
      requestId: RequestId;
    }
    export type replayXHRReturnValue = {
    }
    /**
     * Searches for given string in response content.
     */
    export type searchInResponseBodyParameters = {
      /**
       * Identifier of the network response to search.
       */
      requestId: RequestId;
      /**
       * String to search for.
       */
      query: string;
      /**
       * If true, search is case sensitive.
       */
      caseSensitive?: boolean;
      /**
       * If true, treats string parameter as regex.
       */
      isRegex?: boolean;
    }
    export type searchInResponseBodyReturnValue = {
      /**
       * List of search matches.
       */
      result: Debugger.SearchMatch[];
    }
    /**
     * Blocks URLs from loading.
     */
    export type setBlockedURLsParameters = {
      /**
       * Patterns to match in the order in which they are given. These patterns
also take precedence over any wildcard patterns defined in `urls`.
       */
      urlPatterns?: BlockPattern[];
      /**
       * URL patterns to block. Wildcards ('*') are allowed.
       */
      urls?: string[];
    }
    export type setBlockedURLsReturnValue = {
    }
    /**
     * Toggles ignoring of service worker for each request.
     */
    export type setBypassServiceWorkerParameters = {
      /**
       * Bypass service worker and load from network.
       */
      bypass: boolean;
    }
    export type setBypassServiceWorkerReturnValue = {
    }
    /**
     * Toggles ignoring cache for each request. If `true`, cache will not be used.
     */
    export type setCacheDisabledParameters = {
      /**
       * Cache disabled state.
       */
      cacheDisabled: boolean;
    }
    export type setCacheDisabledReturnValue = {
    }
    /**
     * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist.
     */
    export type setCookieParameters = {
      /**
       * Cookie name.
       */
      name: string;
      /**
       * Cookie value.
       */
      value: string;
      /**
       * The request-URI to associate with the setting of the cookie. This value can affect the
default domain, path, source port, and source scheme values of the created cookie.
       */
      url?: string;
      /**
       * Cookie domain.
       */
      domain?: string;
      /**
       * Cookie path.
       */
      path?: string;
      /**
       * True if cookie is secure.
       */
      secure?: boolean;
      /**
       * True if cookie is http-only.
       */
      httpOnly?: boolean;
      /**
       * Cookie SameSite type.
       */
      sameSite?: CookieSameSite;
      /**
       * Cookie expiration date, session cookie if not set
       */
      expires?: TimeSinceEpoch;
      /**
       * Cookie Priority type.
       */
      priority?: CookiePriority;
      /**
       * Cookie source scheme type.
       */
      sourceScheme?: CookieSourceScheme;
      /**
       * Cookie source port. Valid values are {-1, [1, 65535]}, -1 indicates an unspecified port.
An unspecified port value allows protocol clients to emulate legacy cookie scope for the port.
This is a temporary ability and it will be removed in the future.
       */
      sourcePort?: number;
      /**
       * Cookie partition key. If not set, the cookie will be set as not partitioned.
       */
      partitionKey?: CookiePartitionKey;
    }
    export type setCookieReturnValue = {
      /**
       * Always set to true. If an error occurs, the response indicates protocol error.
       */
      success: boolean;
    }
    /**
     * Sets given cookies.
     */
    export type setCookiesParameters = {
      /**
       * Cookies to be set.
       */
      cookies: CookieParam[];
    }
    export type setCookiesReturnValue = {
    }
    /**
     * Specifies whether to always send extra HTTP headers with the requests from this page.
     */
    export type setExtraHTTPHeadersParameters = {
      /**
       * Map with extra HTTP headers.
       */
      headers: Headers;
    }
    export type setExtraHTTPHeadersReturnValue = {
    }
    /**
     * Specifies whether to attach a page script stack id in requests
     */
    export type setAttachDebugStackParameters = {
      /**
       * Whether to attach a page script stack for debugging purpose.
       */
      enabled: boolean;
    }
    export type setAttachDebugStackReturnValue = {
    }
    /**
     * Sets the requests to intercept that match the provided patterns and optionally resource types.
Deprecated, please use Fetch.enable instead.
     */
    export type setRequestInterceptionParameters = {
      /**
       * Requests matching any of these patterns will be forwarded and wait for the corresponding
continueInterceptedRequest call.
       */
      patterns: RequestPattern[];
    }
    export type setRequestInterceptionReturnValue = {
    }
    /**
     * Allows overriding user agent with the given string.
     */
    export type setUserAgentOverrideParameters = {
      /**
       * User agent to use.
       */
      userAgent: string;
      /**
       * Browser language to emulate.
       */
      acceptLanguage?: string;
      /**
       * The platform navigator.platform should return.
       */
      platform?: string;
      /**
       * To be sent in Sec-CH-UA-* headers and returned in navigator.userAgentData
       */
      userAgentMetadata?: Emulation.UserAgentMetadata;
    }
    export type setUserAgentOverrideReturnValue = {
    }
    /**
     * Enables streaming of the response for the given requestId.
If enabled, the dataReceived event contains the data that was received during streaming.
     */
    export type streamResourceContentParameters = {
      /**
       * Identifier of the request to stream.
       */
      requestId: RequestId;
    }
    export type streamResourceContentReturnValue = {
      /**
       * Data that has been buffered until streaming is enabled.
       */
      bufferedData: binary;
    }
    /**
     * Returns information about the COEP/COOP isolation status.
     */
    export type getSecurityIsolationStatusParameters = {
      /**
       * If no frameId is provided, the status of the target is provided.
       */
      frameId?: Page.FrameId;
    }
    export type getSecurityIsolationStatusReturnValue = {
      status: SecurityIsolationStatus;
    }
    /**
     * Enables tracking for the Reporting API, events generated by the Reporting API will now be delivered to the client.
Enabling triggers 'reportingApiReportAdded' for all existing reports.
     */
    export type enableReportingApiParameters = {
      /**
       * Whether to enable or disable events for the Reporting API
       */
      enable: boolean;
    }
    export type enableReportingApiReturnValue = {
    }
    /**
     * Sets up tracking device bound sessions and fetching of initial set of sessions.
     */
    export type enableDeviceBoundSessionsParameters = {
      /**
       * Whether to enable or disable events.
       */
      enable: boolean;
    }
    export type enableDeviceBoundSessionsReturnValue = {
    }
    /**
     * Fetches the schemeful site for a specific origin.
     */
    export type fetchSchemefulSiteParameters = {
      /**
       * The URL origin.
       */
      origin: string;
    }
    export type fetchSchemefulSiteReturnValue = {
      /**
       * The corresponding schemeful site.
       */
      schemefulSite: string;
    }
    /**
     * Fetches the resource and returns the content.
     */
    export type loadNetworkResourceParameters = {
      /**
       * Frame id to get the resource for. Mandatory for frame targets, and
should be omitted for worker targets.
       */
      frameId?: Page.FrameId;
      /**
       * URL of the resource to get content for.
       */
      url: string;
      /**
       * Options for the request.
       */
      options: LoadNetworkResourceOptions;
    }
    export type loadNetworkResourceReturnValue = {
      resource: LoadNetworkResourcePageResult;
    }
    /**
     * Sets Controls for third-party cookie access
Page reload is required before the new cookie behavior will be observed
     */
    export type setCookieControlsParameters = {
      /**
       * Whether 3pc restriction is enabled.
       */
      enableThirdPartyCookieRestriction: boolean;
      /**
       * Whether 3pc grace period exception should be enabled; false by default.
       */
      disableThirdPartyCookieMetadata: boolean;
      /**
       * Whether 3pc heuristics exceptions should be enabled; false by default.
       */
      disableThirdPartyCookieHeuristics: boolean;
    }
    export type setCookieControlsReturnValue = {
    }
  }
  
  /**
   * This domain provides various functionality related to drawing atop the inspected page.
   */
  export namespace Overlay {
    /**
     * Configuration data for drawing the source order of an elements children.
     */
    export interface SourceOrderConfig {
      /**
       * the color to outline the given element in.
       */
      parentOutlineColor: DOM.RGBA;
      /**
       * the color to outline the child elements in.
       */
      childOutlineColor: DOM.RGBA;
    }
    /**
     * Configuration data for the highlighting of Grid elements.
     */
    export interface GridHighlightConfig {
      /**
       * Whether the extension lines from grid cells to the rulers should be shown (default: false).
       */
      showGridExtensionLines?: boolean;
      /**
       * Show Positive line number labels (default: false).
       */
      showPositiveLineNumbers?: boolean;
      /**
       * Show Negative line number labels (default: false).
       */
      showNegativeLineNumbers?: boolean;
      /**
       * Show area name labels (default: false).
       */
      showAreaNames?: boolean;
      /**
       * Show line name labels (default: false).
       */
      showLineNames?: boolean;
      /**
       * Show track size labels (default: false).
       */
      showTrackSizes?: boolean;
      /**
       * The grid container border highlight color (default: transparent).
       */
      gridBorderColor?: DOM.RGBA;
      /**
       * The cell border color (default: transparent). Deprecated, please use rowLineColor and columnLineColor instead.
       */
      cellBorderColor?: DOM.RGBA;
      /**
       * The row line color (default: transparent).
       */
      rowLineColor?: DOM.RGBA;
      /**
       * The column line color (default: transparent).
       */
      columnLineColor?: DOM.RGBA;
      /**
       * Whether the grid border is dashed (default: false).
       */
      gridBorderDash?: boolean;
      /**
       * Whether the cell border is dashed (default: false). Deprecated, please us rowLineDash and columnLineDash instead.
       */
      cellBorderDash?: boolean;
      /**
       * Whether row lines are dashed (default: false).
       */
      rowLineDash?: boolean;
      /**
       * Whether column lines are dashed (default: false).
       */
      columnLineDash?: boolean;
      /**
       * The row gap highlight fill color (default: transparent).
       */
      rowGapColor?: DOM.RGBA;
      /**
       * The row gap hatching fill color (default: transparent).
       */
      rowHatchColor?: DOM.RGBA;
      /**
       * The column gap highlight fill color (default: transparent).
       */
      columnGapColor?: DOM.RGBA;
      /**
       * The column gap hatching fill color (default: transparent).
       */
      columnHatchColor?: DOM.RGBA;
      /**
       * The named grid areas border color (Default: transparent).
       */
      areaBorderColor?: DOM.RGBA;
      /**
       * The grid container background color (Default: transparent).
       */
      gridBackgroundColor?: DOM.RGBA;
    }
    /**
     * Configuration data for the highlighting of Flex container elements.
     */
    export interface FlexContainerHighlightConfig {
      /**
       * The style of the container border
       */
      containerBorder?: LineStyle;
      /**
       * The style of the separator between lines
       */
      lineSeparator?: LineStyle;
      /**
       * The style of the separator between items
       */
      itemSeparator?: LineStyle;
      /**
       * Style of content-distribution space on the main axis (justify-content).
       */
      mainDistributedSpace?: BoxStyle;
      /**
       * Style of content-distribution space on the cross axis (align-content).
       */
      crossDistributedSpace?: BoxStyle;
      /**
       * Style of empty space caused by row gaps (gap/row-gap).
       */
      rowGapSpace?: BoxStyle;
      /**
       * Style of empty space caused by columns gaps (gap/column-gap).
       */
      columnGapSpace?: BoxStyle;
      /**
       * Style of the self-alignment line (align-items).
       */
      crossAlignment?: LineStyle;
    }
    /**
     * Configuration data for the highlighting of Flex item elements.
     */
    export interface FlexItemHighlightConfig {
      /**
       * Style of the box representing the item's base size
       */
      baseSizeBox?: BoxStyle;
      /**
       * Style of the border around the box representing the item's base size
       */
      baseSizeBorder?: LineStyle;
      /**
       * Style of the arrow representing if the item grew or shrank
       */
      flexibilityArrow?: LineStyle;
    }
    /**
     * Style information for drawing a line.
     */
    export interface LineStyle {
      /**
       * The color of the line (default: transparent)
       */
      color?: DOM.RGBA;
      /**
       * The line pattern (default: solid)
       */
      pattern?: "dashed"|"dotted";
    }
    /**
     * Style information for drawing a box.
     */
    export interface BoxStyle {
      /**
       * The background color for the box (default: transparent)
       */
      fillColor?: DOM.RGBA;
      /**
       * The hatching color for the box (default: transparent)
       */
      hatchColor?: DOM.RGBA;
    }
    export type ContrastAlgorithm = "aa"|"aaa"|"apca";
    /**
     * Configuration data for the highlighting of page elements.
     */
    export interface HighlightConfig {
      /**
       * Whether the node info tooltip should be shown (default: false).
       */
      showInfo?: boolean;
      /**
       * Whether the node styles in the tooltip (default: false).
       */
      showStyles?: boolean;
      /**
       * Whether the rulers should be shown (default: false).
       */
      showRulers?: boolean;
      /**
       * Whether the a11y info should be shown (default: true).
       */
      showAccessibilityInfo?: boolean;
      /**
       * Whether the extension lines from node to the rulers should be shown (default: false).
       */
      showExtensionLines?: boolean;
      /**
       * The content box highlight fill color (default: transparent).
       */
      contentColor?: DOM.RGBA;
      /**
       * The padding highlight fill color (default: transparent).
       */
      paddingColor?: DOM.RGBA;
      /**
       * The border highlight fill color (default: transparent).
       */
      borderColor?: DOM.RGBA;
      /**
       * The margin highlight fill color (default: transparent).
       */
      marginColor?: DOM.RGBA;
      /**
       * The event target element highlight fill color (default: transparent).
       */
      eventTargetColor?: DOM.RGBA;
      /**
       * The shape outside fill color (default: transparent).
       */
      shapeColor?: DOM.RGBA;
      /**
       * The shape margin fill color (default: transparent).
       */
      shapeMarginColor?: DOM.RGBA;
      /**
       * The grid layout color (default: transparent).
       */
      cssGridColor?: DOM.RGBA;
      /**
       * The color format used to format color styles (default: hex).
       */
      colorFormat?: ColorFormat;
      /**
       * The grid layout highlight configuration (default: all transparent).
       */
      gridHighlightConfig?: GridHighlightConfig;
      /**
       * The flex container highlight configuration (default: all transparent).
       */
      flexContainerHighlightConfig?: FlexContainerHighlightConfig;
      /**
       * The flex item highlight configuration (default: all transparent).
       */
      flexItemHighlightConfig?: FlexItemHighlightConfig;
      /**
       * The contrast algorithm to use for the contrast ratio (default: aa).
       */
      contrastAlgorithm?: ContrastAlgorithm;
      /**
       * The container query container highlight configuration (default: all transparent).
       */
      containerQueryContainerHighlightConfig?: ContainerQueryContainerHighlightConfig;
    }
    export type ColorFormat = "rgb"|"hsl"|"hwb"|"hex";
    /**
     * Configurations for Persistent Grid Highlight
     */
    export interface GridNodeHighlightConfig {
      /**
       * A descriptor for the highlight appearance.
       */
      gridHighlightConfig: GridHighlightConfig;
      /**
       * Identifier of the node to highlight.
       */
      nodeId: DOM.NodeId;
    }
    export interface FlexNodeHighlightConfig {
      /**
       * A descriptor for the highlight appearance of flex containers.
       */
      flexContainerHighlightConfig: FlexContainerHighlightConfig;
      /**
       * Identifier of the node to highlight.
       */
      nodeId: DOM.NodeId;
    }
    export interface ScrollSnapContainerHighlightConfig {
      /**
       * The style of the snapport border (default: transparent)
       */
      snapportBorder?: LineStyle;
      /**
       * The style of the snap area border (default: transparent)
       */
      snapAreaBorder?: LineStyle;
      /**
       * The margin highlight fill color (default: transparent).
       */
      scrollMarginColor?: DOM.RGBA;
      /**
       * The padding highlight fill color (default: transparent).
       */
      scrollPaddingColor?: DOM.RGBA;
    }
    export interface ScrollSnapHighlightConfig {
      /**
       * A descriptor for the highlight appearance of scroll snap containers.
       */
      scrollSnapContainerHighlightConfig: ScrollSnapContainerHighlightConfig;
      /**
       * Identifier of the node to highlight.
       */
      nodeId: DOM.NodeId;
    }
    /**
     * Configuration for dual screen hinge
     */
    export interface HingeConfig {
      /**
       * A rectangle represent hinge
       */
      rect: DOM.Rect;
      /**
       * The content box highlight fill color (default: a dark color).
       */
      contentColor?: DOM.RGBA;
      /**
       * The content box highlight outline color (default: transparent).
       */
      outlineColor?: DOM.RGBA;
    }
    /**
     * Configuration for Window Controls Overlay
     */
    export interface WindowControlsOverlayConfig {
      /**
       * Whether the title bar CSS should be shown when emulating the Window Controls Overlay.
       */
      showCSS: boolean;
      /**
       * Selected platforms to show the overlay.
       */
      selectedPlatform: string;
      /**
       * The theme color defined in app manifest.
       */
      themeColor: string;
    }
    export interface ContainerQueryHighlightConfig {
      /**
       * A descriptor for the highlight appearance of container query containers.
       */
      containerQueryContainerHighlightConfig: ContainerQueryContainerHighlightConfig;
      /**
       * Identifier of the container node to highlight.
       */
      nodeId: DOM.NodeId;
    }
    export interface ContainerQueryContainerHighlightConfig {
      /**
       * The style of the container border.
       */
      containerBorder?: LineStyle;
      /**
       * The style of the descendants' borders.
       */
      descendantBorder?: LineStyle;
    }
    export interface IsolatedElementHighlightConfig {
      /**
       * A descriptor for the highlight appearance of an element in isolation mode.
       */
      isolationModeHighlightConfig: IsolationModeHighlightConfig;
      /**
       * Identifier of the isolated element to highlight.
       */
      nodeId: DOM.NodeId;
    }
    export interface IsolationModeHighlightConfig {
      /**
       * The fill color of the resizers (default: transparent).
       */
      resizerColor?: DOM.RGBA;
      /**
       * The fill color for resizer handles (default: transparent).
       */
      resizerHandleColor?: DOM.RGBA;
      /**
       * The fill color for the mask covering non-isolated elements (default: transparent).
       */
      maskColor?: DOM.RGBA;
    }
    export type InspectMode = "searchForNode"|"searchForUAShadowDOM"|"captureAreaScreenshot"|"none";
    export interface InspectedElementAnchorConfig {
      /**
       * Identifier of the node to highlight.
       */
      nodeId?: DOM.NodeId;
      /**
       * Identifier of the backend node to highlight.
       */
      backendNodeId?: DOM.BackendNodeId;
    }
    
    /**
     * Fired when the node should be inspected. This happens after call to `setInspectMode` or when
user manually inspects an element.
     */
    export type inspectNodeRequestedPayload = {
      /**
       * Id of the node to inspect.
       */
      backendNodeId: DOM.BackendNodeId;
    }
    /**
     * Fired when the node should be highlighted. This happens after call to `setInspectMode`.
     */
    export type nodeHighlightRequestedPayload = {
      nodeId: DOM.NodeId;
    }
    /**
     * Fired when user asks to capture screenshot of some area on the page.
     */
    export type screenshotRequestedPayload = {
      /**
       * Viewport to capture, in device independent pixels (dip).
       */
      viewport: Page.Viewport;
    }
    /**
     * Fired when user asks to show the Inspect panel.
     */
    export type inspectPanelShowRequestedPayload = {
      /**
       * Id of the node to show in the panel.
       */
      backendNodeId: DOM.BackendNodeId;
    }
    /**
     * Fired when user asks to restore the Inspected Element floating window.
     */
    export type inspectedElementWindowRestoredPayload = {
      /**
       * Id of the node to restore the floating window for.
       */
      backendNodeId: DOM.BackendNodeId;
    }
    /**
     * Fired when user cancels the inspect mode.
     */
    export type inspectModeCanceledPayload = void;
    
    /**
     * Disables domain notifications.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables domain notifications.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * For testing.
     */
    export type getHighlightObjectForTestParameters = {
      /**
       * Id of the node to get highlight object for.
       */
      nodeId: DOM.NodeId;
      /**
       * Whether to include distance info.
       */
      includeDistance?: boolean;
      /**
       * Whether to include style info.
       */
      includeStyle?: boolean;
      /**
       * The color format to get config with (default: hex).
       */
      colorFormat?: ColorFormat;
      /**
       * Whether to show accessibility info (default: true).
       */
      showAccessibilityInfo?: boolean;
    }
    export type getHighlightObjectForTestReturnValue = {
      /**
       * Highlight data for the node.
       */
      highlight: { [key: string]: string };
    }
    /**
     * For Persistent Grid testing.
     */
    export type getGridHighlightObjectsForTestParameters = {
      /**
       * Ids of the node to get highlight object for.
       */
      nodeIds: DOM.NodeId[];
    }
    export type getGridHighlightObjectsForTestReturnValue = {
      /**
       * Grid Highlight data for the node ids provided.
       */
      highlights: { [key: string]: string };
    }
    /**
     * For Source Order Viewer testing.
     */
    export type getSourceOrderHighlightObjectForTestParameters = {
      /**
       * Id of the node to highlight.
       */
      nodeId: DOM.NodeId;
    }
    export type getSourceOrderHighlightObjectForTestReturnValue = {
      /**
       * Source order highlight data for the node id provided.
       */
      highlight: { [key: string]: string };
    }
    /**
     * Hides any highlight.
     */
    export type hideHighlightParameters = {
    }
    export type hideHighlightReturnValue = {
    }
    /**
     * Highlights owner element of the frame with given id.
Deprecated: Doesn't work reliably and cannot be fixed due to process
separation (the owner node might be in a different process). Determine
the owner node in the client and use highlightNode.
     */
    export type highlightFrameParameters = {
      /**
       * Identifier of the frame to highlight.
       */
      frameId: Page.FrameId;
      /**
       * The content box highlight fill color (default: transparent).
       */
      contentColor?: DOM.RGBA;
      /**
       * The content box highlight outline color (default: transparent).
       */
      contentOutlineColor?: DOM.RGBA;
    }
    export type highlightFrameReturnValue = {
    }
    /**
     * Highlights DOM node with given id or with the given JavaScript object wrapper. Either nodeId or
objectId must be specified.
     */
    export type highlightNodeParameters = {
      /**
       * A descriptor for the highlight appearance.
       */
      highlightConfig: HighlightConfig;
      /**
       * Identifier of the node to highlight.
       */
      nodeId?: DOM.NodeId;
      /**
       * Identifier of the backend node to highlight.
       */
      backendNodeId?: DOM.BackendNodeId;
      /**
       * JavaScript object id of the node to be highlighted.
       */
      objectId?: Runtime.RemoteObjectId;
      /**
       * Selectors to highlight relevant nodes.
       */
      selector?: string;
    }
    export type highlightNodeReturnValue = {
    }
    /**
     * Highlights given quad. Coordinates are absolute with respect to the main frame viewport.
     */
    export type highlightQuadParameters = {
      /**
       * Quad to highlight
       */
      quad: DOM.Quad;
      /**
       * The highlight fill color (default: transparent).
       */
      color?: DOM.RGBA;
      /**
       * The highlight outline color (default: transparent).
       */
      outlineColor?: DOM.RGBA;
    }
    export type highlightQuadReturnValue = {
    }
    /**
     * Highlights given rectangle. Coordinates are absolute with respect to the main frame viewport.
Issue: the method does not handle device pixel ratio (DPR) correctly.
The coordinates currently have to be adjusted by the client
if DPR is not 1 (see crbug.com/437807128).
     */
    export type highlightRectParameters = {
      /**
       * X coordinate
       */
      x: number;
      /**
       * Y coordinate
       */
      y: number;
      /**
       * Rectangle width
       */
      width: number;
      /**
       * Rectangle height
       */
      height: number;
      /**
       * The highlight fill color (default: transparent).
       */
      color?: DOM.RGBA;
      /**
       * The highlight outline color (default: transparent).
       */
      outlineColor?: DOM.RGBA;
    }
    export type highlightRectReturnValue = {
    }
    /**
     * Highlights the source order of the children of the DOM node with given id or with the given
JavaScript object wrapper. Either nodeId or objectId must be specified.
     */
    export type highlightSourceOrderParameters = {
      /**
       * A descriptor for the appearance of the overlay drawing.
       */
      sourceOrderConfig: SourceOrderConfig;
      /**
       * Identifier of the node to highlight.
       */
      nodeId?: DOM.NodeId;
      /**
       * Identifier of the backend node to highlight.
       */
      backendNodeId?: DOM.BackendNodeId;
      /**
       * JavaScript object id of the node to be highlighted.
       */
      objectId?: Runtime.RemoteObjectId;
    }
    export type highlightSourceOrderReturnValue = {
    }
    /**
     * Enters the 'inspect' mode. In this mode, elements that user is hovering over are highlighted.
Backend then generates 'inspectNodeRequested' event upon element selection.
     */
    export type setInspectModeParameters = {
      /**
       * Set an inspection mode.
       */
      mode: InspectMode;
      /**
       * A descriptor for the highlight appearance of hovered-over nodes. May be omitted if `enabled
== false`.
       */
      highlightConfig?: HighlightConfig;
    }
    export type setInspectModeReturnValue = {
    }
    /**
     * Highlights owner element of all frames detected to be ads.
     */
    export type setShowAdHighlightsParameters = {
      /**
       * True for showing ad highlights
       */
      show: boolean;
    }
    export type setShowAdHighlightsReturnValue = {
    }
    export type setPausedInDebuggerMessageParameters = {
      /**
       * The message to display, also triggers resume and step over controls.
       */
      message?: string;
    }
    export type setPausedInDebuggerMessageReturnValue = {
    }
    /**
     * Requests that backend shows debug borders on layers
     */
    export type setShowDebugBordersParameters = {
      /**
       * True for showing debug borders
       */
      show: boolean;
    }
    export type setShowDebugBordersReturnValue = {
    }
    /**
     * Requests that backend shows the FPS counter
     */
    export type setShowFPSCounterParameters = {
      /**
       * True for showing the FPS counter
       */
      show: boolean;
    }
    export type setShowFPSCounterReturnValue = {
    }
    /**
     * Highlight multiple elements with the CSS Grid overlay.
     */
    export type setShowGridOverlaysParameters = {
      /**
       * An array of node identifiers and descriptors for the highlight appearance.
       */
      gridNodeHighlightConfigs: GridNodeHighlightConfig[];
    }
    export type setShowGridOverlaysReturnValue = {
    }
    export type setShowFlexOverlaysParameters = {
      /**
       * An array of node identifiers and descriptors for the highlight appearance.
       */
      flexNodeHighlightConfigs: FlexNodeHighlightConfig[];
    }
    export type setShowFlexOverlaysReturnValue = {
    }
    export type setShowScrollSnapOverlaysParameters = {
      /**
       * An array of node identifiers and descriptors for the highlight appearance.
       */
      scrollSnapHighlightConfigs: ScrollSnapHighlightConfig[];
    }
    export type setShowScrollSnapOverlaysReturnValue = {
    }
    export type setShowContainerQueryOverlaysParameters = {
      /**
       * An array of node identifiers and descriptors for the highlight appearance.
       */
      containerQueryHighlightConfigs: ContainerQueryHighlightConfig[];
    }
    export type setShowContainerQueryOverlaysReturnValue = {
    }
    export type setShowInspectedElementAnchorParameters = {
      /**
       * Node identifier for which to show an anchor for.
       */
      inspectedElementAnchorConfig: InspectedElementAnchorConfig;
    }
    export type setShowInspectedElementAnchorReturnValue = {
    }
    /**
     * Requests that backend shows paint rectangles
     */
    export type setShowPaintRectsParameters = {
      /**
       * True for showing paint rectangles
       */
      result: boolean;
    }
    export type setShowPaintRectsReturnValue = {
    }
    /**
     * Requests that backend shows layout shift regions
     */
    export type setShowLayoutShiftRegionsParameters = {
      /**
       * True for showing layout shift regions
       */
      result: boolean;
    }
    export type setShowLayoutShiftRegionsReturnValue = {
    }
    /**
     * Requests that backend shows scroll bottleneck rects
     */
    export type setShowScrollBottleneckRectsParameters = {
      /**
       * True for showing scroll bottleneck rects
       */
      show: boolean;
    }
    export type setShowScrollBottleneckRectsReturnValue = {
    }
    /**
     * Deprecated, no longer has any effect.
     */
    export type setShowHitTestBordersParameters = {
      /**
       * True for showing hit-test borders
       */
      show: boolean;
    }
    export type setShowHitTestBordersReturnValue = {
    }
    /**
     * Deprecated, no longer has any effect.
     */
    export type setShowWebVitalsParameters = {
      show: boolean;
    }
    export type setShowWebVitalsReturnValue = {
    }
    /**
     * Paints viewport size upon main frame resize.
     */
    export type setShowViewportSizeOnResizeParameters = {
      /**
       * Whether to paint size or not.
       */
      show: boolean;
    }
    export type setShowViewportSizeOnResizeReturnValue = {
    }
    /**
     * Add a dual screen device hinge
     */
    export type setShowHingeParameters = {
      /**
       * hinge data, null means hideHinge
       */
      hingeConfig?: HingeConfig;
    }
    export type setShowHingeReturnValue = {
    }
    /**
     * Show elements in isolation mode with overlays.
     */
    export type setShowIsolatedElementsParameters = {
      /**
       * An array of node identifiers and descriptors for the highlight appearance.
       */
      isolatedElementHighlightConfigs: IsolatedElementHighlightConfig[];
    }
    export type setShowIsolatedElementsReturnValue = {
    }
    /**
     * Show Window Controls Overlay for PWA
     */
    export type setShowWindowControlsOverlayParameters = {
      /**
       * Window Controls Overlay data, null means hide Window Controls Overlay
       */
      windowControlsOverlayConfig?: WindowControlsOverlayConfig;
    }
    export type setShowWindowControlsOverlayReturnValue = {
    }
  }
  
  /**
   * This domain allows interacting with the browser to control PWAs.
   */
  export namespace PWA {
    /**
     * The following types are the replica of
https://crsrc.org/c/chrome/browser/web_applications/proto/web_app_os_integration_state.proto;drc=9910d3be894c8f142c977ba1023f30a656bc13fc;l=67
     */
    export interface FileHandlerAccept {
      /**
       * New name of the mimetype according to
https://www.iana.org/assignments/media-types/media-types.xhtml
       */
      mediaType: string;
      fileExtensions: string[];
    }
    export interface FileHandler {
      action: string;
      accepts: FileHandlerAccept[];
      displayName: string;
    }
    /**
     * If user prefers opening the app in browser or an app window.
     */
    export type DisplayMode = "standalone"|"browser";
    
    
    /**
     * Returns the following OS state for the given manifest id.
     */
    export type getOsAppStateParameters = {
      /**
       * The id from the webapp's manifest file, commonly it's the url of the
site installing the webapp. See
https://web.dev/learn/pwa/web-app-manifest.
       */
      manifestId: string;
    }
    export type getOsAppStateReturnValue = {
      badgeCount: number;
      fileHandlers: FileHandler[];
    }
    /**
     * Installs the given manifest identity, optionally using the given installUrlOrBundleUrl

IWA-specific install description:
manifestId corresponds to isolated-app:// + web_package::SignedWebBundleId

File installation mode:
The installUrlOrBundleUrl can be either file:// or http(s):// pointing
to a signed web bundle (.swbn). In this case SignedWebBundleId must correspond to
The .swbn file's signing key.

Dev proxy installation mode:
installUrlOrBundleUrl must be http(s):// that serves dev mode IWA.
web_package::SignedWebBundleId must be of type dev proxy.

The advantage of dev proxy mode is that all changes to IWA
automatically will be reflected in the running app without
reinstallation.

To generate bundle id for proxy mode:
1. Generate 32 random bytes.
2. Add a specific suffix at the end following the documentation
   https://github.com/WICG/isolated-web-apps/blob/main/Scheme.md#suffix
3. Encode the entire sequence using Base32 without padding.

If Chrome is not in IWA dev
mode, the installation will fail, regardless of the state of the allowlist.
     */
    export type installParameters = {
      manifestId: string;
      /**
       * The location of the app or bundle overriding the one derived from the
manifestId.
       */
      installUrlOrBundleUrl?: string;
    }
    export type installReturnValue = {
    }
    /**
     * Uninstalls the given manifest_id and closes any opened app windows.
     */
    export type uninstallParameters = {
      manifestId: string;
    }
    export type uninstallReturnValue = {
    }
    /**
     * Launches the installed web app, or an url in the same web app instead of the
default start url if it is provided. Returns a page Target.TargetID which
can be used to attach to via Target.attachToTarget or similar APIs.
     */
    export type launchParameters = {
      manifestId: string;
      url?: string;
    }
    export type launchReturnValue = {
      /**
       * ID of the tab target created as a result.
       */
      targetId: Target.TargetID;
    }
    /**
     * Opens one or more local files from an installed web app identified by its
manifestId. The web app needs to have file handlers registered to process
the files. The API returns one or more page Target.TargetIDs which can be
used to attach to via Target.attachToTarget or similar APIs.
If some files in the parameters cannot be handled by the web app, they will
be ignored. If none of the files can be handled, this API returns an error.
If no files are provided as the parameter, this API also returns an error.

According to the definition of the file handlers in the manifest file, one
Target.TargetID may represent a page handling one or more files. The order
of the returned Target.TargetIDs is not guaranteed.

TODO(crbug.com/339454034): Check the existences of the input files.
     */
    export type launchFilesInAppParameters = {
      manifestId: string;
      files: string[];
    }
    export type launchFilesInAppReturnValue = {
      /**
       * IDs of the tab targets created as the result.
       */
      targetIds: Target.TargetID[];
    }
    /**
     * Opens the current page in its web app identified by the manifest id, needs
to be called on a page target. This function returns immediately without
waiting for the app to finish loading.
     */
    export type openCurrentPageInAppParameters = {
      manifestId: string;
    }
    export type openCurrentPageInAppReturnValue = {
    }
    /**
     * Changes user settings of the web app identified by its manifestId. If the
app was not installed, this command returns an error. Unset parameters will
be ignored; unrecognized values will cause an error.

Unlike the ones defined in the manifest files of the web apps, these
settings are provided by the browser and controlled by the users, they
impact the way the browser handling the web apps.

See the comment of each parameter.
     */
    export type changeAppUserSettingsParameters = {
      manifestId: string;
      /**
       * If user allows the links clicked on by the user in the app's scope, or
extended scope if the manifest has scope extensions and the flags
`DesktopPWAsLinkCapturingWithScopeExtensions` and
`WebAppEnableScopeExtensions` are enabled.

Note, the API does not support resetting the linkCapturing to the
initial value, uninstalling and installing the web app again will reset
it.

TODO(crbug.com/339453269): Setting this value on ChromeOS is not
supported yet.
       */
      linkCapturing?: boolean;
      displayMode?: DisplayMode;
    }
    export type changeAppUserSettingsReturnValue = {
    }
  }
  
  /**
   * Actions and events related to the inspected page belong to the page domain.
   */
  export namespace Page {
    /**
     * Unique frame identifier.
     */
    export type FrameId = string;
    /**
     * Indicates whether a frame has been identified as an ad.
     */
    export type AdFrameType = "none"|"child"|"root";
    export type AdFrameExplanation = "ParentIsAd"|"CreatedByAdScript"|"MatchedBlockingRule";
    /**
     * Indicates whether a frame has been identified as an ad and why.
     */
    export interface AdFrameStatus {
      adFrameType: AdFrameType;
      explanations?: AdFrameExplanation[];
    }
    /**
     * Indicates whether the frame is a secure context and why it is the case.
     */
    export type SecureContextType = "Secure"|"SecureLocalhost"|"InsecureScheme"|"InsecureAncestor";
    /**
     * Indicates whether the frame is cross-origin isolated and why it is the case.
     */
    export type CrossOriginIsolatedContextType = "Isolated"|"NotIsolated"|"NotIsolatedFeatureDisabled";
    export type GatedAPIFeatures = "SharedArrayBuffers"|"SharedArrayBuffersTransferAllowed"|"PerformanceMeasureMemory"|"PerformanceProfile";
    /**
     * All Permissions Policy features. This enum should match the one defined
in services/network/public/cpp/permissions_policy/permissions_policy_features.json5.
LINT.IfChange(PermissionsPolicyFeature)
     */
    export type PermissionsPolicyFeature = "accelerometer"|"all-screens-capture"|"ambient-light-sensor"|"aria-notify"|"attribution-reporting"|"autofill"|"autoplay"|"bluetooth"|"browsing-topics"|"camera"|"captured-surface-control"|"ch-dpr"|"ch-device-memory"|"ch-downlink"|"ch-ect"|"ch-prefers-color-scheme"|"ch-prefers-reduced-motion"|"ch-prefers-reduced-transparency"|"ch-rtt"|"ch-save-data"|"ch-ua"|"ch-ua-arch"|"ch-ua-bitness"|"ch-ua-high-entropy-values"|"ch-ua-platform"|"ch-ua-model"|"ch-ua-mobile"|"ch-ua-form-factors"|"ch-ua-full-version"|"ch-ua-full-version-list"|"ch-ua-platform-version"|"ch-ua-wow64"|"ch-viewport-height"|"ch-viewport-width"|"ch-width"|"clipboard-read"|"clipboard-write"|"compute-pressure"|"controlled-frame"|"cross-origin-isolated"|"deferred-fetch"|"deferred-fetch-minimal"|"device-attributes"|"digital-credentials-create"|"digital-credentials-get"|"direct-sockets"|"direct-sockets-multicast"|"direct-sockets-private"|"display-capture"|"document-domain"|"encrypted-media"|"execution-while-out-of-viewport"|"execution-while-not-rendered"|"focus-without-user-activation"|"fullscreen"|"frobulate"|"gamepad"|"geolocation"|"gyroscope"|"hid"|"identity-credentials-get"|"idle-detection"|"interest-cohort"|"join-ad-interest-group"|"keyboard-map"|"language-detector"|"language-model"|"local-fonts"|"local-network"|"local-network-access"|"loopback-network"|"magnetometer"|"manual-text"|"media-playback-while-not-visible"|"microphone"|"midi"|"on-device-speech-recognition"|"otp-credentials"|"payment"|"picture-in-picture"|"private-aggregation"|"private-state-token-issuance"|"private-state-token-redemption"|"publickey-credentials-create"|"publickey-credentials-get"|"record-ad-auction-events"|"rewriter"|"run-ad-auction"|"screen-wake-lock"|"serial"|"shared-storage"|"shared-storage-select-url"|"smart-card"|"speaker-selection"|"storage-access"|"sub-apps"|"summarizer"|"sync-xhr"|"translator"|"unload"|"usb"|"usb-unrestricted"|"vertical-scroll"|"web-app-installation"|"web-printing"|"web-share"|"window-management"|"writer"|"xr-spatial-tracking";
    /**
     * Reason for a permissions policy feature to be disabled.
     */
    export type PermissionsPolicyBlockReason = "Header"|"IframeAttribute"|"InFencedFrameTree"|"InIsolatedApp";
    export interface PermissionsPolicyBlockLocator {
      frameId: FrameId;
      blockReason: PermissionsPolicyBlockReason;
    }
    export interface PermissionsPolicyFeatureState {
      feature: PermissionsPolicyFeature;
      allowed: boolean;
      locator?: PermissionsPolicyBlockLocator;
    }
    /**
     * Origin Trial(https://www.chromium.org/blink/origin-trials) support.
Status for an Origin Trial token.
     */
    export type OriginTrialTokenStatus = "Success"|"NotSupported"|"Insecure"|"Expired"|"WrongOrigin"|"InvalidSignature"|"Malformed"|"WrongVersion"|"FeatureDisabled"|"TokenDisabled"|"FeatureDisabledForUser"|"UnknownTrial";
    /**
     * Status for an Origin Trial.
     */
    export type OriginTrialStatus = "Enabled"|"ValidTokenNotProvided"|"OSNotSupported"|"TrialNotAllowed";
    export type OriginTrialUsageRestriction = "None"|"Subset";
    export interface OriginTrialToken {
      origin: string;
      matchSubDomains: boolean;
      trialName: string;
      expiryTime: Network.TimeSinceEpoch;
      isThirdParty: boolean;
      usageRestriction: OriginTrialUsageRestriction;
    }
    export interface OriginTrialTokenWithStatus {
      rawTokenText: string;
      /**
       * `parsedToken` is present only when the token is extractable and
parsable.
       */
      parsedToken?: OriginTrialToken;
      status: OriginTrialTokenStatus;
    }
    export interface OriginTrial {
      trialName: string;
      status: OriginTrialStatus;
      tokensWithStatus: OriginTrialTokenWithStatus[];
    }
    /**
     * Additional information about the frame document's security origin.
     */
    export interface SecurityOriginDetails {
      /**
       * Indicates whether the frame document's security origin is one
of the local hostnames (e.g. "localhost") or IP addresses (IPv4
127.0.0.0/8 or IPv6 ::1).
       */
      isLocalhost: boolean;
    }
    /**
     * Information about the Frame on the page.
     */
    export interface Frame {
      /**
       * Frame unique identifier.
       */
      id: FrameId;
      /**
       * Parent frame identifier.
       */
      parentId?: FrameId;
      /**
       * Identifier of the loader associated with this frame.
       */
      loaderId: Network.LoaderId;
      /**
       * Frame's name as specified in the tag.
       */
      name?: string;
      /**
       * Frame document's URL without fragment.
       */
      url: string;
      /**
       * Frame document's URL fragment including the '#'.
       */
      urlFragment?: string;
      /**
       * Frame document's registered domain, taking the public suffixes list into account.
Extracted from the Frame's url.
Example URLs: http://www.google.com/file.html -> "google.com"
              http://a.b.co.uk/file.html      -> "b.co.uk"
       */
      domainAndRegistry: string;
      /**
       * Frame document's security origin.
       */
      securityOrigin: string;
      /**
       * Additional details about the frame document's security origin.
       */
      securityOriginDetails?: SecurityOriginDetails;
      /**
       * Frame document's mimeType as determined by the browser.
       */
      mimeType: string;
      /**
       * If the frame failed to load, this contains the URL that could not be loaded. Note that unlike url above, this URL may contain a fragment.
       */
      unreachableUrl?: string;
      /**
       * Indicates whether this frame was tagged as an ad and why.
       */
      adFrameStatus?: AdFrameStatus;
      /**
       * Indicates whether the main document is a secure context and explains why that is the case.
       */
      secureContextType: SecureContextType;
      /**
       * Indicates whether this is a cross origin isolated context.
       */
      crossOriginIsolatedContextType: CrossOriginIsolatedContextType;
      /**
       * Indicated which gated APIs / features are available.
       */
      gatedAPIFeatures: GatedAPIFeatures[];
    }
    /**
     * Information about the Resource on the page.
     */
    export interface FrameResource {
      /**
       * Resource URL.
       */
      url: string;
      /**
       * Type of this resource.
       */
      type: Network.ResourceType;
      /**
       * Resource mimeType as determined by the browser.
       */
      mimeType: string;
      /**
       * last-modified timestamp as reported by server.
       */
      lastModified?: Network.TimeSinceEpoch;
      /**
       * Resource content size.
       */
      contentSize?: number;
      /**
       * True if the resource failed to load.
       */
      failed?: boolean;
      /**
       * True if the resource was canceled during loading.
       */
      canceled?: boolean;
    }
    /**
     * Information about the Frame hierarchy along with their cached resources.
     */
    export interface FrameResourceTree {
      /**
       * Frame information for this tree item.
       */
      frame: Frame;
      /**
       * Child frames.
       */
      childFrames?: FrameResourceTree[];
      /**
       * Information about frame resources.
       */
      resources: FrameResource[];
    }
    /**
     * Information about the Frame hierarchy.
     */
    export interface FrameTree {
      /**
       * Frame information for this tree item.
       */
      frame: Frame;
      /**
       * Child frames.
       */
      childFrames?: FrameTree[];
    }
    /**
     * Unique script identifier.
     */
    export type ScriptIdentifier = string;
    /**
     * Transition type.
     */
    export type TransitionType = "link"|"typed"|"address_bar"|"auto_bookmark"|"auto_subframe"|"manual_subframe"|"generated"|"auto_toplevel"|"form_submit"|"reload"|"keyword"|"keyword_generated"|"other";
    /**
     * Navigation history entry.
     */
    export interface NavigationEntry {
      /**
       * Unique id of the navigation history entry.
       */
      id: number;
      /**
       * URL of the navigation history entry.
       */
      url: string;
      /**
       * URL that the user typed in the url bar.
       */
      userTypedURL: string;
      /**
       * Title of the navigation history entry.
       */
      title: string;
      /**
       * Transition type.
       */
      transitionType: TransitionType;
    }
    /**
     * Screencast frame metadata.
     */
    export interface ScreencastFrameMetadata {
      /**
       * Top offset in DIP.
       */
      offsetTop: number;
      /**
       * Page scale factor.
       */
      pageScaleFactor: number;
      /**
       * Device screen width in DIP.
       */
      deviceWidth: number;
      /**
       * Device screen height in DIP.
       */
      deviceHeight: number;
      /**
       * Position of horizontal scroll in CSS pixels.
       */
      scrollOffsetX: number;
      /**
       * Position of vertical scroll in CSS pixels.
       */
      scrollOffsetY: number;
      /**
       * Frame swap timestamp.
       */
      timestamp?: Network.TimeSinceEpoch;
    }
    /**
     * Javascript dialog type.
     */
    export type DialogType = "alert"|"confirm"|"prompt"|"beforeunload";
    /**
     * Error while paring app manifest.
     */
    export interface AppManifestError {
      /**
       * Error message.
       */
      message: string;
      /**
       * If critical, this is a non-recoverable parse error.
       */
      critical: number;
      /**
       * Error line.
       */
      line: number;
      /**
       * Error column.
       */
      column: number;
    }
    /**
     * Parsed app manifest properties.
     */
    export interface AppManifestParsedProperties {
      /**
       * Computed scope value
       */
      scope: string;
    }
    /**
     * Layout viewport position and dimensions.
     */
    export interface LayoutViewport {
      /**
       * Horizontal offset relative to the document (CSS pixels).
       */
      pageX: number;
      /**
       * Vertical offset relative to the document (CSS pixels).
       */
      pageY: number;
      /**
       * Width (CSS pixels), excludes scrollbar if present.
       */
      clientWidth: number;
      /**
       * Height (CSS pixels), excludes scrollbar if present.
       */
      clientHeight: number;
    }
    /**
     * Visual viewport position, dimensions, and scale.
     */
    export interface VisualViewport {
      /**
       * Horizontal offset relative to the layout viewport (CSS pixels).
       */
      offsetX: number;
      /**
       * Vertical offset relative to the layout viewport (CSS pixels).
       */
      offsetY: number;
      /**
       * Horizontal offset relative to the document (CSS pixels).
       */
      pageX: number;
      /**
       * Vertical offset relative to the document (CSS pixels).
       */
      pageY: number;
      /**
       * Width (CSS pixels), excludes scrollbar if present.
       */
      clientWidth: number;
      /**
       * Height (CSS pixels), excludes scrollbar if present.
       */
      clientHeight: number;
      /**
       * Scale relative to the ideal viewport (size at width=device-width).
       */
      scale: number;
      /**
       * Page zoom factor (CSS to device independent pixels ratio).
       */
      zoom?: number;
    }
    /**
     * Viewport for capturing screenshot.
     */
    export interface Viewport {
      /**
       * X offset in device independent pixels (dip).
       */
      x: number;
      /**
       * Y offset in device independent pixels (dip).
       */
      y: number;
      /**
       * Rectangle width in device independent pixels (dip).
       */
      width: number;
      /**
       * Rectangle height in device independent pixels (dip).
       */
      height: number;
      /**
       * Page scale factor.
       */
      scale: number;
    }
    /**
     * Generic font families collection.
     */
    export interface FontFamilies {
      /**
       * The standard font-family.
       */
      standard?: string;
      /**
       * The fixed font-family.
       */
      fixed?: string;
      /**
       * The serif font-family.
       */
      serif?: string;
      /**
       * The sansSerif font-family.
       */
      sansSerif?: string;
      /**
       * The cursive font-family.
       */
      cursive?: string;
      /**
       * The fantasy font-family.
       */
      fantasy?: string;
      /**
       * The math font-family.
       */
      math?: string;
    }
    /**
     * Font families collection for a script.
     */
    export interface ScriptFontFamilies {
      /**
       * Name of the script which these font families are defined for.
       */
      script: string;
      /**
       * Generic font families collection for the script.
       */
      fontFamilies: FontFamilies;
    }
    /**
     * Default font sizes.
     */
    export interface FontSizes {
      /**
       * Default standard font size.
       */
      standard?: number;
      /**
       * Default fixed font size.
       */
      fixed?: number;
    }
    export type ClientNavigationReason = "anchorClick"|"formSubmissionGet"|"formSubmissionPost"|"httpHeaderRefresh"|"initialFrameNavigation"|"metaTagRefresh"|"other"|"pageBlockInterstitial"|"reload"|"scriptInitiated";
    export type ClientNavigationDisposition = "currentTab"|"newTab"|"newWindow"|"download";
    export interface InstallabilityErrorArgument {
      /**
       * Argument name (e.g. name:'minimum-icon-size-in-pixels').
       */
      name: string;
      /**
       * Argument value (e.g. value:'64').
       */
      value: string;
    }
    /**
     * The installability error
     */
    export interface InstallabilityError {
      /**
       * The error id (e.g. 'manifest-missing-suitable-icon').
       */
      errorId: string;
      /**
       * The list of error arguments (e.g. {name:'minimum-icon-size-in-pixels', value:'64'}).
       */
      errorArguments: InstallabilityErrorArgument[];
    }
    /**
     * The referring-policy used for the navigation.
     */
    export type ReferrerPolicy = "noReferrer"|"noReferrerWhenDowngrade"|"origin"|"originWhenCrossOrigin"|"sameOrigin"|"strictOrigin"|"strictOriginWhenCrossOrigin"|"unsafeUrl";
    /**
     * Per-script compilation cache parameters for `Page.produceCompilationCache`
     */
    export interface CompilationCacheParams {
      /**
       * The URL of the script to produce a compilation cache entry for.
       */
      url: string;
      /**
       * A hint to the backend whether eager compilation is recommended.
(the actual compilation mode used is upon backend discretion).
       */
      eager?: boolean;
    }
    export interface FileFilter {
      name?: string;
      accepts?: string[];
    }
    export interface FileHandler {
      action: string;
      name: string;
      icons?: ImageResource[];
      /**
       * Mimic a map, name is the key, accepts is the value.
       */
      accepts?: FileFilter[];
      /**
       * Won't repeat the enums, using string for easy comparison. Same as the
other enums below.
       */
      launchType: string;
    }
    /**
     * The image definition used in both icon and screenshot.
     */
    export interface ImageResource {
      /**
       * The src field in the definition, but changing to url in favor of
consistency.
       */
      url: string;
      sizes?: string;
      type?: string;
    }
    export interface LaunchHandler {
      clientMode: string;
    }
    export interface ProtocolHandler {
      protocol: string;
      url: string;
    }
    export interface RelatedApplication {
      id?: string;
      url: string;
    }
    export interface ScopeExtension {
      /**
       * Instead of using tuple, this field always returns the serialized string
for easy understanding and comparison.
       */
      origin: string;
      hasOriginWildcard: boolean;
    }
    export interface Screenshot {
      image: ImageResource;
      formFactor: string;
      label?: string;
    }
    export interface ShareTarget {
      action: string;
      method: string;
      enctype: string;
      /**
       * Embed the ShareTargetParams
       */
      title?: string;
      text?: string;
      url?: string;
      files?: FileFilter[];
    }
    export interface Shortcut {
      name: string;
      url: string;
    }
    export interface WebAppManifest {
      backgroundColor?: string;
      /**
       * The extra description provided by the manifest.
       */
      description?: string;
      dir?: string;
      display?: string;
      /**
       * The overrided display mode controlled by the user.
       */
      displayOverrides?: string[];
      /**
       * The handlers to open files.
       */
      fileHandlers?: FileHandler[];
      icons?: ImageResource[];
      id?: string;
      lang?: string;
      /**
       * TODO(crbug.com/1231886): This field is non-standard and part of a Chrome
experiment. See:
https://github.com/WICG/web-app-launch/blob/main/launch_handler.md
       */
      launchHandler?: LaunchHandler;
      name?: string;
      orientation?: string;
      preferRelatedApplications?: boolean;
      /**
       * The handlers to open protocols.
       */
      protocolHandlers?: ProtocolHandler[];
      relatedApplications?: RelatedApplication[];
      scope?: string;
      /**
       * Non-standard, see
https://github.com/WICG/manifest-incubations/blob/gh-pages/scope_extensions-explainer.md
       */
      scopeExtensions?: ScopeExtension[];
      /**
       * The screenshots used by chromium.
       */
      screenshots?: Screenshot[];
      shareTarget?: ShareTarget;
      shortName?: string;
      shortcuts?: Shortcut[];
      startUrl?: string;
      themeColor?: string;
    }
    /**
     * The type of a frameNavigated event.
     */
    export type NavigationType = "Navigation"|"BackForwardCacheRestore";
    /**
     * List of not restored reasons for back-forward cache.
     */
    export type BackForwardCacheNotRestoredReason = "NotPrimaryMainFrame"|"BackForwardCacheDisabled"|"RelatedActiveContentsExist"|"HTTPStatusNotOK"|"SchemeNotHTTPOrHTTPS"|"Loading"|"WasGrantedMediaAccess"|"DisableForRenderFrameHostCalled"|"DomainNotAllowed"|"HTTPMethodNotGET"|"SubframeIsNavigating"|"Timeout"|"CacheLimit"|"JavaScriptExecution"|"RendererProcessKilled"|"RendererProcessCrashed"|"SchedulerTrackedFeatureUsed"|"ConflictingBrowsingInstance"|"CacheFlushed"|"ServiceWorkerVersionActivation"|"SessionRestored"|"ServiceWorkerPostMessage"|"EnteredBackForwardCacheBeforeServiceWorkerHostAdded"|"RenderFrameHostReused_SameSite"|"RenderFrameHostReused_CrossSite"|"ServiceWorkerClaim"|"IgnoreEventAndEvict"|"HaveInnerContents"|"TimeoutPuttingInCache"|"BackForwardCacheDisabledByLowMemory"|"BackForwardCacheDisabledByCommandLine"|"NetworkRequestDatapipeDrainedAsBytesConsumer"|"NetworkRequestRedirected"|"NetworkRequestTimeout"|"NetworkExceedsBufferLimit"|"NavigationCancelledWhileRestoring"|"NotMostRecentNavigationEntry"|"BackForwardCacheDisabledForPrerender"|"UserAgentOverrideDiffers"|"ForegroundCacheLimit"|"ForwardCacheDisabled"|"BrowsingInstanceNotSwapped"|"BackForwardCacheDisabledForDelegate"|"UnloadHandlerExistsInMainFrame"|"UnloadHandlerExistsInSubFrame"|"ServiceWorkerUnregistration"|"CacheControlNoStore"|"CacheControlNoStoreCookieModified"|"CacheControlNoStoreHTTPOnlyCookieModified"|"NoResponseHead"|"Unknown"|"ActivationNavigationsDisallowedForBug1234857"|"ErrorDocument"|"FencedFramesEmbedder"|"CookieDisabled"|"HTTPAuthRequired"|"CookieFlushed"|"BroadcastChannelOnMessage"|"WebViewSettingsChanged"|"WebViewJavaScriptObjectChanged"|"WebViewMessageListenerInjected"|"WebViewSafeBrowsingAllowlistChanged"|"WebViewDocumentStartJavascriptChanged"|"WebSocket"|"WebTransport"|"WebRTC"|"MainResourceHasCacheControlNoStore"|"MainResourceHasCacheControlNoCache"|"SubresourceHasCacheControlNoStore"|"SubresourceHasCacheControlNoCache"|"ContainsPlugins"|"DocumentLoaded"|"OutstandingNetworkRequestOthers"|"RequestedMIDIPermission"|"RequestedAudioCapturePermission"|"RequestedVideoCapturePermission"|"RequestedBackForwardCacheBlockedSensors"|"RequestedBackgroundWorkPermission"|"BroadcastChannel"|"WebXR"|"SharedWorker"|"SharedWorkerMessage"|"SharedWorkerWithNoActiveClient"|"WebLocks"|"WebLocksContention"|"WebHID"|"WebBluetooth"|"WebShare"|"RequestedStorageAccessGrant"|"WebNfc"|"OutstandingNetworkRequestFetch"|"OutstandingNetworkRequestXHR"|"AppBanner"|"Printing"|"WebDatabase"|"PictureInPicture"|"SpeechRecognizer"|"IdleManager"|"PaymentManager"|"SpeechSynthesis"|"KeyboardLock"|"WebOTPService"|"OutstandingNetworkRequestDirectSocket"|"InjectedJavascript"|"InjectedStyleSheet"|"KeepaliveRequest"|"IndexedDBEvent"|"Dummy"|"JsNetworkRequestReceivedCacheControlNoStoreResource"|"WebRTCUsedWithCCNS"|"WebTransportUsedWithCCNS"|"WebSocketUsedWithCCNS"|"SmartCard"|"LiveMediaStreamTrack"|"UnloadHandler"|"ParserAborted"|"ContentSecurityHandler"|"ContentWebAuthenticationAPI"|"ContentFileChooser"|"ContentSerial"|"ContentFileSystemAccess"|"ContentMediaDevicesDispatcherHost"|"ContentWebBluetooth"|"ContentWebUSB"|"ContentMediaSessionService"|"ContentScreenReader"|"ContentDiscarded"|"EmbedderPopupBlockerTabHelper"|"EmbedderSafeBrowsingTriggeredPopupBlocker"|"EmbedderSafeBrowsingThreatDetails"|"EmbedderAppBannerManager"|"EmbedderDomDistillerViewerSource"|"EmbedderDomDistillerSelfDeletingRequestDelegate"|"EmbedderOomInterventionTabHelper"|"EmbedderOfflinePage"|"EmbedderChromePasswordManagerClientBindCredentialManager"|"EmbedderPermissionRequestManager"|"EmbedderModalDialog"|"EmbedderExtensions"|"EmbedderExtensionMessaging"|"EmbedderExtensionMessagingForOpenPort"|"EmbedderExtensionSentMessageToCachedFrame"|"RequestedByWebViewClient"|"PostMessageByWebViewClient"|"CacheControlNoStoreDeviceBoundSessionTerminated"|"CacheLimitPrunedOnModerateMemoryPressure"|"CacheLimitPrunedOnCriticalMemoryPressure";
    /**
     * Types of not restored reasons for back-forward cache.
     */
    export type BackForwardCacheNotRestoredReasonType = "SupportPending"|"PageSupportNeeded"|"Circumstantial";
    export interface BackForwardCacheBlockingDetails {
      /**
       * Url of the file where blockage happened. Optional because of tests.
       */
      url?: string;
      /**
       * Function name where blockage happened. Optional because of anonymous functions and tests.
       */
      function?: string;
      /**
       * Line number in the script (0-based).
       */
      lineNumber: number;
      /**
       * Column number in the script (0-based).
       */
      columnNumber: number;
    }
    export interface BackForwardCacheNotRestoredExplanation {
      /**
       * Type of the reason
       */
      type: BackForwardCacheNotRestoredReasonType;
      /**
       * Not restored reason
       */
      reason: BackForwardCacheNotRestoredReason;
      /**
       * Context associated with the reason. The meaning of this context is
dependent on the reason:
- EmbedderExtensionSentMessageToCachedFrame: the extension ID.
       */
      context?: string;
      details?: BackForwardCacheBlockingDetails[];
    }
    export interface BackForwardCacheNotRestoredExplanationTree {
      /**
       * URL of each frame
       */
      url: string;
      /**
       * Not restored reasons of each frame
       */
      explanations: BackForwardCacheNotRestoredExplanation[];
      /**
       * Array of children frame
       */
      children: BackForwardCacheNotRestoredExplanationTree[];
    }
    
    export type domContentEventFiredPayload = {
      timestamp: Network.MonotonicTime;
    }
    /**
     * Emitted only when `page.interceptFileChooser` is enabled.
     */
    export type fileChooserOpenedPayload = {
      /**
       * Id of the frame containing input node.
       */
      frameId: FrameId;
      /**
       * Input mode.
       */
      mode: "selectSingle"|"selectMultiple";
      /**
       * Input node id. Only present for file choosers opened via an `<input type="file">` element.
       */
      backendNodeId?: DOM.BackendNodeId;
    }
    /**
     * Fired when frame has been attached to its parent.
     */
    export type frameAttachedPayload = {
      /**
       * Id of the frame that has been attached.
       */
      frameId: FrameId;
      /**
       * Parent frame identifier.
       */
      parentFrameId: FrameId;
      /**
       * JavaScript stack trace of when frame was attached, only set if frame initiated from script.
       */
      stack?: Runtime.StackTrace;
    }
    /**
     * Fired when frame no longer has a scheduled navigation.
     */
    export type frameClearedScheduledNavigationPayload = {
      /**
       * Id of the frame that has cleared its scheduled navigation.
       */
      frameId: FrameId;
    }
    /**
     * Fired when frame has been detached from its parent.
     */
    export type frameDetachedPayload = {
      /**
       * Id of the frame that has been detached.
       */
      frameId: FrameId;
      reason: "remove"|"swap";
    }
    /**
     * Fired before frame subtree is detached. Emitted before any frame of the
subtree is actually detached.
     */
    export type frameSubtreeWillBeDetachedPayload = {
      /**
       * Id of the frame that is the root of the subtree that will be detached.
       */
      frameId: FrameId;
    }
    /**
     * Fired once navigation of the frame has completed. Frame is now associated with the new loader.
     */
    export type frameNavigatedPayload = {
      /**
       * Frame object.
       */
      frame: Frame;
      type: NavigationType;
    }
    /**
     * Fired when opening document to write to.
     */
    export type documentOpenedPayload = {
      /**
       * Frame object.
       */
      frame: Frame;
    }
    export type frameResizedPayload = void;
    /**
     * Fired when a navigation starts. This event is fired for both
renderer-initiated and browser-initiated navigations. For renderer-initiated
navigations, the event is fired after `frameRequestedNavigation`.
Navigation may still be cancelled after the event is issued. Multiple events
can be fired for a single navigation, for example, when a same-document
navigation becomes a cross-document navigation (such as in the case of a
frameset).
     */
    export type frameStartedNavigatingPayload = {
      /**
       * ID of the frame that is being navigated.
       */
      frameId: FrameId;
      /**
       * The URL the navigation started with. The final URL can be different.
       */
      url: string;
      /**
       * Loader identifier. Even though it is present in case of same-document
navigation, the previously committed loaderId would not change unless
the navigation changes from a same-document to a cross-document
navigation.
       */
      loaderId: Network.LoaderId;
      navigationType: "reload"|"reloadBypassingCache"|"restore"|"restoreWithPost"|"historySameDocument"|"historyDifferentDocument"|"sameDocument"|"differentDocument";
    }
    /**
     * Fired when a renderer-initiated navigation is requested.
Navigation may still be cancelled after the event is issued.
     */
    export type frameRequestedNavigationPayload = {
      /**
       * Id of the frame that is being navigated.
       */
      frameId: FrameId;
      /**
       * The reason for the navigation.
       */
      reason: ClientNavigationReason;
      /**
       * The destination URL for the requested navigation.
       */
      url: string;
      /**
       * The disposition for the navigation.
       */
      disposition: ClientNavigationDisposition;
    }
    /**
     * Fired when frame schedules a potential navigation.
     */
    export type frameScheduledNavigationPayload = {
      /**
       * Id of the frame that has scheduled a navigation.
       */
      frameId: FrameId;
      /**
       * Delay (in seconds) until the navigation is scheduled to begin. The navigation is not
guaranteed to start.
       */
      delay: number;
      /**
       * The reason for the navigation.
       */
      reason: ClientNavigationReason;
      /**
       * The destination URL for the scheduled navigation.
       */
      url: string;
    }
    /**
     * Fired when frame has started loading.
     */
    export type frameStartedLoadingPayload = {
      /**
       * Id of the frame that has started loading.
       */
      frameId: FrameId;
    }
    /**
     * Fired when frame has stopped loading.
     */
    export type frameStoppedLoadingPayload = {
      /**
       * Id of the frame that has stopped loading.
       */
      frameId: FrameId;
    }
    /**
     * Fired when page is about to start a download.
Deprecated. Use Browser.downloadWillBegin instead.
     */
    export type downloadWillBeginPayload = {
      /**
       * Id of the frame that caused download to begin.
       */
      frameId: FrameId;
      /**
       * Global unique identifier of the download.
       */
      guid: string;
      /**
       * URL of the resource being downloaded.
       */
      url: string;
      /**
       * Suggested file name of the resource (the actual name of the file saved on disk may differ).
       */
      suggestedFilename: string;
    }
    /**
     * Fired when download makes progress. Last call has |done| == true.
Deprecated. Use Browser.downloadProgress instead.
     */
    export type downloadProgressPayload = {
      /**
       * Global unique identifier of the download.
       */
      guid: string;
      /**
       * Total expected bytes to download.
       */
      totalBytes: number;
      /**
       * Total bytes received.
       */
      receivedBytes: number;
      /**
       * Download status.
       */
      state: "inProgress"|"completed"|"canceled";
    }
    /**
     * Fired when interstitial page was hidden
     */
    export type interstitialHiddenPayload = void;
    /**
     * Fired when interstitial page was shown
     */
    export type interstitialShownPayload = void;
    /**
     * Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) has been
closed.
     */
    export type javascriptDialogClosedPayload = {
      /**
       * Frame id.
       */
      frameId: FrameId;
      /**
       * Whether dialog was confirmed.
       */
      result: boolean;
      /**
       * User input in case of prompt.
       */
      userInput: string;
    }
    /**
     * Fired when a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload) is about to
open.
     */
    export type javascriptDialogOpeningPayload = {
      /**
       * Frame url.
       */
      url: string;
      /**
       * Frame id.
       */
      frameId: FrameId;
      /**
       * Message that will be displayed by the dialog.
       */
      message: string;
      /**
       * Dialog type.
       */
      type: DialogType;
      /**
       * True iff browser is capable showing or acting on the given dialog. When browser has no
dialog handler for given target, calling alert while Page domain is engaged will stall
the page execution. Execution can be resumed via calling Page.handleJavaScriptDialog.
       */
      hasBrowserHandler: boolean;
      /**
       * Default dialog prompt.
       */
      defaultPrompt?: string;
    }
    /**
     * Fired for lifecycle events (navigation, load, paint, etc) in the current
target (including local frames).
     */
    export type lifecycleEventPayload = {
      /**
       * Id of the frame.
       */
      frameId: FrameId;
      /**
       * Loader identifier. Empty string if the request is fetched from worker.
       */
      loaderId: Network.LoaderId;
      name: string;
      timestamp: Network.MonotonicTime;
    }
    /**
     * Fired for failed bfcache history navigations if BackForwardCache feature is enabled. Do
not assume any ordering with the Page.frameNavigated event. This event is fired only for
main-frame history navigation where the document changes (non-same-document navigations),
when bfcache navigation fails.
     */
    export type backForwardCacheNotUsedPayload = {
      /**
       * The loader id for the associated navigation.
       */
      loaderId: Network.LoaderId;
      /**
       * The frame id of the associated frame.
       */
      frameId: FrameId;
      /**
       * Array of reasons why the page could not be cached. This must not be empty.
       */
      notRestoredExplanations: BackForwardCacheNotRestoredExplanation[];
      /**
       * Tree structure of reasons why the page could not be cached for each frame.
       */
      notRestoredExplanationsTree?: BackForwardCacheNotRestoredExplanationTree;
    }
    export type loadEventFiredPayload = {
      timestamp: Network.MonotonicTime;
    }
    /**
     * Fired when same-document navigation happens, e.g. due to history API usage or anchor navigation.
     */
    export type navigatedWithinDocumentPayload = {
      /**
       * Id of the frame.
       */
      frameId: FrameId;
      /**
       * Frame's new url.
       */
      url: string;
      /**
       * Navigation type
       */
      navigationType: "fragment"|"historyApi"|"other";
    }
    /**
     * Compressed image data requested by the `startScreencast`.
     */
    export type screencastFramePayload = {
      /**
       * Base64-encoded compressed image.
       */
      data: binary;
      /**
       * Screencast frame metadata.
       */
      metadata: ScreencastFrameMetadata;
      /**
       * Frame number.
       */
      sessionId: number;
    }
    /**
     * Fired when the page with currently enabled screencast was shown or hidden `.
     */
    export type screencastVisibilityChangedPayload = {
      /**
       * True if the page is visible.
       */
      visible: boolean;
    }
    /**
     * Fired when a new window is going to be opened, via window.open(), link click, form submission,
etc.
     */
    export type windowOpenPayload = {
      /**
       * The URL for the new window.
       */
      url: string;
      /**
       * Window name.
       */
      windowName: string;
      /**
       * An array of enabled window features.
       */
      windowFeatures: string[];
      /**
       * Whether or not it was triggered by user gesture.
       */
      userGesture: boolean;
    }
    /**
     * Issued for every compilation cache generated.
     */
    export type compilationCacheProducedPayload = {
      url: string;
      /**
       * Base64-encoded data
       */
      data: binary;
    }
    
    /**
     * Deprecated, please use addScriptToEvaluateOnNewDocument instead.
     */
    export type addScriptToEvaluateOnLoadParameters = {
      scriptSource: string;
    }
    export type addScriptToEvaluateOnLoadReturnValue = {
      /**
       * Identifier of the added script.
       */
      identifier: ScriptIdentifier;
    }
    /**
     * Evaluates given script in every frame upon creation (before loading frame's scripts).
     */
    export type addScriptToEvaluateOnNewDocumentParameters = {
      source: string;
      /**
       * If specified, creates an isolated world with the given name and evaluates given script in it.
This world name will be used as the ExecutionContextDescription::name when the corresponding
event is emitted.
       */
      worldName?: string;
      /**
       * Specifies whether command line API should be available to the script, defaults
to false.
       */
      includeCommandLineAPI?: boolean;
      /**
       * If true, runs the script immediately on existing execution contexts or worlds.
Default: false.
       */
      runImmediately?: boolean;
    }
    export type addScriptToEvaluateOnNewDocumentReturnValue = {
      /**
       * Identifier of the added script.
       */
      identifier: ScriptIdentifier;
    }
    /**
     * Brings page to front (activates tab).
     */
    export type bringToFrontParameters = {
    }
    export type bringToFrontReturnValue = {
    }
    /**
     * Capture page screenshot.
     */
    export type captureScreenshotParameters = {
      /**
       * Image compression format (defaults to png).
       */
      format?: "jpeg"|"png"|"webp";
      /**
       * Compression quality from range [0..100] (jpeg only).
       */
      quality?: number;
      /**
       * Capture the screenshot of a given region only.
       */
      clip?: Viewport;
      /**
       * Capture the screenshot from the surface, rather than the view. Defaults to true.
       */
      fromSurface?: boolean;
      /**
       * Capture the screenshot beyond the viewport. Defaults to false.
       */
      captureBeyondViewport?: boolean;
      /**
       * Optimize image encoding for speed, not for resulting size (defaults to false)
       */
      optimizeForSpeed?: boolean;
    }
    export type captureScreenshotReturnValue = {
      /**
       * Base64-encoded image data.
       */
      data: binary;
    }
    /**
     * Returns a snapshot of the page as a string. For MHTML format, the serialization includes
iframes, shadow DOM, external resources, and element-inline styles.
     */
    export type captureSnapshotParameters = {
      /**
       * Format (defaults to mhtml).
       */
      format?: "mhtml";
    }
    export type captureSnapshotReturnValue = {
      /**
       * Serialized page data.
       */
      data: string;
    }
    /**
     * Clears the overridden device metrics.
     */
    export type clearDeviceMetricsOverrideParameters = {
    }
    export type clearDeviceMetricsOverrideReturnValue = {
    }
    /**
     * Clears the overridden Device Orientation.
     */
    export type clearDeviceOrientationOverrideParameters = {
    }
    export type clearDeviceOrientationOverrideReturnValue = {
    }
    /**
     * Clears the overridden Geolocation Position and Error.
     */
    export type clearGeolocationOverrideParameters = {
    }
    export type clearGeolocationOverrideReturnValue = {
    }
    /**
     * Creates an isolated world for the given frame.
     */
    export type createIsolatedWorldParameters = {
      /**
       * Id of the frame in which the isolated world should be created.
       */
      frameId: FrameId;
      /**
       * An optional name which is reported in the Execution Context.
       */
      worldName?: string;
      /**
       * Whether or not universal access should be granted to the isolated world. This is a powerful
option, use with caution.
       */
      grantUniveralAccess?: boolean;
    }
    export type createIsolatedWorldReturnValue = {
      /**
       * Execution context of the isolated world.
       */
      executionContextId: Runtime.ExecutionContextId;
    }
    /**
     * Deletes browser cookie with given name, domain and path.
     */
    export type deleteCookieParameters = {
      /**
       * Name of the cookie to remove.
       */
      cookieName: string;
      /**
       * URL to match cooke domain and path.
       */
      url: string;
    }
    export type deleteCookieReturnValue = {
    }
    /**
     * Disables page domain notifications.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables page domain notifications.
     */
    export type enableParameters = {
      /**
       * If true, the `Page.fileChooserOpened` event will be emitted regardless of the state set by
`Page.setInterceptFileChooserDialog` command (default: false).
       */
      enableFileChooserOpenedEvent?: boolean;
    }
    export type enableReturnValue = {
    }
    /**
     * Gets the processed manifest for this current document.
  This API always waits for the manifest to be loaded.
  If manifestId is provided, and it does not match the manifest of the
    current document, this API errors out.
  If there is not a loaded page, this API errors out immediately.
     */
    export type getAppManifestParameters = {
      manifestId?: string;
    }
    export type getAppManifestReturnValue = {
      /**
       * Manifest location.
       */
      url: string;
      errors: AppManifestError[];
      /**
       * Manifest content.
       */
      data?: string;
      /**
       * Parsed manifest properties. Deprecated, use manifest instead.
       */
      parsed?: AppManifestParsedProperties;
      manifest: WebAppManifest;
    }
    export type getInstallabilityErrorsParameters = {
    }
    export type getInstallabilityErrorsReturnValue = {
      installabilityErrors: InstallabilityError[];
    }
    /**
     * Deprecated because it's not guaranteed that the returned icon is in fact the one used for PWA installation.
     */
    export type getManifestIconsParameters = {
    }
    export type getManifestIconsReturnValue = {
      primaryIcon?: binary;
    }
    /**
     * Returns the unique (PWA) app id.
Only returns values if the feature flag 'WebAppEnableManifestId' is enabled
     */
    export type getAppIdParameters = {
    }
    export type getAppIdReturnValue = {
      /**
       * App id, either from manifest's id attribute or computed from start_url
       */
      appId?: string;
      /**
       * Recommendation for manifest's id attribute to match current id computed from start_url
       */
      recommendedId?: string;
    }
    export type getAdScriptAncestryParameters = {
      frameId: FrameId;
    }
    export type getAdScriptAncestryReturnValue = {
      /**
       * The ancestry chain of ad script identifiers leading to this frame's
creation, along with the root script's filterlist rule. The ancestry
chain is ordered from the most immediate script (in the frame creation
stack) to more distant ancestors (that created the immediately preceding
script). Only sent if frame is labelled as an ad and ids are available.
       */
      adScriptAncestry?: Network.AdAncestry;
    }
    /**
     * Returns present frame tree structure.
     */
    export type getFrameTreeParameters = {
    }
    export type getFrameTreeReturnValue = {
      /**
       * Present frame tree structure.
       */
      frameTree: FrameTree;
    }
    /**
     * Returns metrics relating to the layouting of the page, such as viewport bounds/scale.
     */
    export type getLayoutMetricsParameters = {
    }
    export type getLayoutMetricsReturnValue = {
      /**
       * Deprecated metrics relating to the layout viewport. Is in device pixels. Use `cssLayoutViewport` instead.
       */
      layoutViewport: LayoutViewport;
      /**
       * Deprecated metrics relating to the visual viewport. Is in device pixels. Use `cssVisualViewport` instead.
       */
      visualViewport: VisualViewport;
      /**
       * Deprecated size of scrollable area. Is in DP. Use `cssContentSize` instead.
       */
      contentSize: DOM.Rect;
      /**
       * Metrics relating to the layout viewport in CSS pixels.
       */
      cssLayoutViewport: LayoutViewport;
      /**
       * Metrics relating to the visual viewport in CSS pixels.
       */
      cssVisualViewport: VisualViewport;
      /**
       * Size of scrollable area in CSS pixels.
       */
      cssContentSize: DOM.Rect;
    }
    /**
     * Returns navigation history for the current page.
     */
    export type getNavigationHistoryParameters = {
    }
    export type getNavigationHistoryReturnValue = {
      /**
       * Index of the current navigation history entry.
       */
      currentIndex: number;
      /**
       * Array of navigation history entries.
       */
      entries: NavigationEntry[];
    }
    /**
     * Resets navigation history for the current page.
     */
    export type resetNavigationHistoryParameters = {
    }
    export type resetNavigationHistoryReturnValue = {
    }
    /**
     * Returns content of the given resource.
     */
    export type getResourceContentParameters = {
      /**
       * Frame id to get resource for.
       */
      frameId: FrameId;
      /**
       * URL of the resource to get content for.
       */
      url: string;
    }
    export type getResourceContentReturnValue = {
      /**
       * Resource content.
       */
      content: string;
      /**
       * True, if content was served as base64.
       */
      base64Encoded: boolean;
    }
    /**
     * Returns present frame / resource tree structure.
     */
    export type getResourceTreeParameters = {
    }
    export type getResourceTreeReturnValue = {
      /**
       * Present frame / resource tree structure.
       */
      frameTree: FrameResourceTree;
    }
    /**
     * Accepts or dismisses a JavaScript initiated dialog (alert, confirm, prompt, or onbeforeunload).
     */
    export type handleJavaScriptDialogParameters = {
      /**
       * Whether to accept or dismiss the dialog.
       */
      accept: boolean;
      /**
       * The text to enter into the dialog prompt before accepting. Used only if this is a prompt
dialog.
       */
      promptText?: string;
    }
    export type handleJavaScriptDialogReturnValue = {
    }
    /**
     * Navigates current page to the given URL.
     */
    export type navigateParameters = {
      /**
       * URL to navigate the page to.
       */
      url: string;
      /**
       * Referrer URL.
       */
      referrer?: string;
      /**
       * Intended transition type.
       */
      transitionType?: TransitionType;
      /**
       * Frame id to navigate, if not specified navigates the top frame.
       */
      frameId?: FrameId;
      /**
       * Referrer-policy used for the navigation.
       */
      referrerPolicy?: ReferrerPolicy;
    }
    export type navigateReturnValue = {
      /**
       * Frame id that has navigated (or failed to navigate)
       */
      frameId: FrameId;
      /**
       * Loader identifier. This is omitted in case of same-document navigation,
as the previously committed loaderId would not change.
       */
      loaderId?: Network.LoaderId;
      /**
       * User friendly error message, present if and only if navigation has failed.
       */
      errorText?: string;
      /**
       * Whether the navigation resulted in a download.
       */
      isDownload?: boolean;
    }
    /**
     * Navigates current page to the given history entry.
     */
    export type navigateToHistoryEntryParameters = {
      /**
       * Unique id of the entry to navigate to.
       */
      entryId: number;
    }
    export type navigateToHistoryEntryReturnValue = {
    }
    /**
     * Print page as PDF.
     */
    export type printToPDFParameters = {
      /**
       * Paper orientation. Defaults to false.
       */
      landscape?: boolean;
      /**
       * Display header and footer. Defaults to false.
       */
      displayHeaderFooter?: boolean;
      /**
       * Print background graphics. Defaults to false.
       */
      printBackground?: boolean;
      /**
       * Scale of the webpage rendering. Defaults to 1.
       */
      scale?: number;
      /**
       * Paper width in inches. Defaults to 8.5 inches.
       */
      paperWidth?: number;
      /**
       * Paper height in inches. Defaults to 11 inches.
       */
      paperHeight?: number;
      /**
       * Top margin in inches. Defaults to 1cm (~0.4 inches).
       */
      marginTop?: number;
      /**
       * Bottom margin in inches. Defaults to 1cm (~0.4 inches).
       */
      marginBottom?: number;
      /**
       * Left margin in inches. Defaults to 1cm (~0.4 inches).
       */
      marginLeft?: number;
      /**
       * Right margin in inches. Defaults to 1cm (~0.4 inches).
       */
      marginRight?: number;
      /**
       * Paper ranges to print, one based, e.g., '1-5, 8, 11-13'. Pages are
printed in the document order, not in the order specified, and no
more than once.
Defaults to empty string, which implies the entire document is printed.
The page numbers are quietly capped to actual page count of the
document, and ranges beyond the end of the document are ignored.
If this results in no pages to print, an error is reported.
It is an error to specify a range with start greater than end.
       */
      pageRanges?: string;
      /**
       * HTML template for the print header. Should be valid HTML markup with following
classes used to inject printing values into them:
- `date`: formatted print date
- `title`: document title
- `url`: document location
- `pageNumber`: current page number
- `totalPages`: total pages in the document

For example, `<span class=title></span>` would generate span containing the title.
       */
      headerTemplate?: string;
      /**
       * HTML template for the print footer. Should use the same format as the `headerTemplate`.
       */
      footerTemplate?: string;
      /**
       * Whether or not to prefer page size as defined by css. Defaults to false,
in which case the content will be scaled to fit the paper size.
       */
      preferCSSPageSize?: boolean;
      /**
       * return as stream
       */
      transferMode?: "ReturnAsBase64"|"ReturnAsStream";
      /**
       * Whether or not to generate tagged (accessible) PDF. Defaults to embedder choice.
       */
      generateTaggedPDF?: boolean;
      /**
       * Whether or not to embed the document outline into the PDF.
       */
      generateDocumentOutline?: boolean;
    }
    export type printToPDFReturnValue = {
      /**
       * Base64-encoded pdf data. Empty if |returnAsStream| is specified.
       */
      data: binary;
      /**
       * A handle of the stream that holds resulting PDF data.
       */
      stream?: IO.StreamHandle;
    }
    /**
     * Reloads given page optionally ignoring the cache.
     */
    export type reloadParameters = {
      /**
       * If true, browser cache is ignored (as if the user pressed Shift+refresh).
       */
      ignoreCache?: boolean;
      /**
       * If set, the script will be injected into all frames of the inspected page after reload.
Argument will be ignored if reloading dataURL origin.
       */
      scriptToEvaluateOnLoad?: string;
      /**
       * If set, an error will be thrown if the target page's main frame's
loader id does not match the provided id. This prevents accidentally
reloading an unintended target in case there's a racing navigation.
       */
      loaderId?: Network.LoaderId;
    }
    export type reloadReturnValue = {
    }
    /**
     * Deprecated, please use removeScriptToEvaluateOnNewDocument instead.
     */
    export type removeScriptToEvaluateOnLoadParameters = {
      identifier: ScriptIdentifier;
    }
    export type removeScriptToEvaluateOnLoadReturnValue = {
    }
    /**
     * Removes given script from the list.
     */
    export type removeScriptToEvaluateOnNewDocumentParameters = {
      identifier: ScriptIdentifier;
    }
    export type removeScriptToEvaluateOnNewDocumentReturnValue = {
    }
    /**
     * Acknowledges that a screencast frame has been received by the frontend.
     */
    export type screencastFrameAckParameters = {
      /**
       * Frame number.
       */
      sessionId: number;
    }
    export type screencastFrameAckReturnValue = {
    }
    /**
     * Searches for given string in resource content.
     */
    export type searchInResourceParameters = {
      /**
       * Frame id for resource to search in.
       */
      frameId: FrameId;
      /**
       * URL of the resource to search in.
       */
      url: string;
      /**
       * String to search for.
       */
      query: string;
      /**
       * If true, search is case sensitive.
       */
      caseSensitive?: boolean;
      /**
       * If true, treats string parameter as regex.
       */
      isRegex?: boolean;
    }
    export type searchInResourceReturnValue = {
      /**
       * List of search matches.
       */
      result: Debugger.SearchMatch[];
    }
    /**
     * Enable Chrome's experimental ad filter on all sites.
     */
    export type setAdBlockingEnabledParameters = {
      /**
       * Whether to block ads.
       */
      enabled: boolean;
    }
    export type setAdBlockingEnabledReturnValue = {
    }
    /**
     * Enable page Content Security Policy by-passing.
     */
    export type setBypassCSPParameters = {
      /**
       * Whether to bypass page CSP.
       */
      enabled: boolean;
    }
    export type setBypassCSPReturnValue = {
    }
    /**
     * Get Permissions Policy state on given frame.
     */
    export type getPermissionsPolicyStateParameters = {
      frameId: FrameId;
    }
    export type getPermissionsPolicyStateReturnValue = {
      states: PermissionsPolicyFeatureState[];
    }
    /**
     * Get Origin Trials on given frame.
     */
    export type getOriginTrialsParameters = {
      frameId: FrameId;
    }
    export type getOriginTrialsReturnValue = {
      originTrials: OriginTrial[];
    }
    /**
     * Overrides the values of device screen dimensions (window.screen.width, window.screen.height,
window.innerWidth, window.innerHeight, and "device-width"/"device-height"-related CSS media
query results).
     */
    export type setDeviceMetricsOverrideParameters = {
      /**
       * Overriding width value in pixels (minimum 0, maximum 10000000). 0 disables the override.
       */
      width: number;
      /**
       * Overriding height value in pixels (minimum 0, maximum 10000000). 0 disables the override.
       */
      height: number;
      /**
       * Overriding device scale factor value. 0 disables the override.
       */
      deviceScaleFactor: number;
      /**
       * Whether to emulate mobile device. This includes viewport meta tag, overlay scrollbars, text
autosizing and more.
       */
      mobile: boolean;
      /**
       * Scale to apply to resulting view image.
       */
      scale?: number;
      /**
       * Overriding screen width value in pixels (minimum 0, maximum 10000000).
       */
      screenWidth?: number;
      /**
       * Overriding screen height value in pixels (minimum 0, maximum 10000000).
       */
      screenHeight?: number;
      /**
       * Overriding view X position on screen in pixels (minimum 0, maximum 10000000).
       */
      positionX?: number;
      /**
       * Overriding view Y position on screen in pixels (minimum 0, maximum 10000000).
       */
      positionY?: number;
      /**
       * Do not set visible view size, rely upon explicit setVisibleSize call.
       */
      dontSetVisibleSize?: boolean;
      /**
       * Screen orientation override.
       */
      screenOrientation?: Emulation.ScreenOrientation;
      /**
       * The viewport dimensions and scale. If not set, the override is cleared.
       */
      viewport?: Viewport;
    }
    export type setDeviceMetricsOverrideReturnValue = {
    }
    /**
     * Overrides the Device Orientation.
     */
    export type setDeviceOrientationOverrideParameters = {
      /**
       * Mock alpha
       */
      alpha: number;
      /**
       * Mock beta
       */
      beta: number;
      /**
       * Mock gamma
       */
      gamma: number;
    }
    export type setDeviceOrientationOverrideReturnValue = {
    }
    /**
     * Set generic font families.
     */
    export type setFontFamiliesParameters = {
      /**
       * Specifies font families to set. If a font family is not specified, it won't be changed.
       */
      fontFamilies: FontFamilies;
      /**
       * Specifies font families to set for individual scripts.
       */
      forScripts?: ScriptFontFamilies[];
    }
    export type setFontFamiliesReturnValue = {
    }
    /**
     * Set default font sizes.
     */
    export type setFontSizesParameters = {
      /**
       * Specifies font sizes to set. If a font size is not specified, it won't be changed.
       */
      fontSizes: FontSizes;
    }
    export type setFontSizesReturnValue = {
    }
    /**
     * Sets given markup as the document's HTML.
     */
    export type setDocumentContentParameters = {
      /**
       * Frame id to set HTML for.
       */
      frameId: FrameId;
      /**
       * HTML content to set.
       */
      html: string;
    }
    export type setDocumentContentReturnValue = {
    }
    /**
     * Set the behavior when downloading a file.
     */
    export type setDownloadBehaviorParameters = {
      /**
       * Whether to allow all or deny all download requests, or use default Chrome behavior if
available (otherwise deny).
       */
      behavior: "deny"|"allow"|"default";
      /**
       * The default path to save downloaded files to. This is required if behavior is set to 'allow'
       */
      downloadPath?: string;
    }
    export type setDownloadBehaviorReturnValue = {
    }
    /**
     * Overrides the Geolocation Position or Error. Omitting any of the parameters emulates position
unavailable.
     */
    export type setGeolocationOverrideParameters = {
      /**
       * Mock latitude
       */
      latitude?: number;
      /**
       * Mock longitude
       */
      longitude?: number;
      /**
       * Mock accuracy
       */
      accuracy?: number;
    }
    export type setGeolocationOverrideReturnValue = {
    }
    /**
     * Controls whether page will emit lifecycle events.
     */
    export type setLifecycleEventsEnabledParameters = {
      /**
       * If true, starts emitting lifecycle events.
       */
      enabled: boolean;
    }
    export type setLifecycleEventsEnabledReturnValue = {
    }
    /**
     * Toggles mouse event-based touch event emulation.
     */
    export type setTouchEmulationEnabledParameters = {
      /**
       * Whether the touch event emulation should be enabled.
       */
      enabled: boolean;
      /**
       * Touch/gesture events configuration. Default: current platform.
       */
      configuration?: "mobile"|"desktop";
    }
    export type setTouchEmulationEnabledReturnValue = {
    }
    /**
     * Starts sending each frame using the `screencastFrame` event.
     */
    export type startScreencastParameters = {
      /**
       * Image compression format.
       */
      format?: "jpeg"|"png";
      /**
       * Compression quality from range [0..100].
       */
      quality?: number;
      /**
       * Maximum screenshot width.
       */
      maxWidth?: number;
      /**
       * Maximum screenshot height.
       */
      maxHeight?: number;
      /**
       * Send every n-th frame.
       */
      everyNthFrame?: number;
    }
    export type startScreencastReturnValue = {
    }
    /**
     * Force the page stop all navigations and pending resource fetches.
     */
    export type stopLoadingParameters = {
    }
    export type stopLoadingReturnValue = {
    }
    /**
     * Crashes renderer on the IO thread, generates minidumps.
     */
    export type crashParameters = {
    }
    export type crashReturnValue = {
    }
    /**
     * Tries to close page, running its beforeunload hooks, if any.
     */
    export type closeParameters = {
    }
    export type closeReturnValue = {
    }
    /**
     * Tries to update the web lifecycle state of the page.
It will transition the page to the given state according to:
https://github.com/WICG/web-lifecycle/
     */
    export type setWebLifecycleStateParameters = {
      /**
       * Target lifecycle state
       */
      state: "frozen"|"active";
    }
    export type setWebLifecycleStateReturnValue = {
    }
    /**
     * Stops sending each frame in the `screencastFrame`.
     */
    export type stopScreencastParameters = {
    }
    export type stopScreencastReturnValue = {
    }
    /**
     * Requests backend to produce compilation cache for the specified scripts.
`scripts` are appended to the list of scripts for which the cache
would be produced. The list may be reset during page navigation.
When script with a matching URL is encountered, the cache is optionally
produced upon backend discretion, based on internal heuristics.
See also: `Page.compilationCacheProduced`.
     */
    export type produceCompilationCacheParameters = {
      scripts: CompilationCacheParams[];
    }
    export type produceCompilationCacheReturnValue = {
    }
    /**
     * Seeds compilation cache for given url. Compilation cache does not survive
cross-process navigation.
     */
    export type addCompilationCacheParameters = {
      url: string;
      /**
       * Base64-encoded data
       */
      data: binary;
    }
    export type addCompilationCacheReturnValue = {
    }
    /**
     * Clears seeded compilation cache.
     */
    export type clearCompilationCacheParameters = {
    }
    export type clearCompilationCacheReturnValue = {
    }
    /**
     * Sets the Secure Payment Confirmation transaction mode.
https://w3c.github.io/secure-payment-confirmation/#sctn-automation-set-spc-transaction-mode
     */
    export type setSPCTransactionModeParameters = {
      mode: "none"|"autoAccept"|"autoChooseToAuthAnotherWay"|"autoReject"|"autoOptOut";
    }
    export type setSPCTransactionModeReturnValue = {
    }
    /**
     * Extensions for Custom Handlers API:
https://html.spec.whatwg.org/multipage/system-state.html#rph-automation
     */
    export type setRPHRegistrationModeParameters = {
      mode: "none"|"autoAccept"|"autoReject";
    }
    export type setRPHRegistrationModeReturnValue = {
    }
    /**
     * Generates a report for testing.
     */
    export type generateTestReportParameters = {
      /**
       * Message to be displayed in the report.
       */
      message: string;
      /**
       * Specifies the endpoint group to deliver the report to.
       */
      group?: string;
    }
    export type generateTestReportReturnValue = {
    }
    /**
     * Pauses page execution. Can be resumed using generic Runtime.runIfWaitingForDebugger.
     */
    export type waitForDebuggerParameters = {
    }
    export type waitForDebuggerReturnValue = {
    }
    /**
     * Intercept file chooser requests and transfer control to protocol clients.
When file chooser interception is enabled, native file chooser dialog is not shown.
Instead, a protocol event `Page.fileChooserOpened` is emitted.
     */
    export type setInterceptFileChooserDialogParameters = {
      enabled: boolean;
      /**
       * If true, cancels the dialog by emitting relevant events (if any)
in addition to not showing it if the interception is enabled
(default: false).
       */
      cancel?: boolean;
    }
    export type setInterceptFileChooserDialogReturnValue = {
    }
    /**
     * Enable/disable prerendering manually.

This command is a short-term solution for https://crbug.com/1440085.
See https://docs.google.com/document/d/12HVmFxYj5Jc-eJr5OmWsa2bqTJsbgGLKI6ZIyx0_wpA
for more details.

TODO(https://crbug.com/1440085): Remove this once Puppeteer supports tab targets.
     */
    export type setPrerenderingAllowedParameters = {
      isAllowed: boolean;
    }
    export type setPrerenderingAllowedReturnValue = {
    }
    /**
     * Get the annotated page content for the main frame.
This is an experimental command that is subject to change.
     */
    export type getAnnotatedPageContentParameters = {
      /**
       * Whether to include actionable information. Defaults to true.
       */
      includeActionableInformation?: boolean;
    }
    export type getAnnotatedPageContentReturnValue = {
      /**
       * The annotated page content as a base64 encoded protobuf.
The format is defined by the `AnnotatedPageContent` message in
components/optimization_guide/proto/features/common_quality_data.proto
       */
      content: binary;
    }
  }
  
  export namespace Performance {
    /**
     * Run-time execution metric.
     */
    export interface Metric {
      /**
       * Metric name.
       */
      name: string;
      /**
       * Metric value.
       */
      value: number;
    }
    
    /**
     * Current values of the metrics.
     */
    export type metricsPayload = {
      /**
       * Current values of the metrics.
       */
      metrics: Metric[];
      /**
       * Timestamp title.
       */
      title: string;
    }
    
    /**
     * Disable collecting and reporting metrics.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enable collecting and reporting metrics.
     */
    export type enableParameters = {
      /**
       * Time domain to use for collecting and reporting duration metrics.
       */
      timeDomain?: "timeTicks"|"threadTicks";
    }
    export type enableReturnValue = {
    }
    /**
     * Sets time domain to use for collecting and reporting duration metrics.
Note that this must be called before enabling metrics collection. Calling
this method while metrics collection is enabled returns an error.
     */
    export type setTimeDomainParameters = {
      /**
       * Time domain
       */
      timeDomain: "timeTicks"|"threadTicks";
    }
    export type setTimeDomainReturnValue = {
    }
    /**
     * Retrieve current values of run-time metrics.
     */
    export type getMetricsParameters = {
    }
    export type getMetricsReturnValue = {
      /**
       * Current values for run-time metrics.
       */
      metrics: Metric[];
    }
  }
  
  /**
   * Reporting of performance timeline events, as specified in
https://w3c.github.io/performance-timeline/#dom-performanceobserver.
   */
  export namespace PerformanceTimeline {
    /**
     * See https://github.com/WICG/LargestContentfulPaint and largest_contentful_paint.idl
     */
    export interface LargestContentfulPaint {
      renderTime: Network.TimeSinceEpoch;
      loadTime: Network.TimeSinceEpoch;
      /**
       * The number of pixels being painted.
       */
      size: number;
      /**
       * The id attribute of the element, if available.
       */
      elementId?: string;
      /**
       * The URL of the image (may be trimmed).
       */
      url?: string;
      nodeId?: DOM.BackendNodeId;
    }
    export interface LayoutShiftAttribution {
      previousRect: DOM.Rect;
      currentRect: DOM.Rect;
      nodeId?: DOM.BackendNodeId;
    }
    /**
     * See https://wicg.github.io/layout-instability/#sec-layout-shift and layout_shift.idl
     */
    export interface LayoutShift {
      /**
       * Score increment produced by this event.
       */
      value: number;
      hadRecentInput: boolean;
      lastInputTime: Network.TimeSinceEpoch;
      sources: LayoutShiftAttribution[];
    }
    export interface TimelineEvent {
      /**
       * Identifies the frame that this event is related to. Empty for non-frame targets.
       */
      frameId: Page.FrameId;
      /**
       * The event type, as specified in https://w3c.github.io/performance-timeline/#dom-performanceentry-entrytype
This determines which of the optional "details" fields is present.
       */
      type: string;
      /**
       * Name may be empty depending on the type.
       */
      name: string;
      /**
       * Time in seconds since Epoch, monotonically increasing within document lifetime.
       */
      time: Network.TimeSinceEpoch;
      /**
       * Event duration, if applicable.
       */
      duration?: number;
      lcpDetails?: LargestContentfulPaint;
      layoutShiftDetails?: LayoutShift;
    }
    
    /**
     * Sent when a performance timeline event is added. See reportPerformanceTimeline method.
     */
    export type timelineEventAddedPayload = {
      event: TimelineEvent;
    }
    
    /**
     * Previously buffered events would be reported before method returns.
See also: timelineEventAdded
     */
    export type enableParameters = {
      /**
       * The types of event to report, as specified in
https://w3c.github.io/performance-timeline/#dom-performanceentry-entrytype
The specified filter overrides any previous filters, passing empty
filter disables recording.
Note that not all types exposed to the web platform are currently supported.
       */
      eventTypes: string[];
    }
    export type enableReturnValue = {
    }
  }
  
  export namespace Preload {
    /**
     * Unique id
     */
    export type RuleSetId = string;
    /**
     * Corresponds to SpeculationRuleSet
     */
    export interface RuleSet {
      id: RuleSetId;
      /**
       * Identifies a document which the rule set is associated with.
       */
      loaderId: Network.LoaderId;
      /**
       * Source text of JSON representing the rule set. If it comes from
`<script>` tag, it is the textContent of the node. Note that it is
a JSON for valid case.

See also:
- https://wicg.github.io/nav-speculation/speculation-rules.html
- https://github.com/WICG/nav-speculation/blob/main/triggers.md
       */
      sourceText: string;
      /**
       * A speculation rule set is either added through an inline
`<script>` tag or through an external resource via the
'Speculation-Rules' HTTP header. For the first case, we include
the BackendNodeId of the relevant `<script>` tag. For the second
case, we include the external URL where the rule set was loaded
from, and also RequestId if Network domain is enabled.

See also:
- https://wicg.github.io/nav-speculation/speculation-rules.html#speculation-rules-script
- https://wicg.github.io/nav-speculation/speculation-rules.html#speculation-rules-header
       */
      backendNodeId?: DOM.BackendNodeId;
      url?: string;
      requestId?: Network.RequestId;
      /**
       * Error information
`errorMessage` is null iff `errorType` is null.
       */
      errorType?: RuleSetErrorType;
      /**
       * TODO(https://crbug.com/1425354): Replace this property with structured error.
       */
      errorMessage?: string;
      /**
       * For more details, see:
https://github.com/WICG/nav-speculation/blob/main/speculation-rules-tags.md
       */
      tag?: string;
    }
    export type RuleSetErrorType = "SourceIsNotJsonObject"|"InvalidRulesSkipped"|"InvalidRulesetLevelTag";
    /**
     * The type of preloading attempted. It corresponds to
mojom::SpeculationAction (although PrefetchWithSubresources is omitted as it
isn't being used by clients).
     */
    export type SpeculationAction = "Prefetch"|"Prerender"|"PrerenderUntilScript";
    /**
     * Corresponds to mojom::SpeculationTargetHint.
See https://github.com/WICG/nav-speculation/blob/main/triggers.md#window-name-targeting-hints
     */
    export type SpeculationTargetHint = "Blank"|"Self";
    /**
     * A key that identifies a preloading attempt.

The url used is the url specified by the trigger (i.e. the initial URL), and
not the final url that is navigated to. For example, prerendering allows
same-origin main frame navigations during the attempt, but the attempt is
still keyed with the initial URL.
     */
    export interface PreloadingAttemptKey {
      loaderId: Network.LoaderId;
      action: SpeculationAction;
      url: string;
      formSubmission?: boolean;
      targetHint?: SpeculationTargetHint;
    }
    /**
     * Lists sources for a preloading attempt, specifically the ids of rule sets
that had a speculation rule that triggered the attempt, and the
BackendNodeIds of <a href> or <area href> elements that triggered the
attempt (in the case of attempts triggered by a document rule). It is
possible for multiple rule sets and links to trigger a single attempt.
     */
    export interface PreloadingAttemptSource {
      key: PreloadingAttemptKey;
      ruleSetIds: RuleSetId[];
      nodeIds: DOM.BackendNodeId[];
    }
    /**
     * Chrome manages different types of preloads together using a
concept of preloading pipeline. For example, if a site uses a
SpeculationRules for prerender, Chrome first starts a prefetch and
then upgrades it to prerender.

CDP events for them are emitted separately but they share
`PreloadPipelineId`.
     */
    export type PreloadPipelineId = string;
    /**
     * List of FinalStatus reasons for Prerender2.
     */
    export type PrerenderFinalStatus = "Activated"|"Destroyed"|"LowEndDevice"|"InvalidSchemeRedirect"|"InvalidSchemeNavigation"|"NavigationRequestBlockedByCsp"|"MojoBinderPolicy"|"RendererProcessCrashed"|"RendererProcessKilled"|"Download"|"TriggerDestroyed"|"NavigationNotCommitted"|"NavigationBadHttpStatus"|"ClientCertRequested"|"NavigationRequestNetworkError"|"CancelAllHostsForTesting"|"DidFailLoad"|"Stop"|"SslCertificateError"|"LoginAuthRequested"|"UaChangeRequiresReload"|"BlockedByClient"|"AudioOutputDeviceRequested"|"MixedContent"|"TriggerBackgrounded"|"MemoryLimitExceeded"|"DataSaverEnabled"|"TriggerUrlHasEffectiveUrl"|"ActivatedBeforeStarted"|"InactivePageRestriction"|"StartFailed"|"TimeoutBackgrounded"|"CrossSiteRedirectInInitialNavigation"|"CrossSiteNavigationInInitialNavigation"|"SameSiteCrossOriginRedirectNotOptInInInitialNavigation"|"SameSiteCrossOriginNavigationNotOptInInInitialNavigation"|"ActivationNavigationParameterMismatch"|"ActivatedInBackground"|"EmbedderHostDisallowed"|"ActivationNavigationDestroyedBeforeSuccess"|"TabClosedByUserGesture"|"TabClosedWithoutUserGesture"|"PrimaryMainFrameRendererProcessCrashed"|"PrimaryMainFrameRendererProcessKilled"|"ActivationFramePolicyNotCompatible"|"PreloadingDisabled"|"BatterySaverEnabled"|"ActivatedDuringMainFrameNavigation"|"PreloadingUnsupportedByWebContents"|"CrossSiteRedirectInMainFrameNavigation"|"CrossSiteNavigationInMainFrameNavigation"|"SameSiteCrossOriginRedirectNotOptInInMainFrameNavigation"|"SameSiteCrossOriginNavigationNotOptInInMainFrameNavigation"|"MemoryPressureOnTrigger"|"MemoryPressureAfterTriggered"|"PrerenderingDisabledByDevTools"|"SpeculationRuleRemoved"|"ActivatedWithAuxiliaryBrowsingContexts"|"MaxNumOfRunningEagerPrerendersExceeded"|"MaxNumOfRunningNonEagerPrerendersExceeded"|"MaxNumOfRunningEmbedderPrerendersExceeded"|"PrerenderingUrlHasEffectiveUrl"|"RedirectedPrerenderingUrlHasEffectiveUrl"|"ActivationUrlHasEffectiveUrl"|"JavaScriptInterfaceAdded"|"JavaScriptInterfaceRemoved"|"AllPrerenderingCanceled"|"WindowClosed"|"SlowNetwork"|"OtherPrerenderedPageActivated"|"V8OptimizerDisabled"|"PrerenderFailedDuringPrefetch"|"BrowsingDataRemoved"|"PrerenderHostReused"|"FormSubmitWhenPrerendering";
    /**
     * Preloading status values, see also PreloadingTriggeringOutcome. This
status is shared by prefetchStatusUpdated and prerenderStatusUpdated.
     */
    export type PreloadingStatus = "Pending"|"Running"|"Ready"|"Success"|"Failure"|"NotSupported";
    /**
     * TODO(https://crbug.com/1384419): revisit the list of PrefetchStatus and
filter out the ones that aren't necessary to the developers.
     */
    export type PrefetchStatus = "PrefetchAllowed"|"PrefetchFailedIneligibleRedirect"|"PrefetchFailedInvalidRedirect"|"PrefetchFailedMIMENotSupported"|"PrefetchFailedNetError"|"PrefetchFailedNon2XX"|"PrefetchEvictedAfterBrowsingDataRemoved"|"PrefetchEvictedAfterCandidateRemoved"|"PrefetchEvictedForNewerPrefetch"|"PrefetchHeldback"|"PrefetchIneligibleRetryAfter"|"PrefetchIsPrivacyDecoy"|"PrefetchIsStale"|"PrefetchNotEligibleBrowserContextOffTheRecord"|"PrefetchNotEligibleDataSaverEnabled"|"PrefetchNotEligibleExistingProxy"|"PrefetchNotEligibleHostIsNonUnique"|"PrefetchNotEligibleNonDefaultStoragePartition"|"PrefetchNotEligibleSameSiteCrossOriginPrefetchRequiredProxy"|"PrefetchNotEligibleSchemeIsNotHttps"|"PrefetchNotEligibleUserHasCookies"|"PrefetchNotEligibleUserHasServiceWorker"|"PrefetchNotEligibleUserHasServiceWorkerNoFetchHandler"|"PrefetchNotEligibleRedirectFromServiceWorker"|"PrefetchNotEligibleRedirectToServiceWorker"|"PrefetchNotEligibleBatterySaverEnabled"|"PrefetchNotEligiblePreloadingDisabled"|"PrefetchNotFinishedInTime"|"PrefetchNotStarted"|"PrefetchNotUsedCookiesChanged"|"PrefetchProxyNotAvailable"|"PrefetchResponseUsed"|"PrefetchSuccessfulButNotUsed"|"PrefetchNotUsedProbeFailed";
    /**
     * Information of headers to be displayed when the header mismatch occurred.
     */
    export interface PrerenderMismatchedHeaders {
      headerName: string;
      initialValue?: string;
      activationValue?: string;
    }
    
    /**
     * Upsert. Currently, it is only emitted when a rule set added.
     */
    export type ruleSetUpdatedPayload = {
      ruleSet: RuleSet;
    }
    export type ruleSetRemovedPayload = {
      id: RuleSetId;
    }
    /**
     * Fired when a preload enabled state is updated.
     */
    export type preloadEnabledStateUpdatedPayload = {
      disabledByPreference: boolean;
      disabledByDataSaver: boolean;
      disabledByBatterySaver: boolean;
      disabledByHoldbackPrefetchSpeculationRules: boolean;
      disabledByHoldbackPrerenderSpeculationRules: boolean;
    }
    /**
     * Fired when a prefetch attempt is updated.
     */
    export type prefetchStatusUpdatedPayload = {
      key: PreloadingAttemptKey;
      pipelineId: PreloadPipelineId;
      /**
       * The frame id of the frame initiating prefetch.
       */
      initiatingFrameId: Page.FrameId;
      prefetchUrl: string;
      status: PreloadingStatus;
      prefetchStatus: PrefetchStatus;
      requestId: Network.RequestId;
    }
    /**
     * Fired when a prerender attempt is updated.
     */
    export type prerenderStatusUpdatedPayload = {
      key: PreloadingAttemptKey;
      pipelineId: PreloadPipelineId;
      status: PreloadingStatus;
      prerenderStatus?: PrerenderFinalStatus;
      /**
       * This is used to give users more information about the name of Mojo interface
that is incompatible with prerender and has caused the cancellation of the attempt.
       */
      disallowedMojoInterface?: string;
      mismatchedHeaders?: PrerenderMismatchedHeaders[];
    }
    /**
     * Send a list of sources for all preloading attempts in a document.
     */
    export type preloadingAttemptSourcesUpdatedPayload = {
      loaderId: Network.LoaderId;
      preloadingAttemptSources: PreloadingAttemptSource[];
    }
    
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
  }
  
  export namespace Security {
    /**
     * An internal certificate ID value.
     */
    export type CertificateId = number;
    /**
     * A description of mixed content (HTTP resources on HTTPS pages), as defined by
https://www.w3.org/TR/mixed-content/#categories
     */
    export type MixedContentType = "blockable"|"optionally-blockable"|"none";
    /**
     * The security level of a page or resource.
     */
    export type SecurityState = "unknown"|"neutral"|"insecure"|"secure"|"info"|"insecure-broken";
    /**
     * Details about the security state of the page certificate.
     */
    export interface CertificateSecurityState {
      /**
       * Protocol name (e.g. "TLS 1.2" or "QUIC").
       */
      protocol: string;
      /**
       * Key Exchange used by the connection, or the empty string if not applicable.
       */
      keyExchange: string;
      /**
       * (EC)DH group used by the connection, if applicable.
       */
      keyExchangeGroup?: string;
      /**
       * Cipher name.
       */
      cipher: string;
      /**
       * TLS MAC. Note that AEAD ciphers do not have separate MACs.
       */
      mac?: string;
      /**
       * Page certificate.
       */
      certificate: string[];
      /**
       * Certificate subject name.
       */
      subjectName: string;
      /**
       * Name of the issuing CA.
       */
      issuer: string;
      /**
       * Certificate valid from date.
       */
      validFrom: Network.TimeSinceEpoch;
      /**
       * Certificate valid to (expiration) date
       */
      validTo: Network.TimeSinceEpoch;
      /**
       * The highest priority network error code, if the certificate has an error.
       */
      certificateNetworkError?: string;
      /**
       * True if the certificate uses a weak signature algorithm.
       */
      certificateHasWeakSignature: boolean;
      /**
       * True if the certificate has a SHA1 signature in the chain.
       */
      certificateHasSha1Signature: boolean;
      /**
       * True if modern SSL
       */
      modernSSL: boolean;
      /**
       * True if the connection is using an obsolete SSL protocol.
       */
      obsoleteSslProtocol: boolean;
      /**
       * True if the connection is using an obsolete SSL key exchange.
       */
      obsoleteSslKeyExchange: boolean;
      /**
       * True if the connection is using an obsolete SSL cipher.
       */
      obsoleteSslCipher: boolean;
      /**
       * True if the connection is using an obsolete SSL signature.
       */
      obsoleteSslSignature: boolean;
    }
    export type SafetyTipStatus = "badReputation"|"lookalike";
    export interface SafetyTipInfo {
      /**
       * Describes whether the page triggers any safety tips or reputation warnings. Default is unknown.
       */
      safetyTipStatus: SafetyTipStatus;
      /**
       * The URL the safety tip suggested ("Did you mean?"). Only filled in for lookalike matches.
       */
      safeUrl?: string;
    }
    /**
     * Security state information about the page.
     */
    export interface VisibleSecurityState {
      /**
       * The security level of the page.
       */
      securityState: SecurityState;
      /**
       * Security state details about the page certificate.
       */
      certificateSecurityState?: CertificateSecurityState;
      /**
       * The type of Safety Tip triggered on the page. Note that this field will be set even if the Safety Tip UI was not actually shown.
       */
      safetyTipInfo?: SafetyTipInfo;
      /**
       * Array of security state issues ids.
       */
      securityStateIssueIds: string[];
    }
    /**
     * An explanation of an factor contributing to the security state.
     */
    export interface SecurityStateExplanation {
      /**
       * Security state representing the severity of the factor being explained.
       */
      securityState: SecurityState;
      /**
       * Title describing the type of factor.
       */
      title: string;
      /**
       * Short phrase describing the type of factor.
       */
      summary: string;
      /**
       * Full text explanation of the factor.
       */
      description: string;
      /**
       * The type of mixed content described by the explanation.
       */
      mixedContentType: MixedContentType;
      /**
       * Page certificate.
       */
      certificate: string[];
      /**
       * Recommendations to fix any issues.
       */
      recommendations?: string[];
    }
    /**
     * Information about insecure content on the page.
     */
    export interface InsecureContentStatus {
      /**
       * Always false.
       */
      ranMixedContent: boolean;
      /**
       * Always false.
       */
      displayedMixedContent: boolean;
      /**
       * Always false.
       */
      containedMixedForm: boolean;
      /**
       * Always false.
       */
      ranContentWithCertErrors: boolean;
      /**
       * Always false.
       */
      displayedContentWithCertErrors: boolean;
      /**
       * Always set to unknown.
       */
      ranInsecureContentStyle: SecurityState;
      /**
       * Always set to unknown.
       */
      displayedInsecureContentStyle: SecurityState;
    }
    /**
     * The action to take when a certificate error occurs. continue will continue processing the
request and cancel will cancel the request.
     */
    export type CertificateErrorAction = "continue"|"cancel";
    
    /**
     * There is a certificate error. If overriding certificate errors is enabled, then it should be
handled with the `handleCertificateError` command. Note: this event does not fire if the
certificate error has been allowed internally. Only one client per target should override
certificate errors at the same time.
     */
    export type certificateErrorPayload = {
      /**
       * The ID of the event.
       */
      eventId: number;
      /**
       * The type of the error.
       */
      errorType: string;
      /**
       * The url that was requested.
       */
      requestURL: string;
    }
    /**
     * The security state of the page changed.
     */
    export type visibleSecurityStateChangedPayload = {
      /**
       * Security state information about the page.
       */
      visibleSecurityState: VisibleSecurityState;
    }
    /**
     * The security state of the page changed. No longer being sent.
     */
    export type securityStateChangedPayload = {
      /**
       * Security state.
       */
      securityState: SecurityState;
      /**
       * True if the page was loaded over cryptographic transport such as HTTPS.
       */
      schemeIsCryptographic: boolean;
      /**
       * Previously a list of explanations for the security state. Now always
empty.
       */
      explanations: SecurityStateExplanation[];
      /**
       * Information about insecure content on the page.
       */
      insecureContentStatus: InsecureContentStatus;
      /**
       * Overrides user-visible description of the state. Always omitted.
       */
      summary?: string;
    }
    
    /**
     * Disables tracking security state changes.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables tracking security state changes.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Enable/disable whether all certificate errors should be ignored.
     */
    export type setIgnoreCertificateErrorsParameters = {
      /**
       * If true, all certificate errors will be ignored.
       */
      ignore: boolean;
    }
    export type setIgnoreCertificateErrorsReturnValue = {
    }
    /**
     * Handles a certificate error that fired a certificateError event.
     */
    export type handleCertificateErrorParameters = {
      /**
       * The ID of the event.
       */
      eventId: number;
      /**
       * The action to take on the certificate error.
       */
      action: CertificateErrorAction;
    }
    export type handleCertificateErrorReturnValue = {
    }
    /**
     * Enable/disable overriding certificate errors. If enabled, all certificate error events need to
be handled by the DevTools client and should be answered with `handleCertificateError` commands.
     */
    export type setOverrideCertificateErrorsParameters = {
      /**
       * If true, certificate errors will be overridden.
       */
      override: boolean;
    }
    export type setOverrideCertificateErrorsReturnValue = {
    }
  }
  
  export namespace ServiceWorker {
    export type RegistrationID = string;
    /**
     * ServiceWorker registration.
     */
    export interface ServiceWorkerRegistration {
      registrationId: RegistrationID;
      scopeURL: string;
      isDeleted: boolean;
    }
    export type ServiceWorkerVersionRunningStatus = "stopped"|"starting"|"running"|"stopping";
    export type ServiceWorkerVersionStatus = "new"|"installing"|"installed"|"activating"|"activated"|"redundant";
    /**
     * ServiceWorker version.
     */
    export interface ServiceWorkerVersion {
      versionId: string;
      registrationId: RegistrationID;
      scriptURL: string;
      runningStatus: ServiceWorkerVersionRunningStatus;
      status: ServiceWorkerVersionStatus;
      /**
       * The Last-Modified header value of the main script.
       */
      scriptLastModified?: number;
      /**
       * The time at which the response headers of the main script were received from the server.
For cached script it is the last time the cache entry was validated.
       */
      scriptResponseTime?: number;
      controlledClients?: Target.TargetID[];
      targetId?: Target.TargetID;
      routerRules?: string;
    }
    /**
     * ServiceWorker error message.
     */
    export interface ServiceWorkerErrorMessage {
      errorMessage: string;
      registrationId: RegistrationID;
      versionId: string;
      sourceURL: string;
      lineNumber: number;
      columnNumber: number;
    }
    
    export type workerErrorReportedPayload = {
      errorMessage: ServiceWorkerErrorMessage;
    }
    export type workerRegistrationUpdatedPayload = {
      registrations: ServiceWorkerRegistration[];
    }
    export type workerVersionUpdatedPayload = {
      versions: ServiceWorkerVersion[];
    }
    
    export type deliverPushMessageParameters = {
      origin: string;
      registrationId: RegistrationID;
      data: string;
    }
    export type deliverPushMessageReturnValue = {
    }
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    export type dispatchSyncEventParameters = {
      origin: string;
      registrationId: RegistrationID;
      tag: string;
      lastChance: boolean;
    }
    export type dispatchSyncEventReturnValue = {
    }
    export type dispatchPeriodicSyncEventParameters = {
      origin: string;
      registrationId: RegistrationID;
      tag: string;
    }
    export type dispatchPeriodicSyncEventReturnValue = {
    }
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    export type setForceUpdateOnPageLoadParameters = {
      forceUpdateOnPageLoad: boolean;
    }
    export type setForceUpdateOnPageLoadReturnValue = {
    }
    export type skipWaitingParameters = {
      scopeURL: string;
    }
    export type skipWaitingReturnValue = {
    }
    export type startWorkerParameters = {
      scopeURL: string;
    }
    export type startWorkerReturnValue = {
    }
    export type stopAllWorkersParameters = {
    }
    export type stopAllWorkersReturnValue = {
    }
    export type stopWorkerParameters = {
      versionId: string;
    }
    export type stopWorkerReturnValue = {
    }
    export type unregisterParameters = {
      scopeURL: string;
    }
    export type unregisterReturnValue = {
    }
    export type updateRegistrationParameters = {
      scopeURL: string;
    }
    export type updateRegistrationReturnValue = {
    }
  }
  
  export namespace SmartCardEmulation {
    /**
     * Indicates the PC/SC error code.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__ErrorCodes.html
Microsoft: https://learn.microsoft.com/en-us/windows/win32/secauthn/authentication-return-values
     */
    export type ResultCode = "success"|"removed-card"|"reset-card"|"unpowered-card"|"unresponsive-card"|"unsupported-card"|"reader-unavailable"|"sharing-violation"|"not-transacted"|"no-smartcard"|"proto-mismatch"|"system-cancelled"|"not-ready"|"cancelled"|"insufficient-buffer"|"invalid-handle"|"invalid-parameter"|"invalid-value"|"no-memory"|"timeout"|"unknown-reader"|"unsupported-feature"|"no-readers-available"|"service-stopped"|"no-service"|"comm-error"|"internal-error"|"server-too-busy"|"unexpected"|"shutdown"|"unknown-card"|"unknown";
    /**
     * Maps to the |SCARD_SHARE_*| values.
     */
    export type ShareMode = "shared"|"exclusive"|"direct";
    /**
     * Indicates what the reader should do with the card.
     */
    export type Disposition = "leave-card"|"reset-card"|"unpower-card"|"eject-card";
    /**
     * Maps to |SCARD_*| connection state values.
     */
    export type ConnectionState = "absent"|"present"|"swallowed"|"powered"|"negotiable"|"specific";
    /**
     * Maps to the |SCARD_STATE_*| flags.
     */
    export interface ReaderStateFlags {
      unaware?: boolean;
      ignore?: boolean;
      changed?: boolean;
      unknown?: boolean;
      unavailable?: boolean;
      empty?: boolean;
      present?: boolean;
      exclusive?: boolean;
      inuse?: boolean;
      mute?: boolean;
      unpowered?: boolean;
    }
    /**
     * Maps to the |SCARD_PROTOCOL_*| flags.
     */
    export interface ProtocolSet {
      t0?: boolean;
      t1?: boolean;
      raw?: boolean;
    }
    /**
     * Maps to the |SCARD_PROTOCOL_*| values.
     */
    export type Protocol = "t0"|"t1"|"raw";
    export interface ReaderStateIn {
      reader: string;
      currentState: ReaderStateFlags;
      currentInsertionCount: number;
    }
    export interface ReaderStateOut {
      reader: string;
      eventState: ReaderStateFlags;
      eventCount: number;
      atr: binary;
    }
    
    /**
     * Fired when |SCardEstablishContext| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gaa1b8970169fd4883a6dc4a8f43f19b67
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardestablishcontext
     */
    export type establishContextRequestedPayload = {
      requestId: string;
    }
    /**
     * Fired when |SCardReleaseContext| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga6aabcba7744c5c9419fdd6404f73a934
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardreleasecontext
     */
    export type releaseContextRequestedPayload = {
      requestId: string;
      contextId: number;
    }
    /**
     * Fired when |SCardListReaders| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga93b07815789b3cf2629d439ecf20f0d9
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardlistreadersa
     */
    export type listReadersRequestedPayload = {
      requestId: string;
      contextId: number;
    }
    /**
     * Fired when |SCardGetStatusChange| is called. Timeout is specified in milliseconds.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga33247d5d1257d59e55647c3bb717db24
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardgetstatuschangea
     */
    export type getStatusChangeRequestedPayload = {
      requestId: string;
      contextId: number;
      readerStates: ReaderStateIn[];
      /**
       * in milliseconds, if absent, it means "infinite"
       */
      timeout?: number;
    }
    /**
     * Fired when |SCardCancel| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gaacbbc0c6d6c0cbbeb4f4debf6fbeeee6
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardcancel
     */
    export type cancelRequestedPayload = {
      requestId: string;
      contextId: number;
    }
    /**
     * Fired when |SCardConnect| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga4e515829752e0a8dbc4d630696a8d6a5
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardconnecta
     */
    export type connectRequestedPayload = {
      requestId: string;
      contextId: number;
      reader: string;
      shareMode: ShareMode;
      preferredProtocols: ProtocolSet;
    }
    /**
     * Fired when |SCardDisconnect| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga4be198045c73ec0deb79e66c0ca1738a
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scarddisconnect
     */
    export type disconnectRequestedPayload = {
      requestId: string;
      handle: number;
      disposition: Disposition;
    }
    /**
     * Fired when |SCardTransmit| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga9a2d77242a271310269065e64633ab99
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardtransmit
     */
    export type transmitRequestedPayload = {
      requestId: string;
      handle: number;
      data: binary;
      protocol?: Protocol;
    }
    /**
     * Fired when |SCardControl| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gac3454d4657110fd7f753b2d3d8f4e32f
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardcontrol
     */
    export type controlRequestedPayload = {
      requestId: string;
      handle: number;
      controlCode: number;
      data: binary;
    }
    /**
     * Fired when |SCardGetAttrib| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gaacfec51917255b7a25b94c5104961602
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardgetattrib
     */
    export type getAttribRequestedPayload = {
      requestId: string;
      handle: number;
      attribId: number;
    }
    /**
     * Fired when |SCardSetAttrib| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga060f0038a4ddfd5dd2b8fadf3c3a2e4f
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardsetattrib
     */
    export type setAttribRequestedPayload = {
      requestId: string;
      handle: number;
      attribId: number;
      data: binary;
    }
    /**
     * Fired when |SCardStatus| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gae49c3c894ad7ac12a5b896bde70d0382
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardstatusa
     */
    export type statusRequestedPayload = {
      requestId: string;
      handle: number;
    }
    /**
     * Fired when |SCardBeginTransaction| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gaddb835dce01a0da1d6ca02d33ee7d861
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardbegintransaction
     */
    export type beginTransactionRequestedPayload = {
      requestId: string;
      handle: number;
    }
    /**
     * Fired when |SCardEndTransaction| is called.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gae8742473b404363e5c587f570d7e2f3b
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardendtransaction
     */
    export type endTransactionRequestedPayload = {
      requestId: string;
      handle: number;
      disposition: Disposition;
    }
    
    /**
     * Enables the |SmartCardEmulation| domain.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Disables the |SmartCardEmulation| domain.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Reports the successful result of a |SCardEstablishContext| call.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gaa1b8970169fd4883a6dc4a8f43f19b67
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardestablishcontext
     */
    export type reportEstablishContextResultParameters = {
      requestId: string;
      contextId: number;
    }
    export type reportEstablishContextResultReturnValue = {
    }
    /**
     * Reports the successful result of a |SCardReleaseContext| call.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga6aabcba7744c5c9419fdd6404f73a934
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardreleasecontext
     */
    export type reportReleaseContextResultParameters = {
      requestId: string;
    }
    export type reportReleaseContextResultReturnValue = {
    }
    /**
     * Reports the successful result of a |SCardListReaders| call.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga93b07815789b3cf2629d439ecf20f0d9
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardlistreadersa
     */
    export type reportListReadersResultParameters = {
      requestId: string;
      readers: string[];
    }
    export type reportListReadersResultReturnValue = {
    }
    /**
     * Reports the successful result of a |SCardGetStatusChange| call.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga33247d5d1257d59e55647c3bb717db24
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardgetstatuschangea
     */
    export type reportGetStatusChangeResultParameters = {
      requestId: string;
      readerStates: ReaderStateOut[];
    }
    export type reportGetStatusChangeResultReturnValue = {
    }
    /**
     * Reports the result of a |SCardBeginTransaction| call.
On success, this creates a new transaction object.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gaddb835dce01a0da1d6ca02d33ee7d861
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardbegintransaction
     */
    export type reportBeginTransactionResultParameters = {
      requestId: string;
      handle: number;
    }
    export type reportBeginTransactionResultReturnValue = {
    }
    /**
     * Reports the successful result of a call that returns only a result code.
Used for: |SCardCancel|, |SCardDisconnect|, |SCardSetAttrib|, |SCardEndTransaction|.

This maps to:
1. SCardCancel
   PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gaacbbc0c6d6c0cbbeb4f4debf6fbeeee6
   Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardcancel

2. SCardDisconnect
   PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga4be198045c73ec0deb79e66c0ca1738a
   Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scarddisconnect

3. SCardSetAttrib
   PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga060f0038a4ddfd5dd2b8fadf3c3a2e4f
   Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardsetattrib

4. SCardEndTransaction
   PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gae8742473b404363e5c587f570d7e2f3b
   Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardendtransaction
     */
    export type reportPlainResultParameters = {
      requestId: string;
    }
    export type reportPlainResultReturnValue = {
    }
    /**
     * Reports the successful result of a |SCardConnect| call.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga4e515829752e0a8dbc4d630696a8d6a5
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardconnecta
     */
    export type reportConnectResultParameters = {
      requestId: string;
      handle: number;
      activeProtocol?: Protocol;
    }
    export type reportConnectResultReturnValue = {
    }
    /**
     * Reports the successful result of a call that sends back data on success.
Used for |SCardTransmit|, |SCardControl|, and |SCardGetAttrib|.

This maps to:
1. SCardTransmit
   PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#ga9a2d77242a271310269065e64633ab99
   Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardtransmit

2. SCardControl
   PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gac3454d4657110fd7f753b2d3d8f4e32f
   Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardcontrol

3. SCardGetAttrib
   PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gaacfec51917255b7a25b94c5104961602
   Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardgetattrib
     */
    export type reportDataResultParameters = {
      requestId: string;
      data: binary;
    }
    export type reportDataResultReturnValue = {
    }
    /**
     * Reports the successful result of a |SCardStatus| call.

This maps to:
PC/SC Lite: https://pcsclite.apdu.fr/api/group__API.html#gae49c3c894ad7ac12a5b896bde70d0382
Microsoft: https://learn.microsoft.com/en-us/windows/win32/api/winscard/nf-winscard-scardstatusa
     */
    export type reportStatusResultParameters = {
      requestId: string;
      readerName: string;
      state: ConnectionState;
      atr: binary;
      protocol?: Protocol;
    }
    export type reportStatusResultReturnValue = {
    }
    /**
     * Reports an error result for the given request.
     */
    export type reportErrorParameters = {
      requestId: string;
      resultCode: ResultCode;
    }
    export type reportErrorReturnValue = {
    }
  }
  
  export namespace Storage {
    export type SerializedStorageKey = string;
    /**
     * Enum of possible storage types.
     */
    export type StorageType = "cookies"|"file_systems"|"indexeddb"|"local_storage"|"shader_cache"|"websql"|"service_workers"|"cache_storage"|"interest_groups"|"shared_storage"|"storage_buckets"|"all"|"other";
    /**
     * Usage for a storage type.
     */
    export interface UsageForType {
      /**
       * Name of storage type.
       */
      storageType: StorageType;
      /**
       * Storage usage (bytes).
       */
      usage: number;
    }
    /**
     * Pair of issuer origin and number of available (signed, but not used) Trust
Tokens from that issuer.
     */
    export interface TrustTokens {
      issuerOrigin: string;
      count: number;
    }
    /**
     * Protected audience interest group auction identifier.
     */
    export type InterestGroupAuctionId = string;
    /**
     * Enum of interest group access types.
     */
    export type InterestGroupAccessType = "join"|"leave"|"update"|"loaded"|"bid"|"win"|"additionalBid"|"additionalBidWin"|"topLevelBid"|"topLevelAdditionalBid"|"clear";
    /**
     * Enum of auction events.
     */
    export type InterestGroupAuctionEventType = "started"|"configResolved";
    /**
     * Enum of network fetches auctions can do.
     */
    export type InterestGroupAuctionFetchType = "bidderJs"|"bidderWasm"|"sellerJs"|"bidderTrustedSignals"|"sellerTrustedSignals";
    /**
     * Enum of shared storage access scopes.
     */
    export type SharedStorageAccessScope = "window"|"sharedStorageWorklet"|"protectedAudienceWorklet"|"header";
    /**
     * Enum of shared storage access methods.
     */
    export type SharedStorageAccessMethod = "addModule"|"createWorklet"|"selectURL"|"run"|"batchUpdate"|"set"|"append"|"delete"|"clear"|"get"|"keys"|"values"|"entries"|"length"|"remainingBudget";
    /**
     * Struct for a single key-value pair in an origin's shared storage.
     */
    export interface SharedStorageEntry {
      key: string;
      value: string;
    }
    /**
     * Details for an origin's shared storage.
     */
    export interface SharedStorageMetadata {
      /**
       * Time when the origin's shared storage was last created.
       */
      creationTime: Network.TimeSinceEpoch;
      /**
       * Number of key-value pairs stored in origin's shared storage.
       */
      length: number;
      /**
       * Current amount of bits of entropy remaining in the navigation budget.
       */
      remainingBudget: number;
      /**
       * Total number of bytes stored as key-value pairs in origin's shared
storage.
       */
      bytesUsed: number;
    }
    /**
     * Represents a dictionary object passed in as privateAggregationConfig to
run or selectURL.
     */
    export interface SharedStoragePrivateAggregationConfig {
      /**
       * The chosen aggregation service deployment.
       */
      aggregationCoordinatorOrigin?: string;
      /**
       * The context ID provided.
       */
      contextId?: string;
      /**
       * Configures the maximum size allowed for filtering IDs.
       */
      filteringIdMaxBytes: number;
      /**
       * The limit on the number of contributions in the final report.
       */
      maxContributions?: number;
    }
    /**
     * Pair of reporting metadata details for a candidate URL for `selectURL()`.
     */
    export interface SharedStorageReportingMetadata {
      eventType: string;
      reportingUrl: string;
    }
    /**
     * Bundles a candidate URL with its reporting metadata.
     */
    export interface SharedStorageUrlWithMetadata {
      /**
       * Spec of candidate URL.
       */
      url: string;
      /**
       * Any associated reporting metadata.
       */
      reportingMetadata: SharedStorageReportingMetadata[];
    }
    /**
     * Bundles the parameters for shared storage access events whose
presence/absence can vary according to SharedStorageAccessType.
     */
    export interface SharedStorageAccessParams {
      /**
       * Spec of the module script URL.
Present only for SharedStorageAccessMethods: addModule and
createWorklet.
       */
      scriptSourceUrl?: string;
      /**
       * String denoting "context-origin", "script-origin", or a custom
origin to be used as the worklet's data origin.
Present only for SharedStorageAccessMethod: createWorklet.
       */
      dataOrigin?: string;
      /**
       * Name of the registered operation to be run.
Present only for SharedStorageAccessMethods: run and selectURL.
       */
      operationName?: string;
      /**
       * ID of the operation call.
Present only for SharedStorageAccessMethods: run and selectURL.
       */
      operationId?: string;
      /**
       * Whether or not to keep the worket alive for future run or selectURL
calls.
Present only for SharedStorageAccessMethods: run and selectURL.
       */
      keepAlive?: boolean;
      /**
       * Configures the private aggregation options.
Present only for SharedStorageAccessMethods: run and selectURL.
       */
      privateAggregationConfig?: SharedStoragePrivateAggregationConfig;
      /**
       * The operation's serialized data in bytes (converted to a string).
Present only for SharedStorageAccessMethods: run and selectURL.
TODO(crbug.com/401011862): Consider updating this parameter to binary.
       */
      serializedData?: string;
      /**
       * Array of candidate URLs' specs, along with any associated metadata.
Present only for SharedStorageAccessMethod: selectURL.
       */
      urlsWithMetadata?: SharedStorageUrlWithMetadata[];
      /**
       * Spec of the URN:UUID generated for a selectURL call.
Present only for SharedStorageAccessMethod: selectURL.
       */
      urnUuid?: string;
      /**
       * Key for a specific entry in an origin's shared storage.
Present only for SharedStorageAccessMethods: set, append, delete, and
get.
       */
      key?: string;
      /**
       * Value for a specific entry in an origin's shared storage.
Present only for SharedStorageAccessMethods: set and append.
       */
      value?: string;
      /**
       * Whether or not to set an entry for a key if that key is already present.
Present only for SharedStorageAccessMethod: set.
       */
      ignoreIfPresent?: boolean;
      /**
       * A number denoting the (0-based) order of the worklet's
creation relative to all other shared storage worklets created by
documents using the current storage partition.
Present only for SharedStorageAccessMethods: addModule, createWorklet.
       */
      workletOrdinal?: number;
      /**
       * Hex representation of the DevTools token used as the TargetID for the
associated shared storage worklet.
Present only for SharedStorageAccessMethods: addModule, createWorklet,
run, selectURL, and any other SharedStorageAccessMethod when the
SharedStorageAccessScope is sharedStorageWorklet.
       */
      workletTargetId?: Target.TargetID;
      /**
       * Name of the lock to be acquired, if present.
Optionally present only for SharedStorageAccessMethods: batchUpdate,
set, append, delete, and clear.
       */
      withLock?: string;
      /**
       * If the method has been called as part of a batchUpdate, then this
number identifies the batch to which it belongs.
Optionally present only for SharedStorageAccessMethods:
batchUpdate (required), set, append, delete, and clear.
       */
      batchUpdateId?: string;
      /**
       * Number of modifier methods sent in batch.
Present only for SharedStorageAccessMethod: batchUpdate.
       */
      batchSize?: number;
    }
    export type StorageBucketsDurability = "relaxed"|"strict";
    export interface StorageBucket {
      storageKey: SerializedStorageKey;
      /**
       * If not specified, it is the default bucket of the storageKey.
       */
      name?: string;
    }
    export interface StorageBucketInfo {
      bucket: StorageBucket;
      id: string;
      expiration: Network.TimeSinceEpoch;
      /**
       * Storage quota (bytes).
       */
      quota: number;
      persistent: boolean;
      durability: StorageBucketsDurability;
    }
    /**
     * A single Related Website Set object.
     */
    export interface RelatedWebsiteSet {
      /**
       * The primary site of this set, along with the ccTLDs if there is any.
       */
      primarySites: string[];
      /**
       * The associated sites of this set, along with the ccTLDs if there is any.
       */
      associatedSites: string[];
      /**
       * The service sites of this set, along with the ccTLDs if there is any.
       */
      serviceSites: string[];
    }
    
    /**
     * A cache's contents have been modified.
     */
    export type cacheStorageContentUpdatedPayload = {
      /**
       * Origin to update.
       */
      origin: string;
      /**
       * Storage key to update.
       */
      storageKey: string;
      /**
       * Storage bucket to update.
       */
      bucketId: string;
      /**
       * Name of cache in origin.
       */
      cacheName: string;
    }
    /**
     * A cache has been added/deleted.
     */
    export type cacheStorageListUpdatedPayload = {
      /**
       * Origin to update.
       */
      origin: string;
      /**
       * Storage key to update.
       */
      storageKey: string;
      /**
       * Storage bucket to update.
       */
      bucketId: string;
    }
    /**
     * The origin's IndexedDB object store has been modified.
     */
    export type indexedDBContentUpdatedPayload = {
      /**
       * Origin to update.
       */
      origin: string;
      /**
       * Storage key to update.
       */
      storageKey: string;
      /**
       * Storage bucket to update.
       */
      bucketId: string;
      /**
       * Database to update.
       */
      databaseName: string;
      /**
       * ObjectStore to update.
       */
      objectStoreName: string;
    }
    /**
     * The origin's IndexedDB database list has been modified.
     */
    export type indexedDBListUpdatedPayload = {
      /**
       * Origin to update.
       */
      origin: string;
      /**
       * Storage key to update.
       */
      storageKey: string;
      /**
       * Storage bucket to update.
       */
      bucketId: string;
    }
    /**
     * One of the interest groups was accessed. Note that these events are global
to all targets sharing an interest group store.
     */
    export type interestGroupAccessedPayload = {
      accessTime: Network.TimeSinceEpoch;
      type: InterestGroupAccessType;
      ownerOrigin: string;
      name: string;
      /**
       * For topLevelBid/topLevelAdditionalBid, and when appropriate,
win and additionalBidWin
       */
      componentSellerOrigin?: string;
      /**
       * For bid or somethingBid event, if done locally and not on a server.
       */
      bid?: number;
      bidCurrency?: string;
      /**
       * For non-global events --- links to interestGroupAuctionEvent
       */
      uniqueAuctionId?: InterestGroupAuctionId;
    }
    /**
     * An auction involving interest groups is taking place. These events are
target-specific.
     */
    export type interestGroupAuctionEventOccurredPayload = {
      eventTime: Network.TimeSinceEpoch;
      type: InterestGroupAuctionEventType;
      uniqueAuctionId: InterestGroupAuctionId;
      /**
       * Set for child auctions.
       */
      parentAuctionId?: InterestGroupAuctionId;
      /**
       * Set for started and configResolved
       */
      auctionConfig?: { [key: string]: string };
    }
    /**
     * Specifies which auctions a particular network fetch may be related to, and
in what role. Note that it is not ordered with respect to
Network.requestWillBeSent (but will happen before loadingFinished
loadingFailed).
     */
    export type interestGroupAuctionNetworkRequestCreatedPayload = {
      type: InterestGroupAuctionFetchType;
      requestId: Network.RequestId;
      /**
       * This is the set of the auctions using the worklet that issued this
request.  In the case of trusted signals, it's possible that only some of
them actually care about the keys being queried.
       */
      auctions: InterestGroupAuctionId[];
    }
    /**
     * Shared storage was accessed by the associated page.
The following parameters are included in all events.
     */
    export type sharedStorageAccessedPayload = {
      /**
       * Time of the access.
       */
      accessTime: Network.TimeSinceEpoch;
      /**
       * Enum value indicating the access scope.
       */
      scope: SharedStorageAccessScope;
      /**
       * Enum value indicating the Shared Storage API method invoked.
       */
      method: SharedStorageAccessMethod;
      /**
       * DevTools Frame Token for the primary frame tree's root.
       */
      mainFrameId: Page.FrameId;
      /**
       * Serialization of the origin owning the Shared Storage data.
       */
      ownerOrigin: string;
      /**
       * Serialization of the site owning the Shared Storage data.
       */
      ownerSite: string;
      /**
       * The sub-parameters wrapped by `params` are all optional and their
presence/absence depends on `type`.
       */
      params: SharedStorageAccessParams;
    }
    /**
     * A shared storage run or selectURL operation finished its execution.
The following parameters are included in all events.
     */
    export type sharedStorageWorkletOperationExecutionFinishedPayload = {
      /**
       * Time that the operation finished.
       */
      finishedTime: Network.TimeSinceEpoch;
      /**
       * Time, in microseconds, from start of shared storage JS API call until
end of operation execution in the worklet.
       */
      executionTime: number;
      /**
       * Enum value indicating the Shared Storage API method invoked.
       */
      method: SharedStorageAccessMethod;
      /**
       * ID of the operation call.
       */
      operationId: string;
      /**
       * Hex representation of the DevTools token used as the TargetID for the
associated shared storage worklet.
       */
      workletTargetId: Target.TargetID;
      /**
       * DevTools Frame Token for the primary frame tree's root.
       */
      mainFrameId: Page.FrameId;
      /**
       * Serialization of the origin owning the Shared Storage data.
       */
      ownerOrigin: string;
    }
    export type storageBucketCreatedOrUpdatedPayload = {
      bucketInfo: StorageBucketInfo;
    }
    export type storageBucketDeletedPayload = {
      bucketId: string;
    }
    
    /**
     * Returns a storage key given a frame id.
Deprecated. Please use Storage.getStorageKey instead.
     */
    export type getStorageKeyForFrameParameters = {
      frameId: Page.FrameId;
    }
    export type getStorageKeyForFrameReturnValue = {
      storageKey: SerializedStorageKey;
    }
    /**
     * Returns storage key for the given frame. If no frame ID is provided,
the storage key of the target executing this command is returned.
     */
    export type getStorageKeyParameters = {
      frameId?: Page.FrameId;
    }
    export type getStorageKeyReturnValue = {
      storageKey: SerializedStorageKey;
    }
    /**
     * Clears storage for origin.
     */
    export type clearDataForOriginParameters = {
      /**
       * Security origin.
       */
      origin: string;
      /**
       * Comma separated list of StorageType to clear.
       */
      storageTypes: string;
    }
    export type clearDataForOriginReturnValue = {
    }
    /**
     * Clears storage for storage key.
     */
    export type clearDataForStorageKeyParameters = {
      /**
       * Storage key.
       */
      storageKey: string;
      /**
       * Comma separated list of StorageType to clear.
       */
      storageTypes: string;
    }
    export type clearDataForStorageKeyReturnValue = {
    }
    /**
     * Returns all browser cookies.
     */
    export type getCookiesParameters = {
      /**
       * Browser context to use when called on the browser endpoint.
       */
      browserContextId?: Browser.BrowserContextID;
    }
    export type getCookiesReturnValue = {
      /**
       * Array of cookie objects.
       */
      cookies: Network.Cookie[];
    }
    /**
     * Sets given cookies.
     */
    export type setCookiesParameters = {
      /**
       * Cookies to be set.
       */
      cookies: Network.CookieParam[];
      /**
       * Browser context to use when called on the browser endpoint.
       */
      browserContextId?: Browser.BrowserContextID;
    }
    export type setCookiesReturnValue = {
    }
    /**
     * Clears cookies.
     */
    export type clearCookiesParameters = {
      /**
       * Browser context to use when called on the browser endpoint.
       */
      browserContextId?: Browser.BrowserContextID;
    }
    export type clearCookiesReturnValue = {
    }
    /**
     * Returns usage and quota in bytes.
     */
    export type getUsageAndQuotaParameters = {
      /**
       * Security origin.
       */
      origin: string;
    }
    export type getUsageAndQuotaReturnValue = {
      /**
       * Storage usage (bytes).
       */
      usage: number;
      /**
       * Storage quota (bytes).
       */
      quota: number;
      /**
       * Whether or not the origin has an active storage quota override
       */
      overrideActive: boolean;
      /**
       * Storage usage per type (bytes).
       */
      usageBreakdown: UsageForType[];
    }
    /**
     * Override quota for the specified origin
     */
    export type overrideQuotaForOriginParameters = {
      /**
       * Security origin.
       */
      origin: string;
      /**
       * The quota size (in bytes) to override the original quota with.
If this is called multiple times, the overridden quota will be equal to
the quotaSize provided in the final call. If this is called without
specifying a quotaSize, the quota will be reset to the default value for
the specified origin. If this is called multiple times with different
origins, the override will be maintained for each origin until it is
disabled (called without a quotaSize).
       */
      quotaSize?: number;
    }
    export type overrideQuotaForOriginReturnValue = {
    }
    /**
     * Registers origin to be notified when an update occurs to its cache storage list.
     */
    export type trackCacheStorageForOriginParameters = {
      /**
       * Security origin.
       */
      origin: string;
    }
    export type trackCacheStorageForOriginReturnValue = {
    }
    /**
     * Registers storage key to be notified when an update occurs to its cache storage list.
     */
    export type trackCacheStorageForStorageKeyParameters = {
      /**
       * Storage key.
       */
      storageKey: string;
    }
    export type trackCacheStorageForStorageKeyReturnValue = {
    }
    /**
     * Registers origin to be notified when an update occurs to its IndexedDB.
     */
    export type trackIndexedDBForOriginParameters = {
      /**
       * Security origin.
       */
      origin: string;
    }
    export type trackIndexedDBForOriginReturnValue = {
    }
    /**
     * Registers storage key to be notified when an update occurs to its IndexedDB.
     */
    export type trackIndexedDBForStorageKeyParameters = {
      /**
       * Storage key.
       */
      storageKey: string;
    }
    export type trackIndexedDBForStorageKeyReturnValue = {
    }
    /**
     * Unregisters origin from receiving notifications for cache storage.
     */
    export type untrackCacheStorageForOriginParameters = {
      /**
       * Security origin.
       */
      origin: string;
    }
    export type untrackCacheStorageForOriginReturnValue = {
    }
    /**
     * Unregisters storage key from receiving notifications for cache storage.
     */
    export type untrackCacheStorageForStorageKeyParameters = {
      /**
       * Storage key.
       */
      storageKey: string;
    }
    export type untrackCacheStorageForStorageKeyReturnValue = {
    }
    /**
     * Unregisters origin from receiving notifications for IndexedDB.
     */
    export type untrackIndexedDBForOriginParameters = {
      /**
       * Security origin.
       */
      origin: string;
    }
    export type untrackIndexedDBForOriginReturnValue = {
    }
    /**
     * Unregisters storage key from receiving notifications for IndexedDB.
     */
    export type untrackIndexedDBForStorageKeyParameters = {
      /**
       * Storage key.
       */
      storageKey: string;
    }
    export type untrackIndexedDBForStorageKeyReturnValue = {
    }
    /**
     * Returns the number of stored Trust Tokens per issuer for the
current browsing context.
     */
    export type getTrustTokensParameters = {
    }
    export type getTrustTokensReturnValue = {
      tokens: TrustTokens[];
    }
    /**
     * Removes all Trust Tokens issued by the provided issuerOrigin.
Leaves other stored data, including the issuer's Redemption Records, intact.
     */
    export type clearTrustTokensParameters = {
      issuerOrigin: string;
    }
    export type clearTrustTokensReturnValue = {
      /**
       * True if any tokens were deleted, false otherwise.
       */
      didDeleteTokens: boolean;
    }
    /**
     * Gets details for a named interest group.
     */
    export type getInterestGroupDetailsParameters = {
      ownerOrigin: string;
      name: string;
    }
    export type getInterestGroupDetailsReturnValue = {
      /**
       * This largely corresponds to:
https://wicg.github.io/turtledove/#dictdef-generatebidinterestgroup
but has absolute expirationTime instead of relative lifetimeMs and
also adds joiningOrigin.
       */
      details: { [key: string]: string };
    }
    /**
     * Enables/Disables issuing of interestGroupAccessed events.
     */
    export type setInterestGroupTrackingParameters = {
      enable: boolean;
    }
    export type setInterestGroupTrackingReturnValue = {
    }
    /**
     * Enables/Disables issuing of interestGroupAuctionEventOccurred and
interestGroupAuctionNetworkRequestCreated.
     */
    export type setInterestGroupAuctionTrackingParameters = {
      enable: boolean;
    }
    export type setInterestGroupAuctionTrackingReturnValue = {
    }
    /**
     * Gets metadata for an origin's shared storage.
     */
    export type getSharedStorageMetadataParameters = {
      ownerOrigin: string;
    }
    export type getSharedStorageMetadataReturnValue = {
      metadata: SharedStorageMetadata;
    }
    /**
     * Gets the entries in an given origin's shared storage.
     */
    export type getSharedStorageEntriesParameters = {
      ownerOrigin: string;
    }
    export type getSharedStorageEntriesReturnValue = {
      entries: SharedStorageEntry[];
    }
    /**
     * Sets entry with `key` and `value` for a given origin's shared storage.
     */
    export type setSharedStorageEntryParameters = {
      ownerOrigin: string;
      key: string;
      value: string;
      /**
       * If `ignoreIfPresent` is included and true, then only sets the entry if
`key` doesn't already exist.
       */
      ignoreIfPresent?: boolean;
    }
    export type setSharedStorageEntryReturnValue = {
    }
    /**
     * Deletes entry for `key` (if it exists) for a given origin's shared storage.
     */
    export type deleteSharedStorageEntryParameters = {
      ownerOrigin: string;
      key: string;
    }
    export type deleteSharedStorageEntryReturnValue = {
    }
    /**
     * Clears all entries for a given origin's shared storage.
     */
    export type clearSharedStorageEntriesParameters = {
      ownerOrigin: string;
    }
    export type clearSharedStorageEntriesReturnValue = {
    }
    /**
     * Resets the budget for `ownerOrigin` by clearing all budget withdrawals.
     */
    export type resetSharedStorageBudgetParameters = {
      ownerOrigin: string;
    }
    export type resetSharedStorageBudgetReturnValue = {
    }
    /**
     * Enables/disables issuing of sharedStorageAccessed events.
     */
    export type setSharedStorageTrackingParameters = {
      enable: boolean;
    }
    export type setSharedStorageTrackingReturnValue = {
    }
    /**
     * Set tracking for a storage key's buckets.
     */
    export type setStorageBucketTrackingParameters = {
      storageKey: string;
      enable: boolean;
    }
    export type setStorageBucketTrackingReturnValue = {
    }
    /**
     * Deletes the Storage Bucket with the given storage key and bucket name.
     */
    export type deleteStorageBucketParameters = {
      bucket: StorageBucket;
    }
    export type deleteStorageBucketReturnValue = {
    }
    /**
     * Deletes state for sites identified as potential bounce trackers, immediately.
     */
    export type runBounceTrackingMitigationsParameters = {
    }
    export type runBounceTrackingMitigationsReturnValue = {
      deletedSites: string[];
    }
    /**
     * Returns the effective Related Website Sets in use by this profile for the browser
session. The effective Related Website Sets will not change during a browser session.
     */
    export type getRelatedWebsiteSetsParameters = {
    }
    export type getRelatedWebsiteSetsReturnValue = {
      sets: RelatedWebsiteSet[];
    }
    export type setProtectedAudienceKAnonymityParameters = {
      owner: string;
      name: string;
      hashes: binary[];
    }
    export type setProtectedAudienceKAnonymityReturnValue = {
    }
  }
  
  /**
   * The SystemInfo domain defines methods and events for querying low-level system information.
   */
  export namespace SystemInfo {
    /**
     * Describes a single graphics processor (GPU).
     */
    export interface GPUDevice {
      /**
       * PCI ID of the GPU vendor, if available; 0 otherwise.
       */
      vendorId: number;
      /**
       * PCI ID of the GPU device, if available; 0 otherwise.
       */
      deviceId: number;
      /**
       * Sub sys ID of the GPU, only available on Windows.
       */
      subSysId?: number;
      /**
       * Revision of the GPU, only available on Windows.
       */
      revision?: number;
      /**
       * String description of the GPU vendor, if the PCI ID is not available.
       */
      vendorString: string;
      /**
       * String description of the GPU device, if the PCI ID is not available.
       */
      deviceString: string;
      /**
       * String description of the GPU driver vendor.
       */
      driverVendor: string;
      /**
       * String description of the GPU driver version.
       */
      driverVersion: string;
    }
    /**
     * Describes the width and height dimensions of an entity.
     */
    export interface Size {
      /**
       * Width in pixels.
       */
      width: number;
      /**
       * Height in pixels.
       */
      height: number;
    }
    /**
     * Describes a supported video decoding profile with its associated minimum and
maximum resolutions.
     */
    export interface VideoDecodeAcceleratorCapability {
      /**
       * Video codec profile that is supported, e.g. VP9 Profile 2.
       */
      profile: string;
      /**
       * Maximum video dimensions in pixels supported for this |profile|.
       */
      maxResolution: Size;
      /**
       * Minimum video dimensions in pixels supported for this |profile|.
       */
      minResolution: Size;
    }
    /**
     * Describes a supported video encoding profile with its associated maximum
resolution and maximum framerate.
     */
    export interface VideoEncodeAcceleratorCapability {
      /**
       * Video codec profile that is supported, e.g H264 Main.
       */
      profile: string;
      /**
       * Maximum video dimensions in pixels supported for this |profile|.
       */
      maxResolution: Size;
      /**
       * Maximum encoding framerate in frames per second supported for this
|profile|, as fraction's numerator and denominator, e.g. 24/1 fps,
24000/1001 fps, etc.
       */
      maxFramerateNumerator: number;
      maxFramerateDenominator: number;
    }
    /**
     * YUV subsampling type of the pixels of a given image.
     */
    export type SubsamplingFormat = "yuv420"|"yuv422"|"yuv444";
    /**
     * Image format of a given image.
     */
    export type ImageType = "jpeg"|"webp"|"unknown";
    /**
     * Provides information about the GPU(s) on the system.
     */
    export interface GPUInfo {
      /**
       * The graphics devices on the system. Element 0 is the primary GPU.
       */
      devices: GPUDevice[];
      /**
       * An optional dictionary of additional GPU related attributes.
       */
      auxAttributes?: { [key: string]: string };
      /**
       * An optional dictionary of graphics features and their status.
       */
      featureStatus?: { [key: string]: string };
      /**
       * An optional array of GPU driver bug workarounds.
       */
      driverBugWorkarounds: string[];
      /**
       * Supported accelerated video decoding capabilities.
       */
      videoDecoding: VideoDecodeAcceleratorCapability[];
      /**
       * Supported accelerated video encoding capabilities.
       */
      videoEncoding: VideoEncodeAcceleratorCapability[];
    }
    /**
     * Represents process info.
     */
    export interface ProcessInfo {
      /**
       * Specifies process type.
       */
      type: string;
      /**
       * Specifies process id.
       */
      id: number;
      /**
       * Specifies cumulative CPU usage in seconds across all threads of the
process since the process start.
       */
      cpuTime: number;
    }
    
    
    /**
     * Returns information about the system.
     */
    export type getInfoParameters = {
    }
    export type getInfoReturnValue = {
      /**
       * Information about the GPUs on the system.
       */
      gpu: GPUInfo;
      /**
       * A platform-dependent description of the model of the machine. On Mac OS, this is, for
example, 'MacBookPro'. Will be the empty string if not supported.
       */
      modelName: string;
      /**
       * A platform-dependent description of the version of the machine. On Mac OS, this is, for
example, '10.1'. Will be the empty string if not supported.
       */
      modelVersion: string;
      /**
       * The command line string used to launch the browser. Will be the empty string if not
supported.
       */
      commandLine: string;
    }
    /**
     * Returns information about the feature state.
     */
    export type getFeatureStateParameters = {
      featureState: string;
    }
    export type getFeatureStateReturnValue = {
      featureEnabled: boolean;
    }
    /**
     * Returns information about all running processes.
     */
    export type getProcessInfoParameters = {
    }
    export type getProcessInfoReturnValue = {
      /**
       * An array of process info blocks.
       */
      processInfo: ProcessInfo[];
    }
  }
  
  /**
   * Supports additional targets discovery and allows to attach to them.
   */
  export namespace Target {
    export type TargetID = string;
    /**
     * Unique identifier of attached debugging session.
     */
    export type SessionID = string;
    export interface TargetInfo {
      targetId: TargetID;
      /**
       * List of types: https://source.chromium.org/chromium/chromium/src/+/main:content/browser/devtools/devtools_agent_host_impl.cc?ss=chromium&q=f:devtools%20-f:out%20%22::kTypeTab%5B%5D%22
       */
      type: string;
      title: string;
      url: string;
      /**
       * Whether the target has an attached client.
       */
      attached: boolean;
      /**
       * Opener target Id
       */
      openerId?: TargetID;
      /**
       * Whether the target has access to the originating window.
       */
      canAccessOpener: boolean;
      /**
       * Frame id of originating window (is only set if target has an opener).
       */
      openerFrameId?: Page.FrameId;
      /**
       * Id of the parent frame, only present for the "iframe" targets.
       */
      parentFrameId?: Page.FrameId;
      browserContextId?: Browser.BrowserContextID;
      /**
       * Provides additional details for specific target types. For example, for
the type of "page", this may be set to "prerender".
       */
      subtype?: string;
    }
    /**
     * A filter used by target query/discovery/auto-attach operations.
     */
    export interface FilterEntry {
      /**
       * If set, causes exclusion of matching targets from the list.
       */
      exclude?: boolean;
      /**
       * If not present, matches any type.
       */
      type?: string;
    }
    /**
     * The entries in TargetFilter are matched sequentially against targets and
the first entry that matches determines if the target is included or not,
depending on the value of `exclude` field in the entry.
If filter is not specified, the one assumed is
[{type: "browser", exclude: true}, {type: "tab", exclude: true}, {}]
(i.e. include everything but `browser` and `tab`).
     */
    export type TargetFilter = FilterEntry[];
    export interface RemoteLocation {
      host: string;
      port: number;
    }
    /**
     * The state of the target window.
     */
    export type WindowState = "normal"|"minimized"|"maximized"|"fullscreen";
    
    /**
     * Issued when attached to target because of auto-attach or `attachToTarget` command.
     */
    export type attachedToTargetPayload = {
      /**
       * Identifier assigned to the session used to send/receive messages.
       */
      sessionId: SessionID;
      targetInfo: TargetInfo;
      waitingForDebugger: boolean;
    }
    /**
     * Issued when detached from target for any reason (including `detachFromTarget` command). Can be
issued multiple times per target if multiple sessions have been attached to it.
     */
    export type detachedFromTargetPayload = {
      /**
       * Detached session identifier.
       */
      sessionId: SessionID;
      /**
       * Deprecated.
       */
      targetId?: TargetID;
    }
    /**
     * Notifies about a new protocol message received from the session (as reported in
`attachedToTarget` event).
     */
    export type receivedMessageFromTargetPayload = {
      /**
       * Identifier of a session which sends a message.
       */
      sessionId: SessionID;
      message: string;
      /**
       * Deprecated.
       */
      targetId?: TargetID;
    }
    /**
     * Issued when a possible inspection target is created.
     */
    export type targetCreatedPayload = {
      targetInfo: TargetInfo;
    }
    /**
     * Issued when a target is destroyed.
     */
    export type targetDestroyedPayload = {
      targetId: TargetID;
    }
    /**
     * Issued when a target has crashed.
     */
    export type targetCrashedPayload = {
      targetId: TargetID;
      /**
       * Termination status type.
       */
      status: string;
      /**
       * Termination error code.
       */
      errorCode: number;
    }
    /**
     * Issued when some information about a target has changed. This only happens between
`targetCreated` and `targetDestroyed`.
     */
    export type targetInfoChangedPayload = {
      targetInfo: TargetInfo;
    }
    
    /**
     * Activates (focuses) the target.
     */
    export type activateTargetParameters = {
      targetId: TargetID;
    }
    export type activateTargetReturnValue = {
    }
    /**
     * Attaches to the target with given id.
     */
    export type attachToTargetParameters = {
      targetId: TargetID;
      /**
       * Enables "flat" access to the session via specifying sessionId attribute in the commands.
We plan to make this the default, deprecate non-flattened mode,
and eventually retire it. See crbug.com/991325.
       */
      flatten?: boolean;
    }
    export type attachToTargetReturnValue = {
      /**
       * Id assigned to the session.
       */
      sessionId: SessionID;
    }
    /**
     * Attaches to the browser target, only uses flat sessionId mode.
     */
    export type attachToBrowserTargetParameters = {
    }
    export type attachToBrowserTargetReturnValue = {
      /**
       * Id assigned to the session.
       */
      sessionId: SessionID;
    }
    /**
     * Closes the target. If the target is a page that gets closed too.
     */
    export type closeTargetParameters = {
      targetId: TargetID;
    }
    export type closeTargetReturnValue = {
      /**
       * Always set to true. If an error occurs, the response indicates protocol error.
       */
      success: boolean;
    }
    /**
     * Inject object to the target's main frame that provides a communication
channel with browser target.

Injected object will be available as `window[bindingName]`.

The object has the following API:
- `binding.send(json)` - a method to send messages over the remote debugging protocol
- `binding.onmessage = json => handleMessage(json)` - a callback that will be called for the protocol notifications and command responses.
     */
    export type exposeDevToolsProtocolParameters = {
      targetId: TargetID;
      /**
       * Binding name, 'cdp' if not specified.
       */
      bindingName?: string;
      /**
       * If true, inherits the current root session's permissions (default: false).
       */
      inheritPermissions?: boolean;
    }
    export type exposeDevToolsProtocolReturnValue = {
    }
    /**
     * Creates a new empty BrowserContext. Similar to an incognito profile but you can have more than
one.
     */
    export type createBrowserContextParameters = {
      /**
       * If specified, disposes this context when debugging session disconnects.
       */
      disposeOnDetach?: boolean;
      /**
       * Proxy server, similar to the one passed to --proxy-server
       */
      proxyServer?: string;
      /**
       * Proxy bypass list, similar to the one passed to --proxy-bypass-list
       */
      proxyBypassList?: string;
      /**
       * An optional list of origins to grant unlimited cross-origin access to.
Parts of the URL other than those constituting origin are ignored.
       */
      originsWithUniversalNetworkAccess?: string[];
    }
    export type createBrowserContextReturnValue = {
      /**
       * The id of the context created.
       */
      browserContextId: Browser.BrowserContextID;
    }
    /**
     * Returns all browser contexts created with `Target.createBrowserContext` method.
     */
    export type getBrowserContextsParameters = {
    }
    export type getBrowserContextsReturnValue = {
      /**
       * An array of browser context ids.
       */
      browserContextIds: Browser.BrowserContextID[];
      /**
       * The id of the default browser context if available.
       */
      defaultBrowserContextId?: Browser.BrowserContextID;
    }
    /**
     * Creates a new page.
     */
    export type createTargetParameters = {
      /**
       * The initial URL the page will be navigated to. An empty string indicates about:blank.
       */
      url: string;
      /**
       * Frame left origin in DIP (requires newWindow to be true or headless shell).
       */
      left?: number;
      /**
       * Frame top origin in DIP (requires newWindow to be true or headless shell).
       */
      top?: number;
      /**
       * Frame width in DIP (requires newWindow to be true or headless shell).
       */
      width?: number;
      /**
       * Frame height in DIP (requires newWindow to be true or headless shell).
       */
      height?: number;
      /**
       * Frame window state (requires newWindow to be true or headless shell).
Default is normal.
       */
      windowState?: WindowState;
      /**
       * The browser context to create the page in.
       */
      browserContextId?: Browser.BrowserContextID;
      /**
       * Whether BeginFrames for this target will be controlled via DevTools (headless shell only,
not supported on MacOS yet, false by default).
       */
      enableBeginFrameControl?: boolean;
      /**
       * Whether to create a new Window or Tab (false by default, not supported by headless shell).
       */
      newWindow?: boolean;
      /**
       * Whether to create the target in background or foreground (false by default, not supported
by headless shell).
       */
      background?: boolean;
      /**
       * Whether to create the target of type "tab".
       */
      forTab?: boolean;
      /**
       * Whether to create a hidden target. The hidden target is observable via protocol, but not
present in the tab UI strip. Cannot be created with `forTab: true`, `newWindow: true` or
`background: false`. The life-time of the tab is limited to the life-time of the session.
       */
      hidden?: boolean;
      /**
       * If specified, the option is used to determine if the new target should
be focused or not. By default, the focus behavior depends on the
value of the background field. For example, background=false and focus=false
will result in the target tab being opened but the browser window remain
unchanged (if it was in the background, it will remain in the background)
and background=false with focus=undefined will result in the window being focused.
Using background: true and focus: true is not supported and will result in an error.
       */
      focus?: boolean;
    }
    export type createTargetReturnValue = {
      /**
       * The id of the page opened.
       */
      targetId: TargetID;
    }
    /**
     * Detaches session with given id.
     */
    export type detachFromTargetParameters = {
      /**
       * Session to detach.
       */
      sessionId?: SessionID;
      /**
       * Deprecated.
       */
      targetId?: TargetID;
    }
    export type detachFromTargetReturnValue = {
    }
    /**
     * Deletes a BrowserContext. All the belonging pages will be closed without calling their
beforeunload hooks.
     */
    export type disposeBrowserContextParameters = {
      browserContextId: Browser.BrowserContextID;
    }
    export type disposeBrowserContextReturnValue = {
    }
    /**
     * Returns information about a target.
     */
    export type getTargetInfoParameters = {
      targetId?: TargetID;
    }
    export type getTargetInfoReturnValue = {
      targetInfo: TargetInfo;
    }
    /**
     * Retrieves a list of available targets.
     */
    export type getTargetsParameters = {
      /**
       * Only targets matching filter will be reported. If filter is not specified
and target discovery is currently enabled, a filter used for target discovery
is used for consistency.
       */
      filter?: TargetFilter;
    }
    export type getTargetsReturnValue = {
      /**
       * The list of targets.
       */
      targetInfos: TargetInfo[];
    }
    /**
     * Sends protocol message over session with given id.
Consider using flat mode instead; see commands attachToTarget, setAutoAttach,
and crbug.com/991325.
     */
    export type sendMessageToTargetParameters = {
      message: string;
      /**
       * Identifier of the session.
       */
      sessionId?: SessionID;
      /**
       * Deprecated.
       */
      targetId?: TargetID;
    }
    export type sendMessageToTargetReturnValue = {
    }
    /**
     * Controls whether to automatically attach to new targets which are considered
to be directly related to this one (for example, iframes or workers).
When turned on, attaches to all existing related targets as well. When turned off,
automatically detaches from all currently attached targets.
This also clears all targets added by `autoAttachRelated` from the list of targets to watch
for creation of related targets.
You might want to call this recursively for auto-attached targets to attach
to all available targets.
     */
    export type setAutoAttachParameters = {
      /**
       * Whether to auto-attach to related targets.
       */
      autoAttach: boolean;
      /**
       * Whether to pause new targets when attaching to them. Use `Runtime.runIfWaitingForDebugger`
to run paused targets.
       */
      waitForDebuggerOnStart: boolean;
      /**
       * Enables "flat" access to the session via specifying sessionId attribute in the commands.
We plan to make this the default, deprecate non-flattened mode,
and eventually retire it. See crbug.com/991325.
       */
      flatten?: boolean;
      /**
       * Only targets matching filter will be attached.
       */
      filter?: TargetFilter;
    }
    export type setAutoAttachReturnValue = {
    }
    /**
     * Adds the specified target to the list of targets that will be monitored for any related target
creation (such as child frames, child workers and new versions of service worker) and reported
through `attachedToTarget`. The specified target is also auto-attached.
This cancels the effect of any previous `setAutoAttach` and is also cancelled by subsequent
`setAutoAttach`. Only available at the Browser target.
     */
    export type autoAttachRelatedParameters = {
      targetId: TargetID;
      /**
       * Whether to pause new targets when attaching to them. Use `Runtime.runIfWaitingForDebugger`
to run paused targets.
       */
      waitForDebuggerOnStart: boolean;
      /**
       * Only targets matching filter will be attached.
       */
      filter?: TargetFilter;
    }
    export type autoAttachRelatedReturnValue = {
    }
    /**
     * Controls whether to discover available targets and notify via
`targetCreated/targetInfoChanged/targetDestroyed` events.
     */
    export type setDiscoverTargetsParameters = {
      /**
       * Whether to discover available targets.
       */
      discover: boolean;
      /**
       * Only targets matching filter will be attached. If `discover` is false,
`filter` must be omitted or empty.
       */
      filter?: TargetFilter;
    }
    export type setDiscoverTargetsReturnValue = {
    }
    /**
     * Enables target discovery for the specified locations, when `setDiscoverTargets` was set to
`true`.
     */
    export type setRemoteLocationsParameters = {
      /**
       * List of remote locations.
       */
      locations: RemoteLocation[];
    }
    export type setRemoteLocationsReturnValue = {
    }
    /**
     * Gets the targetId of the DevTools page target opened for the given target
(if any).
     */
    export type getDevToolsTargetParameters = {
      /**
       * Page or tab target ID.
       */
      targetId: TargetID;
    }
    export type getDevToolsTargetReturnValue = {
      /**
       * The targetId of DevTools page target if exists.
       */
      targetId?: TargetID;
    }
    /**
     * Opens a DevTools window for the target.
     */
    export type openDevToolsParameters = {
      /**
       * This can be the page or tab target ID.
       */
      targetId: TargetID;
      /**
       * The id of the panel we want DevTools to open initially. Currently
supported panels are elements, console, network, sources, resources
and performance.
       */
      panelId?: string;
    }
    export type openDevToolsReturnValue = {
      /**
       * The targetId of DevTools page target.
       */
      targetId: TargetID;
    }
  }
  
  /**
   * The Tethering domain defines methods and events for browser port binding.
   */
  export namespace Tethering {
    
    /**
     * Informs that port was successfully bound and got a specified connection id.
     */
    export type acceptedPayload = {
      /**
       * Port number that was successfully bound.
       */
      port: number;
      /**
       * Connection id to be used.
       */
      connectionId: string;
    }
    
    /**
     * Request browser port binding.
     */
    export type bindParameters = {
      /**
       * Port number to bind.
       */
      port: number;
    }
    export type bindReturnValue = {
    }
    /**
     * Request browser port unbinding.
     */
    export type unbindParameters = {
      /**
       * Port number to unbind.
       */
      port: number;
    }
    export type unbindReturnValue = {
    }
  }
  
  export namespace Tracing {
    /**
     * Configuration for memory dump. Used only when "memory-infra" category is enabled.
     */
    export type MemoryDumpConfig = { [key: string]: string };
    export interface TraceConfig {
      /**
       * Controls how the trace buffer stores data. The default is `recordUntilFull`.
       */
      recordMode?: "recordUntilFull"|"recordContinuously"|"recordAsMuchAsPossible"|"echoToConsole";
      /**
       * Size of the trace buffer in kilobytes. If not specified or zero is passed, a default value
of 200 MB would be used.
       */
      traceBufferSizeInKb?: number;
      /**
       * Turns on JavaScript stack sampling.
       */
      enableSampling?: boolean;
      /**
       * Turns on system tracing.
       */
      enableSystrace?: boolean;
      /**
       * Turns on argument filter.
       */
      enableArgumentFilter?: boolean;
      /**
       * Included category filters.
       */
      includedCategories?: string[];
      /**
       * Excluded category filters.
       */
      excludedCategories?: string[];
      /**
       * Configuration to synthesize the delays in tracing.
       */
      syntheticDelays?: string[];
      /**
       * Configuration for memory dump triggers. Used only when "memory-infra" category is enabled.
       */
      memoryDumpConfig?: MemoryDumpConfig;
    }
    /**
     * Data format of a trace. Can be either the legacy JSON format or the
protocol buffer format. Note that the JSON format will be deprecated soon.
     */
    export type StreamFormat = "json"|"proto";
    /**
     * Compression type to use for traces returned via streams.
     */
    export type StreamCompression = "none"|"gzip";
    /**
     * Details exposed when memory request explicitly declared.
Keep consistent with memory_dump_request_args.h and
memory_instrumentation.mojom
     */
    export type MemoryDumpLevelOfDetail = "background"|"light"|"detailed";
    /**
     * Backend type to use for tracing. `chrome` uses the Chrome-integrated
tracing service and is supported on all platforms. `system` is only
supported on Chrome OS and uses the Perfetto system tracing service.
`auto` chooses `system` when the perfettoConfig provided to Tracing.start
specifies at least one non-Chrome data source; otherwise uses `chrome`.
     */
    export type TracingBackend = "auto"|"chrome"|"system";
    
    export type bufferUsagePayload = {
      /**
       * A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size.
       */
      percentFull?: number;
      /**
       * An approximate number of events in the trace log.
       */
      eventCount?: number;
      /**
       * A number in range [0..1] that indicates the used size of event buffer as a fraction of its
total size.
       */
      value?: number;
    }
    /**
     * Contains a bucket of collected trace events. When tracing is stopped collected events will be
sent as a sequence of dataCollected events followed by tracingComplete event.
     */
    export type dataCollectedPayload = {
      value: { [key: string]: string }[];
    }
    /**
     * Signals that tracing is stopped and there is no trace buffers pending flush, all data were
delivered via dataCollected events.
     */
    export type tracingCompletePayload = {
      /**
       * Indicates whether some trace data is known to have been lost, e.g. because the trace ring
buffer wrapped around.
       */
      dataLossOccurred: boolean;
      /**
       * A handle of the stream that holds resulting trace data.
       */
      stream?: IO.StreamHandle;
      /**
       * Trace data format of returned stream.
       */
      traceFormat?: StreamFormat;
      /**
       * Compression format of returned stream.
       */
      streamCompression?: StreamCompression;
    }
    
    /**
     * Stop trace events collection.
     */
    export type endParameters = {
    }
    export type endReturnValue = {
    }
    /**
     * Gets supported tracing categories.
     */
    export type getCategoriesParameters = {
    }
    export type getCategoriesReturnValue = {
      /**
       * A list of supported tracing categories.
       */
      categories: string[];
    }
    /**
     * Return a descriptor for all available tracing categories.
     */
    export type getTrackEventDescriptorParameters = {
    }
    export type getTrackEventDescriptorReturnValue = {
      /**
       * Base64-encoded serialized perfetto.protos.TrackEventDescriptor protobuf message.
       */
      descriptor: binary;
    }
    /**
     * Record a clock sync marker in the trace.
     */
    export type recordClockSyncMarkerParameters = {
      /**
       * The ID of this clock sync marker
       */
      syncId: string;
    }
    export type recordClockSyncMarkerReturnValue = {
    }
    /**
     * Request a global memory dump.
     */
    export type requestMemoryDumpParameters = {
      /**
       * Enables more deterministic results by forcing garbage collection
       */
      deterministic?: boolean;
      /**
       * Specifies level of details in memory dump. Defaults to "detailed".
       */
      levelOfDetail?: MemoryDumpLevelOfDetail;
    }
    export type requestMemoryDumpReturnValue = {
      /**
       * GUID of the resulting global memory dump.
       */
      dumpGuid: string;
      /**
       * True iff the global memory dump succeeded.
       */
      success: boolean;
    }
    /**
     * Start trace events collection.
     */
    export type startParameters = {
      /**
       * Category/tag filter
       */
      categories?: string;
      /**
       * Tracing options
       */
      options?: string;
      /**
       * If set, the agent will issue bufferUsage events at this interval, specified in milliseconds
       */
      bufferUsageReportingInterval?: number;
      /**
       * Whether to report trace events as series of dataCollected events or to save trace to a
stream (defaults to `ReportEvents`).
       */
      transferMode?: "ReportEvents"|"ReturnAsStream";
      /**
       * Trace data format to use. This only applies when using `ReturnAsStream`
transfer mode (defaults to `json`).
       */
      streamFormat?: StreamFormat;
      /**
       * Compression format to use. This only applies when using `ReturnAsStream`
transfer mode (defaults to `none`)
       */
      streamCompression?: StreamCompression;
      traceConfig?: TraceConfig;
      /**
       * Base64-encoded serialized perfetto.protos.TraceConfig protobuf message
When specified, the parameters `categories`, `options`, `traceConfig`
are ignored.
       */
      perfettoConfig?: binary;
      /**
       * Backend type (defaults to `auto`)
       */
      tracingBackend?: TracingBackend;
    }
    export type startReturnValue = {
    }
  }
  
  /**
   * This domain allows inspection of Web Audio API.
https://webaudio.github.io/web-audio-api/
   */
  export namespace WebAudio {
    /**
     * An unique ID for a graph object (AudioContext, AudioNode, AudioParam) in Web Audio API
     */
    export type GraphObjectId = string;
    /**
     * Enum of BaseAudioContext types
     */
    export type ContextType = "realtime"|"offline";
    /**
     * Enum of AudioContextState from the spec
     */
    export type ContextState = "suspended"|"running"|"closed"|"interrupted";
    /**
     * Enum of AudioNode types
     */
    export type NodeType = string;
    /**
     * Enum of AudioNode::ChannelCountMode from the spec
     */
    export type ChannelCountMode = "clamped-max"|"explicit"|"max";
    /**
     * Enum of AudioNode::ChannelInterpretation from the spec
     */
    export type ChannelInterpretation = "discrete"|"speakers";
    /**
     * Enum of AudioParam types
     */
    export type ParamType = string;
    /**
     * Enum of AudioParam::AutomationRate from the spec
     */
    export type AutomationRate = "a-rate"|"k-rate";
    /**
     * Fields in AudioContext that change in real-time.
     */
    export interface ContextRealtimeData {
      /**
       * The current context time in second in BaseAudioContext.
       */
      currentTime: number;
      /**
       * The time spent on rendering graph divided by render quantum duration,
and multiplied by 100. 100 means the audio renderer reached the full
capacity and glitch may occur.
       */
      renderCapacity: number;
      /**
       * A running mean of callback interval.
       */
      callbackIntervalMean: number;
      /**
       * A running variance of callback interval.
       */
      callbackIntervalVariance: number;
    }
    /**
     * Protocol object for BaseAudioContext
     */
    export interface BaseAudioContext {
      contextId: GraphObjectId;
      contextType: ContextType;
      contextState: ContextState;
      realtimeData?: ContextRealtimeData;
      /**
       * Platform-dependent callback buffer size.
       */
      callbackBufferSize: number;
      /**
       * Number of output channels supported by audio hardware in use.
       */
      maxOutputChannelCount: number;
      /**
       * Context sample rate.
       */
      sampleRate: number;
    }
    /**
     * Protocol object for AudioListener
     */
    export interface AudioListener {
      listenerId: GraphObjectId;
      contextId: GraphObjectId;
    }
    /**
     * Protocol object for AudioNode
     */
    export interface AudioNode {
      nodeId: GraphObjectId;
      contextId: GraphObjectId;
      nodeType: NodeType;
      numberOfInputs: number;
      numberOfOutputs: number;
      channelCount: number;
      channelCountMode: ChannelCountMode;
      channelInterpretation: ChannelInterpretation;
    }
    /**
     * Protocol object for AudioParam
     */
    export interface AudioParam {
      paramId: GraphObjectId;
      nodeId: GraphObjectId;
      contextId: GraphObjectId;
      paramType: ParamType;
      rate: AutomationRate;
      defaultValue: number;
      minValue: number;
      maxValue: number;
    }
    
    /**
     * Notifies that a new BaseAudioContext has been created.
     */
    export type contextCreatedPayload = {
      context: BaseAudioContext;
    }
    /**
     * Notifies that an existing BaseAudioContext will be destroyed.
     */
    export type contextWillBeDestroyedPayload = {
      contextId: GraphObjectId;
    }
    /**
     * Notifies that existing BaseAudioContext has changed some properties (id stays the same)..
     */
    export type contextChangedPayload = {
      context: BaseAudioContext;
    }
    /**
     * Notifies that the construction of an AudioListener has finished.
     */
    export type audioListenerCreatedPayload = {
      listener: AudioListener;
    }
    /**
     * Notifies that a new AudioListener has been created.
     */
    export type audioListenerWillBeDestroyedPayload = {
      contextId: GraphObjectId;
      listenerId: GraphObjectId;
    }
    /**
     * Notifies that a new AudioNode has been created.
     */
    export type audioNodeCreatedPayload = {
      node: AudioNode;
    }
    /**
     * Notifies that an existing AudioNode has been destroyed.
     */
    export type audioNodeWillBeDestroyedPayload = {
      contextId: GraphObjectId;
      nodeId: GraphObjectId;
    }
    /**
     * Notifies that a new AudioParam has been created.
     */
    export type audioParamCreatedPayload = {
      param: AudioParam;
    }
    /**
     * Notifies that an existing AudioParam has been destroyed.
     */
    export type audioParamWillBeDestroyedPayload = {
      contextId: GraphObjectId;
      nodeId: GraphObjectId;
      paramId: GraphObjectId;
    }
    /**
     * Notifies that two AudioNodes are connected.
     */
    export type nodesConnectedPayload = {
      contextId: GraphObjectId;
      sourceId: GraphObjectId;
      destinationId: GraphObjectId;
      sourceOutputIndex?: number;
      destinationInputIndex?: number;
    }
    /**
     * Notifies that AudioNodes are disconnected. The destination can be null, and it means all the outgoing connections from the source are disconnected.
     */
    export type nodesDisconnectedPayload = {
      contextId: GraphObjectId;
      sourceId: GraphObjectId;
      destinationId: GraphObjectId;
      sourceOutputIndex?: number;
      destinationInputIndex?: number;
    }
    /**
     * Notifies that an AudioNode is connected to an AudioParam.
     */
    export type nodeParamConnectedPayload = {
      contextId: GraphObjectId;
      sourceId: GraphObjectId;
      destinationId: GraphObjectId;
      sourceOutputIndex?: number;
    }
    /**
     * Notifies that an AudioNode is disconnected to an AudioParam.
     */
    export type nodeParamDisconnectedPayload = {
      contextId: GraphObjectId;
      sourceId: GraphObjectId;
      destinationId: GraphObjectId;
      sourceOutputIndex?: number;
    }
    
    /**
     * Enables the WebAudio domain and starts sending context lifetime events.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Disables the WebAudio domain.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Fetch the realtime data from the registered contexts.
     */
    export type getRealtimeDataParameters = {
      contextId: GraphObjectId;
    }
    export type getRealtimeDataReturnValue = {
      realtimeData: ContextRealtimeData;
    }
  }
  
  /**
   * This domain allows configuring virtual authenticators to test the WebAuthn
API.
   */
  export namespace WebAuthn {
    export type AuthenticatorId = string;
    export type AuthenticatorProtocol = "u2f"|"ctap2";
    export type Ctap2Version = "ctap2_0"|"ctap2_1"|"ctap2_2";
    export type AuthenticatorTransport = "usb"|"nfc"|"ble"|"cable"|"internal";
    export interface VirtualAuthenticatorOptions {
      protocol: AuthenticatorProtocol;
      /**
       * Defaults to ctap2_0. Ignored if |protocol| == u2f.
       */
      ctap2Version?: Ctap2Version;
      transport: AuthenticatorTransport;
      /**
       * Defaults to false.
       */
      hasResidentKey?: boolean;
      /**
       * Defaults to false.
       */
      hasUserVerification?: boolean;
      /**
       * If set to true, the authenticator will support the largeBlob extension.
https://w3c.github.io/webauthn#largeBlob
Defaults to false.
       */
      hasLargeBlob?: boolean;
      /**
       * If set to true, the authenticator will support the credBlob extension.
https://fidoalliance.org/specs/fido-v2.1-rd-20201208/fido-client-to-authenticator-protocol-v2.1-rd-20201208.html#sctn-credBlob-extension
Defaults to false.
       */
      hasCredBlob?: boolean;
      /**
       * If set to true, the authenticator will support the minPinLength extension.
https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-minpinlength-extension
Defaults to false.
       */
      hasMinPinLength?: boolean;
      /**
       * If set to true, the authenticator will support the prf extension.
https://w3c.github.io/webauthn/#prf-extension
Defaults to false.
       */
      hasPrf?: boolean;
      /**
       * If set to true, the authenticator will support the hmac-secret extension.
https://fidoalliance.org/specs/fido-v2.1-ps-20210615/fido-client-to-authenticator-protocol-v2.1-ps-20210615.html#sctn-hmac-secret-extension
Defaults to false.
       */
      hasHmacSecret?: boolean;
      /**
       * If set to true, the authenticator will support the hmac-secret-mc extension.
https://fidoalliance.org/specs/fido-v2.2-rd-20241003/fido-client-to-authenticator-protocol-v2.2-rd-20241003.html#sctn-hmac-secret-make-cred-extension
Defaults to false.
       */
      hasHmacSecretMc?: boolean;
      /**
       * If set to true, tests of user presence will succeed immediately.
Otherwise, they will not be resolved. Defaults to true.
       */
      automaticPresenceSimulation?: boolean;
      /**
       * Sets whether User Verification succeeds or fails for an authenticator.
Defaults to false.
       */
      isUserVerified?: boolean;
      /**
       * Credentials created by this authenticator will have the backup
eligibility (BE) flag set to this value. Defaults to false.
https://w3c.github.io/webauthn/#sctn-credential-backup
       */
      defaultBackupEligibility?: boolean;
      /**
       * Credentials created by this authenticator will have the backup state
(BS) flag set to this value. Defaults to false.
https://w3c.github.io/webauthn/#sctn-credential-backup
       */
      defaultBackupState?: boolean;
    }
    export interface Credential {
      credentialId: binary;
      isResidentCredential: boolean;
      /**
       * Relying Party ID the credential is scoped to. Must be set when adding a
credential.
       */
      rpId?: string;
      /**
       * The ECDSA P-256 private key in PKCS#8 format.
       */
      privateKey: binary;
      /**
       * An opaque byte sequence with a maximum size of 64 bytes mapping the
credential to a specific user.
       */
      userHandle?: binary;
      /**
       * Signature counter. This is incremented by one for each successful
assertion.
See https://w3c.github.io/webauthn/#signature-counter
       */
      signCount: number;
      /**
       * The large blob associated with the credential.
See https://w3c.github.io/webauthn/#sctn-large-blob-extension
       */
      largeBlob?: binary;
      /**
       * Assertions returned by this credential will have the backup eligibility
(BE) flag set to this value. Defaults to the authenticator's
defaultBackupEligibility value.
       */
      backupEligibility?: boolean;
      /**
       * Assertions returned by this credential will have the backup state (BS)
flag set to this value. Defaults to the authenticator's
defaultBackupState value.
       */
      backupState?: boolean;
      /**
       * The credential's user.name property. Equivalent to empty if not set.
https://w3c.github.io/webauthn/#dom-publickeycredentialentity-name
       */
      userName?: string;
      /**
       * The credential's user.displayName property. Equivalent to empty if
not set.
https://w3c.github.io/webauthn/#dom-publickeycredentialuserentity-displayname
       */
      userDisplayName?: string;
    }
    
    /**
     * Triggered when a credential is added to an authenticator.
     */
    export type credentialAddedPayload = {
      authenticatorId: AuthenticatorId;
      credential: Credential;
    }
    /**
     * Triggered when a credential is deleted, e.g. through
PublicKeyCredential.signalUnknownCredential().
     */
    export type credentialDeletedPayload = {
      authenticatorId: AuthenticatorId;
      credentialId: binary;
    }
    /**
     * Triggered when a credential is updated, e.g. through
PublicKeyCredential.signalCurrentUserDetails().
     */
    export type credentialUpdatedPayload = {
      authenticatorId: AuthenticatorId;
      credential: Credential;
    }
    /**
     * Triggered when a credential is used in a webauthn assertion.
     */
    export type credentialAssertedPayload = {
      authenticatorId: AuthenticatorId;
      credential: Credential;
    }
    
    /**
     * Enable the WebAuthn domain and start intercepting credential storage and
retrieval with a virtual authenticator.
     */
    export type enableParameters = {
      /**
       * Whether to enable the WebAuthn user interface. Enabling the UI is
recommended for debugging and demo purposes, as it is closer to the real
experience. Disabling the UI is recommended for automated testing.
Supported at the embedder's discretion if UI is available.
Defaults to false.
       */
      enableUI?: boolean;
    }
    export type enableReturnValue = {
    }
    /**
     * Disable the WebAuthn domain.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Creates and adds a virtual authenticator.
     */
    export type addVirtualAuthenticatorParameters = {
      options: VirtualAuthenticatorOptions;
    }
    export type addVirtualAuthenticatorReturnValue = {
      authenticatorId: AuthenticatorId;
    }
    /**
     * Resets parameters isBogusSignature, isBadUV, isBadUP to false if they are not present.
     */
    export type setResponseOverrideBitsParameters = {
      authenticatorId: AuthenticatorId;
      /**
       * If isBogusSignature is set, overrides the signature in the authenticator response to be zero.
Defaults to false.
       */
      isBogusSignature?: boolean;
      /**
       * If isBadUV is set, overrides the UV bit in the flags in the authenticator response to
be zero. Defaults to false.
       */
      isBadUV?: boolean;
      /**
       * If isBadUP is set, overrides the UP bit in the flags in the authenticator response to
be zero. Defaults to false.
       */
      isBadUP?: boolean;
    }
    export type setResponseOverrideBitsReturnValue = {
    }
    /**
     * Removes the given authenticator.
     */
    export type removeVirtualAuthenticatorParameters = {
      authenticatorId: AuthenticatorId;
    }
    export type removeVirtualAuthenticatorReturnValue = {
    }
    /**
     * Adds the credential to the specified authenticator.
     */
    export type addCredentialParameters = {
      authenticatorId: AuthenticatorId;
      credential: Credential;
    }
    export type addCredentialReturnValue = {
    }
    /**
     * Returns a single credential stored in the given virtual authenticator that
matches the credential ID.
     */
    export type getCredentialParameters = {
      authenticatorId: AuthenticatorId;
      credentialId: binary;
    }
    export type getCredentialReturnValue = {
      credential: Credential;
    }
    /**
     * Returns all the credentials stored in the given virtual authenticator.
     */
    export type getCredentialsParameters = {
      authenticatorId: AuthenticatorId;
    }
    export type getCredentialsReturnValue = {
      credentials: Credential[];
    }
    /**
     * Removes a credential from the authenticator.
     */
    export type removeCredentialParameters = {
      authenticatorId: AuthenticatorId;
      credentialId: binary;
    }
    export type removeCredentialReturnValue = {
    }
    /**
     * Clears all the credentials from the specified device.
     */
    export type clearCredentialsParameters = {
      authenticatorId: AuthenticatorId;
    }
    export type clearCredentialsReturnValue = {
    }
    /**
     * Sets whether User Verification succeeds or fails for an authenticator.
The default is true.
     */
    export type setUserVerifiedParameters = {
      authenticatorId: AuthenticatorId;
      isUserVerified: boolean;
    }
    export type setUserVerifiedReturnValue = {
    }
    /**
     * Sets whether tests of user presence will succeed immediately (if true) or fail to resolve (if false) for an authenticator.
The default is true.
     */
    export type setAutomaticPresenceSimulationParameters = {
      authenticatorId: AuthenticatorId;
      enabled: boolean;
    }
    export type setAutomaticPresenceSimulationReturnValue = {
    }
    /**
     * Allows setting credential properties.
https://w3c.github.io/webauthn/#sctn-automation-set-credential-properties
     */
    export type setCredentialPropertiesParameters = {
      authenticatorId: AuthenticatorId;
      credentialId: binary;
      backupEligibility?: boolean;
      backupState?: boolean;
    }
    export type setCredentialPropertiesReturnValue = {
    }
  }
  
  export namespace WebMCP {
    /**
     * Tool annotations
     */
    export interface Annotation {
      /**
       * A hint indicating that the tool does not modify any state.
       */
      readOnly?: boolean;
      /**
       * If the declarative tool was declared with the autosubmit attribute.
       */
      autosubmit?: boolean;
    }
    /**
     * Represents the status of a tool invocation.
     */
    export type InvocationStatus = "Success"|"Canceled"|"Error";
    /**
     * Definition of a tool that can be invoked.
     */
    export interface Tool {
      /**
       * Tool name.
       */
      name: string;
      /**
       * Tool description.
       */
      description: string;
      /**
       * Schema for the tool's input parameters.
       */
      inputSchema?: { [key: string]: string };
      /**
       * Optional annotations for the tool.
       */
      annotations?: Annotation;
      /**
       * Frame identifier associated with the tool registration.
       */
      frameId: Page.FrameId;
      /**
       * Optional node ID for declarative tools.
       */
      backendNodeId?: DOM.BackendNodeId;
      /**
       * The stack trace at the time of the registration.
       */
      stackTrace?: Runtime.StackTrace;
    }
    
    /**
     * Event fired when new tools are added.
     */
    export type toolsAddedPayload = {
      /**
       * Array of tools that were added.
       */
      tools: Tool[];
    }
    /**
     * Event fired when tools are removed.
     */
    export type toolsRemovedPayload = {
      /**
       * Array of tools that were removed.
       */
      tools: Tool[];
    }
    /**
     * Event fired when a tool invocation starts.
     */
    export type toolInvokedPayload = {
      /**
       * Name of the tool to invoke.
       */
      toolName: string;
      /**
       * Frame id
       */
      frameId: Page.FrameId;
      /**
       * Invocation identifier.
       */
      invocationId: string;
      /**
       * The input parameters used for the invocation.
       */
      input: string;
    }
    /**
     * Event fired when a tool invocation completes or fails.
     */
    export type toolRespondedPayload = {
      /**
       * Invocation identifier.
       */
      invocationId: string;
      /**
       * Status of the invocation.
       */
      status: InvocationStatus;
      /**
       * Output or error delivered as delivered to the agent. Missing if `status` is anything other than Success.
       */
      output?: any;
      /**
       * Error text for protocol users.
       */
      errorText?: string;
      /**
       * The exception object, if the javascript tool threw an error>
       */
      exception?: Runtime.RemoteObject;
    }
    
    /**
     * Enables the WebMCP domain, allowing events to be sent. Enabling the domain will trigger a toolsAdded event for
all currently registered tools.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Disables the WebMCP domain.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
  }
  
  /**
   * This domain is deprecated - use Runtime or Log instead.
   */
  export namespace Console {
    /**
     * Console message.
     */
    export interface ConsoleMessage {
      /**
       * Message source.
       */
      source: "xml"|"javascript"|"network"|"console-api"|"storage"|"appcache"|"rendering"|"security"|"other"|"deprecation"|"worker";
      /**
       * Message severity.
       */
      level: "log"|"warning"|"error"|"debug"|"info";
      /**
       * Message text.
       */
      text: string;
      /**
       * URL of the message origin.
       */
      url?: string;
      /**
       * Line number in the resource that generated this message (1-based).
       */
      line?: number;
      /**
       * Column number in the resource that generated this message (1-based).
       */
      column?: number;
    }
    
    /**
     * Issued when new console message is added.
     */
    export type messageAddedPayload = {
      /**
       * Console message that has been added.
       */
      message: ConsoleMessage;
    }
    
    /**
     * Does nothing.
     */
    export type clearMessagesParameters = {
    }
    export type clearMessagesReturnValue = {
    }
    /**
     * Disables console domain, prevents further console messages from being reported to the client.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables console domain, sends the messages collected so far to the client by means of the
`messageAdded` notification.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
  }
  
  /**
   * Debugger domain exposes JavaScript debugging capabilities. It allows setting and removing
breakpoints, stepping through execution, exploring stack traces, etc.
   */
  export namespace Debugger {
    /**
     * Breakpoint identifier.
     */
    export type BreakpointId = string;
    /**
     * Call frame identifier.
     */
    export type CallFrameId = string;
    /**
     * Location in the source code.
     */
    export interface Location {
      /**
       * Script identifier as reported in the `Debugger.scriptParsed`.
       */
      scriptId: Runtime.ScriptId;
      /**
       * Line number in the script (0-based).
       */
      lineNumber: number;
      /**
       * Column number in the script (0-based).
       */
      columnNumber?: number;
    }
    /**
     * Location in the source code.
     */
    export interface ScriptPosition {
      lineNumber: number;
      columnNumber: number;
    }
    /**
     * Location range within one script.
     */
    export interface LocationRange {
      scriptId: Runtime.ScriptId;
      start: ScriptPosition;
      end: ScriptPosition;
    }
    /**
     * JavaScript call frame. Array of call frames form the call stack.
     */
    export interface CallFrame {
      /**
       * Call frame identifier. This identifier is only valid while the virtual machine is paused.
       */
      callFrameId: CallFrameId;
      /**
       * Name of the JavaScript function called on this call frame.
       */
      functionName: string;
      /**
       * Location in the source code.
       */
      functionLocation?: Location;
      /**
       * Location in the source code.
       */
      location: Location;
      /**
       * JavaScript script name or url.
Deprecated in favor of using the `location.scriptId` to resolve the URL via a previously
sent `Debugger.scriptParsed` event.
       */
      url: string;
      /**
       * Scope chain for this call frame.
       */
      scopeChain: Scope[];
      /**
       * `this` object for this call frame.
       */
      this: Runtime.RemoteObject;
      /**
       * The value being returned, if the function is at return point.
       */
      returnValue?: Runtime.RemoteObject;
      /**
       * Valid only while the VM is paused and indicates whether this frame
can be restarted or not. Note that a `true` value here does not
guarantee that Debugger#restartFrame with this CallFrameId will be
successful, but it is very likely.
       */
      canBeRestarted?: boolean;
    }
    /**
     * Scope description.
     */
    export interface Scope {
      /**
       * Scope type.
       */
      type: "global"|"local"|"with"|"closure"|"catch"|"block"|"script"|"eval"|"module"|"wasm-expression-stack";
      /**
       * Object representing the scope. For `global` and `with` scopes it represents the actual
object; for the rest of the scopes, it is artificial transient object enumerating scope
variables as its properties.
       */
      object: Runtime.RemoteObject;
      name?: string;
      /**
       * Location in the source code where scope starts
       */
      startLocation?: Location;
      /**
       * Location in the source code where scope ends
       */
      endLocation?: Location;
    }
    /**
     * Search match for resource.
     */
    export interface SearchMatch {
      /**
       * Line number in resource content.
       */
      lineNumber: number;
      /**
       * Line with match content.
       */
      lineContent: string;
    }
    export interface BreakLocation {
      /**
       * Script identifier as reported in the `Debugger.scriptParsed`.
       */
      scriptId: Runtime.ScriptId;
      /**
       * Line number in the script (0-based).
       */
      lineNumber: number;
      /**
       * Column number in the script (0-based).
       */
      columnNumber?: number;
      type?: "debuggerStatement"|"call"|"return";
    }
    export interface WasmDisassemblyChunk {
      /**
       * The next chunk of disassembled lines.
       */
      lines: string[];
      /**
       * The bytecode offsets describing the start of each line.
       */
      bytecodeOffsets: number[];
    }
    /**
     * Enum of possible script languages.
     */
    export type ScriptLanguage = "JavaScript"|"WebAssembly";
    /**
     * Debug symbols available for a wasm script.
     */
    export interface DebugSymbols {
      /**
       * Type of the debug symbols.
       */
      type: "SourceMap"|"EmbeddedDWARF"|"ExternalDWARF";
      /**
       * URL of the external symbol source.
       */
      externalURL?: string;
    }
    export interface ResolvedBreakpoint {
      /**
       * Breakpoint unique identifier.
       */
      breakpointId: BreakpointId;
      /**
       * Actual breakpoint location.
       */
      location: Location;
    }
    
    /**
     * Fired when breakpoint is resolved to an actual script and location.
Deprecated in favor of `resolvedBreakpoints` in the `scriptParsed` event.
     */
    export type breakpointResolvedPayload = {
      /**
       * Breakpoint unique identifier.
       */
      breakpointId: BreakpointId;
      /**
       * Actual breakpoint location.
       */
      location: Location;
    }
    /**
     * Fired when the virtual machine stopped on breakpoint or exception or any other stop criteria.
     */
    export type pausedPayload = {
      /**
       * Call stack the virtual machine stopped on.
       */
      callFrames: CallFrame[];
      /**
       * Pause reason.
       */
      reason: "ambiguous"|"assert"|"CSPViolation"|"debugCommand"|"DOM"|"EventListener"|"exception"|"instrumentation"|"OOM"|"other"|"promiseRejection"|"XHR"|"step";
      /**
       * Object containing break-specific auxiliary properties.
       */
      data?: { [key: string]: string };
      /**
       * Hit breakpoints IDs
       */
      hitBreakpoints?: string[];
      /**
       * Async stack trace, if any.
       */
      asyncStackTrace?: Runtime.StackTrace;
      /**
       * Async stack trace, if any.
       */
      asyncStackTraceId?: Runtime.StackTraceId;
      /**
       * Never present, will be removed.
       */
      asyncCallStackTraceId?: Runtime.StackTraceId;
    }
    /**
     * Fired when the virtual machine resumed execution.
     */
    export type resumedPayload = void;
    /**
     * Fired when virtual machine fails to parse the script.
     */
    export type scriptFailedToParsePayload = {
      /**
       * Identifier of the script parsed.
       */
      scriptId: Runtime.ScriptId;
      /**
       * URL or name of the script parsed (if any).
       */
      url: string;
      /**
       * Line offset of the script within the resource with given URL (for script tags).
       */
      startLine: number;
      /**
       * Column offset of the script within the resource with given URL.
       */
      startColumn: number;
      /**
       * Last line of the script.
       */
      endLine: number;
      /**
       * Length of the last line of the script.
       */
      endColumn: number;
      /**
       * Specifies script creation context.
       */
      executionContextId: Runtime.ExecutionContextId;
      /**
       * Content hash of the script, SHA-256.
       */
      hash: string;
      /**
       * For Wasm modules, the content of the `build_id` custom section. For JavaScript the `debugId` magic comment.
       */
      buildId: string;
      /**
       * Embedder-specific auxiliary data likely matching {isDefault: boolean, type: 'default'|'isolated'|'worker', frameId: string}
       */
      executionContextAuxData?: { [key: string]: string };
      /**
       * URL of source map associated with script (if any).
       */
      sourceMapURL?: string;
      /**
       * True, if this script has sourceURL.
       */
      hasSourceURL?: boolean;
      /**
       * True, if this script is ES6 module.
       */
      isModule?: boolean;
      /**
       * This script length.
       */
      length?: number;
      /**
       * JavaScript top stack frame of where the script parsed event was triggered if available.
       */
      stackTrace?: Runtime.StackTrace;
      /**
       * If the scriptLanguage is WebAssembly, the code section offset in the module.
       */
      codeOffset?: number;
      /**
       * The language of the script.
       */
      scriptLanguage?: Debugger.ScriptLanguage;
      /**
       * The name the embedder supplied for this script.
       */
      embedderName?: string;
    }
    /**
     * Fired when virtual machine parses script. This event is also fired for all known and uncollected
scripts upon enabling debugger.
     */
    export type scriptParsedPayload = {
      /**
       * Identifier of the script parsed.
       */
      scriptId: Runtime.ScriptId;
      /**
       * URL or name of the script parsed (if any).
       */
      url: string;
      /**
       * Line offset of the script within the resource with given URL (for script tags).
       */
      startLine: number;
      /**
       * Column offset of the script within the resource with given URL.
       */
      startColumn: number;
      /**
       * Last line of the script.
       */
      endLine: number;
      /**
       * Length of the last line of the script.
       */
      endColumn: number;
      /**
       * Specifies script creation context.
       */
      executionContextId: Runtime.ExecutionContextId;
      /**
       * Content hash of the script, SHA-256.
       */
      hash: string;
      /**
       * For Wasm modules, the content of the `build_id` custom section. For JavaScript the `debugId` magic comment.
       */
      buildId: string;
      /**
       * Embedder-specific auxiliary data likely matching {isDefault: boolean, type: 'default'|'isolated'|'worker', frameId: string}
       */
      executionContextAuxData?: { [key: string]: string };
      /**
       * True, if this script is generated as a result of the live edit operation.
       */
      isLiveEdit?: boolean;
      /**
       * URL of source map associated with script (if any).
       */
      sourceMapURL?: string;
      /**
       * True, if this script has sourceURL.
       */
      hasSourceURL?: boolean;
      /**
       * True, if this script is ES6 module.
       */
      isModule?: boolean;
      /**
       * This script length.
       */
      length?: number;
      /**
       * JavaScript top stack frame of where the script parsed event was triggered if available.
       */
      stackTrace?: Runtime.StackTrace;
      /**
       * If the scriptLanguage is WebAssembly, the code section offset in the module.
       */
      codeOffset?: number;
      /**
       * The language of the script.
       */
      scriptLanguage?: Debugger.ScriptLanguage;
      /**
       * If the scriptLanguage is WebAssembly, the source of debug symbols for the module.
       */
      debugSymbols?: Debugger.DebugSymbols[];
      /**
       * The name the embedder supplied for this script.
       */
      embedderName?: string;
      /**
       * The list of set breakpoints in this script if calls to `setBreakpointByUrl`
matches this script's URL or hash. Clients that use this list can ignore the
`breakpointResolved` event. They are equivalent.
       */
      resolvedBreakpoints?: ResolvedBreakpoint[];
    }
    
    /**
     * Continues execution until specific location is reached.
     */
    export type continueToLocationParameters = {
      /**
       * Location to continue to.
       */
      location: Location;
      targetCallFrames?: "any"|"current";
    }
    export type continueToLocationReturnValue = {
    }
    /**
     * Disables debugger for given page.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Enables debugger for the given page. Clients should not assume that the debugging has been
enabled until the result for this command is received.
     */
    export type enableParameters = {
      /**
       * The maximum size in bytes of collected scripts (not referenced by other heap objects)
the debugger can hold. Puts no limit if parameter is omitted.
       */
      maxScriptsCacheSize?: number;
    }
    export type enableReturnValue = {
      /**
       * Unique identifier of the debugger.
       */
      debuggerId: Runtime.UniqueDebuggerId;
    }
    /**
     * Evaluates expression on a given call frame.
     */
    export type evaluateOnCallFrameParameters = {
      /**
       * Call frame identifier to evaluate on.
       */
      callFrameId: CallFrameId;
      /**
       * Expression to evaluate.
       */
      expression: string;
      /**
       * String object group name to put result into (allows rapid releasing resulting object handles
using `releaseObjectGroup`).
       */
      objectGroup?: string;
      /**
       * Specifies whether command line API should be available to the evaluated expression, defaults
to false.
       */
      includeCommandLineAPI?: boolean;
      /**
       * In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state.
       */
      silent?: boolean;
      /**
       * Whether the result is expected to be a JSON object that should be sent by value.
       */
      returnByValue?: boolean;
      /**
       * Whether preview should be generated for the result.
       */
      generatePreview?: boolean;
      /**
       * Whether to throw an exception if side effect cannot be ruled out during evaluation.
       */
      throwOnSideEffect?: boolean;
      /**
       * Terminate execution after timing out (number of milliseconds).
       */
      timeout?: Runtime.TimeDelta;
    }
    export type evaluateOnCallFrameReturnValue = {
      /**
       * Object wrapper for the evaluation result.
       */
      result: Runtime.RemoteObject;
      /**
       * Exception details.
       */
      exceptionDetails?: Runtime.ExceptionDetails;
    }
    /**
     * Returns possible locations for breakpoint. scriptId in start and end range locations should be
the same.
     */
    export type getPossibleBreakpointsParameters = {
      /**
       * Start of range to search possible breakpoint locations in.
       */
      start: Location;
      /**
       * End of range to search possible breakpoint locations in (excluding). When not specified, end
of scripts is used as end of range.
       */
      end?: Location;
      /**
       * Only consider locations which are in the same (non-nested) function as start.
       */
      restrictToFunction?: boolean;
    }
    export type getPossibleBreakpointsReturnValue = {
      /**
       * List of the possible breakpoint locations.
       */
      locations: BreakLocation[];
    }
    /**
     * Returns source for the script with given id.
     */
    export type getScriptSourceParameters = {
      /**
       * Id of the script to get source for.
       */
      scriptId: Runtime.ScriptId;
    }
    export type getScriptSourceReturnValue = {
      /**
       * Script source (empty in case of Wasm bytecode).
       */
      scriptSource: string;
      /**
       * Wasm bytecode.
       */
      bytecode?: binary;
    }
    export type disassembleWasmModuleParameters = {
      /**
       * Id of the script to disassemble
       */
      scriptId: Runtime.ScriptId;
    }
    export type disassembleWasmModuleReturnValue = {
      /**
       * For large modules, return a stream from which additional chunks of
disassembly can be read successively.
       */
      streamId?: string;
      /**
       * The total number of lines in the disassembly text.
       */
      totalNumberOfLines: number;
      /**
       * The offsets of all function bodies, in the format [start1, end1,
start2, end2, ...] where all ends are exclusive.
       */
      functionBodyOffsets: number[];
      /**
       * The first chunk of disassembly.
       */
      chunk: WasmDisassemblyChunk;
    }
    /**
     * Disassemble the next chunk of lines for the module corresponding to the
stream. If disassembly is complete, this API will invalidate the streamId
and return an empty chunk. Any subsequent calls for the now invalid stream
will return errors.
     */
    export type nextWasmDisassemblyChunkParameters = {
      streamId: string;
    }
    export type nextWasmDisassemblyChunkReturnValue = {
      /**
       * The next chunk of disassembly.
       */
      chunk: WasmDisassemblyChunk;
    }
    /**
     * This command is deprecated. Use getScriptSource instead.
     */
    export type getWasmBytecodeParameters = {
      /**
       * Id of the Wasm script to get source for.
       */
      scriptId: Runtime.ScriptId;
    }
    export type getWasmBytecodeReturnValue = {
      /**
       * Script source.
       */
      bytecode: binary;
    }
    /**
     * Returns stack trace with given `stackTraceId`.
     */
    export type getStackTraceParameters = {
      stackTraceId: Runtime.StackTraceId;
    }
    export type getStackTraceReturnValue = {
      stackTrace: Runtime.StackTrace;
    }
    /**
     * Stops on the next JavaScript statement.
     */
    export type pauseParameters = {
    }
    export type pauseReturnValue = {
    }
    export type pauseOnAsyncCallParameters = {
      /**
       * Debugger will pause when async call with given stack trace is started.
       */
      parentStackTraceId: Runtime.StackTraceId;
    }
    export type pauseOnAsyncCallReturnValue = {
    }
    /**
     * Removes JavaScript breakpoint.
     */
    export type removeBreakpointParameters = {
      breakpointId: BreakpointId;
    }
    export type removeBreakpointReturnValue = {
    }
    /**
     * Restarts particular call frame from the beginning. The old, deprecated
behavior of `restartFrame` is to stay paused and allow further CDP commands
after a restart was scheduled. This can cause problems with restarting, so
we now continue execution immediatly after it has been scheduled until we
reach the beginning of the restarted frame.

To stay back-wards compatible, `restartFrame` now expects a `mode`
parameter to be present. If the `mode` parameter is missing, `restartFrame`
errors out.

The various return values are deprecated and `callFrames` is always empty.
Use the call frames from the `Debugger#paused` events instead, that fires
once V8 pauses at the beginning of the restarted function.
     */
    export type restartFrameParameters = {
      /**
       * Call frame identifier to evaluate on.
       */
      callFrameId: CallFrameId;
      /**
       * The `mode` parameter must be present and set to 'StepInto', otherwise
`restartFrame` will error out.
       */
      mode?: "StepInto";
    }
    export type restartFrameReturnValue = {
      /**
       * New stack trace.
       */
      callFrames: CallFrame[];
      /**
       * Async stack trace, if any.
       */
      asyncStackTrace?: Runtime.StackTrace;
      /**
       * Async stack trace, if any.
       */
      asyncStackTraceId?: Runtime.StackTraceId;
    }
    /**
     * Resumes JavaScript execution.
     */
    export type resumeParameters = {
      /**
       * Set to true to terminate execution upon resuming execution. In contrast
to Runtime.terminateExecution, this will allows to execute further
JavaScript (i.e. via evaluation) until execution of the paused code
is actually resumed, at which point termination is triggered.
If execution is currently not paused, this parameter has no effect.
       */
      terminateOnResume?: boolean;
    }
    export type resumeReturnValue = {
    }
    /**
     * Searches for given string in script content.
     */
    export type searchInContentParameters = {
      /**
       * Id of the script to search in.
       */
      scriptId: Runtime.ScriptId;
      /**
       * String to search for.
       */
      query: string;
      /**
       * If true, search is case sensitive.
       */
      caseSensitive?: boolean;
      /**
       * If true, treats string parameter as regex.
       */
      isRegex?: boolean;
    }
    export type searchInContentReturnValue = {
      /**
       * List of search matches.
       */
      result: SearchMatch[];
    }
    /**
     * Enables or disables async call stacks tracking.
     */
    export type setAsyncCallStackDepthParameters = {
      /**
       * Maximum depth of async call stacks. Setting to `0` will effectively disable collecting async
call stacks (default).
       */
      maxDepth: number;
    }
    export type setAsyncCallStackDepthReturnValue = {
    }
    /**
     * Replace previous blackbox execution contexts with passed ones. Forces backend to skip
stepping/pausing in scripts in these execution contexts. VM will try to leave blackboxed script by
performing 'step in' several times, finally resorting to 'step out' if unsuccessful.
     */
    export type setBlackboxExecutionContextsParameters = {
      /**
       * Array of execution context unique ids for the debugger to ignore.
       */
      uniqueIds: string[];
    }
    export type setBlackboxExecutionContextsReturnValue = {
    }
    /**
     * Replace previous blackbox patterns with passed ones. Forces backend to skip stepping/pausing in
scripts with url matching one of the patterns. VM will try to leave blackboxed script by
performing 'step in' several times, finally resorting to 'step out' if unsuccessful.
     */
    export type setBlackboxPatternsParameters = {
      /**
       * Array of regexps that will be used to check script url for blackbox state.
       */
      patterns: string[];
      /**
       * If true, also ignore scripts with no source url.
       */
      skipAnonymous?: boolean;
    }
    export type setBlackboxPatternsReturnValue = {
    }
    /**
     * Makes backend skip steps in the script in blackboxed ranges. VM will try leave blacklisted
scripts by performing 'step in' several times, finally resorting to 'step out' if unsuccessful.
Positions array contains positions where blackbox state is changed. First interval isn't
blackboxed. Array should be sorted.
     */
    export type setBlackboxedRangesParameters = {
      /**
       * Id of the script.
       */
      scriptId: Runtime.ScriptId;
      positions: ScriptPosition[];
    }
    export type setBlackboxedRangesReturnValue = {
    }
    /**
     * Sets JavaScript breakpoint at a given location.
     */
    export type setBreakpointParameters = {
      /**
       * Location to set breakpoint in.
       */
      location: Location;
      /**
       * Expression to use as a breakpoint condition. When specified, debugger will only stop on the
breakpoint if this expression evaluates to true.
       */
      condition?: string;
    }
    export type setBreakpointReturnValue = {
      /**
       * Id of the created breakpoint for further reference.
       */
      breakpointId: BreakpointId;
      /**
       * Location this breakpoint resolved into.
       */
      actualLocation: Location;
    }
    /**
     * Sets instrumentation breakpoint.
     */
    export type setInstrumentationBreakpointParameters = {
      /**
       * Instrumentation name.
       */
      instrumentation: "beforeScriptExecution"|"beforeScriptWithSourceMapExecution";
    }
    export type setInstrumentationBreakpointReturnValue = {
      /**
       * Id of the created breakpoint for further reference.
       */
      breakpointId: BreakpointId;
    }
    /**
     * Sets JavaScript breakpoint at given location specified either by URL or URL regex. Once this
command is issued, all existing parsed scripts will have breakpoints resolved and returned in
`locations` property. Further matching script parsing will result in subsequent
`breakpointResolved` events issued. This logical breakpoint will survive page reloads.
     */
    export type setBreakpointByUrlParameters = {
      /**
       * Line number to set breakpoint at.
       */
      lineNumber: number;
      /**
       * URL of the resources to set breakpoint on.
       */
      url?: string;
      /**
       * Regex pattern for the URLs of the resources to set breakpoints on. Either `url` or
`urlRegex` must be specified.
       */
      urlRegex?: string;
      /**
       * Script hash of the resources to set breakpoint on.
       */
      scriptHash?: string;
      /**
       * Offset in the line to set breakpoint at.
       */
      columnNumber?: number;
      /**
       * Expression to use as a breakpoint condition. When specified, debugger will only stop on the
breakpoint if this expression evaluates to true.
       */
      condition?: string;
    }
    export type setBreakpointByUrlReturnValue = {
      /**
       * Id of the created breakpoint for further reference.
       */
      breakpointId: BreakpointId;
      /**
       * List of the locations this breakpoint resolved into upon addition.
       */
      locations: Location[];
    }
    /**
     * Sets JavaScript breakpoint before each call to the given function.
If another function was created from the same source as a given one,
calling it will also trigger the breakpoint.
     */
    export type setBreakpointOnFunctionCallParameters = {
      /**
       * Function object id.
       */
      objectId: Runtime.RemoteObjectId;
      /**
       * Expression to use as a breakpoint condition. When specified, debugger will
stop on the breakpoint if this expression evaluates to true.
       */
      condition?: string;
    }
    export type setBreakpointOnFunctionCallReturnValue = {
      /**
       * Id of the created breakpoint for further reference.
       */
      breakpointId: BreakpointId;
    }
    /**
     * Activates / deactivates all breakpoints on the page.
     */
    export type setBreakpointsActiveParameters = {
      /**
       * New value for breakpoints active state.
       */
      active: boolean;
    }
    export type setBreakpointsActiveReturnValue = {
    }
    /**
     * Defines pause on exceptions state. Can be set to stop on all exceptions, uncaught exceptions,
or caught exceptions, no exceptions. Initial pause on exceptions state is `none`.
     */
    export type setPauseOnExceptionsParameters = {
      /**
       * Pause on exceptions mode.
       */
      state: "none"|"caught"|"uncaught"|"all";
    }
    export type setPauseOnExceptionsReturnValue = {
    }
    /**
     * Changes return value in top frame. Available only at return break position.
     */
    export type setReturnValueParameters = {
      /**
       * New return value.
       */
      newValue: Runtime.CallArgument;
    }
    export type setReturnValueReturnValue = {
    }
    /**
     * Edits JavaScript source live.

In general, functions that are currently on the stack can not be edited with
a single exception: If the edited function is the top-most stack frame and
that is the only activation of that function on the stack. In this case
the live edit will be successful and a `Debugger.restartFrame` for the
top-most function is automatically triggered.
     */
    export type setScriptSourceParameters = {
      /**
       * Id of the script to edit.
       */
      scriptId: Runtime.ScriptId;
      /**
       * New content of the script.
       */
      scriptSource: string;
      /**
       * If true the change will not actually be applied. Dry run may be used to get result
description without actually modifying the code.
       */
      dryRun?: boolean;
      /**
       * If true, then `scriptSource` is allowed to change the function on top of the stack
as long as the top-most stack frame is the only activation of that function.
       */
      allowTopFrameEditing?: boolean;
    }
    export type setScriptSourceReturnValue = {
      /**
       * New stack trace in case editing has happened while VM was stopped.
       */
      callFrames?: CallFrame[];
      /**
       * Whether current call stack  was modified after applying the changes.
       */
      stackChanged?: boolean;
      /**
       * Async stack trace, if any.
       */
      asyncStackTrace?: Runtime.StackTrace;
      /**
       * Async stack trace, if any.
       */
      asyncStackTraceId?: Runtime.StackTraceId;
      /**
       * Whether the operation was successful or not. Only `Ok` denotes a
successful live edit while the other enum variants denote why
the live edit failed.
       */
      status: "Ok"|"CompileError"|"BlockedByActiveGenerator"|"BlockedByActiveFunction"|"BlockedByTopLevelEsModuleChange";
      /**
       * Exception details if any. Only present when `status` is `CompileError`.
       */
      exceptionDetails?: Runtime.ExceptionDetails;
    }
    /**
     * Makes page not interrupt on any pauses (breakpoint, exception, dom exception etc).
     */
    export type setSkipAllPausesParameters = {
      /**
       * New value for skip pauses state.
       */
      skip: boolean;
    }
    export type setSkipAllPausesReturnValue = {
    }
    /**
     * Changes value of variable in a callframe. Object-based scopes are not supported and must be
mutated manually.
     */
    export type setVariableValueParameters = {
      /**
       * 0-based number of scope as was listed in scope chain. Only 'local', 'closure' and 'catch'
scope types are allowed. Other scopes could be manipulated manually.
       */
      scopeNumber: number;
      /**
       * Variable name.
       */
      variableName: string;
      /**
       * New variable value.
       */
      newValue: Runtime.CallArgument;
      /**
       * Id of callframe that holds variable.
       */
      callFrameId: CallFrameId;
    }
    export type setVariableValueReturnValue = {
    }
    /**
     * Steps into the function call.
     */
    export type stepIntoParameters = {
      /**
       * Debugger will pause on the execution of the first async task which was scheduled
before next pause.
       */
      breakOnAsyncCall?: boolean;
      /**
       * The skipList specifies location ranges that should be skipped on step into.
       */
      skipList?: LocationRange[];
    }
    export type stepIntoReturnValue = {
    }
    /**
     * Steps out of the function call.
     */
    export type stepOutParameters = {
    }
    export type stepOutReturnValue = {
    }
    /**
     * Steps over the statement.
     */
    export type stepOverParameters = {
      /**
       * The skipList specifies location ranges that should be skipped on step over.
       */
      skipList?: LocationRange[];
    }
    export type stepOverReturnValue = {
    }
  }
  
  export namespace HeapProfiler {
    /**
     * Heap snapshot object id.
     */
    export type HeapSnapshotObjectId = string;
    /**
     * Sampling Heap Profile node. Holds callsite information, allocation statistics and child nodes.
     */
    export interface SamplingHeapProfileNode {
      /**
       * Function location.
       */
      callFrame: Runtime.CallFrame;
      /**
       * Allocations size in bytes for the node excluding children.
       */
      selfSize: number;
      /**
       * Node id. Ids are unique across all profiles collected between startSampling and stopSampling.
       */
      id: number;
      /**
       * Child nodes.
       */
      children: SamplingHeapProfileNode[];
    }
    /**
     * A single sample from a sampling profile.
     */
    export interface SamplingHeapProfileSample {
      /**
       * Allocation size in bytes attributed to the sample.
       */
      size: number;
      /**
       * Id of the corresponding profile tree node.
       */
      nodeId: number;
      /**
       * Time-ordered sample ordinal number. It is unique across all profiles retrieved
between startSampling and stopSampling.
       */
      ordinal: number;
    }
    /**
     * Sampling profile.
     */
    export interface SamplingHeapProfile {
      head: SamplingHeapProfileNode;
      samples: SamplingHeapProfileSample[];
    }
    
    export type addHeapSnapshotChunkPayload = {
      chunk: string;
    }
    /**
     * If heap objects tracking has been started then backend may send update for one or more fragments
     */
    export type heapStatsUpdatePayload = {
      /**
       * An array of triplets. Each triplet describes a fragment. The first integer is the fragment
index, the second integer is a total count of objects for the fragment, the third integer is
a total size of the objects for the fragment.
       */
      statsUpdate: number[];
    }
    /**
     * If heap objects tracking has been started then backend regularly sends a current value for last
seen object id and corresponding timestamp. If the were changes in the heap since last event
then one or more heapStatsUpdate events will be sent before a new lastSeenObjectId event.
     */
    export type lastSeenObjectIdPayload = {
      lastSeenObjectId: number;
      timestamp: number;
    }
    export type reportHeapSnapshotProgressPayload = {
      done: number;
      total: number;
      finished?: boolean;
    }
    export type resetProfilesPayload = void;
    
    /**
     * Enables console to refer to the node with given id via $x (see Command Line API for more details
$x functions).
     */
    export type addInspectedHeapObjectParameters = {
      /**
       * Heap snapshot object id to be accessible by means of $x command line API.
       */
      heapObjectId: HeapSnapshotObjectId;
    }
    export type addInspectedHeapObjectReturnValue = {
    }
    export type collectGarbageParameters = {
    }
    export type collectGarbageReturnValue = {
    }
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    export type getHeapObjectIdParameters = {
      /**
       * Identifier of the object to get heap object id for.
       */
      objectId: Runtime.RemoteObjectId;
    }
    export type getHeapObjectIdReturnValue = {
      /**
       * Id of the heap snapshot object corresponding to the passed remote object id.
       */
      heapSnapshotObjectId: HeapSnapshotObjectId;
    }
    export type getObjectByHeapObjectIdParameters = {
      objectId: HeapSnapshotObjectId;
      /**
       * Symbolic group name that can be used to release multiple objects.
       */
      objectGroup?: string;
    }
    export type getObjectByHeapObjectIdReturnValue = {
      /**
       * Evaluation result.
       */
      result: Runtime.RemoteObject;
    }
    export type getSamplingProfileParameters = {
    }
    export type getSamplingProfileReturnValue = {
      /**
       * Return the sampling profile being collected.
       */
      profile: SamplingHeapProfile;
    }
    export type startSamplingParameters = {
      /**
       * Average sample interval in bytes. Poisson distribution is used for the intervals. The
default value is 32768 bytes.
       */
      samplingInterval?: number;
      /**
       * Maximum stack depth. The default value is 128.
       */
      stackDepth?: number;
      /**
       * By default, the sampling heap profiler reports only objects which are
still alive when the profile is returned via getSamplingProfile or
stopSampling, which is useful for determining what functions contribute
the most to steady-state memory usage. This flag instructs the sampling
heap profiler to also include information about objects discarded by
major GC, which will show which functions cause large temporary memory
usage or long GC pauses.
       */
      includeObjectsCollectedByMajorGC?: boolean;
      /**
       * By default, the sampling heap profiler reports only objects which are
still alive when the profile is returned via getSamplingProfile or
stopSampling, which is useful for determining what functions contribute
the most to steady-state memory usage. This flag instructs the sampling
heap profiler to also include information about objects discarded by
minor GC, which is useful when tuning a latency-sensitive application
for minimal GC activity.
       */
      includeObjectsCollectedByMinorGC?: boolean;
    }
    export type startSamplingReturnValue = {
    }
    export type startTrackingHeapObjectsParameters = {
      trackAllocations?: boolean;
    }
    export type startTrackingHeapObjectsReturnValue = {
    }
    export type stopSamplingParameters = {
    }
    export type stopSamplingReturnValue = {
      /**
       * Recorded sampling heap profile.
       */
      profile: SamplingHeapProfile;
    }
    export type stopTrackingHeapObjectsParameters = {
      /**
       * If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken
when the tracking is stopped.
       */
      reportProgress?: boolean;
      /**
       * Deprecated in favor of `exposeInternals`.
       */
      treatGlobalObjectsAsRoots?: boolean;
      /**
       * If true, numerical values are included in the snapshot
       */
      captureNumericValue?: boolean;
      /**
       * If true, exposes internals of the snapshot.
       */
      exposeInternals?: boolean;
    }
    export type stopTrackingHeapObjectsReturnValue = {
    }
    export type takeHeapSnapshotParameters = {
      /**
       * If true 'reportHeapSnapshotProgress' events will be generated while snapshot is being taken.
       */
      reportProgress?: boolean;
      /**
       * If true, a raw snapshot without artificial roots will be generated.
Deprecated in favor of `exposeInternals`.
       */
      treatGlobalObjectsAsRoots?: boolean;
      /**
       * If true, numerical values are included in the snapshot
       */
      captureNumericValue?: boolean;
      /**
       * If true, exposes internals of the snapshot.
       */
      exposeInternals?: boolean;
    }
    export type takeHeapSnapshotReturnValue = {
    }
  }
  
  export namespace Profiler {
    /**
     * Profile node. Holds callsite information, execution statistics and child nodes.
     */
    export interface ProfileNode {
      /**
       * Unique id of the node.
       */
      id: number;
      /**
       * Function location.
       */
      callFrame: Runtime.CallFrame;
      /**
       * Number of samples where this node was on top of the call stack.
       */
      hitCount?: number;
      /**
       * Child node ids.
       */
      children?: number[];
      /**
       * The reason of being not optimized. The function may be deoptimized or marked as don't
optimize.
       */
      deoptReason?: string;
      /**
       * An array of source position ticks.
       */
      positionTicks?: PositionTickInfo[];
    }
    /**
     * Profile.
     */
    export interface Profile {
      /**
       * The list of profile nodes. First item is the root node.
       */
      nodes: ProfileNode[];
      /**
       * Profiling start timestamp in microseconds.
       */
      startTime: number;
      /**
       * Profiling end timestamp in microseconds.
       */
      endTime: number;
      /**
       * Ids of samples top nodes.
       */
      samples?: number[];
      /**
       * Time intervals between adjacent samples in microseconds. The first delta is relative to the
profile startTime.
       */
      timeDeltas?: number[];
    }
    /**
     * Specifies a number of samples attributed to a certain source position.
     */
    export interface PositionTickInfo {
      /**
       * Source line number (1-based).
       */
      line: number;
      /**
       * Number of samples attributed to the source line.
       */
      ticks: number;
    }
    /**
     * Coverage data for a source range.
     */
    export interface CoverageRange {
      /**
       * JavaScript script source offset for the range start.
       */
      startOffset: number;
      /**
       * JavaScript script source offset for the range end.
       */
      endOffset: number;
      /**
       * Collected execution count of the source range.
       */
      count: number;
    }
    /**
     * Coverage data for a JavaScript function.
     */
    export interface FunctionCoverage {
      /**
       * JavaScript function name.
       */
      functionName: string;
      /**
       * Source ranges inside the function with coverage data.
       */
      ranges: CoverageRange[];
      /**
       * Whether coverage data for this function has block granularity.
       */
      isBlockCoverage: boolean;
    }
    /**
     * Coverage data for a JavaScript script.
     */
    export interface ScriptCoverage {
      /**
       * JavaScript script id.
       */
      scriptId: Runtime.ScriptId;
      /**
       * JavaScript script name or url.
       */
      url: string;
      /**
       * Functions contained in the script that has coverage data.
       */
      functions: FunctionCoverage[];
    }
    
    export type consoleProfileFinishedPayload = {
      id: string;
      /**
       * Location of console.profileEnd().
       */
      location: Debugger.Location;
      profile: Profile;
      /**
       * Profile title passed as an argument to console.profile().
       */
      title?: string;
    }
    /**
     * Sent when new profile recording is started using console.profile() call.
     */
    export type consoleProfileStartedPayload = {
      id: string;
      /**
       * Location of console.profile().
       */
      location: Debugger.Location;
      /**
       * Profile title passed as an argument to console.profile().
       */
      title?: string;
    }
    /**
     * Reports coverage delta since the last poll (either from an event like this, or from
`takePreciseCoverage` for the current isolate. May only be sent if precise code
coverage has been started. This event can be trigged by the embedder to, for example,
trigger collection of coverage data immediately at a certain point in time.
     */
    export type preciseCoverageDeltaUpdatePayload = {
      /**
       * Monotonically increasing time (in seconds) when the coverage update was taken in the backend.
       */
      timestamp: number;
      /**
       * Identifier for distinguishing coverage events.
       */
      occasion: string;
      /**
       * Coverage data for the current isolate.
       */
      result: ScriptCoverage[];
    }
    
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Collect coverage data for the current isolate. The coverage data may be incomplete due to
garbage collection.
     */
    export type getBestEffortCoverageParameters = {
    }
    export type getBestEffortCoverageReturnValue = {
      /**
       * Coverage data for the current isolate.
       */
      result: ScriptCoverage[];
    }
    /**
     * Changes CPU profiler sampling interval. Must be called before CPU profiles recording started.
     */
    export type setSamplingIntervalParameters = {
      /**
       * New sampling interval in microseconds.
       */
      interval: number;
    }
    export type setSamplingIntervalReturnValue = {
    }
    export type startParameters = {
    }
    export type startReturnValue = {
    }
    /**
     * Enable precise code coverage. Coverage data for JavaScript executed before enabling precise code
coverage may be incomplete. Enabling prevents running optimized code and resets execution
counters.
     */
    export type startPreciseCoverageParameters = {
      /**
       * Collect accurate call counts beyond simple 'covered' or 'not covered'.
       */
      callCount?: boolean;
      /**
       * Collect block-based coverage.
       */
      detailed?: boolean;
      /**
       * Allow the backend to send updates on its own initiative
       */
      allowTriggeredUpdates?: boolean;
    }
    export type startPreciseCoverageReturnValue = {
      /**
       * Monotonically increasing time (in seconds) when the coverage update was taken in the backend.
       */
      timestamp: number;
    }
    export type stopParameters = {
    }
    export type stopReturnValue = {
      /**
       * Recorded profile.
       */
      profile: Profile;
    }
    /**
     * Disable precise code coverage. Disabling releases unnecessary execution count records and allows
executing optimized code.
     */
    export type stopPreciseCoverageParameters = {
    }
    export type stopPreciseCoverageReturnValue = {
    }
    /**
     * Collect coverage data for the current isolate, and resets execution counters. Precise code
coverage needs to have started.
     */
    export type takePreciseCoverageParameters = {
    }
    export type takePreciseCoverageReturnValue = {
      /**
       * Coverage data for the current isolate.
       */
      result: ScriptCoverage[];
      /**
       * Monotonically increasing time (in seconds) when the coverage update was taken in the backend.
       */
      timestamp: number;
    }
  }
  
  /**
   * Runtime domain exposes JavaScript runtime by means of remote evaluation and mirror objects.
Evaluation results are returned as mirror object that expose object type, string representation
and unique identifier that can be used for further object reference. Original objects are
maintained in memory unless they are either explicitly released or are released along with the
other objects in their object group.
   */
  export namespace Runtime {
    /**
     * Unique script identifier.
     */
    export type ScriptId = string;
    /**
     * Represents options for serialization. Overrides `generatePreview` and `returnByValue`.
     */
    export interface SerializationOptions {
      serialization: "deep"|"json"|"idOnly";
      /**
       * Deep serialization depth. Default is full depth. Respected only in `deep` serialization mode.
       */
      maxDepth?: number;
      /**
       * Embedder-specific parameters. For example if connected to V8 in Chrome these control DOM
serialization via `maxNodeDepth: integer` and `includeShadowTree: "none" | "open" | "all"`.
Values can be only of type string or integer.
       */
      additionalParameters?: { [key: string]: string };
    }
    /**
     * Represents deep serialized value.
     */
    export interface DeepSerializedValue {
      type: "undefined"|"null"|"string"|"number"|"boolean"|"bigint"|"regexp"|"date"|"symbol"|"array"|"object"|"function"|"map"|"set"|"weakmap"|"weakset"|"error"|"proxy"|"promise"|"typedarray"|"arraybuffer"|"node"|"window"|"generator";
      value?: any;
      objectId?: string;
      /**
       * Set if value reference met more then once during serialization. In such
case, value is provided only to one of the serialized values. Unique
per value in the scope of one CDP call.
       */
      weakLocalObjectReference?: number;
    }
    /**
     * Unique object identifier.
     */
    export type RemoteObjectId = string;
    /**
     * Primitive value which cannot be JSON-stringified. Includes values `-0`, `NaN`, `Infinity`,
`-Infinity`, and bigint literals.
     */
    export type UnserializableValue = string;
    /**
     * Mirror object referencing original JavaScript object.
     */
    export interface RemoteObject {
      /**
       * Object type.
       */
      type: "object"|"function"|"undefined"|"string"|"number"|"boolean"|"symbol"|"bigint";
      /**
       * Object subtype hint. Specified for `object` type values only.
NOTE: If you change anything here, make sure to also update
`subtype` in `ObjectPreview` and `PropertyPreview` below.
       */
      subtype?: "array"|"null"|"node"|"regexp"|"date"|"map"|"set"|"weakmap"|"weakset"|"iterator"|"generator"|"error"|"proxy"|"promise"|"typedarray"|"arraybuffer"|"dataview"|"webassemblymemory"|"wasmvalue"|"trustedtype";
      /**
       * Object class (constructor) name. Specified for `object` type values only.
       */
      className?: string;
      /**
       * Remote object value in case of primitive values or JSON values (if it was requested).
       */
      value?: any;
      /**
       * Primitive value which can not be JSON-stringified does not have `value`, but gets this
property.
       */
      unserializableValue?: UnserializableValue;
      /**
       * String representation of the object.
       */
      description?: string;
      /**
       * Deep serialized value.
       */
      deepSerializedValue?: DeepSerializedValue;
      /**
       * Unique object identifier (for non-primitive values).
       */
      objectId?: RemoteObjectId;
      /**
       * Preview containing abbreviated property values. Specified for `object` type values only.
       */
      preview?: ObjectPreview;
      customPreview?: CustomPreview;
    }
    export interface CustomPreview {
      /**
       * The JSON-stringified result of formatter.header(object, config) call.
It contains json ML array that represents RemoteObject.
       */
      header: string;
      /**
       * If formatter returns true as a result of formatter.hasBody call then bodyGetterId will
contain RemoteObjectId for the function that returns result of formatter.body(object, config) call.
The result value is json ML array.
       */
      bodyGetterId?: RemoteObjectId;
    }
    /**
     * Object containing abbreviated remote object value.
     */
    export interface ObjectPreview {
      /**
       * Object type.
       */
      type: "object"|"function"|"undefined"|"string"|"number"|"boolean"|"symbol"|"bigint";
      /**
       * Object subtype hint. Specified for `object` type values only.
       */
      subtype?: "array"|"null"|"node"|"regexp"|"date"|"map"|"set"|"weakmap"|"weakset"|"iterator"|"generator"|"error"|"proxy"|"promise"|"typedarray"|"arraybuffer"|"dataview"|"webassemblymemory"|"wasmvalue"|"trustedtype";
      /**
       * String representation of the object.
       */
      description?: string;
      /**
       * True iff some of the properties or entries of the original object did not fit.
       */
      overflow: boolean;
      /**
       * List of the properties.
       */
      properties: PropertyPreview[];
      /**
       * List of the entries. Specified for `map` and `set` subtype values only.
       */
      entries?: EntryPreview[];
    }
    export interface PropertyPreview {
      /**
       * Property name.
       */
      name: string;
      /**
       * Object type. Accessor means that the property itself is an accessor property.
       */
      type: "object"|"function"|"undefined"|"string"|"number"|"boolean"|"symbol"|"accessor"|"bigint";
      /**
       * User-friendly property value string.
       */
      value?: string;
      /**
       * Nested value preview.
       */
      valuePreview?: ObjectPreview;
      /**
       * Object subtype hint. Specified for `object` type values only.
       */
      subtype?: "array"|"null"|"node"|"regexp"|"date"|"map"|"set"|"weakmap"|"weakset"|"iterator"|"generator"|"error"|"proxy"|"promise"|"typedarray"|"arraybuffer"|"dataview"|"webassemblymemory"|"wasmvalue"|"trustedtype";
    }
    export interface EntryPreview {
      /**
       * Preview of the key. Specified for map-like collection entries.
       */
      key?: ObjectPreview;
      /**
       * Preview of the value.
       */
      value: ObjectPreview;
    }
    /**
     * Object property descriptor.
     */
    export interface PropertyDescriptor {
      /**
       * Property name or symbol description.
       */
      name: string;
      /**
       * The value associated with the property.
       */
      value?: RemoteObject;
      /**
       * True if the value associated with the property may be changed (data descriptors only).
       */
      writable?: boolean;
      /**
       * A function which serves as a getter for the property, or `undefined` if there is no getter
(accessor descriptors only).
       */
      get?: RemoteObject;
      /**
       * A function which serves as a setter for the property, or `undefined` if there is no setter
(accessor descriptors only).
       */
      set?: RemoteObject;
      /**
       * True if the type of this property descriptor may be changed and if the property may be
deleted from the corresponding object.
       */
      configurable: boolean;
      /**
       * True if this property shows up during enumeration of the properties on the corresponding
object.
       */
      enumerable: boolean;
      /**
       * True if the result was thrown during the evaluation.
       */
      wasThrown?: boolean;
      /**
       * True if the property is owned for the object.
       */
      isOwn?: boolean;
      /**
       * Property symbol object, if the property is of the `symbol` type.
       */
      symbol?: RemoteObject;
    }
    /**
     * Object internal property descriptor. This property isn't normally visible in JavaScript code.
     */
    export interface InternalPropertyDescriptor {
      /**
       * Conventional property name.
       */
      name: string;
      /**
       * The value associated with the property.
       */
      value?: RemoteObject;
    }
    /**
     * Object private field descriptor.
     */
    export interface PrivatePropertyDescriptor {
      /**
       * Private property name.
       */
      name: string;
      /**
       * The value associated with the private property.
       */
      value?: RemoteObject;
      /**
       * A function which serves as a getter for the private property,
or `undefined` if there is no getter (accessor descriptors only).
       */
      get?: RemoteObject;
      /**
       * A function which serves as a setter for the private property,
or `undefined` if there is no setter (accessor descriptors only).
       */
      set?: RemoteObject;
    }
    /**
     * Represents function call argument. Either remote object id `objectId`, primitive `value`,
unserializable primitive value or neither of (for undefined) them should be specified.
     */
    export interface CallArgument {
      /**
       * Primitive value or serializable javascript object.
       */
      value?: any;
      /**
       * Primitive value which can not be JSON-stringified.
       */
      unserializableValue?: UnserializableValue;
      /**
       * Remote object handle.
       */
      objectId?: RemoteObjectId;
    }
    /**
     * Id of an execution context.
     */
    export type ExecutionContextId = number;
    /**
     * Description of an isolated world.
     */
    export interface ExecutionContextDescription {
      /**
       * Unique id of the execution context. It can be used to specify in which execution context
script evaluation should be performed.
       */
      id: ExecutionContextId;
      /**
       * Execution context origin.
       */
      origin: string;
      /**
       * Human readable name describing given context.
       */
      name: string;
      /**
       * A system-unique execution context identifier. Unlike the id, this is unique across
multiple processes, so can be reliably used to identify specific context while backend
performs a cross-process navigation.
       */
      uniqueId: string;
      /**
       * Embedder-specific auxiliary data likely matching {isDefault: boolean, type: 'default'|'isolated'|'worker', frameId: string}
       */
      auxData?: { [key: string]: string };
    }
    /**
     * Detailed information about exception (or error) that was thrown during script compilation or
execution.
     */
    export interface ExceptionDetails {
      /**
       * Exception id.
       */
      exceptionId: number;
      /**
       * Exception text, which should be used together with exception object when available.
       */
      text: string;
      /**
       * Line number of the exception location (0-based).
       */
      lineNumber: number;
      /**
       * Column number of the exception location (0-based).
       */
      columnNumber: number;
      /**
       * Script ID of the exception location.
       */
      scriptId?: ScriptId;
      /**
       * URL of the exception location, to be used when the script was not reported.
       */
      url?: string;
      /**
       * JavaScript stack trace if available.
       */
      stackTrace?: StackTrace;
      /**
       * Exception object if available.
       */
      exception?: RemoteObject;
      /**
       * Identifier of the context where exception happened.
       */
      executionContextId?: ExecutionContextId;
      /**
       * Dictionary with entries of meta data that the client associated
with this exception, such as information about associated network
requests, etc.
       */
      exceptionMetaData?: { [key: string]: string };
    }
    /**
     * Number of milliseconds since epoch.
     */
    export type Timestamp = number;
    /**
     * Number of milliseconds.
     */
    export type TimeDelta = number;
    /**
     * Stack entry for runtime errors and assertions.
     */
    export interface CallFrame {
      /**
       * JavaScript function name.
       */
      functionName: string;
      /**
       * JavaScript script id.
       */
      scriptId: ScriptId;
      /**
       * JavaScript script name or url.
       */
      url: string;
      /**
       * JavaScript script line number (0-based).
       */
      lineNumber: number;
      /**
       * JavaScript script column number (0-based).
       */
      columnNumber: number;
    }
    /**
     * Call frames for assertions or error messages.
     */
    export interface StackTrace {
      /**
       * String label of this stack trace. For async traces this may be a name of the function that
initiated the async call.
       */
      description?: string;
      /**
       * JavaScript function name.
       */
      callFrames: CallFrame[];
      /**
       * Asynchronous JavaScript stack trace that preceded this stack, if available.
       */
      parent?: StackTrace;
      /**
       * Asynchronous JavaScript stack trace that preceded this stack, if available.
       */
      parentId?: StackTraceId;
    }
    /**
     * Unique identifier of current debugger.
     */
    export type UniqueDebuggerId = string;
    /**
     * If `debuggerId` is set stack trace comes from another debugger and can be resolved there. This
allows to track cross-debugger calls. See `Runtime.StackTrace` and `Debugger.paused` for usages.
     */
    export interface StackTraceId {
      id: string;
      debuggerId?: UniqueDebuggerId;
    }
    
    /**
     * Notification is issued every time when binding is called.
     */
    export type bindingCalledPayload = {
      name: string;
      payload: string;
      /**
       * Identifier of the context where the call was made.
       */
      executionContextId: ExecutionContextId;
    }
    /**
     * Issued when console API was called.
     */
    export type consoleAPICalledPayload = {
      /**
       * Type of the call.
       */
      type: "log"|"debug"|"info"|"error"|"warning"|"dir"|"dirxml"|"table"|"trace"|"clear"|"startGroup"|"startGroupCollapsed"|"endGroup"|"assert"|"profile"|"profileEnd"|"count"|"timeEnd";
      /**
       * Call arguments.
       */
      args: RemoteObject[];
      /**
       * Identifier of the context where the call was made.
       */
      executionContextId: ExecutionContextId;
      /**
       * Call timestamp.
       */
      timestamp: Timestamp;
      /**
       * Stack trace captured when the call was made. The async stack chain is automatically reported for
the following call types: `assert`, `error`, `trace`, `warning`. For other types the async call
chain can be retrieved using `Debugger.getStackTrace` and `stackTrace.parentId` field.
       */
      stackTrace?: StackTrace;
      /**
       * Console context descriptor for calls on non-default console context (not console.*):
'anonymous#unique-logger-id' for call on unnamed context, 'name#unique-logger-id' for call
on named context.
       */
      context?: string;
    }
    /**
     * Issued when unhandled exception was revoked.
     */
    export type exceptionRevokedPayload = {
      /**
       * Reason describing why exception was revoked.
       */
      reason: string;
      /**
       * The id of revoked exception, as reported in `exceptionThrown`.
       */
      exceptionId: number;
    }
    /**
     * Issued when exception was thrown and unhandled.
     */
    export type exceptionThrownPayload = {
      /**
       * Timestamp of the exception.
       */
      timestamp: Timestamp;
      exceptionDetails: ExceptionDetails;
    }
    /**
     * Issued when new execution context is created.
     */
    export type executionContextCreatedPayload = {
      /**
       * A newly created execution context.
       */
      context: ExecutionContextDescription;
    }
    /**
     * Issued when execution context is destroyed.
     */
    export type executionContextDestroyedPayload = {
      /**
       * Id of the destroyed context
       */
      executionContextId: ExecutionContextId;
      /**
       * Unique Id of the destroyed context
       */
      executionContextUniqueId: string;
    }
    /**
     * Issued when all executionContexts were cleared in browser
     */
    export type executionContextsClearedPayload = void;
    /**
     * Issued when object should be inspected (for example, as a result of inspect() command line API
call).
     */
    export type inspectRequestedPayload = {
      object: RemoteObject;
      hints: { [key: string]: string };
      /**
       * Identifier of the context where the call was made.
       */
      executionContextId?: ExecutionContextId;
    }
    
    /**
     * Add handler to promise with given promise object id.
     */
    export type awaitPromiseParameters = {
      /**
       * Identifier of the promise.
       */
      promiseObjectId: RemoteObjectId;
      /**
       * Whether the result is expected to be a JSON object that should be sent by value.
       */
      returnByValue?: boolean;
      /**
       * Whether preview should be generated for the result.
       */
      generatePreview?: boolean;
    }
    export type awaitPromiseReturnValue = {
      /**
       * Promise result. Will contain rejected value if promise was rejected.
       */
      result: RemoteObject;
      /**
       * Exception details if stack strace is available.
       */
      exceptionDetails?: ExceptionDetails;
    }
    /**
     * Calls function with given declaration on the given object. Object group of the result is
inherited from the target object.
     */
    export type callFunctionOnParameters = {
      /**
       * Declaration of the function to call.
       */
      functionDeclaration: string;
      /**
       * Identifier of the object to call function on. Either objectId or executionContextId should
be specified.
       */
      objectId?: RemoteObjectId;
      /**
       * Call arguments. All call arguments must belong to the same JavaScript world as the target
object.
       */
      arguments?: CallArgument[];
      /**
       * In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state.
       */
      silent?: boolean;
      /**
       * Whether the result is expected to be a JSON object which should be sent by value.
Can be overriden by `serializationOptions`.
       */
      returnByValue?: boolean;
      /**
       * Whether preview should be generated for the result.
       */
      generatePreview?: boolean;
      /**
       * Whether execution should be treated as initiated by user in the UI.
       */
      userGesture?: boolean;
      /**
       * Whether execution should `await` for resulting value and return once awaited promise is
resolved.
       */
      awaitPromise?: boolean;
      /**
       * Specifies execution context which global object will be used to call function on. Either
executionContextId or objectId should be specified.
       */
      executionContextId?: ExecutionContextId;
      /**
       * Symbolic group name that can be used to release multiple objects. If objectGroup is not
specified and objectId is, objectGroup will be inherited from object.
       */
      objectGroup?: string;
      /**
       * Whether to throw an exception if side effect cannot be ruled out during evaluation.
       */
      throwOnSideEffect?: boolean;
      /**
       * An alternative way to specify the execution context to call function on.
Compared to contextId that may be reused across processes, this is guaranteed to be
system-unique, so it can be used to prevent accidental function call
in context different than intended (e.g. as a result of navigation across process
boundaries).
This is mutually exclusive with `executionContextId`.
       */
      uniqueContextId?: string;
      /**
       * Specifies the result serialization. If provided, overrides
`generatePreview` and `returnByValue`.
       */
      serializationOptions?: SerializationOptions;
    }
    export type callFunctionOnReturnValue = {
      /**
       * Call result.
       */
      result: RemoteObject;
      /**
       * Exception details.
       */
      exceptionDetails?: ExceptionDetails;
    }
    /**
     * Compiles expression.
     */
    export type compileScriptParameters = {
      /**
       * Expression to compile.
       */
      expression: string;
      /**
       * Source url to be set for the script.
       */
      sourceURL: string;
      /**
       * Specifies whether the compiled script should be persisted.
       */
      persistScript: boolean;
      /**
       * Specifies in which execution context to perform script run. If the parameter is omitted the
evaluation will be performed in the context of the inspected page.
       */
      executionContextId?: ExecutionContextId;
    }
    export type compileScriptReturnValue = {
      /**
       * Id of the script.
       */
      scriptId?: ScriptId;
      /**
       * Exception details.
       */
      exceptionDetails?: ExceptionDetails;
    }
    /**
     * Disables reporting of execution contexts creation.
     */
    export type disableParameters = {
    }
    export type disableReturnValue = {
    }
    /**
     * Discards collected exceptions and console API calls.
     */
    export type discardConsoleEntriesParameters = {
    }
    export type discardConsoleEntriesReturnValue = {
    }
    /**
     * Enables reporting of execution contexts creation by means of `executionContextCreated` event.
When the reporting gets enabled the event will be sent immediately for each existing execution
context.
     */
    export type enableParameters = {
    }
    export type enableReturnValue = {
    }
    /**
     * Evaluates expression on global object.
     */
    export type evaluateParameters = {
      /**
       * Expression to evaluate.
       */
      expression: string;
      /**
       * Symbolic group name that can be used to release multiple objects.
       */
      objectGroup?: string;
      /**
       * Determines whether Command Line API should be available during the evaluation.
       */
      includeCommandLineAPI?: boolean;
      /**
       * In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state.
       */
      silent?: boolean;
      /**
       * Specifies in which execution context to perform evaluation. If the parameter is omitted the
evaluation will be performed in the context of the inspected page.
This is mutually exclusive with `uniqueContextId`, which offers an
alternative way to identify the execution context that is more reliable
in a multi-process environment.
       */
      contextId?: ExecutionContextId;
      /**
       * Whether the result is expected to be a JSON object that should be sent by value.
       */
      returnByValue?: boolean;
      /**
       * Whether preview should be generated for the result.
       */
      generatePreview?: boolean;
      /**
       * Whether execution should be treated as initiated by user in the UI.
       */
      userGesture?: boolean;
      /**
       * Whether execution should `await` for resulting value and return once awaited promise is
resolved.
       */
      awaitPromise?: boolean;
      /**
       * Whether to throw an exception if side effect cannot be ruled out during evaluation.
This implies `disableBreaks` below.
       */
      throwOnSideEffect?: boolean;
      /**
       * Terminate execution after timing out (number of milliseconds).
       */
      timeout?: TimeDelta;
      /**
       * Disable breakpoints during execution.
       */
      disableBreaks?: boolean;
      /**
       * Setting this flag to true enables `let` re-declaration and top-level `await`.
Note that `let` variables can only be re-declared if they originate from
`replMode` themselves.
       */
      replMode?: boolean;
      /**
       * The Content Security Policy (CSP) for the target might block 'unsafe-eval'
which includes eval(), Function(), setTimeout() and setInterval()
when called with non-callable arguments. This flag bypasses CSP for this
evaluation and allows unsafe-eval. Defaults to true.
       */
      allowUnsafeEvalBlockedByCSP?: boolean;
      /**
       * An alternative way to specify the execution context to evaluate in.
Compared to contextId that may be reused across processes, this is guaranteed to be
system-unique, so it can be used to prevent accidental evaluation of the expression
in context different than intended (e.g. as a result of navigation across process
boundaries).
This is mutually exclusive with `contextId`.
       */
      uniqueContextId?: string;
      /**
       * Specifies the result serialization. If provided, overrides
`generatePreview` and `returnByValue`.
       */
      serializationOptions?: SerializationOptions;
    }
    export type evaluateReturnValue = {
      /**
       * Evaluation result.
       */
      result: RemoteObject;
      /**
       * Exception details.
       */
      exceptionDetails?: ExceptionDetails;
    }
    /**
     * Returns the isolate id.
     */
    export type getIsolateIdParameters = {
    }
    export type getIsolateIdReturnValue = {
      /**
       * The isolate id.
       */
      id: string;
    }
    /**
     * Returns the JavaScript heap usage.
It is the total usage of the corresponding isolate not scoped to a particular Runtime.
     */
    export type getHeapUsageParameters = {
    }
    export type getHeapUsageReturnValue = {
      /**
       * Used JavaScript heap size in bytes.
       */
      usedSize: number;
      /**
       * Allocated JavaScript heap size in bytes.
       */
      totalSize: number;
      /**
       * Used size in bytes in the embedder's garbage-collected heap.
       */
      embedderHeapUsedSize: number;
      /**
       * Size in bytes of backing storage for array buffers and external strings.
       */
      backingStorageSize: number;
    }
    /**
     * Returns properties of a given object. Object group of the result is inherited from the target
object.
     */
    export type getPropertiesParameters = {
      /**
       * Identifier of the object to return properties for.
       */
      objectId: RemoteObjectId;
      /**
       * If true, returns properties belonging only to the element itself, not to its prototype
chain.
       */
      ownProperties?: boolean;
      /**
       * If true, returns accessor properties (with getter/setter) only; internal properties are not
returned either.
       */
      accessorPropertiesOnly?: boolean;
      /**
       * Whether preview should be generated for the results.
       */
      generatePreview?: boolean;
      /**
       * If true, returns non-indexed properties only.
       */
      nonIndexedPropertiesOnly?: boolean;
    }
    export type getPropertiesReturnValue = {
      /**
       * Object properties.
       */
      result: PropertyDescriptor[];
      /**
       * Internal object properties (only of the element itself).
       */
      internalProperties?: InternalPropertyDescriptor[];
      /**
       * Object private properties.
       */
      privateProperties?: PrivatePropertyDescriptor[];
      /**
       * Exception details.
       */
      exceptionDetails?: ExceptionDetails;
    }
    /**
     * Returns all let, const and class variables from global scope.
     */
    export type globalLexicalScopeNamesParameters = {
      /**
       * Specifies in which execution context to lookup global scope variables.
       */
      executionContextId?: ExecutionContextId;
    }
    export type globalLexicalScopeNamesReturnValue = {
      names: string[];
    }
    export type queryObjectsParameters = {
      /**
       * Identifier of the prototype to return objects for.
       */
      prototypeObjectId: RemoteObjectId;
      /**
       * Symbolic group name that can be used to release the results.
       */
      objectGroup?: string;
    }
    export type queryObjectsReturnValue = {
      /**
       * Array with objects.
       */
      objects: RemoteObject;
    }
    /**
     * Releases remote object with given id.
     */
    export type releaseObjectParameters = {
      /**
       * Identifier of the object to release.
       */
      objectId: RemoteObjectId;
    }
    export type releaseObjectReturnValue = {
    }
    /**
     * Releases all remote objects that belong to a given group.
     */
    export type releaseObjectGroupParameters = {
      /**
       * Symbolic object group name.
       */
      objectGroup: string;
    }
    export type releaseObjectGroupReturnValue = {
    }
    /**
     * Tells inspected instance to run if it was waiting for debugger to attach.
     */
    export type runIfWaitingForDebuggerParameters = {
    }
    export type runIfWaitingForDebuggerReturnValue = {
    }
    /**
     * Runs script with given id in a given context.
     */
    export type runScriptParameters = {
      /**
       * Id of the script to run.
       */
      scriptId: ScriptId;
      /**
       * Specifies in which execution context to perform script run. If the parameter is omitted the
evaluation will be performed in the context of the inspected page.
       */
      executionContextId?: ExecutionContextId;
      /**
       * Symbolic group name that can be used to release multiple objects.
       */
      objectGroup?: string;
      /**
       * In silent mode exceptions thrown during evaluation are not reported and do not pause
execution. Overrides `setPauseOnException` state.
       */
      silent?: boolean;
      /**
       * Determines whether Command Line API should be available during the evaluation.
       */
      includeCommandLineAPI?: boolean;
      /**
       * Whether the result is expected to be a JSON object which should be sent by value.
       */
      returnByValue?: boolean;
      /**
       * Whether preview should be generated for the result.
       */
      generatePreview?: boolean;
      /**
       * Whether execution should `await` for resulting value and return once awaited promise is
resolved.
       */
      awaitPromise?: boolean;
    }
    export type runScriptReturnValue = {
      /**
       * Run result.
       */
      result: RemoteObject;
      /**
       * Exception details.
       */
      exceptionDetails?: ExceptionDetails;
    }
    /**
     * Enables or disables async call stacks tracking.
     */
    export type setAsyncCallStackDepthParameters = {
      /**
       * Maximum depth of async call stacks. Setting to `0` will effectively disable collecting async
call stacks (default).
       */
      maxDepth: number;
    }
    export type setAsyncCallStackDepthReturnValue = {
    }
    export type setCustomObjectFormatterEnabledParameters = {
      enabled: boolean;
    }
    export type setCustomObjectFormatterEnabledReturnValue = {
    }
    export type setMaxCallStackSizeToCaptureParameters = {
      size: number;
    }
    export type setMaxCallStackSizeToCaptureReturnValue = {
    }
    /**
     * Terminate current or next JavaScript execution.
Will cancel the termination when the outer-most script execution ends.
     */
    export type terminateExecutionParameters = {
    }
    export type terminateExecutionReturnValue = {
    }
    /**
     * If executionContextId is empty, adds binding with the given name on the
global objects of all inspected contexts, including those created later,
bindings survive reloads.
Binding function takes exactly one argument, this argument should be string,
in case of any other input, function throws an exception.
Each binding function call produces Runtime.bindingCalled notification.
     */
    export type addBindingParameters = {
      name: string;
      /**
       * If specified, the binding would only be exposed to the specified
execution context. If omitted and `executionContextName` is not set,
the binding is exposed to all execution contexts of the target.
This parameter is mutually exclusive with `executionContextName`.
Deprecated in favor of `executionContextName` due to an unclear use case
and bugs in implementation (crbug.com/1169639). `executionContextId` will be
removed in the future.
       */
      executionContextId?: ExecutionContextId;
      /**
       * If specified, the binding is exposed to the executionContext with
matching name, even for contexts created after the binding is added.
See also `ExecutionContext.name` and `worldName` parameter to
`Page.addScriptToEvaluateOnNewDocument`.
This parameter is mutually exclusive with `executionContextId`.
       */
      executionContextName?: string;
    }
    export type addBindingReturnValue = {
    }
    /**
     * This method does not remove binding function from global object but
unsubscribes current runtime agent from Runtime.bindingCalled notifications.
     */
    export type removeBindingParameters = {
      name: string;
    }
    export type removeBindingReturnValue = {
    }
    /**
     * This method tries to lookup and populate exception details for a
JavaScript Error object.
Note that the stackTrace portion of the resulting exceptionDetails will
only be populated if the Runtime domain was enabled at the time when the
Error was thrown.
     */
    export type getExceptionDetailsParameters = {
      /**
       * The error object for which to resolve the exception details.
       */
      errorObjectId: RemoteObjectId;
    }
    export type getExceptionDetailsReturnValue = {
      exceptionDetails?: ExceptionDetails;
    }
  }
  
  /**
   * This domain is deprecated.
   */
  export namespace Schema {
    /**
     * Description of the protocol domain.
     */
    export interface Domain {
      /**
       * Domain name.
       */
      name: string;
      /**
       * Domain version.
       */
      version: string;
    }
    
    
    /**
     * Returns supported domains.
     */
    export type getDomainsParameters = {
    }
    export type getDomainsReturnValue = {
      /**
       * List of supported domains.
       */
      domains: Domain[];
    }
  }
  
  export type Events = {
    "Accessibility.loadComplete": Accessibility.loadCompletePayload;
    "Accessibility.nodesUpdated": Accessibility.nodesUpdatedPayload;
    "Animation.animationCanceled": Animation.animationCanceledPayload;
    "Animation.animationCreated": Animation.animationCreatedPayload;
    "Animation.animationStarted": Animation.animationStartedPayload;
    "Animation.animationUpdated": Animation.animationUpdatedPayload;
    "Audits.issueAdded": Audits.issueAddedPayload;
    "Autofill.addressFormFilled": Autofill.addressFormFilledPayload;
    "BackgroundService.recordingStateChanged": BackgroundService.recordingStateChangedPayload;
    "BackgroundService.backgroundServiceEventReceived": BackgroundService.backgroundServiceEventReceivedPayload;
    "BluetoothEmulation.gattOperationReceived": BluetoothEmulation.gattOperationReceivedPayload;
    "BluetoothEmulation.characteristicOperationReceived": BluetoothEmulation.characteristicOperationReceivedPayload;
    "BluetoothEmulation.descriptorOperationReceived": BluetoothEmulation.descriptorOperationReceivedPayload;
    "Browser.downloadWillBegin": Browser.downloadWillBeginPayload;
    "Browser.downloadProgress": Browser.downloadProgressPayload;
    "CSS.fontsUpdated": CSS.fontsUpdatedPayload;
    "CSS.mediaQueryResultChanged": CSS.mediaQueryResultChangedPayload;
    "CSS.styleSheetAdded": CSS.styleSheetAddedPayload;
    "CSS.styleSheetChanged": CSS.styleSheetChangedPayload;
    "CSS.styleSheetRemoved": CSS.styleSheetRemovedPayload;
    "CSS.computedStyleUpdated": CSS.computedStyleUpdatedPayload;
    "Cast.sinksUpdated": Cast.sinksUpdatedPayload;
    "Cast.issueUpdated": Cast.issueUpdatedPayload;
    "DOM.attributeModified": DOM.attributeModifiedPayload;
    "DOM.adoptedStyleSheetsModified": DOM.adoptedStyleSheetsModifiedPayload;
    "DOM.attributeRemoved": DOM.attributeRemovedPayload;
    "DOM.characterDataModified": DOM.characterDataModifiedPayload;
    "DOM.childNodeCountUpdated": DOM.childNodeCountUpdatedPayload;
    "DOM.childNodeInserted": DOM.childNodeInsertedPayload;
    "DOM.childNodeRemoved": DOM.childNodeRemovedPayload;
    "DOM.distributedNodesUpdated": DOM.distributedNodesUpdatedPayload;
    "DOM.documentUpdated": DOM.documentUpdatedPayload;
    "DOM.inlineStyleInvalidated": DOM.inlineStyleInvalidatedPayload;
    "DOM.pseudoElementAdded": DOM.pseudoElementAddedPayload;
    "DOM.topLayerElementsUpdated": DOM.topLayerElementsUpdatedPayload;
    "DOM.scrollableFlagUpdated": DOM.scrollableFlagUpdatedPayload;
    "DOM.adRelatedStateUpdated": DOM.adRelatedStateUpdatedPayload;
    "DOM.affectedByStartingStylesFlagUpdated": DOM.affectedByStartingStylesFlagUpdatedPayload;
    "DOM.pseudoElementRemoved": DOM.pseudoElementRemovedPayload;
    "DOM.setChildNodes": DOM.setChildNodesPayload;
    "DOM.shadowRootPopped": DOM.shadowRootPoppedPayload;
    "DOM.shadowRootPushed": DOM.shadowRootPushedPayload;
    "DOMStorage.domStorageItemAdded": DOMStorage.domStorageItemAddedPayload;
    "DOMStorage.domStorageItemRemoved": DOMStorage.domStorageItemRemovedPayload;
    "DOMStorage.domStorageItemUpdated": DOMStorage.domStorageItemUpdatedPayload;
    "DOMStorage.domStorageItemsCleared": DOMStorage.domStorageItemsClearedPayload;
    "DeviceAccess.deviceRequestPrompted": DeviceAccess.deviceRequestPromptedPayload;
    "Emulation.virtualTimeBudgetExpired": Emulation.virtualTimeBudgetExpiredPayload;
    "Emulation.screenOrientationLockChanged": Emulation.screenOrientationLockChangedPayload;
    "FedCm.dialogShown": FedCm.dialogShownPayload;
    "FedCm.dialogClosed": FedCm.dialogClosedPayload;
    "Fetch.requestPaused": Fetch.requestPausedPayload;
    "Fetch.authRequired": Fetch.authRequiredPayload;
    "Input.dragIntercepted": Input.dragInterceptedPayload;
    "Inspector.detached": Inspector.detachedPayload;
    "Inspector.targetCrashed": Inspector.targetCrashedPayload;
    "Inspector.targetReloadedAfterCrash": Inspector.targetReloadedAfterCrashPayload;
    "Inspector.workerScriptLoaded": Inspector.workerScriptLoadedPayload;
    "LayerTree.layerPainted": LayerTree.layerPaintedPayload;
    "LayerTree.layerTreeDidChange": LayerTree.layerTreeDidChangePayload;
    "Log.entryAdded": Log.entryAddedPayload;
    "Media.playerPropertiesChanged": Media.playerPropertiesChangedPayload;
    "Media.playerEventsAdded": Media.playerEventsAddedPayload;
    "Media.playerMessagesLogged": Media.playerMessagesLoggedPayload;
    "Media.playerErrorsRaised": Media.playerErrorsRaisedPayload;
    "Media.playerCreated": Media.playerCreatedPayload;
    "Network.dataReceived": Network.dataReceivedPayload;
    "Network.eventSourceMessageReceived": Network.eventSourceMessageReceivedPayload;
    "Network.loadingFailed": Network.loadingFailedPayload;
    "Network.loadingFinished": Network.loadingFinishedPayload;
    "Network.requestIntercepted": Network.requestInterceptedPayload;
    "Network.requestServedFromCache": Network.requestServedFromCachePayload;
    "Network.requestWillBeSent": Network.requestWillBeSentPayload;
    "Network.resourceChangedPriority": Network.resourceChangedPriorityPayload;
    "Network.signedExchangeReceived": Network.signedExchangeReceivedPayload;
    "Network.responseReceived": Network.responseReceivedPayload;
    "Network.webSocketClosed": Network.webSocketClosedPayload;
    "Network.webSocketCreated": Network.webSocketCreatedPayload;
    "Network.webSocketFrameError": Network.webSocketFrameErrorPayload;
    "Network.webSocketFrameReceived": Network.webSocketFrameReceivedPayload;
    "Network.webSocketFrameSent": Network.webSocketFrameSentPayload;
    "Network.webSocketHandshakeResponseReceived": Network.webSocketHandshakeResponseReceivedPayload;
    "Network.webSocketWillSendHandshakeRequest": Network.webSocketWillSendHandshakeRequestPayload;
    "Network.webTransportCreated": Network.webTransportCreatedPayload;
    "Network.webTransportConnectionEstablished": Network.webTransportConnectionEstablishedPayload;
    "Network.webTransportClosed": Network.webTransportClosedPayload;
    "Network.directTCPSocketCreated": Network.directTCPSocketCreatedPayload;
    "Network.directTCPSocketOpened": Network.directTCPSocketOpenedPayload;
    "Network.directTCPSocketAborted": Network.directTCPSocketAbortedPayload;
    "Network.directTCPSocketClosed": Network.directTCPSocketClosedPayload;
    "Network.directTCPSocketChunkSent": Network.directTCPSocketChunkSentPayload;
    "Network.directTCPSocketChunkReceived": Network.directTCPSocketChunkReceivedPayload;
    "Network.directUDPSocketJoinedMulticastGroup": Network.directUDPSocketJoinedMulticastGroupPayload;
    "Network.directUDPSocketLeftMulticastGroup": Network.directUDPSocketLeftMulticastGroupPayload;
    "Network.directUDPSocketCreated": Network.directUDPSocketCreatedPayload;
    "Network.directUDPSocketOpened": Network.directUDPSocketOpenedPayload;
    "Network.directUDPSocketAborted": Network.directUDPSocketAbortedPayload;
    "Network.directUDPSocketClosed": Network.directUDPSocketClosedPayload;
    "Network.directUDPSocketChunkSent": Network.directUDPSocketChunkSentPayload;
    "Network.directUDPSocketChunkReceived": Network.directUDPSocketChunkReceivedPayload;
    "Network.requestWillBeSentExtraInfo": Network.requestWillBeSentExtraInfoPayload;
    "Network.responseReceivedExtraInfo": Network.responseReceivedExtraInfoPayload;
    "Network.responseReceivedEarlyHints": Network.responseReceivedEarlyHintsPayload;
    "Network.trustTokenOperationDone": Network.trustTokenOperationDonePayload;
    "Network.policyUpdated": Network.policyUpdatedPayload;
    "Network.reportingApiReportAdded": Network.reportingApiReportAddedPayload;
    "Network.reportingApiReportUpdated": Network.reportingApiReportUpdatedPayload;
    "Network.reportingApiEndpointsChangedForOrigin": Network.reportingApiEndpointsChangedForOriginPayload;
    "Network.deviceBoundSessionsAdded": Network.deviceBoundSessionsAddedPayload;
    "Network.deviceBoundSessionEventOccurred": Network.deviceBoundSessionEventOccurredPayload;
    "Overlay.inspectNodeRequested": Overlay.inspectNodeRequestedPayload;
    "Overlay.nodeHighlightRequested": Overlay.nodeHighlightRequestedPayload;
    "Overlay.screenshotRequested": Overlay.screenshotRequestedPayload;
    "Overlay.inspectPanelShowRequested": Overlay.inspectPanelShowRequestedPayload;
    "Overlay.inspectedElementWindowRestored": Overlay.inspectedElementWindowRestoredPayload;
    "Overlay.inspectModeCanceled": Overlay.inspectModeCanceledPayload;
    "Page.domContentEventFired": Page.domContentEventFiredPayload;
    "Page.fileChooserOpened": Page.fileChooserOpenedPayload;
    "Page.frameAttached": Page.frameAttachedPayload;
    "Page.frameClearedScheduledNavigation": Page.frameClearedScheduledNavigationPayload;
    "Page.frameDetached": Page.frameDetachedPayload;
    "Page.frameSubtreeWillBeDetached": Page.frameSubtreeWillBeDetachedPayload;
    "Page.frameNavigated": Page.frameNavigatedPayload;
    "Page.documentOpened": Page.documentOpenedPayload;
    "Page.frameResized": Page.frameResizedPayload;
    "Page.frameStartedNavigating": Page.frameStartedNavigatingPayload;
    "Page.frameRequestedNavigation": Page.frameRequestedNavigationPayload;
    "Page.frameScheduledNavigation": Page.frameScheduledNavigationPayload;
    "Page.frameStartedLoading": Page.frameStartedLoadingPayload;
    "Page.frameStoppedLoading": Page.frameStoppedLoadingPayload;
    "Page.downloadWillBegin": Page.downloadWillBeginPayload;
    "Page.downloadProgress": Page.downloadProgressPayload;
    "Page.interstitialHidden": Page.interstitialHiddenPayload;
    "Page.interstitialShown": Page.interstitialShownPayload;
    "Page.javascriptDialogClosed": Page.javascriptDialogClosedPayload;
    "Page.javascriptDialogOpening": Page.javascriptDialogOpeningPayload;
    "Page.lifecycleEvent": Page.lifecycleEventPayload;
    "Page.backForwardCacheNotUsed": Page.backForwardCacheNotUsedPayload;
    "Page.loadEventFired": Page.loadEventFiredPayload;
    "Page.navigatedWithinDocument": Page.navigatedWithinDocumentPayload;
    "Page.screencastFrame": Page.screencastFramePayload;
    "Page.screencastVisibilityChanged": Page.screencastVisibilityChangedPayload;
    "Page.windowOpen": Page.windowOpenPayload;
    "Page.compilationCacheProduced": Page.compilationCacheProducedPayload;
    "Performance.metrics": Performance.metricsPayload;
    "PerformanceTimeline.timelineEventAdded": PerformanceTimeline.timelineEventAddedPayload;
    "Preload.ruleSetUpdated": Preload.ruleSetUpdatedPayload;
    "Preload.ruleSetRemoved": Preload.ruleSetRemovedPayload;
    "Preload.preloadEnabledStateUpdated": Preload.preloadEnabledStateUpdatedPayload;
    "Preload.prefetchStatusUpdated": Preload.prefetchStatusUpdatedPayload;
    "Preload.prerenderStatusUpdated": Preload.prerenderStatusUpdatedPayload;
    "Preload.preloadingAttemptSourcesUpdated": Preload.preloadingAttemptSourcesUpdatedPayload;
    "Security.certificateError": Security.certificateErrorPayload;
    "Security.visibleSecurityStateChanged": Security.visibleSecurityStateChangedPayload;
    "Security.securityStateChanged": Security.securityStateChangedPayload;
    "ServiceWorker.workerErrorReported": ServiceWorker.workerErrorReportedPayload;
    "ServiceWorker.workerRegistrationUpdated": ServiceWorker.workerRegistrationUpdatedPayload;
    "ServiceWorker.workerVersionUpdated": ServiceWorker.workerVersionUpdatedPayload;
    "SmartCardEmulation.establishContextRequested": SmartCardEmulation.establishContextRequestedPayload;
    "SmartCardEmulation.releaseContextRequested": SmartCardEmulation.releaseContextRequestedPayload;
    "SmartCardEmulation.listReadersRequested": SmartCardEmulation.listReadersRequestedPayload;
    "SmartCardEmulation.getStatusChangeRequested": SmartCardEmulation.getStatusChangeRequestedPayload;
    "SmartCardEmulation.cancelRequested": SmartCardEmulation.cancelRequestedPayload;
    "SmartCardEmulation.connectRequested": SmartCardEmulation.connectRequestedPayload;
    "SmartCardEmulation.disconnectRequested": SmartCardEmulation.disconnectRequestedPayload;
    "SmartCardEmulation.transmitRequested": SmartCardEmulation.transmitRequestedPayload;
    "SmartCardEmulation.controlRequested": SmartCardEmulation.controlRequestedPayload;
    "SmartCardEmulation.getAttribRequested": SmartCardEmulation.getAttribRequestedPayload;
    "SmartCardEmulation.setAttribRequested": SmartCardEmulation.setAttribRequestedPayload;
    "SmartCardEmulation.statusRequested": SmartCardEmulation.statusRequestedPayload;
    "SmartCardEmulation.beginTransactionRequested": SmartCardEmulation.beginTransactionRequestedPayload;
    "SmartCardEmulation.endTransactionRequested": SmartCardEmulation.endTransactionRequestedPayload;
    "Storage.cacheStorageContentUpdated": Storage.cacheStorageContentUpdatedPayload;
    "Storage.cacheStorageListUpdated": Storage.cacheStorageListUpdatedPayload;
    "Storage.indexedDBContentUpdated": Storage.indexedDBContentUpdatedPayload;
    "Storage.indexedDBListUpdated": Storage.indexedDBListUpdatedPayload;
    "Storage.interestGroupAccessed": Storage.interestGroupAccessedPayload;
    "Storage.interestGroupAuctionEventOccurred": Storage.interestGroupAuctionEventOccurredPayload;
    "Storage.interestGroupAuctionNetworkRequestCreated": Storage.interestGroupAuctionNetworkRequestCreatedPayload;
    "Storage.sharedStorageAccessed": Storage.sharedStorageAccessedPayload;
    "Storage.sharedStorageWorkletOperationExecutionFinished": Storage.sharedStorageWorkletOperationExecutionFinishedPayload;
    "Storage.storageBucketCreatedOrUpdated": Storage.storageBucketCreatedOrUpdatedPayload;
    "Storage.storageBucketDeleted": Storage.storageBucketDeletedPayload;
    "Target.attachedToTarget": Target.attachedToTargetPayload;
    "Target.detachedFromTarget": Target.detachedFromTargetPayload;
    "Target.receivedMessageFromTarget": Target.receivedMessageFromTargetPayload;
    "Target.targetCreated": Target.targetCreatedPayload;
    "Target.targetDestroyed": Target.targetDestroyedPayload;
    "Target.targetCrashed": Target.targetCrashedPayload;
    "Target.targetInfoChanged": Target.targetInfoChangedPayload;
    "Tethering.accepted": Tethering.acceptedPayload;
    "Tracing.bufferUsage": Tracing.bufferUsagePayload;
    "Tracing.dataCollected": Tracing.dataCollectedPayload;
    "Tracing.tracingComplete": Tracing.tracingCompletePayload;
    "WebAudio.contextCreated": WebAudio.contextCreatedPayload;
    "WebAudio.contextWillBeDestroyed": WebAudio.contextWillBeDestroyedPayload;
    "WebAudio.contextChanged": WebAudio.contextChangedPayload;
    "WebAudio.audioListenerCreated": WebAudio.audioListenerCreatedPayload;
    "WebAudio.audioListenerWillBeDestroyed": WebAudio.audioListenerWillBeDestroyedPayload;
    "WebAudio.audioNodeCreated": WebAudio.audioNodeCreatedPayload;
    "WebAudio.audioNodeWillBeDestroyed": WebAudio.audioNodeWillBeDestroyedPayload;
    "WebAudio.audioParamCreated": WebAudio.audioParamCreatedPayload;
    "WebAudio.audioParamWillBeDestroyed": WebAudio.audioParamWillBeDestroyedPayload;
    "WebAudio.nodesConnected": WebAudio.nodesConnectedPayload;
    "WebAudio.nodesDisconnected": WebAudio.nodesDisconnectedPayload;
    "WebAudio.nodeParamConnected": WebAudio.nodeParamConnectedPayload;
    "WebAudio.nodeParamDisconnected": WebAudio.nodeParamDisconnectedPayload;
    "WebAuthn.credentialAdded": WebAuthn.credentialAddedPayload;
    "WebAuthn.credentialDeleted": WebAuthn.credentialDeletedPayload;
    "WebAuthn.credentialUpdated": WebAuthn.credentialUpdatedPayload;
    "WebAuthn.credentialAsserted": WebAuthn.credentialAssertedPayload;
    "WebMCP.toolsAdded": WebMCP.toolsAddedPayload;
    "WebMCP.toolsRemoved": WebMCP.toolsRemovedPayload;
    "WebMCP.toolInvoked": WebMCP.toolInvokedPayload;
    "WebMCP.toolResponded": WebMCP.toolRespondedPayload;
    "Console.messageAdded": Console.messageAddedPayload;
    "Debugger.breakpointResolved": Debugger.breakpointResolvedPayload;
    "Debugger.paused": Debugger.pausedPayload;
    "Debugger.resumed": Debugger.resumedPayload;
    "Debugger.scriptFailedToParse": Debugger.scriptFailedToParsePayload;
    "Debugger.scriptParsed": Debugger.scriptParsedPayload;
    "HeapProfiler.addHeapSnapshotChunk": HeapProfiler.addHeapSnapshotChunkPayload;
    "HeapProfiler.heapStatsUpdate": HeapProfiler.heapStatsUpdatePayload;
    "HeapProfiler.lastSeenObjectId": HeapProfiler.lastSeenObjectIdPayload;
    "HeapProfiler.reportHeapSnapshotProgress": HeapProfiler.reportHeapSnapshotProgressPayload;
    "HeapProfiler.resetProfiles": HeapProfiler.resetProfilesPayload;
    "Profiler.consoleProfileFinished": Profiler.consoleProfileFinishedPayload;
    "Profiler.consoleProfileStarted": Profiler.consoleProfileStartedPayload;
    "Profiler.preciseCoverageDeltaUpdate": Profiler.preciseCoverageDeltaUpdatePayload;
    "Runtime.bindingCalled": Runtime.bindingCalledPayload;
    "Runtime.consoleAPICalled": Runtime.consoleAPICalledPayload;
    "Runtime.exceptionRevoked": Runtime.exceptionRevokedPayload;
    "Runtime.exceptionThrown": Runtime.exceptionThrownPayload;
    "Runtime.executionContextCreated": Runtime.executionContextCreatedPayload;
    "Runtime.executionContextDestroyed": Runtime.executionContextDestroyedPayload;
    "Runtime.executionContextsCleared": Runtime.executionContextsClearedPayload;
    "Runtime.inspectRequested": Runtime.inspectRequestedPayload;
  }
  export type EventMap = {
    ["Accessibility.loadComplete"]: [Accessibility.loadCompletePayload];
    ["Accessibility.nodesUpdated"]: [Accessibility.nodesUpdatedPayload];
    ["Animation.animationCanceled"]: [Animation.animationCanceledPayload];
    ["Animation.animationCreated"]: [Animation.animationCreatedPayload];
    ["Animation.animationStarted"]: [Animation.animationStartedPayload];
    ["Animation.animationUpdated"]: [Animation.animationUpdatedPayload];
    ["Audits.issueAdded"]: [Audits.issueAddedPayload];
    ["Autofill.addressFormFilled"]: [Autofill.addressFormFilledPayload];
    ["BackgroundService.recordingStateChanged"]: [BackgroundService.recordingStateChangedPayload];
    ["BackgroundService.backgroundServiceEventReceived"]: [BackgroundService.backgroundServiceEventReceivedPayload];
    ["BluetoothEmulation.gattOperationReceived"]: [BluetoothEmulation.gattOperationReceivedPayload];
    ["BluetoothEmulation.characteristicOperationReceived"]: [BluetoothEmulation.characteristicOperationReceivedPayload];
    ["BluetoothEmulation.descriptorOperationReceived"]: [BluetoothEmulation.descriptorOperationReceivedPayload];
    ["Browser.downloadWillBegin"]: [Browser.downloadWillBeginPayload];
    ["Browser.downloadProgress"]: [Browser.downloadProgressPayload];
    ["CSS.fontsUpdated"]: [CSS.fontsUpdatedPayload];
    ["CSS.mediaQueryResultChanged"]: [CSS.mediaQueryResultChangedPayload];
    ["CSS.styleSheetAdded"]: [CSS.styleSheetAddedPayload];
    ["CSS.styleSheetChanged"]: [CSS.styleSheetChangedPayload];
    ["CSS.styleSheetRemoved"]: [CSS.styleSheetRemovedPayload];
    ["CSS.computedStyleUpdated"]: [CSS.computedStyleUpdatedPayload];
    ["Cast.sinksUpdated"]: [Cast.sinksUpdatedPayload];
    ["Cast.issueUpdated"]: [Cast.issueUpdatedPayload];
    ["DOM.attributeModified"]: [DOM.attributeModifiedPayload];
    ["DOM.adoptedStyleSheetsModified"]: [DOM.adoptedStyleSheetsModifiedPayload];
    ["DOM.attributeRemoved"]: [DOM.attributeRemovedPayload];
    ["DOM.characterDataModified"]: [DOM.characterDataModifiedPayload];
    ["DOM.childNodeCountUpdated"]: [DOM.childNodeCountUpdatedPayload];
    ["DOM.childNodeInserted"]: [DOM.childNodeInsertedPayload];
    ["DOM.childNodeRemoved"]: [DOM.childNodeRemovedPayload];
    ["DOM.distributedNodesUpdated"]: [DOM.distributedNodesUpdatedPayload];
    ["DOM.documentUpdated"]: [DOM.documentUpdatedPayload];
    ["DOM.inlineStyleInvalidated"]: [DOM.inlineStyleInvalidatedPayload];
    ["DOM.pseudoElementAdded"]: [DOM.pseudoElementAddedPayload];
    ["DOM.topLayerElementsUpdated"]: [DOM.topLayerElementsUpdatedPayload];
    ["DOM.scrollableFlagUpdated"]: [DOM.scrollableFlagUpdatedPayload];
    ["DOM.adRelatedStateUpdated"]: [DOM.adRelatedStateUpdatedPayload];
    ["DOM.affectedByStartingStylesFlagUpdated"]: [DOM.affectedByStartingStylesFlagUpdatedPayload];
    ["DOM.pseudoElementRemoved"]: [DOM.pseudoElementRemovedPayload];
    ["DOM.setChildNodes"]: [DOM.setChildNodesPayload];
    ["DOM.shadowRootPopped"]: [DOM.shadowRootPoppedPayload];
    ["DOM.shadowRootPushed"]: [DOM.shadowRootPushedPayload];
    ["DOMStorage.domStorageItemAdded"]: [DOMStorage.domStorageItemAddedPayload];
    ["DOMStorage.domStorageItemRemoved"]: [DOMStorage.domStorageItemRemovedPayload];
    ["DOMStorage.domStorageItemUpdated"]: [DOMStorage.domStorageItemUpdatedPayload];
    ["DOMStorage.domStorageItemsCleared"]: [DOMStorage.domStorageItemsClearedPayload];
    ["DeviceAccess.deviceRequestPrompted"]: [DeviceAccess.deviceRequestPromptedPayload];
    ["Emulation.virtualTimeBudgetExpired"]: [Emulation.virtualTimeBudgetExpiredPayload];
    ["Emulation.screenOrientationLockChanged"]: [Emulation.screenOrientationLockChangedPayload];
    ["FedCm.dialogShown"]: [FedCm.dialogShownPayload];
    ["FedCm.dialogClosed"]: [FedCm.dialogClosedPayload];
    ["Fetch.requestPaused"]: [Fetch.requestPausedPayload];
    ["Fetch.authRequired"]: [Fetch.authRequiredPayload];
    ["Input.dragIntercepted"]: [Input.dragInterceptedPayload];
    ["Inspector.detached"]: [Inspector.detachedPayload];
    ["Inspector.targetCrashed"]: [Inspector.targetCrashedPayload];
    ["Inspector.targetReloadedAfterCrash"]: [Inspector.targetReloadedAfterCrashPayload];
    ["Inspector.workerScriptLoaded"]: [Inspector.workerScriptLoadedPayload];
    ["LayerTree.layerPainted"]: [LayerTree.layerPaintedPayload];
    ["LayerTree.layerTreeDidChange"]: [LayerTree.layerTreeDidChangePayload];
    ["Log.entryAdded"]: [Log.entryAddedPayload];
    ["Media.playerPropertiesChanged"]: [Media.playerPropertiesChangedPayload];
    ["Media.playerEventsAdded"]: [Media.playerEventsAddedPayload];
    ["Media.playerMessagesLogged"]: [Media.playerMessagesLoggedPayload];
    ["Media.playerErrorsRaised"]: [Media.playerErrorsRaisedPayload];
    ["Media.playerCreated"]: [Media.playerCreatedPayload];
    ["Network.dataReceived"]: [Network.dataReceivedPayload];
    ["Network.eventSourceMessageReceived"]: [Network.eventSourceMessageReceivedPayload];
    ["Network.loadingFailed"]: [Network.loadingFailedPayload];
    ["Network.loadingFinished"]: [Network.loadingFinishedPayload];
    ["Network.requestIntercepted"]: [Network.requestInterceptedPayload];
    ["Network.requestServedFromCache"]: [Network.requestServedFromCachePayload];
    ["Network.requestWillBeSent"]: [Network.requestWillBeSentPayload];
    ["Network.resourceChangedPriority"]: [Network.resourceChangedPriorityPayload];
    ["Network.signedExchangeReceived"]: [Network.signedExchangeReceivedPayload];
    ["Network.responseReceived"]: [Network.responseReceivedPayload];
    ["Network.webSocketClosed"]: [Network.webSocketClosedPayload];
    ["Network.webSocketCreated"]: [Network.webSocketCreatedPayload];
    ["Network.webSocketFrameError"]: [Network.webSocketFrameErrorPayload];
    ["Network.webSocketFrameReceived"]: [Network.webSocketFrameReceivedPayload];
    ["Network.webSocketFrameSent"]: [Network.webSocketFrameSentPayload];
    ["Network.webSocketHandshakeResponseReceived"]: [Network.webSocketHandshakeResponseReceivedPayload];
    ["Network.webSocketWillSendHandshakeRequest"]: [Network.webSocketWillSendHandshakeRequestPayload];
    ["Network.webTransportCreated"]: [Network.webTransportCreatedPayload];
    ["Network.webTransportConnectionEstablished"]: [Network.webTransportConnectionEstablishedPayload];
    ["Network.webTransportClosed"]: [Network.webTransportClosedPayload];
    ["Network.directTCPSocketCreated"]: [Network.directTCPSocketCreatedPayload];
    ["Network.directTCPSocketOpened"]: [Network.directTCPSocketOpenedPayload];
    ["Network.directTCPSocketAborted"]: [Network.directTCPSocketAbortedPayload];
    ["Network.directTCPSocketClosed"]: [Network.directTCPSocketClosedPayload];
    ["Network.directTCPSocketChunkSent"]: [Network.directTCPSocketChunkSentPayload];
    ["Network.directTCPSocketChunkReceived"]: [Network.directTCPSocketChunkReceivedPayload];
    ["Network.directUDPSocketJoinedMulticastGroup"]: [Network.directUDPSocketJoinedMulticastGroupPayload];
    ["Network.directUDPSocketLeftMulticastGroup"]: [Network.directUDPSocketLeftMulticastGroupPayload];
    ["Network.directUDPSocketCreated"]: [Network.directUDPSocketCreatedPayload];
    ["Network.directUDPSocketOpened"]: [Network.directUDPSocketOpenedPayload];
    ["Network.directUDPSocketAborted"]: [Network.directUDPSocketAbortedPayload];
    ["Network.directUDPSocketClosed"]: [Network.directUDPSocketClosedPayload];
    ["Network.directUDPSocketChunkSent"]: [Network.directUDPSocketChunkSentPayload];
    ["Network.directUDPSocketChunkReceived"]: [Network.directUDPSocketChunkReceivedPayload];
    ["Network.requestWillBeSentExtraInfo"]: [Network.requestWillBeSentExtraInfoPayload];
    ["Network.responseReceivedExtraInfo"]: [Network.responseReceivedExtraInfoPayload];
    ["Network.responseReceivedEarlyHints"]: [Network.responseReceivedEarlyHintsPayload];
    ["Network.trustTokenOperationDone"]: [Network.trustTokenOperationDonePayload];
    ["Network.policyUpdated"]: [Network.policyUpdatedPayload];
    ["Network.reportingApiReportAdded"]: [Network.reportingApiReportAddedPayload];
    ["Network.reportingApiReportUpdated"]: [Network.reportingApiReportUpdatedPayload];
    ["Network.reportingApiEndpointsChangedForOrigin"]: [Network.reportingApiEndpointsChangedForOriginPayload];
    ["Network.deviceBoundSessionsAdded"]: [Network.deviceBoundSessionsAddedPayload];
    ["Network.deviceBoundSessionEventOccurred"]: [Network.deviceBoundSessionEventOccurredPayload];
    ["Overlay.inspectNodeRequested"]: [Overlay.inspectNodeRequestedPayload];
    ["Overlay.nodeHighlightRequested"]: [Overlay.nodeHighlightRequestedPayload];
    ["Overlay.screenshotRequested"]: [Overlay.screenshotRequestedPayload];
    ["Overlay.inspectPanelShowRequested"]: [Overlay.inspectPanelShowRequestedPayload];
    ["Overlay.inspectedElementWindowRestored"]: [Overlay.inspectedElementWindowRestoredPayload];
    ["Overlay.inspectModeCanceled"]: [Overlay.inspectModeCanceledPayload];
    ["Page.domContentEventFired"]: [Page.domContentEventFiredPayload];
    ["Page.fileChooserOpened"]: [Page.fileChooserOpenedPayload];
    ["Page.frameAttached"]: [Page.frameAttachedPayload];
    ["Page.frameClearedScheduledNavigation"]: [Page.frameClearedScheduledNavigationPayload];
    ["Page.frameDetached"]: [Page.frameDetachedPayload];
    ["Page.frameSubtreeWillBeDetached"]: [Page.frameSubtreeWillBeDetachedPayload];
    ["Page.frameNavigated"]: [Page.frameNavigatedPayload];
    ["Page.documentOpened"]: [Page.documentOpenedPayload];
    ["Page.frameResized"]: [Page.frameResizedPayload];
    ["Page.frameStartedNavigating"]: [Page.frameStartedNavigatingPayload];
    ["Page.frameRequestedNavigation"]: [Page.frameRequestedNavigationPayload];
    ["Page.frameScheduledNavigation"]: [Page.frameScheduledNavigationPayload];
    ["Page.frameStartedLoading"]: [Page.frameStartedLoadingPayload];
    ["Page.frameStoppedLoading"]: [Page.frameStoppedLoadingPayload];
    ["Page.downloadWillBegin"]: [Page.downloadWillBeginPayload];
    ["Page.downloadProgress"]: [Page.downloadProgressPayload];
    ["Page.interstitialHidden"]: [Page.interstitialHiddenPayload];
    ["Page.interstitialShown"]: [Page.interstitialShownPayload];
    ["Page.javascriptDialogClosed"]: [Page.javascriptDialogClosedPayload];
    ["Page.javascriptDialogOpening"]: [Page.javascriptDialogOpeningPayload];
    ["Page.lifecycleEvent"]: [Page.lifecycleEventPayload];
    ["Page.backForwardCacheNotUsed"]: [Page.backForwardCacheNotUsedPayload];
    ["Page.loadEventFired"]: [Page.loadEventFiredPayload];
    ["Page.navigatedWithinDocument"]: [Page.navigatedWithinDocumentPayload];
    ["Page.screencastFrame"]: [Page.screencastFramePayload];
    ["Page.screencastVisibilityChanged"]: [Page.screencastVisibilityChangedPayload];
    ["Page.windowOpen"]: [Page.windowOpenPayload];
    ["Page.compilationCacheProduced"]: [Page.compilationCacheProducedPayload];
    ["Performance.metrics"]: [Performance.metricsPayload];
    ["PerformanceTimeline.timelineEventAdded"]: [PerformanceTimeline.timelineEventAddedPayload];
    ["Preload.ruleSetUpdated"]: [Preload.ruleSetUpdatedPayload];
    ["Preload.ruleSetRemoved"]: [Preload.ruleSetRemovedPayload];
    ["Preload.preloadEnabledStateUpdated"]: [Preload.preloadEnabledStateUpdatedPayload];
    ["Preload.prefetchStatusUpdated"]: [Preload.prefetchStatusUpdatedPayload];
    ["Preload.prerenderStatusUpdated"]: [Preload.prerenderStatusUpdatedPayload];
    ["Preload.preloadingAttemptSourcesUpdated"]: [Preload.preloadingAttemptSourcesUpdatedPayload];
    ["Security.certificateError"]: [Security.certificateErrorPayload];
    ["Security.visibleSecurityStateChanged"]: [Security.visibleSecurityStateChangedPayload];
    ["Security.securityStateChanged"]: [Security.securityStateChangedPayload];
    ["ServiceWorker.workerErrorReported"]: [ServiceWorker.workerErrorReportedPayload];
    ["ServiceWorker.workerRegistrationUpdated"]: [ServiceWorker.workerRegistrationUpdatedPayload];
    ["ServiceWorker.workerVersionUpdated"]: [ServiceWorker.workerVersionUpdatedPayload];
    ["SmartCardEmulation.establishContextRequested"]: [SmartCardEmulation.establishContextRequestedPayload];
    ["SmartCardEmulation.releaseContextRequested"]: [SmartCardEmulation.releaseContextRequestedPayload];
    ["SmartCardEmulation.listReadersRequested"]: [SmartCardEmulation.listReadersRequestedPayload];
    ["SmartCardEmulation.getStatusChangeRequested"]: [SmartCardEmulation.getStatusChangeRequestedPayload];
    ["SmartCardEmulation.cancelRequested"]: [SmartCardEmulation.cancelRequestedPayload];
    ["SmartCardEmulation.connectRequested"]: [SmartCardEmulation.connectRequestedPayload];
    ["SmartCardEmulation.disconnectRequested"]: [SmartCardEmulation.disconnectRequestedPayload];
    ["SmartCardEmulation.transmitRequested"]: [SmartCardEmulation.transmitRequestedPayload];
    ["SmartCardEmulation.controlRequested"]: [SmartCardEmulation.controlRequestedPayload];
    ["SmartCardEmulation.getAttribRequested"]: [SmartCardEmulation.getAttribRequestedPayload];
    ["SmartCardEmulation.setAttribRequested"]: [SmartCardEmulation.setAttribRequestedPayload];
    ["SmartCardEmulation.statusRequested"]: [SmartCardEmulation.statusRequestedPayload];
    ["SmartCardEmulation.beginTransactionRequested"]: [SmartCardEmulation.beginTransactionRequestedPayload];
    ["SmartCardEmulation.endTransactionRequested"]: [SmartCardEmulation.endTransactionRequestedPayload];
    ["Storage.cacheStorageContentUpdated"]: [Storage.cacheStorageContentUpdatedPayload];
    ["Storage.cacheStorageListUpdated"]: [Storage.cacheStorageListUpdatedPayload];
    ["Storage.indexedDBContentUpdated"]: [Storage.indexedDBContentUpdatedPayload];
    ["Storage.indexedDBListUpdated"]: [Storage.indexedDBListUpdatedPayload];
    ["Storage.interestGroupAccessed"]: [Storage.interestGroupAccessedPayload];
    ["Storage.interestGroupAuctionEventOccurred"]: [Storage.interestGroupAuctionEventOccurredPayload];
    ["Storage.interestGroupAuctionNetworkRequestCreated"]: [Storage.interestGroupAuctionNetworkRequestCreatedPayload];
    ["Storage.sharedStorageAccessed"]: [Storage.sharedStorageAccessedPayload];
    ["Storage.sharedStorageWorkletOperationExecutionFinished"]: [Storage.sharedStorageWorkletOperationExecutionFinishedPayload];
    ["Storage.storageBucketCreatedOrUpdated"]: [Storage.storageBucketCreatedOrUpdatedPayload];
    ["Storage.storageBucketDeleted"]: [Storage.storageBucketDeletedPayload];
    ["Target.attachedToTarget"]: [Target.attachedToTargetPayload];
    ["Target.detachedFromTarget"]: [Target.detachedFromTargetPayload];
    ["Target.receivedMessageFromTarget"]: [Target.receivedMessageFromTargetPayload];
    ["Target.targetCreated"]: [Target.targetCreatedPayload];
    ["Target.targetDestroyed"]: [Target.targetDestroyedPayload];
    ["Target.targetCrashed"]: [Target.targetCrashedPayload];
    ["Target.targetInfoChanged"]: [Target.targetInfoChangedPayload];
    ["Tethering.accepted"]: [Tethering.acceptedPayload];
    ["Tracing.bufferUsage"]: [Tracing.bufferUsagePayload];
    ["Tracing.dataCollected"]: [Tracing.dataCollectedPayload];
    ["Tracing.tracingComplete"]: [Tracing.tracingCompletePayload];
    ["WebAudio.contextCreated"]: [WebAudio.contextCreatedPayload];
    ["WebAudio.contextWillBeDestroyed"]: [WebAudio.contextWillBeDestroyedPayload];
    ["WebAudio.contextChanged"]: [WebAudio.contextChangedPayload];
    ["WebAudio.audioListenerCreated"]: [WebAudio.audioListenerCreatedPayload];
    ["WebAudio.audioListenerWillBeDestroyed"]: [WebAudio.audioListenerWillBeDestroyedPayload];
    ["WebAudio.audioNodeCreated"]: [WebAudio.audioNodeCreatedPayload];
    ["WebAudio.audioNodeWillBeDestroyed"]: [WebAudio.audioNodeWillBeDestroyedPayload];
    ["WebAudio.audioParamCreated"]: [WebAudio.audioParamCreatedPayload];
    ["WebAudio.audioParamWillBeDestroyed"]: [WebAudio.audioParamWillBeDestroyedPayload];
    ["WebAudio.nodesConnected"]: [WebAudio.nodesConnectedPayload];
    ["WebAudio.nodesDisconnected"]: [WebAudio.nodesDisconnectedPayload];
    ["WebAudio.nodeParamConnected"]: [WebAudio.nodeParamConnectedPayload];
    ["WebAudio.nodeParamDisconnected"]: [WebAudio.nodeParamDisconnectedPayload];
    ["WebAuthn.credentialAdded"]: [WebAuthn.credentialAddedPayload];
    ["WebAuthn.credentialDeleted"]: [WebAuthn.credentialDeletedPayload];
    ["WebAuthn.credentialUpdated"]: [WebAuthn.credentialUpdatedPayload];
    ["WebAuthn.credentialAsserted"]: [WebAuthn.credentialAssertedPayload];
    ["WebMCP.toolsAdded"]: [WebMCP.toolsAddedPayload];
    ["WebMCP.toolsRemoved"]: [WebMCP.toolsRemovedPayload];
    ["WebMCP.toolInvoked"]: [WebMCP.toolInvokedPayload];
    ["WebMCP.toolResponded"]: [WebMCP.toolRespondedPayload];
    ["Console.messageAdded"]: [Console.messageAddedPayload];
    ["Debugger.breakpointResolved"]: [Debugger.breakpointResolvedPayload];
    ["Debugger.paused"]: [Debugger.pausedPayload];
    ["Debugger.resumed"]: [Debugger.resumedPayload];
    ["Debugger.scriptFailedToParse"]: [Debugger.scriptFailedToParsePayload];
    ["Debugger.scriptParsed"]: [Debugger.scriptParsedPayload];
    ["HeapProfiler.addHeapSnapshotChunk"]: [HeapProfiler.addHeapSnapshotChunkPayload];
    ["HeapProfiler.heapStatsUpdate"]: [HeapProfiler.heapStatsUpdatePayload];
    ["HeapProfiler.lastSeenObjectId"]: [HeapProfiler.lastSeenObjectIdPayload];
    ["HeapProfiler.reportHeapSnapshotProgress"]: [HeapProfiler.reportHeapSnapshotProgressPayload];
    ["HeapProfiler.resetProfiles"]: [HeapProfiler.resetProfilesPayload];
    ["Profiler.consoleProfileFinished"]: [Profiler.consoleProfileFinishedPayload];
    ["Profiler.consoleProfileStarted"]: [Profiler.consoleProfileStartedPayload];
    ["Profiler.preciseCoverageDeltaUpdate"]: [Profiler.preciseCoverageDeltaUpdatePayload];
    ["Runtime.bindingCalled"]: [Runtime.bindingCalledPayload];
    ["Runtime.consoleAPICalled"]: [Runtime.consoleAPICalledPayload];
    ["Runtime.exceptionRevoked"]: [Runtime.exceptionRevokedPayload];
    ["Runtime.exceptionThrown"]: [Runtime.exceptionThrownPayload];
    ["Runtime.executionContextCreated"]: [Runtime.executionContextCreatedPayload];
    ["Runtime.executionContextDestroyed"]: [Runtime.executionContextDestroyedPayload];
    ["Runtime.executionContextsCleared"]: [Runtime.executionContextsClearedPayload];
    ["Runtime.inspectRequested"]: [Runtime.inspectRequestedPayload];
  }
  export interface CommandParameters {
    "Accessibility.disable": Accessibility.disableParameters;
    "Accessibility.enable": Accessibility.enableParameters;
    "Accessibility.getPartialAXTree": Accessibility.getPartialAXTreeParameters;
    "Accessibility.getFullAXTree": Accessibility.getFullAXTreeParameters;
    "Accessibility.getRootAXNode": Accessibility.getRootAXNodeParameters;
    "Accessibility.getAXNodeAndAncestors": Accessibility.getAXNodeAndAncestorsParameters;
    "Accessibility.getChildAXNodes": Accessibility.getChildAXNodesParameters;
    "Accessibility.queryAXTree": Accessibility.queryAXTreeParameters;
    "Animation.disable": Animation.disableParameters;
    "Animation.enable": Animation.enableParameters;
    "Animation.getCurrentTime": Animation.getCurrentTimeParameters;
    "Animation.getPlaybackRate": Animation.getPlaybackRateParameters;
    "Animation.releaseAnimations": Animation.releaseAnimationsParameters;
    "Animation.resolveAnimation": Animation.resolveAnimationParameters;
    "Animation.seekAnimations": Animation.seekAnimationsParameters;
    "Animation.setPaused": Animation.setPausedParameters;
    "Animation.setPlaybackRate": Animation.setPlaybackRateParameters;
    "Animation.setTiming": Animation.setTimingParameters;
    "Audits.getEncodedResponse": Audits.getEncodedResponseParameters;
    "Audits.disable": Audits.disableParameters;
    "Audits.enable": Audits.enableParameters;
    "Audits.checkFormsIssues": Audits.checkFormsIssuesParameters;
    "Autofill.trigger": Autofill.triggerParameters;
    "Autofill.setAddresses": Autofill.setAddressesParameters;
    "Autofill.disable": Autofill.disableParameters;
    "Autofill.enable": Autofill.enableParameters;
    "BackgroundService.startObserving": BackgroundService.startObservingParameters;
    "BackgroundService.stopObserving": BackgroundService.stopObservingParameters;
    "BackgroundService.setRecording": BackgroundService.setRecordingParameters;
    "BackgroundService.clearEvents": BackgroundService.clearEventsParameters;
    "BluetoothEmulation.enable": BluetoothEmulation.enableParameters;
    "BluetoothEmulation.setSimulatedCentralState": BluetoothEmulation.setSimulatedCentralStateParameters;
    "BluetoothEmulation.disable": BluetoothEmulation.disableParameters;
    "BluetoothEmulation.simulatePreconnectedPeripheral": BluetoothEmulation.simulatePreconnectedPeripheralParameters;
    "BluetoothEmulation.simulateAdvertisement": BluetoothEmulation.simulateAdvertisementParameters;
    "BluetoothEmulation.simulateGATTOperationResponse": BluetoothEmulation.simulateGATTOperationResponseParameters;
    "BluetoothEmulation.simulateCharacteristicOperationResponse": BluetoothEmulation.simulateCharacteristicOperationResponseParameters;
    "BluetoothEmulation.simulateDescriptorOperationResponse": BluetoothEmulation.simulateDescriptorOperationResponseParameters;
    "BluetoothEmulation.addService": BluetoothEmulation.addServiceParameters;
    "BluetoothEmulation.removeService": BluetoothEmulation.removeServiceParameters;
    "BluetoothEmulation.addCharacteristic": BluetoothEmulation.addCharacteristicParameters;
    "BluetoothEmulation.removeCharacteristic": BluetoothEmulation.removeCharacteristicParameters;
    "BluetoothEmulation.addDescriptor": BluetoothEmulation.addDescriptorParameters;
    "BluetoothEmulation.removeDescriptor": BluetoothEmulation.removeDescriptorParameters;
    "BluetoothEmulation.simulateGATTDisconnection": BluetoothEmulation.simulateGATTDisconnectionParameters;
    "Browser.setPermission": Browser.setPermissionParameters;
    "Browser.grantPermissions": Browser.grantPermissionsParameters;
    "Browser.resetPermissions": Browser.resetPermissionsParameters;
    "Browser.setDownloadBehavior": Browser.setDownloadBehaviorParameters;
    "Browser.cancelDownload": Browser.cancelDownloadParameters;
    "Browser.close": Browser.closeParameters;
    "Browser.crash": Browser.crashParameters;
    "Browser.crashGpuProcess": Browser.crashGpuProcessParameters;
    "Browser.getVersion": Browser.getVersionParameters;
    "Browser.getBrowserCommandLine": Browser.getBrowserCommandLineParameters;
    "Browser.getHistograms": Browser.getHistogramsParameters;
    "Browser.getHistogram": Browser.getHistogramParameters;
    "Browser.getWindowBounds": Browser.getWindowBoundsParameters;
    "Browser.getWindowForTarget": Browser.getWindowForTargetParameters;
    "Browser.setWindowBounds": Browser.setWindowBoundsParameters;
    "Browser.setContentsSize": Browser.setContentsSizeParameters;
    "Browser.setDockTile": Browser.setDockTileParameters;
    "Browser.executeBrowserCommand": Browser.executeBrowserCommandParameters;
    "Browser.addPrivacySandboxEnrollmentOverride": Browser.addPrivacySandboxEnrollmentOverrideParameters;
    "Browser.addPrivacySandboxCoordinatorKeyConfig": Browser.addPrivacySandboxCoordinatorKeyConfigParameters;
    "CSS.addRule": CSS.addRuleParameters;
    "CSS.collectClassNames": CSS.collectClassNamesParameters;
    "CSS.createStyleSheet": CSS.createStyleSheetParameters;
    "CSS.disable": CSS.disableParameters;
    "CSS.enable": CSS.enableParameters;
    "CSS.forcePseudoState": CSS.forcePseudoStateParameters;
    "CSS.forceStartingStyle": CSS.forceStartingStyleParameters;
    "CSS.getBackgroundColors": CSS.getBackgroundColorsParameters;
    "CSS.getComputedStyleForNode": CSS.getComputedStyleForNodeParameters;
    "CSS.resolveValues": CSS.resolveValuesParameters;
    "CSS.getLonghandProperties": CSS.getLonghandPropertiesParameters;
    "CSS.getInlineStylesForNode": CSS.getInlineStylesForNodeParameters;
    "CSS.getAnimatedStylesForNode": CSS.getAnimatedStylesForNodeParameters;
    "CSS.getMatchedStylesForNode": CSS.getMatchedStylesForNodeParameters;
    "CSS.getEnvironmentVariables": CSS.getEnvironmentVariablesParameters;
    "CSS.getMediaQueries": CSS.getMediaQueriesParameters;
    "CSS.getPlatformFontsForNode": CSS.getPlatformFontsForNodeParameters;
    "CSS.getStyleSheetText": CSS.getStyleSheetTextParameters;
    "CSS.getLayersForNode": CSS.getLayersForNodeParameters;
    "CSS.getLocationForSelector": CSS.getLocationForSelectorParameters;
    "CSS.trackComputedStyleUpdatesForNode": CSS.trackComputedStyleUpdatesForNodeParameters;
    "CSS.trackComputedStyleUpdates": CSS.trackComputedStyleUpdatesParameters;
    "CSS.takeComputedStyleUpdates": CSS.takeComputedStyleUpdatesParameters;
    "CSS.setEffectivePropertyValueForNode": CSS.setEffectivePropertyValueForNodeParameters;
    "CSS.setPropertyRulePropertyName": CSS.setPropertyRulePropertyNameParameters;
    "CSS.setKeyframeKey": CSS.setKeyframeKeyParameters;
    "CSS.setMediaText": CSS.setMediaTextParameters;
    "CSS.setContainerQueryText": CSS.setContainerQueryTextParameters;
    "CSS.setSupportsText": CSS.setSupportsTextParameters;
    "CSS.setNavigationText": CSS.setNavigationTextParameters;
    "CSS.setScopeText": CSS.setScopeTextParameters;
    "CSS.setRuleSelector": CSS.setRuleSelectorParameters;
    "CSS.setStyleSheetText": CSS.setStyleSheetTextParameters;
    "CSS.setStyleTexts": CSS.setStyleTextsParameters;
    "CSS.startRuleUsageTracking": CSS.startRuleUsageTrackingParameters;
    "CSS.stopRuleUsageTracking": CSS.stopRuleUsageTrackingParameters;
    "CSS.takeCoverageDelta": CSS.takeCoverageDeltaParameters;
    "CSS.setLocalFontsEnabled": CSS.setLocalFontsEnabledParameters;
    "CacheStorage.deleteCache": CacheStorage.deleteCacheParameters;
    "CacheStorage.deleteEntry": CacheStorage.deleteEntryParameters;
    "CacheStorage.requestCacheNames": CacheStorage.requestCacheNamesParameters;
    "CacheStorage.requestCachedResponse": CacheStorage.requestCachedResponseParameters;
    "CacheStorage.requestEntries": CacheStorage.requestEntriesParameters;
    "Cast.enable": Cast.enableParameters;
    "Cast.disable": Cast.disableParameters;
    "Cast.setSinkToUse": Cast.setSinkToUseParameters;
    "Cast.startDesktopMirroring": Cast.startDesktopMirroringParameters;
    "Cast.startTabMirroring": Cast.startTabMirroringParameters;
    "Cast.stopCasting": Cast.stopCastingParameters;
    "CrashReportContext.getEntries": CrashReportContext.getEntriesParameters;
    "DOM.collectClassNamesFromSubtree": DOM.collectClassNamesFromSubtreeParameters;
    "DOM.copyTo": DOM.copyToParameters;
    "DOM.describeNode": DOM.describeNodeParameters;
    "DOM.scrollIntoViewIfNeeded": DOM.scrollIntoViewIfNeededParameters;
    "DOM.disable": DOM.disableParameters;
    "DOM.discardSearchResults": DOM.discardSearchResultsParameters;
    "DOM.enable": DOM.enableParameters;
    "DOM.focus": DOM.focusParameters;
    "DOM.getAttributes": DOM.getAttributesParameters;
    "DOM.getBoxModel": DOM.getBoxModelParameters;
    "DOM.getContentQuads": DOM.getContentQuadsParameters;
    "DOM.getDocument": DOM.getDocumentParameters;
    "DOM.getFlattenedDocument": DOM.getFlattenedDocumentParameters;
    "DOM.getNodesForSubtreeByStyle": DOM.getNodesForSubtreeByStyleParameters;
    "DOM.getNodeForLocation": DOM.getNodeForLocationParameters;
    "DOM.getOuterHTML": DOM.getOuterHTMLParameters;
    "DOM.getRelayoutBoundary": DOM.getRelayoutBoundaryParameters;
    "DOM.getSearchResults": DOM.getSearchResultsParameters;
    "DOM.hideHighlight": DOM.hideHighlightParameters;
    "DOM.highlightNode": DOM.highlightNodeParameters;
    "DOM.highlightRect": DOM.highlightRectParameters;
    "DOM.markUndoableState": DOM.markUndoableStateParameters;
    "DOM.moveTo": DOM.moveToParameters;
    "DOM.performSearch": DOM.performSearchParameters;
    "DOM.pushNodeByPathToFrontend": DOM.pushNodeByPathToFrontendParameters;
    "DOM.pushNodesByBackendIdsToFrontend": DOM.pushNodesByBackendIdsToFrontendParameters;
    "DOM.querySelector": DOM.querySelectorParameters;
    "DOM.querySelectorAll": DOM.querySelectorAllParameters;
    "DOM.getTopLayerElements": DOM.getTopLayerElementsParameters;
    "DOM.getElementByRelation": DOM.getElementByRelationParameters;
    "DOM.redo": DOM.redoParameters;
    "DOM.removeAttribute": DOM.removeAttributeParameters;
    "DOM.removeNode": DOM.removeNodeParameters;
    "DOM.requestChildNodes": DOM.requestChildNodesParameters;
    "DOM.requestNode": DOM.requestNodeParameters;
    "DOM.resolveNode": DOM.resolveNodeParameters;
    "DOM.setAttributeValue": DOM.setAttributeValueParameters;
    "DOM.setAttributesAsText": DOM.setAttributesAsTextParameters;
    "DOM.setFileInputFiles": DOM.setFileInputFilesParameters;
    "DOM.setNodeStackTracesEnabled": DOM.setNodeStackTracesEnabledParameters;
    "DOM.getNodeStackTraces": DOM.getNodeStackTracesParameters;
    "DOM.getFileInfo": DOM.getFileInfoParameters;
    "DOM.getDetachedDomNodes": DOM.getDetachedDomNodesParameters;
    "DOM.setInspectedNode": DOM.setInspectedNodeParameters;
    "DOM.setNodeName": DOM.setNodeNameParameters;
    "DOM.setNodeValue": DOM.setNodeValueParameters;
    "DOM.setOuterHTML": DOM.setOuterHTMLParameters;
    "DOM.undo": DOM.undoParameters;
    "DOM.getFrameOwner": DOM.getFrameOwnerParameters;
    "DOM.getContainerForNode": DOM.getContainerForNodeParameters;
    "DOM.getQueryingDescendantsForContainer": DOM.getQueryingDescendantsForContainerParameters;
    "DOM.getAnchorElement": DOM.getAnchorElementParameters;
    "DOM.forceShowPopover": DOM.forceShowPopoverParameters;
    "DOMDebugger.getEventListeners": DOMDebugger.getEventListenersParameters;
    "DOMDebugger.removeDOMBreakpoint": DOMDebugger.removeDOMBreakpointParameters;
    "DOMDebugger.removeEventListenerBreakpoint": DOMDebugger.removeEventListenerBreakpointParameters;
    "DOMDebugger.removeInstrumentationBreakpoint": DOMDebugger.removeInstrumentationBreakpointParameters;
    "DOMDebugger.removeXHRBreakpoint": DOMDebugger.removeXHRBreakpointParameters;
    "DOMDebugger.setBreakOnCSPViolation": DOMDebugger.setBreakOnCSPViolationParameters;
    "DOMDebugger.setDOMBreakpoint": DOMDebugger.setDOMBreakpointParameters;
    "DOMDebugger.setEventListenerBreakpoint": DOMDebugger.setEventListenerBreakpointParameters;
    "DOMDebugger.setInstrumentationBreakpoint": DOMDebugger.setInstrumentationBreakpointParameters;
    "DOMDebugger.setXHRBreakpoint": DOMDebugger.setXHRBreakpointParameters;
    "DOMSnapshot.disable": DOMSnapshot.disableParameters;
    "DOMSnapshot.enable": DOMSnapshot.enableParameters;
    "DOMSnapshot.getSnapshot": DOMSnapshot.getSnapshotParameters;
    "DOMSnapshot.captureSnapshot": DOMSnapshot.captureSnapshotParameters;
    "DOMStorage.clear": DOMStorage.clearParameters;
    "DOMStorage.disable": DOMStorage.disableParameters;
    "DOMStorage.enable": DOMStorage.enableParameters;
    "DOMStorage.getDOMStorageItems": DOMStorage.getDOMStorageItemsParameters;
    "DOMStorage.removeDOMStorageItem": DOMStorage.removeDOMStorageItemParameters;
    "DOMStorage.setDOMStorageItem": DOMStorage.setDOMStorageItemParameters;
    "DeviceAccess.enable": DeviceAccess.enableParameters;
    "DeviceAccess.disable": DeviceAccess.disableParameters;
    "DeviceAccess.selectPrompt": DeviceAccess.selectPromptParameters;
    "DeviceAccess.cancelPrompt": DeviceAccess.cancelPromptParameters;
    "DeviceOrientation.clearDeviceOrientationOverride": DeviceOrientation.clearDeviceOrientationOverrideParameters;
    "DeviceOrientation.setDeviceOrientationOverride": DeviceOrientation.setDeviceOrientationOverrideParameters;
    "Emulation.canEmulate": Emulation.canEmulateParameters;
    "Emulation.clearDeviceMetricsOverride": Emulation.clearDeviceMetricsOverrideParameters;
    "Emulation.clearGeolocationOverride": Emulation.clearGeolocationOverrideParameters;
    "Emulation.resetPageScaleFactor": Emulation.resetPageScaleFactorParameters;
    "Emulation.setFocusEmulationEnabled": Emulation.setFocusEmulationEnabledParameters;
    "Emulation.setAutoDarkModeOverride": Emulation.setAutoDarkModeOverrideParameters;
    "Emulation.setCPUThrottlingRate": Emulation.setCPUThrottlingRateParameters;
    "Emulation.setDefaultBackgroundColorOverride": Emulation.setDefaultBackgroundColorOverrideParameters;
    "Emulation.setSafeAreaInsetsOverride": Emulation.setSafeAreaInsetsOverrideParameters;
    "Emulation.setDeviceMetricsOverride": Emulation.setDeviceMetricsOverrideParameters;
    "Emulation.setDevicePostureOverride": Emulation.setDevicePostureOverrideParameters;
    "Emulation.clearDevicePostureOverride": Emulation.clearDevicePostureOverrideParameters;
    "Emulation.setDisplayFeaturesOverride": Emulation.setDisplayFeaturesOverrideParameters;
    "Emulation.clearDisplayFeaturesOverride": Emulation.clearDisplayFeaturesOverrideParameters;
    "Emulation.setScrollbarsHidden": Emulation.setScrollbarsHiddenParameters;
    "Emulation.setDocumentCookieDisabled": Emulation.setDocumentCookieDisabledParameters;
    "Emulation.setEmitTouchEventsForMouse": Emulation.setEmitTouchEventsForMouseParameters;
    "Emulation.setEmulatedMedia": Emulation.setEmulatedMediaParameters;
    "Emulation.setEmulatedVisionDeficiency": Emulation.setEmulatedVisionDeficiencyParameters;
    "Emulation.setEmulatedOSTextScale": Emulation.setEmulatedOSTextScaleParameters;
    "Emulation.setGeolocationOverride": Emulation.setGeolocationOverrideParameters;
    "Emulation.getOverriddenSensorInformation": Emulation.getOverriddenSensorInformationParameters;
    "Emulation.setSensorOverrideEnabled": Emulation.setSensorOverrideEnabledParameters;
    "Emulation.setSensorOverrideReadings": Emulation.setSensorOverrideReadingsParameters;
    "Emulation.setPressureSourceOverrideEnabled": Emulation.setPressureSourceOverrideEnabledParameters;
    "Emulation.setPressureStateOverride": Emulation.setPressureStateOverrideParameters;
    "Emulation.setPressureDataOverride": Emulation.setPressureDataOverrideParameters;
    "Emulation.setIdleOverride": Emulation.setIdleOverrideParameters;
    "Emulation.clearIdleOverride": Emulation.clearIdleOverrideParameters;
    "Emulation.setNavigatorOverrides": Emulation.setNavigatorOverridesParameters;
    "Emulation.setPageScaleFactor": Emulation.setPageScaleFactorParameters;
    "Emulation.setScriptExecutionDisabled": Emulation.setScriptExecutionDisabledParameters;
    "Emulation.setTouchEmulationEnabled": Emulation.setTouchEmulationEnabledParameters;
    "Emulation.setVirtualTimePolicy": Emulation.setVirtualTimePolicyParameters;
    "Emulation.setLocaleOverride": Emulation.setLocaleOverrideParameters;
    "Emulation.setTimezoneOverride": Emulation.setTimezoneOverrideParameters;
    "Emulation.setVisibleSize": Emulation.setVisibleSizeParameters;
    "Emulation.setDisabledImageTypes": Emulation.setDisabledImageTypesParameters;
    "Emulation.setDataSaverOverride": Emulation.setDataSaverOverrideParameters;
    "Emulation.setHardwareConcurrencyOverride": Emulation.setHardwareConcurrencyOverrideParameters;
    "Emulation.setUserAgentOverride": Emulation.setUserAgentOverrideParameters;
    "Emulation.setAutomationOverride": Emulation.setAutomationOverrideParameters;
    "Emulation.setSmallViewportHeightDifferenceOverride": Emulation.setSmallViewportHeightDifferenceOverrideParameters;
    "Emulation.getScreenInfos": Emulation.getScreenInfosParameters;
    "Emulation.addScreen": Emulation.addScreenParameters;
    "Emulation.updateScreen": Emulation.updateScreenParameters;
    "Emulation.removeScreen": Emulation.removeScreenParameters;
    "Emulation.setPrimaryScreen": Emulation.setPrimaryScreenParameters;
    "EventBreakpoints.setInstrumentationBreakpoint": EventBreakpoints.setInstrumentationBreakpointParameters;
    "EventBreakpoints.removeInstrumentationBreakpoint": EventBreakpoints.removeInstrumentationBreakpointParameters;
    "EventBreakpoints.disable": EventBreakpoints.disableParameters;
    "Extensions.triggerAction": Extensions.triggerActionParameters;
    "Extensions.loadUnpacked": Extensions.loadUnpackedParameters;
    "Extensions.getExtensions": Extensions.getExtensionsParameters;
    "Extensions.uninstall": Extensions.uninstallParameters;
    "Extensions.getStorageItems": Extensions.getStorageItemsParameters;
    "Extensions.removeStorageItems": Extensions.removeStorageItemsParameters;
    "Extensions.clearStorageItems": Extensions.clearStorageItemsParameters;
    "Extensions.setStorageItems": Extensions.setStorageItemsParameters;
    "FedCm.enable": FedCm.enableParameters;
    "FedCm.disable": FedCm.disableParameters;
    "FedCm.selectAccount": FedCm.selectAccountParameters;
    "FedCm.clickDialogButton": FedCm.clickDialogButtonParameters;
    "FedCm.openUrl": FedCm.openUrlParameters;
    "FedCm.dismissDialog": FedCm.dismissDialogParameters;
    "FedCm.resetCooldown": FedCm.resetCooldownParameters;
    "Fetch.disable": Fetch.disableParameters;
    "Fetch.enable": Fetch.enableParameters;
    "Fetch.failRequest": Fetch.failRequestParameters;
    "Fetch.fulfillRequest": Fetch.fulfillRequestParameters;
    "Fetch.continueRequest": Fetch.continueRequestParameters;
    "Fetch.continueWithAuth": Fetch.continueWithAuthParameters;
    "Fetch.continueResponse": Fetch.continueResponseParameters;
    "Fetch.getResponseBody": Fetch.getResponseBodyParameters;
    "Fetch.takeResponseBodyAsStream": Fetch.takeResponseBodyAsStreamParameters;
    "FileSystem.getDirectory": FileSystem.getDirectoryParameters;
    "HeadlessExperimental.beginFrame": HeadlessExperimental.beginFrameParameters;
    "HeadlessExperimental.disable": HeadlessExperimental.disableParameters;
    "HeadlessExperimental.enable": HeadlessExperimental.enableParameters;
    "IO.close": IO.closeParameters;
    "IO.read": IO.readParameters;
    "IO.resolveBlob": IO.resolveBlobParameters;
    "IndexedDB.clearObjectStore": IndexedDB.clearObjectStoreParameters;
    "IndexedDB.deleteDatabase": IndexedDB.deleteDatabaseParameters;
    "IndexedDB.deleteObjectStoreEntries": IndexedDB.deleteObjectStoreEntriesParameters;
    "IndexedDB.disable": IndexedDB.disableParameters;
    "IndexedDB.enable": IndexedDB.enableParameters;
    "IndexedDB.requestData": IndexedDB.requestDataParameters;
    "IndexedDB.getMetadata": IndexedDB.getMetadataParameters;
    "IndexedDB.requestDatabase": IndexedDB.requestDatabaseParameters;
    "IndexedDB.requestDatabaseNames": IndexedDB.requestDatabaseNamesParameters;
    "Input.dispatchDragEvent": Input.dispatchDragEventParameters;
    "Input.dispatchKeyEvent": Input.dispatchKeyEventParameters;
    "Input.insertText": Input.insertTextParameters;
    "Input.imeSetComposition": Input.imeSetCompositionParameters;
    "Input.dispatchMouseEvent": Input.dispatchMouseEventParameters;
    "Input.dispatchTouchEvent": Input.dispatchTouchEventParameters;
    "Input.cancelDragging": Input.cancelDraggingParameters;
    "Input.emulateTouchFromMouseEvent": Input.emulateTouchFromMouseEventParameters;
    "Input.setIgnoreInputEvents": Input.setIgnoreInputEventsParameters;
    "Input.setInterceptDrags": Input.setInterceptDragsParameters;
    "Input.synthesizePinchGesture": Input.synthesizePinchGestureParameters;
    "Input.synthesizeScrollGesture": Input.synthesizeScrollGestureParameters;
    "Input.synthesizeTapGesture": Input.synthesizeTapGestureParameters;
    "Inspector.disable": Inspector.disableParameters;
    "Inspector.enable": Inspector.enableParameters;
    "LayerTree.compositingReasons": LayerTree.compositingReasonsParameters;
    "LayerTree.disable": LayerTree.disableParameters;
    "LayerTree.enable": LayerTree.enableParameters;
    "LayerTree.loadSnapshot": LayerTree.loadSnapshotParameters;
    "LayerTree.makeSnapshot": LayerTree.makeSnapshotParameters;
    "LayerTree.profileSnapshot": LayerTree.profileSnapshotParameters;
    "LayerTree.releaseSnapshot": LayerTree.releaseSnapshotParameters;
    "LayerTree.replaySnapshot": LayerTree.replaySnapshotParameters;
    "LayerTree.snapshotCommandLog": LayerTree.snapshotCommandLogParameters;
    "Log.clear": Log.clearParameters;
    "Log.disable": Log.disableParameters;
    "Log.enable": Log.enableParameters;
    "Log.startViolationsReport": Log.startViolationsReportParameters;
    "Log.stopViolationsReport": Log.stopViolationsReportParameters;
    "Media.enable": Media.enableParameters;
    "Media.disable": Media.disableParameters;
    "Memory.getDOMCounters": Memory.getDOMCountersParameters;
    "Memory.getDOMCountersForLeakDetection": Memory.getDOMCountersForLeakDetectionParameters;
    "Memory.prepareForLeakDetection": Memory.prepareForLeakDetectionParameters;
    "Memory.forciblyPurgeJavaScriptMemory": Memory.forciblyPurgeJavaScriptMemoryParameters;
    "Memory.setPressureNotificationsSuppressed": Memory.setPressureNotificationsSuppressedParameters;
    "Memory.simulatePressureNotification": Memory.simulatePressureNotificationParameters;
    "Memory.startSampling": Memory.startSamplingParameters;
    "Memory.stopSampling": Memory.stopSamplingParameters;
    "Memory.getAllTimeSamplingProfile": Memory.getAllTimeSamplingProfileParameters;
    "Memory.getBrowserSamplingProfile": Memory.getBrowserSamplingProfileParameters;
    "Memory.getSamplingProfile": Memory.getSamplingProfileParameters;
    "Network.setAcceptedEncodings": Network.setAcceptedEncodingsParameters;
    "Network.clearAcceptedEncodingsOverride": Network.clearAcceptedEncodingsOverrideParameters;
    "Network.canClearBrowserCache": Network.canClearBrowserCacheParameters;
    "Network.canClearBrowserCookies": Network.canClearBrowserCookiesParameters;
    "Network.canEmulateNetworkConditions": Network.canEmulateNetworkConditionsParameters;
    "Network.clearBrowserCache": Network.clearBrowserCacheParameters;
    "Network.clearBrowserCookies": Network.clearBrowserCookiesParameters;
    "Network.continueInterceptedRequest": Network.continueInterceptedRequestParameters;
    "Network.deleteCookies": Network.deleteCookiesParameters;
    "Network.disable": Network.disableParameters;
    "Network.emulateNetworkConditions": Network.emulateNetworkConditionsParameters;
    "Network.emulateNetworkConditionsByRule": Network.emulateNetworkConditionsByRuleParameters;
    "Network.overrideNetworkState": Network.overrideNetworkStateParameters;
    "Network.enable": Network.enableParameters;
    "Network.configureDurableMessages": Network.configureDurableMessagesParameters;
    "Network.getAllCookies": Network.getAllCookiesParameters;
    "Network.getCertificate": Network.getCertificateParameters;
    "Network.getCookies": Network.getCookiesParameters;
    "Network.getResponseBody": Network.getResponseBodyParameters;
    "Network.getRequestPostData": Network.getRequestPostDataParameters;
    "Network.getResponseBodyForInterception": Network.getResponseBodyForInterceptionParameters;
    "Network.takeResponseBodyForInterceptionAsStream": Network.takeResponseBodyForInterceptionAsStreamParameters;
    "Network.replayXHR": Network.replayXHRParameters;
    "Network.searchInResponseBody": Network.searchInResponseBodyParameters;
    "Network.setBlockedURLs": Network.setBlockedURLsParameters;
    "Network.setBypassServiceWorker": Network.setBypassServiceWorkerParameters;
    "Network.setCacheDisabled": Network.setCacheDisabledParameters;
    "Network.setCookie": Network.setCookieParameters;
    "Network.setCookies": Network.setCookiesParameters;
    "Network.setExtraHTTPHeaders": Network.setExtraHTTPHeadersParameters;
    "Network.setAttachDebugStack": Network.setAttachDebugStackParameters;
    "Network.setRequestInterception": Network.setRequestInterceptionParameters;
    "Network.setUserAgentOverride": Network.setUserAgentOverrideParameters;
    "Network.streamResourceContent": Network.streamResourceContentParameters;
    "Network.getSecurityIsolationStatus": Network.getSecurityIsolationStatusParameters;
    "Network.enableReportingApi": Network.enableReportingApiParameters;
    "Network.enableDeviceBoundSessions": Network.enableDeviceBoundSessionsParameters;
    "Network.fetchSchemefulSite": Network.fetchSchemefulSiteParameters;
    "Network.loadNetworkResource": Network.loadNetworkResourceParameters;
    "Network.setCookieControls": Network.setCookieControlsParameters;
    "Overlay.disable": Overlay.disableParameters;
    "Overlay.enable": Overlay.enableParameters;
    "Overlay.getHighlightObjectForTest": Overlay.getHighlightObjectForTestParameters;
    "Overlay.getGridHighlightObjectsForTest": Overlay.getGridHighlightObjectsForTestParameters;
    "Overlay.getSourceOrderHighlightObjectForTest": Overlay.getSourceOrderHighlightObjectForTestParameters;
    "Overlay.hideHighlight": Overlay.hideHighlightParameters;
    "Overlay.highlightFrame": Overlay.highlightFrameParameters;
    "Overlay.highlightNode": Overlay.highlightNodeParameters;
    "Overlay.highlightQuad": Overlay.highlightQuadParameters;
    "Overlay.highlightRect": Overlay.highlightRectParameters;
    "Overlay.highlightSourceOrder": Overlay.highlightSourceOrderParameters;
    "Overlay.setInspectMode": Overlay.setInspectModeParameters;
    "Overlay.setShowAdHighlights": Overlay.setShowAdHighlightsParameters;
    "Overlay.setPausedInDebuggerMessage": Overlay.setPausedInDebuggerMessageParameters;
    "Overlay.setShowDebugBorders": Overlay.setShowDebugBordersParameters;
    "Overlay.setShowFPSCounter": Overlay.setShowFPSCounterParameters;
    "Overlay.setShowGridOverlays": Overlay.setShowGridOverlaysParameters;
    "Overlay.setShowFlexOverlays": Overlay.setShowFlexOverlaysParameters;
    "Overlay.setShowScrollSnapOverlays": Overlay.setShowScrollSnapOverlaysParameters;
    "Overlay.setShowContainerQueryOverlays": Overlay.setShowContainerQueryOverlaysParameters;
    "Overlay.setShowInspectedElementAnchor": Overlay.setShowInspectedElementAnchorParameters;
    "Overlay.setShowPaintRects": Overlay.setShowPaintRectsParameters;
    "Overlay.setShowLayoutShiftRegions": Overlay.setShowLayoutShiftRegionsParameters;
    "Overlay.setShowScrollBottleneckRects": Overlay.setShowScrollBottleneckRectsParameters;
    "Overlay.setShowHitTestBorders": Overlay.setShowHitTestBordersParameters;
    "Overlay.setShowWebVitals": Overlay.setShowWebVitalsParameters;
    "Overlay.setShowViewportSizeOnResize": Overlay.setShowViewportSizeOnResizeParameters;
    "Overlay.setShowHinge": Overlay.setShowHingeParameters;
    "Overlay.setShowIsolatedElements": Overlay.setShowIsolatedElementsParameters;
    "Overlay.setShowWindowControlsOverlay": Overlay.setShowWindowControlsOverlayParameters;
    "PWA.getOsAppState": PWA.getOsAppStateParameters;
    "PWA.install": PWA.installParameters;
    "PWA.uninstall": PWA.uninstallParameters;
    "PWA.launch": PWA.launchParameters;
    "PWA.launchFilesInApp": PWA.launchFilesInAppParameters;
    "PWA.openCurrentPageInApp": PWA.openCurrentPageInAppParameters;
    "PWA.changeAppUserSettings": PWA.changeAppUserSettingsParameters;
    "Page.addScriptToEvaluateOnLoad": Page.addScriptToEvaluateOnLoadParameters;
    "Page.addScriptToEvaluateOnNewDocument": Page.addScriptToEvaluateOnNewDocumentParameters;
    "Page.bringToFront": Page.bringToFrontParameters;
    "Page.captureScreenshot": Page.captureScreenshotParameters;
    "Page.captureSnapshot": Page.captureSnapshotParameters;
    "Page.clearDeviceMetricsOverride": Page.clearDeviceMetricsOverrideParameters;
    "Page.clearDeviceOrientationOverride": Page.clearDeviceOrientationOverrideParameters;
    "Page.clearGeolocationOverride": Page.clearGeolocationOverrideParameters;
    "Page.createIsolatedWorld": Page.createIsolatedWorldParameters;
    "Page.deleteCookie": Page.deleteCookieParameters;
    "Page.disable": Page.disableParameters;
    "Page.enable": Page.enableParameters;
    "Page.getAppManifest": Page.getAppManifestParameters;
    "Page.getInstallabilityErrors": Page.getInstallabilityErrorsParameters;
    "Page.getManifestIcons": Page.getManifestIconsParameters;
    "Page.getAppId": Page.getAppIdParameters;
    "Page.getAdScriptAncestry": Page.getAdScriptAncestryParameters;
    "Page.getFrameTree": Page.getFrameTreeParameters;
    "Page.getLayoutMetrics": Page.getLayoutMetricsParameters;
    "Page.getNavigationHistory": Page.getNavigationHistoryParameters;
    "Page.resetNavigationHistory": Page.resetNavigationHistoryParameters;
    "Page.getResourceContent": Page.getResourceContentParameters;
    "Page.getResourceTree": Page.getResourceTreeParameters;
    "Page.handleJavaScriptDialog": Page.handleJavaScriptDialogParameters;
    "Page.navigate": Page.navigateParameters;
    "Page.navigateToHistoryEntry": Page.navigateToHistoryEntryParameters;
    "Page.printToPDF": Page.printToPDFParameters;
    "Page.reload": Page.reloadParameters;
    "Page.removeScriptToEvaluateOnLoad": Page.removeScriptToEvaluateOnLoadParameters;
    "Page.removeScriptToEvaluateOnNewDocument": Page.removeScriptToEvaluateOnNewDocumentParameters;
    "Page.screencastFrameAck": Page.screencastFrameAckParameters;
    "Page.searchInResource": Page.searchInResourceParameters;
    "Page.setAdBlockingEnabled": Page.setAdBlockingEnabledParameters;
    "Page.setBypassCSP": Page.setBypassCSPParameters;
    "Page.getPermissionsPolicyState": Page.getPermissionsPolicyStateParameters;
    "Page.getOriginTrials": Page.getOriginTrialsParameters;
    "Page.setDeviceMetricsOverride": Page.setDeviceMetricsOverrideParameters;
    "Page.setDeviceOrientationOverride": Page.setDeviceOrientationOverrideParameters;
    "Page.setFontFamilies": Page.setFontFamiliesParameters;
    "Page.setFontSizes": Page.setFontSizesParameters;
    "Page.setDocumentContent": Page.setDocumentContentParameters;
    "Page.setDownloadBehavior": Page.setDownloadBehaviorParameters;
    "Page.setGeolocationOverride": Page.setGeolocationOverrideParameters;
    "Page.setLifecycleEventsEnabled": Page.setLifecycleEventsEnabledParameters;
    "Page.setTouchEmulationEnabled": Page.setTouchEmulationEnabledParameters;
    "Page.startScreencast": Page.startScreencastParameters;
    "Page.stopLoading": Page.stopLoadingParameters;
    "Page.crash": Page.crashParameters;
    "Page.close": Page.closeParameters;
    "Page.setWebLifecycleState": Page.setWebLifecycleStateParameters;
    "Page.stopScreencast": Page.stopScreencastParameters;
    "Page.produceCompilationCache": Page.produceCompilationCacheParameters;
    "Page.addCompilationCache": Page.addCompilationCacheParameters;
    "Page.clearCompilationCache": Page.clearCompilationCacheParameters;
    "Page.setSPCTransactionMode": Page.setSPCTransactionModeParameters;
    "Page.setRPHRegistrationMode": Page.setRPHRegistrationModeParameters;
    "Page.generateTestReport": Page.generateTestReportParameters;
    "Page.waitForDebugger": Page.waitForDebuggerParameters;
    "Page.setInterceptFileChooserDialog": Page.setInterceptFileChooserDialogParameters;
    "Page.setPrerenderingAllowed": Page.setPrerenderingAllowedParameters;
    "Page.getAnnotatedPageContent": Page.getAnnotatedPageContentParameters;
    "Performance.disable": Performance.disableParameters;
    "Performance.enable": Performance.enableParameters;
    "Performance.setTimeDomain": Performance.setTimeDomainParameters;
    "Performance.getMetrics": Performance.getMetricsParameters;
    "PerformanceTimeline.enable": PerformanceTimeline.enableParameters;
    "Preload.enable": Preload.enableParameters;
    "Preload.disable": Preload.disableParameters;
    "Security.disable": Security.disableParameters;
    "Security.enable": Security.enableParameters;
    "Security.setIgnoreCertificateErrors": Security.setIgnoreCertificateErrorsParameters;
    "Security.handleCertificateError": Security.handleCertificateErrorParameters;
    "Security.setOverrideCertificateErrors": Security.setOverrideCertificateErrorsParameters;
    "ServiceWorker.deliverPushMessage": ServiceWorker.deliverPushMessageParameters;
    "ServiceWorker.disable": ServiceWorker.disableParameters;
    "ServiceWorker.dispatchSyncEvent": ServiceWorker.dispatchSyncEventParameters;
    "ServiceWorker.dispatchPeriodicSyncEvent": ServiceWorker.dispatchPeriodicSyncEventParameters;
    "ServiceWorker.enable": ServiceWorker.enableParameters;
    "ServiceWorker.setForceUpdateOnPageLoad": ServiceWorker.setForceUpdateOnPageLoadParameters;
    "ServiceWorker.skipWaiting": ServiceWorker.skipWaitingParameters;
    "ServiceWorker.startWorker": ServiceWorker.startWorkerParameters;
    "ServiceWorker.stopAllWorkers": ServiceWorker.stopAllWorkersParameters;
    "ServiceWorker.stopWorker": ServiceWorker.stopWorkerParameters;
    "ServiceWorker.unregister": ServiceWorker.unregisterParameters;
    "ServiceWorker.updateRegistration": ServiceWorker.updateRegistrationParameters;
    "SmartCardEmulation.enable": SmartCardEmulation.enableParameters;
    "SmartCardEmulation.disable": SmartCardEmulation.disableParameters;
    "SmartCardEmulation.reportEstablishContextResult": SmartCardEmulation.reportEstablishContextResultParameters;
    "SmartCardEmulation.reportReleaseContextResult": SmartCardEmulation.reportReleaseContextResultParameters;
    "SmartCardEmulation.reportListReadersResult": SmartCardEmulation.reportListReadersResultParameters;
    "SmartCardEmulation.reportGetStatusChangeResult": SmartCardEmulation.reportGetStatusChangeResultParameters;
    "SmartCardEmulation.reportBeginTransactionResult": SmartCardEmulation.reportBeginTransactionResultParameters;
    "SmartCardEmulation.reportPlainResult": SmartCardEmulation.reportPlainResultParameters;
    "SmartCardEmulation.reportConnectResult": SmartCardEmulation.reportConnectResultParameters;
    "SmartCardEmulation.reportDataResult": SmartCardEmulation.reportDataResultParameters;
    "SmartCardEmulation.reportStatusResult": SmartCardEmulation.reportStatusResultParameters;
    "SmartCardEmulation.reportError": SmartCardEmulation.reportErrorParameters;
    "Storage.getStorageKeyForFrame": Storage.getStorageKeyForFrameParameters;
    "Storage.getStorageKey": Storage.getStorageKeyParameters;
    "Storage.clearDataForOrigin": Storage.clearDataForOriginParameters;
    "Storage.clearDataForStorageKey": Storage.clearDataForStorageKeyParameters;
    "Storage.getCookies": Storage.getCookiesParameters;
    "Storage.setCookies": Storage.setCookiesParameters;
    "Storage.clearCookies": Storage.clearCookiesParameters;
    "Storage.getUsageAndQuota": Storage.getUsageAndQuotaParameters;
    "Storage.overrideQuotaForOrigin": Storage.overrideQuotaForOriginParameters;
    "Storage.trackCacheStorageForOrigin": Storage.trackCacheStorageForOriginParameters;
    "Storage.trackCacheStorageForStorageKey": Storage.trackCacheStorageForStorageKeyParameters;
    "Storage.trackIndexedDBForOrigin": Storage.trackIndexedDBForOriginParameters;
    "Storage.trackIndexedDBForStorageKey": Storage.trackIndexedDBForStorageKeyParameters;
    "Storage.untrackCacheStorageForOrigin": Storage.untrackCacheStorageForOriginParameters;
    "Storage.untrackCacheStorageForStorageKey": Storage.untrackCacheStorageForStorageKeyParameters;
    "Storage.untrackIndexedDBForOrigin": Storage.untrackIndexedDBForOriginParameters;
    "Storage.untrackIndexedDBForStorageKey": Storage.untrackIndexedDBForStorageKeyParameters;
    "Storage.getTrustTokens": Storage.getTrustTokensParameters;
    "Storage.clearTrustTokens": Storage.clearTrustTokensParameters;
    "Storage.getInterestGroupDetails": Storage.getInterestGroupDetailsParameters;
    "Storage.setInterestGroupTracking": Storage.setInterestGroupTrackingParameters;
    "Storage.setInterestGroupAuctionTracking": Storage.setInterestGroupAuctionTrackingParameters;
    "Storage.getSharedStorageMetadata": Storage.getSharedStorageMetadataParameters;
    "Storage.getSharedStorageEntries": Storage.getSharedStorageEntriesParameters;
    "Storage.setSharedStorageEntry": Storage.setSharedStorageEntryParameters;
    "Storage.deleteSharedStorageEntry": Storage.deleteSharedStorageEntryParameters;
    "Storage.clearSharedStorageEntries": Storage.clearSharedStorageEntriesParameters;
    "Storage.resetSharedStorageBudget": Storage.resetSharedStorageBudgetParameters;
    "Storage.setSharedStorageTracking": Storage.setSharedStorageTrackingParameters;
    "Storage.setStorageBucketTracking": Storage.setStorageBucketTrackingParameters;
    "Storage.deleteStorageBucket": Storage.deleteStorageBucketParameters;
    "Storage.runBounceTrackingMitigations": Storage.runBounceTrackingMitigationsParameters;
    "Storage.getRelatedWebsiteSets": Storage.getRelatedWebsiteSetsParameters;
    "Storage.setProtectedAudienceKAnonymity": Storage.setProtectedAudienceKAnonymityParameters;
    "SystemInfo.getInfo": SystemInfo.getInfoParameters;
    "SystemInfo.getFeatureState": SystemInfo.getFeatureStateParameters;
    "SystemInfo.getProcessInfo": SystemInfo.getProcessInfoParameters;
    "Target.activateTarget": Target.activateTargetParameters;
    "Target.attachToTarget": Target.attachToTargetParameters;
    "Target.attachToBrowserTarget": Target.attachToBrowserTargetParameters;
    "Target.closeTarget": Target.closeTargetParameters;
    "Target.exposeDevToolsProtocol": Target.exposeDevToolsProtocolParameters;
    "Target.createBrowserContext": Target.createBrowserContextParameters;
    "Target.getBrowserContexts": Target.getBrowserContextsParameters;
    "Target.createTarget": Target.createTargetParameters;
    "Target.detachFromTarget": Target.detachFromTargetParameters;
    "Target.disposeBrowserContext": Target.disposeBrowserContextParameters;
    "Target.getTargetInfo": Target.getTargetInfoParameters;
    "Target.getTargets": Target.getTargetsParameters;
    "Target.sendMessageToTarget": Target.sendMessageToTargetParameters;
    "Target.setAutoAttach": Target.setAutoAttachParameters;
    "Target.autoAttachRelated": Target.autoAttachRelatedParameters;
    "Target.setDiscoverTargets": Target.setDiscoverTargetsParameters;
    "Target.setRemoteLocations": Target.setRemoteLocationsParameters;
    "Target.getDevToolsTarget": Target.getDevToolsTargetParameters;
    "Target.openDevTools": Target.openDevToolsParameters;
    "Tethering.bind": Tethering.bindParameters;
    "Tethering.unbind": Tethering.unbindParameters;
    "Tracing.end": Tracing.endParameters;
    "Tracing.getCategories": Tracing.getCategoriesParameters;
    "Tracing.getTrackEventDescriptor": Tracing.getTrackEventDescriptorParameters;
    "Tracing.recordClockSyncMarker": Tracing.recordClockSyncMarkerParameters;
    "Tracing.requestMemoryDump": Tracing.requestMemoryDumpParameters;
    "Tracing.start": Tracing.startParameters;
    "WebAudio.enable": WebAudio.enableParameters;
    "WebAudio.disable": WebAudio.disableParameters;
    "WebAudio.getRealtimeData": WebAudio.getRealtimeDataParameters;
    "WebAuthn.enable": WebAuthn.enableParameters;
    "WebAuthn.disable": WebAuthn.disableParameters;
    "WebAuthn.addVirtualAuthenticator": WebAuthn.addVirtualAuthenticatorParameters;
    "WebAuthn.setResponseOverrideBits": WebAuthn.setResponseOverrideBitsParameters;
    "WebAuthn.removeVirtualAuthenticator": WebAuthn.removeVirtualAuthenticatorParameters;
    "WebAuthn.addCredential": WebAuthn.addCredentialParameters;
    "WebAuthn.getCredential": WebAuthn.getCredentialParameters;
    "WebAuthn.getCredentials": WebAuthn.getCredentialsParameters;
    "WebAuthn.removeCredential": WebAuthn.removeCredentialParameters;
    "WebAuthn.clearCredentials": WebAuthn.clearCredentialsParameters;
    "WebAuthn.setUserVerified": WebAuthn.setUserVerifiedParameters;
    "WebAuthn.setAutomaticPresenceSimulation": WebAuthn.setAutomaticPresenceSimulationParameters;
    "WebAuthn.setCredentialProperties": WebAuthn.setCredentialPropertiesParameters;
    "WebMCP.enable": WebMCP.enableParameters;
    "WebMCP.disable": WebMCP.disableParameters;
    "Console.clearMessages": Console.clearMessagesParameters;
    "Console.disable": Console.disableParameters;
    "Console.enable": Console.enableParameters;
    "Debugger.continueToLocation": Debugger.continueToLocationParameters;
    "Debugger.disable": Debugger.disableParameters;
    "Debugger.enable": Debugger.enableParameters;
    "Debugger.evaluateOnCallFrame": Debugger.evaluateOnCallFrameParameters;
    "Debugger.getPossibleBreakpoints": Debugger.getPossibleBreakpointsParameters;
    "Debugger.getScriptSource": Debugger.getScriptSourceParameters;
    "Debugger.disassembleWasmModule": Debugger.disassembleWasmModuleParameters;
    "Debugger.nextWasmDisassemblyChunk": Debugger.nextWasmDisassemblyChunkParameters;
    "Debugger.getWasmBytecode": Debugger.getWasmBytecodeParameters;
    "Debugger.getStackTrace": Debugger.getStackTraceParameters;
    "Debugger.pause": Debugger.pauseParameters;
    "Debugger.pauseOnAsyncCall": Debugger.pauseOnAsyncCallParameters;
    "Debugger.removeBreakpoint": Debugger.removeBreakpointParameters;
    "Debugger.restartFrame": Debugger.restartFrameParameters;
    "Debugger.resume": Debugger.resumeParameters;
    "Debugger.searchInContent": Debugger.searchInContentParameters;
    "Debugger.setAsyncCallStackDepth": Debugger.setAsyncCallStackDepthParameters;
    "Debugger.setBlackboxExecutionContexts": Debugger.setBlackboxExecutionContextsParameters;
    "Debugger.setBlackboxPatterns": Debugger.setBlackboxPatternsParameters;
    "Debugger.setBlackboxedRanges": Debugger.setBlackboxedRangesParameters;
    "Debugger.setBreakpoint": Debugger.setBreakpointParameters;
    "Debugger.setInstrumentationBreakpoint": Debugger.setInstrumentationBreakpointParameters;
    "Debugger.setBreakpointByUrl": Debugger.setBreakpointByUrlParameters;
    "Debugger.setBreakpointOnFunctionCall": Debugger.setBreakpointOnFunctionCallParameters;
    "Debugger.setBreakpointsActive": Debugger.setBreakpointsActiveParameters;
    "Debugger.setPauseOnExceptions": Debugger.setPauseOnExceptionsParameters;
    "Debugger.setReturnValue": Debugger.setReturnValueParameters;
    "Debugger.setScriptSource": Debugger.setScriptSourceParameters;
    "Debugger.setSkipAllPauses": Debugger.setSkipAllPausesParameters;
    "Debugger.setVariableValue": Debugger.setVariableValueParameters;
    "Debugger.stepInto": Debugger.stepIntoParameters;
    "Debugger.stepOut": Debugger.stepOutParameters;
    "Debugger.stepOver": Debugger.stepOverParameters;
    "HeapProfiler.addInspectedHeapObject": HeapProfiler.addInspectedHeapObjectParameters;
    "HeapProfiler.collectGarbage": HeapProfiler.collectGarbageParameters;
    "HeapProfiler.disable": HeapProfiler.disableParameters;
    "HeapProfiler.enable": HeapProfiler.enableParameters;
    "HeapProfiler.getHeapObjectId": HeapProfiler.getHeapObjectIdParameters;
    "HeapProfiler.getObjectByHeapObjectId": HeapProfiler.getObjectByHeapObjectIdParameters;
    "HeapProfiler.getSamplingProfile": HeapProfiler.getSamplingProfileParameters;
    "HeapProfiler.startSampling": HeapProfiler.startSamplingParameters;
    "HeapProfiler.startTrackingHeapObjects": HeapProfiler.startTrackingHeapObjectsParameters;
    "HeapProfiler.stopSampling": HeapProfiler.stopSamplingParameters;
    "HeapProfiler.stopTrackingHeapObjects": HeapProfiler.stopTrackingHeapObjectsParameters;
    "HeapProfiler.takeHeapSnapshot": HeapProfiler.takeHeapSnapshotParameters;
    "Profiler.disable": Profiler.disableParameters;
    "Profiler.enable": Profiler.enableParameters;
    "Profiler.getBestEffortCoverage": Profiler.getBestEffortCoverageParameters;
    "Profiler.setSamplingInterval": Profiler.setSamplingIntervalParameters;
    "Profiler.start": Profiler.startParameters;
    "Profiler.startPreciseCoverage": Profiler.startPreciseCoverageParameters;
    "Profiler.stop": Profiler.stopParameters;
    "Profiler.stopPreciseCoverage": Profiler.stopPreciseCoverageParameters;
    "Profiler.takePreciseCoverage": Profiler.takePreciseCoverageParameters;
    "Runtime.awaitPromise": Runtime.awaitPromiseParameters;
    "Runtime.callFunctionOn": Runtime.callFunctionOnParameters;
    "Runtime.compileScript": Runtime.compileScriptParameters;
    "Runtime.disable": Runtime.disableParameters;
    "Runtime.discardConsoleEntries": Runtime.discardConsoleEntriesParameters;
    "Runtime.enable": Runtime.enableParameters;
    "Runtime.evaluate": Runtime.evaluateParameters;
    "Runtime.getIsolateId": Runtime.getIsolateIdParameters;
    "Runtime.getHeapUsage": Runtime.getHeapUsageParameters;
    "Runtime.getProperties": Runtime.getPropertiesParameters;
    "Runtime.globalLexicalScopeNames": Runtime.globalLexicalScopeNamesParameters;
    "Runtime.queryObjects": Runtime.queryObjectsParameters;
    "Runtime.releaseObject": Runtime.releaseObjectParameters;
    "Runtime.releaseObjectGroup": Runtime.releaseObjectGroupParameters;
    "Runtime.runIfWaitingForDebugger": Runtime.runIfWaitingForDebuggerParameters;
    "Runtime.runScript": Runtime.runScriptParameters;
    "Runtime.setAsyncCallStackDepth": Runtime.setAsyncCallStackDepthParameters;
    "Runtime.setCustomObjectFormatterEnabled": Runtime.setCustomObjectFormatterEnabledParameters;
    "Runtime.setMaxCallStackSizeToCapture": Runtime.setMaxCallStackSizeToCaptureParameters;
    "Runtime.terminateExecution": Runtime.terminateExecutionParameters;
    "Runtime.addBinding": Runtime.addBindingParameters;
    "Runtime.removeBinding": Runtime.removeBindingParameters;
    "Runtime.getExceptionDetails": Runtime.getExceptionDetailsParameters;
    "Schema.getDomains": Schema.getDomainsParameters;
  }
  export interface CommandReturnValues {
    "Accessibility.disable": Accessibility.disableReturnValue;
    "Accessibility.enable": Accessibility.enableReturnValue;
    "Accessibility.getPartialAXTree": Accessibility.getPartialAXTreeReturnValue;
    "Accessibility.getFullAXTree": Accessibility.getFullAXTreeReturnValue;
    "Accessibility.getRootAXNode": Accessibility.getRootAXNodeReturnValue;
    "Accessibility.getAXNodeAndAncestors": Accessibility.getAXNodeAndAncestorsReturnValue;
    "Accessibility.getChildAXNodes": Accessibility.getChildAXNodesReturnValue;
    "Accessibility.queryAXTree": Accessibility.queryAXTreeReturnValue;
    "Animation.disable": Animation.disableReturnValue;
    "Animation.enable": Animation.enableReturnValue;
    "Animation.getCurrentTime": Animation.getCurrentTimeReturnValue;
    "Animation.getPlaybackRate": Animation.getPlaybackRateReturnValue;
    "Animation.releaseAnimations": Animation.releaseAnimationsReturnValue;
    "Animation.resolveAnimation": Animation.resolveAnimationReturnValue;
    "Animation.seekAnimations": Animation.seekAnimationsReturnValue;
    "Animation.setPaused": Animation.setPausedReturnValue;
    "Animation.setPlaybackRate": Animation.setPlaybackRateReturnValue;
    "Animation.setTiming": Animation.setTimingReturnValue;
    "Audits.getEncodedResponse": Audits.getEncodedResponseReturnValue;
    "Audits.disable": Audits.disableReturnValue;
    "Audits.enable": Audits.enableReturnValue;
    "Audits.checkFormsIssues": Audits.checkFormsIssuesReturnValue;
    "Autofill.trigger": Autofill.triggerReturnValue;
    "Autofill.setAddresses": Autofill.setAddressesReturnValue;
    "Autofill.disable": Autofill.disableReturnValue;
    "Autofill.enable": Autofill.enableReturnValue;
    "BackgroundService.startObserving": BackgroundService.startObservingReturnValue;
    "BackgroundService.stopObserving": BackgroundService.stopObservingReturnValue;
    "BackgroundService.setRecording": BackgroundService.setRecordingReturnValue;
    "BackgroundService.clearEvents": BackgroundService.clearEventsReturnValue;
    "BluetoothEmulation.enable": BluetoothEmulation.enableReturnValue;
    "BluetoothEmulation.setSimulatedCentralState": BluetoothEmulation.setSimulatedCentralStateReturnValue;
    "BluetoothEmulation.disable": BluetoothEmulation.disableReturnValue;
    "BluetoothEmulation.simulatePreconnectedPeripheral": BluetoothEmulation.simulatePreconnectedPeripheralReturnValue;
    "BluetoothEmulation.simulateAdvertisement": BluetoothEmulation.simulateAdvertisementReturnValue;
    "BluetoothEmulation.simulateGATTOperationResponse": BluetoothEmulation.simulateGATTOperationResponseReturnValue;
    "BluetoothEmulation.simulateCharacteristicOperationResponse": BluetoothEmulation.simulateCharacteristicOperationResponseReturnValue;
    "BluetoothEmulation.simulateDescriptorOperationResponse": BluetoothEmulation.simulateDescriptorOperationResponseReturnValue;
    "BluetoothEmulation.addService": BluetoothEmulation.addServiceReturnValue;
    "BluetoothEmulation.removeService": BluetoothEmulation.removeServiceReturnValue;
    "BluetoothEmulation.addCharacteristic": BluetoothEmulation.addCharacteristicReturnValue;
    "BluetoothEmulation.removeCharacteristic": BluetoothEmulation.removeCharacteristicReturnValue;
    "BluetoothEmulation.addDescriptor": BluetoothEmulation.addDescriptorReturnValue;
    "BluetoothEmulation.removeDescriptor": BluetoothEmulation.removeDescriptorReturnValue;
    "BluetoothEmulation.simulateGATTDisconnection": BluetoothEmulation.simulateGATTDisconnectionReturnValue;
    "Browser.setPermission": Browser.setPermissionReturnValue;
    "Browser.grantPermissions": Browser.grantPermissionsReturnValue;
    "Browser.resetPermissions": Browser.resetPermissionsReturnValue;
    "Browser.setDownloadBehavior": Browser.setDownloadBehaviorReturnValue;
    "Browser.cancelDownload": Browser.cancelDownloadReturnValue;
    "Browser.close": Browser.closeReturnValue;
    "Browser.crash": Browser.crashReturnValue;
    "Browser.crashGpuProcess": Browser.crashGpuProcessReturnValue;
    "Browser.getVersion": Browser.getVersionReturnValue;
    "Browser.getBrowserCommandLine": Browser.getBrowserCommandLineReturnValue;
    "Browser.getHistograms": Browser.getHistogramsReturnValue;
    "Browser.getHistogram": Browser.getHistogramReturnValue;
    "Browser.getWindowBounds": Browser.getWindowBoundsReturnValue;
    "Browser.getWindowForTarget": Browser.getWindowForTargetReturnValue;
    "Browser.setWindowBounds": Browser.setWindowBoundsReturnValue;
    "Browser.setContentsSize": Browser.setContentsSizeReturnValue;
    "Browser.setDockTile": Browser.setDockTileReturnValue;
    "Browser.executeBrowserCommand": Browser.executeBrowserCommandReturnValue;
    "Browser.addPrivacySandboxEnrollmentOverride": Browser.addPrivacySandboxEnrollmentOverrideReturnValue;
    "Browser.addPrivacySandboxCoordinatorKeyConfig": Browser.addPrivacySandboxCoordinatorKeyConfigReturnValue;
    "CSS.addRule": CSS.addRuleReturnValue;
    "CSS.collectClassNames": CSS.collectClassNamesReturnValue;
    "CSS.createStyleSheet": CSS.createStyleSheetReturnValue;
    "CSS.disable": CSS.disableReturnValue;
    "CSS.enable": CSS.enableReturnValue;
    "CSS.forcePseudoState": CSS.forcePseudoStateReturnValue;
    "CSS.forceStartingStyle": CSS.forceStartingStyleReturnValue;
    "CSS.getBackgroundColors": CSS.getBackgroundColorsReturnValue;
    "CSS.getComputedStyleForNode": CSS.getComputedStyleForNodeReturnValue;
    "CSS.resolveValues": CSS.resolveValuesReturnValue;
    "CSS.getLonghandProperties": CSS.getLonghandPropertiesReturnValue;
    "CSS.getInlineStylesForNode": CSS.getInlineStylesForNodeReturnValue;
    "CSS.getAnimatedStylesForNode": CSS.getAnimatedStylesForNodeReturnValue;
    "CSS.getMatchedStylesForNode": CSS.getMatchedStylesForNodeReturnValue;
    "CSS.getEnvironmentVariables": CSS.getEnvironmentVariablesReturnValue;
    "CSS.getMediaQueries": CSS.getMediaQueriesReturnValue;
    "CSS.getPlatformFontsForNode": CSS.getPlatformFontsForNodeReturnValue;
    "CSS.getStyleSheetText": CSS.getStyleSheetTextReturnValue;
    "CSS.getLayersForNode": CSS.getLayersForNodeReturnValue;
    "CSS.getLocationForSelector": CSS.getLocationForSelectorReturnValue;
    "CSS.trackComputedStyleUpdatesForNode": CSS.trackComputedStyleUpdatesForNodeReturnValue;
    "CSS.trackComputedStyleUpdates": CSS.trackComputedStyleUpdatesReturnValue;
    "CSS.takeComputedStyleUpdates": CSS.takeComputedStyleUpdatesReturnValue;
    "CSS.setEffectivePropertyValueForNode": CSS.setEffectivePropertyValueForNodeReturnValue;
    "CSS.setPropertyRulePropertyName": CSS.setPropertyRulePropertyNameReturnValue;
    "CSS.setKeyframeKey": CSS.setKeyframeKeyReturnValue;
    "CSS.setMediaText": CSS.setMediaTextReturnValue;
    "CSS.setContainerQueryText": CSS.setContainerQueryTextReturnValue;
    "CSS.setSupportsText": CSS.setSupportsTextReturnValue;
    "CSS.setNavigationText": CSS.setNavigationTextReturnValue;
    "CSS.setScopeText": CSS.setScopeTextReturnValue;
    "CSS.setRuleSelector": CSS.setRuleSelectorReturnValue;
    "CSS.setStyleSheetText": CSS.setStyleSheetTextReturnValue;
    "CSS.setStyleTexts": CSS.setStyleTextsReturnValue;
    "CSS.startRuleUsageTracking": CSS.startRuleUsageTrackingReturnValue;
    "CSS.stopRuleUsageTracking": CSS.stopRuleUsageTrackingReturnValue;
    "CSS.takeCoverageDelta": CSS.takeCoverageDeltaReturnValue;
    "CSS.setLocalFontsEnabled": CSS.setLocalFontsEnabledReturnValue;
    "CacheStorage.deleteCache": CacheStorage.deleteCacheReturnValue;
    "CacheStorage.deleteEntry": CacheStorage.deleteEntryReturnValue;
    "CacheStorage.requestCacheNames": CacheStorage.requestCacheNamesReturnValue;
    "CacheStorage.requestCachedResponse": CacheStorage.requestCachedResponseReturnValue;
    "CacheStorage.requestEntries": CacheStorage.requestEntriesReturnValue;
    "Cast.enable": Cast.enableReturnValue;
    "Cast.disable": Cast.disableReturnValue;
    "Cast.setSinkToUse": Cast.setSinkToUseReturnValue;
    "Cast.startDesktopMirroring": Cast.startDesktopMirroringReturnValue;
    "Cast.startTabMirroring": Cast.startTabMirroringReturnValue;
    "Cast.stopCasting": Cast.stopCastingReturnValue;
    "CrashReportContext.getEntries": CrashReportContext.getEntriesReturnValue;
    "DOM.collectClassNamesFromSubtree": DOM.collectClassNamesFromSubtreeReturnValue;
    "DOM.copyTo": DOM.copyToReturnValue;
    "DOM.describeNode": DOM.describeNodeReturnValue;
    "DOM.scrollIntoViewIfNeeded": DOM.scrollIntoViewIfNeededReturnValue;
    "DOM.disable": DOM.disableReturnValue;
    "DOM.discardSearchResults": DOM.discardSearchResultsReturnValue;
    "DOM.enable": DOM.enableReturnValue;
    "DOM.focus": DOM.focusReturnValue;
    "DOM.getAttributes": DOM.getAttributesReturnValue;
    "DOM.getBoxModel": DOM.getBoxModelReturnValue;
    "DOM.getContentQuads": DOM.getContentQuadsReturnValue;
    "DOM.getDocument": DOM.getDocumentReturnValue;
    "DOM.getFlattenedDocument": DOM.getFlattenedDocumentReturnValue;
    "DOM.getNodesForSubtreeByStyle": DOM.getNodesForSubtreeByStyleReturnValue;
    "DOM.getNodeForLocation": DOM.getNodeForLocationReturnValue;
    "DOM.getOuterHTML": DOM.getOuterHTMLReturnValue;
    "DOM.getRelayoutBoundary": DOM.getRelayoutBoundaryReturnValue;
    "DOM.getSearchResults": DOM.getSearchResultsReturnValue;
    "DOM.hideHighlight": DOM.hideHighlightReturnValue;
    "DOM.highlightNode": DOM.highlightNodeReturnValue;
    "DOM.highlightRect": DOM.highlightRectReturnValue;
    "DOM.markUndoableState": DOM.markUndoableStateReturnValue;
    "DOM.moveTo": DOM.moveToReturnValue;
    "DOM.performSearch": DOM.performSearchReturnValue;
    "DOM.pushNodeByPathToFrontend": DOM.pushNodeByPathToFrontendReturnValue;
    "DOM.pushNodesByBackendIdsToFrontend": DOM.pushNodesByBackendIdsToFrontendReturnValue;
    "DOM.querySelector": DOM.querySelectorReturnValue;
    "DOM.querySelectorAll": DOM.querySelectorAllReturnValue;
    "DOM.getTopLayerElements": DOM.getTopLayerElementsReturnValue;
    "DOM.getElementByRelation": DOM.getElementByRelationReturnValue;
    "DOM.redo": DOM.redoReturnValue;
    "DOM.removeAttribute": DOM.removeAttributeReturnValue;
    "DOM.removeNode": DOM.removeNodeReturnValue;
    "DOM.requestChildNodes": DOM.requestChildNodesReturnValue;
    "DOM.requestNode": DOM.requestNodeReturnValue;
    "DOM.resolveNode": DOM.resolveNodeReturnValue;
    "DOM.setAttributeValue": DOM.setAttributeValueReturnValue;
    "DOM.setAttributesAsText": DOM.setAttributesAsTextReturnValue;
    "DOM.setFileInputFiles": DOM.setFileInputFilesReturnValue;
    "DOM.setNodeStackTracesEnabled": DOM.setNodeStackTracesEnabledReturnValue;
    "DOM.getNodeStackTraces": DOM.getNodeStackTracesReturnValue;
    "DOM.getFileInfo": DOM.getFileInfoReturnValue;
    "DOM.getDetachedDomNodes": DOM.getDetachedDomNodesReturnValue;
    "DOM.setInspectedNode": DOM.setInspectedNodeReturnValue;
    "DOM.setNodeName": DOM.setNodeNameReturnValue;
    "DOM.setNodeValue": DOM.setNodeValueReturnValue;
    "DOM.setOuterHTML": DOM.setOuterHTMLReturnValue;
    "DOM.undo": DOM.undoReturnValue;
    "DOM.getFrameOwner": DOM.getFrameOwnerReturnValue;
    "DOM.getContainerForNode": DOM.getContainerForNodeReturnValue;
    "DOM.getQueryingDescendantsForContainer": DOM.getQueryingDescendantsForContainerReturnValue;
    "DOM.getAnchorElement": DOM.getAnchorElementReturnValue;
    "DOM.forceShowPopover": DOM.forceShowPopoverReturnValue;
    "DOMDebugger.getEventListeners": DOMDebugger.getEventListenersReturnValue;
    "DOMDebugger.removeDOMBreakpoint": DOMDebugger.removeDOMBreakpointReturnValue;
    "DOMDebugger.removeEventListenerBreakpoint": DOMDebugger.removeEventListenerBreakpointReturnValue;
    "DOMDebugger.removeInstrumentationBreakpoint": DOMDebugger.removeInstrumentationBreakpointReturnValue;
    "DOMDebugger.removeXHRBreakpoint": DOMDebugger.removeXHRBreakpointReturnValue;
    "DOMDebugger.setBreakOnCSPViolation": DOMDebugger.setBreakOnCSPViolationReturnValue;
    "DOMDebugger.setDOMBreakpoint": DOMDebugger.setDOMBreakpointReturnValue;
    "DOMDebugger.setEventListenerBreakpoint": DOMDebugger.setEventListenerBreakpointReturnValue;
    "DOMDebugger.setInstrumentationBreakpoint": DOMDebugger.setInstrumentationBreakpointReturnValue;
    "DOMDebugger.setXHRBreakpoint": DOMDebugger.setXHRBreakpointReturnValue;
    "DOMSnapshot.disable": DOMSnapshot.disableReturnValue;
    "DOMSnapshot.enable": DOMSnapshot.enableReturnValue;
    "DOMSnapshot.getSnapshot": DOMSnapshot.getSnapshotReturnValue;
    "DOMSnapshot.captureSnapshot": DOMSnapshot.captureSnapshotReturnValue;
    "DOMStorage.clear": DOMStorage.clearReturnValue;
    "DOMStorage.disable": DOMStorage.disableReturnValue;
    "DOMStorage.enable": DOMStorage.enableReturnValue;
    "DOMStorage.getDOMStorageItems": DOMStorage.getDOMStorageItemsReturnValue;
    "DOMStorage.removeDOMStorageItem": DOMStorage.removeDOMStorageItemReturnValue;
    "DOMStorage.setDOMStorageItem": DOMStorage.setDOMStorageItemReturnValue;
    "DeviceAccess.enable": DeviceAccess.enableReturnValue;
    "DeviceAccess.disable": DeviceAccess.disableReturnValue;
    "DeviceAccess.selectPrompt": DeviceAccess.selectPromptReturnValue;
    "DeviceAccess.cancelPrompt": DeviceAccess.cancelPromptReturnValue;
    "DeviceOrientation.clearDeviceOrientationOverride": DeviceOrientation.clearDeviceOrientationOverrideReturnValue;
    "DeviceOrientation.setDeviceOrientationOverride": DeviceOrientation.setDeviceOrientationOverrideReturnValue;
    "Emulation.canEmulate": Emulation.canEmulateReturnValue;
    "Emulation.clearDeviceMetricsOverride": Emulation.clearDeviceMetricsOverrideReturnValue;
    "Emulation.clearGeolocationOverride": Emulation.clearGeolocationOverrideReturnValue;
    "Emulation.resetPageScaleFactor": Emulation.resetPageScaleFactorReturnValue;
    "Emulation.setFocusEmulationEnabled": Emulation.setFocusEmulationEnabledReturnValue;
    "Emulation.setAutoDarkModeOverride": Emulation.setAutoDarkModeOverrideReturnValue;
    "Emulation.setCPUThrottlingRate": Emulation.setCPUThrottlingRateReturnValue;
    "Emulation.setDefaultBackgroundColorOverride": Emulation.setDefaultBackgroundColorOverrideReturnValue;
    "Emulation.setSafeAreaInsetsOverride": Emulation.setSafeAreaInsetsOverrideReturnValue;
    "Emulation.setDeviceMetricsOverride": Emulation.setDeviceMetricsOverrideReturnValue;
    "Emulation.setDevicePostureOverride": Emulation.setDevicePostureOverrideReturnValue;
    "Emulation.clearDevicePostureOverride": Emulation.clearDevicePostureOverrideReturnValue;
    "Emulation.setDisplayFeaturesOverride": Emulation.setDisplayFeaturesOverrideReturnValue;
    "Emulation.clearDisplayFeaturesOverride": Emulation.clearDisplayFeaturesOverrideReturnValue;
    "Emulation.setScrollbarsHidden": Emulation.setScrollbarsHiddenReturnValue;
    "Emulation.setDocumentCookieDisabled": Emulation.setDocumentCookieDisabledReturnValue;
    "Emulation.setEmitTouchEventsForMouse": Emulation.setEmitTouchEventsForMouseReturnValue;
    "Emulation.setEmulatedMedia": Emulation.setEmulatedMediaReturnValue;
    "Emulation.setEmulatedVisionDeficiency": Emulation.setEmulatedVisionDeficiencyReturnValue;
    "Emulation.setEmulatedOSTextScale": Emulation.setEmulatedOSTextScaleReturnValue;
    "Emulation.setGeolocationOverride": Emulation.setGeolocationOverrideReturnValue;
    "Emulation.getOverriddenSensorInformation": Emulation.getOverriddenSensorInformationReturnValue;
    "Emulation.setSensorOverrideEnabled": Emulation.setSensorOverrideEnabledReturnValue;
    "Emulation.setSensorOverrideReadings": Emulation.setSensorOverrideReadingsReturnValue;
    "Emulation.setPressureSourceOverrideEnabled": Emulation.setPressureSourceOverrideEnabledReturnValue;
    "Emulation.setPressureStateOverride": Emulation.setPressureStateOverrideReturnValue;
    "Emulation.setPressureDataOverride": Emulation.setPressureDataOverrideReturnValue;
    "Emulation.setIdleOverride": Emulation.setIdleOverrideReturnValue;
    "Emulation.clearIdleOverride": Emulation.clearIdleOverrideReturnValue;
    "Emulation.setNavigatorOverrides": Emulation.setNavigatorOverridesReturnValue;
    "Emulation.setPageScaleFactor": Emulation.setPageScaleFactorReturnValue;
    "Emulation.setScriptExecutionDisabled": Emulation.setScriptExecutionDisabledReturnValue;
    "Emulation.setTouchEmulationEnabled": Emulation.setTouchEmulationEnabledReturnValue;
    "Emulation.setVirtualTimePolicy": Emulation.setVirtualTimePolicyReturnValue;
    "Emulation.setLocaleOverride": Emulation.setLocaleOverrideReturnValue;
    "Emulation.setTimezoneOverride": Emulation.setTimezoneOverrideReturnValue;
    "Emulation.setVisibleSize": Emulation.setVisibleSizeReturnValue;
    "Emulation.setDisabledImageTypes": Emulation.setDisabledImageTypesReturnValue;
    "Emulation.setDataSaverOverride": Emulation.setDataSaverOverrideReturnValue;
    "Emulation.setHardwareConcurrencyOverride": Emulation.setHardwareConcurrencyOverrideReturnValue;
    "Emulation.setUserAgentOverride": Emulation.setUserAgentOverrideReturnValue;
    "Emulation.setAutomationOverride": Emulation.setAutomationOverrideReturnValue;
    "Emulation.setSmallViewportHeightDifferenceOverride": Emulation.setSmallViewportHeightDifferenceOverrideReturnValue;
    "Emulation.getScreenInfos": Emulation.getScreenInfosReturnValue;
    "Emulation.addScreen": Emulation.addScreenReturnValue;
    "Emulation.updateScreen": Emulation.updateScreenReturnValue;
    "Emulation.removeScreen": Emulation.removeScreenReturnValue;
    "Emulation.setPrimaryScreen": Emulation.setPrimaryScreenReturnValue;
    "EventBreakpoints.setInstrumentationBreakpoint": EventBreakpoints.setInstrumentationBreakpointReturnValue;
    "EventBreakpoints.removeInstrumentationBreakpoint": EventBreakpoints.removeInstrumentationBreakpointReturnValue;
    "EventBreakpoints.disable": EventBreakpoints.disableReturnValue;
    "Extensions.triggerAction": Extensions.triggerActionReturnValue;
    "Extensions.loadUnpacked": Extensions.loadUnpackedReturnValue;
    "Extensions.getExtensions": Extensions.getExtensionsReturnValue;
    "Extensions.uninstall": Extensions.uninstallReturnValue;
    "Extensions.getStorageItems": Extensions.getStorageItemsReturnValue;
    "Extensions.removeStorageItems": Extensions.removeStorageItemsReturnValue;
    "Extensions.clearStorageItems": Extensions.clearStorageItemsReturnValue;
    "Extensions.setStorageItems": Extensions.setStorageItemsReturnValue;
    "FedCm.enable": FedCm.enableReturnValue;
    "FedCm.disable": FedCm.disableReturnValue;
    "FedCm.selectAccount": FedCm.selectAccountReturnValue;
    "FedCm.clickDialogButton": FedCm.clickDialogButtonReturnValue;
    "FedCm.openUrl": FedCm.openUrlReturnValue;
    "FedCm.dismissDialog": FedCm.dismissDialogReturnValue;
    "FedCm.resetCooldown": FedCm.resetCooldownReturnValue;
    "Fetch.disable": Fetch.disableReturnValue;
    "Fetch.enable": Fetch.enableReturnValue;
    "Fetch.failRequest": Fetch.failRequestReturnValue;
    "Fetch.fulfillRequest": Fetch.fulfillRequestReturnValue;
    "Fetch.continueRequest": Fetch.continueRequestReturnValue;
    "Fetch.continueWithAuth": Fetch.continueWithAuthReturnValue;
    "Fetch.continueResponse": Fetch.continueResponseReturnValue;
    "Fetch.getResponseBody": Fetch.getResponseBodyReturnValue;
    "Fetch.takeResponseBodyAsStream": Fetch.takeResponseBodyAsStreamReturnValue;
    "FileSystem.getDirectory": FileSystem.getDirectoryReturnValue;
    "HeadlessExperimental.beginFrame": HeadlessExperimental.beginFrameReturnValue;
    "HeadlessExperimental.disable": HeadlessExperimental.disableReturnValue;
    "HeadlessExperimental.enable": HeadlessExperimental.enableReturnValue;
    "IO.close": IO.closeReturnValue;
    "IO.read": IO.readReturnValue;
    "IO.resolveBlob": IO.resolveBlobReturnValue;
    "IndexedDB.clearObjectStore": IndexedDB.clearObjectStoreReturnValue;
    "IndexedDB.deleteDatabase": IndexedDB.deleteDatabaseReturnValue;
    "IndexedDB.deleteObjectStoreEntries": IndexedDB.deleteObjectStoreEntriesReturnValue;
    "IndexedDB.disable": IndexedDB.disableReturnValue;
    "IndexedDB.enable": IndexedDB.enableReturnValue;
    "IndexedDB.requestData": IndexedDB.requestDataReturnValue;
    "IndexedDB.getMetadata": IndexedDB.getMetadataReturnValue;
    "IndexedDB.requestDatabase": IndexedDB.requestDatabaseReturnValue;
    "IndexedDB.requestDatabaseNames": IndexedDB.requestDatabaseNamesReturnValue;
    "Input.dispatchDragEvent": Input.dispatchDragEventReturnValue;
    "Input.dispatchKeyEvent": Input.dispatchKeyEventReturnValue;
    "Input.insertText": Input.insertTextReturnValue;
    "Input.imeSetComposition": Input.imeSetCompositionReturnValue;
    "Input.dispatchMouseEvent": Input.dispatchMouseEventReturnValue;
    "Input.dispatchTouchEvent": Input.dispatchTouchEventReturnValue;
    "Input.cancelDragging": Input.cancelDraggingReturnValue;
    "Input.emulateTouchFromMouseEvent": Input.emulateTouchFromMouseEventReturnValue;
    "Input.setIgnoreInputEvents": Input.setIgnoreInputEventsReturnValue;
    "Input.setInterceptDrags": Input.setInterceptDragsReturnValue;
    "Input.synthesizePinchGesture": Input.synthesizePinchGestureReturnValue;
    "Input.synthesizeScrollGesture": Input.synthesizeScrollGestureReturnValue;
    "Input.synthesizeTapGesture": Input.synthesizeTapGestureReturnValue;
    "Inspector.disable": Inspector.disableReturnValue;
    "Inspector.enable": Inspector.enableReturnValue;
    "LayerTree.compositingReasons": LayerTree.compositingReasonsReturnValue;
    "LayerTree.disable": LayerTree.disableReturnValue;
    "LayerTree.enable": LayerTree.enableReturnValue;
    "LayerTree.loadSnapshot": LayerTree.loadSnapshotReturnValue;
    "LayerTree.makeSnapshot": LayerTree.makeSnapshotReturnValue;
    "LayerTree.profileSnapshot": LayerTree.profileSnapshotReturnValue;
    "LayerTree.releaseSnapshot": LayerTree.releaseSnapshotReturnValue;
    "LayerTree.replaySnapshot": LayerTree.replaySnapshotReturnValue;
    "LayerTree.snapshotCommandLog": LayerTree.snapshotCommandLogReturnValue;
    "Log.clear": Log.clearReturnValue;
    "Log.disable": Log.disableReturnValue;
    "Log.enable": Log.enableReturnValue;
    "Log.startViolationsReport": Log.startViolationsReportReturnValue;
    "Log.stopViolationsReport": Log.stopViolationsReportReturnValue;
    "Media.enable": Media.enableReturnValue;
    "Media.disable": Media.disableReturnValue;
    "Memory.getDOMCounters": Memory.getDOMCountersReturnValue;
    "Memory.getDOMCountersForLeakDetection": Memory.getDOMCountersForLeakDetectionReturnValue;
    "Memory.prepareForLeakDetection": Memory.prepareForLeakDetectionReturnValue;
    "Memory.forciblyPurgeJavaScriptMemory": Memory.forciblyPurgeJavaScriptMemoryReturnValue;
    "Memory.setPressureNotificationsSuppressed": Memory.setPressureNotificationsSuppressedReturnValue;
    "Memory.simulatePressureNotification": Memory.simulatePressureNotificationReturnValue;
    "Memory.startSampling": Memory.startSamplingReturnValue;
    "Memory.stopSampling": Memory.stopSamplingReturnValue;
    "Memory.getAllTimeSamplingProfile": Memory.getAllTimeSamplingProfileReturnValue;
    "Memory.getBrowserSamplingProfile": Memory.getBrowserSamplingProfileReturnValue;
    "Memory.getSamplingProfile": Memory.getSamplingProfileReturnValue;
    "Network.setAcceptedEncodings": Network.setAcceptedEncodingsReturnValue;
    "Network.clearAcceptedEncodingsOverride": Network.clearAcceptedEncodingsOverrideReturnValue;
    "Network.canClearBrowserCache": Network.canClearBrowserCacheReturnValue;
    "Network.canClearBrowserCookies": Network.canClearBrowserCookiesReturnValue;
    "Network.canEmulateNetworkConditions": Network.canEmulateNetworkConditionsReturnValue;
    "Network.clearBrowserCache": Network.clearBrowserCacheReturnValue;
    "Network.clearBrowserCookies": Network.clearBrowserCookiesReturnValue;
    "Network.continueInterceptedRequest": Network.continueInterceptedRequestReturnValue;
    "Network.deleteCookies": Network.deleteCookiesReturnValue;
    "Network.disable": Network.disableReturnValue;
    "Network.emulateNetworkConditions": Network.emulateNetworkConditionsReturnValue;
    "Network.emulateNetworkConditionsByRule": Network.emulateNetworkConditionsByRuleReturnValue;
    "Network.overrideNetworkState": Network.overrideNetworkStateReturnValue;
    "Network.enable": Network.enableReturnValue;
    "Network.configureDurableMessages": Network.configureDurableMessagesReturnValue;
    "Network.getAllCookies": Network.getAllCookiesReturnValue;
    "Network.getCertificate": Network.getCertificateReturnValue;
    "Network.getCookies": Network.getCookiesReturnValue;
    "Network.getResponseBody": Network.getResponseBodyReturnValue;
    "Network.getRequestPostData": Network.getRequestPostDataReturnValue;
    "Network.getResponseBodyForInterception": Network.getResponseBodyForInterceptionReturnValue;
    "Network.takeResponseBodyForInterceptionAsStream": Network.takeResponseBodyForInterceptionAsStreamReturnValue;
    "Network.replayXHR": Network.replayXHRReturnValue;
    "Network.searchInResponseBody": Network.searchInResponseBodyReturnValue;
    "Network.setBlockedURLs": Network.setBlockedURLsReturnValue;
    "Network.setBypassServiceWorker": Network.setBypassServiceWorkerReturnValue;
    "Network.setCacheDisabled": Network.setCacheDisabledReturnValue;
    "Network.setCookie": Network.setCookieReturnValue;
    "Network.setCookies": Network.setCookiesReturnValue;
    "Network.setExtraHTTPHeaders": Network.setExtraHTTPHeadersReturnValue;
    "Network.setAttachDebugStack": Network.setAttachDebugStackReturnValue;
    "Network.setRequestInterception": Network.setRequestInterceptionReturnValue;
    "Network.setUserAgentOverride": Network.setUserAgentOverrideReturnValue;
    "Network.streamResourceContent": Network.streamResourceContentReturnValue;
    "Network.getSecurityIsolationStatus": Network.getSecurityIsolationStatusReturnValue;
    "Network.enableReportingApi": Network.enableReportingApiReturnValue;
    "Network.enableDeviceBoundSessions": Network.enableDeviceBoundSessionsReturnValue;
    "Network.fetchSchemefulSite": Network.fetchSchemefulSiteReturnValue;
    "Network.loadNetworkResource": Network.loadNetworkResourceReturnValue;
    "Network.setCookieControls": Network.setCookieControlsReturnValue;
    "Overlay.disable": Overlay.disableReturnValue;
    "Overlay.enable": Overlay.enableReturnValue;
    "Overlay.getHighlightObjectForTest": Overlay.getHighlightObjectForTestReturnValue;
    "Overlay.getGridHighlightObjectsForTest": Overlay.getGridHighlightObjectsForTestReturnValue;
    "Overlay.getSourceOrderHighlightObjectForTest": Overlay.getSourceOrderHighlightObjectForTestReturnValue;
    "Overlay.hideHighlight": Overlay.hideHighlightReturnValue;
    "Overlay.highlightFrame": Overlay.highlightFrameReturnValue;
    "Overlay.highlightNode": Overlay.highlightNodeReturnValue;
    "Overlay.highlightQuad": Overlay.highlightQuadReturnValue;
    "Overlay.highlightRect": Overlay.highlightRectReturnValue;
    "Overlay.highlightSourceOrder": Overlay.highlightSourceOrderReturnValue;
    "Overlay.setInspectMode": Overlay.setInspectModeReturnValue;
    "Overlay.setShowAdHighlights": Overlay.setShowAdHighlightsReturnValue;
    "Overlay.setPausedInDebuggerMessage": Overlay.setPausedInDebuggerMessageReturnValue;
    "Overlay.setShowDebugBorders": Overlay.setShowDebugBordersReturnValue;
    "Overlay.setShowFPSCounter": Overlay.setShowFPSCounterReturnValue;
    "Overlay.setShowGridOverlays": Overlay.setShowGridOverlaysReturnValue;
    "Overlay.setShowFlexOverlays": Overlay.setShowFlexOverlaysReturnValue;
    "Overlay.setShowScrollSnapOverlays": Overlay.setShowScrollSnapOverlaysReturnValue;
    "Overlay.setShowContainerQueryOverlays": Overlay.setShowContainerQueryOverlaysReturnValue;
    "Overlay.setShowInspectedElementAnchor": Overlay.setShowInspectedElementAnchorReturnValue;
    "Overlay.setShowPaintRects": Overlay.setShowPaintRectsReturnValue;
    "Overlay.setShowLayoutShiftRegions": Overlay.setShowLayoutShiftRegionsReturnValue;
    "Overlay.setShowScrollBottleneckRects": Overlay.setShowScrollBottleneckRectsReturnValue;
    "Overlay.setShowHitTestBorders": Overlay.setShowHitTestBordersReturnValue;
    "Overlay.setShowWebVitals": Overlay.setShowWebVitalsReturnValue;
    "Overlay.setShowViewportSizeOnResize": Overlay.setShowViewportSizeOnResizeReturnValue;
    "Overlay.setShowHinge": Overlay.setShowHingeReturnValue;
    "Overlay.setShowIsolatedElements": Overlay.setShowIsolatedElementsReturnValue;
    "Overlay.setShowWindowControlsOverlay": Overlay.setShowWindowControlsOverlayReturnValue;
    "PWA.getOsAppState": PWA.getOsAppStateReturnValue;
    "PWA.install": PWA.installReturnValue;
    "PWA.uninstall": PWA.uninstallReturnValue;
    "PWA.launch": PWA.launchReturnValue;
    "PWA.launchFilesInApp": PWA.launchFilesInAppReturnValue;
    "PWA.openCurrentPageInApp": PWA.openCurrentPageInAppReturnValue;
    "PWA.changeAppUserSettings": PWA.changeAppUserSettingsReturnValue;
    "Page.addScriptToEvaluateOnLoad": Page.addScriptToEvaluateOnLoadReturnValue;
    "Page.addScriptToEvaluateOnNewDocument": Page.addScriptToEvaluateOnNewDocumentReturnValue;
    "Page.bringToFront": Page.bringToFrontReturnValue;
    "Page.captureScreenshot": Page.captureScreenshotReturnValue;
    "Page.captureSnapshot": Page.captureSnapshotReturnValue;
    "Page.clearDeviceMetricsOverride": Page.clearDeviceMetricsOverrideReturnValue;
    "Page.clearDeviceOrientationOverride": Page.clearDeviceOrientationOverrideReturnValue;
    "Page.clearGeolocationOverride": Page.clearGeolocationOverrideReturnValue;
    "Page.createIsolatedWorld": Page.createIsolatedWorldReturnValue;
    "Page.deleteCookie": Page.deleteCookieReturnValue;
    "Page.disable": Page.disableReturnValue;
    "Page.enable": Page.enableReturnValue;
    "Page.getAppManifest": Page.getAppManifestReturnValue;
    "Page.getInstallabilityErrors": Page.getInstallabilityErrorsReturnValue;
    "Page.getManifestIcons": Page.getManifestIconsReturnValue;
    "Page.getAppId": Page.getAppIdReturnValue;
    "Page.getAdScriptAncestry": Page.getAdScriptAncestryReturnValue;
    "Page.getFrameTree": Page.getFrameTreeReturnValue;
    "Page.getLayoutMetrics": Page.getLayoutMetricsReturnValue;
    "Page.getNavigationHistory": Page.getNavigationHistoryReturnValue;
    "Page.resetNavigationHistory": Page.resetNavigationHistoryReturnValue;
    "Page.getResourceContent": Page.getResourceContentReturnValue;
    "Page.getResourceTree": Page.getResourceTreeReturnValue;
    "Page.handleJavaScriptDialog": Page.handleJavaScriptDialogReturnValue;
    "Page.navigate": Page.navigateReturnValue;
    "Page.navigateToHistoryEntry": Page.navigateToHistoryEntryReturnValue;
    "Page.printToPDF": Page.printToPDFReturnValue;
    "Page.reload": Page.reloadReturnValue;
    "Page.removeScriptToEvaluateOnLoad": Page.removeScriptToEvaluateOnLoadReturnValue;
    "Page.removeScriptToEvaluateOnNewDocument": Page.removeScriptToEvaluateOnNewDocumentReturnValue;
    "Page.screencastFrameAck": Page.screencastFrameAckReturnValue;
    "Page.searchInResource": Page.searchInResourceReturnValue;
    "Page.setAdBlockingEnabled": Page.setAdBlockingEnabledReturnValue;
    "Page.setBypassCSP": Page.setBypassCSPReturnValue;
    "Page.getPermissionsPolicyState": Page.getPermissionsPolicyStateReturnValue;
    "Page.getOriginTrials": Page.getOriginTrialsReturnValue;
    "Page.setDeviceMetricsOverride": Page.setDeviceMetricsOverrideReturnValue;
    "Page.setDeviceOrientationOverride": Page.setDeviceOrientationOverrideReturnValue;
    "Page.setFontFamilies": Page.setFontFamiliesReturnValue;
    "Page.setFontSizes": Page.setFontSizesReturnValue;
    "Page.setDocumentContent": Page.setDocumentContentReturnValue;
    "Page.setDownloadBehavior": Page.setDownloadBehaviorReturnValue;
    "Page.setGeolocationOverride": Page.setGeolocationOverrideReturnValue;
    "Page.setLifecycleEventsEnabled": Page.setLifecycleEventsEnabledReturnValue;
    "Page.setTouchEmulationEnabled": Page.setTouchEmulationEnabledReturnValue;
    "Page.startScreencast": Page.startScreencastReturnValue;
    "Page.stopLoading": Page.stopLoadingReturnValue;
    "Page.crash": Page.crashReturnValue;
    "Page.close": Page.closeReturnValue;
    "Page.setWebLifecycleState": Page.setWebLifecycleStateReturnValue;
    "Page.stopScreencast": Page.stopScreencastReturnValue;
    "Page.produceCompilationCache": Page.produceCompilationCacheReturnValue;
    "Page.addCompilationCache": Page.addCompilationCacheReturnValue;
    "Page.clearCompilationCache": Page.clearCompilationCacheReturnValue;
    "Page.setSPCTransactionMode": Page.setSPCTransactionModeReturnValue;
    "Page.setRPHRegistrationMode": Page.setRPHRegistrationModeReturnValue;
    "Page.generateTestReport": Page.generateTestReportReturnValue;
    "Page.waitForDebugger": Page.waitForDebuggerReturnValue;
    "Page.setInterceptFileChooserDialog": Page.setInterceptFileChooserDialogReturnValue;
    "Page.setPrerenderingAllowed": Page.setPrerenderingAllowedReturnValue;
    "Page.getAnnotatedPageContent": Page.getAnnotatedPageContentReturnValue;
    "Performance.disable": Performance.disableReturnValue;
    "Performance.enable": Performance.enableReturnValue;
    "Performance.setTimeDomain": Performance.setTimeDomainReturnValue;
    "Performance.getMetrics": Performance.getMetricsReturnValue;
    "PerformanceTimeline.enable": PerformanceTimeline.enableReturnValue;
    "Preload.enable": Preload.enableReturnValue;
    "Preload.disable": Preload.disableReturnValue;
    "Security.disable": Security.disableReturnValue;
    "Security.enable": Security.enableReturnValue;
    "Security.setIgnoreCertificateErrors": Security.setIgnoreCertificateErrorsReturnValue;
    "Security.handleCertificateError": Security.handleCertificateErrorReturnValue;
    "Security.setOverrideCertificateErrors": Security.setOverrideCertificateErrorsReturnValue;
    "ServiceWorker.deliverPushMessage": ServiceWorker.deliverPushMessageReturnValue;
    "ServiceWorker.disable": ServiceWorker.disableReturnValue;
    "ServiceWorker.dispatchSyncEvent": ServiceWorker.dispatchSyncEventReturnValue;
    "ServiceWorker.dispatchPeriodicSyncEvent": ServiceWorker.dispatchPeriodicSyncEventReturnValue;
    "ServiceWorker.enable": ServiceWorker.enableReturnValue;
    "ServiceWorker.setForceUpdateOnPageLoad": ServiceWorker.setForceUpdateOnPageLoadReturnValue;
    "ServiceWorker.skipWaiting": ServiceWorker.skipWaitingReturnValue;
    "ServiceWorker.startWorker": ServiceWorker.startWorkerReturnValue;
    "ServiceWorker.stopAllWorkers": ServiceWorker.stopAllWorkersReturnValue;
    "ServiceWorker.stopWorker": ServiceWorker.stopWorkerReturnValue;
    "ServiceWorker.unregister": ServiceWorker.unregisterReturnValue;
    "ServiceWorker.updateRegistration": ServiceWorker.updateRegistrationReturnValue;
    "SmartCardEmulation.enable": SmartCardEmulation.enableReturnValue;
    "SmartCardEmulation.disable": SmartCardEmulation.disableReturnValue;
    "SmartCardEmulation.reportEstablishContextResult": SmartCardEmulation.reportEstablishContextResultReturnValue;
    "SmartCardEmulation.reportReleaseContextResult": SmartCardEmulation.reportReleaseContextResultReturnValue;
    "SmartCardEmulation.reportListReadersResult": SmartCardEmulation.reportListReadersResultReturnValue;
    "SmartCardEmulation.reportGetStatusChangeResult": SmartCardEmulation.reportGetStatusChangeResultReturnValue;
    "SmartCardEmulation.reportBeginTransactionResult": SmartCardEmulation.reportBeginTransactionResultReturnValue;
    "SmartCardEmulation.reportPlainResult": SmartCardEmulation.reportPlainResultReturnValue;
    "SmartCardEmulation.reportConnectResult": SmartCardEmulation.reportConnectResultReturnValue;
    "SmartCardEmulation.reportDataResult": SmartCardEmulation.reportDataResultReturnValue;
    "SmartCardEmulation.reportStatusResult": SmartCardEmulation.reportStatusResultReturnValue;
    "SmartCardEmulation.reportError": SmartCardEmulation.reportErrorReturnValue;
    "Storage.getStorageKeyForFrame": Storage.getStorageKeyForFrameReturnValue;
    "Storage.getStorageKey": Storage.getStorageKeyReturnValue;
    "Storage.clearDataForOrigin": Storage.clearDataForOriginReturnValue;
    "Storage.clearDataForStorageKey": Storage.clearDataForStorageKeyReturnValue;
    "Storage.getCookies": Storage.getCookiesReturnValue;
    "Storage.setCookies": Storage.setCookiesReturnValue;
    "Storage.clearCookies": Storage.clearCookiesReturnValue;
    "Storage.getUsageAndQuota": Storage.getUsageAndQuotaReturnValue;
    "Storage.overrideQuotaForOrigin": Storage.overrideQuotaForOriginReturnValue;
    "Storage.trackCacheStorageForOrigin": Storage.trackCacheStorageForOriginReturnValue;
    "Storage.trackCacheStorageForStorageKey": Storage.trackCacheStorageForStorageKeyReturnValue;
    "Storage.trackIndexedDBForOrigin": Storage.trackIndexedDBForOriginReturnValue;
    "Storage.trackIndexedDBForStorageKey": Storage.trackIndexedDBForStorageKeyReturnValue;
    "Storage.untrackCacheStorageForOrigin": Storage.untrackCacheStorageForOriginReturnValue;
    "Storage.untrackCacheStorageForStorageKey": Storage.untrackCacheStorageForStorageKeyReturnValue;
    "Storage.untrackIndexedDBForOrigin": Storage.untrackIndexedDBForOriginReturnValue;
    "Storage.untrackIndexedDBForStorageKey": Storage.untrackIndexedDBForStorageKeyReturnValue;
    "Storage.getTrustTokens": Storage.getTrustTokensReturnValue;
    "Storage.clearTrustTokens": Storage.clearTrustTokensReturnValue;
    "Storage.getInterestGroupDetails": Storage.getInterestGroupDetailsReturnValue;
    "Storage.setInterestGroupTracking": Storage.setInterestGroupTrackingReturnValue;
    "Storage.setInterestGroupAuctionTracking": Storage.setInterestGroupAuctionTrackingReturnValue;
    "Storage.getSharedStorageMetadata": Storage.getSharedStorageMetadataReturnValue;
    "Storage.getSharedStorageEntries": Storage.getSharedStorageEntriesReturnValue;
    "Storage.setSharedStorageEntry": Storage.setSharedStorageEntryReturnValue;
    "Storage.deleteSharedStorageEntry": Storage.deleteSharedStorageEntryReturnValue;
    "Storage.clearSharedStorageEntries": Storage.clearSharedStorageEntriesReturnValue;
    "Storage.resetSharedStorageBudget": Storage.resetSharedStorageBudgetReturnValue;
    "Storage.setSharedStorageTracking": Storage.setSharedStorageTrackingReturnValue;
    "Storage.setStorageBucketTracking": Storage.setStorageBucketTrackingReturnValue;
    "Storage.deleteStorageBucket": Storage.deleteStorageBucketReturnValue;
    "Storage.runBounceTrackingMitigations": Storage.runBounceTrackingMitigationsReturnValue;
    "Storage.getRelatedWebsiteSets": Storage.getRelatedWebsiteSetsReturnValue;
    "Storage.setProtectedAudienceKAnonymity": Storage.setProtectedAudienceKAnonymityReturnValue;
    "SystemInfo.getInfo": SystemInfo.getInfoReturnValue;
    "SystemInfo.getFeatureState": SystemInfo.getFeatureStateReturnValue;
    "SystemInfo.getProcessInfo": SystemInfo.getProcessInfoReturnValue;
    "Target.activateTarget": Target.activateTargetReturnValue;
    "Target.attachToTarget": Target.attachToTargetReturnValue;
    "Target.attachToBrowserTarget": Target.attachToBrowserTargetReturnValue;
    "Target.closeTarget": Target.closeTargetReturnValue;
    "Target.exposeDevToolsProtocol": Target.exposeDevToolsProtocolReturnValue;
    "Target.createBrowserContext": Target.createBrowserContextReturnValue;
    "Target.getBrowserContexts": Target.getBrowserContextsReturnValue;
    "Target.createTarget": Target.createTargetReturnValue;
    "Target.detachFromTarget": Target.detachFromTargetReturnValue;
    "Target.disposeBrowserContext": Target.disposeBrowserContextReturnValue;
    "Target.getTargetInfo": Target.getTargetInfoReturnValue;
    "Target.getTargets": Target.getTargetsReturnValue;
    "Target.sendMessageToTarget": Target.sendMessageToTargetReturnValue;
    "Target.setAutoAttach": Target.setAutoAttachReturnValue;
    "Target.autoAttachRelated": Target.autoAttachRelatedReturnValue;
    "Target.setDiscoverTargets": Target.setDiscoverTargetsReturnValue;
    "Target.setRemoteLocations": Target.setRemoteLocationsReturnValue;
    "Target.getDevToolsTarget": Target.getDevToolsTargetReturnValue;
    "Target.openDevTools": Target.openDevToolsReturnValue;
    "Tethering.bind": Tethering.bindReturnValue;
    "Tethering.unbind": Tethering.unbindReturnValue;
    "Tracing.end": Tracing.endReturnValue;
    "Tracing.getCategories": Tracing.getCategoriesReturnValue;
    "Tracing.getTrackEventDescriptor": Tracing.getTrackEventDescriptorReturnValue;
    "Tracing.recordClockSyncMarker": Tracing.recordClockSyncMarkerReturnValue;
    "Tracing.requestMemoryDump": Tracing.requestMemoryDumpReturnValue;
    "Tracing.start": Tracing.startReturnValue;
    "WebAudio.enable": WebAudio.enableReturnValue;
    "WebAudio.disable": WebAudio.disableReturnValue;
    "WebAudio.getRealtimeData": WebAudio.getRealtimeDataReturnValue;
    "WebAuthn.enable": WebAuthn.enableReturnValue;
    "WebAuthn.disable": WebAuthn.disableReturnValue;
    "WebAuthn.addVirtualAuthenticator": WebAuthn.addVirtualAuthenticatorReturnValue;
    "WebAuthn.setResponseOverrideBits": WebAuthn.setResponseOverrideBitsReturnValue;
    "WebAuthn.removeVirtualAuthenticator": WebAuthn.removeVirtualAuthenticatorReturnValue;
    "WebAuthn.addCredential": WebAuthn.addCredentialReturnValue;
    "WebAuthn.getCredential": WebAuthn.getCredentialReturnValue;
    "WebAuthn.getCredentials": WebAuthn.getCredentialsReturnValue;
    "WebAuthn.removeCredential": WebAuthn.removeCredentialReturnValue;
    "WebAuthn.clearCredentials": WebAuthn.clearCredentialsReturnValue;
    "WebAuthn.setUserVerified": WebAuthn.setUserVerifiedReturnValue;
    "WebAuthn.setAutomaticPresenceSimulation": WebAuthn.setAutomaticPresenceSimulationReturnValue;
    "WebAuthn.setCredentialProperties": WebAuthn.setCredentialPropertiesReturnValue;
    "WebMCP.enable": WebMCP.enableReturnValue;
    "WebMCP.disable": WebMCP.disableReturnValue;
    "Console.clearMessages": Console.clearMessagesReturnValue;
    "Console.disable": Console.disableReturnValue;
    "Console.enable": Console.enableReturnValue;
    "Debugger.continueToLocation": Debugger.continueToLocationReturnValue;
    "Debugger.disable": Debugger.disableReturnValue;
    "Debugger.enable": Debugger.enableReturnValue;
    "Debugger.evaluateOnCallFrame": Debugger.evaluateOnCallFrameReturnValue;
    "Debugger.getPossibleBreakpoints": Debugger.getPossibleBreakpointsReturnValue;
    "Debugger.getScriptSource": Debugger.getScriptSourceReturnValue;
    "Debugger.disassembleWasmModule": Debugger.disassembleWasmModuleReturnValue;
    "Debugger.nextWasmDisassemblyChunk": Debugger.nextWasmDisassemblyChunkReturnValue;
    "Debugger.getWasmBytecode": Debugger.getWasmBytecodeReturnValue;
    "Debugger.getStackTrace": Debugger.getStackTraceReturnValue;
    "Debugger.pause": Debugger.pauseReturnValue;
    "Debugger.pauseOnAsyncCall": Debugger.pauseOnAsyncCallReturnValue;
    "Debugger.removeBreakpoint": Debugger.removeBreakpointReturnValue;
    "Debugger.restartFrame": Debugger.restartFrameReturnValue;
    "Debugger.resume": Debugger.resumeReturnValue;
    "Debugger.searchInContent": Debugger.searchInContentReturnValue;
    "Debugger.setAsyncCallStackDepth": Debugger.setAsyncCallStackDepthReturnValue;
    "Debugger.setBlackboxExecutionContexts": Debugger.setBlackboxExecutionContextsReturnValue;
    "Debugger.setBlackboxPatterns": Debugger.setBlackboxPatternsReturnValue;
    "Debugger.setBlackboxedRanges": Debugger.setBlackboxedRangesReturnValue;
    "Debugger.setBreakpoint": Debugger.setBreakpointReturnValue;
    "Debugger.setInstrumentationBreakpoint": Debugger.setInstrumentationBreakpointReturnValue;
    "Debugger.setBreakpointByUrl": Debugger.setBreakpointByUrlReturnValue;
    "Debugger.setBreakpointOnFunctionCall": Debugger.setBreakpointOnFunctionCallReturnValue;
    "Debugger.setBreakpointsActive": Debugger.setBreakpointsActiveReturnValue;
    "Debugger.setPauseOnExceptions": Debugger.setPauseOnExceptionsReturnValue;
    "Debugger.setReturnValue": Debugger.setReturnValueReturnValue;
    "Debugger.setScriptSource": Debugger.setScriptSourceReturnValue;
    "Debugger.setSkipAllPauses": Debugger.setSkipAllPausesReturnValue;
    "Debugger.setVariableValue": Debugger.setVariableValueReturnValue;
    "Debugger.stepInto": Debugger.stepIntoReturnValue;
    "Debugger.stepOut": Debugger.stepOutReturnValue;
    "Debugger.stepOver": Debugger.stepOverReturnValue;
    "HeapProfiler.addInspectedHeapObject": HeapProfiler.addInspectedHeapObjectReturnValue;
    "HeapProfiler.collectGarbage": HeapProfiler.collectGarbageReturnValue;
    "HeapProfiler.disable": HeapProfiler.disableReturnValue;
    "HeapProfiler.enable": HeapProfiler.enableReturnValue;
    "HeapProfiler.getHeapObjectId": HeapProfiler.getHeapObjectIdReturnValue;
    "HeapProfiler.getObjectByHeapObjectId": HeapProfiler.getObjectByHeapObjectIdReturnValue;
    "HeapProfiler.getSamplingProfile": HeapProfiler.getSamplingProfileReturnValue;
    "HeapProfiler.startSampling": HeapProfiler.startSamplingReturnValue;
    "HeapProfiler.startTrackingHeapObjects": HeapProfiler.startTrackingHeapObjectsReturnValue;
    "HeapProfiler.stopSampling": HeapProfiler.stopSamplingReturnValue;
    "HeapProfiler.stopTrackingHeapObjects": HeapProfiler.stopTrackingHeapObjectsReturnValue;
    "HeapProfiler.takeHeapSnapshot": HeapProfiler.takeHeapSnapshotReturnValue;
    "Profiler.disable": Profiler.disableReturnValue;
    "Profiler.enable": Profiler.enableReturnValue;
    "Profiler.getBestEffortCoverage": Profiler.getBestEffortCoverageReturnValue;
    "Profiler.setSamplingInterval": Profiler.setSamplingIntervalReturnValue;
    "Profiler.start": Profiler.startReturnValue;
    "Profiler.startPreciseCoverage": Profiler.startPreciseCoverageReturnValue;
    "Profiler.stop": Profiler.stopReturnValue;
    "Profiler.stopPreciseCoverage": Profiler.stopPreciseCoverageReturnValue;
    "Profiler.takePreciseCoverage": Profiler.takePreciseCoverageReturnValue;
    "Runtime.awaitPromise": Runtime.awaitPromiseReturnValue;
    "Runtime.callFunctionOn": Runtime.callFunctionOnReturnValue;
    "Runtime.compileScript": Runtime.compileScriptReturnValue;
    "Runtime.disable": Runtime.disableReturnValue;
    "Runtime.discardConsoleEntries": Runtime.discardConsoleEntriesReturnValue;
    "Runtime.enable": Runtime.enableReturnValue;
    "Runtime.evaluate": Runtime.evaluateReturnValue;
    "Runtime.getIsolateId": Runtime.getIsolateIdReturnValue;
    "Runtime.getHeapUsage": Runtime.getHeapUsageReturnValue;
    "Runtime.getProperties": Runtime.getPropertiesReturnValue;
    "Runtime.globalLexicalScopeNames": Runtime.globalLexicalScopeNamesReturnValue;
    "Runtime.queryObjects": Runtime.queryObjectsReturnValue;
    "Runtime.releaseObject": Runtime.releaseObjectReturnValue;
    "Runtime.releaseObjectGroup": Runtime.releaseObjectGroupReturnValue;
    "Runtime.runIfWaitingForDebugger": Runtime.runIfWaitingForDebuggerReturnValue;
    "Runtime.runScript": Runtime.runScriptReturnValue;
    "Runtime.setAsyncCallStackDepth": Runtime.setAsyncCallStackDepthReturnValue;
    "Runtime.setCustomObjectFormatterEnabled": Runtime.setCustomObjectFormatterEnabledReturnValue;
    "Runtime.setMaxCallStackSizeToCapture": Runtime.setMaxCallStackSizeToCaptureReturnValue;
    "Runtime.terminateExecution": Runtime.terminateExecutionReturnValue;
    "Runtime.addBinding": Runtime.addBindingReturnValue;
    "Runtime.removeBinding": Runtime.removeBindingReturnValue;
    "Runtime.getExceptionDetails": Runtime.getExceptionDetailsReturnValue;
    "Schema.getDomains": Schema.getDomainsReturnValue;
  }
}
