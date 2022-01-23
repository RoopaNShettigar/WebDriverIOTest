Feature: Test Recharge Page

 @Volvo
  Scenario: Verify Recharge Page Redirection
    Given I navigate to Volvo page
    When I click Recharge
    Then Verify Recharge page is opened