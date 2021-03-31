const React = require('react');
const {mount} = require('enzyme');
const {Game} = require('../src');

const checkBeDefined = (driver) => {
    const images = driver.find('img1');
    expect(images).toBeDefined();
}

test('test_1 ', () => {
    const driver =  mount(<Game/>);
    checkBeDefined(driver);
    
})
