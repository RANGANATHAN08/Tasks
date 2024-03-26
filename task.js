// Day 3 task  - que 2 and que 3 in one code
var request = new XMLHttpRequest();
request.open("GET" ,"https://restcountries.com/v3.1/all")
request.send();
request.onload = function()
{
    var data = request.response;
    var result = JSON.parse(data)
   // console.log(result[0].name.common);
   for(var i = 0 ; i < result.length ; i++)
   {
        console.log(result[i].name.common, result[i].region ,result[i].population , result[i].subregion); // to print name , region sub region and population
        console.log(result[i].flags.png)// to display all countries flags 
   }
}