/* 4 : const legumes = ["batata", "cenoura", "mandioca", "abobora", "pepino"];

legumes.forEach((element) => console.log(element));*/

/* 5 let products = [
  { barCode: 1, name: "Sabão em pó", brand: "OMO", qtd: 2, price: 15.0 },
  { barCode: 2, name: "Laranja", brand: "Fazenda Capão", qtd: 2, price: 4.99 },
  { barCode: 3, name: "Arroz", brand: "Prato Fino", qtd: 3, price: 19.9 },
  { barCode: 4, name: "Contra Filé", brand: "Friboi", qtd: 1, price: 32.0 },
];

//codigo de  barras, nome do produto, preco do produto, preco total da compra

let comprasDeProdutos = products.map(function (item1) {
  return {
    barCode: item1.barCode,
    name: item1.name,
    price: item1.price,
  };
});

comprasDeProdutos.forEach(function (item1) {
  console.log(
    ` ${item1.barCode} - ${item1.name.padEnd(
      30
    )} - ${item1.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`
  );
});*/

/* 6
let colors = ["Pink", "Orange", "Red", "Purple"];
console.log(colors.indexOf("Pink", 15));

 Passando no segundo parâmetro o número 15, o retorno será -1, pois não irá achar a palavra “PINK” na string, mesmo que ela apareça duas vezes.*/

/*7: 
 let names = ["Maria", "Grazielle", "Sarah", "Sophia", "Valentina"];
 result = names.length - 2 + 1;
 console.log(result);
 
 resultado: 4*/

/*8: PS C:\Users\Artemiza rocha\Documents\tabela>node script.js
 [ 'JavaScript', 'PHP', 'Python', 'Cobol', 'Java' ]*/

/*9: let languages = ["C#", "JavaScript", "PHP", "Python", "Cobol", "Java"];
 console.log(languages);
 
 PS C:\Users\Artemiza rocha\Documents\tabela> node script.js
 [ 'C#', 'JavaScript', 'PHP', 'Python', 'Cobol', 'Java' ]*/

/*10: PS C:\Users\Artemiza rocha\Documents\tabela> node script.js
 [ 'C#', 'JavaScript', 'PHP', 'Python' ]
 PS C:\Users\Artemiza rocha\Documents\tabela
 
 PS C:\Users\Artemiza rocha\Documents\tabela> node script.js
 [ 'C#', 'JavaScript', 'PHP', 'Python' ]*/

/*11: // 8, 10, 15

 let idades = [25, 10, 15, 30, 19, 8];
 
 idades = idades.filter((item) => item < 18);
 
 console.log(idades);*/

/*12: node script.js 
[ 'Gabriel Queiroz', '(31)99564-5489', 'rua bom senhor' ]*/

/*13: let carros = [
    { marca: "FIAT", modelo: "Palio Economy", ano: "2012" },
    {
      marca: "HYUNDAI",
      modelo: "HB20",
      ano: "2019",
      motor: " 1.6",
      cor: "prata",
    },
  ];
  
  console.log(Object.keys(carros));
  PS C:\Users\Artemiza rocha\Documents\tabela> node script.js
  [ '0', '1' ]*/

/*14: Abrindo qualquer navegador, no console, separa o aquivo.js coloca o nome específico , ai vai vamos pegar uma linda e clicar na numeração dela e fazer o breakpoint, ou seja um ponto de parada nessa linha.
  Toda vez que o navegador tentar ler aquela linha, não vai funcionar e assim para a execução.*/

/* 15: $f = floatval('55.6'); // $f = 55.6a;*/
