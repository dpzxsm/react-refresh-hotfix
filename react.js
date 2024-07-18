const React= require("../react/cjs/react.development")

const HOT_EVENT = {
  listeners: [],
};

HOT_EVENT.on = event => {
  HOT_EVENT.listeners.push(event);
};

HOT_EVENT.off = event => {
  HOT_EVENT.listeners = HOT_EVENT.listeners.filter(item => item !== event);
};

HOT_EVENT.emit = () => {
  HOT_EVENT.listeners.forEach(item => item());
};

window.HOT_EVENT = HOT_EVENT;

function useEffect(effect, deps) {
  const disableRef = React.useRef(false);

  React.useEffect(() => {
    const event = () => {
      disableRef.current = true;
    };
    HOT_EVENT.on(event);
    return () => {
      HOT_EVENT.off(event);
    };
  }, []);

  React.useEffect(() => {
    if (disableRef.current) {
      console.log("热更新后的第一次Effect，需要禁用");
      disableRef.current = false;
      return;
    }
    return effect();
  }, deps);
}

module.exports = {
  ...React,
  useEffect
}

module.exports.default = React
