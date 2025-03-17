const array = [1, 2, 3, 4];

function createCircle(value) {
    const div = document.createElement("div");
    div.className = "array-item";
    div.textContent = value;
    return div;
}

function Random(array) {
    return array.map(() => Math.floor(Math.random() * 9) + 1);
}

function display(array) {
    const container = document.querySelector(".array");
    container.innerHTML = "";
    array.map(createCircle).forEach(div => container.append(div));
}

const refreshButton = document.querySelector(".btn button");

display(array);

refreshButton.onclick = () => {
    const newArray = Random(array);
    display(newArray);
};