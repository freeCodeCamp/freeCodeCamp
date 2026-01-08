import { type SceneCommand } from '../../../../redux/prop-types';

export const buildTranscript = (commands: SceneCommand[]): string => {
  let transcriptText = '';
  commands.forEach(command => {
    if (command.character && command.dialogue && command.startTime) {
      transcriptText =
        transcriptText +
        '\n' +
        '<strong>' +
        command.character +
        '</strong>:' +
        ' ' +
        command.dialogue.text +
        '\n';
    }
  });

  return transcriptText;
};
