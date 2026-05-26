// Map
// 1. Map Vs Object
const o = {};
o.a = "a";
o.b = "b";
o["c d"] = "c d";

console.log(o);

o["e"] = () => {
  console.log("e");
};

console.log(o);

/* TypeError: o is not iterable
for (const a of o){
    console.log(a);
}
*/

//-----------------------------------------
const map = new Map(); // new - 생성자 -> Map()
// 데이터를 관리하는 여러 함수를 내장
// map.get, set, has...

// TIl)왜 별도의 Map이 Js에서 필요하게 되었는가? (Object로 충분하지 않나?)

for (const c of map) {
  //변환과정 등을 거치지 않아도 오류 발생 x , iterable하다
}
