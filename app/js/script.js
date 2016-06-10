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

/*calendar*/
if ($('.calendar').length) {
	var calendarLink = $('.score-paid-services__subtitle--calendar a');
	var calendar = $('.calendar');
	var calendarCancel = $('.calendar__cancel');
	var calendarBg = $('.calendar__background');

	calendarLink.on('click', function(e){
		e.preventDefault();
		calendarBg.addClass('show');
		calendar.addClass('show');
		setTimeout(function(){
			calendarBg.css('opacity', '1');
			calendar.css('opacity', '1');
		}, 50);
		calendarCss();
	});

	function calendarCss() {
		if (window.innerHeight >= calendar.outerHeight()) {
			var calendarTop = (window.innerHeight - calendar.outerHeight()) / 2;
			calendar.css('top', calendarTop);
		}
		var calendarLeft = ($('body').width() - calendar.outerWidth()) / 2;
		calendar.css('left', calendarLeft);
	}

	calendarCss();

	$(window).on('resize', function () {
		calendarCss();
	});

	calendarCancel.on('click', function () {
		calendarBg.css('opacity', '0');
		calendar.css('opacity', '0');
		setTimeout(function(){
			calendarBg.removeClass('show');
			calendar.removeClass('show');
		}, 500);

	});

	calendarBg.mousedown(function (e) {
		var clicked = $(e.target);
		if (clicked.is('.calendar') || clicked.closest('.calendar').length) {
			return;
		} else {
			calendarBg.css('opacity', '0');
			calendar.css('opacity', '0');
			setTimeout(function(){
				calendarBg.removeClass('show');
				calendar.removeClass('show');
			}, 500);
		}
	});

	/*calendar button in settings*/
	if($('.settings__select select').length){
		var settingsCalendarLink = $('.settings__select select');

		for(var i=0; i<settingsCalendarLink.length; i++){
			$(settingsCalendarLink[i]).css('pointer-events', 'none');
		}

		settingsCalendarLink.on('click', function(e){
			e.preventDefault();
			calendarBg.addClass('show');
			calendar.addClass('show');
			setTimeout(function(){
				calendarBg.css('opacity', '1');
				calendar.css('opacity', '1');
			}, 50);
			calendarCss();
		});
	}
	/*end of calendar button in settings*/
}
/*end of calendar*/

/*task-description__action*/
if ($('.task-description__action').length) {
	var link = $('.task-description__title a');
	var taskDescEdit = $('.task-description__action');
	var taskDescCancel = $('.task-description__action-cancel');

	link.on('click',function(e){
		e.preventDefault();
		taskDescEdit.toggleClass('show');
	});

	taskDescCancel.on('click',function(){
		taskDescEdit.removeClass('show');
	});

	$(window).mousedown(function (e) {
		var clicked = $(e.target);
		if (clicked.is('.task-description__action') || clicked.closest('.task-description__action').length || clicked.is('.task-description__title a')) {
			return;
		} else {
			taskDescEdit.removeClass('show');
		}
	});
}
/*end of task-description__action*/

/*task-description__action--comments*/
if ($('.task-description__action--comments').length) {
	var link = $('.task-offers__item--comments .action-button');
	var taskDescEdit = $('.task-description__action--comments');
	var taskDescCancel = $('.task-description__action-cancel');

	for(var i=0; i<link.length; i++){
		$(link[i]).on('click',function(e){
			e.preventDefault();
			taskDescEdit.toggleClass('show');
			var position = $(this).position();
			var left = ($('body').width() - (position.left + $(this).outerWidth()));
			var top = position.top;
			//console.log(parseInt($(this).css('margin-top').replace('px','')));
			if($(this).css('margin-top').replace('px','')<0){
				top = top + (parseInt($(this).css('margin-top').replace('px','')));
			}
			//var _this = this;
			taskDescEdit.css({
				'position': 'absolute',
				'top': top,
				'right': ($('body').width() - (position.left + $(this).outerWidth()))
			});
		});
	}

	for(var i=0; i<link.length; i++){
		$(taskDescCancel[i]).on('click',function(){
			taskDescEdit.removeClass('show');
		});
	}

	$(window).mousedown(function (e) {
		var clicked = $(e.target);
		if (clicked.is('.task-description__action--comments') || clicked.closest('.task-description__action--comments').length || clicked.is('.task-offers__item--comments .action-button')) {
			return;
		} else {
			taskDescEdit.removeClass('show');
		}
	});
}
/*end of task-description__action--comments*/

