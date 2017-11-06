import React from 'react';

export default function CheckSubscribe(props) {
    function show() {
        if(props.data.active) {
            return <div className="check-subscribe">
                        <div className={`checkbox ${props.data.checked?'checked':''}`} onClick={props.check}>
                            {
                                props.data.checked ?
                                <img src="./img/checkbox-tick.png" alt="" />
                                :
                                ''
                            }
                        </div>
                        <h4>Покупаю подписку в подарок</h4>
                    </div>
        } else {
            return '';
        }
    }
    return (
        show()
    );
}