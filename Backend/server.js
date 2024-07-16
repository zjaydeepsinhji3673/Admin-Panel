require('dotenv').config();

const express = require("express"); //express module
let app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
let cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000'
}))

var auth = require("./module/v1/auth/route");

app.use('/', require('./middleware/validate').validateApiKey);
app.use('/', require('./middleware/validate').validateHeaderToken);

app.use("/api/v1/auth",auth);

// Connection Creations
try {
    app.listen(process.env.PORT);
    console.log("server started: "+ process.env.PORT);
}
 catch(error)
{
    console.log(error);
}