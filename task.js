//Task 1

var subjects = [25, 30, 29, 26, 30];
var total = 0;
for(var i in subjects) {
    total += subjects[i];
}
var mean = subjects.length;
var avg = total/mean;
document.write('Average of 5 subjects is: ' + avg);
document.write("<br><br>")

//Task2

var x = 10;
var y= 20;
if ( x > y){
  document.write("x is greater than y");
  document.write("<br><br>")
}
else{
  document.write("x is less than y");
  document.write("<br><br>")
}

//Task3
var value =[];
for (var i=0; i <5; i++){
  value[i]= prompt("Please enter number "+"" + (i));
}
var num = value.sort(function(a, b){return a-b});
document.write(num);

