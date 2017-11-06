import React from 'react';

export default function PreFooter(props) {
    return (
        <section className="pre-footer">
            {
                props.show?
                <button className="pay-btn">Оплатить</button>
                : ''
            }
            <div className="pre-footer-desc">
                <h5>Нет комиссий при оплате банковскими картами Яндекс.Деньгами и Qiwi</h5>
                <h5>Все платежи надёжно защищены и соответствуют международным стандартам</h5>
            </div>
        </section>
    );
}