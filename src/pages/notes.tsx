import { NoteList } from '@features/notes';
import { CreateNoteModal } from '@features/notes';

const NotesPage = () => {
  return (
    <>
      <NoteList />
      <CreateNoteModal />
    </>
  );
};

export default NotesPage;
