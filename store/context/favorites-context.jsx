import {createContext, useState} from 'react';


export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {
    },
    removeFavorite: (id) => {
    }
});

function FavoritesContextProvider({children}) {
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

    function addFavoriteMeal(id) {
        setFavoriteMealsIds(mealsIds => [...mealsIds, id]);
    }

    function removeFavoriteMeal(id) {
        setFavoriteMealsIds(mealsIds => mealsIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavoriteMeal,
        removeFavorite: removeFavoriteMeal,
    };

    return <FavoritesContext.Provider
        value={value}>
        {children}
    </FavoritesContext.Provider>;
}

export default FavoritesContextProvider;