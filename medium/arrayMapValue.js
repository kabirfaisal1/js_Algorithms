const testArray=[
    {
        "id": "1234",
        "subject": "javaScript",
        "ide":"vs code"
    },{
        "id": "12345",
        "subject": "c#",
        "ide":"ms visual studio"
    },{
        "id": "123456",
        "subject": "sql",
        "ide":"msSQL"
    },{
        "id": "1234567",
        "subject": "cloud",
        "ide":"azure"
    }
];

function arrayReplace(storedArray, argArray){
    let storedArr = Array.from(storedArray);
    storedArr = storedArr.map(v => v.id !== argArray.id ? v : argArray )
    console.log("update with ~~>",storedArr)
}

let updateArray = {
    "id": "1234567",
    "subject": "cloud",
    "ide":"aws"
}

arrayReplace(testArray,updateArray)
// module.exports = new 