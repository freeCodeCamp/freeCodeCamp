import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import store from 'store';
import type { Player } from 'tone';
import { userSelector } from '../../redux/selectors';
import { User } from '../../redux/prop-types';

interface CampfireManagerProps {
  ambientSound: boolean;
}

const mapStateToProps = createSelector(userSelector, (user: User | null) => ({
  ambientSound: user?.ambientSound ?? false
}));

const CampfireManager = ({ ambientSound }: CampfireManagerProps): null => {
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    const initTone = async () => {
      const Tone = (await import('tone')) as typeof import('tone');

      if (!playerRef.current) {
        playerRef.current = new Tone.Player({
          url: 'https://campfire-mode.freecodecamp.org/ambient.mp3',
          loop: true,
          autostart: false
        }).toDestination();
      }

      const player = playerRef.current;

      if (ambientSound) {
        const storedVolume = (store.get('soundVolume') as number) ?? 50;
        const calculateDecibel = -60 * (1 - storedVolume / 100);
        player.volume.value = calculateDecibel;

        await Tone.loaded();
        if (player.state !== 'started') {
          player.start();
        }
      } else {
        if (player.state === 'started') {
          player.stop();
        }
      }
    };

    void initTone();

    return () => {
      if (playerRef.current) {
        playerRef.current.stop();
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [ambientSound]);

  // Volume synchronization
  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current && ambientSound) {
        const storedVolume = (store.get('soundVolume') as number) ?? 50;
        const calculateDecibel = -60 * (1 - storedVolume / 100);
        if (playerRef.current.volume.value !== calculateDecibel) {
          playerRef.current.volume.value = calculateDecibel;
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [ambientSound]);

  return null;
};

export default connect(mapStateToProps)(CampfireManager);
