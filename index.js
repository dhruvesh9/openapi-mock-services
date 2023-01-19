const express = require('express');
const bodyParser = require('body-parser');

const genericRoute = require("./routes/generic.route");
const generalErrorRoute = require('./routes/general_error.route');
const authRoute = require('./routes/auth.route');

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
})
app.use('/mock', genericRoute);
app.use("/mock/auth", authRoute);

app.listen(process.env.PORT || 5000, function () {
    console.log("node server running on port 5000");
});

module.exports = app