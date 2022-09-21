import { useReducer } from 'react';

const STORAGE_KEY = 'fcc:desktop:layout:state';

export enum DesktopLayoutPanels {
  Instructions = 'showInstructions',
  Notes = 'showNotes',
  Preview = 'showPreview',
  Console = 'showConsole'
}

interface DesktopLayoutState {
  [DesktopLayoutPanels.Instructions]: boolean;
  [DesktopLayoutPanels.Notes]: boolean;
  [DesktopLayoutPanels.Preview]: boolean;
  [DesktopLayoutPanels.Console]: boolean;
}

const defaultLayoutState: DesktopLayoutState = {
  [DesktopLayoutPanels.Instructions]: true,
  [DesktopLayoutPanels.Notes]: false,
  [DesktopLayoutPanels.Preview]: true,
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
