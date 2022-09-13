import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';

const AlertComponent = ({ text, link, timeLimit, id, alertTitle, alertType, removeAlert }) => (
  <Snackbar
    className='alert-component'
    key={id}
    open={true}
    autoHideDuration={timeLimit}
    onClose={(event, reason) => {
      if (reason === 'clickaway') return;
      removeAlert(id);
    }}
    anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
  >
    <Alert severity={alertType} onClose={() => removeAlert(id)}>
      {alertTitle && <h4>{alertTitle}</h4>}
      {link ? <Link underline='hover' href={link}>{text}</Link> : text }
    </Alert> 
  </Snackbar>
)

export default AlertComponent;