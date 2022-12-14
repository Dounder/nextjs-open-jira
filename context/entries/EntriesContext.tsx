import { createContext } from 'react';
import { Entry } from '../../interfaces';

export interface EntriesContextProps {
  //? Props
  entries: Entry[];

  //! Methods
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as EntriesContextProps);
