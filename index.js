function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(hello) {
  console.log('HELLO')
  return hello.toUpperCase();
}
logShout(hello)

function logWhisper(hello) {
  console.log('hello')
  return hello.toLowerCase();
}
logWhisper(hello)


function sayHiToGrandma(hello) {
 if (hello.toLowerCase() === hello) 
 return 'I can\'t hear you!';
}

function sayHiToGrandma(HELLO){
 if (Hello.toUpperCase() === HELLO) 
 return 'YES INDEED!';
}




