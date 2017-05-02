(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {

  //when the <submit> button is clicked
  var imputdata = [];


  $('#infoButton').click(function() {


    console.log(title, subhead, author, email, dateline, intro, title);
  });

  $("#step-4").show();
  $("#step-5").show();


  function CSVToArray(strData, strDelimiter) {

    strDelimiter = (strDelimiter || "	");
    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp((
      // Delimiters.
      "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
      // Quoted fields.
      "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
      // Standard fields.
      "([^\"\\" + strDelimiter + "\\r\\n]*))"), "gi");
    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [
      []
    ];
    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;
    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec(strData)) {
      // Get the delimiter that was found.
      var strMatchedDelimiter = arrMatches[1];
      // Check to see if the given delimiter has a length
      // (is not the start of string) and if it matches
      // field delimiter. If id does not, then we know
      // that this delimiter is a row delimiter.
      if (strMatchedDelimiter.length && (strMatchedDelimiter != strDelimiter)) {
        // Since we have reached a new row of data,
        // add an empty row to our data array.
        arrData.push([]);
      }
      // Now that we have our delimiter out of the way,
      // let's check to see which kind of value we
      // captured (quoted or unquoted).
      if (arrMatches[2]) {
        // We found a quoted value. When we capture
        // this value, unescape any double quotes.
        var strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
      } else {
        // We found a non-quoted value.
        var strMatchedValue = arrMatches[3];
      }
      // Now that we have our value string, let's add
      // it to the data array.
      arrData[arrData.length - 1].push(strMatchedValue);
    }
    // Return the parsed data.
    return (arrData);
  }

  function CSV2JSON(csv) {
    var array = CSVToArray(csv);
    var objArray = [];
    for (var i = 1; i < array.length; i++) {
      objArray[i - 1] = {};
      for (var k = 0; k < array[0].length && k < array[i].length; k++) {
        var key = array[0][k];
        objArray[i - 1][key] = array[i][k]
      }
    }
    var json = JSON.stringify(objArray);
    var str = json.replace(/},/g, "},\r\n");
    return json;
  }
  $("#convert").click(function() {

    if ($("#csv").val().trim().length < 1) {
      alert("Please enter photo information");
    } else {
      var functionOne = function() {
        var r = $.Deferred();
        var textarea = $('#csv');
        textarea.val(textarea.val().replace(/</g, "&lt;"));
        textarea.val(textarea.val().replace(/>/g, "&gt;"));
        return r;
      };
      var functionFeatures = function() {
        var csv = $("#csv").val();
        var json = CSVToArray(csv);
        jEdit = json.splice(1);

        var title = document.getElementById('gTitle').value;
        var subhead = document.getElementById('gSubhead').value;
        var author = document.getElementById('gAuthor').value;
        var email = document.getElementById('gEmail').value;
        var dateline = document.getElementById('gDateline').value;
        var intro = document.getElementById('gIntro').value;
        var title = document.getElementById('gTitle').value;

        var output = '';

        output += '<div alignment="true" class="allContent"><div alignment="true" class="headerIntroNoImage"><div alignment="true" class="headerSectionNoImage"><h1 class="overlayText">' + title + '</h1><div alignment="true" class="headDisplay"><div alignment="true" class="byline">' + author + ' / Staff Writer, <a href="mailto:' + email + '">' + email + '</a><div alignment="true" class="custom-social-share">&nbsp;</div></div><div alignment="true" class="dateline">' + dateline + '</div></div></div></div><div alignment="true" class="container"><div alignment="true" class="row"><div alignment="true" class="col-md-8 col col-md-offset-2"><div alignment="true" class="subHead">' + subhead + '</div></div></div><div alignment="true" class="row imagedisplay">';

        jEdit.forEach(function(row) {
          if (row[3] == "yes") {
            if (jEdit.indexOf(row) == 3) {
              output += '<div alignment="true" class="imagebreak"><div class="adUnitWrapper containerMedia" alignment="true"><div class="adUnit" alignment="true"><div id="div-gpt-ad-mrec-21" alignment="true"><script alignment="true" type="text/javascript">cX.callQueue.push(["invoke", function() {googletag.cmd.push(function() {googletag.display("div-gpt-ad-mrec-21");});}]);</script></div></div></div></div>';

              '<div alignment="true" class="col imagebreak tall"><div alignment="true" class="leftbuffer">&zwj;</div><div alignment="true" class="innerimg"><img class="img-fluid" src="' + row[0] + '" alt="" width="100%/"><div alignment="true" class="containerPhotoCredit">' + row[1] + '</div></div><div alignment="true" class="containerPhotoCaption">' + row[2] + '</div></div>'
            } else if (jEdit.indexOf(row) == 6) {
              output += '<div alignment="true" class="imagebreak"><div class="adUnitWrapper containerMedia" alignment="true"><div class="adUnit" alignment="true"><div id="div-gpt-ad-mrec-22" alignment="true"><script alignment="true" type="text/javascript">cX.callQueue.push(["invoke", function() {googletag.cmd.push(function() {googletag.display("div-gpt-ad-mrec-22");});}]);</script></div></div></div></div>';

              '<div alignment="true" class="col imagebreak tall"><div alignment="true" class="leftbuffer">&zwj;</div><div alignment="true" class="innerimg"><img class="img-fluid" src="' + row[0] + '" alt="" width="100%/"><div alignment="true" class="containerPhotoCredit">' + row[1] + '</div></div><div alignment="true" class="containerPhotoCaption">' + row[2] + '</div></div>'
            } else {
              output +=
                '<div alignment="true" class="col imagebreak tall"><div alignment="true" class="leftbuffer">&zwj;</div><div alignment="true" class="innerimg"><img class="img-fluid" src="' + row[0] + '" alt="" width="100%/"><div alignment="true" class="containerPhotoCredit">' + row[1] + '</div></div><div alignment="true" class="containerPhotoCaption">' + row[2] + '</div></div>'
            }

          } else {
            if (jEdit.indexOf(row) == 3) {
              output += '<div alignment="true" class="imagebreak"><div class="adUnitWrapper containerMedia" alignment="true"><div class="adUnit" alignment="true"><div id="div-gpt-ad-mrec-21" alignment="true"><script alignment="true" type="text/javascript">cX.callQueue.push(["invoke", function() {googletag.cmd.push(function() {googletag.display("div-gpt-ad-mrec-21");});}]);</script></div></div></div></div>';
              output += '<div alignment="true" class="col imagebreak"><div alignment="true" class="innerimg"><img class="img-fluid" src="' + row[0] + '" alt="" width="100%/"><div alignment="true" class="containerPhotoCredit">' + row[1] + '</div></div><div alignment="true" class="containerPhotoCaption">' + row[2] + '</div></div>';
            } else if (jEdit.indexOf(row) == 6) {
              output += '<div alignment="true" class="imagebreak"><div class="adUnitWrapper containerMedia" alignment="true"><div class="adUnit" alignment="true"><div id="div-gpt-ad-mrec-22" alignment="true"><script alignment="true" type="text/javascript">cX.callQueue.push(["invoke", function() {googletag.cmd.push(function() {googletag.display("div-gpt-ad-mrec-22");});}]);</script></div></div></div></div>';
              output += '<div alignment="true" class="col imagebreak"><div alignment="true" class="innerimg"><img class="img-fluid" src="' + row[0] + '" alt="" width="100%/"><div alignment="true" class="containerPhotoCredit">' + row[1] + '</div></div><div alignment="true" class="containerPhotoCaption">' + row[2] + '</div></div>';
            } else {
              output += '<div alignment="true" class="col imagebreak"><div alignment="true" class="innerimg"><img class="img-fluid" src="' + row[0] + '" alt="" width="100%/"><div alignment="true" class="containerPhotoCredit">' + row[1] + '</div></div><div alignment="true" class="containerPhotoCaption">' + row[2] + '</div></div>';
            }
          }
        })

        output += "</div></div></div>";

        $("#json-features").val(output);

        $("#json-features").show();
        $("#step-6").show();
        $("#redo").show();

      };

      functionOne().done(functionFeatures());

      $('#preview').click(function() {
        $("#preview-container").show();
        var preview = $(".json:visible").val();
        $("#preview-container").html(preview);
        $("#json-features").show();

      });
      $('#redo').click(function() {
        // location.reload();
        $("#csv").val('');
        $("#json-features").val('');
        $(".json").val('');
      });
    }


  });
});

},{}]},{},[1]);
