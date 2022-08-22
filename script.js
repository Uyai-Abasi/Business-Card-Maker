let formEle = document.forms[0]
let card= document.getElementsByTagName('div')[0]
let text = document.getElementsByClassName("text")[0]

formEle.addEventListener('submit', function(event){
    event.preventDefault();

    let form = event.currentTarget;

    let formData = new FormData(form)

    let obj = Object.fromEntries(formData.entries())

    // console.log(obj)
    displayData(obj)

    localStorage.details = JSON.stringify(obj)
    formEle.reset()
})


function displayData(data){
    let obj_length = Object.keys(data).length;
    
    
    for(let i = 0; i < obj_length; i++){
        let obj_key = Object.keys(data)[i]
        let obj_value = data[`${obj_key}`]
        
        text.children[i].innerText = `${obj_key.toUpperCase()} : ${obj_value}`
    }
    
}
let filtersOut = document.getElementById("capture")
let img = document.getElementsByTagName('img')[0]
let div = document.getElementsByClassName("buttons") 

let templates = [...div[0].children]

templates.forEach((element, index)=> {
    element.addEventListener("click", () =>{
         
        if (index == 0) {
            
                //  img.setAttribute('src', '/images/pattern.jpg')
                card.style.backgroundImage = "url('/images/stylish_liquidity_PSD_business_card_template.jpg')"
                text.children[2].classList.remove('business')
                text.children[0].classList.add('fullname')
            }
            
            
            else if (index == 1) {
                // img.setAttribute('src', '/images//ss.jpg' );
                card.style.backgroundImage = "url('/images/pattern.jpg')"
                text.children[1].classList.add('email')
                text.children[0].classList.add('fullname')
            }
            else if (index ==2){
                card.style.backgroundImage = "url('/images/modern-professional-business-card_1435-1124.jpg')"
                text.children[2].classList.add('business')
                text.children[0].classList.add('fullname')
        }
    })
})



console.log(templates)
// function screenshot(){

//     html2canvas(document.querySelector("#capture")).then(canvas => {
//         document.body.appendChild(canvas)
//     });
// }

function screenshot() {
    let opt = {
        margin:       1,
        filename:     'businesscard template',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
 const element = document.getElementById('capture')
 html2pdf()
 .set(opt)
 .from(element)
 .save()   
}