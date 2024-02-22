import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Layout from "./layout/index.tsx";
import { lightTheme } from "./theme/light.ts";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Layout>
			<ConfigProvider theme={lightTheme}>
				<App />
			</ConfigProvider>
		</Layout>
	</React.StrictMode>
);
