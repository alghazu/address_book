Feature: Creat contacts
As a user
In order to stay in touch with my friends
I would like to create a contact for them in my address book


Scenario: Create a new contact
  Given I visit the site
  Then I should see "Contacts"
  And I should see "You have no contacts in your address book"
  When I click "Add contact"
  Then I fill in "Name" with "John Doe"
  And I fill in "Email" with "john@doe.com"
  And I fill in "Phone" with "0123456789"
  And I fill in "Company" with "Craft Academy"
  And I fill in "Notes" with "A really awsome guy :-)"
  And I fill in "Twitter" with "johndoe"
  And I click "Save contact"
  Then I should have 1 contact in my address book
  And I should see "John Doe"
  And I should not see "You have no contacts in your address book"

  Scenario: Create multi contacts
    Given I visit the site
    Then I should see "Contacts"
    And I should see "You have no contacts in your address book"
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    When I click "Add contact"
    Then I fill in "Name" with "Sofie Doe"
    And I fill in "Email" with "sofie@doe.com"
    And I fill in "Phone" with "012342342"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really little girl :-)"
    And I fill in "Twitter" with "sofiedoe"
    And I click "Save contact"
    Then I should have 2 contact in my address book
    And I should see "Sofie Doe"
    And I should not see "You have no contacts in your address book"
