import React from 'react'
// import axios from 'axios';

export default function Home(props){

    // const[userName, setUserName] = useState()

    return(
        <div className='container-2'>

            <h1>minibank</h1>

            <label>Welcome, {props.data.name}</label>

            <label>Your total amount is ${props.data.amount}</label>
        </div>
    )
}