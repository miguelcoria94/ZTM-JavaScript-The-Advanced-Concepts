function jsengine(code) {
    return code.split(/\s+/)
}

console.log(jsengine("var a = 5"));

//inline caching

function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

