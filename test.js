//BaseAnimation
const itemWidth = Dimensions.get("window").width
const fade = useRef(new Animated.Value(1)).current
const [aniFade, setAniFade] = useState(true)
const textAni = useRef(new Animated.Value(-itemWidth)).current

const fadeIn = () => {
    Animated.timing(fade, {
        toValue: aniFade ? 0 : 1,
        duration: 1000,
        useNativeDriver: true
    }).start(() => {
        setAniFade(!aniFade)    
        Animated.timing(textAni, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start()
    })
}

const data = [
    {
        title: "Fade", image: require("../assets/bg_image_8.jpg"),
        animation: fade, show: fadeIn, textAni: textAni
    }
]

return (
    <View>
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <ItemBaseAnimation
                    key={item.title}
                    title={item.title}
                    image={item.image}
                    animation={item.animation}
                    show={item.show}
                    textAni={item.textAni}
                />
            )}
        />
    </View>
)

//ItemBaseAnimation
const ItemBaseAnimation = ({ title, image, animation, show, textAni }) => {
    const getAnimationStyle = () => {
        switch (title) {
            case "Fade": 
                return { opacity: animation }
            default:
                return {}
        }
    }
    return (
        <View>
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
                            style={[styles.image, getAnimationStyle()]}
                        />
                    </View>
                    <Animated.Text 
                        style={[
                            styles.animationText, 
                            { transform: [{ translateX: textAni }] }
                        ]}
                    >
                        {title}
                    </Animated.Text>
                </View>
            </View>
        </View>
    )
}