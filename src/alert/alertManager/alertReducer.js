import { useReducer } from "react";

export const actions = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}; 

export const useAlertReducer = () => {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case actions.ADD:
      case actions.REMOVE:
        return { ...state, alerts: payload }
      default:
        throw new Error(`Unknown action type: ${type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, { alerts: new Map() });

  const addAlert = (alertPayload) => {
    const newAlerts = new Map(state.alerts);
    let { id } = alertPayload;
    
    if (!id) {
      id = Date.now();
      alertPayload.id = id;
    }

    alertPayload.timeLimit *= 1000;

    newAlerts.set(id, alertPayload);

    dispatch({ type: actions.ADD, payload: newAlerts });
  }

  const removeAlert = (id) => {
    const newAlerts = new Map(state.alerts);

    newAlerts.delete(id);

    dispatch({ type: actions.REMOVE, payload: newAlerts });
  }

  return { state, addAlert, removeAlert };
}