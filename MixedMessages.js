//random number generator
const randomNumGen = (num) => {
    return Math.floor(Math.random() * num)
};
//random message component in property of string
const randomMessage = {
    signComp: ['Barcelona', 'Tenerife', 'Salt Lake City', 'Oslo'],
    fortuneComp: ['silly', 'daft', 'stupid', 'bonkers'],
    adviseComp: ['things', 'schedules', 'plans', 'thoughts']
}

//variable for taking all message
let allMessage = [];

//message generator function and set some output on allMessage
for (let comp in randomMessage) {

    //message generator all property length generator
    const numFromRandomNum = randomNumGen(randomMessage[comp].length);
    //conditional for setting message
        if (comp === 'signComp') {
        allMessage.push(`Wait you are going to ${randomMessage[comp][numFromRandomNum]}, have fun.`)
} else if (comp === 'fortuneComp') {
        allMessage.push(`You are having a really ${randomMessage[comp][numFromRandomNum]} time.`)
} else if (comp === 'adviseComp') {
        allMessage.push(`You need to sort your ${randomMessage[comp][numFromRandomNum]} out.`)
} else {
        allMessage.push('An error occured, try again later.')
}

};

const formateAllMessage = (argu) => {
    const formatted = argu.join('\n');
    console.log(formatted);
};

//call formulateAllMessage to formulate all message from allMessage array
formulateAllMessage(allMessage)