goog.provide("goog.dom.dataset");
goog.require("goog.labs.userAgent.browser");
goog.require("goog.string");
goog.require("goog.userAgent.product");
goog.dom.dataset.ALLOWED_ = !goog.userAgent.product.IE && !goog.labs.userAgent.browser.isSafari();
goog.dom.dataset.PREFIX_ = "data-";
goog.dom.dataset.isValidProperty_ = function(key) {
  return !/-[a-z]/.test(key);
};
goog.dom.dataset.set = function(element, key, value) {
  var htmlElement = element;
  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {
    htmlElement.dataset[key] = value;
  } else if (!goog.dom.dataset.isValidProperty_(key)) {
    throw new Error(goog.DEBUG ? '"' + key + '" is not a valid dataset property name.' : "");
  } else {
    element.setAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key), value);
  }
};
goog.dom.dataset.get = function(element, key) {
  if (!goog.dom.dataset.isValidProperty_(key)) {
    return null;
  }
  var htmlElement = element;
  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {
    if (goog.labs.userAgent.browser.isAndroidBrowser() && !(key in htmlElement.dataset)) {
      return null;
    }
    var value = htmlElement.dataset[key];
    return value === undefined ? null : value;
  } else {
    return htmlElement.getAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));
  }
};
goog.dom.dataset.remove = function(element, key) {
  if (!goog.dom.dataset.isValidProperty_(key)) {
    return;
  }
  var htmlElement = element;
  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {
    if (goog.dom.dataset.has(element, key)) {
      delete htmlElement.dataset[key];
    }
  } else {
    element.removeAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));
  }
};
goog.dom.dataset.has = function(element, key) {
  if (!goog.dom.dataset.isValidProperty_(key)) {
    return false;
  }
  var htmlElement = element;
  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {
    return key in htmlElement.dataset;
  } else if (htmlElement.hasAttribute) {
    return htmlElement.hasAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));
  } else {
    return !!htmlElement.getAttribute(goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));
  }
};
goog.dom.dataset.getAll = function(element) {
  var htmlElement = element;
  if (goog.dom.dataset.ALLOWED_ && htmlElement.dataset) {
    return htmlElement.dataset;
  } else {
    var dataset = {};
    var attributes = element.attributes;
    for (var i = 0; i < attributes.length; ++i) {
      var attribute = attributes[i];
      if (goog.string.startsWith(attribute.name, goog.dom.dataset.PREFIX_)) {
        var key = goog.string.toCamelCase(attribute.name.substr(5));
        dataset[key] = attribute.value;
      }
    }
    return dataset;
  }
};

//# sourceMappingURL=goog.dom.dataset.js.map
