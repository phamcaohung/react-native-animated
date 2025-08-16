import { useRef, useState } from "react"
import { Animated, FlatList, StyleSheet, View } from "react-native"
import ItemBaseAnimation from "./ItemBaseAnimation"

const BaseAnimation = () => {
    const fade = useRef(new Animated.Value(1)).current
    const [imageFade, setImageFade] = useState(true)
    const fade_2 = useRef(new Animated.Value(1)).current
    const [textFade, setTextFade] = useState(true)

    const zoom = useRef(new Animated.Value(1)).current
    const [imageZoom, setImageZoom] = useState(true)
    const zoom_2 = useRef(new Animated.Value(1)).current
    const [textZoom, setTextZoom] = useState(true)

    const rotate = useRef(new Animated.Value(0)).current
    const [imageRotate, setImageRotate] = useState(true)
    const rotate_2 = useRef(new Animated.Value(0)).current
    const [textRotate, settextRotate] = useState(true)

    const flipX = useRef(new Animated.Value(0)).current
    const [imageFlipX, setImageFlipX] = useState(true)
    const flipX_2 = useRef(new Animated.Value(0)).current
    const [textFlipX, setTextFlipX] = useState(true)

    const flipY = useRef(new Animated.Value(0)).current
    const [imageFlipY, setImageFlipY] = useState(true)
    const flipY_2 = useRef(new Animated.Value(0)).current
    const [textFlipY, setTextFlipY] = useState(true)

    const slide = useRef(new Animated.Value(0)).current
    const [imageSlide, setImageSlide] = useState(true)
    const slide_2 = useRef(new Animated.Value(0)).current
    const [textSlide, setTextSlide] = useState(true)

    const bounce = useRef(new Animated.Value(1)).current
    const [imageBounce, setImageBounce] = useState(true)
    const bounce_2 = useRef(new Animated.Value(1)).current
    const [textBounce, setTextBounce] = useState(true)

    const fadeIn = () => {
        Animated.timing(fade, {
            toValue: imageFade ? 0 : 1,
            duration: 1000,
            useNativeDriver: true
        }).start(() => {
            setImageFade(!imageFade)
            Animated.timing(fade_2, {
                toValue: textFade ? 0 : 1,
                duration: 1000,
                useNativeDriver: true
            }).start(() => {
                setTextFade(!textFade)
            })
        })
    }

    const zoomIn = () => {
        Animated.timing(zoom, {
            toValue: imageZoom ? 1.2 : 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setImageZoom(!imageZoom)
            Animated.timing(zoom_2, {
                toValue: textZoom ? 1.2 : 1,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => {
                setTextZoom(!textZoom)
            })
        })
    }

    const rotateIn = () => {
        Animated.timing(rotate, {
            toValue: imageRotate ? 1 : 0,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setImageRotate(!imageRotate)
            Animated.timing(rotate_2, {
                toValue: textRotate ? 1 : 0,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => {
                settextRotate(!textRotate)
            })
        })
    }

    const flipXIn = () => {
        Animated.timing(flipX, {
            toValue: imageFlipX ? 1 : 0,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setImageFlipX(!imageFlipX)
            Animated.timing(flipX_2, {
                toValue: textFlipX ? 1 : 0,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => {
                setTextFlipX(!textFlipX)
            })
        })
    }

    const flipYIn = () => {
        Animated.timing(flipY, {
            toValue: imageFlipY ? 1 : 0,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setImageFlipY(!imageFlipY)
            Animated.timing(flipY_2, {
                toValue: textFlipY ? 1 : 0,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => {
                setTextFlipY(!textFlipY)
            })
        })
    }

    const slideIn = () => {
        Animated.timing(slide, {
            toValue: imageSlide ? 1 : 0,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            setImageSlide(!imageSlide)
            Animated.timing(slide_2, {
                toValue: textSlide ? 1 : 0,
                duration: 1000,
                useNativeDriver: true,
            }).start(() => {
                setTextSlide(!textSlide)
            })
        })
    }

    const bounceIn = () => {
        Animated.spring(bounce, {
            toValue: imageBounce ? 1.5 : 1, 
            friction: 2,  
            tension: 100, 
            useNativeDriver: true,
        }).start(() => {
            setImageBounce(!imageBounce)
            Animated.spring(bounce_2, {
                toValue: textBounce ? 1.5 : 1, 
                friction: 2,  
                tension: 100, 
                useNativeDriver: true,
            }).start(() => {
                setTextBounce(!textBounce)
            })
        })
    }

    const data = [
        {
            title: "Fade", image: require("../assets/bg_image_8.jpg"),
            animation: fade, animation_2: fade_2, show: fadeIn
        },
        {
            title: "Zoom", image: require("../assets/bg_image_9.jpg"),
            animation: zoom, animation_2: zoom_2, show: zoomIn
        },
        {
            title: "Rotate", image: require("../assets/bg_image_10.jpg"),
            animation: rotate, animation_2: rotate_2, show: rotateIn
        },
        {
            title: "Flip X", image: require("../assets/bg_image_11.jpg"),
            animation: flipX, animation_2: flipX_2, show: flipXIn
        },
        {
            title: "Flip Y", image: require("../assets/bg_image_12.jpg"),
            animation: flipY, animation_2: flipY_2, show: flipYIn 
        },
        {
            title: "Slide", image: require("../assets/bg_image_13.jpg"),
            animation: slide, animation_2: slide_2, show: slideIn
        },
        {
            title: "Bounce", image: require("../assets/bg_image_14.jpg"),
            animation: bounce, animation_2: bounce_2, show: bounceIn
        },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <ItemBaseAnimation
                        key={item.title}
                        title={item.title}
                        image={item.image}
                        animation={item.animation}
                        animation_2={item.animation_2}
                        show={item.show}
                    />
                )}
                keyExtractor={(item) => item.title}
                contentContainerStyle={{ paddingBottom: 50 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20
    },
})

export default BaseAnimation