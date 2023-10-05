const method = "GET";
const url = "https://jsonplaceholder.typicode.com/todos";

// const ajax = new XMLHttpRequest()
// ajax.open(method, url)
// ajax.send()

// ajax.onreadystatechange = ()=>{
//     if(ajax.status === 200){
//         const result = JSON.parse(ajax.responseText)

//         result.map((item)=>{
//             console.log(item.title);
//         })
//     }else{
//         const error = 'terjadi error bro....'
//         console.log(error);
//     }
// }

// const getDataTodos = (method, url, callback) => {
//   const ajax = new XMLHttpRequest();
//   ajax.open(method, url);
//   ajax.send();

//   ajax.onreadystatechange = () => {
//     if (ajax.status === 200) {
//       const result = JSON.parse(ajax.responseText);
//       callback(null, result)
//     } else {
//       const error = "terjadi error bro....";
//      callback(error, null)
//     }
//   };
// };

// getDataTodos(method, url, (err, result) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     result.map((item) => {
//     console.log(item.title);
//   });
// });

// 2. sekarang coba handle proses diatas menggunakan promise dan handling juga error
// cara promise

const getDataTodos = (method, url) => {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();

    ajax.onreadystatechange = () => {
      if (ajax.status === 200) {
        const result = JSON.parse(ajax.responseText);
        resolve(result);
      } else {
        const error = "terjadi error bro....";
        reject(error);
      }
    };
  });
};

// getDataTodos(method, url)
//   .then((res) => {
//     res.map((item)=>{
//         console.log(item.title);
//     })
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const startApp = async (method, url) => {
  
  try {
    const result = await getDataTodos(method, url);
    result.map((item)=>{
      console.log(item.title);
    })
  } catch (error) {
    console.log(error);
  }
  finally{
    console.log('aplikasi selsai');
  }
};

startApp('GET',url )
