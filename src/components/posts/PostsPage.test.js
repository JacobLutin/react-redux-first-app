import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { PostsPage } from './PostsPage';

function setup(params = {}) {
	const props = {
		posts: params.posts || [],
		error: params.error || null,
		actions: params.actions || {}
	};

	return mount(<PostsPage {...props}/>);
}

describe('PostsPage component testing', () => {
	it('renders div and h1', () => {
		const wrapper = setup();
		expect(wrapper.find('h1').length).toBe(1);
	});

	it('show error when posts not loaded', () => {
		const msg = 'test error message';
		const error = { message: msg };
		const wrapper = setup({error});
		expect(wrapper.find('div.alert').text()).toEqual('Error: '+ msg);
	});

	it('show post when successfully loaded ', () => {
		const post = { title: 'title', body: 'text'};
		const wrapper = setup({posts: [post]});
		expect(wrapper.find('div.alert').length).toBe(0);
		expect(wrapper.find('h4').text()).toEqual(post.title);
		expect(wrapper.find('p').text()).toEqual(post.body);
	});

});