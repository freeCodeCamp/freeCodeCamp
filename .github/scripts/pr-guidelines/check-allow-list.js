'use strict';

module.exports = async ({ github, context, core }) => {
  const prAuthor = context.payload.pull_request.user.login;

  const teamSlugs = ['dev-team', 'curriculum', 'staff', 'moderators'];
  const membershipChecks = teamSlugs.map(team_slug =>
    github.rest.teams
      .getMembershipForUserInOrg({
        org: 'freeCodeCamp',
        team_slug,
        username: prAuthor
      })
      .then(({ data }) => data.state === 'active')
      .catch(() => false)
  );
  const results = await Promise.all(membershipChecks);
  const isOrgTeamMember = results.some(Boolean);

  const isAllowListed =
    isOrgTeamMember || ['camperbot', 'renovate[bot]'].includes(prAuthor);

  core.setOutput('is_allow_listed', isAllowListed);
};
