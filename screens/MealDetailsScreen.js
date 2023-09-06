import { View, Text, Image, StyleSheet } from 'react-native'
import Subtitle from '../components/mealdetail/subtitle';
import MealDetails from '../components/MealDetails';
function MealDetailsScreen({ route }) {
    const mealItem = route.params.mealItem

    return (<View>
        <View>
            <Image style={styles.image} source={{ uri: mealItem.imageUrl }} />
            <Text style={styles.title}> {mealItem.title}</Text>
        </View>
        <View>
            <MealDetails duration={mealItem.duration}
                complexity={mealItem.complexity}
                affordability={mealItem.affordability}
            />
        </View>
        <Subtitle >Ingredients</Subtitle>
        {mealItem.ingredients.map((ingredient) =>
            <Text key={ingredient}>{ingredient}</Text>)}
        <Subtitle>Steps</Subtitle>

        {mealItem.steps.map((step) =>
            <Text key={step}>{step}</Text>)}
    </View>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 350
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8
    },



})