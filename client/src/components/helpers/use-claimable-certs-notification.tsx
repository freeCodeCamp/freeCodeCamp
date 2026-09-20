import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  claimableCertsSelector,
  userFetchStateSelector
} from '../../redux/selectors';
import { createFlashMessage } from '../Flash/redux';
import { FlashMessages } from '../Flash/redux/flash-messages';

export function useClaimableCertsNotification() {
  const dispatch = useDispatch();
  const claimableCerts = useSelector<unknown, { certTitle: string }[]>(
    claimableCertsSelector
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { complete } = useSelector(userFetchStateSelector);
  const hasShownNotification = useRef(false);

  useEffect(() => {
    if (!complete || hasShownNotification.current) return;
    if (claimableCerts.length === 0) return;

    hasShownNotification.current = true;

    // Only one cert is shown as claimable at a time
    const certName = claimableCerts.at(0)!.certTitle;

    dispatch(
      createFlashMessage({
        type: 'info',
        message: FlashMessages.CertsClaimable,
        variables: { certName }
      })
    );
  }, [claimableCerts, complete, dispatch]);
}
