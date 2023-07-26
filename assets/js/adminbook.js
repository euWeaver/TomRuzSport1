let SHEET_ID = '1CXa4Vv_dja0h6mdqIEKqgVw4QjPjz99HXwmRbNOWn4s';
let SHEET_TITLE = 'Dates disabled';
let SHEET_TITLE1 = 'Dates disabled admin';
let SHEET_RANGE = 'D2:D4200';
let SHEET_RANGE1 = 'I2:I4200';
let SHEET_RANGE2 = 'N2:N4200';
var date1 = new Date();
var date2 = new Date();
let disabledDates = [];
let disabledDates1 = [];
let disabledDates2 = [];
let formattedDates = [];
let formattedDates1 = [];
let formattedDates2 = [];
var dates = [];
function fetchData() {
  let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE2}`;

  return fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      for (let i = 0; i < data.table.rows.length ; i++) {
          disabledDates.push(data.table.rows[i].c[0].v); // Push the first element of each row (from the first column)
      }
     
      return Promise.resolve();
    });
}
function fetchTotalData() {
  let FULL_URL1 = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE1}&range=${SHEET_RANGE2}`;

  return fetch(FULL_URL1)
    .then(res => res.text())
    .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      for (let i = 0; i < data.table.rows.length ; i++) {
        disabledDates.push(data.table.rows[i].c[0].v); // Push the first element of each row (from the first column)
    }
    // function to extract date parts and format
function formatDate(disabledDate) {
  let dateParts = disabledDate.match(/\d+/g);
  let year = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]) + 1; // JavaScript's getMonth() is 0-based
  let day = parseInt(dateParts[2]);

  let dateObj = new Date(year, month - 1, day); // -1 since JavaScript's Date months are 0-based

  month = '' + month;
  day = '' + dateObj.getDate();
  year = dateObj.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [month, day, year].join('/');
}

// create a new array of formatted dates
 formattedDates = disabledDates.map(formatDate);

      return Promise.resolve();
});
}
// Call fetchData and fetchTotalData sequentially
fetchData()
.then(fetchTotalData)
.catch(error => {
console.error("Error fetching data:", error);
});
function fetchData1() {
  let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;

  return fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      for (let i = 0; i < data.table.rows.length ; i++) {
          disabledDates1.push(data.table.rows[i].c[0].v); // Push the first element of each row (from the first column)
      }
     
      return Promise.resolve();
    });
}
function fetchTotalData1() {
  let FULL_URL1 = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE1}&range=${SHEET_RANGE}`;

  return fetch(FULL_URL1)
    .then(res => res.text())
    .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      for (let i = 0; i < data.table.rows.length ; i++) {
        disabledDates1.push(data.table.rows[i].c[0].v); // Push the first element of each row (from the first column)
    }
       // function to extract date parts and format
function formatDate(disabledDate1) {
  let dateParts = disabledDate1.match(/\d+/g);
  let year = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]) + 1; // JavaScript's getMonth() is 0-based
  let day = parseInt(dateParts[2]);

  let dateObj = new Date(year, month - 1, day); // -1 since JavaScript's Date months are 0-based

  month = '' + month;
  day = '' + dateObj.getDate();
  year = dateObj.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [month, day, year].join('/');
}

// create a new array of formatted dates
 formattedDates1 = disabledDates1.map(formatDate);

      return Promise.resolve();
});
}
// Call fetchData and fetchTotalData sequentially
fetchData1()
.then(fetchTotalData1)
.catch(error => {
console.error("Error fetching data:", error);
});
function fetchData2() {
  let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE1}`;

  return fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      for (let i = 0; i < data.table.rows.length ; i++) {
          disabledDates2.push(data.table.rows[i].c[0].v); // Push the first element of each row (from the first column)
      }
      
     
      return Promise.resolve();
    });
}
function fetchTotalData2() {
  let FULL_URL1 = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE1}&range=${SHEET_RANGE1}`;

  return fetch(FULL_URL1)
    .then(res => res.text())
    .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      for (let i = 0; i < data.table.rows.length ; i++) {
        disabledDates2.push(data.table.rows[i].c[0].v); // Push the first element of each row (from the first column)
    }
    
     // function to extract date parts and format
function formatDate(disabledDates2) {
  let dateParts = disabledDates2.match(/\d+/g);
  let year = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]) + 1; // JavaScript's getMonth() is 0-based
  let day = parseInt(dateParts[2]);

  let dateObj = new Date(year, month - 1, day); // -1 since JavaScript's Date months are 0-based

  month = '' + month;
  day = '' + dateObj.getDate();
  year = dateObj.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [month, day, year].join('/');
}

// create a new array of formatted dates
  formattedDates2 = disabledDates2.map(formatDate);

      return Promise.resolve();
});
}
// Call fetchData and fetchTotalData sequentially
fetchData2()
.then(fetchTotalData2)
.catch(error => {
console.error("Error fetching data:", error);
});
function dateCarType() {
  let typeC = document.getElementById("car").value;
  if (typeC == "Audi RS3 Sportback") {
     dates = formattedDates;
    
  } else if (typeC == "Dodge Charger") {
     dates = formattedDates1;
    
  } else if (typeC == "Ford Mustang") {
     dates = formattedDates2;
  }
  if (dates.length === 0) {
    // If the array is empty, wait 1 second and then try again
    setTimeout(dateCarType, 1000);
  }
  }
  dateCarType();
date2.setDate(date2.getDate() + 1);
document.getElementById("p_date").value = date1;
const fDate1 = date1.toLocaleDateString("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});
const fDate2 = date2.toLocaleDateString("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});
document.getElementById("p_date").value = fDate1;
document.getElementById("d_date").value = fDate2;
function DisableDates(date) {
  var string = jQuery.datepicker.formatDate('mm/dd/yy', date);
  return [dates.indexOf(string) == -1];
}
  $(function() {
   $("#p_date").datepicker({
       changeYear: true,
       changeMonth:true,
       dateFormat: 'mm/dd/yy',
       minDate: 0,
       beforeShowDay: DisableDates
   });
});
$(function() {
   $("#d_date").datepicker({
       changeYear: true,
       changeMonth:true,
       dateFormat: 'mm/dd/yy',
       minDate: 0,
       beforeShowDay: DisableDates
   });
});

$('#form').on('submit', function(e) {
    setTimeout(function() {
      window.location.href = "admin.html"; // This will redirect the page after 3 seconds
    }, 2000);
  });