# Ajax 호출에 대한 브라우저 반응 테스트

## 테스트 과정

1. 버튼 클릭
2. Ajax 호출
3. Promise 응답으로 받지 않고 바로 로케이션 이동

```javascript
$.ajax(data);
location.href = '';
```

### Online

- Chrome: Ajax 호출 후 로케이션 이동
- Safari: Ajax 호출 후 로케이션 이동
- Opera: Ajax 호출 후 로케이션 이동
- FireFox: 로케이션 이동

### Slow 3G

- Chrome: Ajax 호출 후 로케이션 이동
- Safari: Ajax 호출 후 로케이션 이동
- Opera: Ajax 호출 후 로케이션 이동
- FireFox: 로케이션 이동
