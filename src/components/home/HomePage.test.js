import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import HomePage from '../home/HomePage';

function setup() {
	let renderer = TestUtils.createRenderer();
	renderer.render(<HomePage/>);
	let output = renderer.getRenderOutput();

	return {output, renderer };
}

describe('HomePage via React Test Utils', () => {
	it('renders div and h1', () => {
		const { output } = setup();

		expect(output.type).toBe('div');
		let [h1] = output.props.children;
		expect(h1.type).toBe('h1'); 
	});
});