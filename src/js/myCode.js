
const bodyColors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  bodyRef: document.querySelector('body'),
  buttonStartRef: document.querySelector('button[data-action = start] '),
  buttonStopRef: document.querySelector('button[data-action = stop]'),
};

refs.buttonStartRef.addEventListener('click', onButtonStart);
refs.buttonStopRef.addEventListener('click', onButtonStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let colorPlant = null;
let colorId = 0;

function onButtonStart() {
  refs.buttonStartRef.disabled = true;

  colorPlant = setInterval(() => {
    colorId = randomIntegerFromInterval(0, bodyColors.length - 1);

    // console.log(colorId);
    refs.bodyRef.style.backgroundColor = bodyColors[colorId];
  }, 1000);
}

function onButtonStop() {
  refs.buttonStartRef.disabled = false;
  clearInterval(colorPlant);
}


// const refs = {
//     startBtn: document.querySelector('button[data-action="start"'),
//     stopBtn: document.querySelector('button[data-action="stop"'),
//   },
//   colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'],
//   randomIntegerFromInterval = max => {
//     return Math.floor(Math.random() * (max + 1));
//   },
//   setRandomColor = () => {
//     const _color = colors[randomIntegerFromInterval(colors.length - 1)];
//     console.log(_color);
//     document.body.style.backgroundColor = _color;
//   };

// let interval = undefined;

// refs.startBtn.addEventListener(
//   'click',
//   e =>
//     (interval = interval
//       ? interval
//       : setInterval(() => setRandomColor(), 1000)),
// );

// refs.stopBtn.addEventListener('click', e => clearInterval(interval));