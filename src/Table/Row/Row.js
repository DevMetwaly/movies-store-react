import React from 'react';

export default function Row(props){
    const heart = props.liked? <i class="fas fa-heart"></i>:<i class="far fa-heart"></i>
    return (

        <tr>
            <td>{props.title}</td>
            <td>{props.genre}</td>
            <td>{props.stock}</td>
            <td>{props.rate}</td>
            <td>
                <button className="btn btn-primary-outline" onClick={props.handleLike(props.id)}>
                    {heart}
                </button>                    
            </td>


            <td><button className="btn btn-danger" onClick={props.handleDelete(props.id)} >Delete</button></td>
            
        </tr>
    );  
}