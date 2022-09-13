import './App.css';
import AlertExample from './alert/AlertExample';
import AlertManager from './alert/AlertManager';

import { useAlertReducer } from './alert/AlertManager';

function App() {
  const { state, addAlert, removeAlert } = useAlertReducer();

  return (
    <div className="App">
      <AlertExample addAlert={addAlert} />
      <AlertManager alerts={state.alerts} removeAlert={removeAlert} />
    </div>
  );
}

export default App;
