# team-profile-generator

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

GIVEN a command-line application that accepts user input

-- PART 1: STARTING APPLICATION --  (COMPLETE)

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

-- PART 2: USER PROMPTS --    (COMPLETE)

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option  
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

-- PART 3: HTML Generation -- 

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

-- PART 4: Navigation -- 

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab


-- PSEUDO --

Architecture:

Employee:
  - name
  - id
  - email
  - getName()
  - getId()
  - getEmail()
  - getRole() -> Returns: 'Employee'

Manager: 
  - name
  - id
  - email
  - getName()
  - getId()
  - getEmail()
  - officeNumber
  - getRole() -> Returns: 'Manager'

Engineer:
  - name
  - id
  - email
  - github
  - getName()
  - getId()
  - getEmail()
  - getGithub()
  - getRole() -> Returns: 'Engineer'

Intern:
  - name
  - id
  - email
  - school
  - getSchool()
  - getName()
  - getId()
  - getEmail()
  - getRole() -> Returns: 'Intern'