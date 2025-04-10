# 스포티파이 프로젝트

백엔드는 spotify api 를 활용하고 프론트엔드는 react 를 사용하여 커스텀 웹사이트를 만들었습니다.
---

## 사용 기술

- **백엔드**: Spotify API  
- **프론트엔드**: react

---

## 프로젝트 소개

사용자가 음악을 검색하고 플레이리스트를 관리할 수 있도록 돕기 위해 만들었습니다.
api 를 사용한 주요 기능은 다음과 같습니다.

- 회원 가입/로그인/로그아웃
- 플레이 리스트 관리
- 신곡/재생 기록 조회
- 검색
- 음악에 대한 좋아요
- 음악 재생

---

## 프로젝트 구조
```
root
├ src
│   ├ assets <-- 화면에 쓰이는 고정 이미지 위치
│   ├ components <-- 각종 컴포넌트 위치
│   ├ contextAPI <-- contextAPI provider 파일 위치
│   ├ lib <-- 스크롤과 tokenRefresh customhooks 위치
│   ├ pages <-- SPA 의 메인화면 위치
│   ├ app.jsx <-- 라우팅 구현
│   └ main.jsx <-- contextAPI provider 제공
│
└ read.me
```

## 팀원 소개
| 이름   | 역할                         |
|--------|------------------------------|
| 이상화 | 팀장 검색, 앨범 컴포넌트 작성 |
| 박수종 | 부팀장 UI 디자인, 로그인 전 소개 컴포넌트 작성 |
| 하청빈 | 메인 페이지, 신곡, 재생기록, 플레이어, 재생목록, 기능 관련 컴포넌트 작성 |
| 홍상우 | 플레이리스트 컴포넌트 작성 |
