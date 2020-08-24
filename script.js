$(".isdraggable").draggable({ axis: "x" });

// FRÅN DEMO.JS

$(function () {
  var imgsource = [
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2F1.png?v=1595631599041",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2F2.png?v=1595631606412",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2F3(1).png?v=1595862222741",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2F4.png?v=1595631615281",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2F5.png?v=1595631619789",
  ];

  var soundsource = [
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2FNewHiUserWhereGo.mp3?v=1595518879441",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2FBeep.mp3?v=1595632656444",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2FOkYouwouldliketogotowork.mp3?v=1595632659479",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2FBeep.mp3?v=1595632656444",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2Fpedestrianwarningsound.mp3?v=1595939676728",
  ];

  var descriptionsource = [
    '<p class="description"><i>"Hi, user. Where would you like to go?"</i><br><br> This is the first screen that greets the user upon entering their car.' +
      " As this is a speculative design for a future car, it is assumed that the system has a way to determine who enters the car.</p>",
    '<p class="description"><i>"Beep"</i><br><br>Once IRIS (The system) has greeted their user, it can take input via voice command or by the touch-screen keyboard.' +
      " The beep affords the user to speak.</p>",
    '<p class="description"><i>"OK, you would like to go to work. Did I get it right?"</i><br><br>Come back to this later!</p>',
    "<p class='description'>This is the view presented to the user(s) during a trip, when everything is going on as normal. <br><br>" +
      "<b>1)</b>The top panel presents the user summarized information of the trip such as arrival time, current time, travel progression. <br><br>" +
      "<b>2)</b>Next is an area dedicated for the IRIS voice assistant followed by a visual third-person view provided by the autononous car's LIDAR sensors.<br><br>" +
      "Lastly, the bottom part of the view is divided in three columns: <br><br><b>3)</b> A decision log providing information of past decisions to the left<br><b>4)</b> A map of the area in the middle. <br><b>5)</b> A " +
      '"planned actions"' +
      " column to give the user some transparency of what is going on.</p>",
    "<p class='description'>If something sudden would happen during the trip, such as a pedestrian suddenly crossing the street, this is quietly conveyed by a clear but not too disturbing signal, as to not disturb the passengers. <br><br> <i>Note: The sound effect is highly speculative, I am by no means close to being a sound designer. The idea was to have a signal that wasn't too disruptive, yet easily discernible.<i/></p>",
  ];

  var answersource = [
    ["← Previous", "Next slide →"],
    ["← Previous", '<i>"I' + "'m" + ' going to work</i>" →'],
    ["← Previous", '<i>"Yeah"</i> →'],
    ["← Previous", "Next slide →"],
    ["← Previous", "Restart"],
  ];

  $viewer = $(".viewer");
  $demotextfield = $("#demotextfield");
  $demoslideheader = $("#demoslideheader");
  $index = 0;
  //var restartclicked = false;

  for (var i = 0; i < imgsource.length; i++) {
    $viewer.append("<img class='myslides' src=" + imgsource[i] + "></img>");
    $demoslideheader.append(
      "<h3 class='slideheader'>Slide " +
        (i + 1) +
        " of " +
        imgsource.length +
        "</h3>"
    );
    $("#audio").append(
      "<audio controls class='mysounds' style='margin-top: 8px; margin-bottom: 8px;'><source src=" +
        soundsource[i] +
        "type='audio/mp3'>(Sound not supported by browser)</audio>"
    );
    $("#demotextfield").append(descriptionsource[i]);
  }

  $(".viewer .myslides:eq(0)").css({ display: "block", margin: "0 auto" });
  $(".viewer .mysounds:eq(0)").css({ display: "block", margin: "0 auto" });
  $(".slideheader:eq(0)").css("display", "block");
  $(".mysounds:eq(0)").css("display", "block");
  $(".description:eq(0)").css({ display: "block" });
  $("#prev").css("display", "none");
  $("#next").html(answersource[0][1]);
  $("#transparency_button").css({
    "background-color": "black",
    color: "white",
  });
  $("#anthro_rationale, #infotodisplay_rationale").css("display", "none");

  $myslides = $(".myslides");

  function browse(value) {
    $(".mysounds").css({ display: "none" });
    $(".myslides").css({ display: "none", margin: "0 auto" });
    $(".slideheader").css({ display: "none" });
    $(".description").css({ display: "none" });
    $index = show($index, value);
    if ($index > imgsource.length - 1) {
      $index = 0;
      restartclicked = true;
    } else if ($index < 0) {
      $index = imgsource.length - 1;
    }
    if ($index == 0 /*&& restartclicked == false)*/) {
      $("#prev").css("display", "none");
    } else {
      $("#prev").css("display", "inline-block");
    }
    $(".myslides:eq(" + $index + ")").css("display", "block");
    $(".mysounds:eq(" + $index + ")").css("display", "block");
    $(".slideheader:eq(" + $index + ")").css("display", "block");
    $(".description:eq(" + $index + ")").css("display", "block");
    $("#prev").html(answersource[$index][0]);
    $("#next").html(answersource[$index][1]);
  }

  $("#next").click(function () {
    browse("next");
  });

  $("#prev").click(function () {
    browse("prev");
  });

  $(".tab_button").click(function () {
    $(".tab_button").css({ "background-color": "transparent", color: "black" });
    $("#" + this.id).css({ "background-color": "black", color: "white" });
    console.log($(this).attr("value"));
    $(".rationalecontent").css("display", "none");
    $($(this).attr("value")).css("display", "block");
  });

  function show($index, value) {
    if (value == "next") {
      $index++;
    } else if (value == "prev") {
      $index--;
    }
    return $index;
  }
});

/*
  function show($index){
    if(event.keyCode == 39){
      $index++;
    }
    if(event.keyCode == 37){
      $index--;
    }
    return $index;
  }
  */
