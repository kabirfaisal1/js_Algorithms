let storedData = [
    {
        "id": "1234",
        "subject": "javaScript",
        "ide": "vs code"
    }, {
        "id": "12345",
        "subject": "c#",
        "ide": "ms visual studio"
    }, {
        "id": "123456",
        "subject": "sql",
        "ide": "ms SQL"
    }, {
        "id": "1234567",
        "subject": "cloud",
        "ide": "azure"
    }
];
let editData = [
    {
        "id": "1234567",
        "subject": "cloud",
        "ide": "aws"
    }, {
        "id": "123456",
        "subject": "sql",
        "ide": "my SQL"
    }, {
        "id": "12345678",
        "subject": "automation tool",
        "ide": "cypress"
    }];
function arrayUpdate(storedArray, argArray) {
    let storedArr = Array.from(storedArray);
    storedArr = storedArr.map(e => (e = argArray.find(a => a.id == e.id) || e, e));
    //storedArr.map(v => v.id !== argArray.id ? v : argArray )
    console.log("update with ~~>", storedArr)
};
function arrayAddData(storedArray, argArray) {
    let storedArr = Array.from(storedArray);
    let editData = Array.from(argArray);
   
    const elementExists = storedArr.includes(editData);
    if (!elementExists) {

        storedArr.push(editData);
        
        }
        console.log(storedArr);
    }

arrayAddData(storedData, editData)



//arrayUpdate(storedData,editData)
