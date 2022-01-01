const quotes = [
  {
    quote : "때론 기회를 놓치는 것이 기회일 수 있다.",
    author : "영화 <벤자민 버튼의 시간은 거꾸로 간다>"
  },
  {
    quote : "\"혼신\" 내가 생각하는 범위에서 최선을 다하면 안돼 그걸 벗어나서 최선을 다해야지",
    author : "유재석"
  },
  {
    quote : "\"지금이 최악\"이라고 말 할 힘이 있다면 아직은 최악이 아니다.",
    author : "윌리엄 셰익스피어"
  },
  {
    quote : "남의 말에 흔들이지 않는 자신감을 가진 당당한 여자가 되어라",
    author : "힐러리 클린턴"
  },
  {
    quote : "웃음은 그 자체로 건강하다.",
    author : "도리스 레싱"
  },
  {
    quote : "당신이 어떤 위험을 감수하냐를 보면, 당신이 무엇을 가치있게 여기는지 알 수 있다.",
    author : "자넷 윈터슨"
  },
  {
    quote : "우연이 아닌 선택이 운명을 결정한다.",
    author : "진 니데치"
  },
  {
    quote : "한번의 실패와 영원한 실패를 혼동하지 마라",
    author : "F.스콧 핏제랄드"
  },
  {
    quote : "본인에게 재능이 있다고 생각하고 근거 없는 자신감으로 무장하세요",
    author : "봉준호"
  },
  {
    quote : "처음부터 겁먹지 말자. 막상 가보면 아무 것도 아닌 게 세상엔 참 많다.",
    author : "김연아"
  },
]
const toDayQuote = quotes[parseInt(Math.random()*quotes.length)]

const quote = document.querySelector("#quotes-wrap .quote");
const author = document.querySelector("#quotes-wrap .author");

quote.textContent = toDayQuote.quote;
author.textContent = toDayQuote.author;
