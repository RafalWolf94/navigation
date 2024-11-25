import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from './MealItem';

export function MealDetail({items}) {

    function renderMealOverview(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            description: item.description,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity,
        };
        return <MealItem {...mealItemProps} />;
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealOverview}
            />
        </View>
    );
}

export default MealDetail;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
    }
});