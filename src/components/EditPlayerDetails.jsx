import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; 
// hook for reading router params to make api call and then update our components
import { useParams } from 'react-router-dom';
import FormComponent from './FormComponent';
import { URL } from '../../constants';

const EditPlayerDetails = ({}) => {

    const {id} = useParams();
    // console.log(id);

    const editApiCall = (URL,playerId,postData) => {
        
        fetch(URL+playerId, {
            method: 'PUT',
            headers: {
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
        <FormComponent apiCall={editApiCall} playerId={id} url={URL} newplayerId={null}/>
    );
}

export default EditPlayerDetails;