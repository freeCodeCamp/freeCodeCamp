import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './badges.css';

library.add(fas, fab, far);

/* eslint-disable */
const badgesTest = {
  badge_types: [
    { id: 3, name: 'Bronze', sort_order: 7 },
    { id: 2, name: 'Silver', sort_order: 8 },
    { id: 1, name: 'Gold', sort_order: 9 }
  ],
  badge_groupings: [
    { id: 2, name: 'Community', description: null, position: 11, system: true },
    {
      id: 1,
      name: 'Getting Started',
      description: null,
      position: 10,
      system: true
    },
    { id: 3, name: 'Posting', description: null, position: 12, system: true },
    {
      id: 4,
      name: 'Trust Level',
      description: null,
      position: 13,
      system: true
    },
    { id: 5, name: 'Other', description: null, position: 14, system: true }
  ],
  badges: [
    {
      id: 25,
      name: 'Promoter',
      description: 'Invited a user',
      grant_count: 24,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-user-plus',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you invite someone to join the community via the invite button on your user page, or at the bottom of a topic. Inviting friends who might be interested in specific discussions is a great way to introduce new people to our community, so thanks!\n',
      slug: 'promoter',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 14,
      name: 'First Link',
      description: 'Added a link to another topic',
      grant_count: 1162,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you add a link to another topic. Linking topics helps fellow readers find interesting related conversations, by showing the connections between topics in both directions. Link freely!\n',
      slug: 'first-link',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 100,
      name: 'Camper',
      description: 'a regular user',
      grant_count: 0,
      allow_title: true,
      multiple_grant: false,
      icon: 'fa-fire',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: false,
      long_description: '',
      slug: 'camper',
      has_badge: false,
      manually_grantable: true,
      badge_type_id: 3
    },
    {
      id: 22,
      name: 'Good Share',
      description: 'Shared a post with 300 unique visitors',
      grant_count: 32,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted for sharing a link that was clicked by 300 outside visitors. Good work! You’ve shown off a great discussion to a bunch of new people and helped this community grow.\n',
      slug: 'good-share',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 27,
      name: 'Champion',
      description: 'Invited 5 members',
      grant_count: 0,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-user-plus',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you’ve invited 5 people who subsequently spent enough time on the site to become full members. Wow! Thanks for expanding the diversity of our community with new members!\n',
      slug: 'champion',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 26,
      name: 'Campaigner',
      description: 'Invited 3 basic users',
      grant_count: 4,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-user-plus',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you’ve invited 3 people who subsequently spent enough time on the site to become basic users. A vibrant community needs a regular infusion of newcomers who regularly participate and add new voices to the conversations.\n',
      slug: 'campaigner',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 38,
      name: 'Thank You',
      description: 'Has 20 liked posts and gave 10 likes',
      grant_count: 670,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-heart',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you have 20 liked posts and give 10 or more likes in return. When someone likes your posts, you find the time to like what others are posting, too.\n',
      slug: 'thank-you',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 43,
      name: 'First Reply By Email',
      description: 'Replied to a post via email',
      grant_count: 575,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you reply to a post via email :e-mail:.\n',
      slug: 'first-reply-by-email',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 101,
      name: 'Certified',
      description: 'Completed our new user tutorial',
      grant_count: 3927,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted upon successful completion of the interactive new user tutorial. You’ve taken the initiative to learn the basic tools of discussion, and now you have been certified!\n',
      slug: 'certified',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 41,
      name: 'First Emoji',
      description: 'Used an Emoji in a Post',
      grant_count: 19190,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you add an Emoji to your post :thumbsup:. Emoji let you convey emotion in your posts, from happiness :smiley: to sadness :anguished: to anger :angry: and everything in between :sunglasses:. Just type a : (colon) or press the Emoji toolbar button in the editor to select from hundreds of choices :ok_hand:\n',
      slug: 'first-emoji',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 6,
      name: 'Nice Reply',
      description: 'Received 10 likes on a reply',
      grant_count: 1014,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 3,
      system: true,
      long_description:
        'This badge is granted when your reply gets 10 likes. Your reply made an impression on the community and helped move the conversation forward.\n',
      slug: 'nice-reply',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 44,
      name: 'New User of the Month',
      description: 'Outstanding contributions in their first month',
      grant_count: 103,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted to congratulate two new users each month for their excellent overall contributions, as measured by how often their posts were liked, and by whom.\n',
      slug: 'new-user-of-the-month',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 102,
      name: 'Licensed',
      description: 'Completed our advanced user tutorial',
      grant_count: 329,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted upon successful completion of the interactive advanced user tutorial. You’ve mastered the advanced tools of discussion — and now you’re fully licensed!\n',
      slug: 'licensed',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 2,
      name: 'Member',
      description:
        '<a href="https://blog.discourse.org/2018/06/understanding-discourse-trust-levels/">Granted</a> invitations, group messaging, more likes',
      grant_count: 5041,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-user',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 4,
      system: true,
      long_description:
        'This badge is granted when you reach trust level 2. Thanks for participating over a period of weeks to truly join our community. You can now send invitations from your user page or individual topics, create group personal messages, and have more likes per day.\n',
      slug: 'member',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 7,
      name: 'Good Reply',
      description: 'Received 25 likes on a reply',
      grant_count: 182,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 3,
      system: true,
      long_description:
        'This badge is granted when your reply gets 25 likes. Your reply was exceptional and made the conversation much more interesting.\n',
      slug: 'good-reply',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 33,
      name: 'Out of Love',
      description: 'Used 50 likes in a day',
      grant_count: 60,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-heart',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you use all 50 of your daily likes. Remembering to take a moment and like the posts you enjoy and appreciate encourages your fellow community members to create even more great discussions in the future.\n',
      slug: 'out-of-love',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 47,
      name: 'Devotee',
      description: 'Visited 365 consecutive days',
      grant_count: 10,
      allow_title: false,
      multiple_grant: false,
      icon: 'far-eye',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted for visiting 365 consecutive days. Wow, an entire year!\n',
      slug: 'devotee',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 18,
      name: 'Nice Topic',
      description: 'Received 10 likes on a topic',
      grant_count: 802,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 3,
      system: true,
      long_description:
        'This badge is granted when your topic gets 10 likes. You started an interesting conversation that the community enjoyed.\n',
      slug: 'nice-topic',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 39,
      name: 'Empathetic',
      description: 'Has 500 liked posts and gave 1000 likes',
      grant_count: 10,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-heart',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you have 500 liked posts and give 1000 or more likes in return. Wow! You’re a model of generosity and mutual appreciation :two_hearts:.\n',
      slug: 'empathetic',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 31,
      name: 'Admired',
      description: 'Received 5 likes on 300 posts',
      grant_count: 1,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-heart',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you receive at least 5 likes on 300 different posts. Wow! The community admires your frequent, high quality contributions to the conversations here.\n',
      slug: 'admired',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 28,
      name: 'Popular Link',
      description: 'Posted an external link with 50 clicks',
      grant_count: 10329,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 3,
      system: true,
      long_description:
        'This badge is granted when a link you shared gets 50 clicks. Thanks for posting a useful link that added interesting context to the conversation!\n',
      slug: 'popular-link',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 36,
      name: 'Appreciated',
      description: 'Received 1 like on 20 posts',
      grant_count: 764,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-heart',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you receive at least one like on 20 different posts. The community is enjoying your contributions to the conversations here!\n',
      slug: 'appreciated',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 42,
      name: 'First Onebox',
      description: 'Posted a link that was oneboxed',
      grant_count: 26300,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you post a link on a line by itself, which automatically expanded into a onebox with a summary, title, and (when available) picture.\n',
      slug: 'first-onebox',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 23,
      name: 'Great Share',
      description: 'Shared a post with 1000 unique visitors',
      grant_count: 3,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted for sharing a link that was clicked by 1000 outside visitors. Wow! You’ve promoted an interesting discussion to a huge new audience, and helped us grow our community in a big way!\n',
      slug: 'great-share',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 8,
      name: 'Great Reply',
      description: 'Received 50 likes on a reply',
      grant_count: 34,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 3,
      system: true,
      long_description:
        'This badge is granted when your reply gets 50 likes. Wow! Your reply was inspiring, fascinating, hilarious, or insightful and the community loved it!\n',
      slug: 'great-reply',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 19,
      name: 'Good Topic',
      description: 'Received 25 likes on a topic',
      grant_count: 278,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 3,
      system: true,
      long_description:
        'This badge is granted when your topic gets 25 likes. You launched a vibrant conversation that the community rallied around.\n',
      slug: 'good-topic',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 29,
      name: 'Hot Link',
      description: 'Posted an external link with 300 clicks',
      grant_count: 1806,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 3,
      system: true,
      long_description:
        'This badge is granted when a link you shared gets 300 clicks. Thanks for posting a fascinating link that drove the conversation forward and illuminated the discussion!\n',
      slug: 'hot-link',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 13,
      name: 'First Flag',
      description: 'Flagged a post',
      grant_count: 635,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you flag a post. Flagging is how we all help keep this a nice place for everyone. If you notice any posts that require moderator attention for any reason please don’t hesitate to flag. If you see a problem, :flag_black: flag it!\n',
      slug: 'first-flag',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 46,
      name: 'Aficionado',
      description: 'Visited 100 consecutive days',
      grant_count: 73,
      allow_title: false,
      multiple_grant: false,
      icon: 'far-eye',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted for visiting 100 consecutive days. That’s more than three months!\n',
      slug: 'aficionado',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 20,
      name: 'Great Topic',
      description: 'Received 50 likes on a topic',
      grant_count: 125,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 3,
      system: true,
      long_description:
        'This badge is granted when your topic gets 50 likes. You kicked off a fascinating conversation and the community loved the lively discussion that resulted!\n',
      slug: 'great-topic',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 15,
      name: 'First Quote',
      description: 'Quoted a post',
      grant_count: 4973,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you quote a post in your reply. Quoting relevant parts of earlier posts in your reply helps keep discussions connected together and on topic. The easiest way to quote is to highlight a section of a post, and then press any reply button. Quote generously!\n',
      slug: 'first-quote',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 48,
      name: 'Wiki Editor',
      description: 'First wiki edit',
      grant_count: 222,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you edit one wiki post.\n',
      slug: 'wiki-editor',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 37,
      name: 'Respected',
      description: 'Received 2 likes on 100 posts',
      grant_count: 31,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-heart',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you receive at least 2 likes on 100 different posts. The community is growing to respect your many contributions to the conversations here.\n',
      slug: 'respected',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 10,
      name: 'Editor',
      description: 'First post edit',
      grant_count: 24031,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you edit one of your posts. While you won’t be able to edit your posts forever, editing is encouraged — you can improve the formatting, fix small mistakes, or add anything you missed when you originally posted. Edit to make your posts even better!\n',
      slug: 'editor',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 35,
      name: 'Crazy in Love',
      description: 'Used 50 likes in a day 20 times',
      grant_count: 1,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-heart',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you use all 50 of your daily likes for 20 days. Wow! You’re a role model for encouraging your fellow community members!\n',
      slug: 'crazy-in-love',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 30,
      name: 'Famous Link',
      description: 'Posted an external link with 1000 clicks',
      grant_count: 473,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 3,
      system: true,
      long_description:
        'This badge is granted when a link you shared gets 1000 clicks. Wow! You posted a link that significantly improved the conversation by adding essential detail, context, and information. Great work!\n',
      slug: 'famous-link',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 17,
      name: 'Reader',
      description: 'Read every reply in a topic with more than 100 replies',
      grant_count: 672,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you read a long topic with more than 100 replies. Reading a conversation closely helps you follow the discussion, understand different viewpoints, and leads to more interesting conversations. The more you read, the better the conversation gets. As we like to say, Reading is Fundamental! :slight_smile:\n',
      slug: 'reader',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 32,
      name: 'Gives Back',
      description: 'Has 100 liked posts and gave 100 likes',
      grant_count: 91,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-heart',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you have 100 liked posts and give 100 or more likes in return. Thanks for paying it forward!\n',
      slug: 'gives-back',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 9,
      name: 'Autobiographer',
      description:
        'Filled out <a href="/my/preferences/profile">profile</a> information',
      grant_count: 6831,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted for filling out <a href="/my/preferences/profile">your user profile</a> and selecting a profile picture. Letting the community know a bit more about who you are and what you’re interested in makes for a better, more connected community. Join us!\n',
      slug: 'autobiographer',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 40,
      name: 'First Mention',
      description: 'Mentioned a user in a post',
      grant_count: 7233,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you mention someone’s @username in your post. Each mention generates a notification to that person, so they know about your post. Just begin typing @ (at symbol) to mention any user or, if allowed, group – it’s a convenient way to bring something to their attention.\n',
      slug: 'first-mention',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 5,
      name: 'Welcome',
      description: 'Received a like',
      grant_count: 27265,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you receive your first like on a post. Congratulations, you’ve posted something that your fellow community members found interesting, cool, or useful!\n',
      slug: 'welcome',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 1,
      name: 'Basic',
      description:
        '<a href="https://blog.discourse.org/2018/06/understanding-discourse-trust-levels/">Granted</a> all essential community functions',
      grant_count: 88581,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-user',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 4,
      system: true,
      long_description:
        'This badge is granted when you reach trust level 1. Thanks for sticking around and reading a few topics to learn what our community is about. New user restrictions have been lifted; you’ve been granted all essential community abilities, such as personal messaging, flagging, wiki editing, and the ability to post multiple images and links.\n',
      slug: 'basic',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 3,
      name: 'Regular',
      description:
        '<a href="https://blog.discourse.org/2018/06/understanding-discourse-trust-levels/">Granted</a> recategorize, rename, followed links, wiki, more likes',
      grant_count: 161,
      allow_title: true,
      multiple_grant: false,
      icon: 'fa-user',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 4,
      system: true,
      long_description:
        'This badge is granted when you reach trust level 3. Thanks for being a regular part of our community over a period of months. You’re now one of the most active readers, and a reliable contributor that makes our community great. You can now recategorize and rename topics, take advantage of more powerful spam flags, access a private lounge area, and you’ll also get lots more likes per day.\n',
      slug: 'regular',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 4,
      name: 'Leader',
      description:
        '<a href="https://blog.discourse.org/2018/06/understanding-discourse-trust-levels/">Granted</a> global edit, pin, close, archive, split and merge, more likes',
      grant_count: 161,
      allow_title: true,
      multiple_grant: false,
      icon: 'fa-user',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 4,
      system: true,
      long_description:
        'This badge is granted when you reach trust level 4. You’re a leader in this community as selected by staff, and you set a positive example for the rest of the community in your actions and words here. You have the ability to edit all posts, take common topic moderator actions such as pin, close, unlist, archive, split, and merge.\n',
      slug: 'leader',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 1
    },
    {
      id: 34,
      name: 'Higher Love',
      description: 'Used 50 likes in a day 5 times',
      grant_count: 4,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-heart',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you use all 50 of your daily likes for 5 days. Thanks for taking the time actively encouraging the best conversations every day!\n',
      slug: 'higher-love',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 12,
      name: 'First Share',
      description: 'Shared a post',
      grant_count: 1091,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you share a link to a reply or topic using the share button. Sharing links is a great way to show off interesting discussions with the rest of the world and grow your community.\n',
      slug: 'first-share',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 21,
      name: 'Nice Share',
      description: 'Shared a post with 25 unique visitors',
      grant_count: 718,
      allow_title: false,
      multiple_grant: true,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted for sharing a link that was clicked by 25 outside visitors. Thanks for spreading the word about our discussions, and this community.\n',
      slug: 'nice-share',
      has_badge: false,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 11,
      name: 'First Like',
      description: 'Liked a post',
      grant_count: 41587,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted the first time you like a post using the :heart: button. Liking posts is a great way to let your fellow community members know that what they posted was interesting, useful, cool, or fun. Share the love!\n',
      slug: 'first-like',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 45,
      name: 'Enthusiast',
      description: 'Visited 10 consecutive days',
      grant_count: 6467,
      allow_title: false,
      multiple_grant: false,
      icon: 'far-eye',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted for visiting 10 consecutive days. Thanks for sticking with us for over a week!\n',
      slug: 'enthusiast',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 110,
      name: 'Amazing contributor',
      description: 'contributed 250 accepted pull requests',
      grant_count: 5,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 5,
      system: false,
      long_description: '',
      slug: 'amazing-contributor',
      has_badge: false,
      manually_grantable: true,
      badge_type_id: 1
    },
    {
      id: 16,
      name: 'Read Guidelines',
      description: 'Read the <a href="/guidelines">community guidelines</a>',
      grant_count: 10228,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 1,
      system: true,
      long_description:
        'This badge is granted for <a href="/guidelines">reading the community guidelines</a>. Following and sharing these simple guidelines helps build a safe, fun, and sustainable community for everyone. Always remember there’s another human being, one very much like yourself, on the other side of that screen. Be nice!\n',
      slug: 'read-guidelines',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 3
    },
    {
      id: 24,
      name: 'Anniversary',
      description: 'Active member for a year, posted at least once',
      grant_count: 40235,
      allow_title: false,
      multiple_grant: true,
      icon: 'far-clock',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 2,
      system: true,
      long_description:
        'This badge is granted when you’ve been a member for a year with at least one post in that year. Thank you for sticking around and contributing to our community. We couldn’t do it without you.\n',
      slug: 'anniversary',
      has_badge: true,
      manually_grantable: false,
      badge_type_id: 2
    },
    {
      id: 109,
      name: 'Great contributor',
      description: 'contributed 25 accepted pull requests',
      grant_count: 36,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 5,
      system: false,
      long_description: '',
      slug: 'great-contributor',
      has_badge: true,
      manually_grantable: true,
      badge_type_id: 2
    },
    {
      id: 108,
      name: 'Contributor',
      description: 'contributed an accepted pull request',
      grant_count: 952,
      allow_title: false,
      multiple_grant: false,
      icon: 'fa-certificate',
      image_url: null,
      listable: true,
      enabled: true,
      badge_grouping_id: 5,
      system: false,
      long_description: '',
      slug: 'contributor',
      has_badge: true,
      manually_grantable: true,
      badge_type_id: 3
    }
  ]
};

