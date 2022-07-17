
const refreshPage = document.getElementById('refresh_page');
const newRequests = document.getElementById('new_requests');
const pendingRequests = document.getElementById('pending_requests');

function refreshPage() {
  //
}

function openNewRequests() {
  //
}

function openPendingRequests() {
  //
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
