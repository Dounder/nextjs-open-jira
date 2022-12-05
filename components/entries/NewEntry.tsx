import { Box, Button, TextField } from '@mui/material';
import { ChangeEvent, useContext, useState } from 'react';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setInputValue(evt.target.value);

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    setInputValue('');
    setTouched(false);
    setIsAddingEntry(false);
  };

  return (
    <Box sx={{ margin: '1vmin 0', padding: '0 1vmin' }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ margin: '1vmin 0' }}
            placeholder="New Entry"
            autoFocus
            multiline
            label="New Entry"
            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={onTextFieldChange}
            onBlur={() => setTouched(true)}
          />

          <Box display="flex" justifyContent="flex-end" gap={1}>
            <Button variant="text" onClick={() => setIsAddingEntry(false)}>
              Cancel
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddBoxOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          New Entry
        </Button>
      )}
    </Box>
  );
};
