let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");

let arial = document.querySelector(".arial");
let cambria = document.querySelector(".cambria");
let georgia = document.querySelector(".georgia");
let serif = document.querySelector(".serif");

let leftAlign = document.querySelector(".left-align");
let centreAlign = document.querySelector(".center-align");
let rightAlign = document.querySelector(".right-align");

let redCol = document.querySelector(".red");
let blueCol = document.querySelector(".blue");
let greenCol = document.querySelector(".green");
let yellowCol = document.querySelector(".yellow");

let colBtn = document.querySelector(".color-icon");

redCol.addEventListener("click",function(){
    setBgCol("red",redCol);
})
blueCol.addEventListener("click",function(){
    setBgCol("blue",blueCol);
})
greenCol.addEventListener("click",function(){
    setBgCol("green",greenCol);
})
yellowCol.addEventListener("click",function(){
    setBgCol("yellow",yellowCol);
})







bold.addEventListener("click",function(){
    setFontStyle("bold",bold);
})
italic.addEventListener("click",function(){
    setFontStyle("italic",italic);
})
underline.addEventListener("click",function(){
    setFontStyle("underline",underline);
})


leftAlign.addEventListener("click",function(){
    setAlignment("left-align",leftAlign);
})
rightAlign.addEventListener("click",function(){
    setAlignment("right-align",rightAlign);
})
centreAlign.addEventListener("click",function(){
    setAlignment("center-align",centreAlign);
})


arial.addEventListener("click",function(){
    setFont("arial",arial);
})
cambria.addEventListener("click",function(){
    setFont("cambria",cambria);
})
georgia.addEventListener("click",function(){
    setFont("georgia",georgia);
})
serif.addEventListener("click",function(){
    setFont("serif",serif);
})



function setFontStyle(styleName,element){
    if(lastSelectedCell){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        if(cellObject.fontStyle[styleName]){
            if(styleName == "bold"){
                lastSelectedCell.style.fontWeight = "normal";
            }else if(styleName == "italic"){
                lastSelectedCell.style.fontStyle = "normal";
            }else{
                lastSelectedCell.style.textDecoration = "none";
            }
            element.classList.remove("active-font-style");
        }else{
            if(styleName == "bold"){
                lastSelectedCell.style.fontWeight = "bold";
            }else if(styleName == "italic"){
                lastSelectedCell.style.fontStyle = "italic";
            }else{
                lastSelectedCell.style.textDecoration = "underline";
            }
            element.classList.add("active-font-style");
        }
        cellObject.fontStyle[styleName] = !cellObject.fontStyle[styleName];
    }
}
function setAlignment(styleName,element){
    if(lastSelectedCell){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        if(cellObject.fontAlign[styleName]){
            if(styleName == "left-align"){
                lastSelectedCell.style.justifyContent = "flex-start";
            }else if(styleName == "center-align"){
                lastSelectedCell.style.justifyContent = "flex-start";
            }else{
                lastSelectedCell.style.justifyContent = "flex-start";
            }
            // element.classList.remove("active-font-style");
        }else{
            if(styleName == "left-align"){
                lastSelectedCell.style.justifyContent = "flex-start";
            }else if(styleName == "center-align"){
                lastSelectedCell.style.justifyContent = "center";
            }else{
                lastSelectedCell.style.justifyContent = "flex-end";
            }
            // element.classList.add("active-font-style");
        }
        cellObject.fontAlign[styleName] = !cellObject.fontAlign[styleName];
    }
}



function setFont(styleName,element){
    if(lastSelectedCell){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        if(cellObject.fontAlign[styleName]){
            if(styleName == ""){
                lastSelectedCell.style.fontFamily = "Arial, Helvetica, sans-serif";
            }else if(styleName == "cambria"){
                lastSelectedCell.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
            }else if(styleName == "georgia"){
                lastSelectedCell.style.fontFamily = "Georgia, Times, 'Times New Roman', serif";
            }else{
                lastSelectedCell.style.fontFamily = "sans-serif";
            }
            // element.classList.remove("active-font-style");
        }else{
            if(styleName == "arial"){
                lastSelectedCell.style.fontFamily = "Arial, Helvetica, sans-serif";
            }else if(styleName == "cambria"){
                lastSelectedCell.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
            }else if(styleName == "georgia"){
                lastSelectedCell.style.fontFamily = "Georgia, Times, 'Times New Roman', serif";
            }else{
                lastSelectedCell.style.fontFamily = "sans-serif";
            }
            // element.classList.add("active-font-style");
        }
        cellObject.fontAlign[styleName] = !cellObject.fontAlign[styleName];
    }
}


function setBgCol(newCol,element){
    if(lastSelectedCell){
        let {rowId,colId} = getRowIdColIdFromElement(lastSelectedCell);
        let cellObject = db[rowId][colId];
        if(cellObject.bgColor[newCol]){
            if(newCol == "red"){
                lastSelectedCell.style.backgroundColor = "white";
                colBtn.style.color = "white";
            }else if(newCol == "blue"){
                lastSelectedCell.style.backgroundColor = "white";
                colBtn.style.color = "white";
            }else if(newCol == "green"){
                lastSelectedCell.style.backgroundColor = "white";
                colBtn.style.color = "white";
            }else{
                lastSelectedCell.style.backgroundColor = "white";
                colBtn.style.color = "white";
            }
            // element.classList.remove("active-font-style");
        }else{
            if(newCol == "red"){
                lastSelectedCell.style.backgroundColor = "lightcoral";
                colBtn.style.color = "lightcoral";
            }else if(newCol == "blue"){
                lastSelectedCell.style.backgroundColor = "lightblue";
                colBtn.style.color = "lightblue";
            }else if(newCol == "green"){
                lastSelectedCell.style.backgroundColor = "lightgreen";
                colBtn.style.color = "lightgreen";
            }else{
                lastSelectedCell.style.backgroundColor = "yellow";
                colBtn.style.color = "yellow";
            }
            // element.classList.add("active-font-style");
        }
        cellObject.bgColor[newCol] = !cellObject.bgColor[newCol];
        modalCont.style.display = "none";
        modalToggle = !modalToggle;
    }
}