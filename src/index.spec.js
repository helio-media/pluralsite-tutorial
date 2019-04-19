import {expect} from 'chai';
const jsdom = require('jsdom');

describe('Our first test', () => {
   it('should pass', () => {
      expect(true).to.equal(true);
   });
});

describe('index.html', () => {
   it('should say Helio World!', (done) => {
      const { JSDOM } = jsdom;
      JSDOM.fromFile('./src/index.html', null)
         .then((dom) => {
            //console.log(.body.textContent.trim());
            const h1 = dom.window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Helio World!");
            done();
         })
         //calling done with the 'err' ensures the test fails as the promise was broken
         .catch(function(err){done(err)});
   });
});
