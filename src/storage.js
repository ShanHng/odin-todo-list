const storage = (() => {
  let storage
  // taken from https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  function storageAvailable (type) {
    try {
      storage = window[type]
      const x = '__storage_test__'
      storage.setItem(x, x)
      storage.removeItem(x)
      return true
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      )
    }
  }

  function saveData (object) {
    if (storageAvailable('localStorage')) {
      storage.setItem('data', JSON.stringify(object))
      markPageAsVisited()
    } else {
      console.log('Local storage not available for data saving.')
    }
  }

  function getData () {
    if (storageAvailable('localStorage')) {
        return JSON.parse(storage.getItem('data'))
    } else {
        console.log('Local storage not available for data loading.')
    }
  }

  function isPageVisited () {
    if (storageAvailable('localStorage')) {
        return Boolean(Number(storage.getItem('isPageVisited')))
    } else {
        console.log('Local storage not available for data loading.')
    }
  }

  function markPageAsVisited() {
    if (storageAvailable('localStorage')) {
        storage.setItem('isPageVisited', '1')
    } else {
        console.log('Local storage not available for data saving.')
    }
  }
  return {
    saveData,
    getData,
    isPageVisited
  }
})()

export default storage
