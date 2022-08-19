// let profile = JSON.parse
let profile =JSON.parse(localStorage.getItem('details'))
// console.log(profile)
let text = document.getElementsByTagName("div")[0]

console.log(text.children)

let counter = 0;

for(let key in profile){
// console.log(key, profile[key])
text.children[counter].innerText = `${key} : ${profile[key]}`
// console.log(counter)
counter++

}