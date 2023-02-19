import React from 'react';
import Search from './Search';
import Sort from './Sort';

const defaultClassBtn = ['btn', 'btn-block']

function Control(props) {
    
    function handleAdd(){
        props.onClickAdd();
    }

    let {orderBy, orderDir}  = props;

    const classBtn = props.isShowForm 
        ? [...defaultClassBtn, 'btn-success'] 
        : [...defaultClassBtn, 'btn-info']

    return (
        <div className="row">

            {/* SEARCH : START */}
            <Search onClickGo={props.onClickSearchGo}/>
            {/* SEARCH : END */}

            {/* SORT : START */}
            <Sort 
                onClickSort={props.onClickSort}
                orderBy={orderBy}
                orderDir={orderDir}
            />
            {/* SORT : END */}

            {/* ADD : START */}
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <button onClick={handleAdd} type="button" className={classBtn.join(' ')}>
                    { props.isShowForm ? 'Close Form' : 'Add Task' }
                </button>
            </div>
            {/* ADD : END */}
        </div>
    );
}

export default Control;
