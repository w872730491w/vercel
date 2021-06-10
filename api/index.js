import axios from "axios";

const crypto = require('crypto');

module.exports = (req, res) => {
    const { signature, timestamp, nonce, echostr } = req.query;
    // const token = w872730491w;

    // const tmpStr = [token, timestamp, nonce].sort().join('');

    // const str = crypto.createHash('sha1').update(tmpStr).digest('hex')

    // if(str === signature) {

    // }

    // console.log(res);
    // 2002cd5e2c455cfbceda369ef4a32701
    res.send(echostr || '')

    // res.json({
    //     body: req.body,
    //     query: req.query,
    //     cookies: req.cookies,
    // });
};