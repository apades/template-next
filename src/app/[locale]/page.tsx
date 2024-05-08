import useI18n from '@/hooks/useI18n'

export default function Home() {
  const { t } = useI18n()
  return (
    <div className="bg-gray-200 f-center">
      <div>{t('welcome')}</div>
    </div>
  )
}
