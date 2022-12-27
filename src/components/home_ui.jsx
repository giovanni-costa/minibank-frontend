import React from 'react'
import WelcomeCard from './welcome_card'
import TransferUI from './transfer_ui'

export default function Home(props){

    const userInfo = props.data.data

    return(

        <div className='container-2'>

            <WelcomeCard name={userInfo.sub} balance={userInfo.amount}/>

            <TransferUI userID={userInfo.id} hashToken={props.data.token}/>

            <button>Transfer</button>

        </div>
        
    )
}