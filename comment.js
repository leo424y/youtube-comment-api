/*jshint esversion: 6 */

const fetchCommentPage = require('./index');
const videoId = process.argv[2];

const fs = require('fs');

console.log(videoId);
fetchCommentPage(videoId)
  .then(commentPage => {
    console.log(commentPage.comments);
    fs.writeFileSync('./result/'+ process.argv[2] + '.json', JSON.stringify(commentPage.comments));
    return fetchCommentPage(videoId, commentPage.nextPageToken);
  })
  .then(commentPage => {
    console.log(commentPage.comments);
  });
