import { createContext } from 'react';

export interface UIContextProps {
  //? Props
  sidemenuOpen: boolean;

  //! Methods
  toggleMenu: () => void;
}

export const UIContext = createContext({} as UIContextProps);
