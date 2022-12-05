import { createContext } from 'react';

export interface UIContextProps {
  //? Props
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  //! Methods
  toggleMenu: () => void;
  setIsAddingEntry: (isAdding: boolean) => void;
  setDragging: (isDraggin: boolean) => void;
}

export const UIContext = createContext({} as UIContextProps);
