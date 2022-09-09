import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { alertTypes } from '../util/constants';

const AlertExample = (props) => {
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [timeLimit, setTimeLimit] = useState('');
  const [alertType, setAlertType] = useState('');

  const disabled = !text || !link || !timeLimit || !alertType;

  return (
    <div className="alert-example">
      <div className="alert-example-form">
        <TextField
          className='form-field'
          label='Text'
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
        <TextField
          className='form-field'
          label='Link'
          value={link}
          onChange={({ target }) => setLink(target.value)}
        />
        <TextField
          className='form-field'
          label='Time Limit'
          value={timeLimit}
          onChange={({ target }) => setTimeLimit(target.value)}
        />
        <TextField
          className='form-field'
          select={true}
          label='Alert Type'
          value={alertType}
          onChange={({ target }) => setAlertType(target.value)}
        >
          {alertTypes.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="alert-example-buttons">
        <Button
          disabled={disabled}
          variant='contained'
          onClick={() => {
            console.log(text, link, timeLimit, alertType);
            // do dispatch stuff here
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default AlertExample;