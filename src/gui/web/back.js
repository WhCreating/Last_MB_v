const inps = document.getElementById("queryInput");
const inps2 = document.getElementById("queryInput2");
const savButik = document.getElementById("saveButton");
const voice = document.getElementById("voiceButton");
const promt = document.getElementById("questionText");
const sendBut = document.getElementById("sendButton");
const respTxt = document.getElementById("responseText");
const srch = document.getElementById("search");
var neiro = "qwen-2-5-max";
var geners = "text-generation";

savButik.addEventListener("click", () => {
  eel.jsConverter("api-key-gpt", inps2.value)();
});

voice.addEventListener("click", () => {
  promt.innerText = "Слушаю. . .";
  inps.disabled = true;

  eel
    .list_micro()()
    .then((txt) => {
      console.log(txt);
      promt.innerText = txt;
    })
    .then(() => {
      respTxt.innerText = "Думает. . .";

      if (geners === "text-generation") {
        if (srch.checked) {
          console.log("True");
          eel
            .promtik(neiro, promt.innerText, true)()
            .then((otv) => {
              respTxt.innerText = otv;
            })
            .then(() => {
              inps.disabled = false;
            });
        } else {
          eel
            .promtik(neiro, promt.innerText, false)()
            .then((otv) => {
              respTxt.innerText = otv;
            })
            .then(() => {
              inps.disabled = false;
            });
        }
      } else {
        eel
          .generImage(neiro, promt.innerText)()
          .then((otv) => {
            respTxt.innerHTML = `<img src="${otv}" width="300px">`;
          })
          .then(() => {
            inps.disabled = false;
          });
      }
    });
});

sendBut.addEventListener("click", () => {
  if (inps.value !== "") {
    promt.innerText = inps.value;
    inps.value = "";
    respTxt.innerText = "Думает. . .";
    inps.disabled = true;

    if (geners === "text-generation") {
      if (srch.checked) {
        console.log("True");
        eel
          .promtik(neiro, promt.innerText, true)()
          .then((otv) => {
            respTxt.innerText = otv;
          })
          .then(() => {
            inps.disabled = false;
          });
      } else {
        eel
          .promtik(neiro, promt.innerText, false)()
          .then((otv) => {
            respTxt.innerText = otv;
          })
          .then(() => {
            inps.disabled = false;
          });
      }
    } else {
      eel
        .generImage(neiro, promt.innerText)()
        .then((otv) => {
          respTxt.innerHTML = `<img src="${otv}" width="300px">`;
        })
        .then(() => {
          inps.disabled = false;
        });
    }
  }
});

