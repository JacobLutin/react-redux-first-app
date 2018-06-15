import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import CourseForm from './CourseForm';

function setup(params = {}) {
  const props = {
    course: params.course || {},
    errors: params.errors || {},
    saving: params.saving || false,
    onChange: () => {},
    onSave: () => {}
  };

  return shallow(<CourseForm {...props}/>);
}

describe('CourseForm saving test', () => {
  it('renders form and h4', () => {
    const wrapper = setup();
    expect(wrapper.is('form')).toBe(true);
    expect(wrapper.find('h4').length).toBe(1);
  });

  it('h4 renders "Edit course" when updating course', () => {
    const wrapper = setup({ course: {id: 1} });
    expect(wrapper.find('h4').text()).toEqual('Edit course');
  });

  it('h4 renders "Add course" when creating new course', () => {
    const wrapper = setup();
    expect(wrapper.find('h4').text()).toEqual('Add course');
  });

  it('save button is rendered', () => {
    const wrapper = setup();
    expect(wrapper.find('input').findWhere(node =>
      node.prop('type') === 'submit').length).toBe(1);
  });

  it('save button is labeled "Save" when saving', () => {
    const wrapper = setup({ saving: false });
    expect(wrapper.find('input').findWhere(node =>
      node.prop('type') === 'submit').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup({ saving: true });
    expect(wrapper.find('input').findWhere(node =>
      node.prop('type') === 'submit').props().value).toBe('Saving...');
  });
});