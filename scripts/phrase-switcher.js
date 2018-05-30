// Phrase switcher

$.fn.extend({
  animate: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

const refreshRate = 3000;

const nextPhrase = (data) => {
  let current = data.shift();
  data.push(current);
  return current;
};

const switchPhrase = (newPhrase) => {
  title.animate('fadeOut', () => {
    title.text(newPhrase);
    title.animate('fadeIn');
  });
};

let title = $('#phrase');
let phrases = ["Sitting has become the smoking of our generation.",
               "There's zero correlation between being the best talker and having the best ideas.",
               "Ideas Worth Spreading"];

window.setInterval(() => {
  switchPhrase(nextPhrase(phrases));
}, refreshRate);









