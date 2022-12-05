import { FC, PropsWithChildren, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { v4 as uuidV4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidV4(),
      description: 'pending: Elit et est laborum nisi nostrud dolore.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidV4(),
      description: 'progress: Consectetur nulla veniam qui.',
      status: 'in-progress',
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuidV4(),
      description: 'finished: Ipsum laborum anim magna exercitation magna.',
      status: 'finished',
      createdAt: Date.now() - 100000000,
    },
  ],
};

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) =>
    dispatch({
      type: '[Entry] - add entry',
      payload: {
        _id: uuidV4(),
        description,
        createdAt: Date.now(),
        status: 'pending',
      },
    });

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - update entry', payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        //? Props
        ...state,
        //! Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
