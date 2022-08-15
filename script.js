let filtersOut = document.getElementById("capture")

function screenshot(){

    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
    });
}

function change() {
    filtersOut.setAttribute('src', '/ss.jpg' );
}
change()

function pic (e) {
    
}


function pict (e) {
    
}