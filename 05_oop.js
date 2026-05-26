// JS OOP
// 객체 리터럴
const v = "동적키";

const o1 = {
  속성명1: "값1",
  속성명2: "값2",
  속성명3: "값3",
  myFunc1() {
    console.log(this.속성명1);
    console.log("myFunc1");
  },
  myFunc2: () => {
    console.log(this.속성명2);
    console.log("myFunc2");
  },
  [v]: "비밀번호",
};

console.log(o1[v]);
console.log(o1.myFunc1());
console.log(o1.myFunc2());

//  프로토타입
function Student(name, major) {
  this.name = name;
  this.major = major;
  this.country = "한국";
  this.hello = () => console.log("Hello");
}

const s1 = new Student("홍길동", "컴퓨터공학");
const s2 = new Student("희수", "경영학");
const s3 = new Student("현빈", "실용음악과");

console.log("s1", s1);
console.log("s2", s2);
console.log("s3", s3);

Student.prototype.bye = () => {
  console.log("bye");
};

console.log(s1.bye === s2.bye);
