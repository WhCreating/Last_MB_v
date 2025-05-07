const inps = document.getElementById("queryInput");
const inps2 = document.getElementById("queryInput2");
const savButik = document.getElementById("saveButton");
const voice = document.getElementById("voiceButton");
const promt = document.getElementById("questionText");
const sendBut = document.getElementById("sendButton");
const respTxt = document.getElementById("responseText");
const srch = document.getElementById("search")
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
          console.log("True")
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
          .generImage(promt.innerText)()
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
        console.log("True")
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
        .generImage(promt.innerText)()
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
  neiro = neir1.value;
  console.log(neiro);
}

function nn1() {
  const neir1 = document.getElementById("neiros");
  geners = neir1.value;
  if (geners === "text-generation") {
    respTxt.innerText = "Это новый голосовой помощник!";
  } else {
    respTxt.innerHTML = '<img src="texture/white_cat.jpg" width="300px">';
  }

  console.log(geners);
}
