import React from 'react'
import { View, Text ,SafeAreaView} from 'react-native'
import Header from '../components/Header'
import { styles } from '../style/Style'

export default function Settings(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={props.navigation}  headerTitle="Setting"/>
        </SafeAreaView>
    )
}
