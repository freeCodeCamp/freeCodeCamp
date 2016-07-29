import { Subject, Observable } from 'rx';
import Chat from 'gitter-sidecar';
import types from '../../common/app/redux/types';
import {
  openHelpChat,
  closeHelpChat,
  toggleMainChat
} from '../../common/app/redux/actions';

export function createHeader(room, title, document) {
  const type = room === 'freecodecamp' ? 'main' : 'help';
  const div = document.createElement('div');
  const span = document.createElement('span');
  const actionBar = document.querySelector(
    `#chat-embed-${type}> .gitter-chat-embed-action-bar`
  );
  span.appendChild(document.createTextNode(title));
  div.className = `chat-embed-${type}-title`;
  div.appendChild(span);
  actionBar.insertBefore(div, actionBar.firstChild);
}

export function createHelpContainer(document) {
  const container = document.createElement('aside');
  container.id = 'chat-embed-help';
  container.className = 'gitter-chat-embed is-collapsed';
  document.body.appendChild(container);
  return container;
}

export function createMainChat(getState, document) {
  let mainChatTitleAdded = false;
  const mainChatContainer = document.createElement('aside');
  mainChatContainer.id = 'chat-embed-main';
  mainChatContainer.className = 'gitter-chat-embed is-collapsed';
  document.body.appendChild(mainChatContainer);
  const mainChat = new Chat({
    room: 'freecodecamp/freecodecamp',
    activationElement: false,
    targetElement: mainChatContainer
  });

  const toggle$ = Observable.fromEventPattern(
    h => mainChatContainer.addEventListener('gitter-chat-toggle', h),
    h => mainChatContainer.removeEventListener('gitter-chat-toggle', h)
  )
    .map(e => {
      const { isMainChatOpen } = getState().app;
      if (!mainChatTitleAdded) {
        mainChatTitleAdded = true;
        createHeader('freecodecamp', 'Free Code Camp\'s Main Chat', document);
      }
      if (isMainChatOpen === e.detail.state) {
        return null;
      }
      return toggleMainChat();
    });
  return {
    mainChat,
    toggle$
  };
}

// only one help room may be alive at once
export function createHelpChat(room, container, proxy, document) {
  const title = room.replace(/([A-Z])/g, ' $1');
  let isTitleAdded = false;
  const chat = new Chat({
    room: `freecodecamp/${room}`,
    activationElement: false,
    targetElement: container
  });
  // return subscription to toggle stream
  // dispose when rooms switch
  const subscription = Observable.fromEventPattern(
    h => container.addEventListener('gitter-chat-toggle', h),
    h => container.removeEventListener('gitter-chat-toggle', h)
  )
    .map(e => {
      if (!isTitleAdded) {
        isTitleAdded = true;
        createHeader(room, title, document);
      }
      const gitterState = e.detail.state;
      return gitterState ? openHelpChat() : closeHelpChat();
    })
    // use subject proxy to dispatch actions
    .subscribe(proxy);
  return { chat, subscription };
}

export const cache = {};
export function toggleHelpChat(isOpen, room, proxy, document) {
  // check is container is already created
  if (!cache['container']) {
    cache['container'] = createHelpContainer(document);
  }
  const { container } = cache;
  if (!cache['chat']) {
    const {
      chat,
      subscription
    } = createHelpChat(room, container, proxy, document);
    cache.chat = chat;
    // make sure we clear out old subscription
    if (cache.subscription && cache.subscription.dispose) {
      cache.subscription.dispose();
    }
    cache.subscription = subscription;
    cache.currentRoom = room;
  }
  // have we switched rooms?
  if (!cache.currentRoom === room) {
    // room has changed, if chat object exist, destroy it
    // and end subscription to toggle
    try {
      cache.chat.destroy();
      cache.subscription.dispose();
    // chat and subscription may not exist at first so we catch errors here
    } catch (err) {
      console.error(err);
    }
    // create new chat room and cache
    const {
      chat,
      subscription
    } = createHelpChat(room, container, proxy, document);
    cache.chat = chat;
    cache.subscription = subscription;
    cache.currentRoom = room;
  }
  // all goes well pull chat object from cache
  const { chat } = cache;
  chat.toggleChat(isOpen);
}

export default function gitterSaga(actions$, getState, { document }) {
  const helpToggleProxy = new Subject();
  const {
    mainChat,
    toggle$: mainChatToggle$
  } = createMainChat(getState, document);
  return Observable.merge(
    mainChatToggle$,
    helpToggleProxy,
    actions$
      .filter(({ type }) => (
        type === types.openMainChat ||
        type === types.closeMainChat ||
        type === types.toggleMainChat ||
        type === types.toggleHelpChat
      ))
      .map(({ type }) => {
        const state = getState();
        let shouldBlur = false;
        if (type === types.toggleHelpChat) {
          const {
            app: { isHelpChatOpen },
            challengesApp: { helpChatRoom }
          } = state;
          shouldBlur = !isHelpChatOpen;
          toggleHelpChat(
            isHelpChatOpen,
            helpChatRoom,
            helpToggleProxy,
            document
          );
        }
        const { isMainChatOpen } = state.app;
        mainChat.toggleChat(isMainChatOpen);
        shouldBlur = !isMainChatOpen;
        if (!shouldBlur) {
          document.activeElement.blur();
        }
        return null;
      })
  );
}
