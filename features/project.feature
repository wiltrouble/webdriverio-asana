Feature: Create project

    Create project, delete project, edit project

    Scenario: Create a new blank project
    Given I loged in Asana page
    When I create a new Blank project with the following information
    Then the project should be created

    Scenario: Add Section to project
    Given I loged in Asan page
    When I create a new Blank project with the following information
    Then the Project should be created
    When I add a section
    Then The Section should be created

    Scenario: Add task to project
    Given I loged in Asan page
    When I create a new Blank project with the following information
    Then the Project should be created
    When I add "taskName" task
    Then the task "taskName" should be displayed in the project

    

    

