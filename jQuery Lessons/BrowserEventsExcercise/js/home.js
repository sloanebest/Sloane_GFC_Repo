$(document).ready(function () {
    
       $('#akronInfoDiv').hide();
       $('#minneapolisInfoDiv').hide();
       $('#louisvilleInfoDiv').hide();

        $('#akronButton').click(function(){
            $('#mainInfoDiv').hide();
            $('#akronInfoDiv').show();
            $('#minneapolisInfoDiv').hide();
            $('#louisvilleInfoDiv').hide();
        })

        $('#akronWeatherButton').click(function() {
            $('#akronWeather').toggle();

        })

        $('#minneapolisButton').click(function(){
            $('#mainInfoDiv').hide();
            $('#akronInfoDiv').hide();
            $('#minneapolisInfoDiv').show();
            $('#louisvilleInfoDiv').hide();
        })

        $('#minneapolisWeatherButton').click(function() {
            $('#minneapolisWeather').toggle();
        })

        $('#louisvilleButton').click(function(){
            $('#mainInfoDiv').hide();
            $('#akronInfoDiv').hide();
            $('#minneapolisInfoDiv').hide();
            $('#louisvilleInfoDiv').show();
        })

        $('#louisvilleWeatherButton').click(function() {
            $('#louisvilleWeather').toggle();
        })

        $('tr').hover(function() {
            $(this).css('background-color', 'WhiteSmoke');
        },
    function () {
        $(this).css('background-color', '');
    })


});

