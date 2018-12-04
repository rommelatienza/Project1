webpackJsonp([0],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formDataMap = exports.formInputStatusList = exports.formOptionList = exports.formInputList = exports.formKey = exports.currentForm = undefined;

var _jquery = __webpack_require__(9);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentForm = exports.currentForm = (0, _jquery2.default)('#shoppingCartPaymentForm');
var formKey = exports.formKey = (0, _jquery2.default)(currentForm).attr('id');

// export const formInputList = $(currentForm).find(`
//     input[type=text][class*='js-'], input[type=tel], input[type=number], input[type=email], input[type=password], textarea
//   `).not("[display='false']");

var formInputList = exports.formInputList = function formInputList() {
  return (0, _jquery2.default)(currentForm).find('\n      input[type=text][class*=\'js-\'], input[type=tel], input[type=number], input[type=email], input[type=password], textarea\n    ').not("[display='false']");
};

var formOptionList = exports.formOptionList = (0, _jquery2.default)(currentForm).find('');
var formInputStatusList = exports.formInputStatusList = function formInputStatusList() {
  return (0, _jquery2.default)(currentForm).find('input[valid-input="false"], textarea[valid-input="false"], select[valid-input="false"]');
};

// donot add js- to the non-required fields..
var formDataMap = exports.formDataMap = [{ formKey: "shoppingCartPaymentForm",
  inputList: [{
    elemKey: "js-email",
    messages: {
      "isRequired": "* Please enter a valid email address.",
      "email": "* Only valid email addresses are allowed."
    }
  }, {
    elemKey: "js-firstName",
    messages: { "isRequired": "* Please enter a valid first name." }
  }, {
    elemKey: "js-lastName",
    messages: { "isRequired": "* Please enter a valid last name." }
  }, {
    elemKey: "js-address",
    messages: { "isRequired": "Please enter your address." }
  }, {
    elemKey: "js-billingState",
    formatPattern: "[a-zA-Z0-9\.\s ]{1,75}",
    messages: {
      "isRequired": "* Please enter a state.",
      "pattern": "* Please enter a valid state name."
    }
  }, {
    elemKey: "js-city",
    formatPattern: "[a-zA-Z0-9\.\s ]{1,75}",
    messages: {
      "isRequired": "* Please enter a city.",
      "pattern": "* Please enter a valid city name not exceeding 75 characters."
    }
  }, {
    elemKey: "js-zipcode",
    formatPattern: "[^.$]{1,15}",
    messages: {
      "isRequired": "* Please enter a valid zipcode.",
      "pattern": "* Please enter a valid zipcode not exceeding 15 characters."
    }
  }, {
    elemKey: "js-creditCardNumber",
    formatPattern: "([^.$]+){10,15}",
    messages: {
      "isRequired": "* Please enter a valid credit card number.",
      "pattern": "* Please enter a valid credit card number."
    }
  }, {
    elemKey: "js-creditCardExpDateMonth",
    formatPattern: "([^.$]+){2}",
    messages: {
      "isRequired": "* Please enter a valid expiration month.",
      "pattern": "* Please enter a valid expiration month."
    }
  }, {
    elemKey: "js-creditCardExpDateYear",
    formatPattern: "([^.$]+){2}",
    messages: {
      "isRequired": "* Please enter a valid expiration year.",
      "pattern": "* Please enter a valid expiration year."
    }
  }, {
    elemKey: "js-creditCardExpDate",
    formatPattern: "([^.$]+){5}",
    messages: {
      "isRequired": "* Please enter a valid expiration date.",
      "pattern": "* Please enter a valid expiration date."
    }
  }, {
    elemKey: "js-creditCardCVCode",
    formatPattern: "[0-9]{3,4}",
    messages: {
      "isRequired": "* Please enter a valid CVCode.",
      "pattern": "* Please enter a valid CVCode."
    }
  }, {
    elemKey: "js-shippingCustomerName",
    messages: { "isRequired": "* Please enter a valid name." }
  }, {
    elemKey: "js-shippingAddress",
    messages: { "isRequired": "Please enter your address." }
  }, {
    elemKey: "js-shippingCity",
    formatPattern: "[a-zA-Z0-9\.\s ]{1,75}",
    messages: {
      "isRequired": "* Please enter a city.",
      "pattern": "* Please enter a valid city name not exceeding 75 characters."
    }
  }, {
    elemKey: "js-shippingState",
    formatPattern: "[a-zA-Z0-9\.\s ]{1,75}",
    messages: {
      "isRequired": "* Please enter a state.",
      "pattern": "* Please enter a valid state name."
    }
  }, {
    elemKey: "js-shippingZipcode",
    formatPattern: "[^.$]{1,15}",
    messages: {
      "isRequired": "* Please enter a valid zipcode.",
      "pattern": "* Please enter a valid zipcode not exceeding 15 characters."
    }
  }]
}];

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(317);
module.exports = __webpack_require__(326);


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(9);

var _jquery2 = _interopRequireDefault(_jquery);

var _shippingAddress = __webpack_require__(318);

var _fancySelect = __webpack_require__(319);

var _formEvents = __webpack_require__(320);

var _creditCard = __webpack_require__(323);

var _countrySelect = __webpack_require__(325);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { autocomplete } from './form/autocomplete';

// eslint-disable-line no-unused-vars

(0, _jquery2.default)(function () {

  //const address1 = document.getElementsByClassName("js-address");
  (0, _shippingAddress.toggleShippingAddress)(_formEvents.enableSubmitButton);
  (0, _formEvents.formValidationEvents)();
  (0, _fancySelect.initFancySelect)();

  (0, _creditCard.initCardNum)();
  (0, _creditCard.initCardExpMonth)();
  (0, _creditCard.initCardExpYear)();
  (0, _creditCard.initCardExpDate)();
  (0, _creditCard.initCardCvv)();
  (0, _creditCard.setupCvvHelp)();
  (0, _countrySelect.toggleStateInputTypes)();

  // Place order - submit form
  var btnPlaceOrder = (0, _jquery2.default)(".js-btnPlaceOrder");

  btnPlaceOrder.click(function () {
    (0, _jquery2.default)('#shoppingCartPaymentForm').submit();
  });

  // End: Place order - submit form

  (0, _jquery2.default)('.dataForm__section .inputGroup input').focusout(function (event) {
    var input = (0, _jquery2.default)(event.target);
    var textVal = input.val();
    if (textVal === "") {
      input.removeClass('jss-userData');
    } else {
      input.addClass('jss-userData');
    }
  });

  // autocomplete({address1:"js-address",address2:"js-address2",city:"js-city",zip:"js-zipcode",state:"js-selectState",country:"js-selectCountry"});
});
// import Cleave from 'cleave.js';

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleShippingAddress = undefined;

var _ramda = __webpack_require__(28);

var elemAddressContainer = $('.js-addressContainer--shipping');
var addressClass = 'addressContainer--shipping';

var toggleShippingAddress = exports.toggleShippingAddress = function toggleShippingAddress(callback) {
  var checkBox = $('.js-checkboxShippingAddress');

  if (checkBox.length) {
    checkBox.change(function () {
      if (this.checked) {
        elemAddressContainer.addClass(addressClass);
      } else {
        elemAddressContainer.removeClass(addressClass);
      }
      shippingInputlist();
      callback();
    });
  }
};

var shippingInputlist = function shippingInputlist() {
  var list = elemAddressContainer.find('input[type=text][class*=\'js-\']').not(".jss-shippingState");

  // console.log("list before >", list);

  var toggleDisplay = function toggleDisplay(el) {
    var elem = $(el);
    return elem.attr("display") === "true" ? elem.attr("display", "false") : elem.attr("display", "true");
  };

  (0, _ramda.forEach)(toggleDisplay, list);

  // console.log("list after >", list);
  return list;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFancySelect = initFancySelect;
var initSelect = function initSelect() {
  $(".js-selectCountry").select2({ width: '100%' });

  $(".js-selectState").select2({ width: '100%' });

  $('b[role="presentation"]').hide();

  $(".js-selectItemSize").select2({
    minimumResultsForSearch: Infinity
  });
};

function initFancySelect() {
  initSelect();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enableSubmitButton = exports.formValidationEvents = undefined;

var _jquery = __webpack_require__(9);

var _jquery2 = _interopRequireDefault(_jquery);

var _formData = __webpack_require__(118);

var _formValidation = __webpack_require__(321);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formValidationEvents = exports.formValidationEvents = function formValidationEvents() {

  (0, _jquery2.default)(_formData.currentForm).attr('novalidate', 'novalidate');

  // formOptionList.change(function(event) {
  //   const thisInput =$( event.target );
  //   validateInput(formKey, thisInput);
  // })

  (0, _jquery2.default)(_formData.formInputList).keyup(function (event) {
    var thisInput = (0, _jquery2.default)(event.target);
    (0, _formValidation.validateInput)(_formData.formKey, thisInput);

    // console.log('thisInput', thisInput);

    enableSubmitButton();
  });

  (0, _jquery2.default)(_formData.currentForm).submit(function (event) {
    (0, _formValidation.validateInputList)(_formData.formKey, _formData.formInputList);
    enableSubmitButton();
    var n = (0, _formData.formInputStatusList)().length;
    if (n > 0) {
      event.preventDefault();
    }
  });
};

var enableSubmitButton = exports.enableSubmitButton = function enableSubmitButton() {
  var validatedInputList = (0, _jquery2.default)(_formData.currentForm).find("\n        input[type=text][class*='js-'], input[type=tel], input[type=number], input[type=email], input[type=password], textarea\n      ").not("[display='false']").not("[valid-input='true']");

  // console.log('validatedInputList', validatedInputList);

  var submitBtn = (0, _jquery2.default)(_formData.currentForm).find('.js-submitButton');

  if (validatedInputList.length > 0) {
    submitBtn.attr('disabled', 'true');
  } else {
    submitBtn.removeAttr('disabled');
  }
};

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInput = undefined;
exports.validateInputList = validateInputList;

var _jquery = __webpack_require__(9);

var _jquery2 = _interopRequireDefault(_jquery);

var _ramda = __webpack_require__(28);

var _formData = __webpack_require__(118);

var _applyValidationRules = __webpack_require__(322);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var falsy = (0, _ramda.always)('false');
var isNotNil = (0, _ramda.complement)(_ramda.isNil);

var log = function log(x) {
  //console.log(x);
  return x;
};

var updateErrorPanel = function updateErrorPanel(elemKey, msg) {
  (0, _jquery2.default)('.' + elemKey + '-error').html(msg);
};

var isValueRequired = function isValueRequired(elemKey) {
  return isNotNil((0, _jquery2.default)('.' + elemKey).attr('required'));
};

var inputValue = function inputValue(elemKey) {
  var type = (0, _jquery2.default)('.' + elemKey).attr('type');

  if (type === 'checkbox') {
    return (0, _jquery2.default)('.' + elemKey).prop('checked') ? "checked" : "";
  }
  return (0, _jquery2.default)('.' + elemKey).val();
};

var updateValidationStatus = function updateValidationStatus(elemKey, msg) {
  (0, _jquery2.default)('.' + elemKey).attr("valid-input", (0, _ramda.isEmpty)(msg));
  return msg;
};

var getElemKey = function getElemKey(elem) {
  var defaltToNoKey = (0, _ramda.defaultTo)('noKey');
  var classList = (0, _jquery2.default)(elem).attr('class').split(" ");
  var jsClass = function jsClass(x) {
    return x.startsWith('js-');
  };
  var elemKey = defaltToNoKey((0, _ramda.head)()((0, _ramda.filter)(jsClass, classList)));

  // console.log('elemKey', elemKey);

  return elemKey;
};

var isOnValidationList = function isOnValidationList(formKey, elem) {

  // debugger;
  var elemKey = getElemKey(elem);

  var inputData = (0, _ramda.find)((0, _ramda.propEq)('elemKey', elemKey));
  var inputList = (0, _ramda.prop)('inputList');
  var currentFormData = (0, _ramda.find)((0, _ramda.propEq)('formKey', formKey));

  var result = (0, _ramda.compose)((0, _ramda.tap)(log), inputData, inputList, currentFormData);

  return result(_formData.formDataMap);
};

var messageContainer = function messageContainer(formKey, elemKey) {
  var messageList = (0, _ramda.prop)('messages');
  var inputData = (0, _ramda.find)((0, _ramda.propEq)('elemKey', elemKey));
  var inputList = (0, _ramda.prop)('inputList');
  var currentFormData = (0, _ramda.find)((0, _ramda.propEq)('formKey', formKey));

  var messages = (0, _ramda.compose)(messageList, inputData, inputList, currentFormData);

  return messages(_formData.formDataMap);
};

var partnerElemKey = function partnerElemKey(formKey, elemKey) {
  var currentFormData = (0, _ramda.find)((0, _ramda.propEq)('formKey', formKey));
  var inputList = (0, _ramda.prop)('inputList');
  var inputData = (0, _ramda.find)((0, _ramda.propEq)('elemKey', elemKey));
  var partner = (0, _ramda.prop)('partner');

  var elemKeyPartner = (0, _ramda.compose)(partner, inputData, inputList, currentFormData);

  return elemKeyPartner(_formData.formDataMap);
};

var formatPattern = function formatPattern(formKey, elemKey) {
  var currentFormData = (0, _ramda.find)((0, _ramda.propEq)('formKey', formKey));
  var inputList = (0, _ramda.prop)('inputList');
  var inputData = (0, _ramda.find)((0, _ramda.propEq)('elemKey', elemKey));
  var pattern = (0, _ramda.prop)('formatPattern');

  var elemFormatPattern = (0, _ramda.compose)(pattern, inputData, inputList, currentFormData);

  return elemFormatPattern(_formData.formDataMap);
};

var inspectRequired = function inspectRequired(formKey, elem) {
  var elemKey = getElemKey(elem);

  if ((0, _ramda.equals)('noKey', elemKey)) return;

  var elemValue = inputValue(elemKey);

  // console.log("key: value", elemKey, elemValue);

  var curryValidateRequired = (0, _ramda.curry)(_applyValidationRules.validateRequired);
  var onlyValidateRequiredInput = (0, _ramda.ifElse)(isValueRequired, curryValidateRequired, (0, _ramda.always)(undefined));

  var test = (0, _ramda.compose)((0, _ramda.partial)(updateErrorPanel, [elemKey]), (0, _ramda.partial)(updateValidationStatus, [elemKey]), (0, _ramda.partial)(_applyValidationRules.readValidationMsg, [elemKey]), onlyValidateRequiredInput(elemKey));

  var msgContainer = messageContainer(formKey, elemKey);
  var msg = (0, _ramda.prop)('isRequired')(msgContainer);

  test(elemValue, msg);
};

var inspectEmail = function inspectEmail(formKey, elem) {
  var elemKey = getElemKey(elem);
  if ((0, _ramda.equals)('noKey', elemKey)) return;

  var elemValue = inputValue(elemKey);

  if ((0, _ramda.isEmpty)(elemValue)) return;

  if ((0, _jquery2.default)(elem).attr('type') != 'email') return;

  var curryValidateEmail = (0, _ramda.curry)(_applyValidationRules.validateEmail);

  var test = (0, _ramda.compose)((0, _ramda.partial)(updateErrorPanel, [elemKey]), (0, _ramda.partial)(updateValidationStatus, [elemKey]), (0, _ramda.partial)(_applyValidationRules.readValidationMsg, [elemKey]), curryValidateEmail(elemKey));

  var msgContainer = messageContainer(formKey, elemKey);
  var msg = (0, _ramda.prop)('email')(msgContainer);

  test(elemValue, msg);
};

var inspectFormat = function inspectFormat(formKey, elem) {

  var elemKey = getElemKey(elem);
  if ((0, _ramda.equals)('noKey', elemKey)) return;

  var elemValue = inputValue(elemKey);
  if ((0, _ramda.isEmpty)(elemValue)) return;

  var pattern = formatPattern(formKey, elemKey);
  if ((0, _ramda.isNil)(pattern)) return;

  var msgContainer = messageContainer(formKey, elemKey);
  var msg = (0, _ramda.prop)('pattern')(msgContainer);

  var curriedValidateFormatPattern = (0, _ramda.curry)(_applyValidationRules.validateFormat);

  var test = (0, _ramda.compose)((0, _ramda.partial)(updateErrorPanel, [elemKey]), (0, _ramda.partial)(updateValidationStatus, [elemKey]), (0, _ramda.partial)(_applyValidationRules.readValidationMsg, [elemKey]), (0, _ramda.tap)(log), curriedValidateFormatPattern(elemKey, elemValue, pattern));

  test(msg);
};

var inspectEquality = function inspectEquality(formKey, elem) {
  var elemKey = getElemKey(elem);
  if ((0, _ramda.equals)('noKey', elemKey)) return;

  var elemValue = inputValue(elemKey);
  if ((0, _ramda.isEmpty)(elemValue)) return;

  var elemKeyPartner = partnerElemKey(formKey, elemKey);
  if ((0, _ramda.isNil)(elemKeyPartner)) return;

  var elemPartner = (0, _jquery2.default)('#' + formKey).find('.' + elemKeyPartner);
  var partnerValue = (0, _jquery2.default)(elemPartner).val();

  var msgContainer = messageContainer(formKey, elemKey);
  var msg = (0, _ramda.prop)('partner')(msgContainer);

  var curriedValidateEquality = (0, _ramda.curry)(_applyValidationRules.validateEquality);

  var test = (0, _ramda.compose)((0, _ramda.partial)(updateErrorPanel, [elemKey]), (0, _ramda.partial)(updateValidationStatus, [elemKey]), (0, _ramda.partial)(_applyValidationRules.readValidationMsg, [elemKey]), (0, _ramda.tap)(log), curriedValidateEquality(elemKey, elemValue, partnerValue));

  test(msg);
};

var hasInputErrors = function hasInputErrors(elem) {
  return (0, _ramda.equals)((0, _jquery2.default)(elem).attr('valid-input'), falsy());
};

var validateInput = exports.validateInput = function validateInput(formKey, elem) {

  var runInspectRequired = (0, _ramda.when)((0, _ramda.partial)(inspectRequired, [formKey]), (0, _ramda.partial)(isOnValidationList, [formKey]));
  runInspectRequired(elem);

  var runInspectEmail = (0, _ramda.unless)((0, _ramda.partial)(inspectEmail, [formKey]), hasInputErrors);
  runInspectEmail(elem);

  if (!hasInputErrors(elem)) {
    inspectEquality(formKey, elem);
  }

  if (!hasInputErrors(elem)) {
    inspectFormat(formKey, elem);
  }
};

function polyfilStringStartWith() {
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, pos) {
      return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    };
  }
}

function validateInputList(formKey, inputList) {
  polyfilStringStartWith();

  var currentinspectRequired = (0, _ramda.partial)(validateInput, [formKey]);
  (0, _ramda.forEach)(currentinspectRequired, inputList);
}

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readValidationMsg = exports.validateEmail = exports.validateRequired = undefined;
exports.validateFormat = validateFormat;
exports.validateEquality = validateEquality;
exports.validateNumericality = validateNumericality;

var _validate6 = __webpack_require__(116);

var _ramda = __webpack_require__(28);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var validateRequired = exports.validateRequired = function validateRequired(key, value, msg) {

  var constraint = _defineProperty({}, key, {
    presence: { message: "^" + msg, allowEmpty: false }
  });
  var m = (0, _validate6.validate)(_defineProperty({}, key, value), constraint);

  // console.log('m.', m);

  return m;
};

var validateEmail = exports.validateEmail = function validateEmail(key, value, msg) {
  var constraint = _defineProperty({}, key, {
    email: {
      message: "^" + msg
    }
  });
  // return validate( {[key]: value}, constraint );
  var m = (0, _validate6.validate)(_defineProperty({}, key, value), constraint);

  // console.log('m', key, value, msg, m);

  return m;
};

function validateFormat(key, value, pattern, msg) {
  var constraint = _defineProperty({}, key, {
    format: {
      pattern: pattern,
      flags: "gi",
      message: "^" + msg
    }
  });

  return (0, _validate6.validate)(_defineProperty({}, key, value), constraint);
}

function validateEquality(key, value, partnerValue, msg) {
  var _validate4;

  var constraint = _defineProperty({}, key, {
    equality: {
      attribute: "partnerKey",
      message: "^" + msg
    }
  });
  return (0, _validate6.validate)((_validate4 = {}, _defineProperty(_validate4, key, value), _defineProperty(_validate4, "partnerKey", partnerValue), _validate4), constraint);
}

function validateNumericality(key, value, msg) {
  var constraint = _defineProperty({}, key, {
    numericality: {
      notValid: "must be evenly divisible by two",
      message: "^" + msg
    }
  });
  return (0, _validate6.validate)(_defineProperty({}, key, value), constraint);
}

var readValidationMsg = exports.readValidationMsg = function readValidationMsg(key, messageList) {
  return (0, _ramda.ifElse)(_ramda.isNil, (0, _ramda.always)(""), (0, _ramda.prop)(key))(messageList);
};

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupCvvHelp = exports.initCardCvv = exports.initCardExpYear = exports.initCardExpMonth = exports.initCardExpDate = exports.initCardNum = undefined;

var _cleave = __webpack_require__(324);

var _cleave2 = _interopRequireDefault(_cleave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.js-credit--default').css({ "display": "block" });

// function dimCardImages(dimFlag) {
//   if (dimFlag) {
//     $('.js-credit--amex').hide();
//     $('.js-credit--amex-mask').show();
//     $('.js-credit--visa').hide();
//     $('.js-credit--visa-mask').show();
//     $('.js-credit--mastercard').hide();
//     $('.js-credit--mastercard-mask').show();
//     $('.js-credit--discover').hide();
//     $('.js-credit--discover-mask').show();
//   }
//   else {
//     $('.js-credit--amex').show();
//     $('.js-credit--amex-mask').hide();
//     $('.js-credit--visa').show();
//     $('.js-credit--visa-mask').hide();
//     $('.js-credit--mastercard').show();
//     $('.js-credit--mastercard-mask').hide();
//     $('.js-credit--discover').show();
//     $('.js-credit--discover-mask').hide();
//   }
// }

var hideAllCardImages = function hideAllCardImages() {
  $('.js-credit--amex').hide();
  $('.js-credit--visa').hide();
  $('.js-credit--mastercard').hide();
  $('.js-credit--discover').hide();
};

function displayCardImages(type) {
  // dimCardImages(true)
  hideAllCardImages();

  var cardType = '.js-credit--' + type;
  var cardTypeMask = '.js-credit--' + type + '-mask';
  $(cardType).show();
  $(cardTypeMask).hide();
}

var initCardNum = exports.initCardNum = function initCardNum() {
  if ($('.jss-dataInput--cardNum').length > 0) {
    // dimCardImages(false);
    hideAllCardImages();

    // it exists
    var cleaveCardNum = new _cleave2.default('.jss-dataInput--cardNum', { // eslint-disable-line no-unused-vars
      creditCard: true,
      onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {
        console.log(type);

        if (type === 'unknown') {
          // dimCardImages(false);
          hideAllCardImages();
        } else {
          displayCardImages(type);
        }
      }
    });
  }
};

var initCardExpDate = exports.initCardExpDate = function initCardExpDate() {
  if ($('.jss-dataInput--cardExpDate').length > 0) {
    var cleaeveCardDate = new _cleave2.default('.jss-dataInput--cardExpDate', { // eslint-disable-line no-unused-vars
      date: true,
      datePattern: ['m', 'y'],
      delimiter: '/'
    });
  }
};

var initCardExpMonth = exports.initCardExpMonth = function initCardExpMonth() {
  if ($('.jss-dataInput--cardExpDateMonth').length > 0) {
    var cleaeveCardDate = new _cleave2.default('.jss-dataInput--cardExpDateMonth', { // eslint-disable-line no-unused-vars
      date: true,
      numericOnly: true,
      datePattern: ['m'],
      delimiter: ''
    });
  }
};

var initCardExpYear = exports.initCardExpYear = function initCardExpYear() {
  if ($('.jss-dataInput--cardExpDateYear').length > 0) {
    var cleaeveCardDate = new _cleave2.default('.jss-dataInput--cardExpDateYear', { // eslint-disable-line no-unused-vars
      date: true,
      numericOnly: true,
      datePattern: ['y'],
      delimiter: ''
    });
  }
};

var initCardCvv = exports.initCardCvv = function initCardCvv() {
  if ($('.jss-dataInput--cardCVCode').length > 0) {
    var cleaeveCardCvCode = new _cleave2.default('.jss-dataInput--cardCVCode', { // eslint-disable-line no-unused-vars
      numeral: false,
      delimiter: ''
    });
  }
};

var setupCvvHelp = exports.setupCvvHelp = function setupCvvHelp() {
  if ($('.js-cvvInstructions').length > 0) {
    $('.js-cvvInstructions').click(function (e) {
      e.stopPropagation();

      var $link = $('.js-lightboxClose');
      location.href = $link.attr('href');
    });
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Cleave"] = factory();
	else
		root["Cleave"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Construct a new Cleave instance by passing the configuration object
	 *
	 * @param {String | HTMLElement} element
	 * @param {Object} opts
	 */
	var Cleave = function (element, opts) {
	    var owner = this;

	    if (typeof element === 'string') {
	        owner.element = document.querySelector(element);
	    } else {
	        owner.element = ((typeof element.length !== 'undefined') && element.length > 0) ? element[0] : element;
	    }

	    if (!owner.element) {
	        throw new Error('[cleave.js] Please check the element');
	    }

	    opts.initValue = owner.element.value;

	    owner.properties = Cleave.DefaultProperties.assign({}, opts);

	    owner.init();
	};

	Cleave.prototype = {
	    init: function () {
	        var owner = this, pps = owner.properties;

	        // no need to use this lib
	        if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.date && (pps.blocksLength === 0 && !pps.prefix)) {
	            owner.onInput(pps.initValue);

	            return;
	        }

	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);

	        owner.isAndroid = Cleave.Util.isAndroid();
	        owner.lastInputValue = '';

	        owner.onChangeListener = owner.onChange.bind(owner);
	        owner.onKeyDownListener = owner.onKeyDown.bind(owner);
	        owner.onCutListener = owner.onCut.bind(owner);
	        owner.onCopyListener = owner.onCopy.bind(owner);

	        owner.element.addEventListener('input', owner.onChangeListener);
	        owner.element.addEventListener('keydown', owner.onKeyDownListener);
	        owner.element.addEventListener('cut', owner.onCutListener);
	        owner.element.addEventListener('copy', owner.onCopyListener);


	        owner.initPhoneFormatter();
	        owner.initDateFormatter();
	        owner.initNumeralFormatter();

	        // avoid touch input field if value is null
	        // otherwise Firefox will add red box-shadow for <input required />
	        if (pps.initValue || (pps.prefix && !pps.noImmediatePrefix)) {
	            owner.onInput(pps.initValue);
	        }
	    },

	    initNumeralFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.numeral) {
	            return;
	        }

	        pps.numeralFormatter = new Cleave.NumeralFormatter(
	            pps.numeralDecimalMark,
	            pps.numeralIntegerScale,
	            pps.numeralDecimalScale,
	            pps.numeralThousandsGroupStyle,
	            pps.numeralPositiveOnly,
	            pps.stripLeadingZeroes,
	            pps.delimiter
	        );
	    },

	    initDateFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.date) {
	            return;
	        }

	        pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern);
	        pps.blocks = pps.dateFormatter.getBlocks();
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
	    },

	    initPhoneFormatter: function () {
	        var owner = this, pps = owner.properties;

	        if (!pps.phone) {
	            return;
	        }

	        // Cleave.AsYouTypeFormatter should be provided by
	        // external google closure lib
	        try {
	            pps.phoneFormatter = new Cleave.PhoneFormatter(
	                new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode),
	                pps.delimiter
	            );
	        } catch (ex) {
	            throw new Error('[cleave.js] Please include phone-type-formatter.{country}.js lib');
	        }
	    },

	    onKeyDown: function (event) {
	        var owner = this, pps = owner.properties,
	            charCode = event.which || event.keyCode,
	            Util = Cleave.Util,
	            currentValue = owner.element.value;

	        if (Util.isAndroidBackspaceKeydown(owner.lastInputValue, currentValue)) {
	            charCode = 8;
	        }

	        owner.lastInputValue = currentValue;

	        // hit backspace when last character is delimiter
	        if (charCode === 8 && Util.isDelimiter(currentValue.slice(-pps.delimiterLength), pps.delimiter, pps.delimiters)) {
	            pps.backspace = true;

	            return;
	        }

	        pps.backspace = false;
	    },

	    onChange: function () {
	        this.onInput(this.element.value);
	    },

	    onCut: function (e) {
	        this.copyClipboardData(e);
	        this.onInput('');
	    },

	    onCopy: function (e) {
	        this.copyClipboardData(e);
	    },

	    copyClipboardData: function (e) {
	        var owner = this,
	            pps = owner.properties,
	            Util = Cleave.Util,
	            inputValue = owner.element.value,
	            textToCopy = '';

	        if (!pps.copyDelimiter) {
	            textToCopy = Util.stripDelimiters(inputValue, pps.delimiter, pps.delimiters);
	        } else {
	            textToCopy = inputValue;
	        }

	        try {
	            if (e.clipboardData) {
	                e.clipboardData.setData('Text', textToCopy);
	            } else {
	                window.clipboardData.setData('Text', textToCopy);
	            }

	            e.preventDefault();
	        } catch (ex) {
	            //  empty
	        }
	    },

	    onInput: function (value) {
	        var owner = this, pps = owner.properties,
	            Util = Cleave.Util;

	        // case 1: delete one more character "4"
	        // 1234*| -> hit backspace -> 123|
	        // case 2: last character is not delimiter which is:
	        // 12|34* -> hit backspace -> 1|34*
	        // note: no need to apply this for numeral mode
	        if (!pps.numeral && pps.backspace && !Util.isDelimiter(value.slice(-pps.delimiterLength), pps.delimiter, pps.delimiters)) {
	            value = Util.headStr(value, value.length - pps.delimiterLength);
	        }

	        // phone formatter
	        if (pps.phone) {
	            if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	                pps.result = pps.prefix + pps.phoneFormatter.format(value).slice(pps.prefix.length);
	            } else {
	                pps.result = pps.phoneFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	        // numeral formatter
	        if (pps.numeral) {
	            if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	                pps.result = pps.prefix + pps.numeralFormatter.format(value);
	            } else {
	                pps.result = pps.numeralFormatter.format(value);
	            }
	            owner.updateValueState();

	            return;
	        }

	        // date
	        if (pps.date) {
	            value = pps.dateFormatter.getValidatedDate(value);
	        }

	        // strip delimiters
	        value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);

	        // strip prefix
	        value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength);

	        // strip non-numeric characters
	        value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;

	        // convert case
	        value = pps.uppercase ? value.toUpperCase() : value;
	        value = pps.lowercase ? value.toLowerCase() : value;

	        // prefix
	        if (pps.prefix && (!pps.noImmediatePrefix || value.length)) {
	            value = pps.prefix + value;

	            // no blocks specified, no need to do formatting
	            if (pps.blocksLength === 0) {
	                pps.result = value;
	                owner.updateValueState();

	                return;
	            }
	        }

	        // update credit card props
	        if (pps.creditCard) {
	            owner.updateCreditCardPropsByValue(value);
	        }

	        // strip over length characters
	        value = Util.headStr(value, pps.maxLength);

	        // apply blocks
	        pps.result = Util.getFormattedValue(
	            value,
	            pps.blocks, pps.blocksLength,
	            pps.delimiter, pps.delimiters, pps.delimiterLazyShow
	        );

	        owner.updateValueState();
	    },

	    updateCreditCardPropsByValue: function (value) {
	        var owner = this, pps = owner.properties,
	            Util = Cleave.Util,
	            creditCardInfo;

	        // At least one of the first 4 characters has changed
	        if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) {
	            return;
	        }

	        creditCardInfo = Cleave.CreditCardDetector.getInfo(value, pps.creditCardStrictMode);

	        pps.blocks = creditCardInfo.blocks;
	        pps.blocksLength = pps.blocks.length;
	        pps.maxLength = Util.getMaxLength(pps.blocks);

	        // credit card type changed
	        if (pps.creditCardType !== creditCardInfo.type) {
	            pps.creditCardType = creditCardInfo.type;

	            pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
	        }
	    },

	    setCurrentSelection: function (endPos, oldValue) {
	        var elem = this.element;

	        // If cursor was at the end of value, just place it back.
	        // Because new value could contain additional chars.
	        if (oldValue.length !== endPos && elem === document.activeElement) {
	          if ( elem.createTextRange ) {
	            var range = elem.createTextRange();

	            range.move('character', endPos);
	            range.select();
	          } else {
	            elem.setSelectionRange(endPos, endPos);
	          }
	        }
	    },

	    updateValueState: function () {
	        var owner = this;

	        if (!owner.element) {
	            return;
	        }

	        var endPos = owner.element.selectionEnd;
	        var oldValue = owner.element.value;

	        // fix Android browser type="text" input field
	        // cursor not jumping issue
	        if (owner.isAndroid) {
	            window.setTimeout(function () {
	                owner.element.value = owner.properties.result;
	                owner.setCurrentSelection(endPos, oldValue);
	            }, 1);

	            return;
	        }

	        owner.element.value = owner.properties.result;
	        owner.setCurrentSelection(endPos, oldValue);
	    },

	    setPhoneRegionCode: function (phoneRegionCode) {
	        var owner = this, pps = owner.properties;

	        pps.phoneRegionCode = phoneRegionCode;
	        owner.initPhoneFormatter();
	        owner.onChange();
	    },

	    setRawValue: function (value) {
	        var owner = this, pps = owner.properties;

	        value = value !== undefined && value !== null ? value.toString() : '';

	        if (pps.numeral) {
	            value = value.replace('.', pps.numeralDecimalMark);
	        }

	        pps.backspace = false;
	        
	        owner.element.value = value;
	        owner.onInput(value);
	    },

	    getRawValue: function () {
	        var owner = this,
	            pps = owner.properties,
	            Util = Cleave.Util,
	            rawValue = owner.element.value;

	        if (pps.rawValueTrimPrefix) {
	            rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength);
	        }

	        if (pps.numeral) {
	            rawValue = pps.numeralFormatter.getRawValue(rawValue);
	        } else {
	            rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
	        }

	        return rawValue;
	    },

	    getISOFormatDate: function () {
	        var owner = this,
	            pps = owner.properties;

	        return pps.date ? pps.dateFormatter.getISOFormatDate() : '';
	    },

	    getFormattedValue: function () {
	        return this.element.value;
	    },

	    destroy: function () {
	        var owner = this;

	        owner.element.removeEventListener('input', owner.onChangeListener);
	        owner.element.removeEventListener('keydown', owner.onKeyDownListener);
	        owner.element.removeEventListener('cut', owner.onCutListener);
	        owner.element.removeEventListener('copy', owner.onCopyListener);
	    },

	    toString: function () {
	        return '[Cleave Object]';
	    }
	};

	Cleave.NumeralFormatter = __webpack_require__(1);
	Cleave.DateFormatter = __webpack_require__(2);
	Cleave.PhoneFormatter = __webpack_require__(3);
	Cleave.CreditCardDetector = __webpack_require__(4);
	Cleave.Util = __webpack_require__(5);
	Cleave.DefaultProperties = __webpack_require__(6);

	// for angular directive
	((typeof global === 'object' && global) ? global : window)['Cleave'] = Cleave;

	// CommonJS
	module.exports = Cleave;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	var NumeralFormatter = function (numeralDecimalMark,
	                                 numeralIntegerScale,
	                                 numeralDecimalScale,
	                                 numeralThousandsGroupStyle,
	                                 numeralPositiveOnly,
	                                 stripLeadingZeroes,
	                                 delimiter) {
	    var owner = this;

	    owner.numeralDecimalMark = numeralDecimalMark || '.';
	    owner.numeralIntegerScale = numeralIntegerScale > 0 ? numeralIntegerScale : 0;
	    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
	    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
	    owner.numeralPositiveOnly = !!numeralPositiveOnly;
	    owner.stripLeadingZeroes = stripLeadingZeroes !== false;
	    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ',';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
	};

	NumeralFormatter.groupStyle = {
	    thousand: 'thousand',
	    lakh:     'lakh',
	    wan:      'wan',
	    none:     'none'    
	};

	NumeralFormatter.prototype = {
	    getRawValue: function (value) {
	        return value.replace(this.delimiterRE, '').replace(this.numeralDecimalMark, '.');
	    },

	    format: function (value) {
	        var owner = this, parts, partInteger, partDecimal = '';

	        // strip alphabet letters
	        value = value.replace(/[A-Za-z]/g, '')
	            // replace the first decimal mark with reserved placeholder
	            .replace(owner.numeralDecimalMark, 'M')

	            // strip non numeric letters except minus and "M"
	            // this is to ensure prefix has been stripped
	            .replace(/[^\dM-]/g, '')

	            // replace the leading minus with reserved placeholder
	            .replace(/^\-/, 'N')

	            // strip the other minus sign (if present)
	            .replace(/\-/g, '')

	            // replace the minus sign (if present)
	            .replace('N', owner.numeralPositiveOnly ? '' : '-')

	            // replace decimal mark
	            .replace('M', owner.numeralDecimalMark);

	        // strip any leading zeros
	        if (owner.stripLeadingZeroes) {
	            value = value.replace(/^(-)?0+(?=\d)/, '$1');
	        }

	        partInteger = value;

	        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
	            parts = value.split(owner.numeralDecimalMark);
	            partInteger = parts[0];
	            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
	        }

	        if (owner.numeralIntegerScale > 0) {
	          partInteger = partInteger.slice(0, owner.numeralIntegerScale + (value.slice(0, 1) === '-' ? 1 : 0));
	        }

	        switch (owner.numeralThousandsGroupStyle) {
	        case NumeralFormatter.groupStyle.lakh:
	            partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + owner.delimiter);

	            break;

	        case NumeralFormatter.groupStyle.wan:
	            partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, '$1' + owner.delimiter);

	            break;

	        case NumeralFormatter.groupStyle.thousand:
	            partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + owner.delimiter);

	            break;
	        }

	        return partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '');
	    }
	};

	module.exports = NumeralFormatter;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var DateFormatter = function (datePattern) {
	    var owner = this;

	    owner.date = [];
	    owner.blocks = [];
	    owner.datePattern = datePattern;
	    owner.initBlocks();
	};

	DateFormatter.prototype = {
	    initBlocks: function () {
	        var owner = this;
	        owner.datePattern.forEach(function (value) {
	            if (value === 'Y') {
	                owner.blocks.push(4);
	            } else {
	                owner.blocks.push(2);
	            }
	        });
	    },

	    getISOFormatDate: function () {
	        var owner = this,
	            date = owner.date;

	        return date[2] ? (
	            date[2] + '-' + owner.addLeadingZero(date[1]) + '-' + owner.addLeadingZero(date[0])
	        ) : '';
	    },

	    getBlocks: function () {
	        return this.blocks;
	    },

	    getValidatedDate: function (value) {
	        var owner = this, result = '';

	        value = value.replace(/[^\d]/g, '');

	        owner.blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    sub0 = sub.slice(0, 1),
	                    rest = value.slice(length);

	                switch (owner.datePattern[index]) {
	                case 'd':
	                    if (sub === '00') {
	                        sub = '01';
	                    } else if (parseInt(sub0, 10) > 3) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > 31) {
	                        sub = '31';
	                    }

	                    break;

	                case 'm':
	                    if (sub === '00') {
	                        sub = '01';
	                    } else if (parseInt(sub0, 10) > 1) {
	                        sub = '0' + sub0;
	                    } else if (parseInt(sub, 10) > 12) {
	                        sub = '12';
	                    }

	                    break;
	                }

	                result += sub;

	                // update remaining string
	                value = rest;
	            }
	        });

	        return this.getFixedDateString(result);
	    },

	    getFixedDateString: function (value) {
	        var owner = this, datePattern = owner.datePattern, date = [],
	            dayIndex = 0, monthIndex = 0, yearIndex = 0,
	            dayStartIndex = 0, monthStartIndex = 0, yearStartIndex = 0,
	            day, month, year;

	        // mm-dd || dd-mm
	        if (value.length === 4 && datePattern[0].toLowerCase() !== 'y' && datePattern[1].toLowerCase() !== 'y') {
	            dayStartIndex = datePattern[0] === 'd' ? 0 : 2;
	            monthStartIndex = 2 - dayStartIndex;
	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);

	            date = this.getFixedDate(day, month, 0);
	        }

	        // yyyy-mm-dd || yyyy-dd-mm || mm-dd-yyyy || dd-mm-yyyy || dd-yyyy-mm || mm-yyyy-dd
	        if (value.length === 8) {
	            datePattern.forEach(function (type, index) {
	                switch (type) {
	                case 'd':
	                    dayIndex = index;
	                    break;
	                case 'm':
	                    monthIndex = index;
	                    break;
	                default:
	                    yearIndex = index;
	                    break;
	                }
	            });

	            yearStartIndex = yearIndex * 2;
	            dayStartIndex = (dayIndex <= yearIndex) ? dayIndex * 2 : (dayIndex * 2 + 2);
	            monthStartIndex = (monthIndex <= yearIndex) ? monthIndex * 2 : (monthIndex * 2 + 2);

	            day = parseInt(value.slice(dayStartIndex, dayStartIndex + 2), 10);
	            month = parseInt(value.slice(monthStartIndex, monthStartIndex + 2), 10);
	            year = parseInt(value.slice(yearStartIndex, yearStartIndex + 4), 10);

	            date = this.getFixedDate(day, month, year);
	        }

	        owner.date = date;

	        return date.length === 0 ? value : datePattern.reduce(function (previous, current) {
	            switch (current) {
	            case 'd':
	                return previous + owner.addLeadingZero(date[0]);
	            case 'm':
	                return previous + owner.addLeadingZero(date[1]);
	            default:
	                return previous + '' + (date[2] || '');
	            }
	        }, '');
	    },

	    getFixedDate: function (day, month, year) {
	        day = Math.min(day, 31);
	        month = Math.min(month, 12);
	        year = parseInt((year || 0), 10);

	        if ((month < 7 && month % 2 === 0) || (month > 8 && month % 2 === 1)) {
	            day = Math.min(day, month === 2 ? (this.isLeapYear(year) ? 29 : 28) : 30);
	        }

	        return [day, month, year];
	    },

	    isLeapYear: function (year) {
	        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
	    },

	    addLeadingZero: function (number) {
	        return (number < 10 ? '0' : '') + number;
	    }
	};

	module.exports = DateFormatter;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	var PhoneFormatter = function (formatter, delimiter) {
	    var owner = this;

	    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ' ';
	    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

	    owner.formatter = formatter;
	};

	PhoneFormatter.prototype = {
	    setFormatter: function (formatter) {
	        this.formatter = formatter;
	    },

	    format: function (phoneNumber) {
	        var owner = this;

	        owner.formatter.clear();

	        // only keep number and +
	        phoneNumber = phoneNumber.replace(/[^\d+]/g, '');

	        // strip delimiter
	        phoneNumber = phoneNumber.replace(owner.delimiterRE, '');

	        var result = '', current, validated = false;

	        for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
	            current = owner.formatter.inputDigit(phoneNumber.charAt(i));

	            // has ()- or space inside
	            if (/[\s()-]/g.test(current)) {
	                result = current;

	                validated = true;
	            } else {
	                if (!validated) {
	                    result = current;
	                }
	                // else: over length input
	                // it turns to invalid number again
	            }
	        }

	        // strip ()
	        // e.g. US: 7161234567 returns (716) 123-4567
	        result = result.replace(/[()]/g, '');
	        // replace library delimiter with user customized delimiter
	        result = result.replace(/[\s-]/g, owner.delimiter);

	        return result;
	    }
	};

	module.exports = PhoneFormatter;



