import { Button } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LangSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <>
      <Button onClick={() => i18n.changeLanguage('ru')}>Русский</Button>
      <Button onClick={() => i18n.changeLanguage('en')}>English</Button>
    </>
  )
}

export default LangSwitcher