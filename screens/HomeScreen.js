import React from 'react'
import {View , Text , SafeAreaView, ScrollView} from 'react-native'
import Profil from '../conponents/Profil';
import Footer from '../conponents/Footer';



function HomeScreen() {
  return (
    <SafeAreaView stickyHeaderIndices={[0]}>
      <ScrollView>
          <Profil />
        
          <Footer/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen 