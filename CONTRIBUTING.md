# FloWave Modeler Contribution and Governance Policies

This document describes the contribution process and governance policies of the FINOS FloWave project. The project is also governed by the [Linux Foundation Antitrust Policy](https://www.linuxfoundation.org/antitrust-policy/), and the FINOS [IP Policy]( https://community.finos.org/governance-docs/IP-policy.pdf), [Code of Conduct](https://community.finos.org/docs/governance/code-of-conduct), [Collaborative Principles](https://community.finos.org/docs/governance/collaborative-principles/), and [Meeting Procedures](https://community.finos.org/docs/governance/meeting-procedures/).

# How to Contribute

Great to see you! Help us out by [filing bugs or feature requests](#working-with-issues), assisting others in our [forums](https://forum.camunda.io/c/bpmn-modeling/) or by [contributing improvements](#contributing-improvements).

## Contributor License Agreement (CLA)

All contributors must have a contributor license agreement (CLA) on file with FINOS before their pull requests will be merged. Please review the FINOS [contribution requirements](https://community.finos.org/docs/governance/Software-Projects/contribution-compliance-requirements) and submit (or have your employer submit) the required CLA before submitting a pull request.

## Table of Contents

* [Working with Issues](#working-with-issues)
  * [Helping out](#helping-out)
* [Contributing Improvements](#contributing-improvements)
  * [Setting up the Project](#setting-up-the-project)
  * [Discussing Code Changes](#discussing-code-changes)
  * [Code Style](#code-style)
  * [Creating a Pull Request](#creating-a-pull-request)

## Working with Issues

We use our [issue tracker](https://github.com/camunda/camunda-modeler/issues) for project communication, discussion and planning.

### Helping out

* Share your perspective on issues
* Be helpful and respect others when commenting

## Contributing Improvements

Learn how to setup the project locally, make changes and contribute bug fixes and new features through pull requests.

### Setting up the Project

The project consists of two subpackages: the client and the app. Test suites for both of them can be run separately.

```plain
git clone git@github.com:camunda/camunda-modeler.git
cd camunda-modeler && npm i

// Run the test suite for both packages sequentially
npm test

// Run in dev mode
npm start

// Run tests, linter and build distro
npm run all
```

### Discussing Code Changes

Create a [pull request](#creating-a-pull-request) if you would like to have an in-depth discussion about some piece of code.

### Code Style

In addition to our automatically enforced [lint rules](https://github.com/bpmn-io/eslint-plugin-bpmn-io), please adhere to the following conventions:

* Use modules for client (`import` / `export (default)`)
* Use CommonJS for app (`require` / `module.exports`)

### Creating a Pull Request

We use pull requests for feature additions and bug fixes. If you are not yet familiar on how to create a pull request, [read this great guide](https://gun.io/blog/how-to-github-fork-branch-and-pull-request).

Some things that make it easier for us to accept your pull requests

* The code adheres to our conventions
  * spaces instead of tabs
  * single-quotes
  * ...
* The code is tested
* The `npm run all` build passes (executes tests + linting)
* The work is combined into a single commit
* The commit messages adhere to the [conventional commits guidelines](https://www.conventionalcommits.org)

We'd be glad to assist you if you do not get these things right in the first place.

:heart: from the bpmn.io team.

# Governance

## Roles

The project community consists of Contributors and Maintainers:
* A **Contributor** is anyone who submits a contribution to the project. (Contributions may include code, issues, comments, documentation, media, or any combination of the above.)
* A **Maintainer** is a Contributor who, by virtue of their contribution history, has been given write access to project repositories and may merge approved contributions.
* The **Lead Maintainer** is the project's interface with the FINOS team and Board. They are responsible for approving [quarterly project reports](https://community.finos.org/docs/governance/#project-governing-board-reporting) and communicating on behalf of the project. The Lead Maintainer is elected by a vote of the Maintainers. 

## Contribution Rules

Anyone is welcome to submit a contribution to the project. The rules below apply to all contributions. (The key words "MUST", "SHALL", "SHOULD", "MAY", etc. in this document are to be interpreted as described in [IETF RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).)

* All contributions MUST be submitted as pull requests, including contributions by Maintainers.
* All pull requests SHOULD be reviewed by a Maintainer (other than the Contributor) before being merged.
* Pull requests for non-trivial contributions SHOULD remain open for a review period sufficient to give all Maintainers a sufficient opportunity to review and comment on them.
* After the review period, if no Maintainer has an objection to the pull request, any Maintainer MAY merge it.
* If any Maintainer objects to a pull request, the Maintainers SHOULD try to come to consensus through discussion. If not consensus can be reached, any Maintainer MAY call for a vote on the contribution.

## Maintainer Voting

The Maintainers MAY hold votes only when they are unable to reach consensus on an issue. Any Maintainer MAY call a vote on a contested issue, after which Maintainers SHALL have 36 hours to register their votes. Votes SHALL take the form of "+1" (agree), "-1" (disagree), "+0" (abstain). Issues SHALL be decided by the majority of votes cast. If there is only one Maintainer, they SHALL decide any issue otherwise requiring a Maintainer vote. If a vote is tied, the Lead Maintainer MAY cast an additional tie-breaker vote.

The Maintainers SHALL decide the following matters by consensus or, if necessary, a vote:
* Contested pull requests
* Election and removal of the Lead Maintainer
* Election and removal of Maintainers

All Maintainer votes MUST be carried out transparently, with all discussion and voting occurring in public, either:
* in comments associated with the relevant issue or pull request, if applicable;
* on the project mailing list or other official public communication channel; or
* during a regular, minuted project meeting.

## Maintainer Qualifications

Any Contributor who has made a substantial contribution to the project MAY apply (or be nominated) to become a Maintainer. The existing Maintainers SHALL decide whether to approve the nomination according to the Maintainer Voting process above.

## Changes to this Document

This document MAY be amended by a vote of the Maintainers according to the Maintainer Voting process above.