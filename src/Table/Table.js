
import React from 'react';
import Row from './Row/Row';
import './Table.css';

export default function Table(props){
    let style={width: '70px'};
    return(
        <div className="row">
            <table className="table table-hover" style={{padding:"10px", margin:"10px"}}>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col" style={style}></th>
                        <th scope="col" style={style}></th>
                    </tr>
                </thead>
                <tbody>
                    {props.movies.map(movie => <Row
                                                    key={movie._id}
                                                    title={movie.title}
                                                    genre={movie.genre.name}
                                                    stock={movie.numberInStock}
                                                    rate={movie.dailyRentalRate}
                                                    liked={movie.liked}
                                                    id={movie._id}
                                                    handleDelete={props.handleDelete}
                                                    handleLike={props.handleLike}/>)}

                </tbody>
            </table>
        </div>
    );
}