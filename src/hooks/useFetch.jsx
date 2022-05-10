import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (endpoint) => {
    const [data, setData] = useState({data: [], loading: true});

    async function fetchData (){
        const response = await axios.get(endpoint);
        setData({
            data: response.data,
            loading: false
        })
    }

    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.error(error)
        }
    }, [endpoint]);

    return data;
}

export default useFetch;