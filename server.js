var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var htmlRouter = require('./app/routing/htmlRoutes');
var apiRouter = require('./app/routing/apiRoutes');

app.use(htmlRouter);
app.use(apiRouter);

//   api/tables -> get request res.json()

  app.get("/api/survey", function(req,res){
      return res.json(tables);
  });

// api/waitlists -> get res.json() wait list info

  app.listen(PORT, function(){
    console.log('App is listening at your port');
})