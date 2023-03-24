import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import cartReducer, { GetcartTotal } from './features/cartSlice'; 

// create a store by using this configureStore, inside the reducer that we are using needs to be register to ferform any operation on store data
// to make the store universial we need to provide it by provider wiht of it's attribute store
const store = configureStore({
  reducer:{
    cartSli: cartReducer,
  },
//   as i havn't used any middleware so i have not added the middleware object as i have used reactDev tool to see the state changes else logger we can use 
});
store.dispatch(GetcartTotal())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
reportWebVitals();
