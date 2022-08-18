let filtersOut = document.getElementById("capture")
let img = document.getElementsByTagName('img')[0]
let div = document.getElementsByClassName("buttons")

let templates = [...div[0].children]

templates.forEach((element, index)=> {
    element.addEventListener("click", () =>{
         
        if (index == 0) {
            
                 img.setAttribute('src', '/pattern.jpg')
            }
            
            
            else if (index == 1) {
                img.setAttribute('src', '/ss.jpg' );
                
            }
            else if (index ==2){
                img.setAttribute('src', 'dogg.jpg');

        }
    })
})



console.log(templates)
function screenshot(){

    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
    });
}

// function change() {
//     img.setAttribute('src', '/patter.jpg')
// }


// function pic () {
//     img.setAttribute('src', '/ss.jpg' );
    
// }


// function pict (e) {
    
// }