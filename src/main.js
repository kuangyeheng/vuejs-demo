/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var vm_title = new Vue({
	    el: 'title',
	    data:{
	        title:'vue实例'
	    },
	    methods:{
	        setTitle: function (input) {
	            this.title = input;

	        }
	    },
	    watch:{
	        title: {
	            handler: function () {
	                console.dir(arguments);
	//                    alert('title设置成功');
	            },
	            deep:true
	        }
	    }
	});


	var vm_button = new Vue({
	    el: '#button',
	    methods:{
	        setTitle: function () {
	            vm_title.setTitle(vm_form.message);
	        }
	    }
	});

	var vm_form = new Vue({
	    el: '#form',
	    data:{
	        message: ''
	    }
	});



/***/ }
/******/ ]);