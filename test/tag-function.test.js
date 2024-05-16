function tagFunction(array, ...args) {
    console.log(array);
    console.log(args);
}

test("tag function", ()=>{
    const name = "dedi";

    tagFunction`Hello ${name}!, how are you?`;
    tagFunction`Bye ${name}, see you letter`;
});

test("tag function sql", () => {
    const name = "dedi";
    const age = 29;

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age=${age}`; 
});