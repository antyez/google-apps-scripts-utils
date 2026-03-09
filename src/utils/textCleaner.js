function replaceTextInSheet(sheet, replaceNewText, newText) {
    const data = sheet.getDataRange().getValues();
    const updatedData = data.map(row => 
      row.map(cell => cell === replaceNewText ? newText : cell)
    );
    sheet.getRange(1, 1, updatedData.length, updatedData[0].length).setValues(updatedData);
  }
  
  function updateTexts() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // to add new elements to the array, keep the same format. Ex: {text to replace, new text} with "," at the end if you want to add more than 1.
    const replacements = [
      { replaceNewText: "Example", newText: "Model No. Example" }
    ];
    
    replacements.forEach(({ replaceNewText, newText }) => replaceTextInSheet(sheet, replaceNewText, newText));
  }
  
