export default function toastSaga(err$, toast) {
  err$
    .doOnNext(() => toast({
      type: 'error',
      title: 'Oops, something went wrong',
      message: `Something went wrong, please try again later`
    }))
    .subscribe(err => console.error(err));
}
