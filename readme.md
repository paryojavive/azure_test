# React Azure Static Web App

이 프로젝트는 React로 구축된 웹 애플리케이션을 Azure Static Web Apps에 배포하는 예제입니다.

## 🚀 기능

- React 18 with Hooks
- 현대적인 UI/UX 디자인
- 반응형 웹 디자인
- Azure Static Web Apps 자동 배포
- GitHub Actions CI/CD

## 📦 설치 및 실행

### 로컬 개발 환경

1. 의존성 설치:
```bash
npm install
```

2. 개발 서버 실행:
```bash
npm start
```

3. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 프로덕션 빌드

```bash
npm run build
```

## 🚀 Azure Static Web Apps 배포

### 1. Azure Portal에서 Static Web App 생성

1. [Azure Portal](https://portal.azure.com)에 로그인
2. "Static Web App" 검색 후 생성
3. 다음 설정으로 구성:
   - **구독**: 선택
   - **리소스 그룹**: 새로 생성 또는 기존 선택
   - **이름**: 고유한 앱 이름 (예: `my-react-app`)
   - **호스팅 플랜**: Free
   - **지역**: 가까운 지역 선택
   - **소스**: GitHub

### 2. GitHub 저장소 연결

1. GitHub 계정 연결
2. 저장소 선택: `your-username/azure_test`
3. 브랜치 선택: `main`
4. 빌드 세부 정보 설정:
   - **앱 위치**: `/`
   - **API 위치**: (비워둠)
   - **출력 위치**: `build`

### 3. 배포 자동화

GitHub Actions 워크플로우가 자동으로 설정되어 다음 시점에 배포됩니다:
- `main` 브랜치에 push할 때
- Pull Request 생성/업데이트 시

### 4. 환경 변수 설정 (필요시)

GitHub 저장소의 Settings > Secrets and variables > Actions에서:
- `AZURE_STATIC_WEB_APPS_API_TOKEN`: Azure에서 제공하는 토큰

## 📁 프로젝트 구조

```
├── public/
│   └── index.html          # HTML 템플릿
├── src/
│   ├── App.js              # 메인 React 컴포넌트
│   ├── index.js            # React 앱 진입점
│   └── styles.css          # 스타일시트
├── .github/workflows/      # GitHub Actions 워크플로우
├── staticwebapp.config.json # Azure Static Web Apps 설정
└── package.json            # 프로젝트 의존성 및 스크립트
```

## 🔧 사용된 기술

- **Frontend**: React 18, CSS3
- **배포**: Azure Static Web Apps
- **CI/CD**: GitHub Actions
- **패키지 관리**: npm

## 📝 배포 후 확인사항

배포가 완료되면 Azure Portal에서 제공하는 URL로 접속하여 다음을 확인하세요:

- ✅ 앱이 정상적으로 로드되는지
- ✅ 반응형 디자인이 작동하는지
- ✅ 카운터 기능이 정상 작동하는지
- ✅ 모든 스타일이 올바르게 적용되는지

## 🛠️ 문제 해결

### 빌드 오류
- `npm install` 실행 후 다시 시도
- Node.js 버전 확인 (16.x 이상 권장)

### 배포 오류
- GitHub Actions 로그 확인
- Azure Static Web Apps 설정 검토
- 환경 변수 설정 확인

## 📚 추가 리소스

- [Azure Static Web Apps 문서](https://docs.microsoft.com/azure/static-web-apps/)
- [React 공식 문서](https://reactjs.org/docs/)
- [GitHub Actions 문서](https://docs.github.com/actions)

## �� 라이선스

MIT License