//a Get all the countries from Asia continent/region usnig filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
   var res = result.filter((a)=>a.region==="Asia");
   var final = res.map((ele)=>console.log(ele.name.common));
}



//b Get all the countries with a population of less than 2 lakhs using filter function

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data1 = request1.response;
   var result1 = JSON.parse(data1);
   var res1 = result1.filter((a)=>a.population<200000);
   var Final = res1.map((ele)=>console.log(ele.name.common));
}

//c Print the following name,capital,flag using foreach function

var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload = function(){
    var data2 = request2.response;
    var result2 = JSON.parse(data2); 
    var res2= result2.forEach((ele)=>console.log(`Name: ${ele.name.common},Capital: ${ele.capital},Flag: ${ele.flags.png}`));
}


//d Print the total population of the countries using reduce fuction

var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload = function(){
    var data3 = request3.response;
    var result3 = JSON.parse(data3);
    var res3 = result3.reduce((acc,cv)=>{
        return acc+cv.population;
    },0)
 console.log(res3);
}

// e. Print the country that uses US dollars as currency.

var request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v3.1/all", true)
request4. send();
request4.onload = function( ) {
var data4 = request4.response;
var result4 = JSON.parse(data4);
const countriesWithUSD = result4.filter(country =>
country. currencies && country.currencies. USD
).map(country => country.name. common);

if (countriesWithUSD. length > 0) {
console. log("Countries that use US dollars as currency: " + countriesWithUSD.join(","));
} else {
console. log("No countries found that use US dollars as currency.");

}

}