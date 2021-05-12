// Dom
const heightText = document.getElementById('height');
const weightText = document.getElementById('weight');
const calcBtn = document.getElementById('calculator');
const btnBox = document.querySelector('.btnBox');
const resultBox = document.getElementById('resultBox');
const bmiNumberText = document.getElementById('bmi-number');
const bmiMessageText = document.getElementById('bmi-messages');
const resetBtn = document.querySelector('.resetBtn');
const clearBtn = document.getElementById('clearBtn');
const recordList = document.querySelector('.records');
const inputs = document.querySelectorAll('.input');

let userData = [];
let isActive = false;

function reset() {
  heightText.value = '';
  weightText.value = '';
  btnBox.classList.remove('active');
  isActive = !isActive;
}

function checkActive() {
  if (isActive) {
    reset();
  }
}

function calcStatue(height, weight) {
  const bmi = Math.round((weight / (height / 100) ** 2) * 100) / 100;
  let stateTxt = '';
  let statue = '';
  if (bmi < 18.5) {
    statue = 'underweight';
    stateTxt = '過輕';
  } else if (bmi < 24) {
    statue = 'normalweight';
    stateTxt = '理想';
  } else if (bmi < 27) {
    statue = 'overweight';
    stateTxt = '過重';
  } else if (bmi < 30) {
    statue = 'slightobesity';
    stateTxt = '輕度肥胖';
  } else if (bmi < 35) {
    statue = 'middleobesity';
    stateTxt = '中度肥胖';
  } else if (bmi >= 35) {
    statue = 'extremeobesity';
    stateTxt = '重度肥胖';
  }
  return { bmi, statue, stateTxt };
}

function setBtnBox(user) {
  resultBox.className = 'result';
  resultBox.classList.add(user.statue);
  bmiNumberText.innerText = user.bmi;
  bmiMessageText.innerText = user.stateTxt;
}

function renderList(sourceData) {
  let template = '';
  sourceData.forEach((item, index) => {
    template += `<li class="record-list ${item.statue}" data-id="${index}">
    <div class="record-list-status">
      <span class="tag"></span>
      <span>${item.stateTxt}</span>
    </div>
    <div class="record-list-bmi">${item.bmi}</div>
    <div class="record-list-weight">${item.weight}kg</div>
    <div class="record-list-height">${item.height}cm</div>
    <div class="record-list-date">${item.date}</div>
    <div class="record-list-btn">
      <a href="#" class="delete">
        <i class="material-icons" data-id="${index}" data-action="delete">delete</i>
      </a>
    </div>
  </li>`;
  });
  recordList.innerHTML = template;
}

function deleteItem(index) {
  userData.splice(index, 1);
  localStorage.setItem('myBMI', JSON.stringify(userData));
  renderList(userData);
}

function clearAll() {
  userData = [];
  localStorage.setItem('myBMI', JSON.stringify(userData));
  renderList(userData);
}

function listAction(evt) {
  evt.preventDefault();
  if (evt.target.tagName === 'I') {
    const dataSet = evt.target.dataset;
    if (dataSet.action === 'delete') {
      deleteItem(dataSet.id);
    }
  }
}

function checkInput() {
  inputs.forEach((item) => {
    if (item.value.length > 0) {
      item.classList.remove('error');
    } else {
      item.classList.add('error');
    }
  });
}

function calcBMI(e) {
  checkInput();
  e.preventDefault();
  const height = parseInt(heightText.value, 10) || 0;
  const weight = parseInt(weightText.value, 10) || 0;
  if (height === 0 || weight === 0) {
    return;
  }
  const date = new Date().toLocaleDateString();
  const { bmi, statue, stateTxt } = calcStatue(height, weight);
  const user = {
    height,
    weight,
    bmi,
    date,
    statue,
    stateTxt,
  };
  isActive = !isActive;
  btnBox.classList.add('active');
  setBtnBox(user);
  userData.unshift(user);
  localStorage.setItem('myBMI', JSON.stringify(userData));
  renderList(userData);
}

function init() {
  userData = JSON.parse(localStorage.getItem('myBMI')) || [];
  calcBtn.addEventListener('click', calcBMI);
  resetBtn.addEventListener('click', reset);
  recordList.addEventListener('click', listAction);
  clearBtn.addEventListener('click', clearAll);
  inputs.forEach((item) => {
    item.addEventListener('focus', checkActive);
  });
  renderList(userData);
}

init();