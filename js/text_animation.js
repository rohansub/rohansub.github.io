/*
  This file is used to list out skills
  Author: Rohan Subramaniam
*/

var str ="#include <vector>\n#include <iostream>\n\nstruct Coder{\n\tstd::string bestSkill;\n\tstd::vector<std::string> profictientWith;\n\tstd::vector<std::string> knowAbout;\n\tbool readyForMore;\n};\nint main(){\n\tCoder Rohan;\n\tCoder *p = &Rohan;\n\tp->bestSkill = \"Java\";\n\tp->proficientWith = { \"Python\", \"C++\", \"Git\" };\n\tp->knowAbout = { \"JavaScript\", \"HTML\", \"CSS\", \"Flask\" };\n\tp->readyForMore = true;\n\treturn 0;\n}";

var i;
// var rowNumber;
var cur = '_';
var tab = "&#160;&#160;&#160;&#160;&#160;&#160;&#160;";
var curs = window.setInterval(toggleCursor,500);
var cursorOn = true;
var timer;

function start(){
  cur = '_';
  tab = "&#160;&#160;&#160;&#160;&#160;&#160;&#160;";
  document.getElementById("skills").innerHTML = ">&#160;&#160;&#160;&#160;&#160;&#160;&#160;_";
  cursorOn = true;
  // rowNumber = 2;
  i=0;
  window.clearInterval(timer);
  window.clearInterval(curs);
  timer = window.setInterval(addText,50);
}



function addText() {
  if(i < str.length){
    if(str.charAt(i) == '\n'){
      x = document.getElementById("skills").innerHTML.substring(0, document.getElementById("skills").innerHTML.length-1);
      // if(rowNumber == 10){tab = "&#160;&#160;&#160;&#160;&#160;";}
      document.getElementById("skills").innerHTML = x + "<br />" + ">"+ tab + cur;
      // rowNumber++;
    }else if(str.charAt(i) == '\t'){
      x = document.getElementById("skills").innerHTML.substring(0, document.getElementById("skills").innerHTML.length-1);
      document.getElementById("skills").innerHTML = x + tab + cur;
    }else{
      x = document.getElementById("skills").innerHTML.substring(0, document.getElementById("skills").innerHTML.length-1);
      document.getElementById("skills").innerHTML =  x + str.charAt(i) + cur;
    }
    i++;
  }else{
    window.clearInterval(timer);
    curs = window.setInterval(toggleCursor,500);
  }
}

function toggleCursor(){
  x = document.getElementById("skills").innerHTML;
  if(cursorOn == true){
    document.getElementById("skills").innerHTML = document.getElementById("skills").innerHTML.substring(0, document.getElementById("skills").innerHTML.length-1);
  }else{
    document.getElementById("skills").innerHTML += cur;
  }
  cursorOn = !cursorOn;
}
