// The scope of `random` is too loose 
//const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
let days 
  if (event === 'Marathon') {
  
  } else if (event === 'Triathlon') {
 
  } else if (event === 'Pentathlon') {
   
  }

  return days;
};
let name = 'Nala';
// The scope of `name` is too tight 
const logEvent = (name, event) => {

  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(name, event);
logTime(name, days);


const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
// will log warren and random event from randevent 
logEvent(name2, event2);
//will log warren and a day to train 
logTime(name2, days2);



