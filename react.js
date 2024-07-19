const React= require("../react/cjs/react.development")

function useEffect(effect, deps = []) {
  const effectRef = React.useRef(effect);
  const disableRef = React.useRef(false);
  const mountedRef = React.useRef(false);

  effectRef.current = effect;
  React.useEffect(() => {
    if(mountedRef.current){
      disableRef.current = true;
    }
    mountedRef.current = true;
  }, []);

  React.useEffect(() => {
    if (disableRef.current) {
      // console.log("热更新后的第一次Effect，需要禁用", deps);
      disableRef.current = false;
      return;
    }
    return effectRef.current();
  }, deps);
}

module.exports = {
  ...React,
  useEffect
}

module.exports.default = React
