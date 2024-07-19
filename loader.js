module.exports = function (source) {
  const regex = /export\s+default\s+((function\(.*?\)|\(.*?\)\s+=>|\w+\s+=>)\s+\{[\s\S]*})/;
  const match = source.match(regex);
  if (match) {
    const functionName = `Anonymous$default`
    source = source.replace(match[0], `const ${functionName} = ${match[1]}\nexport default ${functionName}`);
  }
  return `${source}\nif(module.hot){module.hot.dispose(function(){ window.HOT_EVENT.emit()})}\n`;
};
