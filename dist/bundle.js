/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar displayContacts = function displayContacts() {\n  toggleForm();\n  var contactsList = document.querySelector('#contacts-list');\n  contactsList.innerHTML = '';\n  var ul = document.createElement('ul');\n  var contacts = JSON.parse(localStorage.getItem('contacts'));\n  if (contacts) {\n    contacts.forEach(function (contact) {\n      var li = document.createElement('li');\n      li.innerHTML = '<span>' + contact.name + ' | ' + contact.phone + '</span>';\n      ul.appendChild(li);\n    });\n    contactsList.appendChild(ul);\n  } else {\n    contactsList.innerHTML = '<p>You have no contacts in your address book</p>';\n  }\n};\n\nvar toggleForm = function toggleForm() {\n  var addContactForm = document.querySelector('.new-contact-form');\n  var addButton = document.querySelector('.add-contact');\n  var formStyle = addContactForm.style;\n  if (formStyle.display == 'none') {\n    addButton.innerHTML = 'Cancel';\n    formStyle.display = 'block';\n  } else {\n    formStyle.display = 'none';\n    addButton.innerHTML = 'Add Contact';\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  displayContacts();\n  var addButton = document.querySelector('.add-contact');\n  var addContactForm = document.querySelector('.new-contact-form');\n\n  addButton.addEventListener('click', toggleForm);\n\n  addContactForm.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var localStorage = window.localStorage;\n    var _addContactForm$eleme = addContactForm.elements,\n        name = _addContactForm$eleme.name,\n        email = _addContactForm$eleme.email,\n        phone = _addContactForm$eleme.phone,\n        company = _addContactForm$eleme.company,\n        notes = _addContactForm$eleme.notes,\n        twitter = _addContactForm$eleme.twitter;\n\n\n    var contact = {\n      id: Date.now(),\n      name: name.value,\n      email: email.value,\n      phone: phone.value,\n      company: company.value,\n      notes: notes.value,\n      twitter: twitter.value\n    };\n\n    addContactForm.reset();\n    console.log('Saving the following contact: ' + JSON.stringify(contact));\n    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];\n    contacts.push(contact);\n    localStorage.setItem('contacts', JSON.stringify(contacts));\n    displayContacts();\n  });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });