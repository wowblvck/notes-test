import { CSSObject } from '@emotion/react';
import { Box, Fab, Modal } from '@mui/material';
import { CreateNoteForm } from '..';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const style: CSSObject = {
  position: 'fixed' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  bgcolor: 'background.paper',
  boxShadow: '24',
  p: 4,
};

const CreateNoteModal = () => {
  const [showModal, setShowModal] = React.useState(false);

  const toggleModal = () => setShowModal(!showModal);
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        onClick={toggleModal}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={showModal}
        onClose={toggleModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <CreateNoteForm closeModal={toggleModal} />
        </Box>
      </Modal>
    </>
  );
};

export default CreateNoteModal;
