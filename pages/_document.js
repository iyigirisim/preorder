import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link href="/fonts/GeneralSans-Bold.eot" rel="stylesheet" />
				<link href="/fonts/GeneralSans-Bold.woff" rel="stylesheet" />
				<link href="/fonts/GeneralSans-Bold.woff2" rel="stylesheet" />

				<link href="/fonts/GeneralSans-Medium.eot" rel="stylesheet" />
				<link href="/fonts/GeneralSans-Medium.woff" rel="stylesheet" />
				<link href="/fonts/GeneralSans-Medium.woff2" rel="stylesheet" />

				<link href="/fonts/GeneralSans-Regular.eot" rel="stylesheet" />
				<link href="/fonts/GeneralSans-Regular.woff" rel="stylesheet" />
				<link href="/fonts/GeneralSans-Regular.woff2" rel="stylesheet" />

				<link href="/fonts/GeneralSans-Semibold.eot" rel="stylesheet" />
				<link href="/fonts/GeneralSans-Semibold.woff" rel="stylesheet" />
				<link href="/fonts/GeneralSans-Semibold.woff2" rel="stylesheet" />

				<link href="/fonts/xmoze.eot" rel="stylesheet" />
				<link href="/fonts/xmoze.woff" rel="stylesheet" />
				<link href="/fonts/xmoze.woff2" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
			</body>
		</Html>
	);
}
