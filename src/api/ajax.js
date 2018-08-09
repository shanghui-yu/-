import wepy from 'wepy'
const fetch = ({url, body, type}) => {
  if (type === 'POST') {
    return wepy.request({ url, data: body, method: 'POST' })
  } else {
    return wepy.request({ url, data: body })
  }
}

export default fetch
