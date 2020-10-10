const dateup = {weekday:"long" , month:'long' , day:'numeric' , year:'numeric'};
document.getElementById('lastmodified').textContent = new Date().toLocaleDateString('en-US', dateup)