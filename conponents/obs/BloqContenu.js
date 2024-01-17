import React from 'react'
import { View ,Text ,StyleSheet, Pressable} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



function BloqContenu() {
  return (
    <View>
        <View style={style.container}>
            <Pressable>
                <Text style={style.bloquerMessage}>Bloquer le message et les appel</Text>
            </Pressable>
            <Pressable>
                <Entypo style={style.block} name="block" size={24} color="black" />
            </Pressable>
        </View>
{/* ------------------------------------------------------------------ */}
        <View>
            <View style={style.sharptext}>
                <Ionicons name="chevron-forward-sharp" size={21} color="black" />
                <Text>vous ne recevrez pas les messageet les appel de Bella3</Text>
            </View>
            <View style={style.sharptext}>
                <Ionicons name="chevron-forward-sharp" size={21} color="black" />
                <Text>Bella3 ne sera pas bloqué(e) sur Tafa </Text>
            </View>
            <View style={style.sharptext}>
                <Ionicons name="chevron-forward-sharp" size={21} color="black" />
                <Text> si vous avez de groupe ou des salon en commun avec Bella3 ,
                    vous pourez toujour vous voir, vous envoyer des messages ou vous applez .Vous pouvez
                    quiterces groupe ou ce salon a tour de momen </Text>
            </View>
        </View>


        <View style={style.container}>
            <Pressable>
                <Text style={style.bloquerMessage}>Bloquer sur Tafa</Text>
            </Pressable>
            <Pressable>
                <Entypo style={style.block} name="block" size={24} color="black" />
            </Pressable>
        </View>

        <View>
            <View style={style.sharptext}>
                <Ionicons name="chevron-forward-sharp" size={21} color="black" />
                <Text>vous et Bella3 </Text>
            </View>
            <View style={style.sharptext}>
                <Ionicons name="chevron-forward-sharp" size={21} color="black" />
                <Text>Bella3 ne sera pas bloqué(e) sur Tafa </Text>
            </View>
            <View style={style.sharptext}>
                <Ionicons name="chevron-forward-sharp" size={21} color="black" />
                <Text> si vous avez de groupe ou des salon en commun avec Bella3 ,
                    vous pourez toujour vous voir, vous envoyer des messages ou vous applez .Vous pouvez
                    quiterces groupe ou ce salon a tour de momen </Text>
            </View>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container :{
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    margin : 15
    },
    bloquerMessage :{
        fontSize :20,
        color : 'red'
    },
    sharptext :{
        marginLeft :20,
        display :'flex',
        flexDirection : 'row',
    }
})

export default BloqContenu