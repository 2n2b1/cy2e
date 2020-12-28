# cy2e

## Status
![Docker Image CI](https://github.com/2n2b1/cy2e/workflows/Docker%20Image%20CI/badge.svg)

## What
Using Cypress to do unit tests on React applications

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

#### with Video Record Playback
```bash
yarn run cypress run --record --key af144ab3-4d1b-41f5-813e-92b36c586c7d
```



## Example

### Running baseline test with video recording
```git
kjeske-bh@MBP-BH-001 ~/IdeaProjects/cy2e/cyp-cra (initial-app-creation) $ yarn run cypress run --record --key af144ab3-4d1b-41f5-813e-92b36c586c7d
yarn run v1.22.5
$ /Users/kjeske-bh/IdeaProjects/cy2e/cyp-cra/node_modules/.bin/cypress run --record --key af144ab3-4d1b-41f5-813e-92b36c586c7d

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
  -  Finished processing: /Users/kjeske-bh/IdeaProjects/cy2e/cyp-cra/cypress/videos/a    (0 seconds)
                          pp.spec.tsx.mp4                                                           


  (Uploading Results)

  - Done Uploading (1/1) /Users/kjeske-bh/IdeaProjects/cy2e/cyp-cra/cypress/videos/app.spec.tsx.mp4

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
