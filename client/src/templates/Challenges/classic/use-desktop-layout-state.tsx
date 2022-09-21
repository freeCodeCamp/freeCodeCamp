import { useReducer } from 'react';

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
  [DesktopLayoutPanels.PreviewPortal]: true,
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

const layoutReducer = (
  state: DesktopLayoutState,
  panel: DesktopLayoutPanels
) => {
  const nextState = {
    ...state,
    [panel]: !state[panel]
  };

  if (panel === DesktopLayoutPanels.PreviewPane && nextState[DesktopLayoutPanels.PreviewPane] && nextState[DesktopLayoutPanels.PreviewPortal]) {
    nextState[DesktopLayoutPanels.PreviewPortal] = false;
  }

  if (panel === DesktopLayoutPanels.PreviewPortal && nextState[DesktopLayoutPanels.PreviewPortal] && nextState[DesktopLayoutPanels.PreviewPane]) {
    nextState[DesktopLayoutPanels.PreviewPane] = false;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));

  return nextState;
};

export const useDesktopLayoutState = () => {
  const [layoutState, dispatch] = useReducer(
    layoutReducer,
    readFromStorage(defaultLayoutState)
  );

  return {
    layoutState,
    togglePane: dispatch
  };
};
