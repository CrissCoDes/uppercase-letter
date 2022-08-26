const uppercase = str =>{
    let upper = str.toLowerCase().splice(' ');
    console.log(upper);
    for (let i = 0; i < upper.length; i++){
        upper[i] = upper[i][0].toUpperCase() + upper[i].slice(1);
    }
    return upper.join(' ');
}



console.log(uppercase('there is a lot of posibilities'))