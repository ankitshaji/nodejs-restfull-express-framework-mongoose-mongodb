//main file of an app that gets other npm package modules or user created modules

//RESTful webApi - using REST principles
const express = require("express"); //FunctionObject //express module
const path = require("path"); //pathObject //path module
const app = express(); //AppObject
//mongoose ODM - has callback but also supports promises-ie returns promiseObject (pending,undefined) to -resove(value)(fullfulled,value) or reject(errorMessage)(rejected,errorMessage)
const mongoose = require("mongoose"); //mongooseObject //mongoose module
const Product = require("./models/product"); //productClassObject(ie Model) //self created module/file needs "./"

// *******************************************
// CONNECT - nodeJS runtime app connects to default mogod server port + creates db
// *******************************************
//mongooseObject.method(url/defaultPortNo/databaseToUse,optionsObject-notNeeded) //returns promiseObject pending
mongoose
  .connect("mongodb://localhost:27017/farmstanddb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //promisObject resolved
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    //promisObject rejected
    console.log("Mongo connection error has occured");
    console.log(err);
  });
//Dont need to nest code inside callback - Operation Buffering
//mongoose lets us use models immediately,without wainting
//for mongoose to eastablish a connection to MongoDB

//when view engine is used express assumes our views ie ejs templates
//exist in a (default)views directory
app.set("view engine", "ejs"); //auto require("ejs")
//change path to absolute path to index.js
app.set("views", path.join(__dirname, "/views"));

//RESTful webApi crud operations pattern

//httpMethod=get,path/resource-/test  -(direct match/exact path)
//(READ) name-index,purpose-display all comments from DB server
//convert (http structured) request to req jsObject + create res jsObject
app.get("/test", (req, res) => {
  res.send("test"); //content-type:text/plain + converted to httpStructued response
});

//adddress - localhost:3000
//app is listening for (HTTPstructured) requests
//executes callback
app.listen(3000, () => {
  console.log("listning on port 3000;");
});
