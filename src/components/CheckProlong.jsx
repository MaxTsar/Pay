import React from 'react';
import format from '../funcs/format.js';

export default function CheckProlong(props) {
    function toggleState() {
        props.setProlongTime(props.data.id)
    }
    return (
        <div className={`item-prolong ${props.data.active?'active':''}`} onClick={toggleState}>
            <img src={props.data.img} alt="" />
            <h4 className="prolong-time">{props.data.time}</h4>
            <p className="prolong-price">{format(props.data.price)} руб.</p>
            <h3 className="prolong-per"><span className="prolong-per-price">{props.data.perMonth}</span><span> руб./месяц</span></h3>
        </div>
    );
}