function foo(){
  var value = "bar";

  debugger;
  value = "baz";
  return value;
}
foo();