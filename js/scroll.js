const saTriggerMargin = 150;
const saElementList = document.querySelectorAll('.achievement_item');
const adFRElementList = document.querySelectorAll(".advantages_fr_item_content");
const adRElementList = document.querySelectorAll(".advantages_room_item_contents");
const aITElementList = document.querySelectorAll(".advantages_item_text")
const QElementList = document.querySelectorAll(".Q_wrap");
const AElementList = document.querySelectorAll(".A_item");

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

const adFRFunc = function() {
  for (const element of adFRElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }

}

const adRFunc = function() {
  for (const element of adRElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

const aITFunc = function() {
  for (const element of aITElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

const QFunc = function() {
  for (const element of QElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}
const AFunc = function() {
  for (const element of AElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}
window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);

window.addEventListener('load', adFRFunc);
window.addEventListener('scroll', adFRFunc);

window.addEventListener('load', adRFunc);
window.addEventListener('scroll', adRFunc);

window.addEventListener('load', aITFunc);
window.addEventListener('scroll', aITFunc);

window.addEventListener('load', QFunc);
window.addEventListener('scroll', QFunc);

window.addEventListener('load', AFunc);
window.addEventListener('scroll', AFunc);