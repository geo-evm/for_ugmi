 // Задаем середину и зум
 var mymap = L.map('mapid').setView([48.810, 30.526], 5.5);

 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
     maxZoom: 18,
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
     id: 'mapbox/streets-v11',
     tileSize: 512,
     zoomOffset: -1
 }).addTo(mymap);

// указываем путь и размер иконки
let iconOptions = {
         iconUrl: 'https://iconfair.com/cepsools/2020/11/Artboard-12-11.png?v=1617619902',
         iconSize: [70, 70]
      }
      // Creating a custom icon
let customIcon = L.icon(iconOptions);

// Создаем маркеры
marker1=L.marker([51.059011803373316, 30.52033437018091], {title:'Київ', icon: customIcon}).addTo(mymap)
     .bindPopup("<b>Київ</b><br />51.059, 30.520").openPopup();
marker2=L.marker([49.90860975668247, 24.01481524464866], {title:'Львів', icon: customIcon}).addTo(mymap)
    .bindPopup("<b>Львів</b><br />49.908, 24.014").openPopup();
marker3=L.marker([48.201381559811814, 37.7389867017649], {title:'Донецьк', icon: customIcon}).addTo(mymap)
  .bindPopup("<b>Донецьк</b><br />48.201, 37.738").openPopup();
marker4=L.marker([46.61309255532425, 30.713792252555873], {title:'Одеса', icon: customIcon}).addTo(mymap)
  .bindPopup("<b>Одеса</b><br />46.613, 30.713").openPopup();

let lbl = document.querySelector('h2');

// обработка события
function onMapClick(e) {
lbl.textContent=e.target.options.title;
}

marker1.on('click', onMapClick);
marker2.on('click', onMapClick);
marker3.on('click', onMapClick);
marker4.on('click', onMapClick);
// понятно что маркеров может быть больше, но пока проще так)
