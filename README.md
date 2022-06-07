# Performance Task #2

This task is related to job posting #214049 for _Web Developer UX/UI Designer_.

## About LEARN

[LEARN](https://learn.k20center.ou.edu) is a website developed by the [K20 Center](https://k20center.ou.edu). It is a repository of educational materials
like lesson plans, classroom strategies, professional development activities and more created through K20 grants and
partnerships.

For this task, you are asked to implement an [off-canvas menu](https://www.webfx.com/blog/web-design/off-canvas-menu) 
for LEARN. You are provided with a mock LEARN environment in which the menu is to be built. Included are some source
files from the live LEARN website that are used to support the mock development environment.

![A screenshot of the current menu in LEARN](demo.gif)

## Requirements for this menu:

### Size and position

- On larger screen widths (min-width 1280px), the menu should appear on-canvas (i.e. visible in the page) at all times
- Below that threshold, the menu should be off-canvas by default and controlled with a button that opens and closes it
- The menu should be usable on phone-sized screens
- The menu should open from the left side of the page

### Content

- The menu should show information about the current user:
    - A profile picture
    - Full name
    - Email address
    - A "Sign Out" link
- The menu should show links to major sections of the LEARN website

You may create an account on the [LEARN website](https://learn.k20center.ou.edu) and sign in to observe a similar menu
on the home page.

## Software you will need:

The follow specific items will be used to download the project and create a development environment:

- [Git](https://git-scm.com/)
    - Usage of Git includes:
        - Cloning the project repository.
        - Creating a personal working branch.
        - Pushing the branch back to the server upon completion.
- [Node.js](https://nodejs.org/en/)
    - Usage of Node includes:
        - Installing javascript dependencies using `npm`.
        - Running development tasks using `npm`.

Aside from Git and Node, you may use any code editor and other tools you feel necessary to complete the task.

## Programming languages you will use:

- [Twig](https://twig.symfony.com/) templates and HTML
    - To make setup easier, we are using a Node.js implementation of Twig
      called [Twing](https://nightlycommit.github.io/twing/).
    - Of particular use for this project,
      see [Twing for Template Designers](https://nightlycommit.github.io/twing/templates.html).
- SASS/CSS stylesheets
- Javascript

The task project is setup with limited support for including 3rd-party libraries. You are encoraged to write code by
hand whenever possible. If there are issues integrating 3rd-party libraries into the task project, it is up to you to
resolve them.

## Getting started

1. Ensure software tools are installed and available from the command line.
2. Open a command prompt/shell in the location you want to store the project.
3. Duplicate the repository using the [submission guidelines](#submission-to-github) below.
5. Install dependencies using `npm install`.
6. Launch the development server using `npm start`.

At this point, you should be able to navigate to http://localhost:3000 to see the task home page. It should appear
similar to the LEARN home page, but most links and buttons will not be functional. At this point you are ready to begin
development.

## Major tasks

Here is an example list of high-level tasks necessary to complete this project that you may follow:

1. Implement the menu structure and content using HTML and Twig
    1. Twig files are located in the `templates` folder
    2. You may add the menu in `index.html.twig` directory or in new `.twig` file(s)
2. Style the menu using SASS/CSS
    1. SASS resources are located in `assets/scss`
    2. You may create new `.scss` files or add code to the existing files
    3. Style should incorporate the current site's font and colors
    4. You **do not** need to implement a design identical to the LEARN website. We are just looking for a cohesive
       design
       that fits into the existing site
3. Implement opening and closing the menu using javascript
    1. Javascript files are located in `assets/js`
    2. A (very) brief example javascript file and dependency are provided. You may overwrite them as needed
4. Submit your project
   1. We ask that you submit your project to us via [GitHub](https://github.com) using the steps below.

### Submission to GitHub
If you do not already have a GitHub account, you will need to create one.

**Note: Do not fork this repository!** We ask you to duplicate the repository instead of forking it to prevent
your work from being visible to the public.

1. Sign into GitHub
2. Create a new repository (go to the "Repositories" tab and click "New")
3. Click the link to **Import a repository**
4. For the old repo's clone URL, use [](https://github.com/alc/perf-task-2)
5. Make the repository as **Private**
6. Give the repository a name (it doesn't matter what name you use)
7. Click "Begin Import". It may take a minute or two to complete.
8. Navigate to your new repository by clicking the User icon in the top right and choosing "Your Repositories"
9. Open the repository "Settings" tab and select "Collaborators" on the left menu
10. Add "alc" as a collaborator so that we can review your work
11. Email us when your project is complete and pushed to GitHub

## Implementation notes

- The content for the menu are available as Twig variables. You can see a print out of the structure of those variables
  at the bottom of the home page.
- You should render icons for each menu item using the `icon()` macro provided in `templates/macros.twig` in
  combination.
  with the provided menu items' "icon" property like this: ```{{ icon(menuItem.icon) }}```.
- The button to open and close the menu can similarly use the provided `menu-open` and `menu-closed` icons like this:
  ```{{ icon('menu-open') }}```.
- Menu items should make use of all available properties in the Twig variables. The "active" or current page should be
  styled to indicate that it is the current page
- We encourage thinking about code re-use. If you write code that seems like it could reasonably be useful elsewhere,
  consider abstracting it for that potential use.
- You may develop for modern browsers only. There is no need to address browser compatability issues.

## Project scoring

Your project will be scored in two categories of criteria: major project requirements and code quality. The maximum possible
score is 140 points, 40% from major project requirements and 60% code quality.

### Graded items

Major project requirements  (56 points possible)
- Menu includes all required content (14 points possible)
  - 0 points - Not present
  - 7 points - Most content is present
  - 14 points - All content is present
- Menu is sized correctly on all specified screen widths (21 points possible)
  - 0/7 points - At screen widths 1280px and up: menu is always visible
  - 0/7 points - On screens below 1280px wide: menu is hidden by default
  - 0/7 points - Menu is usable on phone-sized screens
- Menu opens and closes at smaller widths as specified (7 points possible)
  - 0/7 points - Menu opens and closes with a correct indicator icon
- Menu style is consistent with the provided LEARN environment (14 points possible)
  - 0 points - Menu does not match surrounding environment
  - 7 points - Menu matches surrounding environment with minor discrepancies
  - 14 points - Menu seamlessly matches surrounding environment

Code quality will be grading using "rubric version 2016" from https://www.stgm.nl/quality. We will **only** grade your 
project on the following criteria:
- names
- comments
- layouts
- formatting
- idiom
- expressions
- decomposition

Each criterion will award 1-4 points based on the rated "level" in the rubric, for a total of up to 28 points.
The rubric will be scored separately for each of the following kinds of code:
- HTML and Twig
- SASS/CSS
- Javascript

The total possible contribution of points from code quality is 84 - 28 points from each kind of code.
