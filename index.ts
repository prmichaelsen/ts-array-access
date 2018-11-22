{
	const response: () => string[] = () => [];
	const test = response();
	// expected [ts] error
	const result: string = test[0];
}

{
	const test: string[] = [];
	// expected [ts] error
	const result: string = test[0];
}