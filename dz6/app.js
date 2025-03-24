const textInput = document.getElementById("textInput");
const currentCount = document.getElementById("numberCount");
const remainingCount = document.getElementById("textCount");
const maxLength = 30;

textInput.addEventListener("input", () => {
    let textLength = textInput.value.length;
    currentCount.textContent = textLength;
    remainingCount.textContent = maxLength - textLength;
});

const text = document.getElementById("text");
const count = document.getElementById("Count");
const spanCount = document.getElementById("spanCount");
const maxtext = 20;

text.addEventListener("input", () => {
    let texttLength = text.value.length;
    count.textContent = texttLength;
    spanCount.textContent = maxtext - texttLength;

    if (texttLength > maxtext) {
        text.classList.add("error");
    } else {
        text.classList.remove("error");
    }
});