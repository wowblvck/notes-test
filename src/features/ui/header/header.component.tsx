import { AppBar, Toolbar, Typography } from '@mui/material';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <ChecklistRtlIcon sx={{ mr: 2 }}></ChecklistRtlIcon>
        <Typography variant="h6" color="inherit" noWrap>
          Мои. Заметки
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
