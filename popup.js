
const refreshPage = document.getElementById('refresh_page');
const newRequests = document.getElementById('new_requests');
const pendingRequests = document.getElementById('pending_requests');

function refreshPage() {
  chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    var code = 'window.location.reload();';
    chrome.tabs.executeScript(arrayOfTabs[0].id, {code: code});
});
}

function openNewRequests() {
  // your code goes here
}

function openPendingRequests() {
  // your code goes here
}

window.addEventListener('DOMContentLoaded', function() {
  
  // refreshPage.addEventListener('click', refreshPage);
  refreshPage.addEventListener('click', function() {
    refreshPage();
  });

  newRequests.addEventListener('click', function() {
    openNewRequests();
  });

  pendingRequests.addEventListener('click', function() {
    openPendingRequests();
  });

});
