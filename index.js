//console.log("Hello world!")
// Add your code here
function submitData(userName="collins",userEmail="collinslikhomba@.gmail.com") { 
    
  return  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify( {userName:`${userName}`, userEmail:`${userEmail}` })
   })
 .then(res => res.json())
 .then(data => console.log(data))
.catch(error => 
    console.error("Error:", error)
)
}
submitData();

