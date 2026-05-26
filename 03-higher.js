// 고차함수 -> 함수를 파라미터로 받거나 리턴하는 경우

// sort
const a = [1, 13, 5, 8, 3];
console.log("sort 전 : ", a);
//정렬한다 -> for문?
// 배열 내장 메서드
// Js의 기본 정렬은 문자열화 시킨 다음에 정렬 수행
console.log(a.sort()); // [ 1, 13, 3, 5, 8 ]

console.log(a.sort()); // 자바스크립트에서는 sort 메서드 사용 시 본래값도 변경을 하고 변경된 값(배열)도 리턴을 함

// 오름차순
const compare = (a, b) => {
  return a - b;
};

const compare2 = (a, b) => {
  return b - a;
};

console.log(a.sort(compare));
console.log(a.sort(compare2));

const a2 = [1, -3, 15, 8, 3];

// 배열 내장 메서드 -> 함수를 패러미터로 쓰기 때문에 고차함수 -> fn(value, index, array)
a2.forEach(console.log); // 괄호를 안한 순수함수가 내장 메서드들을 위한 호출용 함수로 쓸 수 있음
// () 없이 붙이면 알아서 필요할 때 호출해서 써라 / () 붙이면 -> 값을 써라
a2.forEach((v) => console.log(v));
// for of와 비슷한데 중간에 흐름 제어를 못하는 for문. forEach.
console.log("--------------------------");
// map -> 대체. a,b,c,d,e,f => (...) => a',b',c',d',e',f'
console.log(a2);
console.log(a2.map((v) => Math.abs(v)));
console.log(a2.map(Math.abs));

console.log(a2.map((v, i) => (i % 2 == 0 ? v ** 2 : 0)));
console.log(a2.map((v, i) => (!(i % 2) ? v ** 2 : 0)));

console.log(a2); //map 원본에 영향을 안미침 - 복사본을 만듦
console.log("--------------------------");
// filter -> map이랑 비슷한데 결과가 무조건 true/false. -> true인 것들만 남겨서 신규 배열을 만든다
const newA2 = a2.filter((v) => v % 2 == 0);
console.log(a2.filter((v) => v % 2 == 0));
console.log(a2.filter((v) => v % 3 == 0));
console.log(a2.filter((_, i) => i % 3 == 0 && i != 0));
console.log("--------------------------");
console.log(newA2);
console.log(a2);

// Reduce -> 배열을 1개의 값으로 변환
const a4 = [1, 10, 5, 4, 7];

// 1. 숫자 연산
// forEach, map, filter => (v, i, a) / sort -> (e1, e2)
// reduce -> (prev, cur, i, arr)
// fn(acc, cur)

const sum = a4.reduce((prev, cur) => {
  console.log("prev : ", prev, "cur : ", cur);
  return prev * cur;
});
console.log(sum);

console.log(
  a4.reduce((prev, cur) => {
    console.log("prev : ", prev, "cur : ", cur);
    return prev + cur;
  }, 100),
);

console.log(
  a4.reduce((prev, cur) => {
    console.log("prev : ", prev, "cur : ", cur);
    if (cur % 2 == 0) {
      prev.push(cur);
    }
    return prev;
  }, []),
);
