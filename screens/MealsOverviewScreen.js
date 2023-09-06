import { useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem'

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId
    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    });

    useEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation])

    function renderMealItem(itemData) {

        // function onPressHandler(){ We can set the click this way to the detail screen, another way to handle it from MealItem component only usong useNavigation hook
        //     navigation.navigate('Meal Detail',{mealItem: itemData.item})
        // }

        return <MealItem itemData={itemData} 
        //onPress={onPressHandler} 
        />
    }
  
    return (
        <View>
            <FlatList
                data={displayedMeals}
                keyExtractor={(meal) => meal.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    mealsView: {
        flex: 1,
        padding: 16
    }
})