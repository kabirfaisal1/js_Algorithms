// * How would you verify if existing data need to be updated 
// * and add new data that are not part of the list?
// <!--####################################################--!>
// * stored data
let baseData = [
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
    }, {
        "id": "12345678",
        "subject": "code repositories",
        "ide": "gitLab"
    }, {
        "id": "12345679",
        "subject": "CI/CD tool",
        "ide": "gitAction"
    }
];
// * data need to be compare by
let incomingData = [
    {
        "id": "1234567",
        "subject": "cloud",
        "ide": "aws"
    }, {
        "id": "123456",
        "subject": "sql",
        "ide": "mySQL"
    }, {
        "id": "10123456789",
        "subject": "automation tool",
        "ide": "cypress"
    }, {
        "id": "1234",
        "subject": "javaScript",
        "ide": "vs code"
    }, {
        "id": "12345678",
        "subject": "code repositories",
        "ide": "gitHub"
    }];
// * function start here
export function modifyKeyStorage(currentBaseData, updateBaseData) {
    // ? let storedArr = Array.from(currentBaseData); 
    // ? const newItem = Array.from(updateBaseData); NOT using 
    // * ^^ NOT using...need it if the data in import from .json file
    console.log('current baseData ~~>', currentBaseData)
    currentBaseData = currentBaseData.map(e => (e = updateBaseData.find(a => a.id == e.id) || e, e));
    // console.log("updated data based on ID ~~>", storedArr);
    currentBaseData.push(...updateBaseData.filter(compare => !currentBaseData.find(finalResults => finalResults === compare)))
    console.log('new item stored to currentBaseData ~~>', currentBaseData);
};

// * using the function
modifyKeyStorage(baseData, incomingData)
