//<<<<<<<<<<<<<<<<{WELCOME TO ALGORITHMS AND DATA STRUCTURES DAY2!}>>>>>>>>>>>>>>>>

//5. Symplifing BigO notation
//6. Space complexity
//7. Logarithmic time complexity
//8. introduction to algorithms

//5.

//this is a easy one:
//firslty constants doesn't matter while determining the complexity of a code
//for example if complexity of a code is O(2n) we simplify it to O(n) and write the biggest term

//O(1234151) --> O(1)
//O(14213N) --> O(n)
//O(n^2 + n + 1) --> O(n^2)
//O(38294n) --> O(n)

//that's becouse smaller terms doesn't matter, as the number of inputs(n) approaches to infinity
// for example if we have:
// O(n^2 + n + 1) and n = 100000000
//the most weight comes from n^2 and n and 1 in the expression doesnt matter as they're really small compared to n^2

//also we refer some of the complexities as names, for example:
// O(1) --> Constant time complexity
// O(n) --> linear time complexity
// O(n^2) --> quadratic time complexity
// O(n^3) --> cubic time complexity
//etc...
