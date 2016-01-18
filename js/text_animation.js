/*
  This file is used to list out skills
  Author: Rohan Subramaniam
*/
var str ="#include <vector>\n#include <iostream>\n\nstruct Coder{\n\tstd::string best_skill;\n\tstd::vector<std::string> proficient_with;\n\tstd::vector<std::string> know_some;\n\tbool readyForMore;\n};\nint main(){\n\tCoder Rohan;\n\tCoder *p = &Rohan;\n\tp->best_skill = \"Java\";\n\tp->proficient_with = { \"Python\", \"C++\", \"Git\" };\n\tp->know_some = { \"JavaScript\", \"HTML\", \"CSS\", \"Flask\" };\n\tp->readyForMore = true;\n\treturn 0;\n}";

var i = 0;
var cur = '_';
var tab = "&#160;&#160;&#160;&#160;&#160;&#160;&#160;";


var timer = window.setInterval(addText,50);


function addText() {
  if(i < str.length){
    if(str.charAt(i) == '\n'){
      x = document.getElementById("skills").innerHTML.substring(0, document.getElementById("skills").innerHTML.length-1);
      document.getElementById("skills").innerHTML = x + "<br />" + cur;
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
    var cursor = window.setInterval(toggleCursor,500);
  }
}

function toggleCursor(){
  x = document.getElementById("skills").innerHTML;
  if(x.charAt(x.length-1) == cur){
    console.log("d");
    document.getElementById("skills").innerHTML = document.getElementById("skills").innerHTML.substring(0, document.getElementById("skills").innerHTML.length-1);
  }else{
    document.getElementById("skills").innerHTML += cur;
  }
}
