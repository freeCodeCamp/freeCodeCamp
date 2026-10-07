# Security Policy

This document describes the management of vulnerabilities for the Fastify
project and its official plugins.

## Threat Model

Fastify's threat model extends the
[Node.js security policy](https://github.com/nodejs/node/blob/main/SECURITY.md).

**Trusted:** Application code (plugins, handlers, hooks, schemas), configuration,
and the runtime environment.

**Untrusted:** All network input (HTTP headers, body, query strings, URL
parameters).

Fastify assumes Node.js is running with `insecureHTTPParser: false` (the
secure default). Deployments that enable `insecureHTTPParser: true` are
outside Fastify's threat model.

### Examples of Vulnerabilities

- Parsing flaws that bypass validation or security controls
- DoS through malformed input to Fastify's core
- Bypasses of built-in protections (prototype poisoning, schema validation)

### Examples of Non-Vulnerabilities

The following are **not** considered vulnerabilities in Fastify:

- **Application code vulnerabilities**: XSS, SQL injection, or other flaws in
user-written route handlers, hooks, or plugins
- **Malicious application code**: Issues caused by intentionally malicious
plugins or handlers (application code is trusted)
- **Validation schema issues**: Weak or incorrect schemas provided by developers
(schemas are trusted)
- **ReDoS in user patterns**: Regular expression DoS in user-provided regex
patterns for routes or validation
- **Missing security features**: Lack of rate limiting, authentication, or
authorization (these are application-level concerns)
- **Configuration mistakes**: Security issues arising from developer
misconfiguration (configuration is trusted)
- **Content-type parser/schema mismatches**: When a custom content-type parser
registered with a regular expression (e.g., `/^application\/.*json$/`) matches
incoming requests that do not have a corresponding key in the route's
`schema.body.content` map, validation is skipped for that request. It is the
application's responsibility to ensure that every content type accepted by a
parser has a matching validation schema entry. This is a configuration concern,
not a framework vulnerability (see
[Validation and Serialization](./docs/Reference/Validation-and-Serialization.md)
and [Content-Type Parser](./docs/Reference/ContentTypeParser.md))
- **`insecureHTTPParser: true` deployments**: Reports that rely on enabling
Node.js `insecureHTTPParser` are out of scope; Fastify assumes this flag is
`false`
- **Third-party dependencies**: Vulnerabilities in npm packages used by the
application (not Fastify core dependencies)
- **Resource exhaustion from handlers**: DoS caused by expensive operations in
user route handlers
- **Information disclosure by design**: Exposing error details or stack traces
explicitly enabled via configuration options

## Reporting vulnerabilities

Individuals who find potential vulnerabilities in Fastify are invited to
complete a vulnerability report via the
[GitHub Security page](https://github.com/fastify/fastify/security/advisories/new).

Do not assign or request a CVE directly.
CVE assignment is handled by the Fastify Security Team.
Fastify falls under the [OpenJS CNA](https://cna.openjsf.org/).
A CVE will be assigned as part of our responsible disclosure process.

> ℹ️ Note:
> Fastify's [HackerOne](https://hackerone.com/fastify) program is now closed.

### Strict measures when reporting vulnerabilities

It is of the utmost importance that you read carefully and follow these
guidelines to ensure the ecosystem as a whole isn't disrupted due to improperly
reported vulnerabilities:

* Avoid creating new "informative" reports. Only create new
  reports on a vulnerability if you are absolutely sure this should be
  tagged as an actual vulnerability. Third-party vendors and individuals are
  tracking any new vulnerabilities reported on GitHub and will flag
  them as such for their customers (think about snyk, npm audit, ...).
* Security reports should never be created and triaged by the same person. If
  you are creating a report for a vulnerability that you found, or on
  behalf of someone else, there should always be a 2nd Security Team member who
  triages it. If in doubt, invite more Fastify Collaborators to help triage the
  validity of the report. In any case, the report should follow the same process
  as outlined below of inviting the maintainers to review and accept the
  vulnerability.
* ***Do not*** attempt to show CI/CD vulnerabilities by creating new pull
  requests to any of the Fastify organization's repositories. Doing so will
  result in a [content report][cr] to GitHub as an unsolicited exploit.
  The proper way to provide such reports is by creating a new repository,
  configured in the same manner as the repository you would like to submit
  a report about, and with a pull request to your own repository showing
  the proof of concept.

[cr]: https://docs.github.com/en/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam#reporting-an-issue-or-pull-request

### Vulnerabilities found outside this process

⚠ The Fastify project does not support any reporting outside the process mentioned
in this document.

## Handling vulnerability reports

When a potential vulnerability is reported, the following actions are taken:

### Triage

**Delay:** 4 business days

Within 4 business days, a member of the security team provides a first answer to
the individual who submitted the potential vulnerability. The possible responses
can be:

* **Acceptance**: what was reported is considered as a new vulnerability
* **Rejection**: what was reported is not considered as a new vulnerability
* **Need more information**: the security team needs more information in order to
  evaluate what was reported.

Triaging should include updating issue fields:
* Asset - set/create the module affected by the report
* Severity - TBD, currently left empty

### Correction follow-up

**Delay:** 90 days

When a vulnerability is confirmed, a member of the security team volunteers to
follow up on this report.

With the help of the individual who reported the vulnerability, they contact the
maintainers of the vulnerable package to make them aware of the vulnerability.
The maintainers can be invited as participants to the reported issue.

With the package maintainer, they define a release date for the publication of
the vulnerability. Ideally, this release date should not happen before the
package has been patched.

The report's vulnerable versions upper limit should be set to:
* `*` if there is no fixed version available by the time of publishing the
  report.
* the last vulnerable version. For example: `<=1.2.3` if a fix exists in `1.2.4`

### Publication

**Delay:** 90 days

Within 90 days after the triage date, the vulnerability must be made public.

**Severity**: Vulnerability severity is assessed using [CVSS
v.3](https://www.first.org/cvss/user-guide).

If the package maintainer is actively developing a patch, an additional delay
can be added with the approval of the security team and the individual who
reported the vulnerability.

### Secondary Contact

If you do not receive an acknowledgment of your report within 6 business days,
or if you cannot find a private security contact for the project, you may
contact the OpenJS Foundation CNA at <https://cna.openjsf.org/> (or
`security@lists.openjsf.org`) for assistance.

The CNA can help ensure your report is properly acknowledged, assist with
coordinating disclosure timelines, and assign CVEs when necessary. This is a
support mechanism to ensure security reports are handled appropriately across
all OpenJS Foundation projects.

## The Fastify Security team

The core team is responsible for the management of the security program and
this policy and process.

Members of this team are expected to keep all information that they have
privileged access to by being on the team completely private to the team. This
includes agreeing to not notify anyone outside the team of issues that have not
yet been disclosed publicly, including the existence of issues, expectations of
upcoming releases, and patching of any issues other than in the process of their
work as a member of the Fastify Core team.

### Members

* [__Matteo Collina__](https://github.com/mcollina),
  <https://x.com/matteocollina>, <https://www.npmjs.com/~matteo.collina>
* [__Tomas Della Vedova__](https://github.com/delvedor),
  <https://x.com/delvedor>, <https://www.npmjs.com/~delvedor>
* [__Vincent Le Goff__](https://github.com/zekth)
* [__KaKa Ng__](https://github.com/climba03003)
* [__James Sumners__](https://github.com/jsumners),
  <https://x.com/jsumners79>, <https://www.npmjs.com/~jsumners>

## OpenSSF CII Best Practices

[![CII Best Practices](https://www.bestpractices.dev/projects/7585/badge)](https://www.bestpractices.dev/en/projects/7585/passing)

There are three “tiers”: passing, silver, and gold.

### Passing
We meet 100% of the “passing” criteria.

### Silver
We meet 87% of the "silver" criteria. The gaps are as follows:
  - we do not have a DCO or a CLA process for contributions.
  - we do not currently document "the architecture (aka high-level design)"
    for our project.

### Gold
We meet 70% of the “gold” criteria. The gaps are as follows:
  - we do not yet have the “silver” badge; see all the gaps above.
  - We do not include a copyright or license statement in each source file.
    Efforts are underway to change this archaic practice into a
    suggestion instead of a hard requirement.
  - There are a few unanswered questions around cryptography that are
    waiting for clarification.
