// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector(".fruits__list"); // список карточек
const shuffleButton = document.querySelector(".shuffle__btn"); // кнопка перемешивания
const filterButton = document.querySelector(".filter__btn"); // кнопка фильтрации
const sortKindLabel = document.querySelector(".sort__kind"); // поле с названием сортировки
const sortTimeLabel = document.querySelector(".sort__time"); // поле с временем сортировки
const sortChangeButton = document.querySelector(".sort__change__btn"); // кнопка смены сортировки
const sortActionButton = document.querySelector(".sort__action__btn"); // кнопка сортировки
const kindInput = document.querySelector(".kind__input"); // поле с названием вида
const colorInput = document.querySelector(".color__input"); // поле с названием цвета
const weightInput = document.querySelector(".weight__input"); // поле с весом
const addActionButton = document.querySelector(".add__action__btn"); // кнопка добавления
const maxWeightInput = document.querySelector(".maxweight__input"); //поле ввода максимального веса для фильтра
const minWeightInput = document.querySelector(".minweight__input"); //поле ввода минимального веса для фильтра

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

//Список цветов
let colorsJSON = `[
  {"colorName": "черный", "colorCode": "#000"},
  {"colorName": "фиолетовый", "colorCode": "#8b00ff"},
  {"colorName": "зеленый", "colorCode": "#84cd1b"},
  {"colorName": "розово-красный", "colorCode": "#dc143c"},
  {"colorName": "желтый", "colorCode": "#ffd800"},
  {"colorName": "светло-коричневый", "colorCode": "#cd853f"}
]`;

// преобразование JSON в объект JavaScript
let allFruits = JSON.parse(fruitsJSON);
let fruits = allFruits;
let colors = JSON.parse(colorsJSON);

// Вычисление минимального и макимального веса имеющихся фруктов

function minMaxFruitWeight() {
  let minW = allFruits[0].weight;
  let maxW = allFruits[0].weight;

  for (let i = 0; i < allFruits.length; i++) {
    allFruits[i].weight < minW ? (minW = allFruits[i].weight) : minW;
    allFruits[i].weight > maxW ? (maxW = allFruits[i].weight) : maxW;
  }

  return [minW, maxW];
}

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
  fruitsList.innerHTML = "";
  colorInput.innerHTML = "";
  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement("option");
    option.innerText = colors[i].colorName;
    option.setAttribute("value", colors[i].colorName);
    colorInput.appendChild(option);
  }

  for (let i = 0; i < fruits.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild
    const li = document.createElement("li");
    fruitsList.appendChild(li);
    li.classList.add(`fruit__item`);
    const divFruitInfo = li.appendChild(document.createElement("div"));
    divFruitInfo.classList.add("fruit__info");
    const keys = Object.keys(fruits[i]);
    const values = Object.values(fruits[i]);
    for (let j = 0; j < keys.length + 1; j++) {
      let value =
        j === 0 ? `index: ${i + 1}` : `${keys[j - 1]}: ${values[j - 1]}`;
      let div = divFruitInfo.appendChild(document.createElement("div"));
      div.innerText = value;
      for (k = 0; k < colors.length; k++) {
        if (values[j - 1] == colors[k].colorName) {
          li.style.background = colors[k].colorCode;
        }
      }
    }
  }
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let newFruits = [];
  let result = [];
  fruits.forEach((element) => {
    newFruits.unshift(element);
  });
  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (newFruits.length > 0) {
    // TODO: допишите функцию перемешивания массива
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    let randomFruit = getRandomInt(0, newFruits.length - 1);
    // вырезаем его из fruits и вставляем в result.
    // (массив fruits будет уменьшатся, а result заполняться)
    result.unshift(newFruits[randomFruit]);
    newFruits.splice(randomFruit, 1);
  }
  JSON.stringify(fruits) === JSON.stringify(result)
    ? alert("Порядок фруктов не изменился\n(Фрукты не перемешались)")
    : (fruits = result);
};

shuffleButton.addEventListener("click", () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits = allFruits;
  [minW, maxW] = minMaxFruitWeight();
  !minWeightInput.value ? (minWeightInput.value = minW) : minWeightInput.value;
  !maxWeightInput.value ? (maxWeightInput.value = maxW) : maxWeightInput.value;
  maxWeight = maxWeightInput.value;
  minWeight = minWeightInput.value;
  fruits = fruits.filter((item) => {
    // TODO: допишите функцию
    return minWeight && maxWeight
      ? minWeight <= item.weight && item.weight <= maxWeight
      : true;
  });
};

filterButton.addEventListener("click", () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = "bubbleSort"; // инициализация состояния вида сортировки
let sortTime = "-"; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
  const priority = [];
  colors.forEach((e) => priority.push(e.colorName));
  const priority_1 = priority.indexOf(a.color);
  const priority_2 = priority.indexOf(b.color);
  return priority_1 > priority_2;
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (comparation(arr[j], arr[j + 1])) {
          let temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
    alert("Алгоритм быстрой сортировки немного не получился :(")
  //   if (arr.length <= 1) {
  //     return arr;
  //   }
  //   const pivot = arr[arr.length - 1];
  //   const leftArr = [];
  //   const rightArr = [];
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (comparation(pivot, arr[i])) {
  //       leftArr.push(arr[i]);
  //     } else {
  //       rightArr.push(arr[i]);
  //     }
  //   };

  //  console.log([
  //     ...this.quickSort(leftArr, comparation),
  //     pivot,
  //     ...this.quickSort(rightArr, comparation),
  //   ]);
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener("click", () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
  sortKind = sortKind === "bubbleSort" ? "quickSort" : "bubbleSort";
  sortKindLabel.textContent = sortKind;
});

sortActionButton.addEventListener("click", () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
  sortTimeLabel.textContent = sortTime;
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener("click", () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  kindInput.value && weightInput.value
    ? allFruits.push({
        kind: kindInput.value,
        color: colorInput.value,
        weight: parseInt(weightInput.value),
      })
    : alert("Заполни, пожалуйста, все поля.");
  kindInput.value = "";
  weightInput.value = "";
  filterFruits();
  display();
});
