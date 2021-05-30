let randomNumber = function (min, max) {
  if (min<0 || max<0) {
    return "Диапазон может быть только положительный"
  }

  if (min>=max) {
    return "Максимальное значение меньше либо равно минимальному"
  }

  return Math.round(Math.random() * (max - min)) + min;
}

randomNumber(1, 3);

let floatingPointNumber = function (min, max, signs) {
  if (min<0 || max<0) {
    return "Диапазон может быть только положительный"
  }

  if (min>=max) {
    return "Максимальное значение меньше либо равно минимальному"
  }

  return (Math.random() * (max - min) + min).toFixed(signs);
}

floatingPointNumber(1, 3, 3);
