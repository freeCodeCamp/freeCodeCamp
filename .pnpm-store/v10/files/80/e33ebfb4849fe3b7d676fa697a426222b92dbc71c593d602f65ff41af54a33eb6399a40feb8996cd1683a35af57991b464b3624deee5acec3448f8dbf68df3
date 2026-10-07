import process from 'node:process';
import onetime from 'onetime';
import {onExit} from 'signal-exit';

const terminal = process.stderr.isTTY
	? process.stderr
	: (process.stdout.isTTY ? process.stdout : undefined);

const restoreCursor = terminal ? onetime(() => {
	onExit(() => {
		terminal.write('\u001B[?25h');
	}, {alwaysLast: true});
}) : () => {};

export default restoreCursor;
