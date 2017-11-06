import React from 'react';
import format from '../funcs/format.js';

export default function Total(props) {
    function totalPrice() {
        const result = +props.data.price + +150;
        if(props.data.discount) {
            return result + '';
        }
        return props.data.price + '';
    }
    return (
        <div className="total-wrap">
            <h2 className="section-title">Итого к оплате <span>(за {props.data.time})</span></h2>
            <h3 className="total-price">
                {
                    props.data.discount ?
                    <span className="">{format(props.data.price)}</span>
                    :''
                }
                {
                    props.data.discount ?
                    <span className=""> + 150 = </span> 
                    : ''
                }
                <span className="total-price-amount">{format(totalPrice())}</span>
                <span className="rub"> руб.</span>
            </h3>
            {
                props.every ?
                <p>Далее 120 руб. в месяц</p>
                : ''
            }
            <div className="discount-wrap">
                <div className={`checkbox ${props.data.discount?'checked':''}`} 
                    onClick={props.changeDiscount}>
                    {
                        props.data.discount ?
                        <img src="./img/checkbox-tick.png" alt="" />
                        :
                        ''
                    }
                </div>
                <h4>Добавить подписку на скидку 5% на весь ассортимент товаров</h4>
            </div>
            <p className="small-desc">Срок действия подписки 6 месяцев. Стоимость подписки 150 руб.</p>
        </div>
    );
}