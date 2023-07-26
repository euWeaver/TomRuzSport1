let SHEET_ID = '1CXa4Vv_dja0h6mdqIEKqgVw4QjPjz99HXwmRbNOWn4s';
let SHEET_TITLE = 'Sheet1';
let SHEET_TITLE1 = 'Total';
let SHEET_RANGE = 'A1:T1200';
let SHEET_RANGE1 = 'A1:L1200';


let formatTime = function(timeString) {
  const match = timeString.match(/(\d+),(\d+),(\d+),(\d+),(\d+),(\d+)/);
  
  if (match) {
    const [, , , , hour, minute] = match;
    const formattedHour = parseInt(hour, 10);
    const formattedMinute = parseInt(minute, 10);
  
    const formattedTime = `${formattedHour.toString().padStart(2, '0')}:${formattedMinute.toString().padStart(2, '0')}`;
    return formattedTime;
  }
  
  return null;
};

function setSpanValue(elementId, value) {
  document.getElementById(elementId).innerHTML = value;
}

function fetchData() {
  let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;

  return fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));
      let row_id = data.table.rows.length - 1;
      localStorage.setItem('row_id', row_id);
      row_id1 = row_id;
      
      let carN = data.table.rows[row_id].c[0].v;
      let pickUp = data.table.rows[row_id]?.c[1]?.v || "Mere pst. 4, Tallinn, Estonia";
      let dropF = data.table.rows[row_id]?.c[2]?.v || "Mere pst. 4, Tallinn, Estonia";
      let pDate = data.table.rows[row_id].c[3].v;
      let dDate = data.table.rows[row_id].c[4].v;
      let pTime = data.table.rows[row_id].c[5].v;
      let dTime = data.table.rows[row_id].c[6].v;
      let ins = data.table.rows[row_id].c[9].v;
      let clean = data.table.rows[row_id]?.c[10]?.v || "No";
      let dist = data.table.rows[row_id]?.c[11]?.v || "No";
  
      let clean1 = "No";
      if (clean == "on") {
        clean1 = "Yes";
      }
      let dist1 = "No";
      if (dist == "on") {
        dist1 = "Yes";
      }
      if (ins == "1") {
        ins1 = "Yes";
      }else if (ins == "0") {
        ins1 = "No";
      }
      let fTimeP = formatTime(pTime);
      let fTimeD = formatTime(dTime);

      setSpanValue("carN", carN);
      setSpanValue("pickUp", pickUp);
      setSpanValue("dropF", dropF);
      setSpanValue("pDate", pDate);
      setSpanValue("dDate", dDate);
      setSpanValue("pTime", fTimeP);
      setSpanValue("dTime", fTimeD);
      setSpanValue("ins", ins1);
      setSpanValue("clean", clean1);
      setSpanValue("dist", dist1);

      return Promise.resolve();
    });
}

function fetchTotalData() {
  let FULL_URL1 = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE1}&range=${SHEET_RANGE1}`;

  return fetch(FULL_URL1)
    .then(res => res.text())
    .then(rep => {
      let data = JSON.parse(rep.substr(47).slice(0, -2));

      let total = data.table.rows[row_id1]?.c[0]?.v || 0;
      let dur = data.table.rows[row_id1]?.c[3]?.v || 0;
      let rent = data.table.rows[row_id1]?.c[5]?.v || 0;
      let delP = data.table.rows[row_id1]?.c[6]?.v || 0;
      let delD = data.table.rows[row_id1]?.c[7]?.v || 0;
      let insP = data.table.rows[row_id1]?.c[8]?.v || 0;
      let cleanP = data.table.rows[row_id1]?.c[9]?.v || 0;
      let distP = data.table.rows[row_id1]?.c[10]?.v || 0;
      let dep = data.table.rows[row_id1].c[11].v;
      setSpanValue("total", total);
      setSpanValue("dur", dur);
      setSpanValue("rent", rent);
      setSpanValue("delP", delP);
      setSpanValue("delD", delD);
      setSpanValue("insP", insP);
      setSpanValue("cleanP", cleanP);
      setSpanValue("distP", distP);
      setSpanValue("dep", dep);
       
      localStorage.setItem('amount', total);
      return Promise.resolve();
    });
}

// Call fetchData and fetchTotalData sequentially
fetchData()
  .then(fetchTotalData)
  .catch(error => {
    console.error("Error fetching data:", error);
  });
  