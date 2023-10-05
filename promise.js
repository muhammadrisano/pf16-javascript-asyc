const janji = (ditunaikan) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ditunaikan) {
        return resolve(`janji ditunaikan ${ditunaikan}`);
      } else {
        return reject("janji tidak ditunaikan");
      }
    }, 1000);
  });
};

// const result = janji(true)

// console.log(result);
// janji(false)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

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

penjumlahan(20, 40)
  .then((res) => {
    return pengurangan(res, 10)
   
  })
  .then((response)=>{
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
