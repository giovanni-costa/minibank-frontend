import React from 'react'
import { formatBalance, classColor } from './util_func'

export default function TransfersCard(props){

    return(

        <div className='transfer-card'>

            <div>{props.peer}</div>
            
            <div className={classColor(props.transfer)} >{formatBalance.format(props.transfer)}</div>

        </div>
        
    )
}