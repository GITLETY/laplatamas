const publicidad = document.querySelector('#apiml');

fetch('https://api.mercadolibre.com/sites/MLA/search?q="libro de poesia"=5&offset=0#json')
.then((response) => response.json())
.then((data) => {
    // console.log(data)
const articles = data.results
for(let i=0; i<3; i++) {

publicidad.insertAdjacentHTML(
    "beforeend",
`<div class=cajalibro>
<h5>"${articles[i].title}"</h5>
<img id=promo src="${articles[i].thumbnail}" alt="libro"/>
</div>;`
)
}
})
.catch((error) => {
        console.log(error);

})

