
const refresh = document.getElementById('refresh_page');
const newRequests = document.getElementById('new_requests');
const pendingRequests = document.getElementById('pending_requests');

function refreshPage() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
  });
}

function openNewRequests() {
  // your code goes here
}

function openPendingRequests() {
  // your code goes here
}

window.addEventListener('DOMContentLoaded', function() {
  
  // refresh.addEventListener('click', refreshPage);
  refresh.addEventListener('click', function() {
    refreshPage();
  });

  newRequests.addEventListener('click', function() {
    openNewRequests();
  });

  pendingRequests.addEventListener('click', function() {
    openPendingRequests();
  });

});
