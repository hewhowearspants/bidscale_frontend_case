import React, { useReducer } from 'react';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { alertTypes } from '../util/constants';

const initialForm = {
  text: '',
  link: '',
  timeLimit: 10,
  alertType: '',
}

const formReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE':
      return {
        ...state,
        [payload.key]: payload.value
      }
    case 'RESET':
      return initialForm;
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

const AlertExample = ({ addAlert }) => {
  const [{ text, link, timeLimit, alertType }, dispatch] = useReducer(formReducer, initialForm);

  const disabled = !text || !timeLimit || !alertType;

  function submitAlert() {
    addAlert({
      text,
      link,
      timeLimit,
      alertType,
      id: Date.now(),
    });
    dispatch({ type: 'RESET' });
  }

  return (
    <div className="alert-example">
      <div className="alert-example-form">
        <TextField
          className='form-field'
          label='Text'
          value={text}
          onChange={({ target }) => dispatch({ type: 'UPDATE', payload: { key: 'text', value: target.value }})}
        />
        <TextField
          className='form-field'
          label='Link'
          value={link}
          onChange={({ target }) => dispatch({ type: 'UPDATE', payload: { key: 'link', value: target.value }})}
        />
        <TextField
          className='form-field'
          label='Time Limit (in seconds)'
          type='number'
          value={timeLimit}
          onChange={({ target }) => dispatch({ type: 'UPDATE', payload: { key: 'timeLimit', value: target.value }})}
        />
        <TextField
          className='form-field'
          select={true}
          label='Alert Type'
          value={alertType}
          onChange={({ target }) => dispatch({ type: 'UPDATE', payload: { key: 'alertType', value: target.value }})}
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
          onClick={submitAlert}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default AlertExample;