const paymentsMethods = [
    {
        id: 0,
        name: 'VISA',
        state: {
            active: false,
            gray: false,
            show: true
        },
        type: 'img',
        images: {
            normal: '../img/sprite.payment-cards.png',
            bw: '../img/sprite.payment-cards-bw.png'
        }
    },
    {
        id: 1,
        name: 'Yandex',
        state: {
            active: false,
            gray: false,
            show: true
        },
        type: 'img',
        images: {
            normal: '../img/sprite.payment-yandexmoney.png',
            bw: '../img/sprite.payment-yandexmoney-bw.png'
        }
    },
    {
        id: 2,
        name: 'PayPal',
        state: {
            active: false,
            gray: false,
            show: true
        },
        type: 'img',
        images: {
            normal: '../img/sprite.payment-paypal.png',
            bw: '../img/sprite.payment-paypal-bw.png'
        }
    },
    {
        id: 3,
        name: 'WebMoney',
        state: {
            active: false,
            gray: false,
            show: true
        },
        type: 'img',
        images: {
            normal: '../img/sprite.payment-webmoney.png',
            bw: '../img/sprite.payment-webmoney-bw.png'
        }
    },
    {
        id: 4,
        name: 'SMS',
        state: {
            active: false,
            gray: false,
            show: true
        },
        type: 'text',
        text: {
            title: 'SMS',
            desc: 'Только для России'
        }
    },
    {
        id: 5,
        name: 'Qiwi',
        state: {
            active: false,
            gray: false,
            show: true
        },
        type: 'img',
        images: {
            normal: '../img/sprite.payment-qiwi.png',
            bw: '../img/sprite.payment-qiwi-bw.png'
        }
    },
    {
        id: 6,
        name: 'Подарочный код',
        state: {
            active: false,
            gray: false,
            show: true
        },
        type: 'code'
    }
];

export default paymentsMethods;