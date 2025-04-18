import eel
import os
import json
import speech_recognition as sr
from g4f.client import Client
import pyttsx3

eel.init(f'{os.path.dirname(os.path.realpath(__file__))}/web')


@eel.expose
def jsConverter(ind, val):
    with open('gui/web/settings/sett.json', 'r') as f:
        sett = json.loads(f.read())

        sett[ind] = val

        with open('gui/web/settings/sett.json', 'w') as g:
            g.write(json.dumps(sett))

@eel.expose
def jsGet(ind):
    with open('gui/web/settings/sett.json', 'r') as f:
        sett = json.loads(f.read())

        return sett[ind]

@eel.expose
def list_micro():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Say something!")
        audio = r.listen(source)

        try:
            # for testing purposes, we're just using the default API key
            # to use another API key, use `r.recognize_google(audio, key="GOOGLE_SPEECH_RECOGNITION_API_KEY")`
            # instead of `r.recognize_google(audio)`
            hj = r.recognize_google(audio_data=audio, language="ru-RU")
            print(hj)
            return hj
        except sr.UnknownValueError:
            return "Вас не слышно. . ."
        except sr.RequestError as e:
            return f"Ошибка сети, проверьте соединение с интернетом!\n Error: {e}"

@eel.expose
def promtik(model: str, promt: str):
    client = Client()
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": promt}],
        web_search=False
    )

    return response.choices[0].message.content

@eel.expose
def ozv(ozv: str):
    engine = pyttsx3.init()
    engine.say(ozv)
    engine.runAndWait()