function nn() {
  const neir1 = document.getElementById("neiro");
  const textil = document.getElementById("textil");
  neiro = neir1.value;
  console.log(neiro);
  if (neir1.value == "qwen-2-5-max") {
    textil.innerText =
      "Самая мощная языковая модель в серии Qwen. Она подойдет, если нужно использовать сложные рассуждения, исследования, создавать инструкции, решать творческие задачи. Но размер контекста, который учитывает ИИ при ответах, меньше.";
  } else if (neir1.value == "qwen-2.5-1m") {
    textil.innerText =
      "Феноменальная скорость: Улучшенная модель Qwen работает быстро как молния — в 3-7 раз быстрее предыдущей версии.";
  } else if (neir1.value == "gpt-4") {
    textil.innerText =
      "GPT-4 умеет писать качественные тексты даже на русском, лучше предыдущих поколений придерживается заданной роли, а главное — может работать с картинками и данными в других форматах.";
  } else if (neir1.value == "gpt-4o-mini") {
    textil.innerText =
      "GPT-4o-mini — это компактная и оптимизированная версия GPT-4, у неё более высокая скорость, чем у других моделей gpt, а также лучшее качество ответов и дешевле эксплуатация.";
  } else if (neir1.value == "gpt-3.5-turbo") {
    textil.innerText =
      "GPT-3.5-turbo — одна из самых популярных моделей OpenAI, оптимизированная для чат-приложений и коммерческого использования. Высокая скорость ответа, а также экономичнее, чем gpt-4 в 10-20 раз.";
  } else if (neir1.value == "o1") {
    textil.innerText =
      "o1 - самая уманя модель OpenAI, она сохраняет скорость gpt-3.5-turbo, а также по качеству чуть лучше gpt-4. Иностранные языки(кроме английского и включая русский) поддерживает намного лушче, чем gpt-4, а ещё дешевле в api в 2 раза, чем у gpt-4.";
  } else if (neir1.value == "deepseek-r1") {
    textil.innerText =
      "DeepSeek-r1 - высокая производительность, сравнимая с LLama3, поддерживает работу с большими объемами текста и выдаёт наиболее точные, и естественные ответы на других языках(кроме английского и китайского).";
  } else if (neir1.value == "deepseek-v3") {
    textil.innerText =
      "DeepSeek-v3 - высокая производительная модель, более оптимизирована под написание кода на Python, C++, Java, SQL.";
  } else if (neir1.value == "gigachat") {
    textil.innerText =
      "GigaChat - отечественная модель, которая специлизируется на русском языке, умеет генерировать изображения, анализировать аудио и видио, а также работать с кодом.";
  } else if (neir1.value == "claude-3.7-sonnet") {
    textil.innerText =
      "Claude-3.7-sonnet - модель, которая умеет переключаться между быстрыми и расширенными ответами, а также лидирует в кодинге. Модель более безопасна, чем другие, она лучше отличает опасные запросы от обычных.";
  } else if (neir1.value == "claude-3-opus") {
    textil.innerText =
      "Claude-3-opus - у неё высокий уровень интелекта, и по прежнему лидирует в кодинге.";
  } else if (neir1.value == "mixtral-8x22b") {
    textil.innerText =
      "Mixtral-8x22b - высокопроизводительная модель, которая умеет работать с большими объёмами, а ещё хрошо генерирует код и умеет решать сложные задачи, также экономична в использование ресурсов";
  } else if (neir1.value == "mixtral-small-24b") {
    textil.innerText =
      "Mixtral-small-24b - высокопроизводительная и эффективная модель, она оптимизирована под локальное развёртывание, а также многофункциональная и гибкая, и ещё экономически эфективна.";
  } else if (neir1.value == "dall-e-3") {
    textil.innerText =
      "Dall-e-3 - она умеет генерировать изображения, а также хорошо делает схемы.";
  } else if (neir1.value == "sdxl-turbo") {
    textil.innerText =
      "Sdxl-turbo - модель для генерации изображения, которая не только сохраняет качество изображения, но и значительно сокращает вычислительные усилия, необходимые для генерации изображений.";
  } else if (neir1.value == "sd-3.5") {
    textil.innerText =
      "Sd-3.5 - модель имеет улучшенное качество генерации изображений, улучшенная работа с текстом, расширенные возможности композиции, а также улучшенная работа со стилями, оптимизация производительности.";
  } else if (neir1.value == "flux") {
    textil.innerText =
      "Flux - модель, которая генерирует фотореалестичные и детализированные картинки.";
  } else if (neir1.value == "flux-pro") {
    textil.innerText =
      "Flux-pro - включают превосходную скорость и эффективность, улучшенное качество изображений, лучшее соблюдение подсказок и увеличенное разнообразие выходных данных.";
  } else if (neir1.value == "flux-dev") {
    textil.innerText =
      "Flux-dev - улучшает качество изображения и скорость, особенно в обработке деталей людей и эффективном встраивании текста.";
  } else if (neir1.value == "flux-schnell") {
    textil.innerText =
      "Flux-schnell - превосходит в эффективной генерации высококачественных изображений. Эффективная генерация изображений: Способна создавать изображения всего за 1-4 шага, что идеально для быстрых и эффективных приложений.";
  } else if (neir1.value == "midjourney") {
    textil.innerText =
      "Midjourney - высокое качество и художественный стиль, гибкие настройки, лучшая работа с текстом и композицией.";
  }
}

