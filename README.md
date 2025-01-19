# NepaliPatro Radio Playlist Cloudflare Worker

This project is a Cloudflare Worker script that generates an M3U playlist containing streaming URLs of various Nepali radio stations. The data is scraped from NepaliPatro API and includes the following key details for each station:

- Station name
- Streaming URL
- Province
- Station logo

## How It Works

1. The Cloudflare Worker listens for incoming requests and fetches data from two NepaliPatro API endpoints:
   - `https://radio-and-podcast.nepalipatro.com.np/api/public/radio/v1/radios?sort_by=asc&platform=android` – Provides radio station information.
   - `https://radio-and-podcast.nepalipatro.com.np/api/public/province/v1/provinces` – Provides province details.

2. It maps the provinces to their respective stations and formats the data into an M3U playlist format.

3. The playlist is returned as plain text with headers allowing cross-origin requests.

## Output Example

```m3u
#EXTM3U
# Project Of Sunil Prasad @ sunilprasad.com.np
# All Sources are Scrapped From Nepali Patro

#EXTINF:-1 tvg-id="1234" tvg-name="station-name" tvg-logo="https://image.url" group-title="Province", Station Name
http://streaming.url
```

## Key Features
- Scrapes Nepali radio station data
- Organizes radio stations by province
- Outputs M3U playlist with streaming URLs
- CORS enabled for easy integration into web apps

## Access the Radio Playlist

The NepaliPatro Radio Playlist is live and accessible at the following URL:

[https://www.sunilprasad.com.np/radio](https://www.sunilprasad.com.np/radio)

You can use this link to access the dynamically generated M3U playlist of Nepali radio stations.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

**Project by:** [Sunil Prasad](https://sunilprasad.com.np)
