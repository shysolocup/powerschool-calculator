const Grader = {

    total(arr) {
        let total = 0;

        arr.forEach(grade => {
            total += grade
        });

        return total / arr.length;
    },



    weigh(arr, weight) {
        let calcweight = weight/25;
        return Grader.total(arr) * calcweight;
    },


    final(weights, grades) {
        var finalgrade = 0;
        var finalweight = 0;

        grades.forEach( (arr, i) => {
            let weight = weights[i];
            let calcweight = weight/25;
            let grade = Grader.weigh(arr, weight);

            finalweight += calcweight;
            finalgrade += grade;
        });

        return finalgrade / finalweight;
    }
}


module.exports = Grader;