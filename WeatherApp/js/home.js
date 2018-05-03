$(document).ready(function () {

    $('#get-weather').click(function() {

    if (validateZipCode($('#zip-code').val()) == false) {
        return;
    }

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

    var windLabel;

    if (units == 'imperial') {
        windLabel = 'mph';
    }

    if (units == 'metric') {
        windLabel = 'kph';
    }

        $.ajax({
            type: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',us&units=' + units + apiKey,
            success: function(weatherData) {
                $('#errorMessages').empty();
                $('#contentRows').empty();
                $('#mainWeatherDiv').empty();
                $('#currentConditions').hide();
                
                var tempRow = '<tr>';
                tempRow += '<td>' + 'Temperature: ' + weatherData.main.temp + tempLabel + '</td>';
                tempRow += '</tr>';
                var humidRow = '<tr>';
                humidRow += '<td>' + 'Humidity: ' + weatherData.main.humidity + '%</td>';
                humidRow += '</tr>';
                var windRow = '<tr>';
                windRow += '<td>' + 'Wind: ' + weatherData.wind.speed + windLabel + '</td>';
                windRow += '</tr>';

                contentRows.append(tempRow);
                contentRows.append(humidRow);
                contentRows.append(windRow);            

                var weatherImage = '<img src="http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png">';
                $('#mainWeatherDiv').append(weatherImage);
                var weatherMain = weatherData.weather[0].main;
                var weatherSpecific = weatherData.weather[0].description;
                $('#mainWeatherDiv').append(weatherMain + ': ' + weatherSpecific);
                
                $('#inCity').text('Current Conditions in ' + weatherData.name);
                $('#currentConditions').toggle();
                                             

            },
            error: function() {
                $('#errorMessages').append($('<li>')
                .attr({class: 'list-group-item list-group-item-danger'})
                .text('Error calling web service.  Please try again later.'));
            }
        })

        //another ajax call for five day

        $.ajax({
            type: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zipCode + ',us&units=' + units + apiKey,
            success: function(weatherData)  {

                $('#day1Rows').empty();
                $('#day2Rows').empty();
                $('#day3Rows').empty();
                $('#day4Rows').empty();
                $('#day5Rows').empty();
                $('#fiveDay').hide(); 
                //var day1Rows = $('#day1Rows')

                //var daysArray = [weatherData.list];

                //day 1

                var day1Rows = $('#day1Rows');

                var dateRow = '<tr>';
                dateRow += '<td>' + 'Date: ' + weatherData.list[0].dt_txt + '</td>';
                dateRow += '</tr>'
                day1Rows.append(dateRow);    

                var mainRow = '<tr>';
                mainRow += '<td>' + '<img src="http://openweathermap.org/img/w/' 
                + weatherData.list[0 + 4].weather[0].icon + '.png">' 
                + ' ' + weatherData.list[0 + 4].weather[0].main + '</td>';
                mainRow += '</tr>';
                day1Rows.append(mainRow);  

                var tempRow = '<tr>';
                tempRow += '<td>' + 'Temp: ' + weatherData.list[0 + 4].main.temp + tempLabel + '</td>';
                tempRow += '</tr>';
                day1Rows.append(tempRow);

                //day 2
                var day2Rows = $('#day2Rows');

                var dateRow = '<tr>';
                dateRow += '<td>' + 'Date: ' + weatherData.list[7 + 4].dt_txt + '</td>';
                dateRow += '</tr>'
                day2Rows.append(dateRow);    

                var mainRow = '<tr>';
                mainRow += '<td>' + '<img src="http://openweathermap.org/img/w/' 
                + weatherData.list[7 + 4].weather[0].icon + '.png">' 
                + ' ' + weatherData.list[7 + 4].weather[0].main + '</td>';
                mainRow += '</tr>';
                day2Rows.append(mainRow);  

                var tempRow = '<tr>';
                tempRow += '<td>' + 'Temp: ' + weatherData.list[7 + 4].main.temp + tempLabel + '</td>';
                tempRow += '</tr>';
                day2Rows.append(tempRow);

                //day 3
                var day3Rows = $('#day3Rows');

                var dateRow = '<tr>';
                dateRow += '<td>' + 'Date: ' + weatherData.list[15 + 4].dt_txt + '</td>';
                dateRow += '</tr>'
                day3Rows.append(dateRow);    

                var mainRow = '<tr>';
                mainRow += '<td>' + '<img src="http://openweathermap.org/img/w/' 
                + weatherData.list[15 + 4].weather[0].icon + '.png">' 
                + ' ' + weatherData.list[15 + 4].weather[0].main + '</td>';
                mainRow += '</tr>';
                day3Rows.append(mainRow);  

                var tempRow = '<tr>';
                tempRow += '<td>' + 'Temp: ' + weatherData.list[15 + 4].main.temp + tempLabel + '</td>';
                tempRow += '</tr>';
                day3Rows.append(tempRow);

                //day 4
                var day4Rows = $('#day4Rows');

                var dateRow = '<tr>';
                dateRow += '<td>' + 'Date: ' + weatherData.list[23 + 4].dt_txt + '</td>';
                dateRow += '</tr>'
                day4Rows.append(dateRow);    

                var mainRow = '<tr>';
                mainRow += '<td>' + '<img src="http://openweathermap.org/img/w/' 
                + weatherData.list[23 + 4].weather[0].icon + '.png">' 
                + ' ' + weatherData.list[23 + 4].weather[0].main + '</td>';
                mainRow += '</tr>';
                day4Rows.append(mainRow);  

                var tempRow = '<tr>';
                tempRow += '<td>' + 'Temp: ' + weatherData.list[23 + 4].main.temp + tempLabel + '</td>';
                tempRow += '</tr>';
                day4Rows.append(tempRow);

                //day 5
                var day5Rows = $('#day5Rows');

                var dateRow = '<tr>';
                dateRow += '<td>' + 'Date: ' + weatherData.list[31 + 4].dt_txt + '</td>';
                dateRow += '</tr>'
                day5Rows.append(dateRow);    

                var mainRow = '<tr>';
                mainRow += '<td>' + '<img src="http://openweathermap.org/img/w/' 
                + weatherData.list[31 + 4].weather[0].icon + '.png">' 
                + ' ' + weatherData.list[31 + 4].weather[0].main + '</td>';
                mainRow += '</tr>';
                day5Rows.append(mainRow);  

                var tempRow = '<tr>';
                tempRow += '<td>' + 'Temp: ' + weatherData.list[31 + 4].main.temp + tempLabel + '</td>';
                tempRow += '</tr>';
                day5Rows.append(tempRow);

                $('#fiveDay').toggle();

            },
            error: function(){
                $('#errorMessages').append($('<li>')
                .attr({class: 'list-group-item list-group-item-danger'})
                .text('Error calling web service.  Please try again later.'));
            }
            
        })

        
    });


})

function validateZipCode(zipCodeEntry) {
    $('#errorMessages').empty();
    if (zipCodeEntry.length < 5) {
        $('#errorMessages').append($('<li>').attr({ class: 'list-group-item list-group-item-danger' }).text('Zip code: Please enter a 5-digit zip code'));
        $('#currentConditions').hide();
        $('#fiveDay').hide();
        return false;
    }
}