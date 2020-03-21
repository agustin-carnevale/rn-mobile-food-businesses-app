import {useEffect, useState } from 'react'
import yelp from '../api/yelp'

const INITIAL_SEARCH_TERM = 'pasta'

export default ()=>{
    const [results,setResults] = useState([])
    const [errorMessage,setErrorMessage] = useState('')

    const searchApi = async (term)=>{
        try {
            const response = await yelp.get('/search',{
                params: {
                    term,
                    limit: 50,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage("Uuups.. something went wrong")
        }
    }
    useEffect(()=>{
        searchApi(INITIAL_SEARCH_TERM)
    },[])

    return [searchApi, results, errorMessage]
}