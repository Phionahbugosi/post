//condition statements
/* */
const IG_MIN_AGE=13;
let susan={
    age:12
};
if(susan.age>=IG_MIN_AGE){
    console.log('congrats you can join instagram');

}
//exit between 45-60
let oldiesage=45;
if(oldiesage>=45&&oldiesage<=60){
    console.log("you should leave instagram");
}
//if else,else if
if(susan.age>=IG_MIN_AGE){
    console.log('congrats you can join instagram');
}
else{
    console.log("sorry you cant watch reels yet");
}
//else if
if(susan.age>=IG_MIN_AGE){
    console.log('congrats you can join instagram');

}
else if(susan.age==IG_MIN_AGE-1){
    console.log('you have 2 years until you join')
}
else{console.log('please concetrate on school')
}
// switch case
switch(susan.age){
    case susan.age>=IG_MIN_AGE:
        console.log('')

}
//(condition)?truethy:falsey;
let ageGroup=(susan.age>=18) ? "adult" :"minor";