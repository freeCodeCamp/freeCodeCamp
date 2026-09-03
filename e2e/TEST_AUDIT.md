# Playwright Test Audit

This is a first-pass, file-level audit of the Playwright suite on
`upstream/main` at `f29dc44509`. It is meant to guide the first migration pass:
move component-shaped tests down before tightening the end-to-end setup.

The labels are intentionally conservative. If a file has both component-like
assertions and one real browser or server-side journey, it is marked `Split`
rather than moved wholesale.

## Labels

| Label                 | Meaning                                                                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Component-shaped`    | Mostly checks rendering, copy, validation, button state, modal content, or simple UI branching. Prefer a client Vitest/Testing Library test.                                              |
| `Browser-integration` | Still belongs in Playwright because it relies on browser behavior: responsive layout, navigation, iframes, touch, keyboard shortcuts, editor behavior, local storage, or reload behavior. |
| `True-e2e candidate`  | Should remain or become a thin browser -> client -> API -> DB/email/session journey once users and state are isolated.                                                                    |
| `Split`               | Contains both component-shaped checks and browser/e2e checks. Move the component-shaped assertions first, then keep or rewrite the thin journey.                                          |
| `External-contract`   | Exercises a third-party boundary or a deliberate mock of one. Keep separate from true e2e.                                                                                                |
| `Inactive`            | No active Playwright coverage at the moment. Restore in the right layer when the feature is ready.                                                                                        |

## Fast Signals

- Internal `page.route(...)` or `route.fulfill(...)` usually means the test is
  not true e2e. It may still be a useful browser-integration test, but mocked
  internal app responses are strong migration candidates.
- `execSync('node ../tools/scripts/seed/...')` means the test depends on shared
  seeded state. Keep or rewrite only the journey that really needs persistence.
- Direct `request` or `authedRequest` setup is acceptable as temporary test data
  setup, but the assertion should still prove a browser-visible behavior.
- Static content, validation, and modal rendering should move before any runner
  or CI restructuring.



## Remaining Inventory

| Spec                              | Label               | Recommendation                                                             |
| --------------------------------- | ------------------- | -------------------------------------------------------------------------- |
| `test-suite.spec.ts`              | Browser-integration | Keep live challenge test-runner execution in Playwright.                   |
| `update-about-me.spec.ts`         | True-e2e candidate  | Keep save, reload, and persisted empty-field behavior; isolate user state. |
| `upper-jaw-scroll-mobile.spec.ts` | Browser-integration | Keep touch/pointer scroll and mobile breadcrumb behavior in Playwright.    |
| `user-token.spec.ts`              | True-e2e candidate  | Keep token create/delete journey; isolate user state.                      |
| `video-modal.spec.ts`             | Browser-integration | Keep help-modal -> video-modal browser wiring at desktop/mobile viewports. |
| `video-player.spec.ts`            | Browser-integration | Keep YouTube iframe render smoke in Playwright for this E2E-flow pass.     |


## Next Audit Step

For each `Split` file, make a per-test checklist before moving code. The goal is
to delete broad Playwright assertions only after an equivalent client/API test
exists and only leave the smallest browser journey that still proves something a
component test cannot.

## Target E2E Flows and Coverage Gaps

With most of the suite audited, this section maps the true e2e journeys the
platform should keep against what the specs on disk actually cover. It was
built by inventorying every browser -> API -> DB/session/email flow in
`api/src/routes/{public,protected}` and the client surfaces that drive them,
then checking each against the current specs. Flows the suite should have and
flows that are missing are listed separately.

### Flow File Naming

When the remaining true e2e specs are tightened, rename files by the user
journey they prove instead of the component or page they happen to touch. Use
`(name-of-flow)-flow.ts` for every retained Playwright file. External contract
coverage can include `contract` in the flow name, but it should still be clearly
separated from true browser -> API -> DB/session/email flows.

| Current spec(s)                                                                            | Rename target                             |
| ------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `signin.spec.ts`, `signout-modal.spec.ts`                                                  | `auth-session-flow.ts`                    |
| `delete-modal.spec.ts`                                                                     | `account-deletion-flow.ts`                |
| `projects.spec.ts`                                                                         | `project-submission-flow.ts`              |
| `multifile-cert-projects.spec.ts`                                                          | `multifile-project-save-flow.ts`          |
| `completion-modal.spec.ts`, `navigation-from-last-challenge.spec.ts`                       | `challenge-completion-navigation-flow.ts` |
| `module-reset.spec.ts`, `progress-reset-modal.spec.ts`                                     | `progress-reset-flow.ts`                  |
| `challenge-reset-modal.spec.ts`                                                            | `challenge-reset-flow.ts`                 |
| `failed-updates.spec.ts`                                                                   | `failed-update-replay-flow.ts`            |
| `super-block-page.spec.ts`                                                                 | `superblock-navigation-flow.ts`           |
| `cert-username-case-navigation.spec.ts`                                                    | `certification-username-routing-flow.ts`  |
| `update-about-me.spec.ts`, `username-change.spec.ts`, `internet-presence-settings.spec.ts` | `profile-settings-flow.ts`                |
| `portfolio.spec.ts`, `experience.spec.ts`                                                  | `profile-management-flow.ts`              |
| `hotkeys.spec.ts`, `shortcuts-modal.spec.ts`                                               | `keyboard-shortcuts-flow.ts`              |
| `link-ms-user.spec.ts`                                                                     | `microsoft-account-unlink-flow.ts`        |
| `user-token.spec.ts`                                                                       | `user-token-flow.ts`                      |
| `report-user.spec.ts`                                                                      | `report-user-flow.ts`                     |
| `update-email.spec.ts`, `email-settings.spec.ts`                                           | `email-update-flow.ts`                    |
| `email-sign-up-alert.spec.ts`, `quincy-email-sign-up.spec.ts`, `unsubscribed.spec.ts`      | `newsletter-preference-flow.ts`           |
| `exam-show-qualified.spec.ts`, `exam-survey.spec.ts`                                       | `exam-start-and-survey-flow.ts`           |
| `search-bar.spec.ts`                                                                       | `algolia-search-contract-flow.ts`         |
| `third-party-donation.spec.ts`                                                             | `stripe-donation-contract-flow.ts`        |

The **Migrated So Far** entries also call out retained, deferred, or missing
e2e flows. These should either map to one of the retained flow files above or
get their own future `*-flow.ts` file if/when the flow is added back.

| Migrated note source                                                                                                | Flow filename to use if retained or restored                         |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `action-row.spec.ts`, `desktop-layout.spec.ts`, `mobile-layout.spec.ts`                                             | `challenge-layout-flow.ts`                                           |
| `archive.spec.ts`                                                                                                   | `learn-archive-navigation-flow.ts`                                   |
| `backend.spec.ts`                                                                                                   | `backend-challenge-submission-flow.ts`                               |
| `blocked.spec.ts`                                                                                                   | `access-control-flow.ts`                                             |
| `bread-crumb.spec.ts`                                                                                               | `challenge-breadcrumb-navigation-flow.ts`                            |
| `c-sharp.spec.ts`, `link-ms-user.spec.ts`, `ms-trophy-show.spec.ts`                                                 | `microsoft-account-and-trophy-flow.ts`                               |
| `certification.spec.ts`, `show-certificate-else.spec.ts`, `show-certificate-own.spec.ts`                            | `certificate-routing-flow.ts`                                        |
| `challenge-reset-modal.spec.ts`, `reset-editor-layout.spec.ts`                                                      | `challenge-reset-flow.ts`                                            |
| `challenge-title.spec.ts`, `completion-modal.spec.ts`, `navigation-from-last-challenge.spec.ts`, `show.spec.ts`     | `challenge-completion-flow.ts`                                       |
| `codeally.spec.ts`                                                                                                  | `codeally-completion-flow.ts`                                        |
| `daily-coding-challenge.spec.ts`                                                                                    | `daily-coding-challenge-flow.ts`                                     |
| `academic-honesty.spec.ts`, certification-claim coverage from `settings.spec.ts`                                   | `certification-claim-flow.spec.ts`                                  |
| `delete-modal.spec.ts`, `signout-modal.spec.ts`                                                                     | `account-session-flow.ts`                                            |
| `edit-profile-modal.spec.ts`, `image-picture-check.spec.ts`, `internet-presence-settings.spec.ts`                   | `profile-settings-flow.ts`                                           |
| `email-settings.spec.ts`, `update-email.spec.ts`                                                                    | `email-update-flow.ts`                                               |
| `email-sign-up-alert.spec.ts`, `quincy-email-sign-up.spec.ts`, `unsubscribed.spec.ts`                               | `newsletter-preference-flow.ts`                                      |
| `exam-results.spec.ts`, `exam-results-modal.spec.ts`, `exit-exam-modal.spec.ts`, `finish-exam-modal.spec.ts`        | `exam-completion-results-flow.ts`                                    |
| `exam-show-qualified.spec.ts`, `exam-started-show.spec.ts`, `exam-survey.spec.ts`                                   | `exam-start-and-survey-flow.ts`                                      |
| `exam-token.spec.ts`                                                                                                | `exam-environment-token-flow.ts`                                     |
| `experience.spec.ts`, `portfolio.spec.ts`                                                                           | `profile-management-flow.ts`                                         |
| `fill-in-the-blanks.spec.ts`, `lower-jaw.spec.ts`, `independent-lower-jaw.spec.ts`, `output.spec.ts`                | `challenge-runner-flow.ts`                                           |
| `flash.spec.ts`, `settings.spec.ts`, `settings-sidenav.spec.ts`                                                     | `settings-flow.ts`                                                   |
| `form-helper.spec.ts`, `projects.spec.ts`                                                                           | `project-submission-flow.ts`                                         |
| `header.spec.ts`, `profile.spec.ts`                                                                                 | `profile-route-flow.ts`                                              |
| `help-button.spec.ts`, `help-modal.spec.ts`                                                                         | `help-request-flow.ts`                                               |
| `interactive-editor.spec.ts`                                                                                        | `interactive-editor-preference-flow.ts`                              |
| `map.spec.ts`, `intro-page-rwd.spec.ts`, `intro-page.spec.ts`, `landing.spec.ts`, `learn.spec.ts`                   | `curriculum-navigation-flow.ts`                                      |
| `module-reset.spec.ts`, `progress-reset-modal.spec.ts`                                                              | `progress-reset-flow.ts`                                             |
| `multiple-choice-question-challenge.spec.ts`                                                                        | `multiple-choice-speaking-flow.ts`                                   |
| `preview.spec.ts`, `project-preview-modal.spec.ts`, `completed-project-preview.spec.ts`                             | `preview-iframe-flow.ts`                                             |
| `solution-viewer.spec.ts`                                                                                           | `solution-viewer-flow.ts`                                            |
| `staging-warning-modal.spec.ts`                                                                                     | `staging-warning-flow.ts` if a staging-only smoke returns            |
| `super-block-page.spec.ts`                                                                                          | `superblock-navigation-flow.ts`                                      |
| `footer.spec.ts`, `four-oh-four.spec.ts`, `full-stack-page.spec.ts`, `notes.spec.ts`, `seo.spec.ts`, `tags.spec.ts` | No retained flow file; these are component/static metadata coverage. |

### Flows the suite should have (and currently has)

These are the concrete user journeys the current Playwright suite still proves.
Each item names the starting route, the important user action, and the
observable result that makes it e2e rather than component coverage.

1. Auth/session sign-in (`signin.spec.ts`)
   - Start signed out on `/learn`.
   - Confirm the authenticated welcome copy is not visible.
   - Click the `Sign in` link.
   - Confirm `/learn` renders the signed-in welcome copy for `Full Stack User`.

2. Auth/session sign-out (`signout-modal.spec.ts`)
   - Start signed in on `/`.
   - Open the header menu, click `Sign out`, and confirm the sign-out modal.
   - Click the destructive confirm button.
   - Confirm the dialog closes and the browser lands back on `/`.

3. Account deletion (`delete-modal.spec.ts`)
   - Start signed in on `/settings`.
   - Open the Danger Zone delete-account dialog.
   - Type the exact verification phrase and confirm deletion.
   - Confirm the dialog disappears and the page shows a signed-out `Sign in`
     link.

4. Project submission and duplicate-submit protection (`projects.spec.ts`)
   - Submit a Python project from its project route.
   - Submit JavaScript certification projects and verify the submitted project
     appears from settings/certification surfaces.
   - Submit a multifile project with `Ctrl+Enter`.
   - Attempt a rapid second submit and confirm the UI blocks the duplicate
     submission.

5. Multifile cert project save/reload persistence
   (`multifile-cert-projects.spec.ts`)
   - Open a multifile certification project as a certified user.
   - Edit project files in the live editor.
   - Save through the UI or `Ctrl+S`.
   - Reload or navigate away and back.
   - Confirm the edited file contents are restored.

6. Challenge completion navigation (`completion-modal.spec.ts`,
   `navigation-from-last-challenge.spec.ts`)
   - Complete a challenge while signed out and verify next-route/sign-in
     behavior.
   - Complete a challenge while signed in by clicking submit and with
     `Ctrl+Enter`/`Command+Enter`.
   - Submit URL/editor projects from the middle and end of blocks.
   - Confirm middle-of-block submissions navigate to the next challenge, while
     final submissions navigate to the relevant superblock/block hash.

7. Module and progress reset (`module-reset.spec.ts`,
   `progress-reset-modal.spec.ts`)
   - Open reset UI from a completed module/block or settings progress reset.
   - Confirm the reset button is disabled until the verification phrase is
     typed.
   - Confirm reset and wait for the success state/flash.
   - Verify progress or certifications are no longer shown for the reset scope.

8. Challenge/editor reset (`challenge-reset-modal.spec.ts`)
   - Change code in a live challenge editor.
   - Open the reset modal and confirm reset.
   - Verify editor contents return to the seed solution.
   - Repeat for multifile projects, including saved-code reload and signed-in
     saved-state cases.

9. Offline failed-update replay (`failed-updates.spec.ts`)
   - Seed failed completed-challenge updates in localStorage.
   - Reload the app as a signed-in user.
   - Wait for the app to replay the queued updates to the API.
   - Confirm the session-user endpoint reflects the completion and localStorage
     is cleared.

10. Superblock navigation and progress memory (`super-block-page.spec.ts`)
    - Navigate from a challenge breadcrumb to a superblock page and confirm the
      correct block/module expands with the expected hash/state.
    - Visit a challenge, reload the superblock page, and confirm
      `currentChallengeId` restores the recently viewed block/module.
    - Use curriculum search on list and chapter views and confirm filtering
      expands/restores the expected real curriculum items.

11. Academic-honesty and certification claim gating
    (`certification-claim-flow.spec.ts`)
    - Start as a certified user who has not accepted the academic honesty
      policy.
    - Verify certificate access is blocked until the policy is accepted.
    - Accept the policy and verify certification access/claiming can continue.
    - Claim the Full Stack certification from settings and confirm the flash,
      changed button state, and certificate href.

12. Public certificate routing after username changes
    (`cert-username-case-navigation.spec.ts`)
    - Visit the certified user's public profile.
    - Change the username with lowercase and uppercase variants.
    - Navigate to a claimed certificate route.
    - Confirm certificate links still resolve with the expected lowercased
      public route.

13. Profile/settings persistence (`update-about-me.spec.ts`,
    `username-change.spec.ts`, `internet-presence-settings.spec.ts`,
    `portfolio.spec.ts`, `experience.spec.ts`)
    - Save empty and non-empty about/profile fields, reload, and confirm the
      saved state is preserved.
    - Save valid username changes, including lowercase, uppercase, and Enter-key
      submit paths, and confirm the UI reflects the new username.
    - Save social links from Internet Presence, see the success flash, reload,
      and confirm the saved link is still present.
    - Add, edit, and delete portfolio entries through the signed-in profile and
      confirm flash/profile visibility.
    - Add and delete experience entries and confirm the persisted profile list
      changes.

14. Keyboard-shortcut preference and live hotkeys (`hotkeys.spec.ts`)
    - Toggle keyboard shortcuts in settings.
    - Return to live challenge pages.
    - Use shortcuts for editor focus, challenge submission, frontend/backend
      navigation, video challenges, multiple-choice submission, assignment
      submission, and multifile lower-jaw behavior.
    - Confirm each shortcut produces the visible route, modal, or focus result.

15. Microsoft account unlink (`link-ms-user.spec.ts`)
    - Open the C# trophy page with a seeded Microsoft username.
    - Confirm the page recognizes the linked account.
    - Click unlink.
    - Confirm the unlink flash appears and the relink instructions/form are
      shown.

16. User token lifecycle from a project route (`user-token.spec.ts`)
    - Start with no token visible in settings.
    - Open a Relational Database VM project and click `Generate User Token`.
    - Return to settings and confirm the User Token section appears.
    - Delete the token and confirm the deletion flash and token section removal.

17. Report-user email (`report-user.spec.ts`)
    - Visit another user's profile.
    - Open the abuse-report form, enter details, and submit.
    - Confirm redirect to `/learn` and the success flash.
    - Confirm Mailpit received the abuse-report email with the expected subject.

18. Email update and newsletter settings (`update-email.spec.ts`,
    `email-settings.spec.ts`, `email-sign-up-alert.spec.ts`,
    `quincy-email-sign-up.spec.ts`, `unsubscribed.spec.ts`)
    - Submit a valid new email from `/update-email` and confirm Mailpit receives
      the verification email.
    - Update email from settings, confirm the flash, reload, and confirm the
      pending verification alert/link remains visible.
    - Toggle newsletter subscription in settings and confirm the flash.
    - Choose Yes/No from the learn-page and standalone email-sign-up flows and
      confirm the preference is saved with the expected redirect.
    - Visit an unsubscribe link, resubscribe, and confirm redirect text.

19. Exam survey and start transition (`exam-survey.spec.ts`,
    `exam-show-qualified.spec.ts`)
    - Open the qualified Foundational C# exam page.
    - Start the exam and confirm the live exam UI appears without leaving the
      route unexpectedly.
    - Open the C# survey alert, answer required questions, submit, and confirm
      the survey-success flash.

20. External-contract coverage kept outside true e2e
    - Algolia search (`search-bar.spec.ts`): route mocked search responses,
      type a query, submit by Enter/button, verify result/empty-state/dropdown
      behavior and viewport-dependent result counts.
    - Stripe boundary (`third-party-donation.spec.ts`): exercise the donation
      widget against the deliberate Stripe/mock boundary rather than a full
      internal API/DB journey.

The migration notes also keep several browser-runtime or route flows in
Playwright. They are not all browser -> API -> DB journeys, but they still prove
behavior a component test cannot:

21. Challenge layout and responsive pane behavior (`action-row.spec.ts`,
    `desktop-layout.spec.ts`, `mobile-layout.spec.ts`,
    `mobile-app-modal.spec.ts`)
    - Load real challenge routes at desktop and mobile viewports.
    - Toggle panes, tabs, preview visibility, Notes, and hidden mobile states.
    - Confirm the mobile app modal appears or stays dismissed based on viewport,
      route, and localStorage state.

22. Learn/archive/curriculum navigation (`archive.spec.ts`,
    `block-navigation.spec.ts`, `map.spec.ts`, `super-block-page.spec.ts`)
    - Navigate from `/learn` to archived superblock pages.
    - Follow real block/grid/accordion links and verify route/hash updates.
    - Confirm recently viewed challenge state expands the expected curriculum
      block after reload.
    - Keep map link route-smoke only if we decide clicking real curriculum
      links should stay in Playwright.

23. Challenge breadcrumb navigation (`bread-crumb.spec.ts`)
    - Load real challenge pages in desktop and mobile layouts.
    - Click breadcrumb links.
    - Confirm the route/hash/state points back to the expected block or
      superblock destination.

24. Certificate route handling (`certification.spec.ts`,
    `show-certification.spec.ts` if restored from the migrated show-certificate
    branches)
    - Visit valid certificate routes as owner and visitor when route smoke is
      needed.
    - Visit an invalid certificate route and confirm redirect/flash behavior.
    - Keep certificate rendering itself in client tests.

25. Backend and project challenge submission (`backend.spec.ts`,
    `projects.spec.ts`, `form-helper.spec.ts`)
    - Open backend/project challenge routes.
    - Submit valid solutions through the real form or editor path.
    - Confirm saved/submitted state is visible through settings,
      certification, or the next route.
    - Keep form shape and private URL validation in client tests.

26. Challenge reset and editor layout reset (`challenge-reset-modal.spec.ts`,
    `reset-editor-layout.spec.ts`)
    - Edit live challenge or multifile project code.
    - Confirm reset restores seed code and saved-code reload behavior.
    - Drag the editor layout splitter, reset layout in settings, reload, and
      confirm dimensions return to default.

27. Challenge runner, lower jaw, and output console (`lower-jaw.spec.ts`,
    `independent-lower-jaw.spec.ts`, `output.spec.ts`,
    `progress-bar.spec.ts`, `test-suite.spec.ts`)
    - Type into Monaco and run real challenge tests by button and keyboard.
    - Confirm pass/fail output, generated hints, focus behavior, completion
      modal state, progress bar state, and console serialization for runtime
      values.
    - Keep component button wiring in client tests.

28. Preview iframe flows (`preview.spec.ts`, `project-preview-modal.spec.ts`,
    `completed-project-preview.spec.ts`, `sass.spec.ts`,
    `iframe-script.spec.ts`)
    - Load real challenge/project routes with preview support.
    - Edit code or open a completed project solution.
    - Confirm the preview iframe DOM reflects compiled/rendered output, or
      stays empty for blocked/problematic iframe content.
    - Confirm modal close paths and route-driven preview visibility.

29. Interactive editor preference (`interactive-editor.spec.ts`)
    - Load a challenge page with static code.
    - Toggle into the live Sandpack editor.
    - Reload and confirm the preference survives.
    - Keep panel selection/rendering in `interactive-editor.test.tsx`.

30. Daily coding challenge route/editor behavior (`daily-coding-challenge.spec.ts`)
    - Visit daily challenge routes and archive routes.
    - Confirm redirect behavior and real editor language switching.
    - Completion persistence is listed below as a missing flow.

31. Settings page browser behavior (`flash.spec.ts`, `settings.spec.ts`,
    `settings-sidenav.spec.ts`)
    - Trigger settings actions that produce page-level flash messages.
    - Click settings side-nav hash links and verify animated scroll and URL
      fragments.
    - Keep static settings section rendering in client tests.

32. Multiple-choice speaking runtime (`multiple-choice-question-challenge.spec.ts`)
    - Load a real multiple-choice challenge route.
    - Open the speaking modal in supported browsers.
    - Confirm unsupported-browser messaging where speech recognition is not
      available.
    - Keep local speaking-button rendering in client tests.

33. Profile route smoke (`profile.spec.ts`)
    - Visit the signed-in user's profile.
    - Visit another user's public profile while signed in and signed out.
    - Keep the profile rendering matrix in client tests.

34. Solution viewer link/modal flow (`solution-viewer.spec.ts`)
    - Open certification project solution links from the real solution viewer
      surface.
    - Assert project modal rendering or external solution/source links in place
      without following third-party sites.
    - Keep modal/widget rendering in client tests and the de-flaked Playwright
      smoke per maintainer review.

### Flows that appear to be missing

These are server-crossing or persistence journeys with no active spec proving
the full path today. The outline describes the test we should add, not just the
feature area.

Recently closed gaps:

- Challenge completion persistence is now covered by
  `challenge-completion-persistence.spec.ts`.
- Email change confirmation is now covered by the Mailpit confirmation-link
  test in `update-email.spec.ts`.

Remaining gaps:

1. Certification claim notification email
   - Claim a certification through settings or the certificate-verify flow.
   - Assert the claim succeeds in the browser.
   - Read Mailpit and verify the notification email subject/recipient/body for
     the claimed cert. Current coverage checks the browser flash/link but not
     the email side effect from `PUT /certificate/verify`.

2. Public privacy enforcement
   - Change profile privacy settings such as `showAbout`, `showCerts`,
     `showPortfolio`, or locked profile state.
   - Visit the same profile as another user or signed out.
   - Confirm hidden sections are absent on the public profile and, for certs,
     public certificate access behaves according to `showCerts`.
   - Restore the setting and confirm the public section returns.

3. Microsoft account linking and trophy completion
   - Start from an unlinked C# trophy page.
   - Submit a Microsoft transcript/profile URL or username through the link
     form and confirm the account-link flash/state.
   - Complete or verify the trophy challenge.
   - Reload the trophy route and confirm the trophy/completion state persisted.
     Current coverage only proves the unlink half and local UI states.

4. Exam and quiz completion persistence
   - Start a generated exam, answer questions, finish, and submit.
   - Confirm the result page is reached and reload still shows persisted
     results.
   - Submit a quiz attempt through the real quiz UI and confirm the stored
     attempt/result is reflected after reload.
   - Existing exam/quiz coverage is rendering/start-state heavy and does not
     prove the exam-completion or quiz-attempt POST routes end to end.

5. Exam-environment token and separate-app flow
   - Re-enable the token path currently commented out in `exam-token.spec.ts`
     or replace it with active coverage.
   - Generate/download the exam-environment token.
   - Use that token in the exam-environment app to start a generated exam and
     submit an attempt.
   - Decide whether this belongs in CI or a separate app/staging suite.

6. Daily coding challenge completion persistence
   - Open a daily coding challenge.
   - Solve and submit it through the real editor/check flow.
   - Confirm the success state.
   - Reload the daily challenge/archive and confirm the completed day remains
     marked complete. Current coverage only checks redirects and editor language
     switching.

7. Donation persistence (deferred batch)
   - Signed-out: create a payment intent, complete a charge, and confirm the
     donation record/user-visible thank-you state.
   - Signed-in: create or update a subscription past the mocked Stripe boundary
     and confirm account donation state.
   - PayPal: complete `add-donation` recording.
   - Update card: exercise the real update-stripe-card path.
   - Challenge completion: confirm the donation prompt appears only after the
     intended completion trigger.

8. CodeRoad/CodeAlly completion persistence
   - Open a CodeRoad/CodeAlly-backed project.
   - Submit a valid completion payload through the real UI/API path.
   - Reload or revisit the project/profile.
   - Confirm completion remains persisted. Current client tests only prove
     local gating and form behavior.

9. Production auth contracts
   - Real Auth0 login, passwordless magic-link email, and `/mobile-login` are
     intentionally bypassed by dev auth.
   - If they need coverage, add staging or contract tests that complete the
     external-provider handshake and assert the resulting session.

10. Flag-gated/service-to-service paths
    - Socrates hints, classroom apps, Sentry ingest, and similar routes remain
      out of scope while feature flags or service boundaries keep them outside
      the default product path.
    - Add flow-level specs only when a feature becomes default or there is a
      stable contract test environment.

Cross-cutting caveat: nearly all covered journeys still depend on shared
`seed-demo-user` / `certifieduser` state; the missing-flow work should be
scheduled together with the planned per-test user isolation rather than adding
more tests onto shared seeds.

### Flow research addendum, 2026-07-23

Local route and spec tracing changed the remaining plan in a few places:

- `test-suite.spec.ts`: keep only the loaded-app challenge-runner behavior.
  `TestSuite` render states now have client coverage; the Playwright value is
  clicking `Check Your Code`, executing the real runner, and seeing the test
  status mutate.
- `update-about-me.spec.ts`: keep the browser save/reload journey. The API
  route `PUT /update-my-about` already has direct API coverage for validation
  and persistence shape, so adding more Playwright field validation would be
  redundant.
- `user-token.spec.ts`: keep one browser lifecycle from VM project route ->
  token creation -> settings visibility -> deletion. The API routes
  `POST /user/user-token` and `DELETE /user/user-token` already cover token
  creation/deletion rules directly.
- `upper-jaw-scroll-mobile.spec.ts`: keep in Playwright. It dispatches touch
  pointer gestures, measures real scroll geometry, toggles mobile details, and
  clicks the mobile breadcrumb.
- `video-modal.spec.ts`: the modal render and close callback now also have
  client tests, but the original desktop/mobile Playwright flows are kept in
  this branch because this pass is preserving old E2E flows. If #68380 merges,
  delete or rewrite this flow with the help-button removal.
- `video-player.spec.ts`: the old test only proves our `react-youtube` wrapper
  rendered an iframe-like element, so it also has cheaper client coverage now.
  The Playwright smoke is kept in this branch because this pass is preserving
  old E2E flows.

Adjacent open PRs that should inform future flow work:

- [#68949](https://github.com/freeCodeCamp/freeCodeCamp/pull/68949) changes
  concurrent modern-challenge completion updates. That reinforces the missing
  challenge-completion persistence/idempotency flow; prefer API coverage for
  concurrent writes and one thin browser persistence smoke.
- [#68837](https://github.com/freeCodeCamp/freeCodeCamp/pull/68837) and
  [#68836](https://github.com/freeCodeCamp/freeCodeCamp/pull/68836) change
  email rate-limit order. Keep detailed rate-limit coverage at API level; the
  missing E2E is still the confirmation-link loop through Mailpit.
- [#68906](https://github.com/freeCodeCamp/freeCodeCamp/pull/68906) adds
  unsaved-code leave warnings for certification projects. If it merges, add a
  browser integration flow for navigation blocking and keep reducer/selectors in
  client tests.
- [#67339](https://github.com/freeCodeCamp/freeCodeCamp/pull/67339) adds
  solution download coverage. If that feature merges, treat zip generation as a
  browser download flow and test archive contents without following external
  solution links.

## E2E Testing Best Practices

General principles for writing and keeping end-to-end tests, informed by the
migration work above.

- An e2e test should prove something no cheaper layer can: real navigation,
  persistence across a reload, session and cookie state, email dispatch,
  iframe content, keyboard/touch/viewport behavior. If a unit or component
  test can prove the same thing, it belongs there; e2e is the slowest and
  flakiest layer, so keep it small.
- Test one user journey per test, phrased as what the user does and sees:
  browser -> client -> server -> persistence. Assert user-visible outcomes
  (a heading, a flash message, a redirect), not implementation details.
- Make every test independent and self-contained: create and clean up its own
  data, never depend on shared seeded users or on another test having run
  first. Order dependence and shared state are the primary source of flake.
- Never depend on third-party sites being up. An outbound link is proven by
  asserting `href` and `target` on the anchor; following it makes the suite
  fail when someone else's site is slow.
- Never mock your own application's responses inside an e2e test; that
  silently converts it into an integration test while it keeps the cost of an
  e2e test. Mock only at deliberate external contracts (payment, search,
  auth providers), and keep those tests clearly separated.
- Wait on user-visible signals with auto-retrying assertions; never on fixed
  timeouts. If a side effect must happen first (state registered, request
  finished), wait for the visible signal that implies it.
- Avoid conditional logic in tests. A branch that only runs in certain
  environments is dead code everywhere else, and the test silently passes
  while asserting nothing; skip explicitly (`test.skip` with a condition) so
  the report shows what did not run.
- Query by role and accessible name first; it tests what assistive technology
  sees and survives markup refactors. Reserve test ids for elements with no
  accessible identity, and never leave assertions pointing at UI that no
  longer exists; a stale assertion that cannot fail is worse than no test.
- When a spec is flaky but valuable, fix the flake instead of deleting the
  coverage; when it is redundant with a cheaper test, delete it deliberately
  and record where the coverage went.

## Playwright Best Practices

Playwright-specific habits for keeping the browser suite readable, debuggable,
and less flaky.

- Prefer web-first locators and assertions: `getByRole`, `getByLabel`,
  `getByText`, `toBeVisible`, `toHaveURL`, `toHaveAttribute`, and
  `expect(...).toPass()` for polling side effects. Avoid `waitForTimeout`
  unless the test is explicitly proving animation timing and no visible signal
  exists.
- Keep locators lazy. Store locators, not element handles, and assert after the
  action that should change the page. Re-querying through locators lets
  Playwright handle DOM replacement during Gatsby route changes and React
  rerenders.
- Use `test.step` for multi-stage flows: setup, action, persistence check, and
  cleanup. A failing trace should tell the next maintainer which part of the
  journey broke without reading the entire file first.
- Use Playwright fixtures intentionally: `storageState` for signed-in/signed-out
  boundaries, project/device metadata for mobile-only behavior, and
  `test.skip` with a clear reason for unsupported browsers. Avoid branching
  inside a test when separate projects or describes make the behavior clearer.
- Pair browser actions with the signal they cause. For example, click submit
  and wait for the visible flash, URL change, dialog close, Mailpit message, or
  API response that proves the app handled the action.
- Avoid `page.evaluate` unless the assertion is genuinely about browser layout,
  iframe internals, localStorage, or another value users cannot expose through
  accessible UI. Prefer user-facing assertions when they can prove the same
  behavior.
- Use `page.route` only for external contracts or deliberate boundary tests.
  If an internal freeCodeCamp API response is mocked, label the spec as
  browser-integration or contract coverage, not true e2e.
- Do not follow third-party links in Playwright. Assert the anchor `href`,
  `target`, and `rel` instead; opening codepen.io, GitHub, Stripe, Algolia, or
  social sites adds flake without proving our app.
- Keep traces useful: avoid noisy helper loops, broad `locator('body')`
  assertions, and hidden setup in unrelated hooks. A trace should show a small
  user journey with obvious actions and visible outcomes.
- Prefer one flow per spec file once files are renamed to `*-flow.ts`. Shared
  helpers are fine, but they should express user actions (`submitProject`,
  `confirmProgressReset`) rather than implementation details.
