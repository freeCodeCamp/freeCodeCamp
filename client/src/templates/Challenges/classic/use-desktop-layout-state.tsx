import { useReducer, useRef } from 'react';

const STORAGE_KEY = 'fcc:desktop:layout:state';

export enum DesktopLayoutPanels {
  Instructions = 'showInstructions',
  Notes = 'showNotes',
  PreviewPane = 'showPreviewPane',
  PreviewPortal = 'showPreviewPortal',
  Console = 'showConsole'
}

interface DesktopLayoutState {
  [DesktopLayoutPanels.Instructions]: boolean;
  [DesktopLayoutPanels.Notes]: boolean;
  [DesktopLayoutPanels.PreviewPane]: boolean;
  [DesktopLayoutPanels.PreviewPortal]: boolean;
  [DesktopLayoutPanels.Console]: boolean;
}

const defaultLayoutState: DesktopLayoutState = {
  [DesktopLayoutPanels.Instructions]: true,
  [DesktopLayoutPanels.Notes]: false,
  [DesktopLayoutPanels.PreviewPane]: true,
  [DesktopLayoutPanels.PreviewPortal]: false,
  [DesktopLayoutPanels.Console]: false
};

const readFromStorage = (
  defaultState: DesktopLayoutState
): DesktopLayoutState => {
  const lsData = localStorage.getItem(STORAGE_KEY);

  try {
    return (JSON.parse(lsData ?? '') as DesktopLayoutState) || defaultState;
  } catch {
    return defaultState;
  }
};

type LayoutReducerAction =
  | DesktopLayoutPanels
  | {
      panel: DesktopLayoutPanels;
      setVisible: boolean;
    };

const layoutReducer = (
  state: DesktopLayoutState,
  action: LayoutReducerAction
) => {
  let panel: DesktopLayoutPanels,
    setVisible = undefined;
  if (typeof action === 'string') {
    panel = action;
  } else {
    panel = action.panel;
    setVisible = action.setVisible;
  }

  const nextState = {
    ...state,
    [panel]: setVisible ?? !state[panel]
  };

  if (
    panel === DesktopLayoutPanels.PreviewPane &&
    nextState[DesktopLayoutPanels.PreviewPane] &&
    nextState[DesktopLayoutPanels.PreviewPortal]
  ) {
    nextState[DesktopLayoutPanels.PreviewPortal] = false;
  }

  if (
    panel === DesktopLayoutPanels.PreviewPortal &&
    nextState[DesktopLayoutPanels.PreviewPortal] &&
    nextState[DesktopLayoutPanels.PreviewPane]
  ) {
    nextState[DesktopLayoutPanels.PreviewPane] = false;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));

  return nextState;
};

export const useDesktopLayoutState = () => {
  const initState = useRef(readFromStorage(defaultLayoutState));

  const [layoutState, dispatch] = useReducer(layoutReducer, initState.current);

  return {
    layoutState,
    togglePane: dispatch
  };
};
