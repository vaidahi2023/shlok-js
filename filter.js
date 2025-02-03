const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// myCoding.forEach((l1)=>{
//     console.log(l1.languageName)
// })

// const language=myCoding.forEach((l1)=>{
//     //console.log(l1.languageName)
//     return l1.languageName
// })

//const language=myCoding.filter((l1)=> l1.languageName)
//const language=myCoding.filter((l1)=> { return l1.languageName})
const language=myCoding.filter((l1)=> {
    if(l1.languageName==='java')
        return l1.languageName
})
console.log(language)
