import { useTranslations } from 'standard/next-intl'

export default function useI18n() {
  const t = useTranslations()
  return { t }
}
