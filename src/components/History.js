import React,{useState} from 'react';
import { Button } from "@progress/kendo-react-buttons";
import {useStore} from '../store';


function History({history}) {


    const [storage,setStorage] = useState(JSON.parse(localStorage.getItem("history")))
    if(storage == null) setStorage = [];


    const removeHistoryItem=()=>{
        
       console.log(history.id)
       const newStorage = storage.filter(item => item.id === history.id);
       setStorage(newStorage)
       localStorage.setItem('history',JSON.stringify(storage))
       console.log(newStorage)

       
    }

    return (
        <tr>
            <td>{history.calculationHistory}</td>
            <td>{history.resultHistory}</td>
            <td>{history.time}</td>
        </tr>
    );
}

export default React.memo(History);