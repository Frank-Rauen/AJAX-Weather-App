$('form').on('submit', (event) =>{
    event.preventDefault();
    const userInput = $('input[type = "text"]').val();
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?appid=748c648c1a83be10f1608e4048797989&q=' + userInput +
        '&units=imperial'
    }).then(
        (data) => {
            console.log(data);
            $('#city-name').html(data.name);
            $('#description').html(data.weather[0].description);
            $('#temperature').html(data.main.temp + ' Farenheit');
            $('#high').html(data.main.temp_max + ' Farenheit');
            $('#low').html(data.main.temp_min + ' Farenheit');
            $('#humidity').html(data.main.humidity + ' Percent');
            $('#wind-speed').html(data.wind.speed + ' Knots');
        },
        (error) => {
            console.log('Error: ', error);
        });
});