interface Badge {
  id: number;
  name: string;
  description: string;
  grant_count: number;
  allow_title: boolean;
  multiple_grant: boolean;
  icon: [string, string];
  image_url: null | string;
  listable: boolean;
  enabled: boolean;
  badge_grouping_id: number;
  system: boolean;
  long_description: string;
  slug: string;
  has_badge: boolean;
  manually_grantable: boolean;
  badge_type_id: number;
}
/* eslint-enable */

function parseIcon(icon: string): [string, string] {
  const iconParts = icon.split('-');
  return [
    iconParts[0] === 'fa' ? 'fas' : iconParts[0],
    iconParts.slice(1).join('-')
  ];
}
function parseDescription(description: string) {
  // remove a tag from the description
  const tag = /<a.*?>(.*?)<\/a>/.exec(description);
  if (tag) {
    return description.replace(tag[0], '');
  }
  return description;
}

const Badges = ({ email }: { email: string }): JSX.Element => {
  const [badges, setBadges] = React.useState<Badge[]>([]);
  useEffect(() => {
    if (email) {
      console.log(email);
      void (async () => {
        // const response = await fetch(
        //   `https://forum.freecodecamp.org/badges.json?only_listable=true&onlyListable=true`
        // );
        // const data = await response.json();
        // console.log(data);
        const badgesParsed = badgesTest.badges
          .filter(badge => badge.has_badge)
          .map(badge => ({
            ...badge,
            icon: parseIcon(badge.icon),
            description: parseDescription(badge.description)
          }));
        setBadges(badgesParsed);
      })();
    }
  }, []);

  return (
    <div className='badges'>
      {badges.map(badge => {
        return (
          <div className='badge-contents' key={badge.id}>
            <a className='badge-icon badge-type-bronze' href={`#a`}>
              <FontAwesomeIcon icon={badge.icon} size='3x' />
            </a>
            <div className='badge-info'>
              <div className='badge-info-item'>
                <h3>
                  <a className='badge-link' href={`#a`}>
                    {badge.name}
                  </a>
                </h3>
                <div className='badge-summary'>{badge.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Badges;
