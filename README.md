# Ajax 호출에 대한 브라우저 반응 테스트

> #### Environment: MacOS  
> #### Target Browser
> - Chrome
> - Safari
> - Opera
> - FireFox

## 테스트 과정

```
$ npm start
```

```
http://localhost:3000
```

1. 버튼 클릭
2. Ajax 호출
3. Promise 응답으로 받지 않고 바로 로케이션 이동

```javascript
// Sudo Code
$.ajax(data);
location.href = '';
```

## 결과

> Environment: MacOS

### Online

- Chrome: Ajax 호출 후 로케이션 이동 (서버 반응)
- Safari: Ajax 호출 후 로케이션 이동 (서버 반응)
- Opera: Ajax 호출 후 로케이션 이동 (서버 반응)
- FireFox: 로케이션 이동 (서버 무반응) 

### Slow 3G

- Chrome: Ajax 호출 후 로케이션 이동 (서버 반응)
- Safari: Ajax 호출 후 로케이션 이동 (서버 반응)
- Opera: Ajax 호출 후 로케이션 이동 (서버 반응)
- FireFox: 로케이션 이동 (서버 무반응)
