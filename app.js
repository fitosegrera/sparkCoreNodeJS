var Spark = require("spark-io");
var board = new Spark({
  token: "882f49cbdb362eb190fe5145f076fffb2f8630ea",
  deviceId: "55ff72065075555345280287"
});

board.on("ready", function() {
  console.log("connected to technoshaman-core...");
  // Log all the readings for A1
  this.analogRead("A0", function(data) {
    console.log("A0: "+data);
  });
  this.analogRead("A1", function(data) {
    console.log("A1: "+data);
  });
  this.analogRead("A2", function(data) {
    console.log("A2: "+data);
  });
  
});