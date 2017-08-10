$(document).ready(function() {
  $("#triangleTracker").submit(function(event){
    var sideOne = $("#side1").val();
    var sideTwo = $("#side2").val();
    var sideThree = $("#side3").val();
    var side1 = parseInt(sideOne);
    var side2 = parseInt(sideTwo);
    var side3 = parseInt(sideThree);


    if (sideOne.match(/^\D+$/)|| sideTwo.match(/^\D+$/) || sideThree.match(/^\D+$/)){
      alert("That's not a triangle!")
    };

    if (side1 === side2 || side2 === side3 || side3 === side1){
      if (side1 === side2 && side2 === side3){
        alert("You've got an equalateral triangle!")
      }else{
        alert("You've got an isosceles triangle!")
      }
    };
    if (side1 != side2 && side2 != side3 && side3 != side1 && sideOne.match(/^\d+$/) && sideTwo.match(/^\d+$/) && sideThree.match(/^\d+$/)) {
      alert("You've got a scalene triange!")
    };

// Closing Parens
  });
});



// if (side1 === side2 && side2 === side3) {
//   alert("You've got an equalateral triangle!")
// };
//
// else if (side1 === side2 || side2 === side3 || side3 === side1) {
//   alert("You've got an isosceles triangle!")
// };
