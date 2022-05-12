import React, { useState, useEffect, useMemo } from 'react';

import './Cal.css';

import History from './History';
import { useStore } from '../store';

import { addStorage, addResult } from '../store/actions';

function Cal(props) {

    const bnts = ["(", ")", "Clear", "AC", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"];

    const [calculation, setCalculation] = useState("");


    const [state, dispatch] = useStore();
    const [result, setResult] = useState("");


    console.log(state)

    var storage = JSON.parse(localStorage.getItem("history"));
    if (storage == null) storage = [];
    console.log(storage)

    const addOneHistory = (calculationHistory, resultHistory) => {
        let oneHistory = {
            id: getID(),
            calculationHistory,
            resultHistory,
            time: getTime()
        }
        storage.push(oneHistory)
        localStorage.setItem("history", JSON.stringify(storage));
    }


    const onClickBtn = (event) => {
        var value = event.target.value;

        if (value === "AC") {
            setCalculation(calculation.slice(0, -1))
        }
        else if (value === "=") {
            try {
                setResult(eval(calculation))
                
                console.log(state.result + "iii")
                //dispatch(addStorage(storage))
            } catch (error) {
                setResult("Error")
                document.getElementById('cal_result').style.borderColor  = "red";
            }
        }
        else if (value === "Clear") {
            setCalculation('')
        }
        else {
            setCalculation(calculation.concat(value))
            document.getElementById('cal_result').style.borderColor  = "green";
        }
    }

    const getTime = () => {
        var date = new Date;
        var month = date.getMonth() + 1;
        var day = date.getDay();
        var year = date.getYear();
        var year = (year.toString()).slice(1, 3)
        var hour = date.getHours();
        var min = date.getMinutes();

        var time = `${hour} gio : ${min} phut || Thu ${day} / thang ${month} /nam 20${year}`


        return time;
    }
    const getID = () => {
        var id = ((Math.random()) * 1000000000).toString()
        return id
    }



    const renderHistory = storage.map((value) =>
        <History history={value}></History>
    )


    

    useEffect(() => {
        document.getElementById('cal_result').innerHTML = result;
        dispatch(addResult(result))
        addOneHistory(calculation, result)
        document.getElementById('cal_result').style.borderColor  = "blue";
        console.log(result+"RS")
    }, [result])
   










    return (
        <div className='cal'>
            <div className='cal_result' id='cal_result'>{calculation}</div>
            <div className='cal_btn'>
                {bnts.map((item, index) =>
                    <button key={index} id={item} onClick={onClickBtn} value={item}>{item}</button>
                )}
            </div>
            <div className='cal_history'>
                <table style={
                    {
                        width: "100%",
                        textAlign: 'center'
                    }
                }>
                    <tr>
                        <th>Phep Tinh</th>
                        <th>Ket Qua</th>
                        <th>Thoi Gian</th>
                    </tr>
                    {
                        renderHistory
                    }

                </table>
            </div>
        </div>

    );
}

export default Cal;