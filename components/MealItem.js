import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Pressable, View, Text, Image } from "react-native"
import MealDetails from "./MealDetails";


function MealItem({ itemData, onPress }) {
    const navigation = useNavigation();


    function selectMealItemHandler() {
        navigation.navigate('Meal Detail', { mealItem:itemData.item})
    }
    return (
        <View style={styles.MealItem}>
            <Pressable onPress={selectMealItemHandler}>
                <View >
                    <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>
                        {itemData.item.title}
                    </Text>
                </View>
                <MealDetails  duration={itemData.item.duration}  
                complexity = {itemData.item.complexity}
                affordability = { itemData.item.affordability}
                />

            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    MealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,

    },
    image: {
        width: '100%',
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8
    },

})