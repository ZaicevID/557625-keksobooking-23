// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat (a, b, digits = 1) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower) + lower;

  // И в конце с помощью метода toFixed любого числа в JavaScript
  // указать требуемое количество знаков после точки
  return result.toFixed(digits);
}
// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  // Чтобы не заставлять пользователя нашей функции помнить порядок аргументов,
  // реализуем поддержку передачи минимального и максимального значения в любом порядке,
  // а какое из них большее и меньшее вычислим с помощью Math.min и Math.max.

  // После нам нужно убедиться, что пользователь не передал дробные значения,
  // для этого на всякий пожарный случай нижнюю границу диапазона
  // мы округляем к ближайшему большему целому с помощью Math.ceil,
  // а верхнюю границу - к ближайшему меньшему целому с помощью Math.floor
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  // Обратите внимание, чтобы учесть условие, что диапазон может быть [0, ∞),
  // мы не ругаем пользователя за переданное отрицательное число,
  // а просто берём его по модулю с помощью Math.abs

  // Дальше используем Math.random() для получения случайного дробного числа в диапазоне [0, 1),
  // которое домножаем на разницу между переданными числами плюс единица - это будет наша случайная дельта.
  // После нужно сложить дельту с минимальным значением, чтобы получить итоговое случайное число.
  const result = Math.random() * (upper - lower + 1) + lower;
  // "Плюс единица", чтобы включить верхнюю границу диапазона в случайные числа

  // И в конце с помощью метода Math.floor мы округляем полученный результат,
  // потому что Math.random() генерирует только дробные числа и ноль.
  return Math.floor(result);
};


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

  const createOffer = () => ({
    title: 'Предложение' + ' ' +getRandomPositiveInteger(MIN_TITLE, MAX_TITLE),
    address: createLocation.lat + ' ' + createLocation.lng,
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

  const createLocation = () => ({
    lat: getRandomPositiveFloat(MIN_LAT, MAX_LAT, DIGITS),
    lng: getRandomPositiveFloat(MIN_ING, MAX_ING, DIGITS)
  });

  return {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation()
  };
};

const newOffer = new Array(10).fill(null).map(() => createMock());







