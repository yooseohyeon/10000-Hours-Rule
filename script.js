const inputDomain = document.querySelector('.training-input:nth-child(1)');
const inputHour = document.querySelector('.training-input:nth-child(2)');
const resultDomain = document.querySelector('.result-domain');
const resultHour = document.querySelector('.result-hour');
const calculateButton = document.querySelector('.training-input-button');
const result = document.querySelector('.result-section')

function inputValueCheck() {
  if (inputDomain.value && inputHour.value) {
    viewResult();
    calculateInput();
  } else {
    alert('입력되지 않았습니다.');
  }
};

function viewResult() {
  result.style.display = 'block';
  result.setAttribute('aria-hidden', 'false');
}

function calculateInput() {
  resultDomain.innerText = inputDomain.value;
  var hour = 10000 / inputHour.value;
  resultHour.innerText = hour;
}

calculateButton.addEventListener('click', inputValueCheck);

// 모달 창
const modal = document.querySelector('.modal');
const modalOpenButton = document.querySelector('.result-modal-button');
const modalCloseButton = document.querySelector('.modal-button');
const urlShareButton = document.querySelector('.result-share-button');

// URL 공유
function urlShare() {
  var url = window.location.href;

  navigator.clipboard.writeText(url).then(() => {
    alert('URL이 복사되었습니다.');
  });
}

urlShareButton.addEventListener('click', urlShare);


// modal 창을 열고 닫음
function modalOpen() {
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  // document.querySelector('body').style.backgroundColor = '#ffff';
}

function modalClose() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

modalOpenButton.addEventListener('click', modalOpen);
modalCloseButton.addEventListener('click', modalClose);
