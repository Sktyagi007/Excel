function solveFormula(formula,selfCellObject){
    let formulaComps = formula.split(" ");

    for(let i = 0; i<formulaComps.length; i++){
        let formulaComp = formulaComps[i];
        if(formulaComp[0]>="A" && formulaComp[0] <="Z"){
            let{rowId,colId} = getRowIdColIdFromAddress(formulaComp);
            let cellObject = db[rowId][colId];
            let value = cellObject.value;
            cellObject.children.push(selfCellObject.name);
            // console.log(cellObject);
            formula = formula.replace(formulaComp,value);
        }
    }
    let computedValue = eval(formula);
    return computedValue;
}
function getRowIdColIdFromElement(element){
    let rowId = element.getAttribute("rowid");
    let colId = element.getAttribute("colid");
    return{
        rowId,
        colId
    }
}

function getRowIdColIdFromAddress(address){
    let colId = address.charCodeAt(0)-65; 
    let rowId = Number(address.substring(1))-1;
    return {
        rowId,
        colId
    }
}