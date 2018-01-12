# SushiCrusher
### [Live Website: https://pacific-ravine-93168.herokuapp.com/]

created by [Nick H](https://github.com/smugclimber)

#### key libraries and tech <br>
Node <br>
Express <br>
Handlebars <br>
MySQL <br>
Heroku <br>
NPM <br>
Git / Github <br>
jQuery <br>
Materialize <br>
Javascript <br>

#### about this project
A Sushi themed app that demonstrates development skill sets for Handlebars(a templating language), MySQL databases(DBs), and Node Express (providing the backend framework) all under the guise of Object Relational Mapping (ORM). The app represents a knowledge or ORM app builds. In this app: Add sushi to the DB, Eat the sushi and Watch it move from one DB table to another and demonstrate a functioning DB in a fun application. Enjoy!

### code
To interact with the Database, the below code uses simple DB calls for [orm](#orm) in the application's back end.
#### orm
code below is quoted from: sushi.js
```
var orm = require("../config/orm.js");

var sushi = {
  all: function(cb) {
    orm.all("sushi", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("sushi", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("sushi", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

```
