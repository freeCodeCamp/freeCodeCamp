import React from 'react';
import type { TFunction } from 'i18next';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Button, Spacer } from '@freecodecamp/ui';

const mapStateToProps = () => ({});

interface ToolPanelProps {
  guideUrl?: string;
  t: TFunction;
}

function ToolPanel({ guideUrl, t }: ToolPanelProps): JSX.Element {
  return (
    <div>
      {guideUrl && (
        <>
          <Button
            block={true}
            variant='primary'
            href={guideUrl}
            target='_blank'
          >
            {t('buttons.get-hint')}
          </Button>
          <Spacer size='xxs' />
        </>
      )}
    </div>
  );
}

ToolPanel.displayName = 'ProjectToolPanel';

export default connect(mapStateToProps)(withTranslation()(ToolPanel));
