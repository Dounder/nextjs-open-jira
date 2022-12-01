import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleMenu = () =>
    state.sidemenuOpen
      ? dispatch({ type: '[UI] - Close Sidebar' })
      : dispatch({ type: '[UI] - Open Sidebar' });

  return (
    <UIContext.Provider
      value={{
        //? Props
        ...state,
        //! Methods
        toggleMenu,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
