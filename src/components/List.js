import React, { Component } from 'react';
import Item from './Item';

function List({ items, onClickDelete, onClickEdit }) {

    const elmItem = items.map((item, index)=> {
        return (
            <Item 
                onClickDelete={onClickDelete} 
                onClickEdit={onClickEdit} 
                key={index} 
                item={item} 
                index={index} 
            />
        );
    });

    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{width: '10%'}} className="text-center">#</th>
                        <th>Task</th>
                        <th style={{width: '20%'}} className="text-center">Level</th>
                        <th style={{width: '20%'}}>Action</th>
                    </tr>
                </thead>
                <tbody>{elmItem}</tbody>
            </table>
        </div>
    );
}

export default List;
