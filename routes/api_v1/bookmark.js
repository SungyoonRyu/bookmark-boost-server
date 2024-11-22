const express = require('express')
const router = express.Router();

router.get('/bookmark', (req, res) => {
    res.send([
        {
            url: 'https://uroa.tistory.com/57',
            name: '[Node.js] module.exports와 exports 이해하기'
        },
        {
            url: 'https://velog.io/@kimhyo_0218/Node.js-express.js-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0',
            name: '[Node.js] express.js 시작하기'
        },
        {
            url: 'https://velog.io/@dsob/06-%EC%B0%A8%EC%9B%90%EC%B6%95%EC%86%8C',
            name: '[파이썬 머신러닝 완벽 가이드] 06. 차원축소'
        },
        {
            url: 'https://blog.naver.com/bi_matrix/222401361622',
            name: '[AI 용어] 머신러닝 알고리즘, K-NN과 K-Means란?'
        },
    ]);
});

router.post('/bookmark', (req, res) => {
    console.log(req.body.url);
    res.send('ok');
});

module.exports = router