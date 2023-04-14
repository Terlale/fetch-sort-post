// const arr = []

// fetch(`https://northwind.vercel.app/api/suppliers/`)
// .then((res) => res.json())
// .then((data) => {
//     arr.push(data)
// })

// console.log(arr)



// const arr = []
// fetch(`https://northwind.vercel.app/api/suppliers/`)
// .then((res) => res.json())
// .then((data) => {
//     const city = data.filter((item) => item.address.city === "Paris")
//     arr.push(city)
// })

// console.log(arr)


// fetch(`https://northwind.vercel.app/api/suppliers/`)
// .then((res) => res.json())
// .then((data) => {
//    data.sort((a, b) => a.id - b.id)
//    console.log(data)
// })




// const Post = (companyName, contactName) => {
//     fetch(`https://northwind.vercel.app/api/suppliers/`, {
//         method: "Post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             companyName: companyName,
//             contactName: contactName,
//         })
//     })
//     .then((res)=>res.json())
//     .then((data) => {
//         console.log(data)
//     })
// }




// const newContact = { contactName: 'Terlale' }

// fetch(`https://northwind.vercel.app/api/suppliers/20`,{
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newContact)
// })
// .then((res)=> res.json())
// .then((data)=> {
//      console.log(data)
// })   //????????????




// const companyName = "Leka Trading"

// fetch(`https://northwind.vercel.app/api/suppliers/20`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         companyName: companyName
//     })
// })
// .then((res) => res.json())
// .then((data) => {
//     console.log(data);
// })










