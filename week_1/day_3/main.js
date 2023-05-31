function fibonacci() {
    var x = 0;
    var y = 1;
    var sum;
    var i;
    let myArray = [];

    //add first two terms of sequence to array
    myArray.push(x);
    myArray.push(y);

    //add the remaining 8 terms to myArray
    for (i = 2; i < 10; i++) {
        sum = x+y;
        x = y;
        y = sum;
        myArray.push(y)
    }
    return myArray;
}
console.log(fibonacci())
