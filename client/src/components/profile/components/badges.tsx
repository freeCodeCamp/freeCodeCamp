import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './badges.css';
import { getUserBadges } from '../../../utils/ajax';
import { Badge, BadgeData } from '../../../redux/prop-types';

library.add(fas, fab, far);

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

// @ts-expect-error TypeScript is wrong
interface BadgeMod extends Badge {
  icon: [string, string];
}

const Badges = ({ email }: { email: string }): JSX.Element => {
  const [badges, setBadges] = React.useState<BadgeMod[]>([]);
  useEffect(() => {
    if (email) {
      console.log(email);
      void (async () => {
        const response = await getUserBadges('sky020');
        const data = JSON.parse(response) as BadgeData;
        console.log(data);
        const badgesParsed = data.badges.map(badge => ({
          ...badge,
          icon: parseIcon(badge.icon),
          description: parseDescription(badge.description)
        }));
        setBadges(badgesParsed);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='badges'>
      {badges.map(badge => {
        return (
          <div className='badge-contents' key={badge.id}>
            <a className='badge-icon badge-type-bronze' href={`#a`}>
              {badge.image_url ? (
                <img alt={badge.description} src={badge.image_url} />
              ) : (
                // @ts-expect-error TODO: Strongly type icons
                <FontAwesomeIcon icon={badge.icon} size='3x' />
              )}
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
