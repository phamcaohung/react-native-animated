import { Dimensions, Image, StyleSheet, View } from "react-native"
import Animated, { interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated"


const {width} = Dimensions.get("screen")
const itemSize = width * 0.24
const spacing = 12

const ImagesSecond = ({ image, index, scrollX }) => {

    const stylez = useAnimatedStyle(() => {
        return {
            borderWidth: 4,
            borderColor: interpolateColor(
                scrollX.value,
                [index - 1, index, index + 1],
                ['transparent', 'white', 'transparent']
            ),
            transform: [{
                translateY: interpolate(
                    scrollX.value,
                    [index - 1, index, index + 1],
                    [itemSize / 3, 0, itemSize / 3]
                )
            }]
        }
    })

    return (
        <Animated.View style={[styles.container, stylez]}>
            <Image
                source={image}
                style={styles.image}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: itemSize / 2,
        width: itemSize - 100,
        height: itemSize,
    },
    container: {
        width: itemSize,
        height: itemSize,
        borderRadius: itemSize / 2
    },
})

export default ImagesSecond