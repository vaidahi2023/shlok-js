let images =document.querySelectorAll('img')
console.log(images)

// for(let i=0;i<images.length;i++)
// {
//     let image=images[i]
//     console.log(image)
//     image.addEventListener('click',function(){
//         alert("image is clicked")
//         console.log("image click")
//     })
// }

for(let i=0;i<images.length;i++)
{
    let image=images[i]
    let name=images[i].getAttribute("value")
    console.log("name="+name)
    console.log(image)
    image.addEventListener('click',function(e){
        console.log(e)
        alert(name+" image is clicked")
        console.log("image click")
    },true)
}

