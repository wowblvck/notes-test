import { useAppSelector } from "@/store/app.hook";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Note } from "..";
import { NoteActionTypes } from "../notes.reducer";

type FormValues = {
  title: string;
  body: string;
  important: boolean;
};

type EditNoteFormProps = {
  note: Note;
  closeModal: () => void;
};

const EditNoteForm: React.FC<EditNoteFormProps> = ({ note, closeModal }) => {
  const { dispatch } = useAppSelector();

  const { control, reset, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      body: note.body,
      title: note.title,
      important: note.important,
    },
  });

  const onSubmit = (data: FormValues) => {
    dispatch({
      type: NoteActionTypes.Update,
      payload: { ...data, id: note.id },
    });
    reset({ body: "", title: "", important: false });
    closeModal();
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        marginBottom={2}
      >
        Редактировать записку
      </Typography>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <TextField
            {...field}
            inputRef={ref}
            id="edit-title-form"
            label="Заголовок"
            variant="outlined"
            margin="dense"
            required
            fullWidth
          />
        )}
      />
      <Controller
        name="body"
        control={control}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <TextField
            {...field}
            inputRef={ref}
            id="edit-body-form"
            label="Описание"
            margin="dense"
            fullWidth
            multiline
            required
            rows={4}
          />
        )}
      />
      <Controller
        name="important"
        control={control}
        render={({ field: { onChange, value, ref, ...field } }) => (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  inputRef={ref}
                  onChange={onChange}
                  checked={value}
                />
              }
              label="Важная"
            />
          </FormGroup>
        )}
      />
      <Stack direction="row" justifyContent="space-between">
        <Button type="button" variant="text" onClick={() => reset()}>
          Вернуть
        </Button>
        <Button type="submit" variant="text">
          Редактировать
        </Button>
      </Stack>
    </form>
  );
};

export default EditNoteForm;
