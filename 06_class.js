// class
class Person {
  //필드 변수
  name;
  age;
  #password; // #을 붙이면 클래스 외부에서는 접근 불가
  // 접근 불가가 되었을 때는 3가지
  // 1. 앞으로 이 값은 변화하지 앟거나 내부 작업에만 필요함
  // 2. 은닉 => 메모리주소 자체를 노출하지 않고 접근자/메서드를 통해서만 변경하여 차후 검증이나 복잡한 로직을 대응
  // 3. 내부 작업에만 필요한 임시변수. 인스턴스의 상태 저장
  major;

  // 생성자
  constructor(name, password, age, major) {
    this.name = name;
    this.#password = password;
    this.age = age;
    this.major = major;
  }

  getStudentInfo = () => {
    console.log(
      `안녕, 내 이름은 ${this.name}, 나이는 ${this.age}, 전공은 ${this.major}`,
    );
  };

  get password() {
    return this.#password;
  }

  set password(value) {
    this.#password = value;
  }
}

// 필드, 멤버변수, 속성 => 각각 객체(인스턴스)별로 별도의 저장공간을 가지는 개념
const p1 = new Person("재훈", "1234", 26, "컴공");
console.log(p1);
console.log(p1.password);
p1.getStudentInfo();
console.log(p1.password);
console.log;
