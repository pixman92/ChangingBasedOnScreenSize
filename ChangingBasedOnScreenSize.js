var obj = {};
// var dynamicVar;
function changingBasedOnScreenSize(dynamicVar, classOfDevice, elem, attribute, newValue) {

  //dynamicVar = an Unique name, given to a dynamic Name, pushed into obj (object variable), that allows for later commands to reference the same variable
   
  //dynamicVar - critical! allows for differenciating between Screen Sizes - while manipulating a single element!
  
  //going up on Int(s) of 'classOfDevice' -> correlates with bigger screen sizes
  if (classOfDevice == '1') {
    obj[dynamicVar] = window.matchMedia("(min-width: 325px)  and (max-width:425px)");

  }
  if (classOfDevice == '2') {
    obj[dynamicVar] = window.matchMedia("(min-width: 426px)  and (max-width:600px)");

  }
  if (classOfDevice == '3') {
    obj[dynamicVar] = window.matchMedia("(min-width: 601px)  and (max-width:1200px)");

  }



  function runningMatch(dynamicVar, elem, attribute, newValue) {
    //changing to new Attribute is helpful here, but I may (?) need some logic to Remove old Attribute
    if (obj[dynamicVar].matches) {
      console.log('matched!!!');
      CSSChange(elem, attribute, '');
      CSSChange(elem, attribute, newValue);
    }
   }
      
    obj[dynamicVar].addListener(function(){
      runningMatch(dynamicVar, elem, attribute, newValue);
    });
}
//==========================
function restore(elem, attribute, newVar){
  CSSChange(elem, attribute, newVar);
}
//==========================


// =========JavaScript================
function CSSChange(query, property, newValue) {
   console.log('selected?', document.querySelector(query.toString()));
  
   document.querySelector(query.toString()).style[property.toString()] = newValue.toString();
  
  console.log(obj);
  
}
