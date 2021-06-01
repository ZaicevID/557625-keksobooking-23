let getRandomNumber = function (min, max) {
  if (min<0 || max<0) {
    throw new Error('Диапазон может быть только положительный');
  }
  if (min>=max) {
    throw new Error('Максимальное значение меньше либо равно минимальному');
  }
  return Math.round(Math.random() * (max - min)) + min;
};

let getFloatingPointNumber = function (min, max, signs) {
  if (min<0 || max<0) {
    throw new Error('Диапазон может быть только положительный');
  }
  if (min>=max) {
    throw new Error('Максимальное значение меньше либо равно минимальному');
  }
  return (Math.random() * (max - min) + min).toFixed(signs);
};

