// Monitors changes in the spreadsheet and sends an email notification
function reportChecker(e) {
    // gets where the edit occurred
    const activeSheet = e.source.getActiveSheet();
    const sheetName = activeSheet.getName();

    // set recipient and subject line
    const emailAddress = 'Email'; 
    const subject = 'Subject';

    // user who made the change
    const userEmail = Session.getEffectiveUser().getEmail();

    // creates the notification body
    const body = `The ${sheetName} report has been modified.
    \n\nModified by: ${userEmail}`;

    // checks if the edited sheet is the target report sheet
    const shouldSendEmail = sheetName === 'Report';

    // sends email if the condition is met
    shouldSendEmail && MailApp.sendEmail(emailAddress, subject, body);
  }

// manual trigger needs to be activated at least once before implementing otherwise it will fail since it does not have the proper permissions by default 
  function createTrigger() {
    ScriptApp.newTrigger('reportChecker')
      .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
      .onEdit()
      .create();
  }
