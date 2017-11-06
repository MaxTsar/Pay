import React from 'react';

export default function PaymentCard(props) {
    function changeStatus() {
        props.changeStatus(props.data.id);
    }
    
    function setImg() {
        if(props.data.state.gray) {
            return props.data.images.bw;
        } else {
            return props.data.images.normal;
        }
    }

    function setTypePayment() {
        if(props.data.type === 'img') {
            return <img src={setImg()} alt={props.data.name}/>;
        } else if(props.data.type === 'text') {
            return <div>
                <h3>{props.data.text.title}</h3>
                <p>{props.data.text.desc}</p>
            </div>
        } else {
            if(props.data.state.show) {
                return <h3>{props.data.name}</h3>
            } else {
                return '';
            }
        }
    }
    return (
        <div className="payment-card-wrap">
            {
                props.data.state.show ?
                    <div className={`payment-card ${props.data.state.active ?'active':''} ${props.data.state.gray?'gray':''}`} 
                                    onClick={changeStatus}>
                        {
                            setTypePayment()
                        }
                    </div>
                :
                ''
            }
        </div>
    );
}