import { Language } from '@/utils/lang'

declare global {
  interface Window {
    onLocalStorageError: () => void
    isLocalStorageError: boolean
    gtag: (e: 'event', ...args: string[]) => void
    [key: string]: any
  }
}

declare module 'react' {
  /**
   * Server layout function component
   *
   * 传入第一个为params type，第二个为searchParams，传入union格式'a' | 'b'
   *  */
  export type SFC<P = string, SP = string> = {
    (
      props: {
        params: {
          [key in P]: string
        } & {
          locale: Language
        }
        searchParams: {
          [key in SP]: string
        }
      },
      context?: any
    ): ReactNode | Promise<ReactNode>
  }

  /**Server layout function component */
  export type SLFC<P = string, SP = string> = SFC<P, SP> & {
    children: ReactNode
  }
}

export {}
