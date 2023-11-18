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
    let arrival_array = convertData(x);
    let burst_array = convertData(y);

    // Check first if the length of the two arrays are equal
    if (arrival_array.length !== burst_array.length) {
        alert("Invalid Input. Arrival Times and CPU Cycle count are not the same!")
        return;
    }
    
    let pair_array = combineArrays(arrival_array, burst_array);
}

function combineArrays(arrival_array, burst_array) {
    let pair_array = [];
    
    // Combine the two arrays to form a key value pair
    for (let i = 0; i < arrival_array.length; i++) {
        let pair = {};
        pair["arrival"] = arrival_array[i];
        pair["burst"] = burst_array[i];
        pair_array.push(pair);
    }

    // Sort array
    pair_array.sort((a,b) => a.arrival - b.arrival);
    return pair_array;
}

function solveIdle(pair_array) {
    
}
