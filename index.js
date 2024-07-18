module.exports = function (source) {
  return `${source}\nmodule.hot.dispose(function(){ window.HOT_EVENT.emit()})\n`;
};
