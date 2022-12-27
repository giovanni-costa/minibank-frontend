import React, { useState } from 'react'
import axios from 'axios';
import { API_URL } from '..';

export default function LoginUI(props){

    const[UserCPF, setCPF] = useState('');
    const[UserPwd, setPwd] = useState('')

    async function getUser(){

        try{

            const api = axios.create({
                baseURL: API_URL,
                timeout: 10000,
                headers: {'Content-Type': 'application/json'}
            })

            const response = await api.get(`auth?cpf=${UserCPF}&pwd=${UserPwd}`);

            props.onTokenSetup(response.data)
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div className = 'container'>

            <h1>minibank</h1>

            <input
            type='text'                
            placeholder='User CPF'
            maxLength={11}
            value={UserCPF}
            onChange={(e) => {setCPF(e.target.value)}}
            ></input>

            <input
            type='password'  
            placeholder='Password'
            value = {UserPwd}
            onChange={(e) => {setPwd(e.target.value)}}
            ></input>

            <button
            onClick={getUser}
            >Login</button>
        </div>
    )
}