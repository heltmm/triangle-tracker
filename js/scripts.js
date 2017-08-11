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
      return;
    };

    if (side1 === side2 || side2 === side3 || side3 === side1){
      if (side1 === side2 && side2 === side3){
        $("#type").text("equalateral")
        $("#hidden").show();
      }else{
        $("#type").text("isosceles")
        $("#hidden").show();
      }
    };
    if (side1 != side2 && side2 != side3 && side3 != side1) {
      $("#type").text("scalene")
      $("#hidden").show();
    };

// Closing Parens
  event.preventDefault();
  });
});



// if (side1 === side2 && side2 === side3) {
//   alert("You've got an equalateral triangle!")
// };
//
// else if (side1 === side2 || side2 === side3 || side3 === side1) {
//   alert("You've got an isosceles triangle!")
// };