/*select-performer*/
if ($('.select-performer').length) {
	var selectPerformerLink = $('.task-offers__item-choose');
	var selectPerformer = $('.select-performer');
	var selectPerformerCancel = $('.select-performer__cancel');
	var selectPerformerBg = $('.select-performer__background');

	for(var i=0; i<selectPerformerLink.length; i++){
		$(selectPerformerLink[i]).on('click', function(e){
			e.preventDefault();
			selectPerformerBg.addClass('show');
			selectPerformer.addClass('show');
			setTimeout(function(){
				selectPerformerBg.css('opacity', '1');
				selectPerformer.css('opacity', '1');
			}, 50);
			selectPerformerCss();
		});
	}

	function selectPerformerCss() {
		if (window.innerHeight >= selectPerformer.outerHeight()) {
			var selectPerformerTop = (window.innerHeight - selectPerformer.outerHeight()) / 2;
			var selectPerformerLeft = ($(window).width() - selectPerformer.outerWidth()) / 2;
			selectPerformer.css({
				'top': selectPerformerTop,
				'position': 'fixed',
				'left': selectPerformerLeft
			});
		}else{
			selectPerformerLeft = ($('body').width() - selectPerformer.outerWidth()) / 2;
			selectPerformer.css({
				'position': 'absolute',
				'top': 0,
				'left': selectPerformerLeft
			});
		}
	}

	selectPerformerCss();

	$(window).on('resize', function () {
		selectPerformerCss();
	});

	selectPerformerCancel.on('click', function () {
		selectPerformerBg.css('opacity', '0');
		selectPerformer.css('opacity', '0');
		setTimeout(function(){
			selectPerformerBg.removeClass('show');
			selectPerformer.removeClass('show');
		}, 500);

	});

	selectPerformerBg.mousedown(function (e) {
		var clicked = $(e.target);
		if (clicked.is('.select-performer') || clicked.closest('.select-performer').length) {
			return;
		} else {
			selectPerformerBg.css('opacity', '0');
			selectPerformer.css('opacity', '0');
			setTimeout(function(){
				selectPerformerBg.removeClass('show');
				selectPerformer.removeClass('show');
			}, 500);
		}
	});
}
/*end of select-performer*/

/*map window*/
if ($('.map').length) {
	var mapLink = $('.contacts__address-item-map');
	var map = $('.map');
	var mapCancel = $('.map .window-button');
	var mapBg = $('.map__background');

	mapLink.on('click', function(e){
		e.preventDefault();
		mapBg.addClass('show');
		map.addClass('show');
		setTimeout(function(){
			mapBg.css('opacity', '1');
			map.css('opacity', '1');
		}, 50);
		mapCss();
	});

	function mapCss() {
		//if (window.innerHeight >= map.outerHeight()) {
		//	var mapTop = (window.innerHeight - map.outerHeight()) / 2;
		//	map.css('top', mapTop);
		//}
		//var mapLeft = ($('body').width() - map.outerWidth()) / 2;
		//map.css('left', mapLeft);

		if (window.innerHeight >= map[0].clientHeight) {
			var mapTop = (window.innerHeight - map[0].clientHeight) / 2;
			var mapLeft = (window.innerWidth - map[0].clientWidth) / 2;
			map.css({
				'top': mapTop,
				'position': 'fixed',
				'left': mapLeft
			});
		}else{
			mapLeft = (window.innerWidth - map[0].clientWidth) / 2;
			map.css({
				'position': 'absolute',
				'top': 0,
				'left': mapLeft
			});
		}
	}

	mapCss();

	$(window).on('resize', function () {
		mapCss();
	});

	mapCancel.on('click', function () {
		mapBg.css('opacity', '0');
		map.css('opacity', '0');
		setTimeout(function(){
			mapBg.removeClass('show');
			map.removeClass('show');
		}, 500);

	});

	mapBg.mousedown(function (e) {
		var clicked = $(e.target);
		if (clicked.is('.map') || clicked.closest('.map').length) {
			return;
		} else {
			mapBg.css('opacity', '0');
			map.css('opacity', '0');
			setTimeout(function(){
				mapBg.removeClass('show');
				map.removeClass('show');
			}, 500);
		}
	});
}
/*end of map window*/

/*yandex map*/
if($('#map').length){

	function init () {
		var myMap = new ymaps.Map("map", {
					center: [48.50345629671856,135.112862],
					zoom: 15
				}),

		// Создаем метку с помощью вспомогательного класса.
				myPlacemark1 = new ymaps.Placemark([48.50345629671856,135.112862], {
					hintContent: '',
					//balloonContent: ''
				}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'img/marker.png',
					// Размеры метки.
					iconImageSize: [112, 106],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-43, -97]
				});

		//myMap.controls.add('smallZoomControl');
		// Добавляем все метки на карту.
		myMap.geoObjects
				.add(myPlacemark1);
	}

	ymaps.ready(init);
}
/*end of yandex map*/

/*about-page content height*/
console.log(document.querySelector('.task-header').clientHeight);
if(document.querySelector('.task-header')){
	$('.about-page').css('height', window.innerHeight - document.querySelector('.task-header').clientHeight);

	window.onresize = function () {
		$('.about-page').css('height', window.innerHeight - document.querySelector('.task-header').clientHeight);
	};
}
/*end of about-page content height*/