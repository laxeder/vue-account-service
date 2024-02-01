import type { PiniaPluginContext } from 'pinia'

export function localStoragePiniaPlugin({ store }: PiniaPluginContext) {
  store.$subscribe((mutation, state) => {
    try {
      localStorage.setItem(mutation.storeId, JSON.stringify(state))
    } catch (err) {
      console.error(`Cannot save storage "${store.$id}"\n${err}`)
    }
  })

  const localStore = localStorage.getItem(store.$id)

  if (localStore) {
    try {
      store.$state = JSON.parse(localStore)
    } catch (err) {
      console.error(`Cannot restore storage "${store.$id}"\n${err}`)
    }
  }
}
