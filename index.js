const express 	= require('express');
const config  	= require('./config');

var app = express();

app.get('/', function (req, res) {

    res.end(`
        <!doctype html>
        <html>
        <body>
            <script src="https://cdn.cai.tools.sap/webchat/webchat.js"
			channelId="c4e05563-1c31-4402-a4af-36cfb449edc4"
			token="3e67ada0d49cec0657911fe48d16f8f9"
			id="cai-webchat"
			></script>
        </body>
        </html>
    `);
});

app.listen(config.PORT, () => console.log(`App started on port ${config.PORT}`)); 