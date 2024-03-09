const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_real_value = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer'); // Fix: Add a dot before 'middle_layer'
const curDay = document.getElementById("day");
const curDate = document.getElementById("today_data");

const getCurrentDay = () => {
    const weekday =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const CurrentTime = new Date();
    let day = weekday[CurrentTime.getDay()];
    return day;
};

const getCurrentTime = () => {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();
    let hours = now.getHours();
    let mins = now.getMinutes();
    let perios = "AM";
    if (hours > 11) {
        perios = "PM"
        if (hours > 12) {
            hours -= 12;
        }
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    return `${month} ${date} |  ${hours}:${mins} ${perios}`
};
curDay.innerHTML =  getCurrentDay();
curDate.innerHTML =  getCurrentTime();





const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityname.value;
    if (cityVal == "") {
        city_name.innerText = `please write the city name`;
        datahide.classList.add("data_hide");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&lat=44.34&lon=10.99&appid=715c83dc9dca1131216ec74fcaca9644`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            const tempKelvin = arrData[0].main.temp;
            temp_real_value.innerText = (tempKelvin - 273).toFixed(2);
            const tempmood = arrData[0].weather[0].main;


            if (tempmood == "clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
            } else if (tempmood == "clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color:#f1f2f6;'></i>";
            } else if (tempmood == "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-rain' style='color:#a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
            }

            datahide.classList.remove("data_hide");
        } catch {
            city_name.innerText = `please write the city name properly`;
            datahide.classList.add("data_hide");
        }
    }
};

submitbtn.addEventListener('click', getInfo);




