// Replaces new line characters with a separator in the last few rows of a specific column
// Current: V3. (08/24/2024)
// Optimized with batch operations to prevent script timeouts.
function replaceLastLineBreaks() {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName("Queries without answer");
    const lastRow = sheet.getLastRow();

    // Calculates the starting row to target only the last 5 entries or fewer if it is smaller
    const startRow = Math.max(1, lastRow - 4);
    const range = sheet.getRange(startRow, 7, lastRow - startRow + 1, 1);
    const data = range.getValues();

    // Iterate through rows and replace line breaks with '\n' with ' / '
    const updatedData = data.map(row => {
      const value = row[0];
      const isString = typeof value === 'string';
      const newValue = isString ? value.replace(/\n/g, ' / ') : value;
      return [newValue];
    });

    // Write back the processed data to the sheet in one operation
    range.setValues(updatedData);
  }
  
