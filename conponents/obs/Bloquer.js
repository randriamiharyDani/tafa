import React from 'react'
import { View ,Text, StyleSheet, Modal ,Pressable} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { Entypo ,AntDesign , FontAwesome ,MaterialIcons  } from '@expo/vector-icons';




function Bloquer() {

    const navigation = useNavigation();
   const onPressBackProfil = () => {
        navigation.navigate('profil')
   }
  return (
        <View style={style.container}>
            <Pressable onPress={onPressBackProfil}>
                <Ionicons name="ios-arrow-back" size={50} color="black"></Ionicons>
            </Pressable>
            <View>
                <Text style={style.bloqPersonne}> Bloquer Bella3</Text>
            </View>
        </View>
  )
}

const style = StyleSheet.create({
    container: {
        bottom: 0,
        display : 'flex',
        height: 70,
        backgroundColor: 'grey',
        flexDirection : 'row',
        padding: 15,
        opacity :0.4,
    },
    bloqPersonne :{
        color : 'black',
        fontSize : 23,
        margin :8 ,
    }
})

export default Bloquer