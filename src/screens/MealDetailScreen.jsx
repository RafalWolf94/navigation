﻿import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/mealDetail/Subtitle';
import List from '../components/mealDetail/List';
import {useLayoutEffect} from 'react';
import IconButton from '../components/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../../store/redux/favorites';

function MealDetailScreen({route, navigation}) {
    // const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    let mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            dispatch(removeFavorite({id: mealId}));
        } else {
            dispatch(addFavorite({id: mealId}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon={mealIsFavorite ? 'star' : 'star-outline'}
                        color="white"
                        onPress={changeFavoriteStatusHandler}
                    />
                );
            },
        });
    }, [navigation, changeFavoriteStatusHandler]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{uri: selectedMeal.imageUrl}}
                style={styles.image}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                textStyle={styles.detailText}
                style={{color: 'white'}}
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}/>
            <View style={styles.listContainer}>
                <View style={styles.innerListContainer}>
                    <Subtitle children={'Ingredients:'}/>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle children={'Steps:'}/>
                    <List data={selectedMeal.steps}/>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;


const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 22,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    innerListContainer: {
        maxWidth: '80%',
    },
    listContainer: {
        alignItems: 'center',
    }

});