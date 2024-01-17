import React from 'react'
import { View , Text , StyleSheet , Image, Pressable, ScrollView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
// import { useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';



const couverture = require('../assets/image/banner.jpg');
const profil = require('../assets/image/single_2_thumb.jpg');

function Profil({}) {
     
    const navigation = useNavigation();

    const onPressPhoto = () => {
        navigation.navigate('photo')
    }

    const onPressMessage = () => {
        navigation.navigate('message')
     }
 
  return (
    <View>
        <View style={style.container}>
        <View style={style.header}>
            <Pressable>
                <Ionicons name="ios-arrow-back" size={25} color="#f94990"></Ionicons>
            </Pressable>
                <Text style={style.nom}> Bella3</Text>
            </View>
            <Pressable onPress={onPressMessage} style={style.icon}>
                <Ionicons name="chatbubble-ellipses" size={25} color="#f94990" />
            </Pressable>
       </View>
    <ScrollView>
        <View >
       {/* couverture */}

            <View style={style.couverture}>
                <View>
                    <Image source={couverture} style={style.image1}></Image>
                </View>
                {/* photo de profil */}
                <View>
                    <Image source={profil} style={style.profil}></Image>
                </View>
            </View>

            {/*  */}
            <View>
                <View>
                    <Text style={style.prenom}>Bella3</Text>
                    <Text style={style.description}>L'amour n'est pas
                        un centiment , c'est une force , une vertu</Text>
                </View>
                <View style={style.apropos}>
                    <Pressable>
                        <Text style={style.apropos1}>A propos</Text>
                    </Pressable>
                    <Pressable onPress={onPressPhoto}>
                        <Text style={style.apropos2}>Photos</Text>
                    </Pressable>
                        
                </View>
            </View>
            <View>
                <View style={style.description}>
                    <Text>Homme</Text>
                    <Text>Celibataire</Text>
                    <Text>30 ans</Text>
                    <Text>1m67</Text>
                    <Text>Habite a Antananarivo,Madagascar </Text>
                    <Text>Recherche une relation serieux</Text>
                </View>
            </View>
            <View style={style.emploi}>
                <View>
                    <Text style={style.emploi1}>Emploi</Text>
                    <Text style={style.esthic}>Esthiticienne</Text>
                </View>
                <View>
                    <Text  style={style.emploi1}>Etude</Text>
                    <Text style={style.esthic}>Droit a l'unniversite d'antananarivo</Text>
                </View>
            </View>

            {/* centre et interet */}
            <View>
                <View>
                    <Text style={style.emploi11}>Centres et intérêt</Text>
                </View>
                <View style={style.interet}>
                    <Text style={style.interet1}>basket</Text>
                    <Text style={style.interet1}>cinema</Text>
                    <Text style={style.interet2}>balade a video</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text style={style.emploi11}>Langues</Text>
                </View>
                <View style={style.interet}>
                    <Text style={style.interet1}>Francais</Text>
                    <Text style={style.interet1}>Anglais</Text>
                </View>
            </View>
            {/*  */}
            <View style={style.emploi}>
                <View>
                    <Text style={style.emploi1}>Signe astrologique</Text>
                    <Text>Verseau</Text>
                </View>
                <View>
                    <Text  style={style.emploi1}>Mode de vie</Text>
                    <Text>Alcool : pour le grand occasion</Text>
                    <Text>Cigarette : Non</Text>
                </View>
        </View>
    </View>
    </ScrollView>
    </View>
  )
}
const style = StyleSheet.create({
    container :{
        position :'absolute',
        top:0,
        zIndex :102,
        display : 'flex',
        width : '100%',
        height: 60,
        backgroundColor: 'whitesmoke',
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        // padding: 20,      
    },
    header :{
        display : 'flex',
        flexDirection : 'row'
    },
    nom :{
        fontSize : 15
    },
    icon :{
        marginTop : -4,
    },
    image1 :{
        height: 200,
        width :383,
        borderRadius :20,
        zIndex : 1,
    },
    couverture :{
       margin : 5,
       marginTop :60
    },
    profil :{
        borderRadius : 100,
        marginLeft :20,
        zIndex :2 ,
        marginTop : -100 
    },
    prenom :{
        fontSize : 25,
        paddingLeft : 20
    },
    description :{
        fontSize : 12,
        marginLeft : 10,
        Color : 'black',
    },
    apropos :{
        marginTop: 15,
        display : 'flex',
        flexDirection : 'row',
        marginLeft :10,
    },
    apropos1 :{
        width : 90,
        height :25,
        backgroundColor :'#07668f',
        borderRadius : 20,
        textAlign : 'center',
        color : 'white'
    },
    apropos2 :{
        marginLeft :10,
        width : 90,
        height :25,
        backgroundColor :'whitesmoke',
        borderRadius : 20,
        textAlign : 'center',
        color : 'blue',
    },
    emploi :{
        margin : 5,
        paddingLeft :4
    },
    emploi1 :{
     fontFamily : 'serif' ,
     margin : 3,
     opacity :0.5,
     marginTop : 8
    },
    interet :{
      display : 'flex',
      flexDirection : 'row',
      marginLeft : 20,
    },
    esthic : {
    marginLeft :4,
    },
    emploi11 :{
       marginLeft :15,
    },
    interet1 :{
        width : '20%',
        height :23,
        backgroundColor : '#dddddd',
        textAlign : 'center',
        borderRadius :20
    },
   interet2 : {
    width : '30%',
    height :20,
    backgroundColor : '#dddddd',
    textAlign : 'center',
    marginLeft : 5,
    borderRadius :20
    },
})

export default Profil ;