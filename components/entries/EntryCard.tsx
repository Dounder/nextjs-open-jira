import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { DragEvent, FC, PropsWithChildren, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces';

interface Props extends PropsWithChildren {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { setDragging } = useContext(UIContext);

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id);
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
  };

  return (
    <Card
      sx={{ marginBottom: '1vmin' }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            {entry.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            displaf: 'flex',
            justifyContent: 'flex-end',
            padding: '1vmin',
          }}
        >
          <Typography variant="body2">30 minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
