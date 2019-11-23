$('form').on('submit', (event) =>{
    event.preventDefault();
    const userInput = $('input[type = "text"]').val();
    $.ajax({
        url: 'api.openweathermap.org/data/2.5/weather?q=' + userInput
    })
});