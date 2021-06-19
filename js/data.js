import {getRandomPositiveFloat, getRandomPositiveInteger} from './util.js';

//переменные для createLocation
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const DIGITS = 5;
const MIN_ING = 139.70000;
const MAX_ING = 139.80000;

//переменные для createAuthor
const MIN_IMG = 1;
const MAX_IMG = 8;

//переменные для createOffer
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const MAX_FEATURES_ELEMENT = 0;
const MIN_FEATURES_ELEMENT = FEATURES.length;

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const MAX_PHOTOS_ELEMENT = 0;
const MIN_PHOTOS_ELEMENT = PHOTOS.length;

const MIN_TITLE = 1;
const MAX_TITLE = 10;

const MIN_PRICE = 5000;
const MAX_PRICE = 10000;

const MIN_TYPE = 0;
const MAX_TYPE = TYPES.length - 1;

const MIN_ROOMS = 1;
const MAX_ROOMS = 5;

const MIN_GUESTS = 5;
const MAX_GUESTS = 10;

const MIN_CHECKIN = 0;
const MAX_CHECKIN = CHECKIN.length - 1;

const MIN_CHECKOUT = 0;
const MAX_CHECKOUT = CHECKOUT.length - 1;

const MIN_DESCRIPTION = 1;
const MAX_DESCRIPTION = 10;


const createMock = () => {

  const createAuthor = () => ({
    avatar: 'img/avatars/user0' + getRandomPositiveInteger(MIN_IMG, MAX_IMG) + '.png'
  });

  const coordinateX = getRandomPositiveFloat(MIN_LAT, MAX_LAT, DIGITS);
  const coordinateY = getRandomPositiveFloat(MIN_ING, MAX_ING, DIGITS);

  const createLocation = () => ({
    lat: coordinateX,
    lng: coordinateY
  });

  const createOffer = () => ({
    title: 'Предложение' + ' ' +getRandomPositiveInteger(MIN_TITLE, MAX_TITLE),
    address: createLocation().lat + ' ' + createLocation().lng,
    price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
    type: TYPES[getRandomPositiveInteger(MIN_TYPE, MAX_TYPE)],
    rooms: getRandomPositiveInteger(MIN_ROOMS, MAX_ROOMS),
    guests: getRandomPositiveInteger(MIN_GUESTS, MAX_GUESTS),
    checkin: CHECKIN[getRandomPositiveInteger(MIN_CHECKIN, MAX_CHECKIN)],
    checkout: CHECKOUT[getRandomPositiveInteger(MIN_CHECKOUT, MAX_CHECKOUT)],
    features: FEATURES.slice(getRandomPositiveInteger(MAX_FEATURES_ELEMENT, MIN_FEATURES_ELEMENT)),
    description: 'Описание' + ' ' + getRandomPositiveInteger(MIN_DESCRIPTION, MAX_DESCRIPTION),
    photos: PHOTOS.slice(getRandomPositiveInteger(MAX_PHOTOS_ELEMENT, MIN_PHOTOS_ELEMENT)),
  });

  return {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation()
  };
};

const NUMBER_OF_NEW_ADS = 10;

const newOffer = () => new Array(NUMBER_OF_NEW_ADS).fill(null).map(() => createMock());

export {newOffer};


