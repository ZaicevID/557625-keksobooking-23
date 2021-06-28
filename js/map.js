const decontamination = function() {

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
  //form.classList.remove('ad-form--disabled');

  };

  decontamination();

export {decontamination};
