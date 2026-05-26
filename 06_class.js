// class
class Person {
  //필드 변수
  name;
  age;
  major;

  // 생성자
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  getStudentInfo = () => {
    console.log(
      `안녕, 내 이름은 ${this.name}, 나이는 ${this.age}, 전공은 ${this.major}`,
    );
  };
}

const p1 = new Person("재훈", 26, "컴공");
console.log(p1);
console.log(p1.getStudentInfo());
