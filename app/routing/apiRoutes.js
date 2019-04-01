
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        return res.json(friends)
    });
    
    app.get("/api/survey", function(req,res){
              return res.json(res);
          });

    app.post("/api/survey",function(req, res){

    });
};
