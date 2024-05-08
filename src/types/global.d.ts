declare global {
  interface Window {
    onLocalStorageError: () => void
    isLocalStorageError: boolean
    gtag: (e: 'event', ...args: string[]) => void
    [key: string]: any
  }
}

declare module 'react' {
  /**传入第一个为params type，第二个为searchParams，传入union格式'a' | 'b' */
  export type SFC<P = string, SP = string> = {
    (
      props: {
        params: {
          [key in P]: string
        }
        searchParams: {
          [key in SP]: string
        }
      },
      context?: any
    ): ReactNode | Promise<ReactNode>
  }
}

export {}
