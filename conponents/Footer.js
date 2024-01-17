import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Footer() {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    const navigation = useNavigation();

    const onPressBloquer = () => {
        navigation.navigate('bloquer');
    }

    return (
        <View>
            <View>
                <Pressable>
                    <View style={style.footerspace}>
                        <Text style={style.footer1}>Annuler le Match</Text>
                    </View>
                </Pressable>
                <Pressable onPress={onPressBloquer}>
                    <View style={style.footerspace}>
                        <Text style={style.footer1} color='red'>Bloquer Bella3</Text>
                    </View>
                </Pressable>
                <Pressable style={style.footerspace} onPress={openModal}>
                    <Text style={style.footer2}>Signaler Bella3</Text>
                </Pressable>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                {/* Contenu de votre modal */}
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        
                        <Pressable onPress={closeModal}>
                            <Text style={style.closeText}>Fermer</Text>
                        </Pressable>
                        <View>
                            <Pressable>
                                 <Text >Je ne suis pas intéressé</Text>
                            </Pressable>
                        </View>
                        <Text>Contenu de la modal</Text>
                        <Text>Contenu de la modal</Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const style = StyleSheet.create({
    footer1: {
        marginLeft: 10,
        width: '95%',
        height: 50,
        backgroundColor: '#dddddd',
        textAlign: 'center',
        paddingTop: 13,
        borderRadius: 15,
        color: 'black',
        fontSize: 18
    },
    footer2: {
        marginLeft: 10,
        width: '95%',
        height: 50,
        backgroundColor: '#dddddd',
        textAlign: 'center',
        paddingTop: 13,
        borderRadius: 15,
        color: 'red',
        fontSize: 18
    },
    footerspace: {
        marginTop: 10
    },
    TextFooter1: {
        marginLeft: 10,
        width: '95%',
        height: 50,
        backgroundColor: '#dddddd',
        textAlign: 'center',
        paddingTop: 13,
        borderRadius: 15,
        color: 'red',
        fontSize: 18
    },
    modalContainer: {
        // 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        borderRadius :70,
        height :200,
        width : 380,
        backgroundColor: 'grey',kjgjjgj
        // opacity : 0.5,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        top : 280
      },
    //   footer1 :{
    //     color : 'red'
    //   }
});

export default Footer;
