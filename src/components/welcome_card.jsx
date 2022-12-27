import React from 'react'
import { formatBalance } from './util_func'

export default function WelcomeCard(props){

    return(

        <div className='welcome'>           

            <div>Welcome, {props.name}</div>
            
            <div>{formatBalance.format(props.balance)}</div>

        </div>
        
    )
}