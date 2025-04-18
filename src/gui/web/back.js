const inps = document.getElementById("queryInput");
const inps2 = document.getElementById("queryInput2");
const savButik = document.getElementById("saveButton");
const voice = document.getElementById("voiceButton");
const promt = document.getElementById("questionText");
const sendBut = document.getElementById("sendButton");
const respTxt = document.getElementById("responseText");

savButik.addEventListener("click", () => {
  eel.jsConverter("api-key-gpt", inps2.value)();
});

voice.addEventListener("click", () => {
  promt.innerText = "Слушаю. . .";

  eel
    .list_micro()()
    .then((txt) => {
      console.log(txt);
      promt.innerText = txt;
    })
    .then(() => {
      respTxt.innerText = "Думает. . .";

      eel
        .promtik("qwen-2-5-max", promt.innerText)()
        .then((otv) => {
          respTxt.innerText = otv;
        });
    });
});

sendBut.addEventListener("click", () => {
  if (inps.value !== "") {
    promt.innerText = inps.value;
    inps.value = "";
    respTxt.innerText = "Думает. . .";
    eel
      .promtik("qwen-2-5-max", promt.innerText)()
      .then((otv) => {
        respTxt.innerText = otv;
      });
  }
});
