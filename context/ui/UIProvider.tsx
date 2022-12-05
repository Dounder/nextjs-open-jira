import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleMenu = () =>
    state.sidemenuOpen
      ? dispatch({ type: '[UI] - Close Sidebar' })
      : dispatch({ type: '[UI] - Open Sidebar' });

  const setIsAddingEntry = (isAdding: boolean) =>
    dispatch({ type: '[UI] - toggle is adding', payload: isAdding });

  const setDragging = (isDraggin: boolean) =>
    dispatch({ type: '[UI] - toggle dragging', payload: isDraggin });

  return (
    <UIContext.Provider
      value={{
        //? Props
        ...state,
        //! Methods
        toggleMenu,
        setIsAddingEntry,
        setDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
