import { usePlayback } from '../contextAPI/PlaybackProvider';
import { tokenData } from '../contextAPI/AuthProvider';

const PlaybackControls = () => {
  const { deviceId } = usePlayback();
  const token = tokenData.access_token;

  const handlePlayPause = async () => {
    await fetch(
      `https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`,
      {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
      },
    );
  };

  const handleNextTrack = async () => {
    await fetch(
      `https://api.spotify.com/v1/me/player/next?device_id=${deviceId}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      },
    );
  };

  const handlePrevTrack = async () => {
    await fetch(
      `https://api.spotify.com/v1/me/player/previous?device_id=${deviceId}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
      },
    );
  };

  return (
    <div>
      <button onClick={handlePrevTrack}>⏮ Prev</button>
      <button onClick={handlePlayPause}>⏯ Play/Pause</button>
      <button onClick={handleNextTrack}>⏭ Next</button>
    </div>
  );
};

export default PlaybackControls;
