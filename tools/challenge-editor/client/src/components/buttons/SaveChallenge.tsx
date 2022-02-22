import { ChallengeContentRequiredProps } from '../../../interfaces/PropTypes';

const SaveChallenge = ({
  superblock,
  block,
  challenge,
  content
}: ChallengeContentRequiredProps) => {
  const save = () => {
    console.log(content);
    fetch(`http://localhost:3200/${superblock}/${block}/${challenge}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    })
      .then(res => res.text())
      .then(data => alert(data));
  };

  return <button onClick={save}>Save Changes</button>;
};

export default SaveChallenge;
