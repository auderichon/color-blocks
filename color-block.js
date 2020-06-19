//when click on "create" : collect values in input number and color, then display inputted number boxes with inputted color, each box will be numbered, starting from 1
const boxCount = document.getElementById("count");
const boxColor = document.getElementById("color");
const btnCreate = document.getElementById("create");
const btnRemove = document.getElementById("remove");
const btnReset = document.getElementById("reset");
const allBoxes = document.getElementsByClassName("box"); //HTMLCollection of all displayed boxes
const boxList = document.getElementById("box-list");
let boxListCount = 0;

//function to create color boxes
function createBox() {
    const color = boxColor.value;
    for (let i = 0; i < Number(boxCount.value); i++) {
        boxList.innerHTML += `<div class="box" style="background: ${color}"><span>${boxListCount + i + 1}</span></div>`;
    }    
    boxListCount += Number(boxCount.value);
    listenSelect(allBoxes);
    return boxList.innerHTML;
};

//when click on "reset" : remove all the displayed boxes from the screen
function reset() {
    return boxList.innerHTML = "";
}

//boxes can be selected or unselected by a click on them, when they are clicked the border of the box has a different color (state = "selected")
function select(event) {
    if (event.currentTarget.className.includes("selected")) {
        event.currentTarget.className = "box"
    } else {
        event.currentTarget.className = "box selected"
    }
}

//when click on "remove selected" : remove from the list all the selected boxes and reattribute the numbers on each box, starting from 1
function remove() {
    for (let i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].className.includes("selected")) allBoxes[i].remove();
    }
    boxListCount = allBoxes.length;

    for (let i = 0; i < boxListCount; i++) {
        allBoxes[i].innerHTML = `<span>${i + 1}</span>`;
    }
}

//event-listener : on click create color box(es)
btnCreate.onclick = createBox;

//event-listener : on click select or unselect a color box
function listenSelect(allBoxes) {
    for (let i = 0; i < allBoxes.length; i++) {
        allBoxes[i].addEventListener("click", select);
    }
};


//event-listener : on click reset
btnReset.onclick = reset;

//event-listener : on click remove selected boxes
btnRemove.onclick = remove;

console.log(allBoxes);


//if the inputted color is very light, input the box number in black instead of white