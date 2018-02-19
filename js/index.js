'use strict';

var locationButton = document.getElementById('locationTop');
var hoursButton = document.getElementById('hoursTop');
var contactButton = document.getElementById('contactTop');

var mouseHover = (event) => {
    event.target.style.backgroundColor = 'rgb(2, 105, 109)';
    event.target.style.color = "#F53240";
    setTimeout(function(){
        event.target.style.backgroundColor = '#F53240';
        event.target.style.color = 'rgb(2, 105, 109)';
        event.target.parent.backgroundColor = 'rgb(2, 105, 109)';
    }, 200);
};

locationButton.addEventListener('mouseover', mouseHover);
hoursButton.addEventListener('mouseover' , mouseHover);
contactButton.addEventListener('mouseover', mouseHover);
contactButton.addEventListener('click' , () => {
    alert('Our number is currently disconnected, but will be online again soon!')
});