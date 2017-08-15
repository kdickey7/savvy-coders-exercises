var name = prompt('What is your name?');
 alert('Hello ' + name);

 var myCountry = prompt('what is your favorite country?');

 var freedomCheck = function(){
   if( myCountry === 'USA' ) alert('Sweet Land of Liberty');
   else alert('Sounds like you need some DEMOCRACY');
 };

 freedomCheck();
