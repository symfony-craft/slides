<!--s-->
# The behat way 




<!--v-->
To test the use cases we use behat and the gherkin syntax. 
<br><br>
This syntax allows you to describe your feature with concrete examples. 
These examples must be made in a functional way, we avoid implementation details. 
<br><br>
To ensure that the scenario is good, the scenario must work in any context (web app, API, console app)

<!--v-->
## This is a feature file : 
```gherkin
Feature: As an applicant, I can apply to a job

  Background:
    Given these companies are registered :
      | id | name       | email                  |
      | 1  | SensioLabs | contact@sensiolabs.com |

  Scenario: apply for a job
    Given these jobs are registered :
      | id | companyId | title                    | description                                                     |
      | 1  | 1         | Senior Symfony developer | We are looking for a senior symfony developer with craft skills |
    When I apply for the job "1" with the email "etienne@lebarillier.fr"
    Then these applicants should be registered :
      | email                  | applications |
      | etienne@lebarillier.fr | 1            |

```

<!--v-->

## Given

```gherkin [4-6, 9-11]
Feature: As an applicant, I can apply to a job

  Background:
    Given these companies are registered :
      | id | name       | email                  |
      | 1  | SensioLabs | contact@sensiolabs.com |

  Scenario: apply for a job
    Given these jobs are registered :
      | id | companyId | title                    | description                                                     |
      | 1  | 1         | Senior Symfony developer | We are looking for a senior symfony developer with craft skills |
    When I apply for the job "1" with the email "etienne@lebarillier.fr"
    Then these applicants should be registered :
      | email                  | applications |
      | etienne@lebarillier.fr | 1            |

```

<!--v-->

## Given

These steps allow you to set up the state of your application 
<!--v-->

