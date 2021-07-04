import {newOffer} from './data.js';
import {newOffers} from './creating-an-object.js';

const offer = newOffer();
const address = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');

const addMap = function() {

  const form = document.querySelector('.ad-form');
  const formFieldset = form.querySelectorAll('fieldset');
  const formFilters = document.querySelector('.map__filters');
  const formFiltersSelect = formFilters.querySelectorAll('select');
  const formFiltersFieldset = formFilters.querySelectorAll('fieldset');

  const disablePartForm = function (partForm) {
    partForm.forEach(function (data) {
      data.disabled = true;
    });
  };
  // Добавляет в form .map__filters всем select и fieldset disabled
  const disableFilterForm = function () {
    disablePartForm(formFiltersSelect);
    disablePartForm(formFiltersFieldset);
  };

  // Добавляет в 'ad-form' всем  input и select disabled
  const disableInputForm = function () {
    disablePartForm(formFieldset);
  };

  disableFilterForm();
  disableInputForm();

  const activatePartForm = function (partForm) {
    partForm.forEach(function (data) {
      data.disabled = false;
    });
  };

  // Удаляет в form .map__filters всем select и fieldset disabled
  const activateFilterForm = function () {
    activatePartForm(formFiltersSelect);
    activatePartForm(formFiltersFieldset);
  };

  // Удаляет из 'ad-form' fieldset disabled
  const activateInputForm = function () {
    activatePartForm(formFieldset);
  };


  form.classList.add('ad-form--disabled');

  const map = L.map('map-canvas')
  .on('load', () => {
    form.classList.remove('ad-form--disabled');
    activateInputForm();
    activateFilterForm();
    console.log('Карта инициализирована');
  })
  .setView({
    lat: 35.68167,
    lng: 139.75386,
  }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '/img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.68167,
      lng: 139.75386,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);

  resetButton.addEventListener('click', () => {
    mainPinMarker.setLatLng({
      lat: 35.68167,
      lng: 139.75386,
    });

    map.setView({
      lat: 35.68167,
      lng: 139.75386,
    }, 13);
    address.setAttribute('placeholder', '35.68167, 139.75386');
  });


  const markerGroup = L.layerGroup().addTo(map);

  const createMarker = (point) => {
    const {lat, lng} = point;

    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

      marker
      .addTo(markerGroup)
      .bindPopup(
        newOffers(point),
        {
          keepInView: true,
        },
      );
    };

    offer.forEach((point) => {
      createMarker(point)
    });

    mainPinMarker.on('moveend', (evt) => {
      address.setAttribute('placeholder', evt.target.getLatLng());
    });

};

addMap();

export {addMap};
