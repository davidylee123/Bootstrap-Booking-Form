$(document).ready(function () {
  $(".schedule").change(function () {
    var adults = $("#scheduleOption").val();
    var begin = moment($("#checkin").val());
    var end = moment($("#checkout").val());
    if (!isNaN(begin.diff(end, "days"))) {
      var numDays = end.diff(begin, "days");
      $("#daysdisplay").val(numDays);
      var cost = numDays * adults * 150;
      $("#costNum").val(cost);
    }
  });

  $(":submit").click(function () {
    var flag = true;
    const input = [
      $("#userName"),
      $("#firstname"),
      $("#lastname"),
      $("#phoneNum"),
      $("#faxNum"),
      $("#emailAd")
    ];

    input.forEach(function (currData) {
      if (currData.val() == "") {
        currData.addClass("is-invalid");
        flag = false;
      } else {
        currData.removeClass("is-invalid");
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

function reset() {
  const data = [
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

  data.forEach(function (currData) {
    currData.val("");
  });
  $("#scheduleOption").val("1");
  $("#myRangeNum").val("5");
  $("#priorityNum-high").prop("checked", true);
  toastr.info("Successfully cleared");
}
