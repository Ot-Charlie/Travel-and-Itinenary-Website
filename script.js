
const itineraryList = document.getElementById('itineraryList');
const searchResults = document.getElementById('searchResults');
const locationInput = document.getElementById('locationInput');
const searchBtn = document.getElementById('searchBtn');
const logoutBtn = document.getElementById('logoutBtn');

// Simulated data for itinerary items
let itineraryData = [];

// Simulated data for search results
const searchResultsData = [
  'London',
  'Tokyo',
  'Paris',
  'New York',
  'Sydney'
];

// Initialize itinerary list
function renderItinerary() {
  itineraryList.innerHTML = '';
  itineraryData.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    itineraryList.appendChild(li);
  });
}

// Initialize search results
function renderSearchResults() {
  searchResults.innerHTML = '';
  searchResultsData.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.textContent = result;
    resultItem.classList.add('result-item');
    searchResults.appendChild(resultItem);

    resultItem.addEventListener('click', () => {
      addLocationToItinerary(result);
    });
  });
}

// Add location to itinerary
function addLocationToItinerary(location) {
  itineraryData.push(location);
  renderItinerary();
}

// Search button click event
searchBtn.addEventListener('click', () => {
  renderSearchResults();
});

// Logout button click event
logoutBtn.addEventListener('click', () => {
  // Simulated logout action
  alert('Logged out');
});

// Initial rendering
renderItinerary();

// Remove location from itinerary
function removeLocationFromItinerary(index) {
    itineraryData.splice(index, 1);
    renderItinerary();
  }
  
  // Initialize itinerary list
  function renderItinerary() {
    itineraryList.innerHTML = '';
    itineraryData.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = item;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      
      deleteButton.addEventListener('click', () => {
        removeLocationFromItinerary(index);
      });
  
      li.appendChild(deleteButton);
      itineraryList.appendChild(li);
    });
  }
  
  
  
