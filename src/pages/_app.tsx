// _app은 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트
// 페이지에 적용할 공통 레이아웃 역할을 한다.

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layouts';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
