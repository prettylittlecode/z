const mongoose = require("mongoose");
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

class Database {

    constructor(){
        this.connect()
    }

const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI; // assuming MONGODB_URI is an environment variable containing the connection string

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

module.exports = new Database();
