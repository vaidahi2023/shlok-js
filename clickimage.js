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
    // image.addEventListener('click',function(e){
    //     console.log(e)
    //     alert(name+" image is clicked")
    //     console.log("image click")
    // },true)

    image.addEventListener('click',function(e)
    {
            console.log(e.target)  
            let remove=e.target
            remove.remove()
    })
    l1=document.querySelector("#a1")
    l1.addEventListener('click',function(e)
    {
        e.preventDefault()
    })

}

