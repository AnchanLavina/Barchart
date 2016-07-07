fs = require('fs')
fs.readFile('Assignment.csv', 'utf8', function (err,data) {
if (err) {
  return console.log(err);
}

data1=csvJSON(data);
 console.log(data1);
var wstream = fs.createWriteStream('output1.json');
 wstream.write(data1);
 wstream.end();
});
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};

	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
      if(headers[j]=="Country Name" )
      {
		  obj["Country"] = currentline[j];
	    }
     if(headers[j]=="Population (Millions) 2013" )
     {
      obj["Population"] = currentline[j];
     }

  }
	  result.push(obj);

    }

      result.sort(function (a, b)
   {
      return b.Population-a.Population;
   });
    // console.log(result);
return JSON.stringify(result);
}
