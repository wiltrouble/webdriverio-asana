Feature: Create project

    Create project, delete project, edit project

    Scenario: Create a new blank project
    Given I loged in Asana page
    When I create a new Blank project with the following information
    Then the project should be created

    

