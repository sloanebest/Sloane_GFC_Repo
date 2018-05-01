$(document).ready(function () {

    $('h1').addClass('text-center');
    $('h2').addClass('text-center');
    $('#myBanner').addClass('page-header');
    $('#yellowHeading').text('Yellow Team');
    $('#orangeTeamList').css('background-color', 'orange');
    $('#blueTeamList').css('background-color', 'blue');
    $('#redTeamList').css('background-color', 'red');
    $('#yellowTeamList').css('background-color', 'yellow');
    $('#yellowTeamList').append('<li>Joseph Banks</li> <li>Simon Jones</li>');
    $('#oops').hide();
    $('#footerPlaceholder').remove();
    $('#footer').add('p').text('email and contact');
    $('#footer').css('font-size', '24px').css('font-family', 'Courier');
    //$('#footer').css('font-family', 'Courier');
    
});