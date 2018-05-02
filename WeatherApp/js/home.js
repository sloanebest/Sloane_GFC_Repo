$(document).ready(function () {

    $('#get-weather').click(function() {

    var contentRows = $('#contentRows');
    var zipCode = $('#zip-code').val();
    var units = $('#units').val();
    var apiKey = '&APPID=8a7f96c7bd46fb77e70988bcecfe36e0'

    var tempLabel;

    if (units == 'imperial') {
        tempLabel = 'F';
    }
    
    if (units == 'metric') {
        tempLabel = 'C';
    }

        $.ajax({
            type: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&units=' + units + apiKey,
            success: function(weatherData) {
                alert('call success ' + weatherData.name);
                
                var tempRow = '<tr>';
                tempRow += '<td>' + 'Temperature: ' + weatherData.main.temp + tempLabel + '</td>';
                tempRow += '</tr>';
                var humidRow = '<tr>';
                humidRow += '<td>' + 'Humidity: ' + weatherData.main.humidity + '</td>';
                humidRow += '</tr>';
                var windRow = '<tr>';
                windRow += '<td>' + 'Wind: ' + weatherData.wind.speed + '</td>';
                windRow += '</tr>';

                contentRows.append(tempRow);
                contentRows.append(humidRow);
                contentRows.append(windRow);

                console.log(weatherData.weather[0].icon);

                var weatherImage = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png">';
                $('#mainWeatherDiv').append(weatherImage);
                var weatherMain = weatherData.weather[0].main;
                var weatherSpecific = weatherData.weather[0].description;
                $('#mainWeatherDiv').append(weatherMain + ': ' + weatherSpecific);
                
                $('#inCity').text('Current Conditions in ' + weatherData.name);
                $('#currentConditions').toggle();
                $('#fiveDay').toggle();                             

            },
            error: function() {
                alert('error');
                // $('#errorMessages')
                // .append($('<li>')
                // .attr({class: 'list-group-item list-group-item-danger'})
                // .text('Error calling web service.  Please try again later.'));
            }
        })
 
    });

})