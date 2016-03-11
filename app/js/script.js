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

//notifications open/close
if(document.querySelector('.notifications__list')){
	var notificationslink = document.querySelectorAll('.notifications__list-item-link');
	var notificationsClose = document.querySelectorAll('.notifications__list-item-close');

	for(i=0; i<notificationslink.length; i++){
		notificationslink[i].addEventListener('click', function(event) {
			event.preventDefault();
			this.style.maxHeight = 'none';
			this.nextElementSibling.style.display = 'block';
		});
	}

	for(i=0; i<notificationslink.length; i++){
		notificationsClose[i].addEventListener('click', function(event) {
			event.preventDefault();
			this.style.display = 'none';
			this.previousElementSibling.style.maxHeight = '68px';
		});
	}
}

/*profile-choose-work__list*/
if($('.profile-choose-work__list').length){
	var profileChooseWorkList = $('.profile-choose-work__list');
	var profileChooseWorkTitle = $('.profile-choose-work__list-title');

	//console.log(profileChooseWorkTitle);

	for(i=0; i<profileChooseWorkTitle.length; i++){
		$(profileChooseWorkTitle[i]).on('click', function() {
			$(this).toggleClass('opened');
			$(this).next().toggleClass('show');
		});
	}
}
/*end of profile-choose-work__list*/

/*become-performer window*/
if ($('.become-performer').length) {
	var becomePerformerLink = $('.profile__features-button');
	var windowBg = $('.become-performer');
	var windowMsg = $('.become-performer__wrapper');
	var windowCancel = $('.become-performer__cancel');

	becomePerformerLink.on('click', function(e){
		e.preventDefault();
		windowBg.addClass('show');
		becomePerformerCss();
	});

	function becomePerformerCss() {
		if (window.innerHeight >= windowMsg.outerHeight()) {
			var becomePerformerMargin = (window.innerHeight - windowMsg.outerHeight()) / 2;
			windowMsg.css('margin-top', becomePerformerMargin);
		}
	}

	becomePerformerCss();

	$(window).on('resize', function () {
		becomePerformerCss();
	});

	windowCancel.on('click', function () {
		windowBg.removeClass('show');
	});

	windowBg.mousedown(function (e) {
		var clicked = $(e.target);
		if (clicked.is('.become-performer__wrapper') || clicked.closest('.become-performer__wrapper').length) {
			return;
		} else {
			windowBg.removeClass('show');
		}
	});
}
/*end of become-performer window*/

/*profile-photo window*/
if ($('.profile-photo').length) {
	var profilePhotoEdit = $('.profile__img-edit');
	var profilePhotoBg = $('.profile-photo');
	var profilePhotoMsg = $('.profile-photo__wrapper');
	var profilePhotoClose = $('.profile-photo__close');

	profilePhotoEdit.on('click', function(e){
		e.preventDefault();
		profilePhotoBg.addClass('show');
		profilePhotoCss();
	});

	function profilePhotoCss() {
		if (window.innerHeight >= profilePhotoMsg.outerHeight()) {
			var profilePhotoMargin = (window.innerHeight - profilePhotoMsg.outerHeight()) / 2;
			profilePhotoMsg.css('margin-top', profilePhotoMargin);
		} else{
			profilePhotoMsg.css('margin-top', 0);
		}
	}

	profilePhotoCss();

	$(window).on('resize', function () {
		profilePhotoCss();
	});

	profilePhotoClose.on('click', function () {
		profilePhotoBg.removeClass('show');
	});

	profilePhotoBg.mousedown(function (e) {
		var clicked = $(e.target);
		if (clicked.is('.profile-photo__wrapper') || clicked.closest('.profile-photo__wrapper').length) {
			return;
		} else {
			profilePhotoBg.removeClass('show');
		}
	});
}
/*end of profile-photo window*/