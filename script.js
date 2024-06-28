const inputDomain = document.querySelector('.training-input:nth-child(1)');
const inputHours = document.querySelector('.training-input:nth-child(2)');
const resultDomain = document.querySelector('.result-domain');
const resultHour = document.querySelector('.result-hour');
const calculateButton = document.querySelector('.training-input-button');
const resultSection = document.querySelector('.result-section')

const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.result-modal-button');
const closeModalButton = document.querySelector('.modal-button');
const shareURLButton = document.querySelector('.result-share-button');


// input에 입력한 값이 있는지 확인
function checkInputValue() {
  if (inputDomain.value && inputHours.value) {
    displayResult();
    calculateResult();
  } else {
    alert('입력되지 않았습니다.');
  }
};

// 결과 표시
function displayResult() {
  resultSection.style.display = 'block';
  resultSection.setAttribute('aria-hidden', 'false');
}

// 입력 계산
function calculateResult() {
  resultDomain.innerText = inputDomain.value;
  var hour = 10000 / inputHours.value;
  resultHour.innerText = hour;
}

// 모달 창 열기
function openModal() {
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  // document.querySelector('.modal-background').classList.add('blur');
}

// 모달 창 닫기
function closeModal() {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

// URL 복사
function shareURL() {
  var url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('URL이 복사되었습니다.');
  });
}

// 이벤트 리스너 등록
calculateButton.addEventListener('click', checkInputValue);
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
shareURLButton.addEventListener('click', shareURL);