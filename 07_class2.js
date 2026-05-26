// 상속
class Animal {
  // [보완 1] static 키워드는 인스턴스 변수가 아니라 클래스 자체에 속하는 "정적(클래스) 변수"입니다.
  // 모든 인스턴스가 이 값을 공유합니다.
  static count = 0; 
  
  // [보완 2] #을 붙여 선언한 "비밀(Private) 필드"입니다. 클래스 외부에서 직접 접근할 수 없습니다.
  #name;

  // 생성자
  constructor(name) {
    // 인스턴스 생성 시 private 필드인 #name에 값을 저장합니다.
    this.#name = name;
    this.moreCount();
  }

  // [보완 3] private 필드 #name에 안전하게 접근하고 값을 변경하기 위한 getter와 setter입니다.
  get name() {
    return this.#name;
  }

  set name(newName) {
    if (newName && newName.trim().length > 0) {
      this.#name = newName;
    } else {
      console.log("경고: 올바른 이름을 입력해주세요.");
    }
  }

  moreCount() {
    Animal.count++;
  }

  speak() {
    // getter(this.name)를 호출하여 private 필드인 #name 값을 출력합니다.
    console.log(`${this.name}가 울음소리를 냅니다.`);
  }
}

// Bird가 Animal을 상속받음
class Bird extends Animal {
  // [보완 4] 자식 클래스에서 자신만의 생성자(constructor)를 가질 때의 사용법입니다.
  constructor(name, wingColor) {
    // 부모 클래스의 생성자를 먼저 실행해야 하므로 반드시 super(인자)를 최상단에 호출해야 합니다.
    super(name); 
    this.wingColor = wingColor; // 자식 클래스만의 새로운 속성 정의
  }

  // [보완 5] 메서드 오버라이딩(Method Overriding): 부모의 speak 메서드를 자식에 맞게 재정의
  speak() {
    // 부모 클래스인 Animal의 speak() 동작도 함께 수행하고 싶을 때는 super.speak()를 사용합니다.
    super.speak();
    console.log(`[추가 정보] ${this.wingColor} 날개를 가진 ${this.name}가 짹짹 웁니다.`);
  }
}

const a = new Animal("강아지");
const b = new Bird("참새", "노란색");
const c = new Bird("독수리", "갈색");

console.log("--- speak() 메서드 실행 ---");
a.speak();
console.log("---------------------------");
b.speak();
console.log("---------------------------");
c.speak();
console.log("---------------------------");

// private 필드 수정 테스트 (setter 활용)
b.name = "이쁜 참새";
console.log(`이름 변경 확인: ${b.name}`);

console.log(`생성된 전체 동물 수: ${Animal.count}`);
