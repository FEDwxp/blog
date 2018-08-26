const express = require('express');
const app = express();





app.listen(3000,(err) => {
    if(!err) {
        console.log('服务器启动成功');
        return;
    }
    console.log(err);
});