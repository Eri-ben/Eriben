$(".isdraggable").draggable({ axis: "x" });

$("#projectsnav").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#projectshook").offset().top - 16,
    },
    1200
  );
});
// FRÅN DEMO.JS

$(function () {
  var imgsource = [
    "images/HCD_Demo_Iteration1/0.png",
    "images/HCD_Demo_Iteration1/1.png",
    "images/HCD_Demo_Iteration1/2.png",
    "images/HCD_Demo_Iteration1/3.png",
    "images/HCD_Demo_Iteration1/4.png",
    "images/HCD_Demo_Iteration1/5.png",
    "images/HCD_Demo_Iteration1/6.png",
    "images/HCD_Demo_Iteration1/7.png",
    "images/HCD_Demo_Iteration1/8.png",
    "images/HCD_Demo_Iteration1/9.png",
    "images/HCD_Demo_Iteration1/end.png",
  ];

  var imgsource2 = [
    "images/HCD_Demo_Iteration2/0.png",
    "images/HCD_Demo_Iteration2/1.png",
    "images/HCD_Demo_Iteration2/2.png",
    "images/HCD_Demo_Iteration2/3.png",
    "images/HCD_Demo_Iteration2/4.png",
    "images/HCD_Demo_Iteration2/5.png",
    "images/HCD_Demo_Iteration2/6.png",
    "images/HCD_Demo_Iteration2/7.png",
    "images/HCD_Demo_Iteration2/8.png",
    "images/HCD_Demo_Iteration2/9.png",
    "images/HCD_Demo_Iteration2/end.png",
  ];

  var soundsource = [
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2FNewHiUserWhereGo.mp3?v=1595518879441",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2FBeep.mp3?v=1595632656444",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2FOkYouwouldliketogotowork.mp3?v=1595632659479",
    "",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2Fpedestrianwarningsound.mp3?v=1595939676728",
    "",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2FFastestRouteToWork.mp3?v=1598312406576",
    "",
    "https://cdn.glitch.com/3547a892-3bea-433c-8fba-a2b3c75eb938%2FGoingHomeAlternateRoute.mp3?v=1598312448572",
    "",
    "",
  ];

  var descriptionsource = [
    '<p class="description"><i>"Hi, user. Where would you like to go?"</i><br><br> This is the first screen that greets the user upon entering their car.' +
      " As this is a speculative design for a future car, it is assumed that the system has a way to determine who enters the car.</p>",
    '<p class="description"><i>"Beep"</i><br><br>Once IRIS (The system) has greeted their user, it can take input via voice command or by the touch-screen keyboard.' +
      " The beep affords the user to speak.</p>",
    '<p class="description"><i>"OK, you would like to go to work. Did I get it right?"</i><br><br>In case the system would be unsure about what the user said, it converses with the user to let him or her chime in if things went wrong.</p>',
    "<p class='description'>This is the view presented to the user(s) during a trip, when everything is going on as normal. <br><br>" +
      "<b>1)</b>The top panel presents the user summarized information of the trip such as arrival time, current time, travel progression. <br><br>" +
      "<b>2)</b>Next is an area dedicated for the IRIS voice assistant followed by a visual third-person view provided by the autononous car's LIDAR sensors.<br><br>" +
      "Lastly, the bottom part of the view is divided in three columns: <br><br><b>3)</b> A decision log providing information of past decisions to the left<br><b>4)</b> A map of the area in the middle. <br><b>5)</b> A " +
      '"planned actions"' +
      " column to give the user some transparency of what is going on.</p>",
    "<p class='description'>If something sudden would happen during the trip, such as a pedestrian suddenly crossing the street, this is quietly conveyed by a clear but not too disturbing signal, as to not disturb the passengers. <br><br> <i>Note: The sound effect is highly speculative, I am by no means close to being a sound designer. The idea was to have a signal that wasn't too disruptive, yet easily discernible.<i/></p>",
    '<p class="description">After this, the trip continues normally.</p>',
    '<p class="description"><i>"There was an accident at Southernway Street. <br>I determine this new route will be the fastest way to Work."</i> <br><br> Suppose an accident has just happened ahead. The Iris system gets notified and prepares a reroute as to not get stuck in the traffic. It also updates the map. </p>',
    '<p class="description">Consider, now, that one has been at work the whole day and would like to go home.</p>',
    '<p class="description"><i>"Going home. Since it is 15:06 and school is out, we will take an alternate route."</i> <br><br> Iris has learned about its environment and knows that a lot of traffic is likely to be imminent during this hour at a school area the car usually would take. It therefore re-directs to an alternative route as that is now the better choice.</p>',
    '<p class="description">It then takes the new route.</p>',
    '<p class="description"><br>And that was it for demo 1! Stay updated on the design changes made after the testing below, and see the full Demo 2 at the bottom of the page! </p>',
  ];

  var descriptionsource2 = [
    '<p class="description2"><i>"Hi, user. Where would you like to go?"</i><br><br> This is the first screen that greets the user upon entering their car.' +
      " As this is a speculative design for a future car, it is assumed that the system has a way to determine who enters the car.</p>",
    '<p class="description2"><i>"Beep"</i><br><br>Once IRIS (The system) has greeted their user, it can take input via voice command or by the touch-screen keyboard.' +
      " The beep affords the user to speak.</p>",
    '<p class="description2"><i>"OK, you would like to go to work. Did I get it right?"</i><br><br>Come back to this later!</p>',
    "<p class='description2'>This is the view presented to the user(s) during a trip, when everything is going on as normal. <br><br>" +
      "<b>1)</b>The top panel presents the user summarized information of the trip such as arrival time, current time, travel progression. <br><br>" +
      "<b>2)</b>Next is an area dedicated for the IRIS voice assistant followed by a visual third-person view provided by the autononous car's LIDAR sensors.<br><br>" +
      "Lastly, the bottom part of the view is divided in three columns: <br><br><b>3)</b> A decision log providing information of past decisions to the left<br><b>4)</b> A map of the area in the middle. <br><b>5)</b> A " +
      '"planned actions"' +
      " column to give the user some transparency of what is going on.</p>",
    "<p class='description2'>If something sudden would happen during the trip, such as a pedestrian suddenly crossing the street, this is quietly conveyed by a clear but not too disturbing signal, as to not disturb the passengers. <br><br> <i>Note: The sound effect is highly speculative, I am by no means close to being a sound designer. The idea was to have a signal that wasn't too disruptive, yet easily discernible.<i/></p>",
    '<p class="description2">After this, the trip continues normally.</p>',
    '<p class="description2"><i>"There was an accident at Southernway Street. <br>I determine this new route will be the fastest way to Work."</i> <br><br> Suppose an accident has just happened ahead. The Iris system gets notified and prepares a reroute as to not get stuck in the traffic. It also updates the map. </p>',
    '<p class="description2">Consider, now, that one has been at work the whole day and would like to go home.</p>',
    '<p class="description2"><i>"Going home. Since it is 15:06 and school is out, we will take an alternate route."</i> <br><br> Iris has learned about its environment and knows that a lot of traffic is likely to be imminent during this hour at a school area the car usually would take. It therefore re-directs to an alternative route as that is now the better choice.</p>',
    '<p class="description2">It then takes the new route.</p>',
    '<p class="description2"><br>And that was it for demo 1! Stay updated on the design changes made after the testing below, and see the full Demo 2 at the bottom of the page! </p>',
  ];

  var answersource = [
    ["← Previous", "Next slide →"],
    ["← Previous", '<i>"I' + "'m" + ' going to work</i>" →'],
    ["← Previous", '<i>"Yeah"</i> →'],
    ["← Previous", "Next slide →"],
    ["← Previous", "Next slide →"],
    ["← Previous", "Next slide →"],
    ["← Previous", "Next slide →"],
    ["← Previous", '<i>"I would like to go home"</i>'],
    ["← Previous", "Next slide →"],
    ["← Previous", "End slide →"],
    ["← Previous", "Restart"],
  ];

  $viewer = $(".viewer");
  $viewer2 = $(".viewer2");
  $demotextfield = $("#demotextfield");
  $demoslideheader = $("#demoslideheader");
  $demoslideheader_demo2 = $("#demoslideheader2");
  $index = 0;
  $index2 = 0;

  for (var i = 0; i < imgsource.length; i++) {
    $viewer.append("<img class='myslides' src=" + imgsource[i] + "></img>");
    $viewer2.append("<img class='myslides2' src=" + imgsource2[i] + "></img>");
    $demoslideheader.append(
      "<h3 class='slideheader'>Slide " +
        (i + 1) +
        " of " +
        imgsource.length +
        "</h3>"
    );

    $demoslideheader_demo2.append(
      "<h3 class='slideheader2'>Slide " +
        (i + 1) +
        " of " +
        imgsource.length +
        "</h3>"
    );

    $("#audio").append(
      "<audio controls class='mysounds' id='audio_id_" +
        i +
        "'style='margin-top: 8px; margin-bottom: 8px;'><source src=" +
        soundsource[i] +
        "type='audio/mp3'>(Sound not supported by browser)</audio>"
    );

    $("#audio2").append(
      "<audio controls class='mysounds2' id='audio2_id_" +
        i +
        "'style='margin-top: 8px; margin-bottom: 8px;'><source src=" +
        soundsource[i] +
        "type='audio/mp3'>(Sound not supported by browser)</audio>"
    );

    $("#demotextfield").append(descriptionsource[i]);
    $("#demotextfield2").append(descriptionsource2[i]);
  }

  $(".viewer .myslides:eq(0), .viewer2 .myslides2:eq(0)").css({
    display: "block",
    margin: "0 auto",
  });
  $(".viewer .mysounds:eq(0)").css({ display: "block", margin: "0 auto" });
  $(".slideheader:eq(0), .slideheader2:eq(0)").css("display", "block");
  $(".mysounds:eq(0), .mysounds2:eq(0)").css("display", "block");
  $(".description:eq(0), .description2:eq(0)").css({ display: "block" });
  $("#prev").css("display", "none");
  $("#next").html(answersource[0][1]);

  //For Rationale
  $("#transparency_button").css({
    "background-color": "black",
    color: "white",
  });
  $("#anthro_rationale, #infotodisplay_rationale").css("display", "none");

  $myslides = $(".myslides");

  function browse(value, demoversion) {
    $(".mysounds" + demoversion).css({ display: "none" });
    $(".myslides" + demoversion).css({ display: "none", margin: "0 auto" });
    $(".slideheader" + demoversion).css({ display: "none" });
    $(".description" + demoversion).css({ display: "none" });

    if (demoversion == "") {
      $index = show($index, value, demoversion);
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

      $("#prev").html(answersource[$index][0]);
      $("#next").html(answersource[$index][1]);

      $(".myslides" + demoversion + ":eq(" + $index + ")").css(
        "display",
        "block"
      );
      $(".mysounds" + demoversion + ":eq(" + $index + ")").css(
        "display",
        "block"
      );
      $(".slideheader" + demoversion + ":eq(" + $index + ")").css(
        "display",
        "block"
      );
      $(".description" + demoversion + ":eq(" + $index + ")").css(
        "display",
        "block"
      );
    } else if (demoversion == "2") {
      $index2 = show2($index2, value, demoversion);
      if ($index2 > imgsource.length - 1) {
        $index2 = 0;
        restartclicked = true;
      } else if ($index2 < 0) {
        $index2 = imgsource.length - 1;
      }
      if ($index2 == 0 /*&& restartclicked == false)*/) {
        $("#prev2").css("display", "none");
      } else {
        $("#prev2").css("display", "inline-block");
      }
      $("#prev2").html(answersource[$index2][0]);
      $("#next2").html(answersource[$index2][1]);

      $(".myslides" + demoversion + ":eq(" + $index2 + ")").css(
        "display",
        "block"
      );
      $(".mysounds" + demoversion + ":eq(" + $index2 + ")").css(
        "display",
        "block"
      );
      $(".slideheader" + demoversion + ":eq(" + $index2 + ")").css(
        "display",
        "block"
      );
      $(".description" + demoversion + ":eq(" + $index2 + ")").css(
        "display",
        "block"
      );
    }
  }

  $("#next, #next2").click(function () {
    if ($(this).parent().parent().parent().attr("id") == "demo1") {
      browse("next", "");
    } else if ($(this).parent().parent().parent().attr("id") == "demo2") {
      browse("next", "2");
    }
  });

  $("#prev, #prev2").click(function () {
    if ($(this).parent().parent().parent().attr("id") == "demo1") {
      browse("prev", "");
    } else if ($(this).parent().parent().parent().attr("id") == "demo2") {
      browse("prev", "2");
    }
  });

  $(".tab_button").click(function () {
    $(".tab_button").css({ "background-color": "transparent", color: "black" });
    $("#" + this.id).css({ "background-color": "black", color: "white" });
    $(".rationalecontent").css("display", "none");
    $($(this).attr("value")).css("display", "block");
  });

  function show($index, value, demoversion) {
    document
      .getElementById("audio" + demoversion + "_id_" + $index.toString())
      .pause();
    document.getElementById(
      "audio" + demoversion + "_id_" + $index.toString()
    ).currentTime = 0;
    if (value == "next") {
      $index++;
    } else if (value == "prev") {
      $index--;
    }
    if ([3, 4, 5, 7, 9, 10, 11].includes($index)) {
      $("#audio, #audio2").css("display", "none");
    } else {
      $("#audio, #audio2").css("display", "block");
    }
    return $index;
  }

  function show2($index2, value, demoversion) {
    document
      .getElementById("audio" + demoversion + "_id_" + $index2.toString())
      .pause();
    document.getElementById(
      "audio" + demoversion + "_id_" + $index2.toString()
    ).currentTime = 0;
    if (value == "next") {
      $index2++;
    } else if (value == "prev") {
      $index2--;
    }
    if ([3, 4, 5, 7, 9, 10, 11].includes($index2)) {
      $("#audio, #audio2").css("display", "none");
    } else {
      $("#audio, #audio2").css("display", "block");
    }
    return $index2;
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
