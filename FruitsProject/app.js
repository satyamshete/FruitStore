const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/fruitsDB',
  {
    useNewUrlParser: true
  })

  const fruitSchema = new mongoose.Schema({
        name: String,
        rating: Number,
        review: String
  });
  const Fruit = mongoose.model("Fruit", fruitSchema);
  const fruit = new Fruit({
    name: "Kiwi",
    rating: 7,
    review: "Better fruit"
  });

  fruit.save();
  Fruit.find(function(err, fruits){
    if(err){
        console.log(err);
    }
    else{
       fruits.forEach(function (fruit) {
        // console.log(fruit.name);
       })
    }
    // mongoose.connection.close();
  })

  // let oldFruit = Fruit.findOneAndUpdate({name:"Apple"}, {rating: 7},function (err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("successful");
  //   }
    
  // })
  // console.log(oldFruit.name);

  Fruit.deleteMany({name:null}, {rating: 7},function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
    
  })
