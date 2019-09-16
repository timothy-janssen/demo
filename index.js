const express 	= require('express');
const config  	= require('./config');

import bg from './background'

var app = express();

app.get('/', function (req, res) {

    res.end(`
        <!doctype html>
        <html>

        <body style="background-image:url({bg})">
         <script src="https://cdn.cai.tools.sap/webchat/webchat.js"
            channelId="58e7d997-157a-4587-822e-eb2fdc7ca5a5"
            token="1ebc7f310ce25d84f564dfd944ed4b08"
            id="cai-webchat"
            ></script>
        </body>
        </html>
    `);
});

app.listen(config.PORT, () => console.log(`App started on port ${config.PORT}`)); 