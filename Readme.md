# Momentum

- URL : https://yws1502.github.io/TodoList/

# Momentum

## User login(simple) -> use local storage

- form에서의 이벤트는 submit으로 작동하여 브라우저가 새로고침을 하게 된다. 새로고침을 하게 됨에 따라 값이 input 값이 화면에서 사라지게 되는게 이것을 막기 위해 addEventListener가 첫번째 argument로 주는 event객체의 `preventDefault()` 함수를 사용할 수 있다.
- `preventDefault()` 함수는 기본 동작을 막아주는 역활을 해준다. -> ex) submit의 경우 브라우저가 새로고침하는 것을 막아주고 a 태그의 경우 브라우저 이동을 막아주는데 활용 가능하다.
- 매 번 값을 받고 처리하기 귀찮기 때문에 우리는 `localStorage`라는 친구를 이용해보자
- `localStorage` : 브라우저가 가지고 있는 Key와 Value가 쌍으로 이루어진 작은 디비
  - method : `getItem`, `setItem`, `removeItem`
  - 위의 3가지 메소드를 통해 저장, 조회, 삭제가 가능하다.

## CLOCK
- setinterval
  - 매번 일어나는 친구
  - 첫번째 argument로 매번 실행하고 싶은 친구의 함수를 넣어주고
  - 두번째 argument로 시간을 정해준다! 1초로 하고 싶다면 -> 1000 이렇게! 

- settimeout
  - 설정한 시간이 지난 후에 함수 실행

- `padStart` -> 문자열 메소드
  - 첫번째 argument : 자리수 정하기
  - 두번째 argument : 부족한 자리 이걸로 채워줘~!
  - ex) `"1".padStart(2, "0"); // "01"`
- `padEnd` 같은 일을 하지만 이친구는 뒤에서 부터
  - 첫번째 argument : 자리수 정하기
  - 두번째 argument : 부족한 자리 이걸로 채워줘~!
  - ex) `"1".padEnd(2, "0"); // "10"`