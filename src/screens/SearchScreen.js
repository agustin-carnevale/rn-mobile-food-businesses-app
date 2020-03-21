import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = ()=>{
    const [searchTerm, setSearchTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) =>{
        //price === '$' || '$$' || '$$$'
        return results.filter(result=>result.price === price)
    }
    
    return(
        <View style={styles.container}>
            <SearchBar 
                term={searchTerm} 
                onTermChange={newTerm => setSearchTerm(newTerm)}
                onTermSubmit={()=>searchApi(searchTerm)}
            />
            {errorMessage ? <Text>{errorMessage}</Text>:null}
            <Text style={styles.numberOfResults}>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
                <ResultsList title="Bit Pricer" results={filterResultsByPrice('$$')} />
                <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    numberOfResults:{
        marginBottom:20,
        marginLeft: 15
    },
    container:{
        flex:1
    }
})

export default SearchScreen