var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('button').click(searchCountries); // button dostaje żądanie searchCountries

function searchCountries() {
    var countryName = $('#country-name').val(); // nazwa wpisana przez usera zostaje przyporządkowana do countryName
if(!countryName.length) countryName = 'Papua New Guinea'; // Jeśli pole puste - automatycznie wpisana wartość docelowa
$.ajax({
      url: url + countryName, // url strony plus nazwa wpisana przez usera
      method: 'GET', // metoda pobierz
      success: showCountriesList // zwrócenie wyniku
    });
}

function showCountriesList(resp) { // funkcja odp. za pokazanie listy krajów
  countriesList.empty(); // wyczyszczenie listy przed każdym wyszukiwaniem
resp.forEach(function(item) {
  $('<li>').text(item.name).appendTo(countriesList); // dodanie nowego elementu
});
}
