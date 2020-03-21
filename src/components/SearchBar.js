import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit})=>{
    return(
        <View style={styles.background}>
            <Feather name="search" size={40}/>
            <TextInput
                style={styles.input}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#cfcfcf',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    input:{
        marginLeft: 20,
        flex: 1,
        fontSize: 18,
        height: "100%"
    }

})

export default SearchBar