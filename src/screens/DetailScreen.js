import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import yelp from '../api/yelp'


const DetailScreen = ({navigation})=>{
    const [details, setDetails]= useState(null)
    const id = navigation.getParam('id')

    const getBusinessDetails = async(id)=>{
        const response = await yelp.get(`/${id}`)
        setDetails(response.data)
    }

    useEffect(()=>{
        getBusinessDetails(id)
    },[])

    if(!details) return null

    return (
        <View>
            <Text>{details.name}</Text>
            <FlatList 
                keyExtractor={photo=>photo}
                data={details.photos}
                renderItem={({item})=>{
                    return <Image style={styles.image} source={{uri:item}}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300
    }
})

export default DetailScreen