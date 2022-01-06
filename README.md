# 귀멸의 칼날 간단한 인물소개 

## !개발목표

`Postman을 사용해 가짜서버(MockServer) 를 직접 만들어서 API를 활용해보자 라는 목표를 가지고 구현하게되었습니다.`

## 사용기술

- React
- css
- Media Query
- react-bootstrap
- react-router-dom@5버전
- Axios
- Fetch

## 주요기능

- MockServer활용해 만들어놓은 API 를 Fetch , Axios을 사용해 불러온 데이터를 `map()`을 활용해 화면에뿌려준다.

***


(MockServer로 만든 간단한 APi)
![image](https://user-images.githubusercontent.com/81339388/148311024-cf81e6a4-9962-40cc-b0fe-baed30524752.png)


***

1.불러온 API를 담기위한 그릇(State)을 만들어놓는다. 

2.Effect, fetch를 사용해 메인 인물들을 불러온다 

3.만들어놓은 State에 저장

![image](https://user-images.githubusercontent.com/81339388/148311251-46454407-1c13-442a-8170-fc6404db5bac.png)

***

(불러온 API정보를 화면에 뿌려주기위해 `map()`사용해 화면에 뿌려줌.)

![image](https://user-images.githubusercontent.com/81339388/148312817-baf08bd8-35c9-4b6c-9a54-f85ffbd7e7d1.png)


***


(하단에 더 보기 Button 클릭하면 Axios로 불러온 APi들을 출력)

![image](https://user-images.githubusercontent.com/81339388/148312970-9b12d004-d267-438e-84fb-76a09003b6d6.png)

***

## 개선사항 & 느낀점
 - 부족한 기능
 - 심심한 UI 

이번에 해본 작고소중한 프로젝트는.. MockServer를 이용해 API를 만들어서 이것저것 뿌려주고싶었는데.
그러지못한 아쉬움.. 그래도 간단하게라도 체험은해봤으니 다음에는 Server에대해서 좀더 deep하게 접근해보고 다시 최상의퀄리티로 바꿔야겠다.







