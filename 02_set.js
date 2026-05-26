// Set
// 집합 -> 스스로가 다른 것과 구분되는 원소인 자료형
// 중복 없는 배열

// object, map도 보면 특정 '키'에는 한 값만 들어갈 수 있음
const map = new Map();

// 덮어쓰기
map.set("a", 1234);
map.set("a", 5678);
map.set("a", 9101112);

console.log(map.entries());

const s = new Set();
// 키를 넣는 부분이 없음, 값이 곧 키다
// 중복 허용 x
s.add(1234);
s.add(1234);
console.log(s);

// entry 형태로 넣으면 바로 기존의 객체나 배열 등을 바탕으로 생성할 수 있음
const mm = new Map(Object.entries({ a: 1234, b: 5678 }));
console.log(mm);

// 같은 값을 감지를 해서 정리를 해버림
// 배열 중에 같은 값이 있는지를 감지해서 정리하는 역할
const ss = new Set(["a", "a", "a", "b", "b", "c"]);
console.log(ss);

// for문으로 객체, 배열, 맵 등을 사용해서 중복 정리하기를 할 순 있는데
// 속도도 느리고 구현 난도도 적지 않은 편 (Set 직접 다른 자료구조로 구현하기)

console.log("s.has(1234)", s.has(1234));
s.delete(1234);
console.log("s.has(1234)", s.has(1234));

s.add(1234);
s.add(12345);
s.add(123456);

// s.has, s.size
for (const c of s) {
  console.log(c);
}

// set vs set
// 자료구조 set : 1. 밸류가 곧 키인 (중복 제거 연산) 2. 집합 연산을 지원하는 자료구조 (ex: 합집합, 교집합, 차집합, 부분집합 등)
// 일반적 프로그래밍에서의 set : 접근자 setter -> 메서드로서 데이터를 수정하는 방법...

// set 되지 않은 키 호출 했을 때
const o = {};
console.log(o.a); //undefined
const mmm = new Map();
console.log(mmm.get("a")); //undefined
// Java -> 없는 키를 호출 했을 때 null
// Java (get) : 없는 것 호출하면 null.

// ... 연사자를 사용을 해서...
const oo = { a: 1234, b: 5678 };
console.log(...Object.entries(oo));
const aa = ["a", "a", "a", "c", "d", "d"];
const sss = new Set(aa);
const aa2 = [...sss]; // set은 for문으로 push해서 넣든가 해야 하는데..
console.log(aa, sss, aa2);
