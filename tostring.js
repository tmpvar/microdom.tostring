if (typeof require !== 'undefined') {
  var microdom = require('microdom');
}

microdom.plugin({
  toString : function(level) {
    if (this.name === 'text') {
      return this.value;
    }

    var ret = '';
    level = level || 0;
    if (this.name) {
      
      ret += '<' + this.name;

      Object.keys(this.attributes).forEach(function(attr) {
        ret += ' ' + attr + '="' + this.attr(attr) + '"';
      }.bind(this));
    }

    if (this.length()) {
      if (this.name) {
        ret += ">";
      }

      for (var i = 0; i<this.length(); i++) {
        ret += this.child(i).toString(level + 1);
      }

      if (this.name) {
        ret += '</' + this.name + '>\n';
      }
    } else {
      ret += " />";
    }

    return ret;
  }
});
