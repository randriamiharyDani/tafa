import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';

function Signaler() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Contenu principal de l'application</Text>
      <Text style={styles.text}>Contenu principal de l'application</Text>
      <Text style={styles.text}>Contenu principal de l'application</Text>
      <Pressable style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}>Ouvrir la modal</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Contenu de la modal</Text>
            <Pressable onPress={closeModal}>
              <Text style={styles.closeText}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeText: {
    color: 'blue',
    marginTop: 10,
  },
});

export default Signaler;
