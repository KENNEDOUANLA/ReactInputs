function loadCsv(event,props){
    const file_csv =event.target.files[0];
    const reader = new FileReader();
    event.preventDefault();
    reader.onload = function(e) {
        const csvTable = csvToArray(e.target.result)
        console.log(csvTable);
    };
    reader.readAsText(file_csv);


    function csvToArray(str, delimiter = ",") {
        let headers = str.slice(0, str.indexOf("\n"));
        headers = headers.split(delimiter)
        let new_headers = [];
        let  rows = str.slice(str.indexOf("\n") + 1).split("\n");
        let arr = [];
        headers.map((element, index)=>{
            if (element === '""' || element === "") {
                headers[index] = ""+index;  
                new_headers.push(headers[index])
            }else{
                if (element[0] === '"') {
                        element=element.slice(1,str.indexOf("\r"))
                }
                if (element[element.length-1] === '"') {
                    element=element.slice(0,element.length-1)
                }
                if (new_headers.includes(headers[index])) {
                    headers[index] = element + "_" + index;
                    new_headers.push(headers[index])
                } else {
                    new_headers.push(headers[index])
                    headers[index] = element;
                }
                
            }
            return true;
        })
        rows.forEach(element =>
        {
            // verifier si la donnnées contient un ",".("COMMUNE,SAMSON")
            // s'il y a aucun caractere, element n'aura n'aura pas de double cote
            const values = element.split(delimiter);
            arr.push(headers.reduce(function(Data, header, index) {
                Data[header] = values[index];
                return Data;
            }, {}));
        });
        return arr;
    }

}

export default loadCsv;