import { WebviewWindow } from "@tauri-apps/api/webviewWindow";
import { nanoid } from "nanoid";

export async function openWebview(url: string, id: string, title: string) {
	const webview = new WebviewWindow(`foundry-${id}-${nanoid()}`, {
		title: `Foundry VTT - ${title}`,
		url,
		x: 0,
		y: 0,
		width: 1280,
		height: 760,
		focus: true,
		center: true,
		devtools: true,
		dragDropEnabled: false,
		zoomHotkeysEnabled: true
	});

	webview.once("tauri://created", function () {
		// webview successfully created
	});

	webview.once("tauri://error", function (e) {
		console.log(e);
	});
}
