export interface IKeyEvent {
	altKey: boolean;
	bubbles: boolean;
	cancelBubble: boolean;
	cancelable: boolean;
	charCode: number;
	code: string;
	composed: boolean;
	ctrlKey: boolean;
	defaultPrevented: boolean;
	detail: number;
	eventPhase: number;
	isComposing: boolean;
	isTrusted: boolean;
	key: string;
	keyCode: number;
	location: number;
	metaKey: boolean;
	repeat: boolean;
	returnValue: boolean;
	shiftKey: boolean;
	timeStamp: number;
	type: string;
	which: number;
}

export function setEvent(e: KeyboardEvent): IKeyEvent {
	return {
		altKey: e.altKey,
		bubbles: e.bubbles,
		cancelBubble: e.cancelBubble,
		cancelable: e.cancelable,
		charCode: e.charCode,
		code: e.code,
		composed: e.composed,
		ctrlKey: e.ctrlKey,
		defaultPrevented: e.defaultPrevented,
		detail: e.detail,
		eventPhase: e.eventPhase,
		isComposing: e.isComposing,
		isTrusted: e.isTrusted,
		key: e.key,
		keyCode: e.keyCode,
		location: e.location,
		metaKey: e.metaKey,
		repeat: e.repeat,
		returnValue: e.returnValue,
		shiftKey: e.shiftKey,
		timeStamp: e.timeStamp,
		type: e.type,
		which: e.which
	};
}
