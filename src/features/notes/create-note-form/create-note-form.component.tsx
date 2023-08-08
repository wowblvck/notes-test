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
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "@/store/app.hook";
import { NoteActionTypes } from "../notes.reducer";

type FormValues = {
  title: string;
  body: string;
  important: boolean;
};

type CreateNoteFormProps = {
  closeModal: () => void;
};

const CreateNoteForm: React.FC<CreateNoteFormProps> = ({ closeModal }) => {
  const { dispatch } = useAppSelector();

  const { control, reset, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      body: "",
      title: "",
      important: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    dispatch({
      type: NoteActionTypes.Add,
      payload: { ...data, id: uuidv4() },
    });
    reset();
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
        Создать записку
      </Typography>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field: { ref, ...field } }) => (
          <TextField
            {...field}
            inputRef={ref}
            id="create-title-form"
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
            id="create-body-form"
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
        render={({ field: { ref, onChange, value, ...field } }) => (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  onChange={onChange}
                  checked={value}
                  inputRef={ref}
                />
              }
              label="Важная"
            />
          </FormGroup>
        )}
      />

      <Stack direction="row" justifyContent="space-between">
        <Button type="button" variant="text" onClick={() => reset()}>
          Очистить
        </Button>
        <Button type="submit" variant="text">
          Добавить
        </Button>
      </Stack>
    </form>
  );
};

export default CreateNoteForm;
