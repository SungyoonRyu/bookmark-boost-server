const mongoose = require('mongoose')
const { MONGO_DB_URL, MONGO_DB_NAME } = process.env

mongoose
    .connect(`${MONGO_DB_URL}/${MONGO_DB_NAME}`)
    .then(() => console.log(('Successfully connected to mongodb')))
    .catch(e => console.log(e));
