import { useAppSelector } from '@/store/app.hook';
import { Alert, Container, Grid } from '@mui/material';
import React from 'react';
import { FilterControl } from '..';
import NoteItem from './note-item.component';

const NoteList = () => {
  const {
    state: { notes, filters },
  } = useAppSelector();

  const sortedNotes = React.useMemo(() => {
    if (filters.important) {
      return [...notes].sort((a, b) => (a.important === b.important ? 0 : a.important ? -1 : 1));
    }
    return notes;
  }, [notes, filters.important]);

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {!notes.length ? (
        <Alert variant="outlined" severity="info">
          Нажмите на &quot;+&quot; в нижней части экрана и создайте свою первую заметку
        </Alert>
      ) : (
        <>
          <FilterControl />
          <Grid container spacing={4}>
            {sortedNotes.map((note) => (
              <NoteItem key={note.id} note={note} />
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default NoteList;
