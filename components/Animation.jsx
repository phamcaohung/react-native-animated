import { Marquee } from "@animatereactnative/marquee"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import Images from "./Images"
import Animated, { Easing, FadeIn, FadeInUp, FadeOut, runOnJS, useAnimatedReaction, useSharedValue } from "react-native-reanimated"
import { useState } from "react"
import { Stagger } from '@animatereactnative/stagger'


const images = [
    { name: "Radiant Serpent Sett", image: require("../assets/bg_image_1.jpg"), desc: "A descendant of the Ivory Serpent spirit, Sett is an action movie star who uses his ancestral gifts to wow audiences and give his Ma the good life she deserves. When his hometown is threatened by a crime syndicate, it's time for Sett to play the hero in real life, too—but will his story star a fame-seeking hotshot, or a humble protector?"},
    { name: "Arcane Fractured Jinx", image: require("../assets/bg_image_2.jpg"), desc: "Inventor, maniac, hero—Jinx left the twin cities reeling after killing Silco and blowing up the Piltover Council. Her future had gone up in flames, and as she faced the pieces of her fractured life, Jinx did the same. Now a symbol of change, she must decide who she will become in a world shaped by her own chaos."},
    { name: "Sahn-Uzal Mordekaiser" , image: require("../assets/bg_image_3.jpg"), desc: "Before the Immortal Bastion was built and the first Nox'toraa raised, the land that would become Noxus was ruled by the most powerful warlord Runeterra has ever known—Sahn-Uzal the Demonsbane, Unconquered King, Tyrant of the Great Grass Ocean. He united the Noxii tribes with his might, assured he would one day join the gods in the Hall of Bones…"},
    { name: "Spirit Blossom Morgana",  image: require("../assets/bg_image_4.jpg"), desc: "Twins, born of branch and bloom, guarded mortals from afar. But one sister yearned to feel as mortals do, and from this hunger made masked, demonic children—becoming the Grovemother. She traded places with a queen of nearby lands… but her children followed, bringing ruin and death. Now imprisoned in her grove, she still longs for the fullness of emotion."},
    { name: "Immortalized Legend Kai'Sa", image: require("../assets/bg_image_5.jpg"), desc: "Do you feel this power, Kai'Sa? This is the embrace of the Relentless Hunter. You have fought fiercely to earn your title as my Immortalized Legend. Now you must let go. Give into your instincts and do what must be done, for those who stand in our way deserve punishment. Show them that no one escapes the hunt—not even gods."},
    { name: "Risen Legend Ahri", image: require("../assets/bg_image_6.jpg"), desc: "You've done well, Ahri, to complete my trials with such grace and humility. To become a Risen Legend is no easy feat, and even in the face of failure, you have proven your resilience. Go forth and leave a legacy worthy of the Unkillable Demon King. When you're ready to learn your true potential… heed my call."},
    { name: "Spirit Blossom Akali", image: require("../assets/bg_image_7.jpg"), desc: "A young warrior's master warned her of the world's cruelty and the dispassion it required, then told her to cut out her heart. But when she raised the blade, she could not do it. She would face the world, heart intact. She ran, seeking a new path, and found the Burning Shade—a master who did not demand her heart, but destroyed it all the same."},
]

const { width } = Dimensions.get("window")
const itemWidth = width * 0.62
const spacing = 16
const itemSize = itemWidth + spacing


const Animation = () => {
    const offset = useSharedValue(0)
    const [activeIndex, setActiveIndex] = useState(1)


    useAnimatedReaction(
        () =>  {
            const floatIndex = ((offset.value + width / 2) / itemSize) % images.length
            return Math.abs(Math.floor(floatIndex))
        }, (value) => {
            //console.log(value);
            runOnJS(setActiveIndex)(value)
        }
    )
    
    return (
        <View style={styles.container}>
            <View style={StyleSheet.absoluteFillObject}>
                <Animated.Image
                    key={activeIndex}
                    source={images[activeIndex].image}
                    style={styles.image}
                    blurRadius={10}
                    entering={FadeIn.duration(1000)}
                    exiting={FadeOut.duration(1000)}
                />
            </View>
            <Marquee
                spacing={spacing}
                position={offset}
            >
                <Animated.View 
                    style={styles.content}
                    entering={
                        FadeInUp.delay(500)
                            .duration(1000)
                            .easing(Easing.elastic(0.9))
                            .withInitialValues({
                                transform: [{ translateY: -width / 2 }]
                            })
                    }
                >
                    {images.map((item, index) => (
                        <Images 
                            key={index}
                            image={item.image}
                        />
                    ))}
                </Animated.View>
            </Marquee>
            <Stagger
                stagger={500}
                duration={500}
                initialEnteringDelay={1000}
                style={styles.stagger}
            >
                <Animated.View
                    key={activeIndex}
                    entering={FadeIn.duration(300)}
                    exiting={FadeOut.duration(1000)}
                    style={styles.info}
                >
                    <Text style={styles.title}>
                        {images[activeIndex].name}
                    </Text>
                    <Text style={styles.desc}>
                        {images[activeIndex].desc}
                    </Text>
                </Animated.View>
            </Stagger>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
    },
    content: {
        flexDirection: "row",
        gap: spacing,
    },
    image: {
        flex: 1,
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 16
    },
    desc: {
        color: "white",
        opacity: 0.8,
        textAlign: "center",
        paddingHorizontal: 20,
        fontSize: 16
    },
    stagger: {
        flex: 0.5,
        justifyContent: 'center',
        marginTop: 300
    },
    info: {
        alignItems: "center",
        marginTop: 70
    }
})

export default Animation