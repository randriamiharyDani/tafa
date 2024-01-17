import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Bloquer from '../conponents/obs/Bloquer'
import BloqContenu from '../conponents/obs/BloqContenu'

function obsScreen() {
  return (
    <View>
        <SafeAreaView>
            <Bloquer/>
            <BloqContenu/>
        </SafeAreaView>
    </View>
  )
}

export default obsScreen