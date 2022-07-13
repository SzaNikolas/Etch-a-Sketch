let size = 16;

function makeBlocks() {
    for (var i = 0; i < size; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < size; j++) {
            var box = document.createElement('div');
            box.className = "eachBox";
            box.addEventListener("mouseover", function(e) {
                let randomGBAOne = Math.floor(Math.random() *255 + 0);
                let randomGBATwo = Math.floor(Math.random() *255 + 0);
                let randomGBAThree = Math.floor(Math.random() *255 + 0);
                e.target.style.backgroundColor = "rgb(" + randomGBAOne + "," + randomGBATwo + "," + randomGBAThree + ")"; });
            row.appendChild(box);
        }                
        gridForm.append(row);
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeBlocks() {
    let newSize = prompt("Oi, what size u want ?", );
        size = newSize
        if (newSize > 100) {
            alert("max 100, please");
        } else if (newSize == ""){
            alert("input a number, please");
        } else {
            removeAllChildNodes(gridForm);
            for (var i = 0; i < newSize; i++) {
                var row = document.createElement('div');
                row.className = "row";
                for (var j = 0; j < newSize; j++) {
                    var box = document.createElement('div');
                    box.className = "eachBox";
                    box.addEventListener("mouseover", function(e) {
                        let randomGBAOne = Math.floor(Math.random() *255 + 0);
                        let randomGBATwo = Math.floor(Math.random() *255 + 0);
                        let randomGBAThree = Math.floor(Math.random() *255 + 0);
                        e.target.style.backgroundColor = "rgb(" + randomGBAOne + "," + randomGBATwo + "," + randomGBAThree + ")"; });
                    row.appendChild(box);
                }                
                gridForm.append(row);
           }
        }
    
}

let titleUp = document.createElement("div");
titleUp.classList.add("title");
titleUp.textContent = "Etch-a-Sketch";
document.body.append(titleUp);

let buttonOne = document.createElement("div");
buttonOne.classList.add("btn");
document.body.append(buttonOne);

let buttonSize = document.createElement("button");
buttonSize.classList.add("buttonSquare");
buttonSize.textContent = "Change size?";
buttonSize.addEventListener("click", function messageUp() {
    changeBlocks();
    });
buttonOne.append(buttonSize);

let gridForm = document.createElement("div");
gridForm.classList.add("gridSquare");
makeBlocks();
document.body.append(gridForm);