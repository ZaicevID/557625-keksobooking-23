const validate = function() {
  const MIN_TITLE_LENGTH = 30;
  const MAX_TITLE_LENGTH = 100;
  const MAX_PRICE = 1000000;

  const numberRooms = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    NOT_FOR_GUESTS: 100,
  };

  const NO_GUESTS = 0;

  const form = document.querySelector('.ad-form');
  const titleInput = form.querySelector('#title');
  const inputPrice = form.querySelector('#price');
  const roomNumber = form.querySelector('#room_number');
  const capacityPeople = form.querySelector('#capacity');

  //Валидация Заголовок объявления
  titleInput.addEventListener('invalid', () => {
    const valueLength = titleInput.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
    } else {
      titleInput.setCustomValidity('');
    }
  });

    // Валидации по типу жилья
  form.addEventListener('change', function (evt) {
    evt.preventDefault();
    if (+roomNumber.value === numberRooms.ONE && +roomNumber.value !== +capacityPeople.value) {
      roomNumber.setCustomValidity('Допустимо 1 комната — «для 1 гостя»');
    } else if (+roomNumber.value === numberRooms.TWO && (+roomNumber.value < +capacityPeople.value || +capacityPeople.value === NO_GUESTS)) {
      roomNumber.setCustomValidity('Допустимо 2 комнаты — «для 2 гостей» или «для 1 гостя»');
    } else if (+roomNumber.value === numberRooms.THREE && (+roomNumber.value < +capacityPeople.value || +capacityPeople.value === NO_GUESTS)) {
      roomNumber.setCustomValidity('Допустимо 3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»');
    } else if (+roomNumber.value === numberRooms.NOT_FOR_GUESTS && +capacityPeople.value !== NO_GUESTS) {
      roomNumber.setCustomValidity('Допустимо 100 комнат — «не для гостей»');
    } else {
      roomNumber.setCustomValidity('');
    }
  });

  //Валидация цены
  inputPrice.addEventListener('invalid', () => {
    const valuePrice = inputPrice.value;

    if (valuePrice === '') {
      inputPrice.setCustomValidity(`Введите значение от 0 до ${  MAX_PRICE }`);
    } else if (valuePrice > MAX_PRICE) {
      inputPrice.setCustomValidity(`Значение не может привышать ${  MAX_PRICE }`);
    } else {
      inputPrice.setCustomValidity('');
    }
  });
  };

  validate();

  export {validate};
