["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/dataset.js"],"~:js","goog.provide(\"goog.dom.dataset\");\ngoog.require(\"goog.labs.userAgent.browser\");\ngoog.require(\"goog.string\");\ngoog.require(\"goog.userAgent.product\");\ngoog.dom.dataset.ALLOWED_ = !goog.userAgent.product.IE && !goog.labs.userAgent.browser.isSafari();\ngoog.dom.dataset.PREFIX_ = \"data-\";\ngoog.dom.dataset.isValidProperty_ = function(key) {\n  return !/-[a-z]/.test(key);\n};\ngoog.dom.dataset.set = function(element, key, value) {\n  var htmlElement = element;\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    htmlElement.dataset[key] = value;\n  } else if (!goog.dom.dataset.isValidProperty_(key)) {\n    throw new Error(goog.DEBUG ? '\"' + key + '\" is not a valid dataset property name.' : \"\");\n  } else {\n    element.setAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key), value);\n  }\n};\ngoog.dom.dataset.get = function(element, key) {\n  if (!goog.dom.dataset.isValidProperty_(key)) {\n    return null;\n  }\n  var htmlElement = element;\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    if (goog.labs.userAgent.browser.isAndroidBrowser() && !(key in htmlElement.dataset)) {\n      return null;\n    }\n    var value = htmlElement.dataset[key];\n    return value === undefined ? null : value;\n  } else {\n    return htmlElement.getAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\n  }\n};\ngoog.dom.dataset.remove = function(element, key) {\n  if (!goog.dom.dataset.isValidProperty_(key)) {\n    return;\n  }\n  var htmlElement = element;\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    if (goog.dom.dataset.has(element, key)) {\n      delete htmlElement.dataset[key];\n    }\n  } else {\n    element.removeAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\n  }\n};\ngoog.dom.dataset.has = function(element, key) {\n  if (!goog.dom.dataset.isValidProperty_(key)) {\n    return false;\n  }\n  var htmlElement = element;\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    return key in htmlElement.dataset;\n  } else if (htmlElement.hasAttribute) {\n    return htmlElement.hasAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\n  } else {\n    return !!htmlElement.getAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\n  }\n};\ngoog.dom.dataset.getAll = function(element) {\n  var htmlElement = element;\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    return htmlElement.dataset;\n  } else {\n    var dataset = {};\n    var attributes = element.attributes;\n    for (var i = 0; i < attributes.length; ++i) {\n      var attribute = attributes[i];\n      if (goog.string.startsWith(attribute.name, goog.dom.dataset.PREFIX_)) {\n        var key = goog.string.toCamelCase(attribute.name.substr(5));\n        dataset[key] = attribute.value;\n      }\n    }\n    return dataset;\n  }\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utilities for adding, removing and setting values in\n * an Element's dataset.\n * See {@link http://www.w3.org/TR/html5/Overview.html#dom-dataset}.\n */\n\ngoog.provide('goog.dom.dataset');\n\ngoog.require('goog.labs.userAgent.browser');\ngoog.require('goog.string');\ngoog.require('goog.userAgent.product');\n\n\n/**\n * Whether using the dataset property is allowed.\n *\n * In IE (up to and including IE 11), setting element.dataset in JS does not\n * propagate values to CSS, breaking expressions such as\n * `content: attr(data-content)` that would otherwise work.\n * See {@link https://github.com/google/closure-library/issues/396}.\n *\n * In Safari >= 9, reading from element.dataset sometimes returns\n * undefined, even though the corresponding data- attribute has a value.\n * See {@link https://bugs.webkit.org/show_bug.cgi?id=161454}.\n * @const\n * @private\n */\ngoog.dom.dataset.ALLOWED_ =\n    !goog.userAgent.product.IE && !goog.labs.userAgent.browser.isSafari();\n\n\n/**\n * The DOM attribute name prefix that must be present for it to be considered\n * for a dataset.\n * @type {string}\n * @const\n * @private\n */\ngoog.dom.dataset.PREFIX_ = 'data-';\n\n\n/**\n * Returns whether a string is a valid dataset property name.\n * @param {string} key Property name for the custom data attribute.\n * @return {boolean} Whether the string is a valid dataset property name.\n * @private\n */\ngoog.dom.dataset.isValidProperty_ = function(key) {\n  'use strict';\n  return !/-[a-z]/.test(key);\n};\n\n\n/**\n * Sets a custom data attribute on an element. The key should be\n * in camelCase format (e.g \"keyName\" for the \"data-key-name\" attribute).\n * @param {Element} element DOM node to set the custom data attribute on.\n * @param {string} key Key for the custom data attribute.\n * @param {string} value Value for the custom data attribute.\n */\ngoog.dom.dataset.set = function(element, key, value) {\n  'use strict';\n  var htmlElement = /** @type {HTMLElement} */ (element);\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    htmlElement.dataset[key] = value;\n  } else if (!goog.dom.dataset.isValidProperty_(key)) {\n    throw new Error(\n        goog.DEBUG ? '\"' + key + '\" is not a valid dataset property name.' :\n                     '');\n  } else {\n    element.setAttribute(\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key), value);\n  }\n};\n\n\n/**\n * Gets a custom data attribute from an element. The key should be\n * in camelCase format (e.g \"keyName\" for the \"data-key-name\" attribute).\n * @param {Element} element DOM node to get the custom data attribute from.\n * @param {string} key Key for the custom data attribute.\n * @return {?string} The attribute value, if it exists.\n */\ngoog.dom.dataset.get = function(element, key) {\n  'use strict';\n  // Edge, unlike other browsers, will do camel-case conversion when retrieving\n  // \"dash-case\" properties.\n  if (!goog.dom.dataset.isValidProperty_(key)) {\n    return null;\n  }\n  var htmlElement = /** @type {HTMLElement} */ (element);\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    // Android browser (non-chrome) returns the empty string for\n    // element.dataset['doesNotExist'].\n    if (goog.labs.userAgent.browser.isAndroidBrowser() &&\n        !(key in htmlElement.dataset)) {\n      return null;\n    }\n    var value = htmlElement.dataset[key];\n    return value === undefined ? null : value;\n  } else {\n    return htmlElement.getAttribute(\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\n  }\n};\n\n\n/**\n * Removes a custom data attribute from an element. The key should be\n  * in camelCase format (e.g \"keyName\" for the \"data-key-name\" attribute).\n * @param {Element} element DOM node to get the custom data attribute from.\n * @param {string} key Key for the custom data attribute.\n */\ngoog.dom.dataset.remove = function(element, key) {\n  'use strict';\n  // Edge, unlike other browsers, will do camel-case conversion when removing\n  // \"dash-case\" properties.\n  if (!goog.dom.dataset.isValidProperty_(key)) {\n    return;\n  }\n  var htmlElement = /** @type {HTMLElement} */ (element);\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    // In strict mode Safari will trigger an error when trying to delete a\n    // property which does not exist.\n    if (goog.dom.dataset.has(element, key)) {\n      delete htmlElement.dataset[key];\n    }\n  } else {\n    element.removeAttribute(\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\n  }\n};\n\n\n/**\n * Checks whether custom data attribute exists on an element. The key should be\n * in camelCase format (e.g \"keyName\" for the \"data-key-name\" attribute).\n *\n * @param {Element} element DOM node to get the custom data attribute from.\n * @param {string} key Key for the custom data attribute.\n * @return {boolean} Whether the attribute exists.\n */\ngoog.dom.dataset.has = function(element, key) {\n  'use strict';\n  // Edge, unlike other browsers, will do camel-case conversion when retrieving\n  // \"dash-case\" properties.\n  if (!goog.dom.dataset.isValidProperty_(key)) {\n    return false;\n  }\n  var htmlElement = /** @type {HTMLElement} */ (element);\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    return key in htmlElement.dataset;\n  } else if (htmlElement.hasAttribute) {\n    return htmlElement.hasAttribute(\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\n  } else {\n    return !!(htmlElement.getAttribute(\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key)));\n  }\n};\n\n\n/**\n * Gets all custom data attributes as a string map.  The attribute names will be\n * camel cased (e.g., data-foo-bar -> dataset['fooBar']).  This operation is not\n * safe for attributes having camel-cased names clashing with already existing\n * properties (e.g., data-to-string -> dataset['toString']).\n * @param {!Element} element DOM node to get the data attributes from.\n * @return {!Object} The string map containing data attributes and their\n *     respective values.\n */\ngoog.dom.dataset.getAll = function(element) {\n  'use strict';\n  var htmlElement = /** @type {HTMLElement} */ (element);\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\n    return htmlElement.dataset;\n  } else {\n    var dataset = {};\n    var attributes = element.attributes;\n    for (var i = 0; i < attributes.length; ++i) {\n      var attribute = attributes[i];\n      if (goog.string.startsWith(attribute.name, goog.dom.dataset.PREFIX_)) {\n        // We use substr(5), since it's faster than replacing 'data-' with ''.\n        var key = goog.string.toCamelCase(attribute.name.substr(5));\n        dataset[key] = attribute.value;\n      }\n    }\n    return dataset;\n  }\n};\n","~:compiled-at",1647779282113,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.dataset.js\",\n\"lineCount\":78,\n\"mappings\":\"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\",\n\"sources\":[\"goog/dom/dataset.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Utilities for adding, removing and setting values in\\n * an Element's dataset.\\n * See {@link http://www.w3.org/TR/html5/Overview.html#dom-dataset}.\\n */\\n\\ngoog.provide('goog.dom.dataset');\\n\\ngoog.require('goog.labs.userAgent.browser');\\ngoog.require('goog.string');\\ngoog.require('goog.userAgent.product');\\n\\n\\n/**\\n * Whether using the dataset property is allowed.\\n *\\n * In IE (up to and including IE 11), setting element.dataset in JS does not\\n * propagate values to CSS, breaking expressions such as\\n * `content: attr(data-content)` that would otherwise work.\\n * See {@link https://github.com/google/closure-library/issues/396}.\\n *\\n * In Safari >= 9, reading from element.dataset sometimes returns\\n * undefined, even though the corresponding data- attribute has a value.\\n * See {@link https://bugs.webkit.org/show_bug.cgi?id=161454}.\\n * @const\\n * @private\\n */\\ngoog.dom.dataset.ALLOWED_ =\\n    !goog.userAgent.product.IE && !goog.labs.userAgent.browser.isSafari();\\n\\n\\n/**\\n * The DOM attribute name prefix that must be present for it to be considered\\n * for a dataset.\\n * @type {string}\\n * @const\\n * @private\\n */\\ngoog.dom.dataset.PREFIX_ = 'data-';\\n\\n\\n/**\\n * Returns whether a string is a valid dataset property name.\\n * @param {string} key Property name for the custom data attribute.\\n * @return {boolean} Whether the string is a valid dataset property name.\\n * @private\\n */\\ngoog.dom.dataset.isValidProperty_ = function(key) {\\n  'use strict';\\n  return !/-[a-z]/.test(key);\\n};\\n\\n\\n/**\\n * Sets a custom data attribute on an element. The key should be\\n * in camelCase format (e.g \\\"keyName\\\" for the \\\"data-key-name\\\" attribute).\\n * @param {Element} element DOM node to set the custom data attribute on.\\n * @param {string} key Key for the custom data attribute.\\n * @param {string} value Value for the custom data attribute.\\n */\\ngoog.dom.dataset.set = function(element, key, value) {\\n  'use strict';\\n  var htmlElement = /** @type {HTMLElement} */ (element);\\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\\n    htmlElement.dataset[key] = value;\\n  } else if (!goog.dom.dataset.isValidProperty_(key)) {\\n    throw new Error(\\n        goog.DEBUG ? '\\\"' + key + '\\\" is not a valid dataset property name.' :\\n                     '');\\n  } else {\\n    element.setAttribute(\\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key), value);\\n  }\\n};\\n\\n\\n/**\\n * Gets a custom data attribute from an element. The key should be\\n * in camelCase format (e.g \\\"keyName\\\" for the \\\"data-key-name\\\" attribute).\\n * @param {Element} element DOM node to get the custom data attribute from.\\n * @param {string} key Key for the custom data attribute.\\n * @return {?string} The attribute value, if it exists.\\n */\\ngoog.dom.dataset.get = function(element, key) {\\n  'use strict';\\n  // Edge, unlike other browsers, will do camel-case conversion when retrieving\\n  // \\\"dash-case\\\" properties.\\n  if (!goog.dom.dataset.isValidProperty_(key)) {\\n    return null;\\n  }\\n  var htmlElement = /** @type {HTMLElement} */ (element);\\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\\n    // Android browser (non-chrome) returns the empty string for\\n    // element.dataset['doesNotExist'].\\n    if (goog.labs.userAgent.browser.isAndroidBrowser() &&\\n        !(key in htmlElement.dataset)) {\\n      return null;\\n    }\\n    var value = htmlElement.dataset[key];\\n    return value === undefined ? null : value;\\n  } else {\\n    return htmlElement.getAttribute(\\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\\n  }\\n};\\n\\n\\n/**\\n * Removes a custom data attribute from an element. The key should be\\n  * in camelCase format (e.g \\\"keyName\\\" for the \\\"data-key-name\\\" attribute).\\n * @param {Element} element DOM node to get the custom data attribute from.\\n * @param {string} key Key for the custom data attribute.\\n */\\ngoog.dom.dataset.remove = function(element, key) {\\n  'use strict';\\n  // Edge, unlike other browsers, will do camel-case conversion when removing\\n  // \\\"dash-case\\\" properties.\\n  if (!goog.dom.dataset.isValidProperty_(key)) {\\n    return;\\n  }\\n  var htmlElement = /** @type {HTMLElement} */ (element);\\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\\n    // In strict mode Safari will trigger an error when trying to delete a\\n    // property which does not exist.\\n    if (goog.dom.dataset.has(element, key)) {\\n      delete htmlElement.dataset[key];\\n    }\\n  } else {\\n    element.removeAttribute(\\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\\n  }\\n};\\n\\n\\n/**\\n * Checks whether custom data attribute exists on an element. The key should be\\n * in camelCase format (e.g \\\"keyName\\\" for the \\\"data-key-name\\\" attribute).\\n *\\n * @param {Element} element DOM node to get the custom data attribute from.\\n * @param {string} key Key for the custom data attribute.\\n * @return {boolean} Whether the attribute exists.\\n */\\ngoog.dom.dataset.has = function(element, key) {\\n  'use strict';\\n  // Edge, unlike other browsers, will do camel-case conversion when retrieving\\n  // \\\"dash-case\\\" properties.\\n  if (!goog.dom.dataset.isValidProperty_(key)) {\\n    return false;\\n  }\\n  var htmlElement = /** @type {HTMLElement} */ (element);\\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\\n    return key in htmlElement.dataset;\\n  } else if (htmlElement.hasAttribute) {\\n    return htmlElement.hasAttribute(\\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));\\n  } else {\\n    return !!(htmlElement.getAttribute(\\n        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key)));\\n  }\\n};\\n\\n\\n/**\\n * Gets all custom data attributes as a string map.  The attribute names will be\\n * camel cased (e.g., data-foo-bar -> dataset['fooBar']).  This operation is not\\n * safe for attributes having camel-cased names clashing with already existing\\n * properties (e.g., data-to-string -> dataset['toString']).\\n * @param {!Element} element DOM node to get the data attributes from.\\n * @return {!Object} The string map containing data attributes and their\\n *     respective values.\\n */\\ngoog.dom.dataset.getAll = function(element) {\\n  'use strict';\\n  var htmlElement = /** @type {HTMLElement} */ (element);\\n  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {\\n    return htmlElement.dataset;\\n  } else {\\n    var dataset = {};\\n    var attributes = element.attributes;\\n    for (var i = 0; i < attributes.length; ++i) {\\n      var attribute = attributes[i];\\n      if (goog.string.startsWith(attribute.name, goog.dom.dataset.PREFIX_)) {\\n        // We use substr(5), since it's faster than replacing 'data-' with ''.\\n        var key = goog.string.toCamelCase(attribute.name.substr(5));\\n        dataset[key] = attribute.value;\\n      }\\n    }\\n    return dataset;\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"dom\",\"dataset\",\"ALLOWED_\",\"userAgent\",\"product\",\"IE\",\"labs\",\"browser\",\"isSafari\",\"PREFIX_\",\"isValidProperty_\",\"goog.dom.dataset.isValidProperty_\",\"key\",\"test\",\"set\",\"goog.dom.dataset.set\",\"element\",\"value\",\"htmlElement\",\"Error\",\"DEBUG\",\"setAttribute\",\"string\",\"toSelectorCase\",\"get\",\"goog.dom.dataset.get\",\"isAndroidBrowser\",\"undefined\",\"getAttribute\",\"remove\",\"goog.dom.dataset.remove\",\"has\",\"removeAttribute\",\"goog.dom.dataset.has\",\"hasAttribute\",\"getAll\",\"goog.dom.dataset.getAll\",\"attributes\",\"i\",\"length\",\"attribute\",\"startsWith\",\"name\",\"toCamelCase\",\"substr\"]\n}\n"]