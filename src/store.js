// store.js
//The below code create the global Redux store so all components in the application can access the state managed by the venueReducer()
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';

//Create the Redux Store with the configureStore function
//Include venue() reducer
export default configureStore({
  reducer: {
    venue: venueReducer,
  },
});


