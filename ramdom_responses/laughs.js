getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = msg => {
    const name = msg.from.first_name;
    const responses = [
        'HuEHueHue',
        'shaushaushua',
        'hehehehehe',
        'kkkkkkkkkkk',
        'hahahahaha',
        'hahahehehihi',
        'huhuhuhu',
        'rsrsrsrsrsrsrs',
        'huehuehue'
    ];

    const randomInt = getRandomInt(0, responses.length);
    return responses[randomInt];
}