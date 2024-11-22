const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

// to get body data in post requests
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// connect routes
const bookmarkRoutes = require('./routes/api_v1/bookmark');
app.use('/api', bookmarkRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})