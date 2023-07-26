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
var carType = localStorage.getItem("carType");
if (carType == "Ford Mustang") {
  document.getElementById("car-type1").innerHTML = carType;
  document.getElementById("car").value = carType;
  document.getElementById("igType").src = "assets/img/car/02.jpg";
} else if (carType == "Dodge Charger") {
  document.getElementById("car-type1").innerHTML = carType;
  document.getElementById("car").value = carType;
  document.getElementById("igType").src = "assets/img/car/01.jpg";

} else if (carType == "Audi RS3 Sportback") {
  document.getElementById("car-type1").innerHTML = carType;
  document.getElementById("rxPrice").innerHTML = "€199 <sub>/ day</sub>";
  document.getElementById("car").value = carType;
  document.getElementById("igType").src = "assets/img/car/10.jpg";

}
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
var date1 = new Date();
var date2 = new Date();
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
let prices = [
  149.0,
  144.0,
  139.0,
  134.17,
  129.51,
  125.02,
  120.68,
  116.49,
  112.44,
  108.54,
  104.77,
  101.13,
  97.62,
  94.23,
  90.96,
  87.8,
  84.75,
  81.81,
  78.97,
  76.23,
  73.58,
  71.02,
  68.56,
  66.18,
  63.88,
  61.66,
  59.52,
  57.45,
  55.46,
  53.99,
  49.99,
  44.99,
  39.99,
  29.99,
];
let prices1 = [199.00, 192.32, 185.64, 179.19, 172.97, 166.97, 161.18, 155.58, 150.17, 144.96, 139.93, 135.07, 130.38, 125.85, 121.48, 117.26, 113.19, 109.26, 105.47, 101.81, 98.27, 94.85, 91.57, 88.39, 85.32, 82.35, 79.49, 76.73, 75.07, 73.99, 66.99, 60.99, 54.99, 40.99];

//release custom location
document.addEventListener("DOMContentLoaded", function () {
  var switchButton = document.getElementById("switchButton");
  var switchButton1 = document.getElementById("switchButton1");
  var deliveryField = document.getElementById("delivery");
  var pickUpField = document.getElementById("pick_up");
  var dropField = document.getElementById("drop");
  var dropOffField = document.getElementById("drop_off");

  // Initial state
  deliveryField.disabled = true;
  pickUpField.disabled = true;
  dropField.disabled = true;
  dropOffField.disabled = true;
  switchButton.addEventListener("change", function () {
    deliveryField.disabled = !this.checked;
    pickUpField.disabled = !this.checked;
  });
  switchButton1.addEventListener("change", function () {
    dropField.disabled = !this.checked;
    dropOffField.disabled = !this.checked;
  });
});

