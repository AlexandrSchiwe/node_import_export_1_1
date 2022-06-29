// const arrays = require("./data.js");
// const defaultSort = Array.from(arrays).sort();

// arrays.sort(function compare(a, b) {
//     if (a > b) {
//         return -1;
//     }
// })

// function sort(a, b) {
//     if (a > b) {
//         return -1;
//     }
// }


// compare();
// console.log(arrays);
// console.log(defaultSort);

// module.exports = {
//     compare,
// }

// function compare(a, b) {
//     if (a < b) {
//         return -1;
//     } if (a > b) {
//         return 1;
//     }
// }

const compare = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (b > a) {
        return 1;
    }
    return 0;
}

const sortArray = (array) => {
    return array.sort(compare);
}

// arrays.sort(function (a, b) {
//     return a - b;
// });


module.exports = {
    sortArray,
};


// sort();
// compare();


// module.exports = {
//     sort,
// }