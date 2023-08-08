import { FilterControlState, Note, filterReducer } from '@features/notes';
import { FilterActions } from '@features/notes/filter-control/filter-control.reducer';
import notesReducer, { NoteActions } from '@features/notes/notes.reducer';
import React from 'react';

type InitialStateType = {
  notes: Note[];
  filters: FilterControlState;
};

const initialState: InitialStateType = {
  notes: [],
  filters: {
    important: false,
  },
};

const loadStateFromLocalStorage = (): InitialStateType | null => {
  const serializedState = localStorage.getItem('appState');
  if (serializedState) {
    return JSON.parse(serializedState) as InitialStateType;
  }
  return null;
};

const saveStateToLocalStorage = (state: InitialStateType): void => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('appState', serializedState);
};

const AppContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<NoteActions | FilterActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

type MainReducerActions = NoteActions | FilterActions;

const mainReducer = (
  { notes, filters }: InitialStateType,
  action: MainReducerActions
): InitialStateType => ({
  notes: notesReducer(notes, action as NoteActions),
  filters: filterReducer(filters, action as FilterActions),
});

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const currentState: InitialStateType = loadStateFromLocalStorage() || initialState;
  const [state, dispatch] = React.useReducer(mainReducer, currentState);

  React.useEffect(() => {
    saveStateToLocalStorage(state);
  }, [state]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
