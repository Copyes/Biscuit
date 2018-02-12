import extend from './extend'

export function get(name: string): any {
  if (!document) return

  let cookies: any = {}

  document.cookie.split(';').forEach(cookie => {
    let cookieArr: Array<string> = []

    cookieArr = cookie.split('=')
    if (cookieArr.length !== 2) return

    let itemName: string = decodeURIComponent(cookieArr[0].trim())

    let itemValue: string = decodeURIComponent(cookieArr[1].trim())

    cookies[itemName] = itemValue
  })
  return typeof name === undefined ? cookies : cookies[name] || null
}

export function set(name: string, value: string = '', options: any = {}): void {
  if (!document) return

  name = encodeURIComponent(name)
  value = encodeURIComponent(value)
  let { path, domain, secure, expires } = options

  let cookie: Array<string> = [
    `${name}=${value}`,
    typeof path === undefined ? '' : `;path=${path}`,
    typeof domain === undefined ? '' : `;domain=${domain}`,
    typeof expires === undefined
      ? ''
      : `;expires=${new Date(Date.now() + expires * 24 * 60 * 60 * 1000).toUTCString()}`,
    typeof secure === undefined ? '' : `;secure=${secure}`
  ]

  let cookieStr = cookie.join('')

  document.cookie = cookieStr
}

export function remove(name: string, attrs: any = {}) {
  set(
    name,
    '',
    extend(attrs, {
      expires: -1
    })
  )
}

export default {
  get,
  set,
  remove
}
