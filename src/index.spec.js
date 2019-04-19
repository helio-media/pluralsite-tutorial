import {expect} from 'chai';
import jsdom from 'jsdom';
import path from 'path';

describe('Our first test', () => {
   it('should pass', () => {
      expect(true).to.equal(true);
   });
});

describe('index.html', () => {
   it('should say hello', (done) => {
      const { JSDOM } = jsdom;
      JSDOM.fromFile(path.join(__dirname, '../src/index.html'), null)
         .then((dom) => {
            const h1 = dom.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Helio World");
         })
         .catch(function(){});//handle the unhandled promise rejection error
      //because Mocha is asynchronour, this tells mocha that its safe to
      //evaluate whether or not your test has passed
      done();
   });
});
