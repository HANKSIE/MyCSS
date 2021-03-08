const loadingDoms = document.querySelectorAll(".text-loading");

loadingDoms.forEach((loading) => {
  console.log(loading);
  const textLength = loading.childElementCount;
  const chs = [];
  const duration = 1000;
  const peroid = 200;
  const removeAnimate = duration - peroid;

  for (let i = 0; i < textLength; i++) {
    const dom = loading.querySelector(`span:nth-child(${i + 1})`);
    dom.style.animationDuration = `${duration}ms`;
    chs.push(dom);
  }

  let now = 0;
  let prev = 0;

  setInterval(() => {
    removeAnimateName(chs[prev]);

    chs[now].style.animationName = "jump";
    prev = now;
    now = now + 1 === textLength ? 0 : now + 1;
  }, peroid);

  function removeAnimateName(dom) {
    setTimeout(() => {
      dom.style.animationName = "";
    }, removeAnimate);
  }
});
