import React from 'react';
import AlertComponent from './AlertComponent';

export * from './alertManager/alertReducer';

const AlertManager = ({ alerts, removeAlert }) => {
  return (
    <div className='alert-manager'>
      {Array.from(alerts).map(([key, value]) => (
        <AlertComponent key={key} removeAlert={removeAlert} { ...value } />
      ))}
    </div>
  )
}

export default AlertManager;