/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var CreditCardDetector = {
	    blocks: {
	        uatp:          [4, 5, 6],
	        amex:          [4, 6, 5],
	        diners:        [4, 6, 4],
	        discover:      [4, 4, 4, 4],
	        mastercard:    [4, 4, 4, 4],
	        dankort:       [4, 4, 4, 4],
	        instapayment:  [4, 4, 4, 4],
	        jcb:           [4, 4, 4, 4],
	        maestro:       [4, 4, 4, 4],
	        visa:          [4, 4, 4, 4],
	        mir:           [4, 4, 4, 4],
	        general:       [4, 4, 4, 4],
	        unionPay:      [4, 4, 4, 4],
	        generalStrict: [4, 4, 4, 7]
	    },

	    re: {
	        // starts with 1; 15 digits, not starts with 1800 (jcb card)
	        uatp: /^(?!1800)1\d{0,14}/,

	        // starts with 34/37; 15 digits
	        amex: /^3[47]\d{0,13}/,

	        // starts with 6011/65/644-649; 16 digits
	        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

	        // starts with 300-305/309 or 36/38/39; 14 digits
	        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

	        // starts with 51-55/2221–2720; 16 digits
	        mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,

	        // starts with 5019/4175/4571; 16 digits
	        dankort: /^(5019|4175|4571)\d{0,12}/,

	        // starts with 637-639; 16 digits
	        instapayment: /^63[7-9]\d{0,13}/,

	        // starts with 2131/1800/35; 16 digits
	        jcb: /^(?:2131|1800|35\d{0,2})\d{0,12}/,

	        // starts with 50/56-58/6304/67; 16 digits
	        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,
	        
	        // starts with 22; 16 digits
	        mir: /^220[0-4]\d{0,12}/,

	        // starts with 4; 16 digits
	        visa: /^4\d{0,15}/,

	        // starts with 62; 16 digits
	        unionPay: /^62\d{0,14}/
	    },

	    getInfo: function (value, strictMode) {
	        var blocks = CreditCardDetector.blocks,
	            re = CreditCardDetector.re;

	        // In theory, visa credit card can have up to 19 digits number.
	        // Set strictMode to true will remove the 16 max-length restrain,
	        // however, I never found any website validate card number like
	        // this, hence probably you don't need to enable this option.
	        strictMode = !!strictMode;

	        for (var key in re) {
	            if (re[key].test(value)) {
	                var block;
	                if (
	                    key === 'discover' ||
	                    key === 'maestro' ||
	                    key === 'visa' ||
	                    key === 'mir' ||
	                    key === 'unionPay'
	                ) {
	                    block = strictMode ? blocks.generalStrict : blocks[key];
	                } else {
	                    block = blocks[key];
	                }
	                return {
	                    type: key,
	                    blocks: block
	                };
	            }
	        }

	        return {
	            type:   'unknown',
	            blocks: strictMode ? blocks.generalStrict : blocks.general
	        };
	    }
	};

	module.exports = CreditCardDetector;



