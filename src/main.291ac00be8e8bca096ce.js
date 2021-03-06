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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var vm_title = new Vue({
	    el: 'title',
	    data: {
	        title: 'vue实例'
	    },
	    methods: {
	        setTitle: function setTitle(input) {
	            this.title = input;
	        }
	    },
	    watch: {
	        title: {
	            handler: function handler() {
	                console.dir(arguments);
	                //                    alert('title设置成功');
	            },
	            deep: true
	        }
	    }
	});

	var vm_button = new Vue({
	    el: '#button',
	    methods: {
	        setTitle: function setTitle() {
	            vm_title.setTitle(vm_form.message);
	        }
	    }
	});

	var vm_form = new Vue({
	    el: '#form',
	    data: {
	        message: ''
	    }
	});

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Person = function () {
	    function Person(name, age) {
	        _classCallCheck(this, Person);

	        this.name = name;
	        this.age = age;
	    }

	    _createClass(Person, [{
	        key: 'love',
	        value: function love() {
	            alert('I fall in love with ' + this.name);
	        }
	    }]);

	    return Person;
	}();

	var me = new Person('邝业亨', 25);

	me.love();

/***/ }
/******/ ]);