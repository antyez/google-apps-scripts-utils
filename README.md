# Google Apps Script Utils 

A robust collection of Google Apps Script (GAS) utilities designed for high-stakes corporate environments. These scripts were developed and deployed to streamline workflows for over 200 users, focusing on data integrity, automated reporting, and cross-departmental synchronization.

## Proven Impact
These scripts are battle-tested solutions:
* **Scale:** Successfully managed workflows for over 200+ active users.
* **Performance:** Optimized with batch operations to handle large-scale data without hitting Google's execution time limits.
* **Reliability:** Built with technical safeguards (like in-memory processing and weekday logic) to ensure zero downtime in production.

## Key Modules

### 1. Daily Data Archiver (`dailyDataArchiver.js`)
Automates the transition from operational data to historical records.
* **Smart Scheduling:** Logic-gate ensures execution only during business days (Mon-Fri).
* **Automated Cleanup:** Moves data from "Today Queries" to "History" and resets input fields to ready the sheet for the next business day.

### 2. Corporate Report Notifications (`reportNotification.js`)
Real-time monitoring for critical spreadsheets.
* **Audit Trail:** Captures the email of the user making changes using `Session.getEffectiveUser()`.
* **Targeted Alerts:** Specifically monitors the "Report" sheet to avoid notification fatigue.
* **Installable Triggers:** Optimized to run with elevated permissions for seamless email dispatch.

### 3. Master Sheet Synchronizer (`masterSheetSync.js`)
The "Single Source of Truth" engine. 
* **Multi-Source Aggregation:** Pulls data from multiple distributed spreadsheets into a centralized Master Sheet.
* **Time-Based Sync:** Configured to automatically refresh every 4 hours, ensuring data consistency across large teams.

### 4. Advanced Formatting & Cleaning (`formattingUtils.js` & `textCleaner.js`)
Tools for maintaining data hygiene and readability.
* **Batch Processing:** Processes data in-memory to prevent script timeouts in large datasets.
* **Regex Sanitization:** Automatically converts messy line breaks

## Project Structure

| File | Purpose | Trigger Type |
| :--- | :--- | :--- |
| `dailyDataArchiver.js` | Data archiving & field reset | Time-driven (Daily) |
| `reportNotification.js` | Edit alerts & user tracking | OnEdit (Installable) |
| `masterSheetSync.js` | Cross-sheet data consolidation | Time-driven (4-hour) |
| `formattingUtils.js` | String sanitization & formatting | Manual / UI |
| `textCleaner.js` | High-speed data replacement | Manual / UI |

## Setup & Installation

### Option A: Manual Setup
1. Open your Google Sheet.
2. Navigate to **Extensions > Apps Script**.
3. Copy the contents from the `.js` files in this repo into the Google editor.
4. Save and run the `createTrigger()` functions where applicable.

### Option B: Using Clasp (Recommended)

```bash
# Clone the repository
git clone [https://github.com/antyez/google-apps-scripts-utils.git](https://github.com/antyez/google-apps-scripts-utils.git)

# Navigate to the folder
cd google-apps-scripts-utils

# Push to your Google Script project
clasp push
