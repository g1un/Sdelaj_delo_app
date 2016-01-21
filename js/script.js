//script

if(document.querySelector('.task-form__link--category')){
  var linkCategory = document.querySelector('.task-form__link--category');
  var chooseListCategory = document.querySelector('.choose-list--category');
  var linkSubcategory = document.querySelector('.task-form__link--subcategory');
  var chooseListSubcategory = document.querySelector('.choose-list--subcategory');

  linkCategory.addEventListener('click', function(event) {
    event.preventDefault();
    chooseListCategory.classList.add('choose-list--show');
  });

  window.addEventListener('keydown', function(event) {
    if (event.keyCode == 27) {
      if (chooseListCategory.classList.contains('choose-list--show')) {
        chooseListCategory.classList.remove('choose-list--show');
      }
    }
  });

  linkSubcategory.addEventListener('click', function(event) {
    event.preventDefault();
    chooseListSubcategory.classList.add('choose-list--show');
  });

  window.addEventListener('keydown', function(event) {
    if (event.keyCode == 27) {
      if (chooseListSubcategory.classList.contains('choose-list--show')) {
        chooseListSubcategory.classList.remove('choose-list--show');
      }
    }
  });
}

//side-menu

if(document.querySelector('.side-menu')){
  var sideMenulink = document.querySelector('.task-header__menu');
  var sideMenu = document.querySelector('.side-menu');
  var background = document.querySelector('.background');
  var back = document.querySelector('.side-menu__footer-back-link');

sideMenulink.addEventListener('click', function(event) {
  event.preventDefault();
  sideMenu.classList.add('side-menu--show');
  setTimeout(function(){sideMenu.style.left = '0px';}, 50);
  background.classList.add('background--show');
  setTimeout(function(){background.style.opacity = '1';}, 50);
});

background.addEventListener('click', function(event) {
  event.preventDefault();
  sideMenu.style.left = '-610px';
  setTimeout(function(){sideMenu.classList.remove('side-menu--show');}, 500);
  background.style.opacity = '0';
  setTimeout(function(){background.classList.remove('background--show');}, 500);
});

back.addEventListener('click', function(event) {
  event.preventDefault();
  sideMenu.style.left = '-610px';
  setTimeout(function(){sideMenu.classList.remove('side-menu--show');}, 500);
  background.style.opacity = '0';
  setTimeout(function(){background.classList.remove('background--show');}, 500);
});


}