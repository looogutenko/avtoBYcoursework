const audi = ['A1', 'A3', 'Q2', 'E-Tron', 'R8'];
const bmw = ['1 SERIES', '2 SERIES', '3 SERIES', '4 SERIES', '5 SERIES', 'M1'];
const ford = ['BRONCO', 'EDGE', 'F-150'];
const lada = ['Granta', 'Vesta', 'XRAY', 'Niva'];
const nissan = ['Almera', 'Juke', 'Sentra', 'Teana', 'Patrol'];
const volvo = ['C30', 'C70', 'S90', 'V40'];
const volkswagen = ['Beetle', 'Golf', 'Scirocco'];

const selectBrand = document.querySelector('.brand');
const selectModel = document.querySelector('.model');

selectBrand.onchange = function() {
  let indexSelected = selectBrand.selectedIndex,
      option = selectBrand.querySelectorAll('option')[indexSelected];
      
  let selectedId = option.getAttribute('id');
  
  
  if( selectedId == '1' ) {
    selectModel.innerHTML = null;
    selectModel.innerHTML = '<option selected="selected" disabled="disabled">Модель (Audi)</option>';
    audi.map(el => selectModel.innerHTML += `<option>${el}</option>`);
  }

  if( selectedId == '2' ) {
    selectModel.innerHTML = null;
    selectModel.innerHTML = '<option selected="selected" disabled="disabled">Модель (BMW)</option>';
    bmw.map(el => selectModel.innerHTML += `<option>${el}</option>`);
  }

  if( selectedId == '3' ) {
    selectModel.innerHTML = null;
    selectModel.innerHTML = '<option selected="selected" disabled="disabled">Модель (Ford)</option>';
    ford.map(el => selectModel.innerHTML += `<option>${el}</option>`);
  }

  if( selectedId == '4' ) {
    selectModel.innerHTML = null;
    selectModel.innerHTML = '<option selected="selected" disabled="disabled">Модель (LADA)</option>';
    lada.map(el => selectModel.innerHTML += `<option>${el}</option>`);
  }

  if( selectedId == '5' ) {
    selectModel.innerHTML = null;
    selectModel.innerHTML = '<option selected="selected" disabled="disabled">Модель (Nissan)</option>';
    nissan.map(el => selectModel.innerHTML += `<option>${el}</option>`);
  }

  if( selectedId == '6' ) {
    selectModel.innerHTML = null;
    selectModel.innerHTML = '<option selected="selected" disabled="disabled">Модель (Volvo)</option>';
    volvo.map(el => selectModel.innerHTML += `<option>${el}</option>`);
  }

  if( selectedId == '7' ) {
    selectModel.innerHTML = null;
    selectModel.innerHTML = '<option selected="selected" disabled="disabled">Модель (Volkswagen)</option>';
    volkswagen.map(el => selectModel.innerHTML += `<option>${el}</option>`);
  }

};