
let formEle = document.forms[0]
let card= document.getElementsByTagName('div')[0]


formEle.addEventListener('submit', function(event){
    event.preventDefault();

    let form = event.currentTarget;

    let formData = new FormData(form)

    let obj = Object.fromEntries(formData.entries())

    displayData(obj)

    formEle.reset()
})


function displayData(data){
    let obj_length = Object.keys(data).length;
    
    
    for(let i = 0; i < obj_length; i++){
        let obj_key = Object.keys(data)[i]
        let obj_value = data[`${obj_key}`]
        
        card.children[i].innerText = `${obj_key.toUpperCase()} : ${obj_value}`
    }
    
}