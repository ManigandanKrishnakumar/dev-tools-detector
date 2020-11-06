const div = document.createElement('div');
let loop;
let onSuccess;
Object.defineProperty(div, 'id', {get: () => {
  onSuccess();
}});


const startDevToolsListener = (onDevToolsOpen) => {
  onSuccess = onDevToolsOpen;
  loop = setInterval(() => {
    console.log(div);
    console.clear();
  });
}

const stopDevToolsListener = () => {
  clearInterval(loop);
};


const isDevToolsOpened = () => {
  let result = false;
  const divIsOpened = document.createElement('div');
  Object.defineProperty(divIsOpened, 'id', {get: () => {
    result = true;
  }});
  console.log(divIsOpened);

  return result;
}


module.exports = {
  startDevToolsListener,
  stopDevToolsListener,
  isDevToolsOpened,
}
