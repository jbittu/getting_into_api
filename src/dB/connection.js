const mangoose = require('mongoose');


mangoose.connect("mangodb://localhost:27017")
.then(() => console.log("Connected to MongoDB..."))
.catch((err)=> console.error(`Could not connect to MongoDB...${err}`));