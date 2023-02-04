import React from 'react';
import { useTranslation } from 'react-i18next';

function Cup(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <span className='sr-only'>{t('icons.gold-cup')}</span>
      <svg
        height={200}
        version='1.1'
        viewBox='0 0 172 200'
        width={172}
        xmlns='http://www.w3.org/2000/svg'
        {...props}
      >
        <title>{t('icons.gold-cup')}</title>
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(-14)'>
            <g transform='translate(20)'>
              <rect
                fill='#ffbf00'
                height={22}
                id='b'
                transform='translate(80 166.5) rotate(-90) translate(-80 -166.5)'
                width={69}
                x='45.5'
                y='155.5'
              />
              <rect fill='#ffbf00' height={11} width={85} x={39} y={190} />
              <rect fill='#ffbf00' height={12} width={62} x={51} y={179} />
              <rect fill='#ffbf00' height={12} width={112} x={24} />
              <rect fill='#ffbf00' height={98} width={95} x={33} y={11} />
              <path
                d='m9.929 33.949c18.201-5.245 30.238-3.4924 36.112 5.258 8.8109 13.126-11.162 53.58-34.056 67.467-15.262 9.2576-15.948-14.984-2.056-72.724z'
                id='a'
                stroke='#ffbf00'
                strokeWidth={11}
                transform='translate(24.084 69.796) scale(-1 1) translate(-24.084 -69.796)'
              />
              <path
                d='m121.93 33.949c18.201-5.245 30.238-3.4924 36.112 5.258 8.8109 13.126-11.162 53.58-34.056 67.467-15.262 9.2576-15.948-14.984-2.056-72.724z'
                stroke='#ffbf00'
                strokeWidth={11}
              />
              <circle cx='80.5' cy='106.5' fill='#ffbf00' r='47.5' />
            </g>
          </g>
        </g>
      </svg>
    </>
  );
}

Cup.displayName = 'Cup';

export default Cup;
