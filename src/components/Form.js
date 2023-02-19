import React, { useState, useEffect } from 'react';

function Form(props) {
    const [newTaskItem, setNewTaskItem] = useState({
        task_id: '',
        task_name: '',
        task_level: 0
    })

    useEffect(() => {
        if(props.itemSelected) {
            setNewTaskItem({
                task_id: props.itemSelected.id,
                task_name: props.itemSelected.name,
                task_level: props.itemSelected.level
            })
        }
    }, [props.itemSelected])

    function handleChange(event) {
        const target = event.target;    // input selectbox
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        setNewTaskItem({
            ...newTaskItem,
            [name]: value
        })

    }

    function handleSubmit(event) {
        event.preventDefault();
        let item = {
            name: newTaskItem.task_name,
            id: newTaskItem.task_id,
            level: newTaskItem.task_level,
        };

        props.onClickSubmit(item);
    }

    function handleCancel() {
        props.onClickCancel();
    }

    return (
        <div className="row">
            <div className="col-md-offset-7 col-md-5">
                <form onSubmit={handleSubmit} className="form-inline">

                    <div className="form-group">
                        <label className="sr-only">label</label>
                        <input value={newTaskItem.task_name} onChange={handleChange} name="task_name" type="text" className="form-control" placeholder="Task Name" />
                    </div>

                    <div className="form-group">
                        <label className="sr-only">label</label>
                        <select value={newTaskItem.task_level} onChange={handleChange}  name="task_level" className="form-control" required="required" >
                    Small
                            <option value={0}>Small</option>
                            <option value={1}>Medium</option>
                            <option value={2}>High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={handleCancel} type="button" className="btn btn-default">Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
