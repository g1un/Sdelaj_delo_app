//script

//choose-list
if(document.querySelector('.choose-list')){
  var chooseListLinkCategory = document.querySelector('.task-form__link--category');
  var chooseListLinkSubcategory = document.querySelector('.task-form__link--subcategory');
  var chooseListCategory = document.querySelector('.choose-list--category');
  var chooseListSubcategory = document.querySelector('.choose-list--subcategory');

  chooseListLinkCategory.addEventListener('click', function(event) {
    event.preventDefault();
    chooseListCategory.classList.toggle('choose-list--show');
  });

  chooseListLinkSubcategory.addEventListener('click', function(event) {
    event.preventDefault();
    chooseListSubcategory.classList.toggle('choose-list--show');
  });
}

//choose-list__form
if(document.querySelector('.choose-list__form--task-types')){
  var taskTypesLink = document.querySelector('.tasks__title-link--task-types');
  var taskTypes = document.querySelector('.choose-list__form--task-types');
  var taskTypesCancel = document.querySelector('.choose-list__form-cancel--task-types');

  taskTypesLink.addEventListener('click', function(event) {
    event.preventDefault();
    taskTypes.classList.toggle('choose-list--show');
  });

  taskTypesCancel.addEventListener('click', function(event) {
    event.preventDefault();
    taskTypes.classList.toggle('choose-list--show');
  });
}

//choose-list__form--task-status
if(document.querySelector('.choose-list__form--task-status')){
  var myTasksTypesLink = document.querySelectorAll('.task-header__types--task-status a');
  var myTasksTypes = document.querySelector('.choose-list__form--task-status');
  var myTasksTypesCancel = document.querySelector('.choose-list__form-cancel');

  for(var i=0; i<myTasksTypesLink.length; i++){
    myTasksTypesLink[i].addEventListener('click', function(event) {
      event.preventDefault();
      myTasksTypes.classList.toggle('choose-list--show');
    });
  }


  myTasksTypesCancel.addEventListener('click', function(event) {
    event.preventDefault();
    myTasksTypes.classList.toggle('choose-list--show');
  });
}

//task-header menu
if(document.querySelector('.task-header__button')){
  var menuLink = document.querySelector('.task-header__button');
  var headerMenu = document.querySelector('.task-header__menu');
  var menuClose = document.querySelector('.task-header__menu-close');

  menuLink.addEventListener('click', function(event) {
    event.preventDefault();
    headerMenu.classList.toggle('choose-list--show');
  });

  menuClose.addEventListener('click', function(event) {
    event.preventDefault();
    headerMenu.classList.toggle('choose-list--show');
  });
}

//side-menu
if(document.querySelector('.side-menu')){
  var sideMenulink = document.querySelector('.task-header__sandwich');
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