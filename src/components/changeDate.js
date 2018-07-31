import React from 'react';

const ChangeDate = (title, callback) => {
    return (
        <button key={1} className="change-date" onClick={callback}>
        {title}
        <i className="far fa-calendar-alt"></i>
        </button>
    )
}

export default ChangeDate;