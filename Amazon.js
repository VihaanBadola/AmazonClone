var button = document.getElementById("continue")
var correct = "test@test.com"
// if (input !== correct && button.onclick == true) {
//     window.location.reload()
// }

function contpressed() {
    var input = document.getElementById("input");
    console.log(input.value)
    if (input.value != correct) {
        alert("incorrect. Try again")
        window.location.reload()
    } else {
        window.location.href = 'Password.html'
    }
}

