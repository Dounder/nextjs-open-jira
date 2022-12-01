import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { UIContext } from '../../context/ui';

export const Navbar: FC = () => {
  const { toggleMenu } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          sx={{ marginRight: '1vmin' }}
          onClick={toggleMenu}
        >
          <MenuOutlinedIcon />
        </IconButton>

        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
