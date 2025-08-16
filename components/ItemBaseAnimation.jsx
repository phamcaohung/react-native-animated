import { Animated, StyleSheet, Text, TouchableOpacity, View } from "react-native"


const ItemBaseAnimation = ({ title, image, animation, animation_2, show }) => {
    const getAnimationStyle = (key, value) => {
        switch (key) {
            case "Fade": 
                return { opacity: value }
            case "Zoom": 
                return { transform: [{ scale: value }] }
            case "Rotate":
                return { 
                    transform: [{ 
                        rotate: value.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0deg", "360deg"]
                        })
                    }]
                }
            case "Flip X":
                return { 
                    transform: [{ 
                        rotateY: value.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0deg", "180deg"]
                        })
                    }]
                }
            case "Flip Y":
                return { 
                    transform: [{ 
                        rotateX: value.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0deg", "180deg"]
                        })
                    }]
                }
            case "Slide":
                return { 
                    transform: [{ 
                        translateX: value.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 200]
                        })
                    }]
                }
            case "Bounce":
                return { transform: [{ scale: value }] }
            default:
                return {}
        }
    }

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>
                <View style={styles.contentButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={show}
                    >
                        <Text style={styles.text}>{title}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.contentImage}>
                        <Animated.Image
                            source={image}
                            style={[styles.image, getAnimationStyle(title, animation)]}
                        />
                    </View>
                    <Animated.Text 
                        style={[
                            styles.animationText, 
                            getAnimationStyle(title, animation_2)
                        ]}
                    >
                        {title}
                    </Animated.Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 20,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        backgroundColor: "black",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
        alignItems: "center",
        marginBottom: 10
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20,
        textAlign: "center"
    },
    contentButton: {
        width: 150,
        marginRight: 20
    },
    contentImage: {
        overflow: "hidden",
        borderRadius: 20,
    },
    animationText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: -40,
        color: "lightsalmon"
    },
})

export default ItemBaseAnimation