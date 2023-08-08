import { useAppSelector } from "@/store/app.hook";
import { EditNoteModal, Note } from "@features/notes";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { NoteActionTypes } from "../notes.reducer";
import { useCallback } from "react";
import React from "react";

type NoteItemProps = {
  note: Note;
};

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const { dispatch } = useAppSelector();
  const [showEditModal, setShowEditModal] = React.useState(false);

  const handleDelete = useCallback(
    (note: Note) => {
      dispatch({ type: NoteActionTypes.Delete, payload: { id: note.id } });
    },
    [dispatch]
  );

  const toggleModal = () => setShowEditModal(!showEditModal);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          {note.important && (
            <Typography color="green" variant="overline">
              ВАЖНОЕ
            </Typography>
          )}
          <Typography
            style={{ overflowWrap: "break-word" }}
            variant="h5"
            component="h2"
          >
            {note.title}
          </Typography>
          <Typography
            style={{ overflowWrap: "break-word" }}
            marginTop={1}
            color="text.secondary"
          >
            {note.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Tooltip title="Редактировать">
            <IconButton onClick={toggleModal}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить">
            <IconButton onClick={() => handleDelete(note)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      {showEditModal && <EditNoteModal note={note} closeModal={toggleModal} />}
    </Grid>
  );
};

export default NoteItem;
