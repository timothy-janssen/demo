const express 	= require('express');
const config  	= require('./config');

var app = express();

app.use(express.static('./'));

app.get('/', function (req, res) {

    res.end(`
        <!doctype html>
        <html>

        <body style="background-image:url(./background.png); background-repeat: no-repeat;background-size: cover;">

        <div style="text-align:center;
                    position: absolute;
                    bottom: 30px;
                    width: 100%;
                    ">
            <b style="  display:inline-block;
                        color:white; 
                        background-color:red; 
                        font-size: 25px;
                        
                        ">Your challenge: Find 10 sentences I don't understand</b>
        </div>

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