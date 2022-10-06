import { View, Text } from 'react-native'
import React from 'react'
import Headerfile from './Header/Headerfile'
import Middleview from './Middleview/Middleview'
const App = () => {
  return (
    
    <View style={{flex:1,backgroundColor:"blue"}}>
      <Headerfile/>
      <Middleview/>
    </View>
  )
}

export default App