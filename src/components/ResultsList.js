import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {withNavigation} from 'react-navigation'
import ResultDetail from './ResultDetail'

const ResultsList = ({title, results, navigation})=>{
    if (!results.length) return null

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.resultsCount}>Results: {results.length}</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={r=>r.id}
                renderItem={({item})=>(
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Detail',{id: item.id})}
                    >
                        <ResultDetail result={item}/>
                    </TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    },
    resultsCount:{
        marginLeft: 15,
        marginBottom: 15
    },
    container:{
        marginBottom: 20
    }
})

export default withNavigation(ResultsList)
