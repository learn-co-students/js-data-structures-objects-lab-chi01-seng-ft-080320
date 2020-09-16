// // Write your solution in this file!

// - `destructivelyDeleteFromDriverByKey()` - this function should work the same as
//   `deleteFromDriverByKey()` but it _should_ mutate the `driver` passed in. Be
//   sure and consider whether dot-notation or bracket-notation might affect your
//   solution.

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newObj = { ...driver };
   
    newObj[key] = value;
   
    return newObj;
}

function  destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver,key){
    const newObj = Object.assign({}, driver)

    delete newObj[key]

    return newObj
}

function destructivelyDeleteFromDriverByKey(driver,key){
    delete driver[key]
    return driver
}
