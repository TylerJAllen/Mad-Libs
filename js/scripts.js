$(function() {
  $("#formOne").submit(function(event) {

    var male1Input = $("input#male1").val();
    var female1Input = $("input#female1").val();
    var person1Input= $("input#person1").val();
    var noun1Input = $("input#noun1").val();
    var animal1Input = $("input#animal1").val();
    var message1Input = $("input#message1").val();
    var message2Input = $("input#message2").val();
    var food1Input = $("input#food1").val();



    $(".male1").text(male1Input);
    $(".female1").text(female1Input);
    $(".person1").text(person1Input);
    $(".noun1").text(noun1Input);
    $(".animal1").text(animal1Input);
    $(".message1").text(message1Input);
    $(".message2").text(message2Input);
    $(".food1").text(food1Input);

    $("#story").show();

    event.preventDefault();
  });
});
