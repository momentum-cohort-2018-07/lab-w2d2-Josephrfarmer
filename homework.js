// 1. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum (numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum
}

// 2. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average (numbers){
  var average = undefined;
  var sum = 0;
  for(var i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
    average = sum / numbers.length;
  }
  return average
}

// 3. Create a function called "intersection" that takes two arrays and
// returns a new array that contains the elements found in both arrays.
// The order they are in does not matter, but no duplicates should be
// in the returned array, even if they were in the input.

function intersection (array1, array2){
  var newArray = [];
  for(var a1 = 0; a1 < array1.length; a1++){
    for(var a2 = 0; a2 < array2.length; a2++){
      if (array1[a1] === array2[a2]){
        newArray.push(array1[a1])
      }
    }
  }
  return newArray;
}

// 4. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum (array){
  var min;
  
  for(var i = 0; i < array.length; i++){
    if(typeof (min) === 'undefined' || array[i] < min){
      min = array[i]
    }
  }
  return min
}

// 5. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// 6. Create a function called "createUser" that takes a name and a Date object
// and returns an object with the keys "name" and "dob" (date of birth) with
// those values.

function createUser (name, date){
  var user = {
    name : name, 
    dob : date
  }
  return user
}

// 7. Create a function called "calculateAge" that takes a user created from
// createUser and a Date object considered the current date, and calculates the user's
// age in years on that date. You can use your code from yesterday's homework.

function calculateAge (user, Date){
    date1 = user.dob
    date2 = Date
    var math =(date2.getTime() - date1.getTime())
    if (date1<=date2){
        return Math.trunc(math/(1000*60*60*24*365.25))
    } else {
        return
    }
 }


// 8. Create a function called "addAge" that takes a user created from createUser
// and a Date object and adds a new key on the user object, "age", with the age
// in years the user was on that date.

function addAge (user, Date){
    user.age= calculateAge(user, Date)
}

// 9. Create a function called "createUsers" that takes two arrays of equal
// length, the first being a list of names and the second being a list of dates of
// birth, and returns a new array of objects created from those original arrays.

function createUsers (array1, array2){
    var newArray = [];
    for(var i = 0; i < array1.length; i++){
      var name = array1[i]
      var dob = array2[i]
      var object = {name : name, dob: dob}
      newArray.push(object)
    } 
    return newArray
}

// 10. Create a function called "averageAge" that takes an array of users and
// a Date object and returns the average age in years of the users on that date.
// You do not have to handle the situation in which the current date is before
// a user's date of birth.

function averageAge (users, Date){
  var ages:[];
  for(var i = 0; i < users.length, i++){
    var user = users[i]
    ages.push(calculateAge(user, Date)){
  }

}