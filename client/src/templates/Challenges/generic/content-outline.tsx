import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link as ScrollLink, scroller } from 'react-scroll';

import { ChallengeNode } from '../../../redux/prop-types';
import SidebarPanel, {
  useActiveHeading,
  useStickyScrollOffset
} from '../../../components/sidebar-panel';
import { MAX_MOBILE_WIDTH } from '../../../../config/misc';

import './content-outline.css';

export interface ContentOutlineItem {
  id: string;
  level: 1 | 2 | 3;
  text: string;
}

export const contentHeadingSelector = 'h2, h3';

export const createAnchorId = (value: string): string =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');

export const buildContentOutlineItems = (
  headingElements: HTMLHeadingElement[]
): ContentOutlineItem[] => {
  const idCounts = new Map<string, number>();

  return headingElements
    .map((heading, index) => {
      const text = heading.textContent?.trim() ?? '';
      if (!text) {
        return null;
      }

      const baseId = heading.id || createAnchorId(text);
      const normalizedBaseId = baseId || `content-section-${index + 1}`;
      const count = (idCounts.get(normalizedBaseId) ?? 0) + 1;
      idCounts.set(normalizedBaseId, count);
      const id = count > 1 ? `${normalizedBaseId}-${count}` : normalizedBaseId;

      if (heading.id !== id) {
        heading.id = id;
      }

      return {
        id,
        level: heading.tagName === 'H3' ? 3 : 2,
        text
      };
    })
    .filter((item): item is ContentOutlineItem => item !== null);
};

type ContentOutlineProps = {
  description?: string;
  instructions?: string;
  nodules?: ChallengeNode['challenge']['nodules'];
  showInteractiveEditor: boolean;
  showOutline: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

function ContentOutline({
  description,
  instructions,
  nodules,
  showInteractiveEditor,
  showOutline: showContentOutline,
  onClose,
  children
}: ContentOutlineProps) {
  const isMobileSidebar = useMediaQuery({ maxWidth: MAX_MOBILE_WIDTH });
  const [contentOutlineItems, setContentOutlineItems] = useState<
    ContentOutlineItem[]
  >([]);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const contentScrollOffset = useStickyScrollOffset(
    ['--header-height', '--breadcrumbs-height', '--action-row-height'],
    8
  );

  const activeHeadingId = useActiveHeading(
    showContentOutline ? contentOutlineItems.map(item => item.id) : [],
    contentScrollOffset
  );

  const handleItemClick = React.useCallback(
    (id: string) => {
      scroller.scrollTo(id, {
        duration: 0,
        smooth: false,
        offset: contentScrollOffset
      });
      if (isMobileSidebar) {
        onClose?.();
      }
    },
    [contentScrollOffset, isMobileSidebar, onClose]
  );

  useEffect(() => {
    if (!contentRef.current) {
      setContentOutlineItems([]);
      return;
    }

    const headingElements = Array.from(
      contentRef.current.querySelectorAll<HTMLHeadingElement>(
        contentHeadingSelector
      )
    );
    const nextOutlineItems = buildContentOutlineItems(headingElements);

    setContentOutlineItems(nextOutlineItems);
  }, [
    description,
    instructions,
    nodules,
    showInteractiveEditor,
    showContentOutline
  ]);

  return (
    <div className='content-layout-container'>
      <div className='content-layout-row'>
        {showContentOutline && (
          <div className='content-sidebar-column'>
            <SidebarPanel className='content-outline-panel'>
              <nav aria-label='Content outline'>
                <ul className='content-outline-list'>
                  {contentOutlineItems.map(item => (
                    <SidebarPanel.Item
                      className={`content-outline-item content-outline-item-level-${item.level}`}
                      key={item.id}
                    >
                      <ScrollLink
                        className={`content-outline-link${activeHeadingId === item.id ? ' active' : ''}`}
                        duration={0}
                        isDynamic={true}
                        offset={contentScrollOffset}
                        onClick={() => handleItemClick(item.id)}
                        smooth={false}
                        to={item.id}
                      >
                        {item.text}
                      </ScrollLink>
                    </SidebarPanel.Item>
                  ))}
                </ul>
              </nav>
            </SidebarPanel>
          </div>
        )}
        <div className='content-main-column'>
          <div ref={contentRef}>{children}</div>
        </div>
      </div>
    </div>
  );
}

ContentOutline.displayName = 'ContentOutline';

export default ContentOutline;
