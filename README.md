# cy2e

## What
Visual unit and integration testing for web-based applications.

## Example

## Test Case 1 - Load a webpage with the an anchor element that says 'Learn React'
- Load a hosted page at http://localhost:3000
- Verify there is an HTML element 'anchor' <A>
- Verify that the anchor has a text value of 'Learn React'

### Basic Test Case
```ts
it('should work', () => {
	cy.visit('http://localhost:3000');
	cy.get('a').should('have.text', 'Learn React');
})
```
![Basic Test Case: 'it should work'](https://github.com/2n2b1/cy2e/blob/main/docs/Screen%20Shot%202020-12-28%20at%2013.47.57.png?raw=true)

[Video Playback: Basic Test Case](https://user-images.githubusercontent.com/884380/103235324-ddd51b00-490f-11eb-876b-d8b36403aeb0.mp4)


---

## Status
![Docker Image CI](https://github.com/2n2b1/cy2e/workflows/Docker%20Image%20CI/badge.svg)

## How
Using command line interface:

__(extends yarn)__
### Commands

`yarn run`

```bash
    - build
        react-scripts build
    - cypress:open
        npm run cypress:start:wait -- "cypress open"
    - cypress:run
        npm run cypress:start:wait -- "cypress run"
    - cypress:start:app
        BROWSER=none react-scripts -r @cypress/instrument-cra start
    - cypress:start:wait
        start-server-and-test cypress:start:app http://localhost:3000
    - eject
        react-scripts eject
    - start
        react-scripts start
```
___

### Extending Tests with Video Record Playback
```bash
yarn run cypress run --record --key af144ab3-4d1b-41f5-813e-92b36c586c7d
```

#### Adding recording to `package.json`   

a) Include the ENV variable inline inside the `package.json` file:   
```bash
"cypress:run": "CYPRESS_RECORD_KEY='af144ab3-4d1b-41f5-813e-92b36c586c7d' npm run cypress:start:wait -- \"cypress run --record\"",
```

b) Set it globally, via 
```bash
export CYPRESS_RECORD_KEY='af144ab3-4d1b-41f5-813e-92b36c586c7d'
```

---

### Running baseline test with video recording
```bash
$ yarn run cypress run --record
$ cy2e/cyp-cra/.bin/cypress run --record
yarn run v1.22.5

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    6.2.0                                                                              │
  │ Browser:    Electron 87 (headless)                                                             │
  │ Specs:      1 found (app.spec.tsx)                                                             │
  │ Params:     Tag: false, Group: false, Parallel: false                                          │
  │ Run URL:    https://dashboard.cypress.io/projects/7bhvns/runs/1                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  app.spec.tsx                                                                    (1 of 1)


  ✓ should work (334ms)

  1 passing (523ms)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     0 seconds                                                                        │
  │ Spec Ran:     app.spec.tsx                                                                     │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: cy2e/cyp-cra/cypress/videos/a    (0 seconds)
                          pp.spec.tsx.mp4                                                           


  (Uploading Results)

  - Done Uploading (1/1) cy2e/cyp-cra/cypress/videos/app.spec.tsx.mp4

====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  app.spec.tsx                             521ms        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        521ms        1        1        -        -        -  


───────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                       
  Recorded Run: https://dashboard.cypress.io/projects/7bhvns/runs/1                                    

✨  Done in 20.05s.
```

---

### Code Coverage

