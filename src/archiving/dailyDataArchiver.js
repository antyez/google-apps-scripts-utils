// Transfers daily queries to the history sheet and resets specific input fields
function transferClearConsultations() {
    const currentDay = new Date().getDay();
    // logical check: 0 is sunday, 6 is saturday we only run from monday(1) to friday(5)
    const shouldExecute = currentDay >= 1 && currentDay <= 5;
    // Technical decision: Decided to not include this if it is not weekday due performance.
    // if (!shouldExecute) return;
    
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const consultationsSheet = ss.getSheetByName("Today Queries");
    const historySheet = ss.getSheetByName("History");

    // define data range to be archived
    const consultationsRange = consultationsSheet.getRange("A3:P250");
    const consultationsData = consultationsRange.getValues();

    // find the first emptyh row in the history sheet to append data
    const lastHistoryRow = historySheet.getLastRow();
  
    shouldExecute && historySheet.getRange(lastHistoryRow + 1, 1, consultationsData.length, consultationsData[0].length).setValues(consultationsData);

    // clear specific input fields
    shouldExecute && consultationsSheet.getRange("F3:I250").clearContent();

    // log was used during tests 
    // console.log("Data migrated successfully")
  }
  
