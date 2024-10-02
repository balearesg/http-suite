import {Events} from "@beyond-js/kernel/core";
import {JCall} from "./jcall";
export /*bundle*/
class Api extends Events {
	#url;
	get url() {
		return this.#url ?? "";
	}
	#fetcher: JCall;

	get actions() {
		return this.#fetcher.actions;
	}
	get streamResponse() {
		return this.#fetcher.streamResponse;
	}

	get metadata() {
		return this.#fetcher.metadata;
	}
	constructor(url: string) {
		super();
		this.#url = url;
		this.#fetcher = new JCall();
		this.on("action.received", () => this.trigger("action.received"));
		this.on("stream.response", this.#getResponse);
	}

	#getResponse = () => {
		this.trigger("stream.response");
	};
	async action(method = "get", route: string, specs: object = {}, header?: Record<string, string>): Promise<any> {
		return this.#fetcher[method](this.getURL(route), specs, header);
	}

	getURL(route: string): string {
		return `${this.#url}${route}`;
	}

	bearer(bearer) {
		this.#fetcher.bearer(bearer);
		return this;
	}
	get(route: string, specs?: object, header?: Record<string, string>): Promise<any> {
		return this.action("get", route, specs, header);
	}

	post(route: string, specs: object, header?: Record<string, string>): Promise<any> {
		return this.action("post", route, specs, header);
	}
	put(route: string, specs: object, header?: Record<string, string>): Promise<any> {
		return this.action("put", route, specs, header);
	}
	delete(route: string, specs?: object, header?: Record<string, string>): Promise<any> {
		return this.action("delete", route, specs, header);
	}

	stream(route: string, specs: object = {}): Promise<any> {
		return this.action("stream", route, specs);
	}
}
