import React from 'react'; //, ReactElement } from 'react';
import { Col, Spacer } from '@freecodecamp/ui';
import { useTranslation } from 'react-i18next';
import { Loader } from '../../../../components/helpers';
import ClosedCaptionsIcon from '../../../../assets/icons/closedcaptions';
import { images, backgrounds } from './scene-assets';
import Character from './character';
import { useScene } from './use-scene';

import './scene.css';

type Props = ReturnType<typeof useScene> & {
  setIsPlaying: (shouldPlay: boolean) => void;
  isPlaying: boolean;
};

export function Scene({
  background,
  characters,
  sceneIsReady,
  dialogue,
  showDialogue,
  alwaysShowDialogue,
  accessibilityOn,
  setAccessibilityOn,
  isPlaying,
  setIsPlaying
}: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <Col lg={10} lgOffset={1} md={10} mdOffset={1}>
      <div
        className='scene-wrapper'
        style={{
          backgroundImage: `url("${backgrounds}/${background}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          aspectRatio: '16 / 9'
        }}
      >
        {!sceneIsReady ? (
          <Loader />
        ) : (
          <>
            {characters.map(
              (
                { character, position = {}, opacity = 1, isTalking = false },
                i
              ) => {
                return (
                  <Character
                    key={i}
                    name={character}
                    position={position}
                    opacity={opacity}
                    isTalking={isTalking}
                    isBlinking={isPlaying}
                  />
                );
              }
            )}

            {showDialogue && (alwaysShowDialogue || accessibilityOn) && (
              <div
                className={`scene-dialogue-wrap ${
                  dialogue.align ? `scene-dialogue-align-${dialogue.align}` : ''
                }`}
              >
                <div className='scene-dialogue-label'>{dialogue.label}</div>
                <div className='scene-dialogue-text'>{dialogue.text}</div>
              </div>
            )}

            {!isPlaying && (
              <div className='scene-start-screen'>
                <button
                  className='scene-start-btn scene-play-btn'
                  onClick={() => {
                    setIsPlaying(true);
                  }}
                >
                  <img
                    src={`${images}/play-button.png`}
                    alt={t('buttons.play-scene')}
                  />
                </button>

                {!alwaysShowDialogue && (
                  <button
                    className='scene-start-btn scene-a11y-btn'
                    aria-label={t('buttons.closed-caption')}
                    aria-pressed={accessibilityOn}
                    onClick={() => setAccessibilityOn(!accessibilityOn)}
                  >
                    <ClosedCaptionsIcon
                      fill={
                        accessibilityOn ? 'var(--gray-00)' : 'var(--gray-15)'
                      }
                    />
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>
      <Spacer size='m' />
    </Col>
  );
}

Scene.displayName = 'Scene';

export default Scene;
