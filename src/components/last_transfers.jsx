import React, {useState, useEffect} from 'react'
import { API_URL } from '..';
import axios from 'axios';
import TransfersCard from './transfercard';

export default function LastTransfers(props){

    const[lastTransfers, setTransfers] = useState([])

    useEffect( () => { 
        fetchData();
    }, []);

    async function fetchData() {

        try {

            const api = axios.create({
                baseURL: API_URL,
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${props.hashToken}`
                }
            })

            const res = await api.get(`transfers/${props.userID}`); 
            let records = []
            console.log(res.data)

            res.data.forEach(element =>{

                const peer = element.sender !== props.userID?
                    `From: ${element.sender}` : `To: ${element.receiver}`
                
                const transfer = peer === props.userID?
                    parseFloat(element.value) : -parseFloat(element.value)

                records.push(<li key={element.id}><TransfersCard peer={peer} transfer={transfer}/></li>)
            })

            setTransfers(records)

        } catch (err) { console.log(err) }
    }

    return(

        <div className='last-transfers'>

            <ul>{lastTransfers}</ul>
            
        </div>
        
    )
}