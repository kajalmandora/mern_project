const{ MongoClint, MongoClient} = require("mongodb");

const Db = process.env.ATLAS_URI;

const client = new MongoClient(Db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

Let_db;

module.exports={
    conneectToServer: function(callback){
        client.connect(function(err,db){
            if(db){
                _db = db.db("rmployees")
                console.log("Successfully connected to be");
            }
            return cancelIdleCallback(err);
        });
    },
    getDb:function(){
        return _db;
    },
};