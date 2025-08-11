import { Dimensions, Image, StyleSheet, View } from "react-native"
import Animated from "react-native-reanimated"


const { width } = Dimensions.get("window")
const itemWidth = width * 0.62
const itemHeight = itemWidth * 1.67

const Images = ({ image }) => {
    return (
        <>
            <Animated.View style={[styles.container]}>
                <Image
                    source={image}
                    style={styles.image}
                />
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    image: {
        width: itemWidth,
        height: itemHeight,
        flex: 1,
        borderRadius: 16,
    }
})

export default Images