import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import cartReducer, { GetcartTotal } from './features/cartSlice'; 

const store = configureStore({
  reducer:{
    cartSli: cartReducer,
  },
});
store.dispatch(GetcartTotal())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
reportWebVitals();
