const penjumlahan = (val1, val2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof val1 !== "number" || typeof val2 !== "number") {
        return reject("maaf parameter yang anda masukan salah");
      }
      const result = val1 + val2;
      resolve(result);
    }, 1000);
  });
};

const pengurangan = (val1, val2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = val1 - val2;
      resolve(result);
    }, 1000);
  });
};

// pengurangan(20, 10)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

const startApp = async () => {
  try {
    console.log("perintah 1");
    const resultPengurangan = await pengurangan(20, 10);
    console.log(resultPengurangan);
    console.log("perintah 3");
    const resultPenjumalahan = await penjumlahan(resultPengurangan, "risano");
    console.log(resultPenjumalahan);
    console.log("perintah 5");
  } catch (error) {
    console.log(error);
  }
};

// const myError = new Error("ada terjadi error bro...");
// console.log(myError.message);
// console.log(myError);

startApp();
// async function startApp(){

// }
