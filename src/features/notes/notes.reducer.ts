import ActionMap from '@/utils/helperTypes';
import { Note } from '.';

export enum NoteActionTypes {
  Add = 'ADD_NOTE',
  Set = 'SET_NOTES',
  Update = 'UPDATE_NOTE',
  Delete = 'DELETE_NOTE',
}

type NotePayload = {
  [NoteActionTypes.Set]: Note[];
  [NoteActionTypes.Add]: Note;
  [NoteActionTypes.Update]: Note;
  [NoteActionTypes.Delete]: {
    id: string;
  };
};

export type NoteActions = ActionMap<NotePayload>[keyof ActionMap<NotePayload>];

const notesReducer = (state: Note[], action: NoteActions) => {
  switch (action.type) {
    case NoteActionTypes.Set:
      return action.payload;
    case NoteActionTypes.Add:
      return [...state, action.payload];
    case NoteActionTypes.Update: {
      const updatedNote = action.payload;
      return state.map((note) => (note.id === updatedNote.id ? updatedNote : note));
    }
    case NoteActionTypes.Delete:
      return [...state.filter((note) => note.id !== action.payload.id)];
    default:
      return state;
  }
};

export default notesReducer;
