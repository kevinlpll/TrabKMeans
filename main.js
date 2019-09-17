


const geraArray = (k, nDim) => {
    // const k = document.getElementById('k');
    // const nDim = document.getElementById('nDim');
    let linhas = new Array(k);
    for (let index1 = 0; index1 < k; index1++) {
        linhas[index1] = new Array(nDim);
        for (let index2 = 0; index2 < nDim; index2++) {
            linhas[index1][index2] = Math.random().toFixed(2);
        }
    }
    return linhas;
}

const visualizaArray = (array) => {
    array.forEach((linha)=>{
        
        linha.forEach(()=>{

        })
    });
}

console.log(geraArray(10,10));

