// FLuxo
// - Evento de submit no formulário disparado pelo botão
// Captura do evento pelo search.addEventLIstener("submit", processar);
// - O evento captura o valor do input e coloca ele na url de requisição
// - É feita a requisição e a resposta é capturada por response.json();

const form = document.getElementById("form");
const cityInput = document.getElementById("input");

const h1 = document.getElementById("h1");
const img = document.getElementById("image");

const tempprincipal = document.getElementById("temp_principal");
const clima = document.getElementById("clima");
const tempmax = document.getElementById("text_temp_max");
const tempmin = document.getElementById("text_temp_min");
const umidade = document.getElementById("text_umidade");
const vento = document.getElementById("text_vento");
const temperatura = document.getElementsByClassName("temperatura");
const informacoes = document.getElementsByClassName("informacoes");

const processar = async (event) => {
  event.preventDefault();

  const cityName = cityInput.value;
  const key = "e39b30e6a08951a5002289e0d5f921ae";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${key}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    h1.textContent = data.name;
    tempprincipal.textContent = `${data.main.temp} C°`;
    clima.textContent = data.weather[0].description;
    tempmax.innerHTML = `Temp. Max. <br /> ${data.main.temp_max} C°`;
    tempmin.innerHTML = `Temp. Min. <br /> ${data.main.temp_min} C°`;
    umidade.innerHTML = `Umidade <br />
            ${data.main.humidity}%`;
    vento.innerHTML = `Vento <br /> ${data.wind.speed} KM/h`;

    h1.classList.add("visible");
    temperatura[0].classList.add("visible");
    informacoes[0].classList.add("visible");
  } catch (error) {
    console.log("Erro ao buscar dados", error);
  }
};

form.addEventListener("submit", processar);
