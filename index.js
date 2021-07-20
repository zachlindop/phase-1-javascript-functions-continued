function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dog");

function mondayWork(act = "go to the office"){
    return `This Monday, I will ${act}.`
}

function wrapAdjective (flair = "*"){
    return function innerFunction (str = "special"){
        return `You are ${flair}${str}${flair}!`
    } 
}


function outer(greeting, msg="It's a fine day to learn") {
    const innerFunction =  function(name, lang="Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    }
    return innerFunction;
  } 