var tostring = function() {
  
}


if (typeof module !== "undefined" && typeof module.exports == "object") {
  module.exports = tostring;
}

if (typeof window !== "undefined") {
  window.tostring = window.tostring || tostring;
}

module.exports = function() {

}
