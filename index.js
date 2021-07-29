function call()
{
let headLines=document.getElementById("headLines");
let imagePart=document.getElementById("imagePart");
let abstractCard=document.getElementById("abstractCard");
let dateCard=document.getElementById("dateCard");

   //let sectionCard=document.getElementById("sectionCard");
const url='https://api.nytimes.com/svc/topstories/v2/world.json?api-key=jBd3LeAfHxfXJytajzAZCkIrilzoTlTG';
fetch(url,{method:'GET',
headers: {
    'content-type':'application/json'
}
})
.then(function(res)
{
return res.json();
}).then(function(data)
{
console.log(data.results)
// for(i in data.results)
// {
    // console.log(data.results[i].abstract)
    // console.log(data.results[i].byline)
    // console.log(data.results[i].created_date)
    // console.log(data.results[i].item_type)
    // console.log(data.results[i].title)
    //console.log(data.results[i].short_url)
    let h5=document.createElement("h5");
    h5.innerHTML=data.results[0].section;
    let h3=document.createElement("h3");
    h3.innerHTML=data.results[0].title;
    let img=document.createElement("img")
    img.setAttribute('src',data.results[0].multimedia[0].url);
    let h6=document.createElement("h6");
    h6.innerHTML=data.results[0].published_date;
    let p=document.createElement("p");
    p.innerHTML=data.results[0].abstract;
    
    headLines.append(h5);
    headLines.appendChild(h3);
    imagePart.appendChild(img);
    dateCard.appendChild(h6);
    abstractCard.appendChild(p);
    
    // console.log(data.results[i].abstract)

//}
})
.catch((err)=>
{
console.log(err)
})
}