fetch("https://apis.scrimba.com/jsonplaceholder/posts")
 .then(response => response.json())
 .then(data => {
      const arr = data.slice(0,5)
      let html = ""
      for(let post of arr){
        html +=  `<h3>${post.title}</h3>
                  <p>${post.body}</p>
                  <hr />`
      }
    document.querySelector(".text").innerHTML = html
})

document.getElementById("new-post").addEventListener("submit",function(e){
   e.preventDefault()
   const ptitle = document.getElementById("post-title").value
   const pbody = document.getElementById("post-body").value
   const data = {
     title: ptitle,
     body: pbody

   }
    const options = {
     method: "POST",
     body: JSON.stringify(data),
     headers: {
       "Content-Type" : "application/json"
     }
   }
   fetch("https://apis.scrimba.com//jsonplaceholder/posts", options)
                  .then(res => res.json())
                  .then(data => console.log(data))
    
         
     
          document.querySelector(".text").innerHTML = 
          `<h3>${post.title}</h3>
          <p>${post.body}</p>
          <hr />
          ${document.querySelector(".text").innerHTML}
          ` 
})
