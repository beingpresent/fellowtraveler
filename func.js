

$(document).ready(function() {
  $("div#show").click(function() {
    $("div#list").slideToggle();
  });
});

$('#check').click(function(){
    if ($(this).is(':checked')){
        $('#confirm').removeAttr('disabled');
    } else {
        $('#confirm').attr('disabled', 'disabled'); 
    }
});