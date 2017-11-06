import React from 'react';

export default function AutoDesc(props) {
    function show() {
        if(props.show) {
            return <p className="auto-desc">В конце срока подписка продлится автоматически. Вы можете выключить<br/>
            автопродление в любой момент в настройках или отменить его.</p>
        }
        return '';
    }
    return (
        show()
    );
}