import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers';
import {Provider} from 'react-redux';
import {getAllProduct} from './actions';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux'

const middleware = [thunk];
const store = createStore(reducer,
    applyMiddleware(...middleware)
  )

  store.dispatch(getAllProduct())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
