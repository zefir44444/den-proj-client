import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TestComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t('test')}</div>  
    </div>
  );
}
