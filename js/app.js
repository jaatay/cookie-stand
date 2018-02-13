var workHours = ['6am:' , '7am:' , '8am:', '9am:', '10am:' , '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

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
};

var pikeStore = {
    location: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    averageCookie: 6.3,
    cookiePerHour: [],
    custPerHour: [],
    totalCookieDay: 0,
    totalCustDay: 0,
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    totalPerHour: function(){
        for (i = 0; i < workHours.length; i++){
            var newHour = Math.ceil((this.randomCust() * this.averageCookie));
            var newCust = Math.ceil((newHour / this.averageCookie));
            this.cookiePerHour.push(newHour);
            this.custPerHour.push(newCust);
            this.totalCookieDay += newHour;
            this.totalCustDay += newCust;
        }
    }
};

var airportStore = {
    location: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    averageCookie: 1.2,
    cookiePerHour: [],
    custPerHour: [],
    totalCookieDay: 0,
    totalCustDay: 0,
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    totalPerHour: function(){
        for (i = 0; i < workHours.length; i++){
            var newHour = Math.ceil((this.randomCust() * this.averageCookie));
            var newCust = Math.ceil((newHour / this.averageCookie));
            this.cookiePerHour.push(newHour);
            this.custPerHour.push(newCust);
            this.totalCookieDay += newHour;
            this.totalCustDay += newCust;
        }
    }
};

var centerStore = {
    location: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    averageCookie: 3.7,
    cookiePerHour: [],
    custPerHour: [],
    totalCookieDay: 0,
    totalCustDay: 0,
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    totalPerHour: function(){
        for (i = 0; i < workHours.length; i++){
            var newHour = Math.ceil((this.randomCust() * this.averageCookie));
            var newCust = Math.ceil((newHour / this.averageCookie));
            this.cookiePerHour.push(newHour);
            this.custPerHour.push(newCust);
            this.totalCookieDay += newHour;
            this.totalCustDay += newCust;
        }
    }
};

var capitolStore = {
    location: 'Capitol Hill',
    minCust: 23,
    maxCust: 65,
    averageCookie: 2.3,
    cookiePerHour: [],
    custPerHour: [],
    totalCookieDay: 0,
    totalCustDay: 0,
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
   totalPerHour: function(){
        for (i = 0; i < workHours.length; i++){
            var newHour = Math.ceil((this.randomCust() * this.averageCookie));
            var newCust = Math.ceil((newHour / this.averageCookie));
            this.cookiePerHour.push(newHour);
            this.custPerHour.push(newCust);
            this.totalCookieDay += newHour;
            this.totalCustDay += newCust;
        }
    }
};

var alkiStore = {
    location: 'Alki',
    minCust: 2,
    maxCust: 16,
    averageCookie: 4.6,
    cookiePerHour: [],
    custPerHour: [],
    totalCookieDay: 0,
    totalCustDay: 0,
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    totalPerHour: function(){
        for (i = 0; i < workHours.length; i++){
            var newHour = Math.ceil((this.randomCust() * this.averageCookie));
            var newCust = Math.ceil((newHour / this.averageCookie));
            this.cookiePerHour.push(newHour);
            this.custPerHour.push(newCust);
            this.totalCookieDay += newHour;
            this.totalCustDay += newCust;
        }
    }
};

saleUpdate = (name) => {
    name.totalPerHour();
    document.write('<h1>' + name.location + '</h1>');
    document.write('<p class="total">Total Cookies: ' + name.totalCookieDay + ' Total Customers: ' + name.totalCustDay + '</p>');
    for (i = 0; i < workHours.length; i++){
        document.write('<li>' + workHours[i] + ' ' + name.cookiePerHour[i] + ' cookies ' + name.custPerHour[i] + ' customers</li>');   
    }
};

var newStore = new CookieStand('blah' , 10, 100 , 5.3);
var thisStore = new CookieStand('red creek' , 20, 40, 6.1);
saleUpdate(pikeStore);
saleUpdate(airportStore);
saleUpdate(centerStore);
saleUpdate(capitolStore);
saleUpdate(alkiStore);
saleUpdate(newStore);
saleUpdate(thisStore);
