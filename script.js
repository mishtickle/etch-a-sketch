let buttons = document.querySelector(".button");
buttons.addEventListener('click', function(e) {
    
    createBoxes();
    clearBoxes();
    
})

function createBoxes(){
    const container = document.querySelector(".container");
    var number = window.prompt("Enter the number of rows and columns");
    if (number > 120){
        number =120;
    }
    var theWidth = Math.floor(960/number);
    var theHeight = Math.floor(960/number);
    for (j = 0; j < number; j++){
        const content = document.createElement('div');
        content.classList.add('column');
        container.appendChild(content);
        for (i = 0; i < number; i++){
            const rows = document.createElement('p');
            rows.classList.add('rows');
            rows.textContent = '';
            rows.setAttribute('style', `width:${theWidth}px; height:${theHeight}px;`);
            content.appendChild(rows)
            }
        }
    let boxes = document.querySelectorAll(".rows")
    boxes.forEach((value, index) => {
            boxes[index].addEventListener("mouseover", function(e) {
                value.style.backgroundColor = "black";
            });
        })
    }
function clearBoxes(){
    let boxes = document.querySelectorAll(".rows");
    boxes.forEach((value, index) => {
        boxes[index] = value.style.backgroundColor= "";
    });
}
