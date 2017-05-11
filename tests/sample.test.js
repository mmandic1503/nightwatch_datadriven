
describe('Mocha with nightwatch', function () {
  const x = ['Test 1', 'Test 2']
  x.forEach(testName => {
    it(`${testName}`, function (browser) {
      const navbar = browser.page.navbar();
      navbar
        .navigate()
        .clickAgileCoachingLink()
        .assert.title('QualityWorks Consulting Group | Agile Coaching and Training');
    });
  });
});

after(function (client, done) {
  client.end(function () {
    done();
  });
});