let insuranceServiceState = "1";
document.getElementById("insurance").addEventListener("change", function () {
  insuranceServiceState = this.value;
  checkDates();
});
let cleaningServiceState = "0";
document.getElementById("cleaning").addEventListener("change", function () {
  cleaningServiceState = this.checked ? "1" : "0";
  checkDates();
});
let distanceServiceState = "0";
document.getElementById("distance").addEventListener("change", function () {
  distanceServiceState = this.checked ? "1" : "0";
  checkDates();
});
function checkDates() {
  let p_date = document.getElementById('p_date').value; // assuming 'p_date' is the id of an input field
  let d_date = document.getElementById('d_date').value; // assuming 'd_date' is the id of an input field
  
  // converting string dates in "MM/DD/YYYY" format to Date objects
  p_date = new Date(p_date);
  d_date = new Date(d_date);

  const conflictExists = dates.some(dateStr => {
      // convert string dates in "MM/DD/YYYY" format to Date objects
      const date = new Date(dateStr);

      return date >= p_date && date <= d_date;
  });

  if (conflictExists) {
     
      total = "Please select a valid date";
      Difference_In_Days = "Please select a valid date";
      document.getElementById("total1").value = total;
      document.getElementById("rentDuration").value = Difference_In_Days;
      document.getElementById("butS").disabled = true;

  } else {
      
      function getTotal() {
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
        if (carType == "Audi RS3 Sportback") {
          var total = prices1[Difference_In_Days - 1] * Difference_In_Days;
        }else{
        var total = prices[Difference_In_Days - 1] * Difference_In_Days;
        }
      
        if (Difference_In_Days >= 1 && Difference_In_Days <= 30) {
          if (carType == "Audi RS3 Sportback") {
              total = prices1[Difference_In_Days - 1] * Difference_In_Days;
            }else{
              total = prices[Difference_In_Days - 1] * Difference_In_Days;
            }
        } else if (Difference_In_Days > 30 && Difference_In_Days <= 90) {
          
          if (carType == "Audi RS3 Sportback") {
              total = prices1[30] * Difference_In_Days; //32nd item, index is 30 because JavaScript array indices start at 0
            }else{
              total = prices[30] * Difference_In_Days; //32nd item, index is 30 because JavaScript array indices start at 0
            }
        } else if (Difference_In_Days > 90 && Difference_In_Days <= 180) {
          if (carType == "Audi RS3 Sportback") {
              total = prices1[31] * Difference_In_Days; //32nd item, index is 30 because JavaScript array indices start at 0
            }else{
              total = prices[31] * Difference_In_Days; //32nd item, index is 30 because JavaScript array indices start at 0
            }
        } else if (Difference_In_Days > 180 && Difference_In_Days <= 360) {
          if (carType == "Audi RS3 Sportback") {
              total = prices1[32] * Difference_In_Days; //32nd item, index is 30 because JavaScript array indices start at 0
            }else{
              total = prices[32] * Difference_In_Days; //32nd item, index is 30 because JavaScript array indices start at 0
            }
        } else if (Difference_In_Days > 360) {
              if (carType == "Audi RS3 Sportback") {
              total = prices1[32] * Difference_In_Days; //32nd item, index is 30 because JavaScript array indices start at 0
            }else{
              total = prices[32] * Difference_In_Days; //32nd item, index is 30 because JavaScript array indices start at 0
            }
        } else if (Difference_In_Days == 0) {
          if (carType == "Audi RS3 Sportback") {
              total = 199; //32nd item, index is 30 because JavaScript array indices start at 0
            }else{
              total = 149; //32nd item, index is 30 because JavaScript array indices start at 0
            }
           // or whatever you want to default to if the Difference_In_Days value doesn't fall into the above ranges
        } else {
        }
        if (insuranceServiceState === "1") {
          if (Difference_In_Days == 0) {
            total += 20;
          } else if (Difference_In_Days < 0) {
            total += 20;
          } else {
            total += 20 * Difference_In_Days;
          }
        }
      
        if (cleaningServiceState === "1") {
          if (distanceServiceState === "1") {
            total = total * 1.3 + 100;
          } else {
            total += 100;
          }
        } else {
          if (distanceServiceState === "1") {
            total = total * 1.3;
          }
        }
        if (Difference_In_Days < 0) {
          total = "Please select a valid date";
          Difference_In_Days = "Please select a valid date";
          document.getElementById("total1").value = total;
          document.getElementById("butS").disabled = true;
        } else if (Difference_In_Days === 0) {
          Difference_In_Days = 1;
          total = total.toFixed(2);
          document.getElementById("total1").value = "€" + total;
          document.getElementById("butS").disabled = false;
        } else {
          total = total.toFixed(2);
          document.getElementById("total1").value = "€" + total;
          document.getElementById("butS").disabled = false;
        }
      
        document.getElementById("rentDuration").value = Difference_In_Days;
      }
getTotal();
  }
}
 checkDates();
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
      window.location.href = "car-checkout-en.html"; // This will redirect the page after 3 seconds
    }, 2000);
  });