import React, { Component } from 'react';

function Item(props) {

    function handleEdit(item) {
       props.onClickEdit(item);
    }

    function handleDelete(id){
        props.onClickDelete(id);
    }


    function showElementLevel(level) {
        let elmLevel = <span className="label label-default">Small</span>;
        if(level === 1){
            elmLevel = <span className="label label-info">Medium</span>;
        }else if(level === 2){
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }

    const { item, index } = props;

    return (
        <tr>
            <td className="text-center">{index + 1}</td>
            <td>{item.name}</td>
            <td className="text-center">{showElementLevel(item.level)}</td>
            <td>
                <button onClick={() => handleEdit(item)}  type="button" className="btn btn-warning">Edit</button>
                <button onClick={() => handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
            </td>   
        </tr>
    );
}

export default Item;
