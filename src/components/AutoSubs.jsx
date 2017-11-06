import React from 'react';

export default function AutoSubs(props) {
    function toggleAutoSubs() {
        props.toggleAutoSubs();
    }

    function show() {
        if(props.data.show) {
            return  <div className="prolong-subs-wrap">
                        <div className="prolong-subs-checkbox">
                            <section className="prolong-subs-checkbox-wrap">
                                <div className={`checkbox ${props.data.checked?'checked':''}`} onClick={toggleAutoSubs}>
                                    {
                                        props.data.checked ?
                                        <img src="./img/checkbox-tick.png" alt="" />
                                        :
                                        ''
                                    }
                                </div>
                                <h4>Продлевать подписку автоматически</h4>
                            </section>
                        </div>
                        <p className="small-desc">Оплачивая подписку, я принимаю условия оплаты, указанные в оферте и условия автоматического<br />
                        продления подписки на месяц вперед</p>
                    </div>
        }
        return '';
    }

    return (
       show()
    );
}