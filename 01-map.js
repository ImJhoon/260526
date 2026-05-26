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

// 객체명[프로퍼티명(리터럴 - 타자형태로 쳐서 표현할 수 있는 값)] = 값
o["aa"] = 1234;
// 식별자 규칙을 위반하지 않는 (공백, 특수문자) 표현의 경우에는 변수처럼 바로 작성할 수 있음
o.bb = 12345;

// map은 set이라는 전용 함수로 처리
// map.set(Key, Value)
// 해당 Key가 없으면 새로운 데이터 추가, 기존에 있는 Key라면 Value 수정

map.set("name", "Jaehoon");
map.set("age", 26);

// 데이터 불러오기
// 객체
console.log(o.aa, o.bb);
// map
// map.get(Key)
const name = map.get("name");
const age = map.get("age");

console.log(name);

// 객체에서 특정한 프로퍼티가 포함되었는지 in 으로 검사
// boolean 값 리턴
console.log("aa" in o);

// map에서는 has 사용
// map.has(key)

console.log(map.has("name"));

for (const c of map) {
  //변환과정 등을 거치지 않아도 오류 발생 x , iterable하다
  console.log(c);
}

// 객체로 of를 사용하려면
for (const c of Object.values(o)) {
  console.log(c);
}

// 객체였으면 object.* 외부 유틸리티를 썼어야하는....
console.log(map.entries());
console.log(map.keys());
console.log(map.values());

// 객체는 스스로 길이 관련된 게 X
console.log(Object.values(o).length);
console.log(map.size);

const m = new Map();
m.set("counter", 0); // 초기값이 있다면
if (m.has("counter") && typeof m.get("counter") == "number") {
  m.set("counter", m.get("counter") + 1); // +1
} else {
  m.set("counter", 0);
}
console.log(m);

// 2. map vs map
// 자료구조의 map과 함수로서의 map 개념 존재
