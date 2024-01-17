import React from 'react'
import {StyleSheet, View,Image , Text, ScrollView, Pressable, Button, TextInput } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { Entypo ,AntDesign , FontAwesome ,MaterialIcons  } from '@expo/vector-icons';


const photoProfil = require('../assets/image/single_2_thumb.jpg');
function Message() {

    const navigation = useNavigation();
    const onPressBack = () =>{
        navigation.navigate('profil');
    }
  return (

    <ScrollView>
        <View style={style.container}>
            <Pressable onPress={onPressBack}>
                <Ionicons name="ios-arrow-back" size={50} color="black"></Ionicons>
            </Pressable>
            <Pressable>
                  <AntDesign name="setting" size={43} color="black" />
            </Pressable>
        </View>
        {/* contenu */}
        <View style={style.contenu}>
            <View style={style.souscontenu}>
                <Pressable>
                    <Image source={photoProfil} width={50} height={90} style={style.img} resizeMode='contain'></Image>
                </Pressable>
                <View>
                    <View style={style.description}>
                        <Text style={style.nom1}>Bella3 </Text>
                        <Text style={style.statutEnLigne}></Text>
        {/* <Text style={style.statutHorsLigne}></Text> */}

                    </View>
                    <View>
                         <Text marginLeft={10}>Faritan'Antananarivo</Text>
                    </View>
                </View>
            </View>
            {/* ilay tsipaka eo ambany */}
            <View>
                <Text style={style.border}></Text>
            </View>
        </View>
        {/* fooootteeerrr */}
        <View style={style.footer}>
            <View style={style.imageIcon}>
                <Pressable style={style.Icon}>
                    <Entypo name="camera" size={24} color="black" />
                 </Pressable>
                 <Pressable  style={style.Icon}>
                     <Entypo name="image" size={24} color="black" />
                 </Pressable>
            </View>

            <Pressable style={style.navbar}>
                <TextInput color='black'>bonjourrr</TextInput>
            </Pressable>
            <View style={style.imageIcon}>
                <Pressable  style={style.Icon}>
                    <MaterialIcons name="keyboard-voice" size={28} color="black" />
                 </Pressable>
                 <Pressable  style={style.Icon}>
                     <AntDesign name="like2" size={24} color="blue" />
                 </Pressable>
            </View>
            
        </View>
    </ScrollView>
  )
}
const style = StyleSheet.create({
    container: {
        bottom: 0,
        // position : 'absolute',
        display : 'flex',
        height: 70,
        backgroundColor: 'grey',
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding: 15,
        opacity :0.4,
        // bottom : 0
    },
    footer :{
        // position : 'absolute',
        marginTop : 490,
        display : 'flex',
        flexDirection : 'row',
        height :80,
        width : '100%',
        backgroundColor : '#a9a9a9',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        zIndex: 1,
        bottom :0
    },
    navbar :{
        flexDirection :'row',
        width : '70%',
        height : 60,
        backgroundColor :'white',
        borderRadius : 50,
        borderWidth :3,
        borderColor : 'f94990',
        Button: 0,
        opacity: 0.3,
        border : 1,
        borderStyle : 'solid',
        borderColor :'red'
    },
    imageIcon : {
        display : 'flex',
        flexDirection : 'row',
        // padding :5
    },
    Icon :{
        padding: 3,
    },
    text1 :{
        textAlign : 'center'
    },
    img :{
        borderRadius : 15,
        borderColor: '#ffffff',
        borderWidth: 5,
    },
    souscontenu :{
        display : 'flex',
        flexDirection : 'row',
    },
    nom1 :{
        fontSize :25,
    },
    statutEnLigne :{
        height : 15,
        width: 15,
        backgroundColor : 'green',
        borderRadius : 50,
        margin :10
    },
    statutHorsLigne :{
        height : 15,
        width: 15,
        backgroundColor : 'red',
        borderRadius : 50,
        margin :10
    },
    description :{
        display : 'flex',
        flexDirection : 'row',
        marginTop : 25 ,
        alignContent : 'center',
        justifyContent : 'center',
    },
    border :{
        marginTop: 5,
        borderWidth :1,
        opacity :0.1,
        height :1
    }
})

export default Message