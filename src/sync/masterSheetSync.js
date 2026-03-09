// Syncrhonizes data from multiple spreadsheets into a single master sheet
// Works best when a large team is working in different spreadsheets but the data is needed in the same source.
const SOURCE_SHEET_URLS = [
    'sheet1',
    'sheet2',
    'sheet3'
  ];
  
  const MASTER_SHEET_NAME = 'Sheet Name'; 
  
  function syncData() {
    const masterSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(MASTER_SHEET_NAME);

    // Clear the master sheet before importing fresh data
    masterSheet && masterSheet.clear();

    // Iterate through each source URL to extract data
    SOURCE_SHEET_URLS.forEach(url => {
      const sourceSheet = SpreadsheetApp.openByUrl(url).getActiveSheet();
      const data = sourceSheet.getDataRange().getValues();

    // Append each row from the source to the master sheet
      data.forEach(row => masterSheet && masterSheet.appendRow(row));
    });

    // This log is preference for execution tracking
    Logger.log('Data synchronized successfully.');
  }


// Google Apps Script has its own native way to add triggers so this might not be needed
// This was a technical decision to avoid potential locale conflicts or manual setup errors

// Configures the sync to run automatically every 4 hours.
  function createTrigger() {
    ScriptApp.newTrigger('syncData')
      .timeBased()
      .everyHours(4)
      .create();
  }
