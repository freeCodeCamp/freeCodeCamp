var events = require("../level2/events").dom.level2.events;

// modify cloned instance for more info check: https://github.com/tmpvar/jsdom/issues/325
events = Object.create(events);

/*

// File: events.idl

#ifndef _EVENTS_IDL_
#define _EVENTS_IDL_

#include "dom.idl"
#include "views.idl"

#pragma prefix "dom.w3c.org"
module events
{

  typedef dom::DOMString DOMString;
  typedef dom::DOMTimeStamp DOMTimeStamp;
  typedef dom::DOMObject DOMObject;
  typedef dom::Node Node;

  interface EventTarget;
  interface EventListener;

  // Introduced in DOM Level 2:
  exception EventException {
    unsigned short   code;
  };
  // EventExceptionCode
  const unsigned short      UNSPECIFIED_EVENT_TYPE_ERR     = 0;
  // Introduced in DOM Level 3:
  const unsigned short      DISPATCH_REQUEST_ERR           = 1;


  // Introduced in DOM Level 2:
  interface Event {

    // PhaseType
    const unsigned short      CAPTURING_PHASE                = 1;
    const unsigned short      AT_TARGET                      = 2;
    const unsigned short      BUBBLING_PHASE                 = 3;

    readonly attribute DOMString       type;
    readonly attribute EventTarget     target;
    readonly attribute EventTarget     currentTarget;
    readonly attribute unsigned short  eventPhase;
    readonly attribute boolean         bubbles;
    readonly attribute boolean         cancelable;
    readonly attribute DOMTimeStamp    timeStamp;
    void               stopPropagation();
    void               preventDefault();
    void               initEvent(in DOMString eventTypeArg,
                                 in boolean canBubbleArg,
                                 in boolean cancelableArg);
    // Introduced in DOM Level 3:
    readonly attribute DOMString       namespaceURI;
    // Introduced in DOM Level 3:
    boolean            isCustom();
    // Introduced in DOM Level 3:
    void               stopImmediatePropagation();
    // Introduced in DOM Level 3:
    boolean            isDefaultPrevented();
    // Introduced in DOM Level 3:
    void               initEventNS(in DOMString namespaceURIArg,
                                   in DOMString eventTypeArg,
                                   in boolean canBubbleArg,
                                   in boolean cancelableArg);
  };

  // Introduced in DOM Level 2:
  interface EventTarget {
    void               addEventListener(in DOMString type,
                                        in EventListener listener,
                                        in boolean useCapture);
    void               removeEventListener(in DOMString type,
                                           in EventListener listener,
                                           in boolean useCapture);
    // Modified in DOM Level 3:
    boolean            dispatchEvent(in Event evt)
                                        raises(EventException);
    // Introduced in DOM Level 3:
    void               addEventListenerNS(in DOMString namespaceURI,
                                          in DOMString type,
                                          in EventListener listener,
                                          in boolean useCapture,
                                          in DOMObject evtGroup);
    // Introduced in DOM Level 3:
    void               removeEventListenerNS(in DOMString namespaceURI,
                                             in DOMString type,
                                             in EventListener listener,
                                             in boolean useCapture);
    // Introduced in DOM Level 3:
    boolean            willTriggerNS(in DOMString namespaceURI,
                                     in DOMString type);
    // Introduced in DOM Level 3:
    boolean            hasEventListenerNS(in DOMString namespaceURI,
                                          in DOMString type);
  };

  // Introduced in DOM Level 2:
  interface EventListener {
    void               handleEvent(in Event evt);
  };

  // Introduced in DOM Level 2:
  interface DocumentEvent {
    Event              createEvent(in DOMString eventType)
                                        raises(dom::DOMException);
    // Introduced in DOM Level 3:
    boolean            canDispatch(in DOMString namespaceURI,
                                   in DOMString type);
  };

  // Introduced in DOM Level 3:
  interface CustomEvent : Event {
    void               setDispatchState(in EventTarget target,
                                        in unsigned short phase);
    boolean            isPropagationStopped();
    boolean            isImmediatePropagationStopped();
  };

  // Introduced in DOM Level 2:
  interface UIEvent : Event {
    readonly attribute views::AbstractView view;
    readonly attribute long            detail;
    void               initUIEvent(in DOMString typeArg,
                                   in boolean canBubbleArg,
                                   in boolean cancelableArg,
                                   in views::AbstractView viewArg,
                                   in long detailArg);
    // Introduced in DOM Level 3:
    void               initUIEventNS(in DOMString namespaceURI,
                                     in DOMString typeArg,
                                     in boolean canBubbleArg,
                                     in boolean cancelableArg,
                                     in views::AbstractView viewArg,
                                     in long detailArg);
  };

  // Introduced in DOM Level 3:
  interface TextEvent : UIEvent {
    readonly attribute DOMString       data;
    void               initTextEvent(in DOMString typeArg,
                                     in boolean canBubbleArg,
                                     in boolean cancelableArg,
                                     in views::AbstractView viewArg,
                                     in DOMString dataArg);
    void               initTextEventNS(in DOMString namespaceURI,
                                       in DOMString type,
                                       in boolean canBubbleArg,
                                       in boolean cancelableArg,
                                       in views::AbstractView viewArg,
                                       in DOMString dataArg);
  };

  // Introduced in DOM Level 2:
  interface MouseEvent : UIEvent {
    readonly attribute long            screenX;
    readonly attribute long            screenY;
    readonly attribute long            clientX;
    readonly attribute long            clientY;
    readonly attribute boolean         ctrlKey;
    readonly attribute boolean         shiftKey;
    readonly attribute boolean         altKey;
    readonly attribute boolean         metaKey;
    readonly attribute unsigned short  button;
    readonly attribute EventTarget     relatedTarget;
    void               initMouseEvent(in DOMString typeArg,
                                      in boolean canBubbleArg,
                                      in boolean cancelableArg,
                                      in views::AbstractView viewArg,
                                      in long detailArg,
                                      in long screenXArg,
                                      in long screenYArg,
                                      in long clientXArg,
                                      in long clientYArg,
                                      in boolean ctrlKeyArg,
                                      in boolean altKeyArg,
                                      in boolean shiftKeyArg,
                                      in boolean metaKeyArg,
                                      in unsigned short buttonArg,
                                      in EventTarget relatedTargetArg);
    // Introduced in DOM Level 3:
    boolean            getModifierState(in DOMString keyIdentifierArg);
    // Introduced in DOM Level 3:
    void               initMouseEventNS(in DOMString namespaceURI,
                                        in DOMString typeArg,
                                        in boolean canBubbleArg,
                                        in boolean cancelableArg,
                                        in views::AbstractView viewArg,
                                        in long detailArg,
                                        in long screenXArg,
                                        in long screenYArg,
                                        in long clientXArg,
                                        in long clientYArg,
                                        in unsigned short buttonArg,
                                        in EventTarget relatedTargetArg,
                                        in DOMString modifiersList);
  };

  // Introduced in DOM Level 3:
  interface KeyboardEvent : UIEvent {

    // KeyLocationCode
    const unsigned long       DOM_KEY_LOCATION_STANDARD      = 0x00;
    const unsigned long       DOM_KEY_LOCATION_LEFT          = 0x01;
    const unsigned long       DOM_KEY_LOCATION_RIGHT         = 0x02;
    const unsigned long       DOM_KEY_LOCATION_NUMPAD        = 0x03;

    readonly attribute DOMString       keyIdentifier;
    readonly attribute unsigned long   keyLocation;
    readonly attribute boolean         ctrlKey;
    readonly attribute boolean         shiftKey;
    readonly attribute boolean         altKey;
    readonly attribute boolean         metaKey;
    boolean            getModifierState(in DOMString keyIdentifierArg);
    void               initKeyboardEvent(in DOMString typeArg,
                                         in boolean canBubbleArg,
                                         in boolean cancelableArg,
                                         in views::AbstractView viewArg,
                                         in DOMString keyIdentifierArg,
                                         in unsigned long keyLocationArg,
                                         in DOMString modifiersList);
    void               initKeyboardEventNS(in DOMString namespaceURI,
                                           in DOMString typeArg,
                                           in boolean canBubbleArg,
                                           in boolean cancelableArg,
                                           in views::AbstractView viewArg,
                                           in DOMString keyIdentifierArg,
                                           in unsigned long keyLocationArg,
                                           in DOMString modifiersList);
  };

  // Introduced in DOM Level 2:
  interface MutationEvent : Event {

    // attrChangeType
    const unsigned short      MODIFICATION                   = 1;
    const unsigned short      ADDITION                       = 2;
    const unsigned short      REMOVAL                        = 3;

    readonly attribute Node            relatedNode;
    readonly attribute DOMString       prevValue;
    readonly attribute DOMString       newValue;
    readonly attribute DOMString       attrName;
    readonly attribute unsigned short  attrChange;
    void               initMutationEvent(in DOMString typeArg,
                                         in boolean canBubbleArg,
                                         in boolean cancelableArg,
                                         in Node relatedNodeArg,
                                         in DOMString prevValueArg,
                                         in DOMString newValueArg,
                                         in DOMString attrNameArg,
                                         in unsigned short attrChangeArg);
    // Introduced in DOM Level 3:
    void               initMutationEventNS(in DOMString namespaceURI,
                                           in DOMString typeArg,
                                           in boolean canBubbleArg,
                                           in boolean cancelableArg,
                                           in Node relatedNodeArg,
                                           in DOMString prevValueArg,
                                           in DOMString newValueArg,
                                           in DOMString attrNameArg,
                                           in unsigned short attrChangeArg);
  };

  // Introduced in DOM Level 3:
  interface MutationNameEvent : MutationEvent {
    readonly attribute DOMString       prevNamespaceURI;
    readonly attribute DOMString       prevNodeName;
    // Introduced in DOM Level 3:
    void               initMutationNameEvent(in DOMString typeArg,
                                             in boolean canBubbleArg,
                                             in boolean cancelableArg,
                                             in Node relatedNodeArg,
                                             in DOMString prevNamespaceURIArg,
                                             in DOMString prevNodeNameArg);
    // Introduced in DOM Level 3:
    void               initMutationNameEventNS(in DOMString namespaceURI,
                                               in DOMString typeArg,
                                               in boolean canBubbleArg,
                                               in boolean cancelableArg,
                                               in Node relatedNodeArg,
                                               in DOMString prevNamespaceURIArg,
                                               in DOMString prevNodeNameArg);
  };
};

#endif // _EVENTS_IDL_
*/

exports.dom = {
  level3 : {
    events:  events
  }
}
