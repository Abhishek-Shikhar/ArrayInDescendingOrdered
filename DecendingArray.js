// Sample array
let numbers = [5, 1, 9, 3, 7];

// Sorting function for descending order
numbers.sort(function(a, b) {
    return b - a; // Compare in reverse order (b - a)
});

console.log(numbers); 
// Output: [9, 7, 5, 3, 1]
