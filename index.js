const puppeteer = require('puppeteer')
const request = require('request')
const readline = require('readline-sync')
const fs = require('fs')

function downloadFile(url, filename) {
  let totalBytes = 0
  let receivedBytes = 0

  request
    .get(url)
    .on('response', data => {
      totalBytes = data.headers['content-length']

      console.log(
        `Starting to download the file with a volume of ${Math.floor(totalBytes / (1024 * 1024))} MB`
      )
    })
    .on('data', chunk => {
      receivedBytes += chunk.length
      process.stdout.clearLine(-1)
      process.stdout.cursorTo(0)
      process.stdout.write(`${Math.floor((receivedBytes / totalBytes) * 100)}% has been downloaded`)
    })
    .pipe(fs.createWriteStream(`${filename}.mp4`))
}

async function getRealLink(downloadableVideoUrl) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://ru.fetchfile.net/')
  await page.setViewport({width: 1000, height: 500})

  const inputSelector = '#videoPath'
  const buttonSelector = '#home-submit'
  const downloadLinkSelector = '#table > tbody > tr > td:nth-child(3) > a.btn.btn-success.btn-xs.download-link'

  await page.waitForSelector(inputSelector)
  await page.$eval(inputSelector, (el, downloadableVideoUrl) => (el.value = downloadableVideoUrl), downloadableVideoUrl)

  await page.waitForSelector(buttonSelector)
  await page.click(buttonSelector)

  await page.waitForSelector(downloadLinkSelector)
  const realLink = await page.$eval(downloadLinkSelector, el => el.getAttribute('href'))
  await browser.close()

  return realLink
}

async function main() {
  const downloadableVideoUrl = await readline.question('Link to the video page: ')
  const filename = await readline.question('Filename: ')

  downloadFile(await getRealLink(`${downloadableVideoUrl}`), `${filename}`)
}

main()