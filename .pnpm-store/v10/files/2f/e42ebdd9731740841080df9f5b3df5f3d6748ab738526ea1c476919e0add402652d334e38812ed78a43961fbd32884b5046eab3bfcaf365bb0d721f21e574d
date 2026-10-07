/* eslint-env mocha */

import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies

import Spinner from '../src/index';
import { spinkitSpinners, loadersCssSpinners } from '../src/spinners';

describe('<Spinner />', () => {
  describe('custom classes', () => {
    it('should override `sk-spinner` class when overrideSpinnerClassName is set', () => {
      const wrapper = shallow(<Spinner overrideSpinnerClassName="sk-custom-spinner" />);

      expect(wrapper.find('div.sk-spinner').length).to.equal(0);
      expect(wrapper.find('div.sk-custom-spinner').length).to.equal(1);
    });

    it('should add extra class when className is set', () => {
      const wrapper = shallow(<Spinner className="sk-custom-spinner" />);

      expect(wrapper.find('div.sk-spinner').length).to.equal(1);
      expect(wrapper.find('div.sk-custom-spinner').length).to.equal(1);
    });
  });

  describe('fadeIn behavior', () => {
    it('should apply `sk-fade-in` class by default', () => {
      const wrapper = shallow(<Spinner />);

      expect(wrapper.find('div.sk-fade-in').length).to.equal(1);
      expect(wrapper.find('div.sk-fade-in-half-second').length).to.equal(0);
      expect(wrapper.find('div.sk-fade-in-quarter-second').length).to.equal(0);
    });

    it('should apply `sk-fade-in-half-second` class when `fadeIn` set to `half`', () => {
      const wrapper = shallow(<Spinner fadeIn="half" />);

      expect(wrapper.find('div.sk-fade-in').length).to.equal(0);
      expect(wrapper.find('div.sk-fade-in-half-second').length).to.equal(1);
      expect(wrapper.find('div.sk-fade-in-quarter-second').length).to.equal(0);
    });

    it('should apply `sk-fade-in-quarter-second` class when `fadeIn` set to `quarter`', () => {
      const wrapper = shallow(<Spinner fadeIn="quarter" />);

      expect(wrapper.find('div.sk-fade-in').length).to.equal(0);
      expect(wrapper.find('div.sk-fade-in-half-second').length).to.equal(0);
      expect(wrapper.find('div.sk-fade-in-quarter-second').length).to.equal(1);
    });

    it('should not apply any fadeIn classes when `fadeIn` set to `none`', () => {
      const wrapper = shallow(<Spinner fadeIn="none" />);

      expect(wrapper.find('div.sk-fade-in').length).to.equal(0);
      expect(wrapper.find('div.sk-fade-in-half-second').length).to.equal(0);
      expect(wrapper.find('div.sk-fade-in-quarter-second').length).to.equal(0);
    });

    it('should not apply any fadeIn classes when `noFadeIn` set (deprecated)', () => {
      const wrapper = shallow(<Spinner noFadeIn />);

      expect(wrapper.find('div.sk-fade-in').length).to.equal(0);
      expect(wrapper.find('div.sk-fade-in-half-second').length).to.equal(0);
      expect(wrapper.find('div.sk-fade-in-quarter-second').length).to.equal(0);
    });
  });

  describe('spinkit spinners', () => {
    Object.keys(spinkitSpinners).forEach((spinner) => {
      it(`should render ${spinner} spinner`, () => {
        const spinnerInfo = spinkitSpinners[spinner];
        const wrapper = shallow(<Spinner name={spinner} />);

        expect(wrapper.hasClass(spinnerInfo.className)).to.equal(true);
        expect(wrapper.children().length).to.equal(spinnerInfo.divCount);
      });
    });
  });

  describe('loaders.css spinners', () => {
    Object.keys(loadersCssSpinners).forEach((spinner) => {
      it(`should render ${spinner} spinner`, () => {
        const spinnerInfo = loadersCssSpinners[spinner];
        const wrapper = shallow(<Spinner name={spinner} />);

        expect(wrapper.hasClass(spinner)).to.equal(true);
        expect(wrapper.children().length).to.equal(spinnerInfo.divCount);
      });
    });
  });
});
