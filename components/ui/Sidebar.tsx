import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

const menuItems = ['Inbox', 'Starred', 'Send Email', 'Draft'];

export const Sidebar = () => {
  const { sidemenuOpen, toggleMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={toggleMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: '1vmin 2vmin' }}>
          <Typography variant="h4">Menu</Typography>

          <List>
            {menuItems.map((text, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  {index % 2 ? (
                    <InboxOutlinedIcon />
                  ) : (
                    <MailOutlineOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>

          <Divider />

          <List>
            {menuItems.map((text, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  {index % 2 ? (
                    <InboxOutlinedIcon />
                  ) : (
                    <MailOutlineOutlinedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};
