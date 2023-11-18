function getArrivalTimes(form) {
    return form.arrivalTimes.value;
}

function getCpuCycles(form) {
    return form.cpuCycles.value;
}

function convertData(string) {
    let array = string.split(" ").map(Number);
    return array;
}

function processData(form) {
    let x = getArrivalTimes(form);
    let y = getCpuCycles(form);

    // Convert the string to an array
    let xArr = convertData(x);
    let yArr = convertData(y);

    // Check first if the length of the two arrays are equal
    if (xArr.length !== yArr.length) {
        alert("Invalid Input. Arrival Times and CPU Cycle count are not the same!")
        return;
    }

}
