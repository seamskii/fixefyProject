import React from 'react';
import { TextField } from '@mui/material';

export const TotalTitle = ({ space = '70px' }) => {
  const textFields = [
    { defaultValue: '$191,103.12', helperText: 'Total' },
    { defaultValue: '$173,103.12', helperText: 'Fair Value' },
    { defaultValue: '$173,103.12', helperText: 'Difference' },
    { defaultValue: '12%', helperText: 'Variance' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      {textFields.map((textField, index) => (
        <div key={index} style={{ marginRight: index === textFields.length - 1 ? '40px' : space }}>
          <TextField
            variant="standard"
            InputProps={{
              disableUnderline: true,
              readOnly: true,
              style: {
                border: 'none',
                borderRadius: 0,
                width: index === textFields.length - 1 ? '40px' : '100px',
              },
            }}
            InputLabelProps={{
              style: {
                display: 'none',
              },
            }}
            defaultValue={textField.defaultValue}
            helperText={textField.helperText}
            FormHelperTextProps={{
              sx: { color: '#8B9092' },
            }}
          />
        </div>
      ))}
    </div>
  );
};
