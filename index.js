const Grader = require('./src');


let final = Grader.final([40, 50], [
    [ 80, 90, 88 ],
    [ 100, 80, 57 ]
]);


console.log(final);