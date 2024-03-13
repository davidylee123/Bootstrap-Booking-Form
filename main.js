$(document).ready(function () {

  $(".schedule").change(function () {
    var adults = $("#schedule-card").val();
    var a = moment($("#checkIn").val());
    var b = moment($("#checkOut").val());
    if (!isNaN(a.diff(b, 'days'))) {
      var days = b.diff(a, 'days');
      $("#daysDisplay").val(days);
      var cost = days * adults * 150;
      $("#cost").val(cost);
    }

  });


  $(":submit").click(function () { // he wants us to use the onclick() html thing
    var flag = true;
    const info = [$("#username"),
    $("#firstName"),
    $("#lastName"),
    $("#phone"),
    $("#fax"),
    $("#email")];

    info.forEach(function (currField) {
      if (currField.val() == "") {
        currField.addClass("is-invalid");
        flag = false;
      } else {
        currField.removeClass("is-invalid");
      }
    });

    var cost = parseInt($("#cost").val());
    if ($("#cost").val() == "") {
      toastr.error("Cost not calculated!");
      flag = false;
    }
    if (cost < 0) {
      toastr.error("Cost cannot be negative, please correct your dates.");
      flag = false;
    }
    if (flag) {
      toastr.success("Successfully submitted");
    }
  });
});

function reset1() {
  const fields = [$("#username"),
  $("#firstName"),
  $("#lastName"),
  $("#phone"),
  $("#fax"),
  $("#email"),
  $("#daysDisplay"),
  $("#cost"),
  $("#message"),
  $("#checkIn"),
  $("#checkOut"),
  $("#cost"),
  $("#daysDisplay")];
  fields.forEach(function (currField) {
    currField.val("");
  });
  $("#schedule-card").val("1");
  $("#myRange").val("5");
  $("#priority-high").prop("checked", true);
  toastr.success("Successfully cleared");
};