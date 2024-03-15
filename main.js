$(document).ready(function () {
  $(".schedule").change(function () {
    var adults = $("#scheduleOption").val();
    var a = moment($("#checkin").val());
    var b = moment($("#checkout").val());
    if (!isNaN(a.diff(b, "days"))) {
      var days = b.diff(a, "days");
      $("#daysdisplay").val(days);
      var cost = days * adults * 150;
      $("#costNum").val(cost);
    }
  });

  $(":submit").click(function () {
    var flag = true;
    const info = [
      $("#userName"),
      $("#firstname"),
      $("#lastname"),
      $("#phoneNum"),
      $("#faxNum"),
      $("#emailAd")
    ];

    info.forEach(function (currField) {
      if (currField.val() == "") {
        currField.addClass("is-invalid");
        flag = false;
      } else {
        currField.removeClass("is-invalid");
      }
    });

    var cost = parseInt($("#costNum").val());
    if ($("#costNum").val() == "") {
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
  const fields = [
    $("#userName"),
    $("#firstname"),
    $("#lastname"),
    $("#phoneNum"),
    $("#faxNum"),
    $("#emailAd"),
    $("#daysdisplay"),
    $("#costNum"),
    $("#messageCount"),
    $("#checkin"),
    $("#checkout")
  ];

  fields.forEach(function (currField) {
    currField.val("");
  });
  $("#scheduleOption").val("1");
  $("#myRangeNum").val("5");
  $("#priorityNum-high").prop("checked", true);
  toastr.info("Successfully cleared");
}
