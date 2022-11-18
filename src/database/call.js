const { data } = require("./db.json");

module.exports = getOrderedResult = () => {
  //   let result = {};
  //   let abuelos = [];

  //   for (let i in data) {
  //     if (data[i].id_padre === null && data[i].id_abuelo === null) {
  //       abuelos.push(data[i]);
  //     }
  //     result = { abuelo: abuelos };
  //   }

  //   for (let i in abuelos) {
  //     let padres = [];
  //     for (let j in data) {
  //       if (abuelos[i].numserie === data[j].id_abuelo) {
  //         padres.push(data[j]);
  //         // console.log("holaaa", padres);
  //       }
  //     }
  //     abuelos[i].padres = padres;
  //   }

  //   for (let i in abuelos) {
  //     for (let j in abuelos[i].padres) {
  //       let hijos = [];
  //       for (let k in data) {
  //         if (abuelos[i].padres[j].numserie === data[k].id_padre) {
  //           hijos.push(data[k]);
  //         }
  //       }
  //       abuelos[i].padres[j].hijos = hijos;
  //     }
  //   }

  //   // console.log(abuelos[0].padres[1].hijos);

  //   let resuljson = JSON.stringify(abuelos);
  //   return abuelos;
  //   console.log(abuelos);
  const abuelos = data.filter(
    (e) => e.id_padre === null && e.id_abuelo === null
  );
  for (let i in abuelos) {
    let padres = data.filter((e) => e.id_abuelo === abuelos[i].numserie);

    padres.map((e) => {
      e.hijos = data.filter((elem) => elem.id_padre === e.numserie);
    });
    abuelos[i].padres = padres;
  }

  console.log(abuelos[0].padres[1]);
  return abuelos;
};
