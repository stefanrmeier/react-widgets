import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form'


import FormController from './form/FormController'

const reducer = combineReducers({
  form: formReducer
})

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <div style={{ minWidth: '100%' }}>
      <FormController />
    </div>
  </Provider>, document.getElementById('app'));