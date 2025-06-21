const input = document.querySelector(".input");
const button = document.querySelector(".btn");

button.addEventListener("click", function() {
    const apiKey = "974ab5635af57a642649ed9624975812";
    const inputValue = input.value;
    if (inputValue === "") {
        alert("Будь нормальним!")
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric&lang=ua`
    )
      .then((Response) => {
        if (!Response.ok) {
          console.log("error");
        }
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        const content = document.querySelector(".content");
        content.classList.toggle("hidden");
        const city = document.querySelector(".city");
        city.textContent = `${data.name}`;
        const tempa = document.querySelector(".tempa");
        tempa.textContent = `${data.main.temp}°C`;
        const weather = document.querySelector(".weather");
        weather.textContent = `${data.weather[0].description}`;
        const windSpeed = document.querySelector(".wind-speed");
        windSpeed.textContent = `Вітер ${data.wind.speed} м/с`;
      })
      .catch((error) => {
        console.log(error);
      });
});

