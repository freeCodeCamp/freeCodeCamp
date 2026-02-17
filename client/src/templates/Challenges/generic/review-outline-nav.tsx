import React, { useEffect, useRef, useState } from 'react';
import { Button, Container } from '@freecodecamp/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, scrollSpy, scroller } from 'react-scroll';

import { ChallengeNode } from '../../../redux/prop-types';
import {
  buildReviewOutlineItems,
  reviewHeadingSelector,
  ReviewOutlineItem
} from './review-outline';

type ReviewOutlineNavProps = {
  closeLabel: string;
  description?: string;
  instructions?: string;
  menuLabel: string;
  nodules?: ChallengeNode['challenge']['nodules'];
  showInteractiveEditor: boolean;
  showReviewToggleInActionRow: boolean;
  children: React.ReactNode;
};

function ReviewOutlineNav({
  closeLabel,
  description,
  instructions,
  menuLabel,
  nodules,
  showInteractiveEditor,
  showReviewToggleInActionRow,
  children
}: ReviewOutlineNavProps) {
  const [showReviewOutline, setShowReviewOutline] = useState(false);
  const [reviewScrollOffset, setReviewScrollOffset] = useState(0);
  const [activeReviewHeadingId, setActiveReviewHeadingId] = useState<
    string | null
  >(null);
  const [reviewOutlineItems, setReviewOutlineItems] = useState<
    ReviewOutlineItem[]
  >([]);
  const reviewContentRef = useRef<HTMLDivElement | null>(null);
  const reviewOutlinePanelRef = useRef<HTMLElement | null>(null);

  const scrollToReviewHeading = (headingId: string) => {
    setActiveReviewHeadingId(headingId);

    scroller.scrollTo(headingId, {
      duration: 0,
      smooth: false,
      offset: reviewScrollOffset
    });
  };

  useEffect(() => {
    if (!reviewContentRef.current) {
      setReviewOutlineItems([]);
      return;
    }

    const headingElements = Array.from(
      reviewContentRef.current.querySelectorAll<HTMLHeadingElement>(
        reviewHeadingSelector
      )
    );
    const nextOutlineItems = buildReviewOutlineItems(headingElements);

    setReviewOutlineItems(nextOutlineItems);
  }, [
    description,
    instructions,
    nodules,
    showInteractiveEditor,
    showReviewOutline
  ]);

  useEffect(() => {
    const toPixels = (value: string) => Number.parseFloat(value) || 0;
    const updateOffset = () => {
      const rootStyle = window.getComputedStyle(document.documentElement);
      const headerHeight = toPixels(
        rootStyle.getPropertyValue('--header-height')
      );
      const breadcrumbsHeight = toPixels(
        rootStyle.getPropertyValue('--breadcrumbs-height')
      );
      const actionRowHeight = showReviewToggleInActionRow
        ? toPixels(rootStyle.getPropertyValue('--action-row-height'))
        : 0;

      setReviewScrollOffset(
        -(headerHeight + breadcrumbsHeight + actionRowHeight + 8)
      );
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);

    return () => window.removeEventListener('resize', updateOffset);
  }, [showReviewToggleInActionRow]);

  useEffect(() => {
    if (!showReviewOutline || reviewOutlineItems.length < 1) {
      setActiveReviewHeadingId(null);
      return;
    }

    let rafId: number | null = null;

    const updateActiveHeading = () => {
      const marker = window.scrollY + Math.abs(reviewScrollOffset) + 12;
      let nextActiveId: string | null = reviewOutlineItems[0]?.id ?? null;

      for (const item of reviewOutlineItems) {
        const heading = document.getElementById(item.id);
        if (!heading) continue;
        const headingTop = heading.getBoundingClientRect().top + window.scrollY;
        if (headingTop <= marker) {
          nextActiveId = item.id;
        } else {
          break;
        }
      }

      setActiveReviewHeadingId(prev =>
        prev === nextActiveId ? prev : nextActiveId
      );
      rafId = null;
    };

    const onScrollOrResize = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateActiveHeading);
    };

    updateActiveHeading();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [reviewOutlineItems, reviewScrollOffset, showReviewOutline]);

  useEffect(() => {
    if (
      !showReviewOutline ||
      !activeReviewHeadingId ||
      !reviewOutlinePanelRef.current
    ) {
      return;
    }

    const panel = reviewOutlinePanelRef.current;
    const activeLink = panel.querySelector<HTMLElement>(
      `.review-outline-link[data-review-id="${activeReviewHeadingId}"]`
    );
    if (!activeLink) return;

    const panelTop = panel.scrollTop;
    const panelBottom = panelTop + panel.clientHeight;
    const itemTop = activeLink.offsetTop;
    const itemBottom = itemTop + activeLink.offsetHeight;
    const edgeBuffer = 12;

    if (itemTop < panelTop + edgeBuffer) {
      panel.scrollTo({
        top: Math.max(0, itemTop - edgeBuffer),
        behavior: 'smooth'
      });
    } else if (itemBottom > panelBottom - edgeBuffer) {
      panel.scrollTo({
        top: Math.max(0, itemBottom - panel.clientHeight + edgeBuffer),
        behavior: 'smooth'
      });
    }
  }, [activeReviewHeadingId, showReviewOutline]);

  useEffect(() => {
    if (!showReviewOutline) return;

    const updateSpy = () => scrollSpy.update();
    updateSpy();
    const rafOne = window.requestAnimationFrame(updateSpy);
    const rafTwo = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(updateSpy);
    });

    return () => {
      window.cancelAnimationFrame(rafOne);
      window.cancelAnimationFrame(rafTwo);
    };
  }, [reviewOutlineItems, showInteractiveEditor, showReviewOutline]);

  const reviewOutlineToggleButton = (
    <Button
      aria-controls='review-outline-panel'
      aria-expanded={showReviewOutline}
      className={
        showReviewToggleInActionRow
          ? 'review-outline-toggle-btn-action-row'
          : undefined
      }
      onClick={() => setShowReviewOutline(current => !current)}
      style={{ alignSelf: 'flex-start' }}
    >
      <FontAwesomeIcon icon={faBars} />{' '}
      {showReviewOutline ? closeLabel : menuLabel}
    </Button>
  );

  return (
    <>
      {showReviewToggleInActionRow && reviewOutlineToggleButton}

      {showReviewOutline ? (
        <div className='review-layout-container'>
          <div className='review-layout-row'>
            <div className='review-sidebar-column'>
              {!showReviewToggleInActionRow && reviewOutlineToggleButton}
              <aside
                className='review-outline-panel'
                id='review-outline-panel'
                ref={reviewOutlinePanelRef}
              >
                <nav aria-label='Review outline'>
                  <ul className='review-outline-list'>
                    {reviewOutlineItems.map(item => (
                      <li
                        className={`review-outline-item review-outline-item-level-${item.level}`}
                        key={item.id}
                      >
                        <ScrollLink
                          className={`review-outline-link${
                            activeReviewHeadingId === item.id ? ' active' : ''
                          }`}
                          data-review-id={item.id}
                          duration={0}
                          isDynamic={true}
                          offset={reviewScrollOffset}
                          onClick={() => scrollToReviewHeading(item.id)}
                          smooth={false}
                          to={item.id}
                        >
                          {item.text}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            </div>
            <div className='review-main-column'>
              <div ref={reviewContentRef}>{children}</div>
            </div>
          </div>
        </div>
      ) : (
        <Container>
          <div ref={reviewContentRef}>{children}</div>
        </Container>
      )}
    </>
  );
}

ReviewOutlineNav.displayName = 'ReviewOutlineNav';

export default ReviewOutlineNav;
