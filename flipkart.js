let input_search = document.getElementById("search_input")
let form_search = document.getElementById('search_form')
let recent_searchEl = document.querySelector(".recent_search")

let recentArray =["mobile","phone","watch"]
form_search.addEventListener("submit",(e)=>{
    e.preventDefault()  
  recentArray.unshift(input_search.value)
  console.log("recentArray")
  renderRecent()
})
function renderRecent(){
let recent_search_html = ''
recentArray.forEach(el =>{
    console.log(el);
    recent_search_html +=`
    <div class="recentlist">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>${el}</p>
    </div>
    `
})
recent_searchEl.innerHTML = recent_search_html
}
renderRecent()




