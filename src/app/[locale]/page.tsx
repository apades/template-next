import useI18n from '@/hooks/useI18n'
import Link from '@/standard/Link'

export default function Home() {
  const { t } = useI18n()
  return (
    <div className="bg-gray-200 f-center">
      <div>{t('welcome')}</div>
      <Link href="/child">to child</Link>
    </div>
  )
}
