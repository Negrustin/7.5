Feature: Cinema ticket purchasing

  Scenario: Buy a standard ticket for a movie
    Given I am on the main page
    When I select a day and a movie time
    And I select a standard seat
    And I confirm the seat
    And I get the booking code
    Then I should see the booking confirmation message

  Scenario: Buy a VIP ticket for a movie
    Given I am on the main page
    When I select a day and a movie time
    And I select a VIP seat
    And I confirm the seat
    And I get the booking code
    Then I should see the booking confirmation message
