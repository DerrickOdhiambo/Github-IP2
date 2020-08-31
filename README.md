# GithubFinder

- This is an angular aplication that uses github api to search for github users online and display their repositories.

## Project Live Link

- [Click for to view the site]()

## Setup / Installation

- Install angular CLI (if you don't have it)
- git clone https://github.com/DerrickOdhiambo/Github-IP2.git
- cd Github-IP2
- code .
- run command ng serve --open in your terminal to open the project in localhost:4200

## Author

- [Derrick Odhiambo](https://github.com/DerrickOdhiambo/Github-IP2)

## Behavior Driven Development

| Behavior                              | Input Example   | Output Example                                                   |
| ------------------------------------- | --------------- | ---------------------------------------------------------------- |
| Input name filled with correct data   | DerrickOdhiambo | Github profile with an avatar image of the user                  |
| Input name filled with incorrect data |                 | An alert with the error is displayed                             |
| User leaves the input field empty     |                 | The search button is deactivated                                 |
| User clicks Show Repositories button  |                 | A list of the user repositories is displayed                     |
| User clicks Show Repositories button  |                 | Resets the input field                                           |
| User clicks View Repo button          |                 | User is directed to the github page of that spewcific repository |

## Technologies Used

- Angular CLI
- HTML & CSS
- Bootstrap 4

### Known Bugs

- The error for a bad API request does not display in the DOM
- The repository view does not reset when searching for a new user

## Contact

- odhiamboderrick56@gmail.com

## License

MIT License

Copyright (c) [2020][derrick odhiambo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