function nn1() {
  const neir1 = document.getElementById("neiros");
  const textil = document.getElementById("textil");
  geners = neir1.value;
  if (geners === "text-generation") {
    respTxt.innerText = "Это новый голосовой помощник!";
    const neirsss = document.getElementById("category");
    neirsss.innerHTML = `
    <option value="text">текстовые запросы</option>
    <option value="coding">кодинг</option>
    `;
    neiro = "qwen-2-5-max";
    textil.innerText =
      "Самая мощная языковая модель в серии Qwen. Она подойдет, если нужно использовать сложные рассуждения, исследования, создавать инструкции, решать творческие задачи. Но размер контекста, который учитывает ИИ при ответах, меньше.";
    const neirss = document.getElementById("neiro");
    lab.innerText = "Нейросеть для текста:";
    neirss.innerHTML = `
    <option>qwen-2-5-max</option>
    <option>qwen-2.5-1m</option>
    <option>gpt-4</option>
    <option>gpt-4o-mini</option>
    <option>gpt-3.5-turbo</option>
    <option>o1</option>
    <option>deepseek-r1</option>
    <option>deepseek-v3</option>
    <option>gigachat</option>
    `;
  } else {
    respTxt.innerHTML = '<img src="texture/white_cat.jpg" width="300px">';
    const neirsss = document.getElementById("category");
    textil.innerText =
      "Dall-e-3 - она умеет генерировать изображения, а также хорошо делает схемы.";
    neirsss.innerHTML = `
    <option value="graph">схемы</option>
    <option value="imgs">картинки</option>
    `;
    neiro = "dall-e-3";
    lab.innerText = "Нейросеть для картинки:";
    const neirss = document.getElementById("neiro");
    neirss.innerHTML = `
    <option>dall-e-3</option>
    `;
  }

  console.log(geners);
}

function cat() {
  const neirsss = document.getElementById("category");
  const neirss = document.getElementById("neiro");
  const lab = document.getElementById("lab");

  if (neirsss.value == "graph") {
    lab.innerText = "Нейросеть для картинки:";
    neirss.innerHTML = `
    <option>dall-e-3</option>
    `;
    neiro = neirss.value;
  } else if (neirsss.value == "text") {
    lab.innerText = "Нейросеть для текста:";
    neirss.innerHTML = `
    <option>qwen-2-5-max</option>
    <option>qwen-2.5-1m</option>
    <option>gpt-4</option>
    <option>gpt-4o-mini</option>
    <option>gpt-3.5-turbo</option>
    <option>o1</option>
    <option>deepseek-r1</option>
    <option>deepseek-v3</option>
    <option>gigachat</option>
    `;
    neiro = neirss.value;
  } else if (neirsss.value == "coding") {
    lab.innerText = "Нейросеть для текста:";
    neirss.innerHTML = `
    <option>gpt-4</option>
    <option>gpt-4o-mini</option>
    <option>gpt-3.5-turbo</option>
    <option>o1</option>
    <option>claude-3.7-sonnet</option>
    <option>claude-3-opus</option>
    <option>deepseek-r1</option>
    <option>deepseek-v3</option>
    <option>mixtral-8x22b</option>
    <option>mixtral-small-24b</option>
    `;
    neiro = neirss.value;
  } else if (neirsss.value == "imgs") {
    lab.innerText = "Нейросеть для картинки:";
    neirss.innerHTML = `
    <option>sdxl-turbo</option>
    <option>sd-3.5</option>
    <option>flux</option>
    <option>flux-pro</option>
    <option>flux-dev</option>
    <option>flux-schnell</option>
    <option>midjourney</option>
    <option>dall-e-3</option>
    `;
    neiro = neirss.value;
  }
}
