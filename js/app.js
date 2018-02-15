'use strict';

//Globals
var workHours = ['6am:' , '7am:' , '8am:', '9am:', '10am:' , '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
var allInfo = [];
var sumPerLocation = [];
var newForm = [];
var baseTableHead = document.getElementById('infoTable');
var newStoreForm = document.getElementById('addNewStore');
var submitButton = document.getElementById('submitButton');
var testP = document.getElementById('test');

//Constructor
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
        for (var i = 0; i < workHours.length; i++){
            var newHour = Math.ceil((this.randomCust() * this.averageCookie));
            var newCust = Math.ceil((newHour / this.averageCookie));
            this.cookiePerHour.push(newHour);
            this.custPerHour.push(newCust);
            this.totalCookieDay += newHour;
            this.totalCustDay += newCust;
        }
    }

    this.totalPerHour();
    allInfo.push(this);
};

//Render prototype
CookieStand.prototype.render = function(){
    var newTR = document.createElement('tr');
    baseTableHead.appendChild(newTR);

    var newTD = document.createElement('td');
    newTD.textContent = this.location;
    newTD.className = 'name';
    newTR.appendChild(newTD); 
    
    for (var i = 0; i < workHours.length; i++){
        newTD = document.createElement('td');
        newTD.className = 'data';
        newTD.textContent = this.cookiePerHour[i];
        newTR.appendChild(newTD);
    }  

    newTD = document.createElement('td');
    newTD.textContent = this.totalCookieDay;
    newTR.appendChild(newTD);
};

//Create data with new instances
var pikeStore = new CookieStand('1st and Pike' , 23 , 65 , 6.3);//1st and Pike /min 23/max 65/ avg 6.3
var airportStore = new CookieStand('SeaTac Airport' , 3 , 24 , 1.2);//SeaTac Airport/min 3/ max 24/avg 1.2
var centerStore = new CookieStand('Seattle Center' , 11 , 38 , 3.7);//Seattle Center/min 11/max 38/avg 3.7
var capitolStore = new CookieStand('Capitol Hill' , 20 , 38 , 2.3);//capitol hill/min 20/max 38/avg 2.3
var alkiStore = new CookieStand('Alki' , 2 , 16 , 4.6);//Alki/min 2/max 16/avg 4.6

//Table head function
function tableHead() {
    var newTableHead = document.createElement('tr');
    baseTableHead.appendChild(newTableHead);

    var newTableHeadBlank = document.createElement('td');
    newTableHeadBlank.textContent = 'Time';
    newTableHead.appendChild(newTableHeadBlank);

    for (var i = 0; i < workHours.length; i++){
        var newTableHeadRow = document.createElement('th');
        newTableHeadRow.textContent = workHours[i];
        newTableHead.appendChild(newTableHeadRow);
    }

    newTableHeadRow = document.createElement('td');
    newTableHeadRow.textContent = 'Total';
    newTableHead.appendChild(newTableHeadRow);
};

//Table foot function
function tableFoot() {
    var newTableFoot = document.createElement('tr');
    baseTableHead.appendChild(newTableFoot);

    var newTableFootBlank = document.createElement('td');
    newTableFootBlank.textContent = 'Totals';
    newTableFoot.appendChild(newTableFootBlank);

    var totalPerHourLocation = (function() {
        for (var i = 0; i < workHours.length; i++){
            var newSum = 0;
            for (var j = 0; j < allInfo.length; j++) {
                newSum += allInfo[j].cookiePerHour[i];
            }

            sumPerLocation.push(newSum);
        }
    }());

    for (var i = 0; i < workHours.length; i++){
            var newTableFootRow = document.createElement('th');
            newTableFootRow.textContent = sumPerLocation[i];
            newTableFoot.appendChild(newTableFootRow);
    }
};

//Calls to render on page
tableHead();
pikeStore.render();
airportStore.render();
centerStore.render();
capitolStore.render();
alkiStore.render();
tableFoot();

newStoreForm.addEventListener('submit', (event) => {
    event.preventDefault();
    new CookieStand (newStoreForm.elements[1].value, newStoreForm.elements[2].value, newStoreForm.elements[3].value, newStoreForm.elements[4].value)
    baseTableHead.innerHTML = '';
    tableHead();
    for (var i = 0; i < allInfo.length; i++){
        allInfo[i].render();
    }
    tableFoot();
});
