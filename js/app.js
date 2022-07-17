document.addEventListener('DOMContentLoaded', () => {

  let callBackButton = document.getElementById('callback-button');

  let modal1 = document.getElementById('modal-1');

  let closeButton = modal1.getElementsByClassName('modal__close-button')[0];

  let tagBody = document.getElementsByTagName('body');

  callBackButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.add('modal_active');
    tagBody.classList.add('hidden');
  }

  closeButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.remove('modal_active');
    tagBody.classList.remove('hidden');
  }

  modal1.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal1.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
  };

  let buttonOpenModal1 = document.getElementsByClassName('get-modal_1');

  for (let button of buttonOpenModal1) {
    button.onclick = function (e) {
      e.preventDefault();
      modal1.classList.add('modal_active');
      tagBody.classList.add('hidden');
    }
  }

});
// second modal content block
document.addEventListener('DOMContentLoaded', () => {

  let callBackButton2 = document.getElementById('callback-button-2');

  let modal2 = document.getElementById('modal-2');

  let closeButton2 = modal2.getElementsByClassName('modal__close-button')[0];

  let tagBody_2 = document.getElementsByTagName('body');

  callBackButton2.onclick = function (e) {
    e.preventDefault();
    modal2.classList.add('modal_active');
    tagBody_2.classList.add('hidden');
  }

  closeButton2.onclick = function (e) {
    e.preventDefault();
    modal2.classList.remove('modal_active');
    tagBody_2.classList.remove('hidden');
  }

  modal2.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal2.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      tagBody_2.classList.remove('hidden');
    }
  };

  let buttonOpenModal2 = document.getElementsByClassName('get-modal_2');

  for (let button of buttonOpenModal2) {
    button.onclick = function (e) {
      e.preventDefault();
      modal2.classList.add('modal_active');
      tagBody_2.classList.add('hidden');
    }
  }

});
// third modal content block
document.addEventListener('DOMContentLoaded', () => {

  let callBackButton3 = document.getElementById('callback-button-3');

  let modal3 = document.getElementById('modal-3');

  let closeButton3 = modal3.getElementsByClassName('modal__close-button')[0];

  let tagBody_3 = document.getElementsByTagName('body');

  callBackButton3.onclick = function (e) {
    e.preventDefault();
    modal3.classList.add('modal_active');
    tagBody_3.classList.add('hidden');
  }

  closeButton3.onclick = function (e) {
    e.preventDefault();
    modal3.classList.remove('modal_active');
    tagBody_3.classList.remove('hidden');
  }

  modal3.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal3.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      tagBody_3.classList.remove('hidden');
    }
  };

  let buttonOpenModal3 = document.getElementsByClassName('get-modal_3');

  for (let button of buttonOpenModal3) {
    button.onclick = function (e) {
      e.preventDefault();
      modal3.classList.add('modal_active');
      tagBody_3.classList.add('hidden');
    }
  }

});
// fourth modal content block
document.addEventListener('DOMContentLoaded', () => {

  let callBackButton4 = document.getElementById('callback-button-4');

  let modal4 = document.getElementById('modal-4');

  let closeButton4 = modal4.getElementsByClassName('modal__close-button')[0];

  let tagBody_4 = document.getElementsByTagName('body');

  callBackButton4.onclick = function (e) {
    e.preventDefault();
    modal4.classList.add('modal_active');
    tagBody_4.classList.add('hidden');
  }

  closeButton4.onclick = function (e) {
    e.preventDefault();
    modal4.classList.remove('modal_active');
    tagBody_4.classList.remove('hidden');
  }

  modal4.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal4.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      tagBody_4.classList.remove('hidden');
    }
  };

  let buttonOpenModal4 = document.getElementsByClassName('get-modal_4');

  for (let button of buttonOpenModal4) {
    button.onclick = function (e) {
      e.preventDefault();
      modal4.classList.add('modal_active');
      tagBody_4.classList.add('hidden');
    }
  }

});
// fifth modal content block
document.addEventListener('DOMContentLoaded', () => {

  let callBackButton5 = document.getElementById('callback-button-5');

  let modal5 = document.getElementById('modal-5');

  let closeButton5 = modal5.getElementsByClassName('modal__close-button')[0];

  let tagBody_5 = document.getElementsByTagName('body');

  callBackButton5.onclick = function (e) {
    e.preventDefault();
    modal5.classList.add('modal_active');
    tagBody_5.classList.add('hidden');
  }

  closeButton5.onclick = function (e) {
    e.preventDefault();
    modal5.classList.remove('modal_active');
    tagBody_5.classList.remove('hidden');
  }

  modal5.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal5.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      tagBody_5.classList.remove('hidden');
    }
  };

  let buttonOpenModal5 = document.getElementsByClassName('get-modal_5');

  for (let button of buttonOpenModal5) {
    button.onclick = function (e) {
      e.preventDefault();
      modal5.classList.add('modal_active');
      tagBody_5.classList.add('hidden');
    }
  }

});