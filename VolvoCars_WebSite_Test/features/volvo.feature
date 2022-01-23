Feature: Test Volvo Page

  @Volvo
  Scenario: Verify Volvo page redirection
    Given I launch chrome browser
    When I enter url
    Then Verify Volvo safety page is displayed

  @Volvo
  Scenario: Verify Story Video is displayed
    Given I launch chrome browser
    When I enter url
    Then Verify Story Video is displayed

  @Volvo
  Scenario: Verify story video play
    Given I navigate to Volvo page
    When I click on Watch Story Button
    Then Verify story video is playing

  @Volvo
  Scenario: Verify Menu navigation panel
    Given I navigate to Volvo page
    When I click on Menu Button
    Then Verify Menu Navigation panel is displayed

  @Volvo
  Scenario: Verify Our Cars is opened
    Given I navigate to Volvo page
    When I click on Our Cars
    Then Verify Our Cars is opened