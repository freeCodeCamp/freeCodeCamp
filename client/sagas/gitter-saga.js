import { Observable } from 'rx';
import Chat from 'gitter-sidecar';
import types from '../../common/app/redux/types';

function createHeader(document) {
  const div = document.createElement('div');
  const span = document.createElement('span');
  const actionBar = document.querySelector(
    '#chat-embed-main > .gitter-chat-embed-action-bar'
  );
  span.appendChild(document.createTextNode('Free Code Camp\'s Main Chat'));
  div.className = 'chat-embed-main-title';
  div.appendChild(span);
  actionBar.insertBefore(div, actionBar.firstChild);
}

export default function gitterSaga(actions$, getState, { document }) {
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

  const mainChatToggle$ = Observable.fromEventPattern(
    h => mainChatContainer.addEventListener('gitter-chat-toggle', h),
    h => mainChatContainer.removeEventListener('gitter-chat-toggle', h)
  )
    .map(e => {
      const { isMainChatOpen } = getState().app;
      if (!mainChatTitleAdded) {
        mainChatTitleAdded = true;
        createHeader(document);
      }
      if (isMainChatOpen === e.detail.state) {
        return null;
      }
      return { type: types.toggleMainChat };
    });
  return Observable.merge(
    mainChatToggle$,
    actions$
      .filter(({ type }) => (
        type === types.openMainChat ||
        type === types.closeMainChat ||
        type === types.toggleMainChat
      ))
      .map(() => {
        const { isMainChatOpen } = getState().app;
        mainChat.toggleChat(isMainChatOpen);
        if (!isMainChatOpen) {
          document.activeElement.blur();
        }
        return null;
      })
  );
}
