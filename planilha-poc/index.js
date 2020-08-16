const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./credentials.json");

// spreadsheet key is the long id in the sheets URL
const doc = new GoogleSpreadsheet(
  "1Wg1KWJOJq8O6K_Vz-Tv6S2ASHNgESd1BaT8yad3MLzU"
);

async function accessSpreadsheet() {
  await doc.useServiceAccountAuth(creds);

  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  const rows = await sheet.getRows({
    query: `Name = Tuna`,
  });
  // console.log(sheet.title);
  // console.log(rows);

  rows.forEach((row) => {
    console.log(row.Name);
  });

  //add row
  // await sheet.addRow({ name: "marcos" });
}

accessSpreadsheet();
