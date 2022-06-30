# video downloader :clapper:

![puppeteer](https://img.shields.io/npm/v/puppeteer?color=green&label=puppeteer)

**video downloader** - nodejs script that downloads video from a link

*video downloader* uses the [request](https://www.npmjs.com/package/request) and [puppeteer](https://pptr.dev/) modules in its work.
Using the module [puppeteer](https://pptr.dev/) *video downloader* goes to the resource https://ru.fetchfile.net, inserts a link to the video in the input field, and gets a download link. Then using the [request](https://www.npmjs.com/package/request) module the video is downloaded using this link

## Usage

First, install the necessary dependencies using the command in the terminal:

`npm install`

Then pass the link to the video *(string)* and the file name as arguments when you call the start function *(string, without specifying the format, is automatically saved in mp4 format)*:

```javascript
start('link_to_the_video', 'filename')
```

## Contributing

Bug reports and/or pull requests are welcome

## License

The module is avaliable as open sourse under the terms of the [Apache License, Version 2.0](https://opensource.org/licenses/Apache-2.0)