/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	var Util = {
	    noop: function () {
	    },

	    strip: function (value, re) {
	        return value.replace(re, '');
	    },

	    isDelimiter: function (letter, delimiter, delimiters) {
	        // single delimiter
	        if (delimiters.length === 0) {
	            return letter === delimiter;
	        }

	        // multiple delimiters
	        return delimiters.some(function (current) {
	            if (letter === current) {
	                return true;
	            }
	        });
	    },

	    getDelimiterREByDelimiter: function (delimiter) {
	        return new RegExp(delimiter.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'g');
	    },

	    stripDelimiters: function (value, delimiter, delimiters) {
	        var owner = this;

	        // single delimiter
	        if (delimiters.length === 0) {
	            var delimiterRE = delimiter ? owner.getDelimiterREByDelimiter(delimiter) : '';

	            return value.replace(delimiterRE, '');
	        }

	        // multiple delimiters
	        delimiters.forEach(function (current) {
	            value = value.replace(owner.getDelimiterREByDelimiter(current), '');
	        });

	        return value;
	    },

	    headStr: function (str, length) {
	        return str.slice(0, length);
	    },

	    getMaxLength: function (blocks) {
	        return blocks.reduce(function (previous, current) {
	            return previous + current;
	        }, 0);
	    },

	    // strip value by prefix length
	    // for prefix: PRE
	    // (PRE123, 3) -> 123
	    // (PR123, 3) -> 23 this happens when user hits backspace in front of "PRE"
	    getPrefixStrippedValue: function (value, prefix, prefixLength) {
	        if (value.slice(0, prefixLength) !== prefix) {
	            var diffIndex = this.getFirstDiffIndex(prefix, value.slice(0, prefixLength));

	            value = prefix + value.slice(diffIndex, diffIndex + 1) + value.slice(prefixLength + 1);
	        }

	        return value.slice(prefixLength);
	    },

	    getFirstDiffIndex: function (prev, current) {
	        var index = 0;

	        while (prev.charAt(index) === current.charAt(index)) {
	            if (prev.charAt(index++) === '') {
	                return -1;
	            }
	        }

	        return index;
	    },

	    getFormattedValue: function (value, blocks, blocksLength, delimiter, delimiters, delimiterLazyShow) {
	        var result = '',
	            multipleDelimiters = delimiters.length > 0,
	            currentDelimiter;

	        // no options, normal input
	        if (blocksLength === 0) {
	            return value;
	        }

	        blocks.forEach(function (length, index) {
	            if (value.length > 0) {
	                var sub = value.slice(0, length),
	                    rest = value.slice(length);

	                if (multipleDelimiters) {
	                    currentDelimiter = delimiters[delimiterLazyShow ? (index - 1) : index] || currentDelimiter;
	                } else {
	                    currentDelimiter = delimiter;
	                }

	                if (delimiterLazyShow) {
	                    if (index > 0) {
	                        result += currentDelimiter;
	                    }

	                    result += sub;
	                } else {
	                    result += sub;

	                    if (sub.length === length && index < blocksLength - 1) {
	                        result += currentDelimiter;
	                    }
	                }

	                // update remaining string
	                value = rest;
	            }
	        });

	        return result;
	    },

	    isAndroid: function () {
	        return navigator && /android/i.test(navigator.userAgent);
	    },

	    // On Android chrome, the keyup and keydown events
	    // always return key code 229 as a composition that
	    // buffers the user’s keystrokes
	    // see https://github.com/nosir/cleave.js/issues/147
	    isAndroidBackspaceKeydown: function (lastInputValue, currentInputValue) {
	        if (!this.isAndroid() || !lastInputValue || !currentInputValue) {
	            return false;
	        }

	        return currentInputValue === lastInputValue.slice(0, -1);
	    }
	};

	module.exports = Util;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	/**
	 * Props Assignment
	 *
	 * Separate this, so react module can share the usage
	 */
	var DefaultProperties = {
	    // Maybe change to object-assign
	    // for now just keep it as simple
	    assign: function (target, opts) {
	        target = target || {};
	        opts = opts || {};

	        // credit card
	        target.creditCard = !!opts.creditCard;
	        target.creditCardStrictMode = !!opts.creditCardStrictMode;
	        target.creditCardType = '';
	        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || (function () {});

	        // phone
	        target.phone = !!opts.phone;
	        target.phoneRegionCode = opts.phoneRegionCode || 'AU';
	        target.phoneFormatter = {};

	        // date
	        target.date = !!opts.date;
	        target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
	        target.dateFormatter = {};

	        // numeral
	        target.numeral = !!opts.numeral;
	        target.numeralIntegerScale = opts.numeralIntegerScale > 0 ? opts.numeralIntegerScale : 0;
	        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
	        target.numeralDecimalMark = opts.numeralDecimalMark || '.';
	        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
	        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;
	        target.stripLeadingZeroes = opts.stripLeadingZeroes !== false;

	        // others
	        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;

	        target.uppercase = !!opts.uppercase;
	        target.lowercase = !!opts.lowercase;

	        target.prefix = (target.creditCard || target.date) ? '' : (opts.prefix || '');
	        target.noImmediatePrefix = !!opts.noImmediatePrefix;
	        target.prefixLength = target.prefix.length;
	        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
	        target.copyDelimiter = !!opts.copyDelimiter;

	        target.initValue = (opts.initValue !== undefined && opts.initValue !== null) ? opts.initValue.toString() : '';

	        target.delimiter =
	            (opts.delimiter || opts.delimiter === '') ? opts.delimiter :
	                (opts.date ? '/' :
	                    (opts.numeral ? ',' :
	                        (opts.phone ? ' ' :
	                            ' ')));
	        target.delimiterLength = target.delimiter.length;
	        target.delimiterLazyShow = !!opts.delimiterLazyShow;
	        target.delimiters = opts.delimiters || [];

	        target.blocks = opts.blocks || [];
	        target.blocksLength = target.blocks.length;

	        target.root = (typeof global === 'object' && global) ? global : window;

	        target.maxLength = 0;

	        target.backspace = false;
	        target.result = '';

	        return target;
	    }
	};

	module.exports = DefaultProperties;


	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ })
