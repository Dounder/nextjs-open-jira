import { UIState } from './';

type UIActionType =
  | { type: '[UI] - Open Sidebar'; }
  | { type: '[UI] - Close Sidebar'; }
  | { type: '[UI] - toggle is adding'; payload: boolean; }
  | { type: '[UI] - toggle dragging'; payload: boolean; };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

  switch (action.type) {
    case '[UI] - Open Sidebar': return { ...state, sidemenuOpen: true };

    case '[UI] - Close Sidebar': return { ...state, sidemenuOpen: false };

    case '[UI] - toggle is adding': return { ...state, isAddingEntry: action.payload };

    case '[UI] - toggle dragging': return { ...state, isDragging: action.payload };

    default: return state;
  }

};