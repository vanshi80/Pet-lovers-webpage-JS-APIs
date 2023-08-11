// this was the code written with the help of fetch function
let url="https://catfact.ninja/fact";
let url2="https://dog.ceo/api/breeds/image/random";

// now creating a button upn clicking it the facts will get generated and add to our html file
let btn=document.querySelector(".catbtn");
let currentfact=null;
let ul=document.querySelector("ul");
btn.addEventListener("click",async()=>{
    let fact=await getcatfact(); 
    console.log(fact);
    let catfact=document.createElement("li");
    catfact.innerText=fact;
    ul.appendChild(catfact);
    ul.classList.add("border");
    currentfact=catfact;
});


let btn2=document.querySelector(".dogbtn");
let currentdogImg=null;
let div=document.querySelector("#dog");
btn2.addEventListener("click",async()=>{
    let image=await getdogimg(); 
    let dogimg=document.createElement("img");
    dogimg.setAttribute("src",image.message);
    div.appendChild(dogimg);
    currentdogImg=dogimg;
}) 
async function getcatfact(){
    try{
        if(currentfact){
            ul.removeChild(currentfact);
            ul.classList.remove("border");
        }
        let res=await axios.get(url);
            return res.data.fact;        
    }
    catch(err){
        console.log("Error",err);
    }
}
async function getdogimg(){
    try{
        if(currentdogImg){
            div.removeChild(currentdogImg);
        }
        let res=await axios.get(url2);
        return res.data;
    }
    catch(e){
        console.log("Error",e);
    }
}
