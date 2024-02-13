$(document).ready(function()
{
    $('#btnId').html("Jag är ändrad");
    $('button').css("background", "green");

    $('#klick').click(function()
    {
        alert("Du klickade på mig");
    });

    $('#btnId').click(function()
    {
        $('#box').css("background-color", "blue");
    });

    $('#box').click(function()
    {
        $('#box').hide();
    });

    $('#myBtn').click(function()
    {
        $('#myBtn').fadeOut();
    });


});