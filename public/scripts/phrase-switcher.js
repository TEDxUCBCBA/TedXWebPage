
let animationEnd = (function(el) {
  let animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (let t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

const refreshRate = 3000;

const nextPhrase = (data) => {
  let current = data.shift();
  data.push(current);
  return current;
};

const switchPhrase = (newPhrase) => {
  title.addClass('animated ' + 'flipOutX').one(animationEnd, () => {
    title.removeClass('animated ' + 'flipOutX');
    title.text(newPhrase);
    title.addClass('animated ' + 'flipInX').one(animationEnd, () => {
      title.removeClass('animated ' + 'flipInX');
    });
  });
};

let title = $('#main-subtitle');
let phrases = ["Ideas transformadoras y resistentes",
               "Ideas altamente contagiosas",
               "Vuélcalo!"];

window.setInterval(() => {
  switchPhrase(nextPhrase(phrases));
}, refreshRate);









