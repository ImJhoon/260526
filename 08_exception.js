// exception

try {
  const a = null;
  a = 1;
  console.log("실행이 될까요?");
} catch (e) {
  console.error(e.message);
} finally {
  console.log("반드시 실행되는 코드 블록");
}

try {
  const r = Math.random();
  if (r >= 1) {
    r = 100;
  } else {
    console.log(a);
  }
} catch (e) {
  if (e instanceof TypeError) {
    console.log("타입 에러입니다.");
  } else if (e instanceof ReferenceError) {
    console.log("참조 에러입니다.");
  } else {
    console.log("모르는 에러입니다.");
  }
}
