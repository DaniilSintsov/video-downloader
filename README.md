# video downloader :clapper:

![puppeteer](https://img.shields.io/npm/v/puppeteer?color=green&label=puppeteer)
![readline-sync](https://img.shields.io/npm/v/readline-sync?color=orange&label=readline-sync)

**video downloader** - nodejs script that downloads video from a link

*video downloader* uses the [readline-sync](https://www.npmjs.com/package/readline-sync), [puppeteer](https://pptr.dev/) and [request](https://www.npmjs.com/package/request) modules in its work.

Using the [readline-sync](https://www.npmjs.com/package/readline-sync) module 
*video downloader* receives a link to the page with the video, and the name of the file in which the downloaded video will be saved. 
With the help of the module [puppeteer](https://pptr.dev/) *video downloader* goes to the resource https://ru.fetchfile.net, 
inserts a link to the video in the input field and receives a download link. Then, using the [request](https://www.npmjs.com/package/request) 
module, the video is downloaded using this link

## Usage

First, install the necessary dependencies using the command in the terminal:

`npm install`

Then run the script using the command in the terminal:

`npm start`

The program will ask you to enter a link to the page with the 
video, and the name of the file where the downloaded video will 
be saved (you do not need to enter the file format, the video 
will be automatically saved in mp4). For example:

```
Link to the video page: https://site.com/video_1/
Filename: my_video
```

## Contributing

Bug reports and/or pull requests are welcome
