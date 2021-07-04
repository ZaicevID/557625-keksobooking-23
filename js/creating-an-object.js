import {newOffer} from './data.js';

const popups = document.querySelector('#card').content.querySelector('article');
const mapConteiner = document.querySelector('#map-canvas');

const newOffers = newOffer();

newOffers.forEach(({offer, author}) => {
  const element = popups.cloneNode(true);
  element.querySelector('.popup__title').textContent = offer.title;
  element.querySelector('.popup__text--address').textContent = offer.address;
  element.querySelector('.popup__text--price').textContent = offer.price + ' ₽/ночь';

  if (offer.type === 'flat') {
    element.querySelector('.popup__type').textContent = 'Квартира';
  } else if (offer.type === 'bungalow') {
    element.querySelector('.popup__type').textContent = 'Бунгало';
  } else if (offer.type === 'house') {
    element.querySelector('.popup__type').textContent = 'Дом';
  } else if (offer.type === 'palace') {
    element.querySelector('.popup__type').textContent = 'Дворец';
  } else if (offer.type === 'hotel') {
    element.querySelector('.popup__type').textContent = 'Отель';
  }

  element.querySelector('.popup__text--capacity').textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
  element.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.checkin + ', выезд до ' + offer.checkout;
  element.querySelector('.popup__features').textContent = offer.features;
  element.querySelector('.popup__description').textContent = offer.description;

  for(let i = 0; i < offer.photos.length; i++) {
    if (i > 0) {
      const photo = element.querySelector('.popup__photo');
      const clone = photo.cloneNode(true);
      element.querySelector('.popup__photos').appendChild(clone).src = offer.photos[i];
    } else {
      element.querySelector('.popup__photo').src = offer.photos[i];
    }
  }

  element.querySelector('.popup__avatar').src = author.avatar; //.src
  mapConteiner.appendChild(element);
});

export {newOffers};

