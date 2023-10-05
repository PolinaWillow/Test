import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

function decoded(encoded, translations) {
    const decoded = [];
    const uniqueIds = new Set();
    
    encoded.forEach(item => {
    const decodedItem = {};
    for (let key in item) {
        if (key === 'groupId' || key === 'service' || key === 'formatSize' || key === 'ca') {
            decodedItem[key] = item[key];
          } else {
            const decodedValue = translations[item[key]];
            decodedItem[key] = decodedValue || item[key];
            uniqueIds.add(decodedItem[key]);
          }
        }
        decoded.push(decodedItem);
    })

    const uniqueIdsArray = Array.from(uniqueIds);
    return { decoded, uniqueIds: uniqueIdsArray };
}

    const result = decoded(encoded, translations);
    console.log(result.decoded);
    console.log(result.uniqueIds);
    
    


// console.log(decoded)
