function reportChecker(e) {
    const activeSheet = e.source.getActiveSheet();
    const sheetName = activeSheet.getName();
  
    const emailAddress = 'Email'; 
    const subject = 'Subject';
    
    const userEmail = Session.getEffectiveUser().getEmail();
    
    const body = `The ${sheetName} report has been modified.
    \n\nModified by: ${userEmail}`;
  
    const shouldSendEmail = sheetName === 'Report';
  
    shouldSendEmail && MailApp.sendEmail(emailAddress, subject, body);
  }
  
  function createTrigger() {
    ScriptApp.newTrigger('reportChecker')
      .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
      .onEdit()
      .create();
  }
