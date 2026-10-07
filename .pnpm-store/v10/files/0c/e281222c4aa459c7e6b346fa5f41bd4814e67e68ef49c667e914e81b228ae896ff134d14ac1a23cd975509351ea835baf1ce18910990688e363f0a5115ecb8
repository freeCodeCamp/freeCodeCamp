// @flow
export type ServerError = Error & {|
  code: string,
|};

const serverErrorList = {
  EACCES: "You don't have access to bind the server to port {port}.",
  EADDRINUSE: 'There is already a process listening on port {port}.',
};

export default function serverErrors(err: ServerError, port: number): string {
  let desc = `Error: ${
    err.code
  } occurred while setting up server on port ${port.toString()}.`;

  if (serverErrorList[err.code]) {
    desc = serverErrorList[err.code].replace(/{port}/g, port);
  }

  return desc;
}
