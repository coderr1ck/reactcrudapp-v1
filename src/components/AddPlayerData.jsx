import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FormComponent from './FormComponent';
import { useParams } from 'react-router-dom';
import { URL } from '../../constants';

const addPlayer = () => {
    const { newId }= useParams();
    const addApiCall = (url,id,postData) => {
        console.log(id);
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept':'application/json',
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        }).then( (res) => {
            alert("Saved Successfully")
        }).catch((err)=>{
            console.log(err.message);
        })
    }
    
    return (
        
       <FormComponent apiCall={addApiCall} url={URL} newplayerId={newId}/>
    );
}

export default addPlayer;