const SPREADSHEET_ID = '1o_SfaRE555OUUPtoL2nblieDLUIqyfhSfen7ID0ydD8';

function doGet(e) {
  return saveResponse(e);
}

function doPost(e) {
  return saveResponse(e);
}

function saveResponse(e) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Responses');
  const data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.type || '',
    Number(data.investigatorScore || 0),
    Number(data.builderScore || 0),
    Number(data.communicatorScore || 0),
    Number(data.networkerScore || 0),
    Number(data.nurturerScore || 0),
    Number(data.resisterScore || 0),
    data.strengths || '',
    data.userAgent || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
