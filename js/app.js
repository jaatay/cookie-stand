var workHours = ['6am:' , '7am:' , '8am:', '9am:', '10am:' , '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', '8pm:'];

var pikeStore = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    averageCookie: 6.3,
    totalPerHour: [],
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    cookiePerHour: function() {
        for (i = 0; i < workHours.length; i++) {
            var newHour = (this.randomCust() * this.averageCookie);
            this.totalPerHour.push(newHour);
        }
    }
};

var airportStore = {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    averageCookie: 1.2,
    totalPerHour: [],
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    cookiePerHour: function() {
        for (i = 0; i < workHours.length; i++) {
            var newHour = (this.randomCust() * this.averageCookie);
            this.totalPerHour.push(newHour);
        }
    }
};

var centerStore = {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    averageCookie: 3.7,
    totalPerHour: [],
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    cookiePerHour: function() {
        for (i = 0; i < workHours.length; i++) {
            var newHour = (this.randomCust() * this.averageCookie);
            this.totalPerHour.push(newHour);
        }
    }
};

var capitolStore = {
    name: 'Capitol Hill',
    minCust: 23,
    maxCust: 65,
    averageCookie: 2.3,
    totalPerHour: [],
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    cookiePerHour: function() {
        for (i = 0; i < workHours.length; i++) {
            var newHour = (this.randomCust() * this.averageCookie);
            this.totalPerHour.push(newHour);
        }
    }
};

var alkiStore = {
    name: 'Alki',
    minCust: 2,
    maxCust: 16,
    averageCookie: 4.6,
    totalPerHour: [],
    randomCust: function(){
       return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    cookiePerHour: function() {
        for (i = 0; i < workHours.length; i++) {
            var newHour = (this.randomCust() * this.averageCookie);
            this.totalPerHour.push(newHour);
        }
    }
};

printUpdate = (name) => {
    name.cookiePerHour();
    document.write('<h1>' + name.name + '</h1>');
    for (i = 0; i < workHours.length; i++){
        document.write(workHours[i] + ' ' + name.totalPerHour[i] + '<br/>');
    }
};

printUpdate(pikeStore);
printUpdate(airportStore);
printUpdate(centerStore);
printUpdate(capitolStore);
printUpdate(alkiStore);

