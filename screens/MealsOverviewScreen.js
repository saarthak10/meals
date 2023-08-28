import { StyleSheet, View, FlatList } from 'react-native'
import { Meals } from '../data/dummy-data';

function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId
    const displayedMeals = Meals.filter
    return (
        <View>
            <FlatList 
            data={displayedMeals}
            keyExtractor = {(meal)=> meal.id}
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