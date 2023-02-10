const pass = document.getElementById("form-pass");
const req = document.getElementById("req")
// .addEventListener("focusout", myScript);
let g = document.querySelector('#req :nth-child(1)')
let g2 = document.querySelector('#req :nth-child(2)')
let g3 = document.querySelector('#req :nth-child(3)')
let g4 = document.querySelector('#req :nth-child(4)')
let reg2 = new RegExp('.*[a-z].*')
let reg3 = new RegExp('.*[A-Z].*')
let reg4 = new RegExp(/^(?=.*[-+_!@#$%^&*., ?])/)

function ReqColor(obj,bool) {
    if (bool === true) {
        obj.style.color = `rgb(25,222,25)`
        obj.style.backgroundImage = `url(./media/green.svg )`
    } else {
        obj.style.color = `rgb(222,25,25)`
        obj.style.backgroundImage = `url(./media/red.svg )`
    }
}

pass.oninput = function() {
if (req.classList.contains("hidden")) {req.classList.remove("hidden")}
this.value.length >= 8 ? ReqColor(g,true) : ReqColor(g,null);
reg2.test(this.value) === true ? ReqColor(g2,true) : ReqColor(g2,null);
reg3.test(this.value) === true ? ReqColor(g3,true) : ReqColor(g3,null);
reg4.test(this.value) === true ? ReqColor(g4,true) : ReqColor(g4,null);
}
// pass.addEventListener("input", (event) => {
//   if (pass.validity.typeMismatch) {
//     pass.setCustomValidity("TEST");
//   } else {
//     pass.setCustomValidity("");
//   }
// });
pass.addEventListener("click", (event) => {
   req.classList.remove("hidden")
});
pass.addEventListener("focusout", (event) => {
    req.classList.add("hidden")
 });