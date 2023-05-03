// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/
function dosyaAdiniBul(path) {
  const array=path.split("/");
  const length=array.length;
  return array[length-1];

  
}

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(sayıArray) {
  let toplam=0;
  if(typeof(sayıArray) == 'number') 
  return sayıArray
  if(sayıArray.length==0)
  return null;
 for (let i in sayıArray){
  toplam+=sayıArray[i];
  console.log(toplam,sayıArray.length);
 }
return toplam/(sayıArray.length)
}

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik
   ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında
    soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(sayıArray,ortalamaBul) {
  const ortalamadanBuyukler=[];
  if(sayıArray.length==1)
     return sayıArray;
  if(typeof(sayıArray) == 'number') {
    ortalamadanBuyukler.push(sayıArray);
     return ortalamadanBuyukler
  }
    if(sayıArray.length==0)
      return null;
  const ortalama=ortalamaBul(sayıArray);
  
  for(let i in sayıArray){
    
    if (sayıArray[i]>ortalama)
        ortalamadanBuyukler.push(sayıArray[i]);

  }
  return ortalamadanBuyukler;
}
console.log(ortalamadanBuyukleriBul(5));
/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