/******/ ])
});
;

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleStateInputTypes = toggleStateInputTypes;
var initStateInputTypes = function initStateInputTypes() {

  var countrySelectBilling = $('.jss-selectCountry__billing');
  var stateTextBilling = $('.jss-dataForm__section__billingStateText');
  var stateSelectBilling = $('.jss-dataForm__section__billingStateSelect');
  var inputBilling = $('.jss-billingState');
  var inputShipping = $('.jss-shippingState');

  countrySelectBilling.change(function () {
    var countryCodeSelected = $('.jss-selectCountry__billing option:selected').val();
    // const countryCodeSelected = $('.jss-selectCountry__billing option:selected');

    if (countryCodeSelected === 'US') {
      // if ($(countryCodeSelected).hasClass("jss-hasStateList")) {
      stateTextBilling.addClass('dataForm__section--hidden');
      stateSelectBilling.removeClass('dataForm__section--hidden');
      inputBilling.attr("display", "false");
    } else {
      stateTextBilling.removeClass('dataForm__section--hidden');
      stateSelectBilling.addClass('dataForm__section--hidden');
      inputBilling.attr("display", "true");
    }

    console.log(inputBilling);
  });

  var countrySelectShipping = $('.jss-selectCountry__shipping');
  var stateTextShipping = $('.jss-dataForm__section__shippingStateText');
  var stateSelectShipping = $('.jss-dataForm__section__shippingStateSelect');

  countrySelectShipping.change(function () {
    var countryCodeSelected = $('.jss-selectCountry__shipping option:selected').val();
    // const countryCodeSelected = $('.jss-selectCountry__shipping option:selected');

    if (countryCodeSelected === 'US') {
      // if ($(countryCodeSelected).hasClass("jss-hasStateList")) {
      stateTextShipping.addClass('dataForm__section--hidden');
      stateSelectShipping.removeClass('dataForm__section--hidden');
      inputShipping.attr("display", "false");
    } else {
      stateTextShipping.removeClass('dataForm__section--hidden');
      stateSelectShipping.addClass('dataForm__section--hidden');
      inputShipping.attr("display", "true");
    }
  });
};

function toggleStateInputTypes() {
  initStateInputTypes();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[316]);