// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					<title>Untlsn Portfolio</title>
					{assets}
				</head>
				<body>
					<div id="app" class="bg-bg-1 min-h-screen text-white">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
));
