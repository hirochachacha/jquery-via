//     Almost code come from Backbone.js, LICENSE is HERE.
//
//     Backbone.js 0.9.9

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

$.fn.extend({
  via: function(events){
    if ($.isFunction(events)) events = events.call(this);

    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    for (var key in events) {
      var method = events[key];
      if (!$.isFunction(method)) method = this[events[key]];
      if (!method) throw new Error('Method "' + events[key] + '" does not exist');
      var match = key.match(delegateEventSplitter);
      var eventName = match[1], selector = match[2];
      method = $.proxy(method, this);
      if (selector === '') {
        this.on(eventName, method);
      } else {
        this.on(eventName, selector, method);
      }
    }
  }
});
