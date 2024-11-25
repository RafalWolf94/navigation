import {configureStore} from '@reduxjs/toolkit';

import favoriteMealsReducer from './favorites';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteMealsReducer
    }
});