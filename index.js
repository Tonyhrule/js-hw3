//Question 1
function isString(a) {
  return typeof a === "string";
}
//Question 2
function isBlank(a) {
  return !Boolean(a);
}
//Question 3
function truncateString(a, b) {
  return a[b];
}
//Question 4
function stringParameterize(a) {
  return a.replace(/ /g, "-").toLowerCase();
}
//Question 5
function camelize(a) {
  a = a.split(" ");
  var d = "";
  for (b in a) {
    var c = a[b];
    d += c.replace(c[0], c[0].toUpperCase());
  }
  return d.replace(d[0], d[0].toLowerCase());
}
//Question 6
function randomize(a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
}
//Question 7
function strip(a) {
  return a.replace(/^\s+|\s+$/gm, "");
}
//Question 8
function phone(a) {
  if (a[0] == "(" && a[4] + a[5] == ")-" && a[9] == "-" && a.length == 14) {
    return true;
  }
  var b = a
    .toString()
    .replace(/\(/g, "")
    .replace(/\)/g, "")
    .replace(/-/g, "")
    .split("");
  if (b.length != 10) {
    return false;
  }
  var c = b.join("");
  return "(" + c.slice(0, 3) + ")-" + c.slice(3, 6) + "-" + c.slice(6);
}

//I did the code myself but when I was looking I found that the questions are from w3resourcse, so I used it for a little revising.
