import * as React from 'react';
import { Api } from '@bgroup/http-suite/api';
console.log("🚀 ~ file: index.tsx:3 ~ Api:", Api)
export /*bundle*/
	function View(): JSX.Element {
	return (
		<div className='page__container'>
			<h1>
				My first page using BeyondJS with <span className='beyond'>React</span>!
			</h1>
		</div>
	);
}
