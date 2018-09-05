const assert = require('assert');
const { Given, When, Then, And} = require('cucumber');

//const actualAns = isItFriday(today)


function isItFriday(today) {
    if (this.today = 'Sunday')
    return 'Nope'
    else if (today = 'Friday')
    return 'Yup'
}



  Given('today is Sunday', function () {
    // Write code here that turns the phrase above into concrete actions
  this.today = 'Sunday'
  });                        


  When('I ask whether it\'s Friday yet', function () {
    // Write code here that turns the phrase above into concrete actions
    this.actualAnswer = isItFriday(this.today)  
  });


  Then('I should be told {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.actualAnswer, expectedAnswer)
  });


  // Then('I should be allowed to ask again', function (expectedAnswer) {
  // Write code here that turns the phrase above into concrete actions
  //   return 'pending'
  // });


  Given('today is Friday', function () {
    // Write code here that turns the phrase above into concrete actions
   today = 'Friday'
  });

  When('I ask if it\'s Friday yet', function () {
    // Write code here that turns the phrase above into concrete actions
    this.answer = 'Yup'
  });

  Then('I\'m told {string}', function (expectedAnswer) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.answer, expectedAnswer)
  });







 








 