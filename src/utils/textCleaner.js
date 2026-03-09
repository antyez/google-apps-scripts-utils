// Replaces a specific v alue with a new string across the entire sheet.
function replaceTextInSheet(sheet, replaceNewText, newText) {
    // Technical decision: process data in memory for high performance.
    const data = sheet.getDataRange().getValues();
    const updatedData = data.map(row => 
      row.map(cell => cell === replaceNewText ? newText : cell)
    );
    // overwrites the sheet with updated values in a single API call
    sheet.getRange(1, 1, updatedData.length, updatedData[0].length).setValues(updatedData);
  }
    // Manages the list of replacements and applies them
  function updateTexts() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // To add more elements, keep the same format.
    const replacements = [
      { replaceNewText: "Example", newText: "Model No. Example" }
    ];

    // Iterates through the replacement list and executes the cleaning function
    replacements.forEach(({ replaceNewText, newText }) => replaceTextInSheet(sheet, replaceNewText, newText));
  }
  
