import React from 'react'
import WelcomeCard from './welcome_card'
import TransferUI from './transfer_ui'
import LastTransfers from './last_transfers'

export default function Home(props){

    const userInfo = props.data.data

    return(

        <div className='container-2'>

            <WelcomeCard name={userInfo.sub} balance={userInfo.amount}/>

            <LastTransfers userID={userInfo.id} hashToken={props.data.token}/>

            <TransferUI userID={userInfo.id} hashToken={props.data.token}/>

        </div>
        
    )
}