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

/*
    Include the idle!
    pair_array Must already be sorted!
*/
function schedule(pair_array) {
    let clock = 0;
    let start_times = [];
    let end_times = [];

    let i = 0;

    start_times.push(pair_array[i].arrival);
    end_times.push(pair_array[i].burst + start_times[i]);

    clock += end_times[i];
    i++;

    while (i < pair_array.length) {
        if (pair_array[i].arrival <= clock) {
            start_times.push(end_times[i-1]);
            end_times.push(pair_array[i].burst + start_times[i]);
        } else {
            console.log(pair_array[i].arrival - clock);
            start_times.push(end_times[i-1] + (pair_array[i].arrival - clock));
            end_times.push(pair_array[i].burst + start_times[i]);
        }
        clock += end_times[i];
        i++;
    }
    console.log("start " +start_times);
    console.log("end " +end_times);

    return {
        start_times,
        end_times,
    };
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
    
    // This array does not know if it contains idle
    let pair_array = combineArrays(arrival_array, burst_array);
    schedule(pair_array);
}