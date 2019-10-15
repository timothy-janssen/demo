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
                    top: 50px;
                    width: 100%;
                    ">
            <b style="  display:inline-block;
                        color:white; 
                        background-color:red; 
                        font-size: 25px;
                        padding-top: 5px;   
                        padding-bottom: 5px;
                        padding-right: 10px;
                        padding-left: 10px;
                        
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


app.get('/chatbot-breakfast', function (req, res) {

    res.end(`
<!doctype html>
<html>

    <body style="background-image:url(./background.png); background-repeat: no-repeat;background-size: cover;">
         
        <script src="https://cdn.cai.tools.sap/webchat/webchat.js"
            channelId="833f1886-7c9b-496d-9952-eaf46d92f942"
            token="a9d2b226a26742f83f44b52f9a8efb61"
            id="cai-webchat">
        </script>
    </body>
</html>
    `);
});


app.get('/sfsf-chatbot-breakfast', function (req, res) {

    res.end(`
<!doctype html>
<html>

    <body style="background-image:url(./sfsf_background.png); background-repeat: no-repeat;background-size: cover;">
         
        <script src="https://cdn.cai.tools.sap/webchat/webchat.js"
            channelId="14740ab0-1097-40d0-bd6d-e44fe2053f55"
            token="9d6b5233cb253552e3eee3201f4fcfa4"
            id="cai-webchat">
        </script>
    </body>
</html>
    `);
});

app.listen(config.PORT, () => console.log(`App started on port ${config.PORT}`)); 