import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import HomePage from './HomePage';

function setup() {
	const props = {};
	return shallow(<HomePage/>);
}

describe('HomePage via Enzyme', () => {
	it('renders div and h1', () => {
		const wrapper = setup();
		expect(wrapper.is('div')).toBe(true);
		expect(wrapper.find('h1').text()).toEqual('Home Page');
	});
});