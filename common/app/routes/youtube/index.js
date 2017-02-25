import YoutubeVideo from './components/YoutubeVideo.jsx';

export default function youtubeVideoRoute() {
  return {
    path: 'youtube/:playlist/:video',
    component: YoutubeVideo
  };
}
