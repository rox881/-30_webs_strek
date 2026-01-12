let speech = new SpeechSynthesisUtterance();

let voices = [];

let select = document.getElementById("select");
select.innerHTML = "";
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    for (let i = 0; i < voices.length; i++) {
        let option = document.createElement("option");
        option.innerText = voices[i].name;
        select.appendChild(option);
    }
}

select.addEventListener("change", () => {
    speech.voice = voices[select.selectedIndex];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});