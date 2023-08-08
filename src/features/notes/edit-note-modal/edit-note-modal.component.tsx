import { CSSObject } from "@emotion/react";
import { Box, Modal } from "@mui/material";
import { EditNoteForm, Note } from "..";

const style: CSSObject = {
  position: "fixed" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  bgcolor: "background.paper",
  boxShadow: "24",
  p: 4,
};

type EditNoteModal = {
  note: Note;
  closeModal: () => void;
};

const EditNoteModal: React.FC<EditNoteModal> = ({ note, closeModal }) => {
  return (
    <Modal
      open={true}
      onClose={closeModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>
        <EditNoteForm note={note} closeModal={closeModal} />
      </Box>
    </Modal>
  );
};

export default EditNoteModal;
