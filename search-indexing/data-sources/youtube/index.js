const { timer, from, zip, iif, of } = require('rxjs');
const { switchMap, concatMap } = require('rxjs/operators');
const { google } = require('googleapis');
const { chunkDocument, stripHTML, stripURLs } = require('../../utils');

const { YOUTUBE_SECRET } = process.env;
const youtube = google.youtube({ version: 'v3', auth: YOUTUBE_SECRET });

function getPlaylistItems(
  { playlistId, playlistTitle },
  nextPage,
  currentItems = []
) {
  return zip(
    timer(2000),
    from(
      new Promise((resolve, reject) => {
        youtube.playlistItems.list(
          {
            part: 'snippet',
            playlistId,
            pageToken: nextPage ? nextPage : ''
          },
          (err, data) => {
            if (err) {
              return reject(err);
            }
            return resolve({ ...data.data, playlistTitle });
          }
        );
      })
    ),
    (a, b) => b
  ).pipe(
    switchMap(({ nextPageToken, items, playlistTitle }) => {
      const allItems = currentItems.concat(items);
      return iif(
        () => !!nextPageToken,
        getPlaylistItems(
          { playlistId, playlistTitle },
          nextPageToken,
          allItems
        ),
        of({ videos: allItems, playlistTitle })
      );
    })
  );
}

function getPlayLists(nextPage, currentItems = []) {
  return from(
    new Promise((resolve, reject) => {
      youtube.playlists.list(
        {
          auth: YOUTUBE_SECRET,
          part: 'snippet',
          channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
          pageToken: nextPage ? nextPage : ''
        },
        (err, data) => {
          if (err) {
            return reject(err);
          }
          return resolve(data.data);
        }
      );
    })
  ).pipe(
    switchMap(({ nextPageToken, items }) => {
      const allItems = items.concat(currentItems);
      return iif(
        () => !!nextPageToken,
        getPlayLists(nextPageToken, allItems),
        of(allItems)
      );
    })
  );
}

exports.getYoutubeData = function getYoutubeData() {
  return getPlayLists().pipe(
    switchMap(playlists => {
      return from(playlists).pipe(
        concatMap(({ id, snippet: { title } }) =>
          getPlaylistItems({ playlistId: id, playlistTitle: title })
        )
      );
    }),
    switchMap(({ videos, playlistTitle }) => {
      const formattedVideos = videos
        .map(video => {
          const {
            id,
            snippet: {
              title,
              description,
              resourceId: { videoId },
              thumbnails
            }
          } = video;
          return {
            id,
            videoId,
            title: stripHTML(title),
            description: stripURLs(stripHTML(description)),
            thumbnails,
            playlistTitle
          };
        })
        .reduce(
          (chunked, current) => [
            ...chunked,
            ...chunkDocument(
              current,
              ['id', 'videoId', 'title', 'thumbnail', 'playlistTitle'],
              'description'
            )
          ],
          []
        );
      return of(formattedVideos);
    })
  );
};
