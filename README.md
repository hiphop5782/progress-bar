# progress-bar

jquery plugin으로 개발한 progress-bar 입니다.

# [데모 페이지](https://hiphop5782.github.io/progress-bar)

# 사용법

## jquery 추가

웹 페이지에 `jquery`를 추가합니다.

```html
<script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
```

## progress-bar 추가

웹 페이지에 `progress-bar`를 추가합니다.

### CDN

```html
<!-- uncompressed js -->
<script src="https://cdn.jsdelivr.net/gh/hiphop5782/progress-bar@latest/dist/progress-bar.js"></script>

<!-- compressed js -->
<script src="https://cdn.jsdelivr.net/gh/hiphop5782/progress-bar@latest/dist/progress-bar.min.js"></script>
```

## progress-bar 생성

progress-bar를 설정할 영역을 `<div>`로 생성합니다. 아이디나 클래스는 상관없습니다.

```html
<div id="loading-bar"></div>
```

## 값 설정

progress-bar 영역에 값을 설정할 수 있습니다. jquery 옵션보다 우선 적용됩니다.

```html
<div id="loading-bar" data-value="50"></div>
```

- data-min - 최소값 (기본 0)
- data-max - 최대값 (기본 100)
- data-value - 현재값 (기본 0)
- data-