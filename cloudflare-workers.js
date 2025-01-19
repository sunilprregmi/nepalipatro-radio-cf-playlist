addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const radioResponse = await fetch('https://radio-and-podcast.nepalipatro.com.np/api/public/radio/v1/radios?sort_by=asc&platform=android')
  const provinceResponse = await fetch('https://radio-and-podcast.nepalipatro.com.np/api/public/province/v1/provinces')
  const radioData = await radioResponse.json()
  const provinceData = await provinceResponse.json()

  const provinceMap = {}
  provinceData.forEach(province => {
    provinceMap[province.id] = province.province_name
  })

  let playlist = '#EXTM3U\n'
      playlist += '# Project Of Sunil Prasad @ sunilprasad.com.np\n';
      playlist += '# All Sources are Scrapped From Nepali Patro\n\n'

  radioData.forEach(station => {
    const tvgId = station.id
    const tvgName = station.station_name
    const tvgLogo = station.image
    const tvgGroup = provinceMap[station.province]
    const name = station.station_name
    const url = station.streaming_url

    playlist += `#EXTINF:-1 tvg-id="${tvgId}" tvg-name="${tvgName.replace(/ /g, '-').toLowerCase()}" tvg-logo="${tvgLogo}" group-title="${tvgGroup}", ${name}\n${url}\n\n`
  })

  return new Response(playlist, { status: 200, headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET', 'Access-Control-Allow-Headers': 'Authorization' }})
}
