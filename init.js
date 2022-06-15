let cellsContentDiv = document.querySelector(".cells-content");

function initCells(){
    let cellContent = "<div class = 'top-left-cell'></div>";
    cellContent += "<div class = 'top-row'>";
    for(let i = 0; i<26; i++){
        cellContent += `<div class = 'top-row-cell' trid='${i}'>${String.fromCharCode(65+i)}</div>`;
    }
    cellContent += "</div>"
    cellContent += "<div class = 'left-col'>";
    for(let i = 0; i<100; i++){
        cellContent += `<div class = 'left-col-cell' lcid='${i}'>${i+1}</div>`;
    }
    cellContent += "</div>"

    

    cellContent += "<div class ='cells'>";
    for(let i = 0; i<100; i++){
        cellContent+="<div class = 'row'>";
        for(let j = 0; j<26; j++){
            cellContent+=`<div class = 'cell' rowid = '${i}' colid = '${j}' contenteditable ></div>`;
        }
        cellContent+="</div>";
    }
    cellContent+="</div>"

    cellsContentDiv.innerHTML = cellContent;
}
initCells();

let sheetsDB = [];
let db;
let visitedCells;
function initDb(){
    let newSheetDB = [];
    for(let i = 0; i<100; i++){
        let row =[]
        for(let j = 0; j<26; j++){
            let name = String.fromCharCode(65+j)+(i+1)+"";
            let cellObject = {
                name:name,
                value:"",
                formula:"",
                children:[],
                parent:[],
                visited:false,
                fontStyle:{bold:false,italic:false,underline:false},
                fontAlign:{leftAlign:false,rightAlign:false,centreAlign:false},
                textStyle:{arial:true,cambria:false,georgia:false,serif:false},
                bgColor:{red:false,blue:false,green:false,yellow:false}
            }
            row.push(cellObject);
        }
        newSheetDB.push(row);
    }
    db = newSheetDB;
    sheetsDB.push(newSheetDB);
    // sheetsDB.push({db:newSheetDB,visitedCells:visitedCells});
    console.log(sheetsDB);
}
initDb();
// console.log(db);