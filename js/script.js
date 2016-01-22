//script

//category/subcategory-list
if(document.querySelector('.choose-list')){
  var linkCategory = document.querySelector('.task-form__link--category');
  var chooseList = document.querySelectorAll('.choose-list');
  var chooseListCategory = document.querySelector('.choose-list--category');
  var linkSubcategory = document.querySelector('.task-form__link--subcategory');
  var chooseListSubcategory = document.querySelector('.choose-list--subcategory');
  var closingHeader = document.querySelector('.task-header');
  var closingForm = document.querySelector('.task-form');

  linkCategory.addEventListener('click', function(event) {
    event.preventDefault();
    var show = 1;
    if (chooseListCategory.classList.contains('choose-list--show')){
      show = 0;
    }
    for (var i=0; i<chooseList.length; i++){
      chooseList[i].classList.remove('choose-list--show');
    }
    if (show){
      chooseListCategory.classList.toggle('choose-list--show');
    }
    show = 1;
  });

  linkSubcategory.addEventListener('click', function(event) {
    event.preventDefault();
    var show = 1;
    if (chooseListSubcategory.classList.contains('choose-list--show')){
      show = 0;
    }
    for (var i=0; i<chooseList.length; i++){
      chooseList[i].classList.remove('choose-list--show');
    }
    if (show){
      chooseListSubcategory.classList.toggle('choose-list--show');
    }
    show = 1;
  });

  document.addEventListener('click', function(){
    if (document.querySelector('.choose-list--show')){

      //select elements
      var chooseListCategoryId = document.getElementById('choose-list--category');
      var chooseListSubCategoryId = document.getElementById('choose-list--subcategory');

      //click on a box does nothing
      chooseListCategoryId.onclick = function (e) {
        e = e || window.event;
        e.cancelBubble = true;
        if (e.stopPropagation)
          e.stopPropagation();
      }
      chooseListSubCategoryId.onclick = function (e) {
        e = e || window.event;
        e.cancelBubble = true;
        if (e.stopPropagation)
          e.stopPropagation();
      }
      linkCategory.onclick = function (e) {
        e = e || window.event;
        e.cancelBubble = true;
        if (e.stopPropagation)
          e.stopPropagation();
      }
      linkSubcategory.onclick = function (e) {
        e = e || window.event;
        e.cancelBubble = true;
        if (e.stopPropagation)
          e.stopPropagation();
      }
      // click everywhere else closes the box
      function close_box() {
        if(document.querySelector('.choose-list--show')){
          chooseListCategoryId.classList.remove('choose-list--show');
          chooseListSubCategoryId.classList.remove('choose-list--show');
        }
      }

      //register close event handlers
      document.onclick = close_box;
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