let express = require("express");
let xcel = require("xlsx");
const cors = require("cors");

let app = express();

app.use(cors());
app.get("/dummyData", (req, res) => {
  try {
    let parsedData = [];
    const data = xcel.readFile("./data.xlsx");
    const sheetNames = data.SheetNames;

    for (let sheet of sheetNames) {
      const tempData = xcel.utils.sheet_to_json(data.Sheets[sheet]);
      parsedData.push(...tempData);
    }
    res.send(parsedData);
  } catch (err) {
    console.log("Error in call");
    res.send("Error: " + err.statusText);
  }
});
app.listen(7000, () => {
  console.log("Server running on port 7000");
});
