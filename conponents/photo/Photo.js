import React from 'react'
import { View ,Text ,StyleSheet ,Pressable, ScrollView , Image} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';



function Photo() {

    const navigation = useNavigation();

    const onPressBack = () => {
        navigation.navigate('profil')
    }
    const images =[
        require('../../assets/image/single_2_thumb.jpg') ,
        require('../../assets/image/image1.jpg') ,
        require('../../assets/image/liste.png') ,
        require('../../assets/image/product_7.png') ,
        require('../../assets/image/single_1_thumb.jpg') ,
        require('../../assets/image/banner_1.jpg') ,
        require('../../assets/image/single_2_thumb.jpg') ,
        require('../../assets/image/single_2_thumb.jpg') ,
        require('../../assets/image/product_7.png') ,

        // require('../../assets/image/accueil (1).png') ,
        

    ]
  return (
    <View>
        <View style={style.header}> 
            <Pressable onPress={onPressBack}>
                <Ionicons style={style.icon1} name="ios-arrow-back" size={50} color="black"></Ionicons>
        </Pressable>
    </View>
    <ScrollView>   
        <View>  
            <View style={style.contenu}>
                <View style={style.row}>
                    <Pressable style={style.rowspan}>
                                {images.map((image, index) => (
                                    <Image
                                        key={index}
                                        source={image}  // Utilisez require directement ici car vous avez des images locales
                                        style={style.col}
                                    />
                                ))}
                    </Pressable>
                </View>
            </View>
        </View>
    </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
    header : {
        position: 'absolute',
        top: 0,
        // left: 0,
        // right: 0,
        height: 70,
        width: '100%',
        backgroundColor: '#f94990',
        // opacity: 0.9,
        zIndex: 1,
        // bottom :0
    },
    icon1 : {
        margin : 15,
    },
    row :{
        marginTop :60,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingTop: 5,
    },
    rowspan :{
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        width:'100%',
        flexWrap :'wrap',
    },

    col :{
        height:171,
        width : '48%',
        borderWidth :3,
        borderColor : '#ffffff',
        margin:3,
        borderRadius: 7,
        marginVertical: 5,
    }
})

export default Photo