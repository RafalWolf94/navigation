import {CATEGORIES, MEALS} from '../data/dummy-data';
import {useLayoutEffect} from 'react';
import MealList from '../components/MealList';

function MealOverviewScreen({route, navigation}) {
    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => {
        return meal.categoryIds.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title;
        navigation.setOptions({title: categoryTitle});
    }, [categoryId, navigation]);

    return <MealList items={displayedMeals}/>;
}

export default MealOverviewScreen;

