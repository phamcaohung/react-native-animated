import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native"
import ImagesSecond from "./ImagesSecond"
import Animated, { clamp, FadeIn, FadeOut, FlipInXDown, FlipInXUp, FlipInYLeft, FlipInYRight, FlipOutYRight, RotateInUpLeft, RotateOutDownRight, runOnJS, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import { useState } from "react"
import { Stagger } from "@animatereactnative/stagger"


const images = [
    { name: "Toy Terror Cho'Gath", image: require("../assets/bg_image_8.jpg"), desc: "Snuggle up with Cho'Gath, your favorite plush pal! Squeeze his soft belly and watch him scare away bad dreams for a guaranteed good night's sleep. Extendable claw arms included for double the fun! Not suitable for children under 5 years of age. Some assembly required." },
    { name: "Choo-Choo Ornn", image: require("../assets/bg_image_9.jpg"), desc: "With a toot of his whistle, Ornn calls forth a mighty iron beast, roaring with his forge's fury. As his hammer pounds out a rhythm like pistons on the track, a soot-soaked grin unfurls beneath his smoldering beard. One imagines he must feel the thrill of creation, the joy of a perfect machine made manifest!" },
    { name: "Brick Toy Corki", image: require("../assets/bg_image_10.jpg"), desc: "After Corki's breakout success in a new drama series about airplane pilots, executives wondered if he might appeal to younger audiences. When someone jokingly said “make him a chicken in a little chicken plane,” everybody laughed." },
    { name: "Grungy Nunu & Willump", image: require("../assets/bg_image_11.jpg"), desc: "“Gnar left all his toys out. Hmm. I wonder what this one's name is? I think I'll call him Willump. What do you think Willump, should we go on an adventure? LET'S JUMP IN SOME TRASH!”" },
    { name: "Cat-in-the-Box Shaco", image: require("../assets/bg_image_12.jpg"), desc: "MrrRRRrrowwww. Hhhiiisssss. Meow. Purrrrr." },
    { name: "Woof and Lamb Kindred", image: require("../assets/bg_image_13.jpg"), desc: "Who said dogs and cats can't be best friends? Cat ladies and golden retriever boyfriends pitting the two against each other for centuries? Eh, forget all that! Woof and Lamb are living proof that canines and felines CAN get along... though the judges are not actually sure either of them are alive." },
    { name: "Prestige Fuzz Fizz", image: require("../assets/bg_image_14.jpg"), desc: "There's something deeply unnerving about a bipedal Cocker Spaniel mix running around society unchecked, stabbing pedestrians with a tennis ball grabber, and summoning other, bigger dogs out of the ground. And yet, here we all are. Together." },
]

const { width } = Dimensions.get("screen")
const itemSize = width * 0.24
const spacing = 12
const itemTotalSize = itemSize + spacing

const AnimationSecond = () => {
    const scrollX = useSharedValue(0)
    const zoom = useSharedValue(1);
    const [activeIndex, setActiveIndex] = useState(0)
    const onScroll = useAnimatedScrollHandler((e) => {
        scrollX.value = clamp(e.contentOffset.x / itemTotalSize, 0, images.length - 1)
        const newActiveIndex = Math.round(scrollX.value)
        if (activeIndex !== newActiveIndex)
            runOnJS(setActiveIndex)(newActiveIndex)
    })

    const stylez = useAnimatedStyle(() => ({
        transform: [{ scale: zoom.value }],
    }));


    return (
        <View style={styles.container}>
            <View style={[StyleSheet.absoluteFillObject]}>
                <Animated.Image
                    key={activeIndex}
                    source={images[activeIndex].image}
                    style={styles.bg}
                    blurRadius={20}
                    entering={FadeIn.duration(500)}
                    exiting={FadeOut.duration(500)}
                />
            </View>

            <Stagger
                stagger={700}
                duration={500}
                initialEnteringDelay={700}
                style={styles.stagger}
            >
                <Animated.View
                    key={`image-${activeIndex}`}
                    style={[styles.banner]}
                    entering={RotateInUpLeft.duration(600)}
                    exiting={RotateOutDownRight.duration(600)}

                >
                    <Animated.Image
                        source={images[activeIndex].image}
                        style={[styles.bannerImage, stylez]}
                        onTouchStart={() => (zoom.value = withSpring(1.1))}
                        onTouchEnd={() => (zoom.value = withSpring(1))}
                    />
                </Animated.View>

                <Animated.View
                    key={`title-${activeIndex}`}
                    entering={FadeIn.duration(300)}
                    exiting={FadeOut.duration(1000)}
                    style={styles.info}
                >
                    <Text style={styles.title}>
                        {images[activeIndex].name}
                    </Text>
                </Animated.View>

                <Animated.View
                    key={`desc-${activeIndex}`}
                    exiting={FlipOutYRight.duration(1000)}
                    style={styles.info}
                >
                    <Text style={styles.desc}>
                        {images[activeIndex].desc}
                    </Text>
                </Animated.View>
            </Stagger>

            <Animated.FlatList
                data={images}
                style={styles.flatList}
                contentContainerStyle={styles.content}
                keyExtractor={(x, index) => String(index)}
                renderItem={({ item, index }) => {
                    return (
                        <ImagesSecond
                            image={item.image}
                            index={index}
                            scrollX={scrollX}
                        />
                    )
                }}
                horizontal
                showsHorizontalScrollIndicator
                onScroll={onScroll}
                scrollEventThrottle={1000 / 60}
                snapToInterval={itemTotalSize}
                decelerationRate={"fast"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flatList: {
        flexGrow: 0,
        paddingBottom: itemSize,
        height: itemSize * 2,
        marginTop: 30
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#000"
    },
    content: {
        paddingHorizontal: (width - itemSize) / 2,
        gap: spacing
    },
    bg: {
        flex: 1,
        width: 400,
        height: 50,
    },
    bannerImage: {
        width: 400,
        height: 300
    },
    banner: {
        flex: 1,
        paddingTop: 20,
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    desc: {
        color: "white",
        opacity: 0.8,
        textAlign: "center",
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
    stagger: {
        flex: 1,
    },
    info: {
        alignItems: "center",
    }
})

export default AnimationSecond