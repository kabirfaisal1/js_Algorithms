// * How would you verify if existing data need to be updated 
// * and add new data that are not part of the list?
let dbData = [
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
    },{
        "id": "12345678",
        "subject": "code repositories",
        "ide": "gitLab"
    },{
        "id": "12345679",
        "subject": "CI/CD tool",
        "ide": "gitAction"
    }
];
let incomeingData = [
    {
        "id": "1234567",
        "subject": "cloud",
        "ide": "aws"
    }, {
        "id": "123456",
        "subject": "sql",
        "ide": "my SQL"
    }, {
        "id": "10123456789",
        "subject": "automation tool",
        "ide": "cypress"
    }, {
        "id": "1234",
        "subject": "javaScript",
        "ide": "vs code"
    },{
        "id": "12345678",
        "subject": "code repositories",
        "ide": "gitHub"
    }];
export function arrayUpdate(storedArray, argArray) {
    let storedArr = Array.from(storedArray);
    const newItem = Array.from(argArray);
    console.log("before checking same id ~~>", storedArr)
    storedArr = storedArr.map(e => (e = newItem.find(a => a.id == e.id) || e, e));
    // console.log("update stored data with same id ~~>", storedArr);
    storedArr.push(...newItem.filter(compare => !storedArr.find(finalResutls => finalResutls === compare)))
    console.log("new item stored data with same id ~~>", storedArr);
};


arrayUpdate(dbData, incomeingData)
