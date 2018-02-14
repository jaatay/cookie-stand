var workHours = ['6am:' , '7am:' , '8am:', '9am:', '10am:' , '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
var allInfo = [];
//constructor function

function CookieStand(location, minCust, maxCust, averageCookie){
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.averageCookie = averageCookie;
    this.cookiePerHour = [];
    this.custPerHour = [];
    this.totalCookieDay = 0;
    this.totalCustDay = 0;

    this.randomCust = function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    };

    this.totalPerHour = function(){
        for (i = 0; i < workHours.length; i++){
            var newHour = Math.ceil((this.randomCust() * this.averageCookie));
            var newCust = Math.ceil((newHour / this.averageCookie));
            this.cookiePerHour.push(newHour);
            this.custPerHour.push(newCust);
            this.totalCookieDay += newHour;
            this.totalCustDay += newCust;
        }
    }

    allInfo.push(this);
};

/*saleUpdate = (name) => {
    name.totalPerHour();
    document.write('<h1>' + name.location + '</h1>');
    document.write('<p class="total">Total Cookies: ' + name.totalCookieDay + ' Total Customers: ' + name.totalCustDay + '</p>');
    for (i = 0; i < workHours.length; i++){
        document.write('<li>' + workHours[i] + ' ' + name.cookiePerHour[i] + ' cookies ' + name.custPerHour[i] + ' customers</li>');   
    }
};*/

var pikeStore = new CookieStand('1st and Pike' , 23 , 65 , 6.3);//1st and Pike /min 23/max 65/ avg 6.3
var airportStore = new CookieStand('SeaTac Airport' , 3 , 24 , 1.2);//SeaTac Airport/min 3/ max 24/avg 1.2
var centerStore = new CookieStand('Seattle Center' , 11 , 38 , 3.7);//Seattle Center/min 11/max 38/avg 3.7
var capitolStore = new CookieStand('Capitol Hill' , 20 , 38 , 2.3);//capitol hill/min 20/max 38/avg 2.3
var alkiStore = new CookieStand('Alki' , 2 , 16 , 4.6);//Alki/min 2/max 16/avg 4.6

saleUpdate(pikeStore);
saleUpdate(airportStore);
saleUpdate(centerStore);
saleUpdate(capitolStore);
saleUpdate(alkiStore);

