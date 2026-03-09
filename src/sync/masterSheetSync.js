const SOURCE_SHEET_URLS = [
    'sheet1',
    'sheet2',
    'sheet3'
  ];
  
  const MASTER_SHEET_NAME = 'Sheet Name'; 
  
  function syncData() {
    const masterSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(MASTER_SHEET_NAME);
    
    masterSheet && masterSheet.clear();
  
    SOURCE_SHEET_URLS.forEach(url => {
      const sourceSheet = SpreadsheetApp.openByUrl(url).getActiveSheet();
      const data = sourceSheet.getDataRange().getValues();
      
      data.forEach(row => masterSheet && masterSheet.appendRow(row));
    });

    // This log is preference
    Logger.log('Data synchronized successfully.');
  }


// Google App Scripts has its own native way to add triggers so this might not be needed. This was a technical decision to avoid potential locale conflicts.
  function createTrigger() {
    ScriptApp.newTrigger('syncData')
      .timeBased()
      .everyHours(4)
      .create();
  }
